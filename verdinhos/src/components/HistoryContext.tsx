// src/components/HistoryContext.tsx
import React, { createContext, useState, ReactNode } from 'react';

export interface HistoryRecord {
  tipo: string;
  date: string;
  time: string;
}

export interface HistoryContextProps {
  history: HistoryRecord[];
  addPonto: (record: HistoryRecord) => void;
  updateHistory: (updatedHistory: HistoryRecord[]) => void;
}

const HistoryContext = createContext<HistoryContextProps | undefined>(undefined);

export const HistoryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [history, setHistory] = useState<HistoryRecord[]>([]);

  const addPonto = (record: HistoryRecord) => {
    setHistory([...history, record]);
  };

  const updateHistory = (updatedHistory: HistoryRecord[]) => {
    setHistory(updatedHistory);
  };

  return (
    <HistoryContext.Provider value={{ history, addPonto, updateHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};

export default HistoryContext;
