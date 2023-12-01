import React from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

function Emprestimos() {
	const navigation = useNavigation();
	return (
		<>
			<Header name=", faça agora um empréstimo" />
			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>Valor que será emprestado</Text>
				<TextInput
					keyboardType="numeric"
					placeholder="R$ 0,00"
					style={styles.input}
				/>

				<Text style={styles.label}>Quantidades de parcelas</Text>
				<TextInput
					keyboardType="numeric"
					placeholder="0"
					style={styles.input}
				/>

				<TouchableOpacity style={styles.confirmarBtn}>
					<Text style={styles.confirmarTxt}>Confirmar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</>
	);
}
export default Emprestimos;

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
		marginTop: 300,
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
