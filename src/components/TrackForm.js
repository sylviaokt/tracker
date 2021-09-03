import React, { useState, useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";

import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = () => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    changeName,
  } = useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  return (
    <>
      <Spacer />
      <Input
        label="Create Track"
        placeholder="Enter Track Name"
        value={name}
        onChangeText={changeName}
        autoCapitalize="none"
        autoCurrect={false}
      />

      <Spacer>
        {recording ? (
          <Button title="Stop" onPress={stopRecording} />
        ) : (
          <Button title="Start Recording" onPress={startRecording} />
        )}
      </Spacer>

      <Spacer>
        {!recording && locations.length ? (
          <Button title="Save Recording" onPress={saveTrack} />
        ) : null}
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 10,
    marginBottom: 10,
  },
  link: {
    color: "blue",
  },
});

export default TrackForm;
