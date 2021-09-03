import React, { useContext } from "react";
import { Text, StyleSheet, ActivityIndicator, Dimensions } from "react-native";
import MapView, { Polyline, Circle } from "react-native-maps";

import { Context as LocationContext } from "../context/LocationContext";

const Map = () => {
  const {
    state: { currentLocation, locations },
  } = useContext(LocationContext);

  if (!currentLocation) {
    return <ActivityIndicator size="large" style={{ marginTop: 200 }} />;
  }

  return (
    <MapView
      style={styles.map}
      initialRegion={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
      region={{
        ...currentLocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }}
    >
      <Circle
        center={currentLocation.coords}
        radius={40}
        strokeColor="rgba(158, 158, 255, 1.0)"
        fillColor="rgba(158, 158, 255, 0.3)"
      />
      <Polyline
        coordinates={locations.map((loc) => loc.coords)}
        lineDashPattern={[1]}
      />
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("screen").height * 0.6,
  },
});

export default Map;