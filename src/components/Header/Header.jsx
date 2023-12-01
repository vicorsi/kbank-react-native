import React from "react";
import {
	View,
	StyleSheet,
	Text,
	StatusBar,
	TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

const statusBarHeight = StatusBar.currentHeight
	? StatusBar.currentHeight + 22
	: 64;

export default function Header({ name }) {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.headerContent}>
				<TouchableOpacity
					activeOpacity={0.7}
					style={styles.buttonIcon}
 				>
					<Ionicons name="exit-outline" size={23} color="#FFF" />
				</TouchableOpacity>
				<Text style={styles.headerName}>Olá {name}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#E06066",
		paddingTop: statusBarHeight,
		flexDirection: "row",
		paddingStart: 16,
		paddingEnd: 16,
		borderBottomLeftRadius: 3,
		borderBottomRightRadius: 3,
	},
	headerContent: {
		flex: 1,
		alignItems: "center",
		flexDirection: "row-reverse",
		justifyContent: "space-between",
		paddingBottom: 45,
		bottom: 1,
	},
	headerName: {
		fontSize: 18,
		color: "#FFF",
		fontWeight: "bold",
	},
});
