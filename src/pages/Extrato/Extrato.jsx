import React, { useState, useEffect } from "react";
import {
	Text,
	StyleSheet,
	View,
	FlatList,
	TouchableOpacity,
} from "react-native";
import Header from "../../components/Header/Header";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import api from "../../api/Api";

function Extrato() {
	const [data, setData] = useState([]);
	const navigation = useNavigation();

	useEffect(() => {
		getExtrato();
	}, []);

	const getExtrato = async () => {
		try {
			const response = await api.get("v1/user/extrato/");
			console.log(response)
			setData(response.data.extrato);
		} catch (error) {
			console.error(error);
		}
	};

	const renderItem = ({ item }) => (
		<TouchableOpacity
			style={styles.row}
			onPress={() => {
			}}
		>
			<Text style={styles.cell}>{item.created_at}</Text>
			<Text style={styles.cell}>{item.tipo_transacao}</Text>
			<Text style={styles.cell}>{item.valor}</Text>
		</TouchableOpacity>
	);

	return (
		<>
			<Header name=", veja seu extrato bancário" />
			<View style={styles.containerForm}>
				<View style={styles.headerTopBar}>
					<Text style={styles.headerTopBarText}>Extrato</Text>
				</View>
				<View style={styles.header}>
					<Text style={styles.heading}>Data</Text>
					<Text style={styles.heading}>Histórico</Text>
					<Text style={styles.heading}>Valor (R$)</Text>
				</View>
				<FlatList
					data={data}
			
					renderItem={renderItem}
				/>
			</View>
		</>
	);
}

export default Extrato;

const styles = StyleSheet.create({
	containerForm: {
		flex: 1,
		backgroundColor: "#FFF",
		paddingVertical: 30,
		paddingHorizontal: 30,
	},
	headerTopBar: {
		backgroundColor: "#E06066",
		paddingHorizontal: 12,
		paddingVertical: 10,
		borderRadius: 5,
		elevation: 2,
	},
	headerTopBarText: {
		color: "#fff",
		fontSize: 16,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		padding: 10,
	},
	heading: {
		flex: 1,
		fontSize: 15,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginVertical: 8,
		marginHorizontal: 2,
		elevation: 1,
		borderRadius: 3,
		borderColor: "#fff",
		padding: 10,
		backgroundColor: "#fff",
	},
	cell: {
		fontSize: 15,
		textAlign: "left",
		flex: 1,
	},
});
