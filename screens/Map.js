
import { View, Text, StyleSheet, SafeAreaView, Platform } from 'react-native';
import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps'; // "1.14.0";


export default function Map({location}) {
    const [marker, setMarker] = useState(null)

    const showMarker = (e) => {
    const coords = e.nativeEvent.coordinate
    setMarker(coords)
    }

  return (
    <SafeAreaView style={styles.container}>
   <MapView
   style={styles.map}
   region={location}
   //mapType='satellite'
   onLongPress={showMarker}
   >
    {
        marker &&
        <Marker
            title="My marker"
            coordinate={{latitude: marker.latitude,longitude: marker.longitude}}
        />
        }
   </MapView>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //marginTop: 20, 

    },
    map: {
        height: '100%',
        width: '100%' 
    },
  });