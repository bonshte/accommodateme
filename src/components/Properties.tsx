import React, { useContext } from 'react'
import { LandlordDashBoardContext } from '../context/LandlordDashboardContext'
import Property from './Property';

interface Prop {
  id: number;
  name: string;
  region: string;
  price: number;
  size: number;
  // Add other properties as needed
}

const Properties = ( ) => {
  const landlordContext = useContext(LandlordDashBoardContext);
  const {
    searchResults
  } = landlordContext!;

  return (
    <>
    {searchResults.map((prop : Prop) => (
      <Property key={prop.id} property={prop} />
    ))}
  </>

  )
}

export default Properties