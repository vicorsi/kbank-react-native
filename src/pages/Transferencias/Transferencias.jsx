import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

import api from "../../api/Api";

function Transferencias() {
	const navigation = useNavigation();

	const [conta_id_origem, setConta_id_origem] = useState([]);
	const [conta_id_destino, setConta_id_destino] = useState([]);
	const [valor, setValor] = useState([]);

	const transferir = () => {
		try {
			api.post("v1/user/contas/1/transferir/", {
				conta_id_origem: conta_id_origem,
				conta_id_destino: conta_id_destino,
				valor: valor,
			}).then(function (response) {
				console.log(response.data);
				api.defaults.headers.Authorization = `Bearer ${response.data.auth_token}`;
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header name=", informe quem irá receber" />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Menu")}
			>
				<Text style={styles.buttonTxt}>Transferir</Text>
			</TouchableOpacity>
			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>ID da conta de origem</Text>
				<TextInput
					value={conta_id_origem}
					onChangeText={(id) => {
						setConta_id_origem(id);
					}}
					keyboardType="numeric"
					placeholder="Conta de origem"
					style={styles.input}
				/>

				<Text style={styles.label}>ID da conta de destino</Text>
				<TextInput
					value={conta_id_destino}
					onChangeText={(id) => {
						setConta_id_destino(id);
					}}
					keyboardType="numeric"
					placeholder="Conta de destino"
					style={styles.input}
				/>
				<Text style={styles.label}>Valor da transferência</Text>
				<TextInput
					value={valor}
					onChangeText={(text) => {
						setValor(text);
					}}
					keyboardType="numeric"
					placeholder="R$ 10.0"
					style={styles.input}
				/>

				<TouchableOpacity
					style={styles.confirmarBtn}
					onPress={transferir}
				>
					<Text style={styles.confirmarTxt}>Confirmar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</>
	);
}
export default Transferencias;

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
