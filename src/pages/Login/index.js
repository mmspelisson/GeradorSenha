import React from 'react';
import { Alert, Text, StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';

export function Login() {
    const clicou = () => {
        Alert.alert("Oie", "Você fez o login!");
    }

    return (
        <View style={styles.container}>
            <Image 
                source={require('../../assets/logo.png')}
                style={styles.logo}
            />
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
            />
            <TextInput
                style={styles.input}
                secureTextEntry={true}
                placeholder="Digite sua senha"
            />
            <TouchableOpacity
                style={styles.botao}
                onPress={() => clicou()}
            >
                <Text style={styles.botaoText}>Login</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d3d3'
    }, 
    // logo: {
    //     width: 150,
    //     height: 150,
    // },
    input: {
        marginTop: 10,
        width: 300,
        backgroundColor: "#fff",
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius: 3,
        padding: 10
    },
    botao: {
        width: 300,
        height: 42,
        backgroundColor: '#392de9',
        marginTop: 10,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff'
    }
});
