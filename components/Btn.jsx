import {Text, View, StyleSheet, Button} from "react-native";

export default function Btn({ titulo, acao }) {
    return (
        <View>
            <Button title={titulo} onPress={acao}/>
        </View>
    )
}