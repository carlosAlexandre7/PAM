
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  
const [animal,setAnimal] = useState([
  {
  nome:'Nome: Animal1',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal2',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal3',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal4',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal5',
  descrição:'Animal qualquer'
  },
  {
  nome:'Nome: Animal6',
  descrição:'Animal qualquer'
  }
  ])

  const[visivel, setVisivel] = useState(false);
  const[indiceSelecionado, setIndiceSelecionado] = useState(0)
  const carregar = (indice) => {
    setIndiceSelecionado(indice);
    setVisivel(true)
  };
  const voltar = () =>{
    setVisivel(false);
  };

  return (
    <View style={(styles.container)} >
      <StatusBar style="auto" />
      <View style={styles.header}>
        <Text>Cabeçalho</Text>
      </View>
      <View style={styles.botaoArea}>
        <Pressable style={styles.botao} onPress={() => carregar (0)}>
          <Text style={styles.nome}>Animal 1</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (1)}>
          <Text style={styles.nome}>Animal 2</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (2)}>
          <Text style={styles.nome}>Animal 3</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (3)}>
          <Text style={styles.nome}>Animal 4</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (4)}>
          <Text style={styles.nome}>Animal 5</Text>
        </Pressable>
      </View>
      <View style={styles.botaoArea}>
      <Pressable style={styles.botao} onPress={() => carregar (5)}>
          <Text style={styles.nome}>Animal 6</Text>
        </Pressable>
      </View>
      
      <Modal visible={visivel} animationType="fade">
        <View style={styles.modal}>
          <Text style={styles.animal}>{animal[indiceSelecionado].nome}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].descrição}</Text>
          <Button title="Voltar" onPress={() => voltar()}/>
          <Image source={require} style={{width:50, height:50}}/>
        </View>
      </Modal>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:'center',
    alignItens:'center'
  },
  botaoArea:{
    flex:1,
    backgroundColor:'red',
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  botao:{
    backgroundColor:'blue',
    width:'95%',
    height:'85%',
    borderRadius:25,
    justifyContent:'center',
  },
  header:{
    flex:0.5,
  },
  nome:{
    textAlign:'center'
  },
  modal:{
    alignSelf:'center',
    justifyContent:'center',
    width:'95%',
    height:'95%',
    backgroundColor:'red'
  },
  animal:{
    height:'100%'
  }

});
