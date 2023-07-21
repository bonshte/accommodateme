import React from 'react';
import "../styles/property.css"
interface Property {
  id: number;
  name: string;
  region: string;
  price: number;
  size: number;
  // Add other properties as needed
}

interface PropertyProps {
  property: Property;
}

const PropertyComponent: React.FC<PropertyProps> = ({ property }) => {
  const { id, name, region, price, size } = property;

  return (
    <div className="property-container">
      <h3>{name}</h3>
      <p>Region: {region}</p>
      <p>Price: ${price}</p>
      <p>Size: {size} sqft</p>
      {/* Display other property information here */}
    </div>
  );
};

export default PropertyComponent;