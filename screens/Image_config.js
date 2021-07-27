import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Picker } from "@react-native-community/picker";
import Slider from "@react-native-community/slider";
export default function Image_config() {
    const [image_name, setImage_Name] = useState("Hello");
    const [image_width, setImage_Width] = useState("300");
    return (

        <View style={styles.container}>
            <View style={styles.PickerContainer}>
                <Picker
                    style={styles.Picker_style}
                    selectedValue={image_name}
                    onValueChange={(itemValue, itemIndex) => setImage_Name(itemValue)}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
            </View>
            <TouchableOpacity style={styles.viewImage_BTN}>
                <Text style={{ fontSize: 20 }}>
                    View Image
                </Text>
            </TouchableOpacity>
            <Slider
                style={{ height: 30, width: 300, justifyContent: 'center', marginTop: 20 }}
                maximumValue={550}
                minimumValue={300}
                value={300}
                step={5}
                onValueChange={(val) => setImage_Width(val)} />
            <Text>
                Width: {image_width}
            </Text>
            <TouchableOpacity style={styles.Upload_BTN}>
                <Text style={{ fontSize: 25, color: 'white' }}>
                    UPLOAD
                </Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    Picker_style: {
        height: 50,
        width: 150,
    },
    PickerContainer: {
        height: 200,
    },
    viewImage_BTN: {
        marginTop: 5,
        borderWidth: 3,
        width: 300,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    Upload_BTN: {
        alignItems: 'center',
        backgroundColor: 'dodgerblue',
        width: 255,
        height: 40,
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 30,
    },
});


