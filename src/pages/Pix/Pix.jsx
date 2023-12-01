import React from "react";
import Header from "../../components/Header/Header";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

function Pix() {
	const navigation = useNavigation();
	return (
		<>
			<Header name=", selecione a chave pix" />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate("Menu")}
			>
				<Text style={styles.buttonTxt}>Voltar</Text>
			</TouchableOpacity>
			<View style={styles.icons}>
				<TouchableOpacity
					style={styles.iconCpf}
					onPress={() => navigation.navigate("TransferenciaPix")}
				>
					<Image source={require("../../../assets/pix/cpf.png")} />
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.icon}
					onPress={() => navigation.navigate("TransferenciaPix")}
				>
					<Image
						source={require("../../../assets/pix/telefone.png")}
					/>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.icon}
					onPress={() => navigation.navigate("TransferenciaPix")}
				>
					<Image source={require("../../../assets/pix/email.png")} />
				</TouchableOpacity>
			</View>
		</>
	);
}
export default Pix;

const styles = StyleSheet.create({
	button: {
		position: "absolute",
		borderRadius: 50,
		backgroundColor: "#E06066",
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
	icons: {
		margin: 150,
	},
	icon: {
		height: 100,
		width: 30,
		left: 20,
	},
	iconCpf: {
		height: 100,
		width: 30,
		left: 10,
		borderRadius: 25,
		borderColor: "black",
	},
});
