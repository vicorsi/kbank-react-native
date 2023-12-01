import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/Api";

export default function Login() {
	const navigation = useNavigation();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const signIn = ()=>{

		try {
			api.post("token/", {

				email:email,
				password:password

			}).then(function(response){
				console.log(response.data)
				navigation.navigate("Menu")
			})
		} catch (error) {
			console.error(error)
		}
	}
	return (
		<View style={styles.container}>
			<Animatable.View
				animation="fadeInLeft"
				delay={500}
				style={styles.containerHeader}>
				<Text style={styles.txtHeader}>Seja Bem-vindo(a)!</Text>
			</Animatable.View>

			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
			<View style={styles.inputs}>
			<TextInput
					value={email}
					onChangeText={text=>{
						setEmail(text)
					}}
					placeholder="Digite seu email:"
					style={styles.input}
				/>

			
				<TextInput
					value={password}
					onChangeText={text=>{
						setPassword(text)
					}}
					placeholder="Digite sua senha: "
					style={styles.input}
				/>
			</View>
			

				<TouchableOpacity
					style={styles.login}
					onPress={signIn}
				>
					<Text style={styles.loginTxt}>Entrar</Text>
				</TouchableOpacity>

				<TouchableOpacity
					style={styles.register}
					onPress={() => navigation.navigate("Cadastrar")}
				>
					<Text style={styles.registerTxt}>
						Ainda não possui uma conta?
					</Text>
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
	inputs:{
		display:"flex",
		width:"100%",
		justifyContent:"center",
		marginTop:30,
		
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
		outlineWidth:0
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
