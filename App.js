import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";

export default function App() {
	return (
		<NavigationContainer>
			<StatusBar backgroundColor="#E06066" barStyles="light-content" />
			<Routes />
		</NavigationContainer>
	);
}
