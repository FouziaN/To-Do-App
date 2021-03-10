import React from "react";
import { View, TouchableOpacity, StyleSheet, Text, Image, TextInput } from "react-native";
import propTypes from 'prop-types';

const CustomTextInput = (props) => {
  return (

    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
      <TextInput style={styles.inputStyle}
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        placeholder={props.placeholder}
        maxLength={props.maxLength}
        value={props.value}
        onChangeText={props.onChangeText}

      />
      {props.isPasswordEnable ? <TouchableOpacity onPress={() => props.onPasswordPress()} style={{ position: 'absolute' }} >
        <Image source={props.showPassword ? require('../../img/icEmailHideye.png') : require('../../img/icEmailShoweye.png')} />
      </TouchableOpacity>
        : null}


    </View>
  )

};

const styles = StyleSheet.create({
  inputStyle: {
    height: 50,
    backgroundColor: 'white',
    borderColor: 'white',
    borderRadius: 20,
    marginTop: 10,
    shadowColor: "gray",
    shadowOpacity: 0.6,
    shadowRadius: 5,
    shadowOffset: {
      height: 1,
      width: 0
    },
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 300

  },
  containerStyle: {
    flexDirection: 'column',
    marginTop: 10,
    marginBottom: 10
  }
});

// CustomDetail.propTypes = {
//     EmployeeName : propTypes.string.isRequired,
//     EmployeeShift : propTypes.string,
//     EmployeeImage :  propTypes.any,
// }

// CustomDetail.defaultProps = {

//     EmployeeName: 'AppIn',
//     EmployeeShift: "GeeksforGeeks",

// }

export default CustomTextInput;
