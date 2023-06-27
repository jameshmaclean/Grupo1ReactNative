import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/routes/Navigation";

import AnimatedLottieView from "lottie-react-native";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {loaded === true ? (
        <View style={{ flex: 1 }}>
          <NavigationContainer>
            <Navigation />
          </NavigationContainer>
          <StatusBar style="auto" />
        </View>
      ) : (
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#DDC5BE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <AnimatedLottieView
            source={require("./src/assets/splash/splash.json")}
            autoPlay
            loop={false}
            style={{ width: 297, height: 297 }}
            resizeMode="cover"
            onAnimationFinish={() => {
              setLoaded(true);
              console.log("animation finished");
            }}
          />
        </View>
      )}
    </View>
  );
}
