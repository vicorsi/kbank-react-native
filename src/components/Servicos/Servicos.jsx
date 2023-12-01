import {
	View,
	Text,
	ScrollView,
	StyleSheet,
	SafeAreaView,
	FlatList,
	Image,
	TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const Servicos = () => {
	const navigation = useNavigation();
	return (
		<View>
			<View>
				<Text style={styles.txt}>Serviços</Text>
			</View>
			<View style={styles.todosServicos}>
				<TouchableOpacity onPress={() => navigation.navigate("Pix")}>
					<Text style={styles.servicosPix}>PIX</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.todosServicos}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Transferencias")}
				>
					<Text style={styles.servicosPix}>Transferências</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.todosServicos}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Emprestimos")}
				>
					<Text style={styles.servicosPix}>Empréstimos</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.todosServicos}>
				<TouchableOpacity
					onPress={() => navigation.navigate("Cartoes")}
				>
					<Text style={styles.servicosPix}>Cartões</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Servicos;

const styles = StyleSheet.create({
	txt: {
		fontSize: 20,
		top: 15,
		left: 20,
		fontWeight: "500",
	},
	servicosPix: {
		top: 40,
		left: 20,
		fontSize: 17,
		borderRadius: 25,
		backgroundColor: "#E06066",
		paddingVertical: 10,
		paddingHorizontal: 15,
		marginBottom: 30,
		color: "#fff",
	},

	todosServicos: {
		marginBottom: 25,
	},
});
