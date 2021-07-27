import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View, TouchableOpacity } from 'react-native';
import Mondal_Color_Picker from '../Components/Modal_Color_Picker';
import Display_on_Globe from '../Components/Display_on_Globe';
import { Color_Take } from '../Components/Modal_Color_Picker';
import { TakePosition } from '../Components/Display_on_Globe';
import { TakeVal_FromCircularSlider } from 'react-native-circle-slider/CircleSlider';
import { setControlText } from '../services/setcontrol'
import Slider from '@react-native-community/slider';

let TakeUserTextInput;
const hexToRGB = (h) => {
    let r = 0, g = 0, b = 0;

    // 3 digits
    if (h.length == 4) {
        r = parseInt("0x" + h[1] + h[1]);
        g = parseInt("0x" + h[2] + h[2]);
        b = parseInt("0x" + h[3] + h[3]);

        // 6 digits
    } else if (h.length == 7) {
        r = parseInt("0x" + h[1] + h[2]);
        g = parseInt("0x" + h[3] + h[4]);
        b = parseInt("0x" + h[5] + h[6]);
    }

    return {
        r, g, b
    }
}

const handleUpload = (speed) => {
    setControlText(TakeUserTextInput, hexToRGB(Color_Take), TakeVal_FromCircularSlider, TakePosition, speed)
        .then((res) => {
            if (res.status === 200) {
                alert('Set mode manual text: ' + TakeUserTextInput + ' successfully!');
            }
        })
}
export default function Text_config() {
    const [userInput, setUserInput] = useState("");
    const [speed_Slider, setSpeed_Slider] = useState(300);
    const handleUserInput = (Input) => {
        setUserInput(Input);
        TakeUserTextInput = Input;
    }
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container} >
                <StatusBar style='light'></StatusBar>
                <View style={styles.content}>
                    <TextInput style={styles.InputForm}
                        placeholder="Input Text"
                        onChangeText={(text) => handleUserInput(text)}
                        value={userInput}>
                    </TextInput>
                    <Mondal_Color_Picker
                        Button_Style={styles.Modal_Color} />
                    <Display_on_Globe />
                    <View>
                        <Slider
                            value={300}
                            style={{ width: 300, height: 40, marginTop: 20 }}
                            minimumValue={300}
                            maximumValue={1000}
                            minimumTrackTintColor={Color_Take}
                            maximumTrackTintColor="#000000"
                            onValueChange={(val) => setSpeed_Slider(val)}
                            step={100}
                        />
                        <Text style={{ alignSelf: 'center' }}>
                            Speed: {speed_Slider}
                        </Text>
                    </View>
                </View>
                <View style={styles.UploadView}>
                    <TouchableOpacity style={styles.Upload_BTN} onPress={() => handleUpload(speed_Slider)}>
                        <Text style={{ fontSize: 25, color: 'white' }}>
                            UPLOAD
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        alignItems: 'center',
    },
    InputForm: {
        borderWidth: 2,
        width: 250,
        height: 40,
        alignSelf: 'center',
        borderRadius: 4,
        fontSize: 22,
        padding: 5,
        textAlign: 'center',
    },
    Modal_Color: {
        marginTop: 10,
        marginBottom: 10,
        width: 300,
        height: 50,
    },
    Upload_BTN: {
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        width: 255,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,

    },
    UploadView: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    }
});
