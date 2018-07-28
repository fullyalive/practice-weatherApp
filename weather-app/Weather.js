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
    colors: ["#00C6FB", "#005BEA"],
    title: "화창",
    subtitle: "선크림을 바르세요",
    icon: "weather-sunny"
  },
  Tunderstorm: {
    colors: ["#00C6FB", "#005BEA"],
    title: "천둥번개",
    subtitle: "낙뢰 조심, 비조심!",
    icon: "weather-lightning"
  },
  Clouds: {
    colors: ["#00C6FB", "#005BEA"],
    title: "구름 많아요",
    subtitle: "우울 조심!",
    icon: "weather-cloudy"
  },
  Snow: {
    colors: ["#00C6FB", "#005BEA"],
    title: "눈",
    subtitle: "눈길 조심!",
    icon: "weather-sonwy"
  },
  Drizzle: {
    colors: ["#00C6FB", "#005BEA"],
    title: "이슬비",
    subtitle: "옷이 젖지 않도록!",
    icon: "weather-hail"
  },
  Haze: {
    colors: ["#00C6FB", "#005BEA"],
    title: "안개",
    subtitle: "시야를 확보하세요",
    icon: "weather-fog"
  },
  Mist: {
    colors: ["#00C6FB", "#005BEA"],
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
          size={144}
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
    backgroundColor: "transparent"
  },
  temp: {
    fontSize: 48,
    backgroundColor: "transparent",
    color: "white",
    marginTop: 10
  },
  lower: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    paddingLeft: 25,
    marginBottom: 80
  },
  title: {
    fontSize: 38,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 10,
    fontWeight: "300"
  },
  subtitle: {
    fontSize: 24,
    backgroundColor: "transparent",
    color: "white",
    marginBottom: 24
  }
});
