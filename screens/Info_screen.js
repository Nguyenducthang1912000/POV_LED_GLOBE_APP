import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, Modal, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import CircleSlider from "react-native-circle-slider";
export default function Info_screen() {
    return (
        <View style={styles.container} >
            <CircleSlider value={90}
                dialWidth={10}
                btnRadius={25}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
