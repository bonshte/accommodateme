import React, { createContext, useState, useContext, ReactNode } from 'react';

type LatLngLiteral = google.maps.LatLngLiteral;

interface BrowseContextProps {
  center: LatLngLiteral;
  setCenter: React.Dispatch<React.SetStateAction<LatLngLiteral>>;
  pin: LatLngLiteral | undefined;
  setPin: React.Dispatch<React.SetStateAction<LatLngLiteral | undefined>>;
  directions: google.maps.DirectionsResult | undefined;
  setDirections: React.Dispatch<React.SetStateAction<google.maps.DirectionsResult | undefined>>;
  //need to  add an array for the places returned
}

export const BrowseContext = createContext<BrowseContextProps | null>(null);

export const BrowseContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [center, setCenter] = useState<LatLngLiteral>({ lat: 42.6977, lng: 23.3219 });
  const [pin, setPin] = useState<LatLngLiteral | undefined>();
  const [directions, setDirections] = useState<google.maps.DirectionsResult | undefined>();

  const value: BrowseContextProps = {
    center,
    setCenter,
    pin,
    setPin,
    directions,
    setDirections,
  };

  return <BrowseContext.Provider value={value}>{children}</BrowseContext.Provider>;
};

