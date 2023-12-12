import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "../pages/Menu/Menu";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Pix from "../pages/Pix/Pix";
import Transferencias from "../pages/Transferencias/Transferencias";
import Emprestimos from "../pages/Emprestimos/Emprestimos";
import Cartoes from "../pages/Cartoes/Cartoes";
import TransferenciaPix from "../pages/Pix/TransferenciaPix";
import Extrato from "../pages/Extrato/Extrato";
import Cadastrar from "../pages/Cadastrar/Cadastrar";

const Stack = createNativeStackNavigator();

export default function Routes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Dashboard" component={Dashboard} />
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen name="Cadastrar" component={Cadastrar} />
			<Stack.Screen name="Menu" component={Menu} />
			<Stack.Screen name="Pix" component={Pix} />
			<Stack.Screen name="Transferencias" component={Transferencias} />
			<Stack.Screen name="Emprestimos" component={Emprestimos} />
			<Stack.Screen name="Cartoes" component={Cartoes} />
			<Stack.Screen
				name="TransferenciaPix"
				component={TransferenciaPix}
			/>
			<Stack.Screen name="Extrato" component={Extrato} />
		</Stack.Navigator>
	);
}
