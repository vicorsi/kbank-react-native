import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header/Header";
import Saldo from "../../components/Saldo/Saldo";
import Barra from "../../components/Servicos/Servicos";

import api from "../../api/Api";

function Menu() {
	const [saldo, setSaldo] = useState([]);
	const [first_name, setFirst_name] = useState([]);

	useEffect(() => {
		getSaldo();
	}, []);

	useEffect(() => {
		getName();
	}, []);

	const getSaldo = async () => {
		try {
			const response = await api.get("v1/user/contas/");
			setSaldo(response.data[4]);
		} catch (error) {
			console.error(error);
		}
	};

	const getName = async () => {
		try {
			const response = await api.get("v1/user/me/");
			setFirst_name(response.data(1));
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<Header name={first_name} />
			<Saldo saldo={saldo} />
			<Barra />
		</View>
	);
}

export default Menu;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
});
