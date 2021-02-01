import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from './components/Spacer';

const SignupScreen = ({ navigation }) => {
	return (
		<>
			<Spacer>
				<Text h2>Sign Up for Tracker</Text>
			</Spacer>
			<Input label='Email' />
			<Spacer />
			<Input label='Password' />
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
		</>
	);
};
const styles = StyleSheet.create({});
export default SignupScreen;
