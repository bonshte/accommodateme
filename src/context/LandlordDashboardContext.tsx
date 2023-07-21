import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define the Property type (you can customize this based on your actual Property type)
interface Prop {
  id: number;
  name: string;
  region: string;
  price: number;
  size: number;
  // Add other properties as needed
}

// Define the context interface with the required states and their setters
interface LandlordDashBoardContextProps {
  propertySearch: string;
  setPropertySearch: React.Dispatch<React.SetStateAction<string>>;
  properties: Prop[];
  setProperties: React.Dispatch<React.SetStateAction<Prop[]>>;
  searchResults: Prop[];
  setSearchResults: React.Dispatch<React.SetStateAction<Prop[]>>;
  
}

// Create the LandlordDashBoardContext
export const LandlordDashBoardContext = createContext<LandlordDashBoardContextProps | null>(null);

// Create the LandlordDashBoardProvider component
interface LandlordDashBoardProviderProps {
  children: ReactNode;
}

export const LandlordDashBoardProvider: React.FC<LandlordDashBoardProviderProps> = ({ children }) => {
  const [propertySearch, setPropertySearch] = useState<string>("");
  const [properties, setProperties] = useState<Prop[]>([]);
  
  const hardcodedProperties: Prop[] = [
    {
      id: 1,
      name: 'Property 1',
      region: 'Region A',
      price: 100000,
      size: 1500,
    },
    {
      id: 2,
      name: 'Property 2',
      region: 'Region B',
      price: 85000,
      size: 1200,
    },
    {
      id: 2,
      name: 'Property 2',
      region: 'Region C',
      price: 85000,
      size: 1200,
    },
    {
      id: 2,
      name: 'Property 2',
      region: 'Region D',
      price: 85000,
      size: 1200,
    },
  ];
  const [searchResults, setSearchResults] = useState<Prop[]>(hardcodedProperties);

  // You can define any other utility functions related to the context here

  // Merge the context values with the state and update functions
  const contextValues: LandlordDashBoardContextProps = {
    propertySearch,
    setPropertySearch,
    properties,
    setProperties,
    searchResults,
    setSearchResults,
  };

  return (
    <LandlordDashBoardContext.Provider value={contextValues}>
      {children}
    </LandlordDashBoardContext.Provider>
  );
};