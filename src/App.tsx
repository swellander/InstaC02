import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
// import Header from "./components/header/header";

export default class App extends React.Component {
  render() {
    const { btnText, button, container, content } = styles;
    return (
      <View style={container}>
        <ImageBackground
          style={{ width: "100%", height: "100%" }}
          source={require("../login_page_bg.png")}
        >
          <View style={content}>
            <TouchableOpacity
              style={button}
              onPress={() => alert("Sams alert")}
            >
              <Text style={btnText}>Analyze</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center"
  },
  button: {
    display: "flex",
    borderRadius: 15,
    width: 100,
    height: 40,
    color: "white",
    backgroundColor: "#5162ce",
    justifyContent: "center",
    alignItems: "center"
  },
  btnText: {
    color: "white"
  },
  header: {
    flex: 1
  },
  content: {
    flex: 6,
    alignItems: "center",
    justifyContent: "center"
  }
});
