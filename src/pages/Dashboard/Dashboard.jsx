import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import * as Animatable from 'react-native-animatable';
import { useNavigation } from '@react-navigation/native'

const Dashboard = () => {
  const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<View style={styles.containerLogo}>
				<Animatable.Image delay={100}
          animation="fadeIn"
					source={require("../../../assets/logo.png")}
					style={{ width: "100%" }}
					resizeMode="contain"
				/>
			</View>

			<Animatable.View delay={400} animation="fadeInUp" style={styles.containerForm}>
				<Text style={styles.title}>
          Comece agora fazendo seu login!
				</Text>
				<Text style={styles.txt}>Todos os seus dados estão sendo salvos e seram utilizados futuramente.</Text>

				<TouchableOpacity 
        style={styles.button}
        onPress={() => navigation.navigate('Login')}
        >
					<Text style={styles.buttonTxt}>Entrar</Text>
				</TouchableOpacity>
			</Animatable.View>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	containerLogo: {
		flex: 2,
		justifyContent: "center",
		alignItems: "center",
	},
	containerForm: {
		flex: 1,
		backgroundColor: "#E06066",
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
		paddingStart: "5%",
		paddingEnd: "5%",
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginTop: 28,
		marginBottom: 12,
		color: "#FFF",
	},
	txt: {
		color: "#FFF",
	},
	button: {
		position: "absolute",
		borderRadius: 50,
		backgroundColor: "#FFF",
		paddingVertical: 8,
		width: "60%",
		alignSelf: "center",
		bottom: "15%",
    alignItems: 'center',
    justifyContent: 'center',
	},
	buttonTxt: {
    fontSize: 18,
    fontWeight: 'bold',
	},
});
