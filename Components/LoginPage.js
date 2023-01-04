import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
export default function LoginPage(){

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function checkPassword(){
        if (email.length > 0 && password.length > 0){
            console.log({email},{password})
        }
        else {
            console.log("email or password not typed")
        }
    }

    return (
        <View  style={styles.container}>
            <Text>
                Login Page
            </Text>
            <TextInput 
                style={styles.textField}
                placeholder='Email '
                onChangeText={setEmail}
                value={email}
            />
            <TextInput 
                style={styles.textField}
                placeholder='Password'
                onChangeText={setPassword}
                secureTextEntry={true}
                value={password}
            />
            <Button
                title='Login'
                onPress={() => checkPassword()}
            />
            <Text>
                Don't have an account?
            </Text>
            <Button
                title="Sign up"
                onPress={console.log("navigate to sign up page")}
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
  