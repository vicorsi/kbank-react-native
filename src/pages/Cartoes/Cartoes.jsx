import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

function Cartoes() {
	const navigation = useNavigation();

	const [id, setId] = useState([]);
	const [cartao_numero, setCartao_numero] = useState([]);
	const [cartao_cvv, setCartao_cvv] = useState([]);
	const [cartao_validade, setCartao_validade] = useState([]);
	const [cartao_bandeira, setCartao_bandeira] = useState([]);
	const [cartao_saldo, setCartao_saldo] = useState([]);
	const [conta_id, setConta_id] = useState([]);

/* 	const getCartao = async () => {
		try{
			const response = await api.get("");
			setId(response.data.)
		}
	} */

	return (
		<>
			<Header name=", veja seus cartões" />
			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>Meus Cartões</Text>
				<Text style={styles.label}></Text>
			</Animatable.View>
		</>
	);
}
export default Cartoes;

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
