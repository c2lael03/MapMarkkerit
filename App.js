import { StatusBar } from 'expo-status-bar';
import { PanResponder, StyleSheet, Text, View } from 'react-native';
import Map from './screens/Map';
import { useState } from 'react';
import MainAppBar from './components/MainAppBar';
import { PaperProvider} from 'react-native-paper';
import * as Location from 'expo-location';
import Constants from 'expo-constants';


const settings = {
  backGround: '#00a484'
}

const icons = {
  location_not_know: 'crosshairs',
  location_searching: 'crosshairs-question',
  location_found: 'crosshairs-gps'
}

export default function App() {
  const [icon, setIcon] = useState(icons.location_not_know)
  const [location, setLocation] = useState({
    latitude: 65.0000,
    longitude: 25.4800,
    latitudeDelta: 0.00922,
    longitudeDelta: 0.00421, 
}) 


const getUserPosition = async () => {
  setIcon(icons.location_searching)
  let { status } = await Location.requestForegroundPermissionsAsync()

  try {
      if (status !== 'granted') {
          console.log("Geolocation not granted") 
          return
      }

      const position = await Location.getCurrentPositionAsync({accuracy: Location.Accuracy.High})
      setLocation({...location,"latitude":position.coords.latitude,"longitude":position.coords.longitude})
      setIcon(icons.location_found) 
  } catch (error) {
      console.log(error)
  }
}

  return (
    <PaperProvider>
      <MainAppBar 
    title="Map"
    backgroundColor={settings.backGround}
    icon={icon}
    getUserPosition={getUserPosition}
      />
      <Map location={location}/>
    </PaperProvider>


  );
}