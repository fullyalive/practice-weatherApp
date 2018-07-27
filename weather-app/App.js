import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Weather from "./Weather";

export default class App extends React.Component {
  state = {
    isLoaded: true
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        {isLoaded ? (
          <Weather />
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>
              날씨 정보를 불러오고 있어요 \' _ '/
            </Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  loading: {
    flex: 1,
    backgroundColor: "#FDF6AA",
    justifyContent: "flex-end",
    alignItems: "center"
  },
  loadingText: {
    fontSize: 25,
    marginBottom: 100
  }
});
