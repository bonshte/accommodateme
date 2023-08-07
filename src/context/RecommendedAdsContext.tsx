import React, { createContext, useState, ReactNode } from 'react';
import { Ad } from '../components/Ad';

interface RecommendedAdsContextProps {
  recommendedAds: Ad[];
  setRecommendedAds: React.Dispatch<React.SetStateAction<Ad[]>>;
}

interface RecommendedAdsProviderProps {
  children: ReactNode;
}

export const RecommendedAdsProvider: React.FC<RecommendedAdsProviderProps> = ({ children }) => {
  const [recommendedAds, setRecommendedAds] = useState<Ad[]>([]);
  
  const value: RecommendedAdsContextProps = {
    recommendedAds,
    setRecommendedAds,
  };

  return (
    <RecommendedAdsContext.Provider value={value}>
      {children}
    </RecommendedAdsContext.Provider>
  );
};

export const RecommendedAdsContext = createContext<RecommendedAdsContextProps | null>(null);
