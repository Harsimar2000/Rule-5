import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
export default function SignUpPage(){

    const [email, setEmail] = React.useState("");
    const [userName, setUserName] = React.useState("");
    const [passwordInitial, setInitialPassword] = React.useState("");
    const [passwordFinal, setFinalPassword] = React.useState("");

    function checkPassword(){
        if (passwordFinal === passwordInitial){
            console.log({email},{userName},{passwordInitial},{passwordFinal})
        }
        else {
            console.log("Password do not match")
        }
    }
    return (
        <View  style={styles.container}>
            <Text>
                Sign Up Page
            </Text>
            
            <TextInput 
            style={styles.textField}
                placeholder='Email '
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.textField} 
                placeholder='User Name'
                onChangeText={setUserName}
                value={userName}
            />
            <TextInput 
                style={styles.textField}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={setInitialPassword}
                value={passwordInitial}
            />
            <TextInput 
                style={styles.textField}
                placeholder='Password'
                secureTextEntry={true}
                onChangeText={setFinalPassword}
                value={passwordFinal}
            />

            <Button
                title='Sign Up'
                onPress={() => checkPassword()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textField: {
        height:30,
        borderColor:"black",
        borderWidth: 2,
        width:200,
        margin:8,
        textAlign:"center"
    }
  });
  