import {Button, Text, View, StyleSheet} from "react-native";
import {useState} from "react";
import Titulo from "./components/Titulo";
import Btn from "./components/Btn";

export default function App() {
  const [numero, setNumero] = useState(0);

  function adicionar() {
    setNumero(numero + 1)
  }

  function remover() {
    setNumero(numero - 1)
  }

  return (
      <View style={styles.container}>
        <Titulo valor={numero} texto={"TITULO AQUI"} />

        {/* BTN */}
        <Btn titulo={"ADD"} acao={adicionar}/>
        <Btn titulo={"REMOVER"} acao={remover}/>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20
  }
})