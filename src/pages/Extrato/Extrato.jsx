import React, {useState, useEffect} from "react";
import Header from "../../components/Header/Header";
import { Text, StyleSheet, View, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";


const data = [
	{ id: 1, Data: "30/10", Histórico: "Tigrinho", Valor: 1200 },
	{ id: 2, Data: "29/10", Histórico: "Aviãozinho", Valor: 500 },
	{ id: 3, Data: "28/10", Histórico: "Roleta", Valor: -200 },
];

function Extrato() {
	const [dia, setDia] = useState([]);
	const [historico, setHistorico] = useState([])

	const navigation = useNavigation();
	const renderItem = ({ item }) => (
		<View style={styles.row}>
			<Text style={styles.cell}>{item.Data}</Text>
			<Text style={styles.cell}>{item.Histórico}</Text>
			<Text style={styles.cell}>{item.Valor}</Text>
		</View>
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
					keyExtractor={(item) => item.id.toString()}
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
