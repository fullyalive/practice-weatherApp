import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import PropTypes from "prop-types";

const weatherCases = {
  Rain: {
    colors: ["#00C6FB", "#005BEA"],
    title: "비",
    subtitle: "우산을 챙기세요",
    icon: "weather-pouring"
  },
  Clear: {
    colors: ["#FEF253", "#FF7300"],
    title: "화창",
    subtitle: "선크림을 바르세요",
    icon: "weather-sunny"
  },
  Tunderstorm: {
    colors: ["#00ECBC", "#007ADF"],
    title: "천둥번개",
    subtitle: "낙뢰 조심, 비조심!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#D7D2CC", "#304352"],
    title: "구름 많아요",
    subtitle: "우울 조심!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#7DE2FC", "#B9B6E5"],
    title: "눈",
    subtitle: "눈길 조심!",
    icon: "weather-sonwy"
  },
  Drizzle: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "이슬비",
    subtitle: "옷이 젖지 않도록!",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#89F7FE", "#66A6FF"],
    title: "안개",
    subtitle: "시야를 확보하세요",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#D7D2CC", "#304352"],
    title: "안개",
    subtitle: "시야를 확보하세요",
    icon: "weather-fog"
  }
};

{
  console.log(weatherCases);
}
function Weather({ weatherName, temp }) {
  return (
    <LinearGradient
      colors={weatherCases[weatherName].colors}
      style={styles.container}
    >
      <View style={styles.upper}>
        <MaterialCommunityIcons
          color="white"
          size={120}
          name={weatherCases[weatherName].icon}
        />
        <Text style={styles.temp}>{temp} &deg;</Text>
      </View>
      <View style={styles.lower}>
        <Text style={styles.title}>{weatherCases[weatherName].title}</Text>
        <Text style={styles.subtitle}>{weatherCases[weatherName].subtitle}</Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  weatherName: PropTypes.string.isRequired
};

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  upper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    marginTop: 80
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
  },
  lower: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 80
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "400"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
