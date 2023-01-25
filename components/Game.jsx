import React from "react";
import {WebView} from "react-native-webview";

const Game = () => {
	return (
		<WebView
			source={{uri: "https://dispute-solver.netlify.app/"}}
			originWhitelist={["*"]}
		/>
	);
};

export default Game;
