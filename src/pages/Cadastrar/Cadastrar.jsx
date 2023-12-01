import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
} from "react-native";
import React, {useState, useEffect} from "react";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import api from "../../api/Api";

function Cadastrar() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [first_name, setFirst_name] = useState('')
	const [last_name, setLast_name] = useState('')
	const [cpf, setCpf] = useState('')
	const [url_image, setUrl_image] = useState('')

	const navigation = useNavigation();

	const signUp = ()=>{

		try {
			api.post("v1/user/create", {
				email:email,
				password:password,
				first_name:first_name,
				last_name:last_name,
				cpf:cpf,
				url_image:url_image

			}).then(function(response){
				console.log(response.data)
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
				style={styles.containerHeader}
			>
				<Text style={styles.txtHeader}>
					Quase lá, informe alguns dados.
				</Text>
			</Animatable.View>

			<Animatable.View animation="fadeInUp" style={styles.containerForm}>
				<View style={styles.inputs}>
				<TextInput value={first_name} onChangeText={text=>{
					setFirst_name(text)
				}} placeholder="Digite seu nome" style={[styles.input]} />
				
				<TextInput value={last_name} onChangeText={text=>{
					setLast_name(text)
				}}  placeholder="Digite seu sobrenome: " style={styles.input} />
				
				<TextInput value={cpf} onChangeText={text=>{
					setCpf(text)
				}}  placeholder="Digite seu CPF:" style={styles.input} />
				
				<TextInput value={email} onChangeText={text=>{
					setEmail(text)
				}} 
					placeholder="Digite seu e-mail:"
					style={styles.input}
				/>
				<TextInput value={password} onChangeText={text=>{
					setPassword(text)
				}}  placeholder="Digite sua senha: " style={styles.input} />
				</View>
				

				<TouchableOpacity
					style={styles.login}
					onPress={signUp}
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
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingStart: "5%",
		paddingEnd: "5%",
		height:"90%",
	
		
	},
	inputs:{
		display:"flex",
		width:"100%",
		justifyContent:"center",
		marginTop:10,
		
	},

	input: {
		borderBottomWidth: 1,
		height: 20,
		marginBottom: 12,
		fontSize: 16,
		marginTop:15,
		outlineWidth:0
	
		
	},
	login: {
		backgroundColor: "#E06066",
		width: "100%",
		borderRadius: 10,
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
