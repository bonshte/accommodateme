import React, { useEffect, useState } from 'react'
import '../styles/ad.css'
export interface Ad {
    adId: number | null;
    town: string;
    neighbourhood: string | null;
    district: string | null;
    accommodationType: string;
    price: number;
    currency: string;
    propertyProvider: string | null;
    size: number | null;
    floor: number | null;
    totalFloors: number | null;
    gasProvided: boolean | null;
    thermalPowerPlantProvided: boolean | null;
    forSale: boolean | null;
    features: string[] | null;
    phoneNumber: string | null;
    yearBuilt: number | null;
    link: string | null;
    construction: string | null;
    description: string | null;
    imageUrls: string[] | null;
}


interface AdProps {
    ad: Ad;
}

const Ad: React.FC<AdProps> = ({ ad }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const imageInterval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % ((ad.imageUrls ? ad.imageUrls.length : 0) || 1));
        }, 5000);
        return () => clearInterval(imageInterval);
    }, [ad.imageUrls]);
      return (
        <div className="ad-card">
            <h2 className="ad-title">{ad.accommodationType || 'No Information'} in {ad.town || 'No Information'}, {ad.district || 'No Information'}</h2>
            <p className="ad-details">Price: {ad.price || 'No Information'} {ad.currency || 'No Information'}</p>
            <p className="ad-details">Size: {ad.size || 'No Information'} sqm</p>
            <p className="ad-details">Floor: {ad.floor || 'No Information'}/{ad.totalFloors || 'No Information'}</p>
            <p className="ad-details">Property Provider: {ad.propertyProvider || 'No Information'}</p>
            <p className="ad-details">{ad.gasProvided ? 'Gas Provided' : 'No Gas'}</p>
            <p className="ad-details">{ad.thermalPowerPlantProvided ? 'Thermal Power Plant Provided' : 'No Thermal Power Plant'}</p>
            <p className="ad-details">{ad.forSale ? 'For Sale' : 'Not For Sale'}</p>
            <p className="ad-details">Built in: {ad.yearBuilt || 'No Information'}</p>
            <p className="ad-details">Construction: {ad.construction || 'No Information'}</p>
            <p className="ad-details">Description: {ad.description || 'No Information'}</p>
            <p className="ad-details">Features:</p>
            <ul className="ad-features">
                {ad.features && ad.features.length > 0 ? ad.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                )) : <li>No Information</li>}
            </ul>
            <p className="ad-details">Contact Number: {ad.phoneNumber || 'No Information'}</p>
            <a href={ad.link || '#'} className="ad-link">More Information</a>
            <div className="ad-imageContainer">
                {ad.imageUrls && ad.imageUrls.length > 0 
                    ? <img className="ad-image" src={ad.imageUrls[currentImageIndex]} alt={`Ad Image ${currentImageIndex + 1}`} /> 
                    : <p>No Images</p>}
            </div>
        </div>
    );
        
}

export default Ad