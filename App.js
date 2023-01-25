import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import Game from "./components/Game";

export default function App() {
	return (
		<View style={styles.container}>
			<StatusBar style="auto" />
			<Game />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
});
