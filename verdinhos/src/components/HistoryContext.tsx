import { createContext, useState, useEffect } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem("pontosBatidos");
      if (storedHistory) {
        const parsedHistory = JSON.parse(storedHistory);
        if (Array.isArray(parsedHistory)) {
          setHistory(parsedHistory);
        } else {
          console.warn("Unexpected data format in localStorage");
          localStorage.removeItem("pontosBatidos");
        }
      }
    } catch (e) {
      console.error("Error reading from localStorage", e);
      localStorage.removeItem("pontosBatidos");
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("pontosBatidos", JSON.stringify(history));
    } catch (e) {
      console.error("Error writing to localStorage", e);
    }
  }, [history]);

  const addPonto = (newRecord, newHistory = null) => {
    const updatedHistory = newHistory 
      ? newHistory.slice(0, 4) 
      : [newRecord, ...history].slice(0, 4);
  
    setHistory(updatedHistory);
  };

  return (
    <HistoryContext.Provider value={{ history, addPonto }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
