import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

function Cadastrar() {
	const navigation = useNavigation();
    // diponeóibiobneokn ojiehb ui9oeh iopehpo ehheoje
    

	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={500}
				style={styles.containerHeader}
			>
				<Text style={styles.txtHeader}>
					Quase lá, informe seus dados.
				</Text>
			</Animatable.View>

			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.label}>Nome</Text>
				<TextInput
					placeholder="Informe seu primeiro nome."
					style={styles.input}
				/>
				<Text style={styles.label}>Sobrenome</Text>
				<TextInput
					placeholder="Informe seu sobrenome."
					style={styles.input}
				/>
				<Text style={styles.label}>CPF</Text>
				<TextInput
					placeholder="Informe seu CPF."
					style={styles.input}
				/>
				<Text style={styles.label}>Email</Text>
				<TextInput
					placeholder="Informe seu endereço de email."
					style={styles.input}
				/>

				<Text style={styles.label}>Senha</Text>
				<TextInput
					placeholder="Informe sua senha"
					style={styles.input}
				/>

				<TouchableOpacity
					style={styles.login}
					onPress={() => navigation.navigate("Menu")}
				>
					<Text style={styles.loginTxt}>Cadastrar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#E06066",
	},
	containerHeader: {
		marginTop: "14%",
		marginBottom: "8%",
		paddingStart: "5%",
	},
	txtHeader: {
		fontSize: 20,
		fontWeight: "bold",
		color: "#FFF",
	},
	containerForm: {
		backgroundColor: "#FFF",
		flex: 1,
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
	login: {
		backgroundColor: "#E06066",
		width: "100%",
		borderRadius: 20,
		paddingVertical: 8,
		marginTop: 14,
		justifyContent: "center",
		alignItems: "center",
	},
	loginTxt: {
		color: "#FFF",
		fontSize: 18,
		fontWeight: "bold",
	},
	register: {
		marginTop: 14,
		alignSelf: "center",
	},
	registerTxt: {
		color: "#a1a1a1",
	},
});

export default Cadastrar;
