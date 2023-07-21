import React, { useContext } from 'react'
import axios from '../api/axios'
import Properties from '../components/Properties'
import '../styles/landlordDashboard.css'
import { LandlordDashBoardContext, LandlordDashBoardProvider } from '../context/LandlordDashboardContext'
import PropertiesNav from '../components/PropertiesNav'
import { NavLink } from 'react-router-dom'
const LandlordDashboard = () => {
  const dashboardContext = useContext(LandlordDashBoardContext);
  const {
    propertySearch,
    properties,
    searchResults
  } = dashboardContext!;

  return (
    
      <div className="landlord-dashboard-container">
        <div className="analitycs-container">
        analitycs container
        </div>
        <div className="ads-container">
          Ads container
        </div>
       
        <PropertiesNav />
        
        <div className="properties-container">
          
          {searchResults.length ? (
            <Properties />
          ) :  (
            <div className="no-properties">
              No properties
            </div>
          )}
          
          <NavLink className="property-container ad-property"  to="properties">
            Add new Property
            </NavLink>
        </div>
      </div>
  
  )
}

export default LandlordDashboard