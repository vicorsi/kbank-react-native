import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { ContentProvider } from "./src/Context/Content";

export default function App() {
	return (
		<NavigationContainer>
			<ContentProvider>
				<StatusBar backgroundColor="#E06066" barStyles="light-content" />
				<Routes />
			</ContentProvider>
		</NavigationContainer>
	);
}
