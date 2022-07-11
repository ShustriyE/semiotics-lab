import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react';

//@ts-ignore
const AnyReactComponent = ({text, lat, lng}) => (<div>{text}</div>);

const MyMap = () => {
    const center = {
        lat: 59.95,
        lng: 30.33
    };
    const zoom = 11;
    return (
            // Important! Always set the container height explicitly
            <div style={{height: '100vh', width: '100%'}}>
                {/*@ts-ignore*/}
                <GoogleMapReact
                    bootstrapURLKeys={{key: 'AIzaSyCGGQ4IfVJbPcg63cA-uHTtkzxQetzbaCc'}}
                    defaultCenter={center}
                    defaultZoom={zoom}
                >
                    <AnyReactComponent

                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );

}


export default MyMap;