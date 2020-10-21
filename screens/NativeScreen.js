import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Platform } from 'react-native';
import * as Location from 'expo-location';

const NativeScreen = () => <Text>LOL</Text>

// function NativeScreen() {
//   const [location, setLocation] = useState(null);
//   const [errorMsg, setErrorMsg] = useState(null);

//   useEffect(() => {
//     (async () => {
//       try {
//       let { status } = await Location.requestPermissionsAsync();
//       } catch (e) {
//         setErrorMsg(e)
//       }
//       if (status !== 'granted') {
//         setErrorMsg('Permission to access location was denied');
//       }

//       let location = await Location.getCurrentPositionAsync({});
//       setLocation(location);
//     })();
//   }, []);

//   let text = 'Waiting2..';
//   if (errorMsg) {
//     text = errorMsg;
//   } else if (location) {
//     text = JSON.stringify(location);
//   }

//   return (
//     <View style={styles.container}>
//       <Text>{text}</Text>
//     </View>
//   );
// };

export default NativeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
