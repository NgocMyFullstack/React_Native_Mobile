import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import MapView from "react-native-maps";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons } from "@expo/vector-icons";

const LocationSearch = () => {
  const [location, setLocation] = useState({
    latitude: 10.8306805,
    longitude: 106.774999,
    latitudeDelta: 0.5,
    longitudeDelta: 0.02,
  });

  return (
    <View style={{ flex: 1 }}>
      <MapView showsUserLocation={true} style={styles.map} region={location} />
      {/* <GooglePlacesAutocomplete
                placeholder='Search or move the map'
                fetchDetails={true}
                onPress={(data, details) => {
                    const point = details?.geometry?.location;
                    if (!point) return;
                    setLocation({
                        ...location,
                        latitude: point.lat,
                        longitude: point.lng,
                    });
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
                    language: 'vi',
                }}
                renderLeftButton={() => (
                    <View style={styles.boxIcon}>
                        <Ionicons name='search-outline' size={24} />
                    </View>
                )}
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        backgroundColor: '#fafbfc',
                        paddingLeft: 35,
                        borderRadius: 10,
                    },
                    textInputContainer: {
                        padding: 8,
                        backgroundColor: '#d6d6d6',
                    },
                }}
            /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  absoluteBox: {
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  button: {
    padding: 16,
    margin: 16,
    alignItems: "center",
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  boxIcon: {
    position: "absolute",
    left: 15,
    top: 18,
    zIndex: 1,
  },
});

export default LocationSearch;
