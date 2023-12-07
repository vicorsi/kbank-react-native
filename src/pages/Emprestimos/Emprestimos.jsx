import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";

function Emprestimos() {
	const navigation = useNavigation();

	const [emprestimo_valor, setEmprestimo_valor] = useState([]);
	const [emprestimo_quantidade_parcelas, setEmprestimo_quantidade_parcelas] =
		useState([]);
	const [emprestimo_observacao, setEmprestimo_observacao] = useState([]);
	const [conta_id, setConta_id] = useState([]);

	const emprestar = () => {
		try {
			api.post("v1/user/contas/1/emprestar/", {
				emprestimo_valor: emprestimo_valor,
				emprestimo_quantidade_parcelas: emprestimo_quantidade_parcelas,
				emprestimo_observacao: emprestimo_observacao,
				conta_id: conta_id,
			}).then(function (response) {
				console.log(response.data);
				api.defaults.headers.Authorization = `Token ${response.data.auth_token}`;
			});
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<Header name=", faça agora um empréstimo" />
			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>Valor que será emprestado</Text>
				<TextInput
					value={emprestimo_valor}
					onChangeText={(valor) => {
						setEmprestimo_valor(valor);
					}}
					keyboardType="numeric"
					placeholder="R$ 10.0"
					style={styles.input}
				/>

				<Text style={styles.label}>Quantidades de parcelas</Text>
				<TextInput
					value={emprestimo_quantidade_parcelas}
					onChangeText={(qtd) => {
						setEmprestimo_quantidade_parcelas(qtd);
					}}
					keyboardType="numeric"
					placeholder="12"
					style={styles.input}
				/>

				<Text style={styles.label}>Empréstimo observação</Text>
				<TextInput
					placeholder="Observação"
					style={styles.input}
					value={emprestimo_observacao}
					onChangeText={(text) => {
						setEmprestimo_observacao;
					}}
				/>

				<Text style={styles.label}>Id da conta</Text>
				<TextInput
					value={conta_id}
					onChangeText={(id) => {
						setConta_id(id);
					}}
					keyboardType="numeric"
					placeholder="0"
					style={styles.input}
				/>

				<TouchableOpacity
					style={styles.confirmarBtn}
					onPress={emprestar}
				>
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
