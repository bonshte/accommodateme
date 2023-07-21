import React, { useContext } from 'react'
import { LandlordDashBoardContext } from '../context/LandlordDashboardContext';
import '../styles/propertiesNav.css'

const PropertiesNav = () => {
    const browseContext = useContext(LandlordDashBoardContext);
    const {
        propertySearch,
        setPropertySearch,
    } = browseContext!;
  return (
    <form className="properties-search-form"
        onSubmit={(e) => e.preventDefault()}
    >   
        <input type="text"
                id="properties-search-input"
                placeholder="Search"
                value={propertySearch}
                onChange={(e) => setPropertySearch(e.target.value)}
        />

        

    </form>
  )
}

export default PropertiesNav