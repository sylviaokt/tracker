import { useState, useEffect } from "react";
import {
  requestForegroundPermissionsAsync,
  watchPositionAsync,
  Accuracy,
} from "expo-location";
import { set } from "react-native-reanimated";

export default (shouldTrack, callback) => {
  const [err, setErr] = useState(null);

  useEffect(() => {
    let subscriber;
    const startWatching = async () => {
      try {
        const { granted } = await requestForegroundPermissionsAsync();
        subscriber = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callback
        );
        setSubscriber(sub);
        if (!granted) {
          throw new Error("Location permission not granted");
        } else {
          setErr(null);
        }
      } catch (e) {
        setErr(e);
      }
    };

    if (shouldTrack) {
      startWatching();
    } else {
      if (subscriber) {
        subscriber.remove();
      }
      subscriber = null;
    }
    return () => {
      if (subscriber) {
        subscriber.remove();
      }
    };
    // react checks if the array/object passed in [] is the exact same one, does not matter if the objects in the array changes or not
  }, [shouldTrack, callback]);

  return [err];
};
