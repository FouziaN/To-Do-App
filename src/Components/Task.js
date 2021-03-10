import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput } from "react-native";

const Task = (props) => {
   
    
    return (
        <View style={styles.container}>
            <View style={styles.item}>
                <TouchableOpacity style={{...styles.square , backgroundColor : props.isSelected ? 'red' : 'white'}} onPress={props.onPress}
                
                ></TouchableOpacity>
                <Text style={styles.text1}>{props.text}</Text>
                </View>
                {/* {isEditing ? (
                <TextInput style={styles.text1}
                value = {text}
                onChangeText = {setText}> </TextInput>
                ):(<Text style={styles.text1}>{props.text}</Text>
                )}
                
           
            {isEditing ? (
            <TouchableOpacity onPress={handleEdit}><Text>save</Text></TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={()=>setEdit(true)}><Text>edit</Text></TouchableOpacity>
          )} */}
        </View>
    )

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#deeff5',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    }
    ,
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'white',
        borderRadius: 5,
        marginRight: 10,
    },
    circle: {
        width: 12,
        height: 12,
        borderColor: 'white',
        borderWidth: 2,
        borderRadius: 10
    },
    text1: {
        maxWidth: '80%'
    }

});

export default Task;
