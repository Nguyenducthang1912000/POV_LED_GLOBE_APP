import React from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CircleSlider from "react-native-circle-slider";
import { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { Color_Take } from './Modal_Color_Picker';
import { TakeVal_FromCircularSlider } from 'react-native-circle-slider/CircleSlider';

export var TakePosition = 0;

export default function Display_on_Globe() {
    const [modalVisible_Angle, setModalVisible_Angle] = useState(false);
    const [modalVisible_Position, setModalVisible_Position] = useState(false);
    const [BTN1, setBTN1] = useState('false');
    const [BTN2, setBTN2] = useState('false');
    const [BTN3, setBTN3] = useState('false');
    const [showBTN_No, setShowBTN_No] = useState(0);
    const handleClick = () => {
        setModalVisible_Angle(false);
    }
    const handleClickBTN1 = () => {
        setBTN1('true');
        setBTN2('false');
        setBTN3('false');
        setShowBTN_No(1);
        TakePosition = 1;
    }
    const handleClickBTN2 = () => {
        setBTN1('false');
        setBTN2('true');
        setBTN3('false');
        setShowBTN_No(2);
        TakePosition = 2;
    }
    const handleClickBTN3 = () => {
        setBTN1('false');
        setBTN2('false');
        setBTN3('true');
        setShowBTN_No(3);
        TakePosition = 3;
    }
    return (
        <View style={styles.container} >
            <Modal
                visible={modalVisible_Angle}
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
                        <CircleSlider value={TakeVal_FromCircularSlider}
                            dialWidth={10}
                            btnRadius={25}
                            meterColor={Color_Take}
                            textColor='white'
                            strokeColor='white'
                            strokeWidth={0}
                        />

                        <TouchableOpacity onPress={handleClick}>
                            <Feather name="x" size={30} color='dodgerblue' />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                visible={modalVisible_Position}
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
                        <View>
                            <TouchableOpacity style={BTN1 === 'true' ? styles.LineOp_BTN_Pressed : styles.LineOp_BTN_notPress} onPress={handleClickBTN1}>
                                <Text style={styles.LineOp_TXT}>
                                    Line 1
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={BTN2 === 'true' ? styles.LineOp_BTN_Pressed : styles.LineOp_BTN_notPress} onPress={handleClickBTN2}>
                                <Text style={styles.LineOp_TXT}>
                                    Line 2
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={BTN3 === 'true' ? styles.LineOp_BTN_Pressed : styles.LineOp_BTN_notPress} onPress={handleClickBTN3}>
                                <Text style={styles.LineOp_TXT}>
                                    Line 3
                                </Text>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => setModalVisible_Position(false)}>
                            <Feather name="x" size={30} color="dodgerblue" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <View style={styles.content}>
                <TouchableOpacity style={styles.Angle_BTN} onPress={() => setModalVisible_Angle(true)}>
                    <Text style={styles.Button_Text}>
                        Angle: {TakeVal_FromCircularSlider}
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Position_BTN} onPress={() => setModalVisible_Position(true)}>
                    <Text style={styles.Button_Text}>
                        Position: {showBTN_No}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        height: 50,
        width: 300,
    },
    content: {
        justifyContent: 'center',
        flexDirection: 'row',
        flex: 1
    },
    Angle_BTN: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderRightWidth: null,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    Position_BTN: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderLeftWidth: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    Button_Text: {
        fontSize: 20,
    },
    modalContent: {
        flex: 1,
        backgroundColor: '#000000AA',
        alignItems: 'center',
        justifyContent: 'center',

    },
    LineOp_BTN_notPress: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    LineOp_BTN_Pressed: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        height: 50,
        margin: 10,
        borderRadius: 10,
        backgroundColor: 'dodgerblue'
    },
    LineOp_TXT: {
        fontSize: 20,
        fontWeight: '500',
    }
});