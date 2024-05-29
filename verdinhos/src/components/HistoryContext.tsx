import React, { createContext, useState, useEffect } from 'react';

const HistoryContext = createContext();

export const HistoryProvider = ({ children }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = localStorage.getItem("pontosBatidos");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("pontosBatidos", JSON.stringify(history));
  }, [history]);

  const addPonto = (newRecord) => {
    setHistory((prevHistory) => {
      const updatedHistory = [newRecord, ...prevHistory];
      return updatedHistory.slice(0, 5); // Mantém apenas os últimos 5 registros
    });
  };

  return (
    <HistoryContext.Provider value={{ history, addPonto }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
