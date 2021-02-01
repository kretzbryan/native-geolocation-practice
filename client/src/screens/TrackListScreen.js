import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const TrackListScreen = ({ navigation }) => {
	return (
		<View>
			<Text>TracklistScreen</Text>
			<Button
				title='Go to track detail'
				onPress={() => navigation.navigate('TrackDetail')}
			/>
			<Button
				title='Go to signinFLow'
				onPress={() => navigation.navigate('loginFlow')}
			/>
		</View>
	);
};
const styles = StyleSheet.create({});
export default TrackListScreen;
