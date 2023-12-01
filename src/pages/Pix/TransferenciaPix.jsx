import React from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

function TransferenciaPix() {
	const navigation = useNavigation();
	return (
		<>
			<Header name=", informe a chave pix" />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Menu")}
			>
				<Text style={styles.buttonTxt}>Transferir</Text>
			</TouchableOpacity>
			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>Chave Pix</Text>
				<TextInput
					keyboardType="numeric"
					placeholder="Informe a chave para transferencia"
					style={styles.input}
				/>

				<Text style={styles.label}>Valor</Text>
				<TextInput
					keyboardType="numeric"
					placeholder="R$ 0,00"
					style={styles.input}
				/>

				<TouchableOpacity style={styles.confirmarBtn}>
					<Text style={styles.confirmarTxt}>Confirmar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</>
	);
}
export default TransferenciaPix;

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		borderRadius: 50,
		backgroundColor: "#FFF",
		paddingVertical: 8,
		width: "60%",
		alignSelf: "center",
		bottom: "15%",
		alignItems: "center",
		justifyContent: "center",
	},
	buttonTxt: {
		fontSize: 18,
		fontWeight: "bold",
		color: "#fff",
	},
	containerForm: {
		flex: 1,
		backgroundColor: "#FFF",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingStart: "5%",
		paddingEnd: "5%",
	},
	label: {
		fontSize: 20,
		marginTop: 28,
	},
	input: {
		borderBottomWidth: 1,
		height: 40,
		marginBottom: 12,
		fontSize: 16,
	},
	confirmarBtn: {
		backgroundColor: "#E06066",
		width: "100%",
		borderRadius: 20,
		paddingVertical: 8,
		marginTop: 200,
		justifyContent: "center",
		alignItems: "center",
		color: "#fff",
	},
	confirmarTxt: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
	},
});
