import React from 'react';
import { Ad } from './Ad';
import '../styles/adMini.css'

interface AdMiniProps {
  ad: Ad;
}

const AdMini: React.FC<AdMiniProps> = ({ ad }) => {
    const imageAvailable = ad.imageUrls && ad.imageUrls.length > 0;

    const location = [ad.town, ad.district, ad.neighbourhood].filter(Boolean).join(', ');
  
    const handleAdClick = () => {
        if (ad.link) {
      window.open(ad.link, "_blank"); // this will open the ad link in a new tab
        }
    }
  
    return (
        <div className="ad-mini" onClick={handleAdClick}> 
          <div className="image-mini-container">
          {imageAvailable ? (
            <img src={ad.imageUrls![0]} alt="Ad" className="ad-mini-image" />
          ) : (
            null
          )}
          </div>
          <div className="ad-mini-info">
            <div className="mini-location">{location}</div>
            <div className="mini-price">{`${ad.price} ${ad.currency}`}</div>
            <div className="mini-accommodation-type">{ad.accommodationType}</div>
            {ad.propertyProvider && <div className="mini-property-provider">{ad.propertyProvider}</div>}
          </div>
        </div>
      );
};

export default AdMini;

