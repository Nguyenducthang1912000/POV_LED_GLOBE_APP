import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Modal, Image } from 'react-native';
import { useState } from 'react';
import { TriangleColorPicker } from 'react-native-color-picker';
import { Feather } from '@expo/vector-icons';
import { toHsv, fromHsv } from 'react-native-color-picker'

export var Color_Take;

export default function Mondal_Color_Picker(props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [Color, setColor] = useState('black');
    const TakeColorfrom_TriangleColorPicker = (Color) => {
        setColor(Color);
        Color_Take = fromHsv(Color).toString();
    }
    return (
        <View style={props.Button_Style}>
            <StatusBar style='auto'></StatusBar>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType='fade'
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <View style={styles.modalContent}>
                    <View style={{
                        alignItems: 'center',
                        borderRadius: 5,
                        width: 400,
                        height: 400,
                        justifyContent: 'center',

                    }}>
                        <TriangleColorPicker
                            color={Color}
                            hideControls={true}
                            style={{ flex: 1, width: 400, height: 400, }}
                            onColorChange={(color) => TakeColorfrom_TriangleColorPicker(color)}
                        />
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={{ height: 30, width: 30 }}>
                            <Feather name="x" size={30} color={Color_Take} />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <TouchableOpacity style={styles.container} onPress={() => setModalVisible(true)}>
                <Image source={require('../assets/Images/color-circle.png')}
                    style={styles.Image_BTN}>

                </Image>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#000000AA',
        alignItems: 'center',
        justifyContent: 'center',

    },
    Image_BTN: {
        width: '100%',
        aspectRatio: 1,
        height: '100%',
        resizeMode: 'contain',
    }
});