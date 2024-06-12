import React, { createContext, useState, useEffect, ReactNode } from 'react';

interface HistoryRecord {
  tipo: string;
  date: string;
  time: string;
}

interface HistoryContextProps {
  history: HistoryRecord[];
  addPonto: (newRecord: HistoryRecord, newHistory?: HistoryRecord[] | null) => void;
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined);

interface HistoryProviderProps {
  children: ReactNode;
}

export const HistoryProvider: React.FC<HistoryProviderProps> = ({ children }) => {
  const [history, setHistory] = useState<HistoryRecord[]>([]);

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

  const addPonto = (newRecord: HistoryRecord, newHistory: HistoryRecord[] | null = null) => {
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
