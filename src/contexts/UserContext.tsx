import React, { createContext, useState, useContext, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../services/userService';
import userService from '../services/userService'; // 👈 서버에서 user 조회용 API 필요
import { getTotalStudyDays } from '../utils/heatmapUtils';

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
  refreshUser: () => Promise<void>; // 👈 상태 갱신용 함수 추가
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const refreshUser = async () => {
    try {
      const userInfo = await userService.getMe(); // 사용자 정보
      
      if (userInfo) {
        const heatmap = await userService.getStudyHeatmap(); // 잔디
        const studyDays = getTotalStudyDays(heatmap); // 학습일수
        const finalUserData = { ...userInfo, heatmap, studyDays };
        
        setUser(finalUserData);
      } else {
        setUser(null);
      }
    } catch (e) {
      console.warn('⚠️ [UserContext] 유저 정보 갱신 실패:', e);
      setUser(null);
    }
  };

  // user 상태 변경 추적
  useEffect(() => {

  }, [user]);

  useEffect(() => {
    (async () => {
      await refreshUser();
      setLoading(false);
    })();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading, refreshUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser must be used within a UserProvider');
  return context;
};