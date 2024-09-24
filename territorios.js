
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import { Modal, ScrollView } from 'react-native-web';
import { Button,Image } from 'react-native-web';
import { useState } from 'react';

export default function App() {
  
const [animal,setAnimal] = useState([
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal1',
  descrição:'Animal qualquer',
  habitos:'Hábitos: ',
  reproducao:'Reprodução: ',
  conservacao:'Conservação: '
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal2',
  descrição:'Animal qualquer',
  habitos:'Hábitos: ',
  reproducao:'Reprodução: ',
  conservacao:'Conservação: '
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal3',
  descrição:'Animal qualquer',
  habitos:'Hábitos: ',
  reproducao:'Reprodução: ',
  conservacao:'Conservação: '
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal4',
  descrição:'Animal qualquer'
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal5',
  descrição:'Animal qualquer',
  habitos:'Hábitos: ',
reproducao:'Reprodução: ',
conservacao:'Conservação: '
  },
  {
  imagem:'https://global-uploads.webflow.com/62f27b69eafac54f0255bab4/646c690ec939a9d01739491c_Cronus.jpg',
  nome:'Nome: Animal6',
  descrição:'Animal qualquer',
  habitos:'Hábitos: ',
  reproducao:'Reprodução: ',
  conservacao:'Conservação: '
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
          <Image style={styles.image} 
          source={{uri:animal[indiceSelecionado].imagem}}/>
          <Text style={styles.animal}>{animal[indiceSelecionado].nome}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].descrição}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].habitos}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].reproducao}</Text>
          <Text style={styles.animal}>{animal[indiceSelecionado].conservacao}</Text>
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
    backgroundColor: '#828282',
    justifyContent:'center',
    alignItens:'center'
  },
  botaoArea:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
    
  },
  botao:{
    width:'95%',
    height:'85%',
    borderRadius:25,
    justifyContent:'center',
    backgroundColor:'#545454'
  },
  header:{
    flex:0.5,
  },
  nome:{
    textAlign:'center'
  },
  modal:{
    margin:'5%',
    alignSelf:'center',
    justifyContent:'center',
    width:'95%',
    height:'95%',
    backgroundColor:'#828282'
  },
  animal:{
    height:'100%'
  },
  image:{
    width:'80%',
    height:'50%',
    alignSelf:'center',
    margin:'5%'
  }

});
