// src/contexts/StoreContext.tsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import storeService, { StoreCategory } from '../services/storeService';

interface StoreContextType {
  storeData: StoreCategory[]; // 카테고리 배열
  loading: boolean;
  reloadStoreData: () => Promise<void>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider = ({ children }: { children: ReactNode }) => {
  const [storeData, setStoreData] = useState<StoreCategory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const loadStoreData = async () => {
    try {
      setLoading(true);
      const data = await storeService.getAllStores();
      setStoreData(data);
    } catch (error) {
      console.error('StoreContext 데이터 로딩 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadStoreData(); // 앱 시작 시 한 번 로딩
  }, []);

  return (
    <StoreContext.Provider value={{ storeData, loading, reloadStoreData: loadStoreData }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = (): StoreContextType => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore는 StoreProvider 내부에서만 사용해야 합니다.');
  }
  return context;
};