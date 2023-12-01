import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Extrato from "../../pages/Extrato/Extrato";
import { useNavigation } from "@react-navigation/native";

export default function Saldo({ saldo }) {
	const navigation = useNavigation();

	const [mostrarSaldo, setMostrarSaldo] = useState(false);

	const toggleSaldo = () => {
		setMostrarSaldo(!mostrarSaldo);
	};

	return (
		<View style={styles.container}>
			<View style={styles.item}>
				<Text style={styles.itemTitle}>Saldo</Text>
				<View style={styles.saldoArea}>
					{!mostrarSaldo ? (
						<>
							<Ionicons
								name="eye-off-outline"
								size={24}
								color="#E06066"
								style={{ marginRight: 10 }}
								onPress={toggleSaldo}
							/>
							<Text style={styles.saldo}>******</Text>
						</>
					) : (
						<>
							<Ionicons
								name="eye-outline"
								size={24}
								color="#E06066"
								style={{ marginRight: 10 }}
								onPress={toggleSaldo}
							/>
							<Text style={styles.moeda}>R$ </Text>
							<Text style={styles.saldo}>{saldo}</Text>
						</>
					)}
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("Extrato")}
				>
					<Text
						style={{
							marginLeft: 250,
							bottom: 25,
							fontWeight: "500",
							fontSize: 15,
						}}
					>
						Extrato
					</Text>
					<Ionicons
						name="document-text-outline"
						size={24}
						color="#E06066"
						style={{ marginLeft: 220, bottom: 50 }}
					/>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FFF",
		flexDirection: "row",
		justifyContent: "space-between",
		paddingStart: 18,
		paddingEnd: 18,
		marginTop: -20,
		marginStart: 14,
		marginEnd: 14,
		borderRadius: 10,
		paddingTop: 18,
		paddingBottom: 18,
		borderColor: "black",
		borderWidth: 0.2,
		zIndex: 99,
	},
	itemTitle: {
		fontSize: 18,
		fontWeight: "500",
	},
	saldoArea: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 10,
		margin: 2,
	},
	moeda: {
		fontSize: 18,
		fontWeight: "600",
	},
	saldo: {
		fontSize: 18,
		fontWeight: "600",
	},
});
