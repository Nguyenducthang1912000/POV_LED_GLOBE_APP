import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Text_config from '../screens/Text_config';
import Image_config from '../screens/Image_config';
export default function Manual_screen() {
    const Tab = createMaterialTopTabNavigator();
    return (
        < View style={styles.container} >
            <StatusBar style='light' />
            <View style={styles.header}>
                <Text style={styles.headerName}>
                    Manual Mode
                </Text>
            </View>
            <Tab.Navigator
                initialRouteName="Text"
                lazy='true'>
                <Tab.Screen name="Text" component={Text_config} />
                <Tab.Screen name="Image" component={Image_config} />
                <Tab.Screen name="Video" component={View} />
            </Tab.Navigator>

        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 0.12,
        backgroundColor: 'dodgerblue',
        flexDirection: 'column',
    },
    headerName: {
        fontSize: 20,
        fontWeight: '400',
        color: 'white',
        marginTop: 30,
        alignSelf: 'center',
    },


});
