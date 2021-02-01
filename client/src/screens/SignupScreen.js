import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';

const SignupScreen = ({ navigation }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	return (
		<View style={styles.container}>
			<Spacer>
				<Text h2>Sign Up for Tracker</Text>
			</Spacer>
			<Input
				autoCapitalize='none'
				autoCorrect={false}
				label='Email'
				value={email}
				onChangeText={(text) => setEmail(text)}
			/>
			<Spacer />
			<Input
				autoCapitalize='none'
				autoCorrect={false}
				secureTextEntry
				label='Password'
				value={password}
				onChange={(text) => setPassword(text)}
			/>
			<Spacer>
				<Button
					title='Go to sign in'
					onPress={() => navigation.navigate('Signin')}
				/>
			</Spacer>
			<Spacer>
				<Button
					title='Go to main flow'
					onPress={() => navigation.navigate('mainFlow')}
				/>
			</Spacer>
		</View>
	);
};

// This removes the default header from the screen
SignupScreen.navigationOptions = () => {
	return {
		headerShown: false,
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		marginBottom: 100,
	},
});
export default SignupScreen;
