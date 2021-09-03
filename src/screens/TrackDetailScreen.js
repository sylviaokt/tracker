import React, { useContext } from "react";
import { Dimensions, StyleSheet, Text } from "react-native";
import MapView, { Polyline } from "react-native-maps";

import { Context as TrackContext } from "../context/TrackContext";

const TrackDetailScreen = ({ navigation }) => {
  const { state } = useContext(TrackContext);
  const _id = navigation.getParam("_id");

  const track = state.find((t) => t._id === _id);
  const initialCoords = track.locations[0].coords;

  return (
    <>
      <Text style={{ fontSize: 48 }}>{track.name}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Polyline
          coordinates={track.locations.map((loc) => loc.coords)}
          lineDashPattern={[1]}
        />
      </MapView>
    </>
  );
};

TrackDetailScreen.navigationOptions = {
  title: "",
};
const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("screen").height * 0.6,
  },
});

export default TrackDetailScreen;
