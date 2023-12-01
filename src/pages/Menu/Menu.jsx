import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import Header from "../../components/Header/Header";
import Saldo from "../../components/Saldo/Saldo";
import Barra from "../../components/Servicos/Servicos";

function Menu() {
	return (
		<View>
			<Header name="Victor"/>
			<Saldo saldo="6.728.353,60"/>
			<Barra/>
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
