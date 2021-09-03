import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents
        // called when starting to navigate to this screen
        onWillFocus={clearErrorMessage}
        // called when user completes landing on this screen
        // onDidFocus={clearErrorMessage}
        // instant when start to navigate away from this screen
        onWillBlur={clearErrorMessage}
        // as soon as transition to other screen completes
        // onDidBlur={clearErrorMessage}
      />
      <AuthForm
        headerText="Sign in to Your Account"
        errorMessage={state.errorMessage}
        submitButtonText="Sign in"
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        text="Don't have an account? Sign up instead"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 250,
  },
});

export default SigninScreen;
