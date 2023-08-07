import React, { useContext } from 'react'
import '../styles/properties.css'
import { RecommendedAdsContext } from '../context/RecommendedAdsContext'
import AdMini from './AdMini';
import { Ad } from './Ad';
const Properties = () => {

  const recommendedAdsContext = useContext(RecommendedAdsContext);
  const {
    recommendedAds
  } = recommendedAdsContext!;

  
  const sampleAds: Ad[] = [
    {
      adId: 1,
      town: "Town1",
      neighbourhood: "Neighbourhood1",
      district: "District1",
      accommodationType: "Flat",
      price: 500,
      currency: "USD",
      propertyProvider: "Property Provider1",
      size: 120,
      floor: 2,
      totalFloors: 10,
      gasProvided: true,
      thermalPowerPlantProvided: true,
      forSale: false,
      features: ["Feature1", "Feature2"],
      phoneNumber: "+1 123 456 7890",
      yearBuilt: 2000,
      link: "https://www.imot.bg/pcgi/imot.cgi?act=5&adv=1b169078838871579&slink=9l5vme&f1=1&fe7=1",
      construction: "Brick",
      description: "A beautiful flat in Town1",
      imageUrls: ["https://imotstatic3.focus.bg/imot/photosimotbg/2/655/2b167061298617655_Ks.jpg"],
    },
    {
      adId: 2,
      town: "Town2",
      neighbourhood: null,
      district: null,
      accommodationType: "House",
      price: 1500,
      currency: "USD",
      propertyProvider: "Property Provider2",
      size: 240,
      floor: 1,
      totalFloors: 1,
      gasProvided: false,
      thermalPowerPlantProvided: false,
      forSale: true,
      features: ["Feature3", "Feature4"],
      phoneNumber: "+1 987 654 3210",
      yearBuilt: 1985,
      link: "https://www.imot.bg/pcgi/imot.cgi?act=5&adv=1b169078838871579&slink=9l5vme&f1=1&fe7=1",
      construction: "Wood",
      description: "A beautiful house in Town2",
      imageUrls: ["https://imotstatic3.focus.bg/imot/photosimotbg/2/655/2b167061298617655_c1.jpg"],
    },
    {
      adId: 1,
      town: "Town1",
      neighbourhood: "Neighbourhood1",
      district: "District1",
      accommodationType: "Flat",
      price: 500,
      currency: "USD",
      propertyProvider: "Property Provider1",
      size: 120,
      floor: 2,
      totalFloors: 10,
      gasProvided: true,
      thermalPowerPlantProvided: true,
      forSale: false,
      features: ["Feature1", "Feature2"],
      phoneNumber: "+1 123 456 7890",
      yearBuilt: 2000,
      link: "https://www.imot.bg/pcgi/imot.cgi?act=5&adv=1b169078838871579&slink=9l5vme&f1=1&fe7=1",
      construction: "Brick",
      description: "A beautiful flat in Town1",
      imageUrls: ["https://example.com/images/property1.jpg"],
    },
    {
      adId: 1,
      town: "Town1",
      neighbourhood: "Neighbourhood1",
      district: "District1",
      accommodationType: "Flat",
      price: 500,
      currency: "USD",
      propertyProvider: "Property Provider1",
      size: 120,
      floor: 2,
      totalFloors: 10,
      gasProvided: true,
      thermalPowerPlantProvided: true,
      forSale: false,
      features: ["Feature1", "Feature2"],
      phoneNumber: "+1 123 456 7890",
      yearBuilt: 2000,
      link: "https://www.imot.bg/pcgi/imot.cgi?act=5&adv=1b169078838871579&slink=9l5vme&f1=1&fe7=1",
      construction: "Brick",
      description: "A beautiful flat in Town1",
      imageUrls: ["https://cdn3.focus.bg/imot/photosimotbg/2/949/big/2b168608034768949_GP.jpg"],
    }
  
  ];
  return (
    <div className="properties-content">
      <div className="recommended-ads">
      {recommendedAds.map((ad, index) => (
        <AdMini key={index} ad={ad} />
      ))}
      </div>
    </div>
  )
}

export default Properties