import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imageArea}>

      </View>

      <View style={styles.inputArea}>
        <Text style={styles.textInput}>Nome</Text>
        <TextInput
        style={styles.input}
        />
        </View>

        <View style={styles.inputArea}>
        <Text style={styles.textInput}>Idade</Text>
        <TextInput
        style={styles.input}
        />
        </View>
        
        <View style={styles.inputArea}>
        <Text style={styles.textInput}>Telefone</Text>
        <TextInput
        style={styles.input}
        />
        </View>

        <View style={styles.inputArea}>
        <Text style={styles.textInput}>E-mail</Text>
        <TextInput
        style={styles.input}
        />
        </View>

        <View style={styles.inputArea}>
        <Text style={styles.textInput}>Qual seu animal preferido</Text>
        <TextInput
        style={styles.input}
        />
      </View>

      <View style={styles.buttonArea}>

        <TouchableOpacity style={styles.button}>
          <Text>Visitante</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}> 
          <Text>Entrar</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputArea:{
    flex:0.7,
    width:'100%',
  },
  imageArea:{
    flex:1,
    width:'100%',
    backgroundColor:'blue'
  },
  buttonArea:{
    flex:0.7,
    width:'100%',
    flexDirection:'row',
  },
  input:{
    marginTop:25,
    marginBottom:20,
    alignSelf:'center',
    borderWidth:2,
    width:'90%',
    height:'50%',
    borderRadius:20,
  },
  button:{
    borderWidth:2,
    width:'35%',
    height:'50%',
    marginLeft:'10%',
    marginTop:20,
    borderRadius:30,
    justifyContent:'center',
    alignItems:'center'
  },
  textInput:{
    alignSelf:'center',
    marginTop:10,
    marginBottom:-25,
  }
});
