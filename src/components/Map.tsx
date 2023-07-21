import React, { useEffect, Fragment, useContext } from 'react'
import { useState, useMemo, useCallback, useRef } from 'react'
import {
    GoogleMap,
    Marker,
    DirectionsRenderer,
    Circle,
    MarkerClusterer
} from "@react-google-maps/api"
import '../styles/map.css'
import Places from './Places'
import { BrowseContext } from '../context/BrowseContext'
type LatLngLiteral = google.maps.LatLngLiteral;
//tova e za rezultatite ot directions
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const Map = () => {
    const browseContext = useContext(BrowseContext);
    const {
        center,
        setCenter,
        pin,
        setPin,
        directions,
        setDirections
    } = browseContext!;

    const mapRef = useRef<google.maps.Map>();
    //това е къде ми е центрирана картата
    const options = useMemo<MapOptions>
        (
            () => ({
                mapId: "d6b3bd8daef3c3c5",
                disableDefaultUI: true,
                clickableIcons: false,
                minZoom: 2,
            }),
            []
        );
    
    const onLoad = useCallback(
        (map: google.maps.Map) => {
            mapRef.current = map;
        }, []
    );
    
    // const fetchDirections = (house: LatLngLiteral) => {
    //     if (!office) return;

    //     const service = new google.maps.DirectionsService();
    //     service.route(
    //         {
    //             origin: house,
    //             destination: office,
    //             travelMode: google.maps.TravelMode.DRIVING
    //         },
    //         (result, status) => {
    //             if (status === "OK" && result) {
    //                 setDirections(result);
    //             }
    //         }
    //     );
    // };
    //всеки път когато се промени center да местим картата да центрира там

    useEffect(() => {
        mapRef.current?.panTo(center);
    }, [center]);

    const handleMouseClick = (e: google.maps.MapMouseEvent) => {
        if (e.latLng)
        setPin({lat: e.latLng?.lat() , lng: e.latLng?.lng()});
      };
   

    return (
        <div className="map-container">
            
            <div className="map">
                <GoogleMap
                zoom={15}
                center={center}
                mapContainerClassName="map-container"
                options={options}
                onLoad={onLoad}
                onClick={handleMouseClick}
            
                >
                    {pin  && <Marker position={pin} />}


                </GoogleMap>
            </div>
            <div className="map-controls">
                <Places setPin={
                    (position: LatLngLiteral) => {
                        
                        setPin && setPin(position);
                        setCenter && setCenter(position);
                    }
                } />
            </div>
        </div>
    )
}

export default Map