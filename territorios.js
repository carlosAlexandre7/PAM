import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Cabeçalho</Text>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
              <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://static.escolakids.uol.com.br/2021/01/varios-animais-aafricanos.jpg'}} />
              <Text>Mamiferos</Text>
            </Pressable>
          </View>

        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://ambientes.ambientebrasil.com.br/wp-content/uploads/2020/12/mix_imagens_aves.jpg'}} />
          <Text>Aves</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
            <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://petanjo.com/blog/wp-content/uploads/2023/07/repteis.jpg'}} />
            <Text>Répteis</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://static7.depositphotos.com/1003722/678/v/450/depositphotos_6785938-stock-illustration-set-of-reptiles-and-amphibians.jpg'}} />
          <Text>Anfibios</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio}>
            <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://4.bp.blogspot.com/-KrRWINYSgjw/VDQlHrr6nbI/AAAAAAAAAYQ/Ks3zf3rlbjQ/s1600/material-vetor-de-peixes_15-1163.jpg'}} />
            <Text>Peixes</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio}>
          <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkQzhbSeBrkaYOWmxEKz_fD4tILa55UW6tLKfcTEaLbSsvBNxMqqUylcRDplVKLkq-Cu0&usqp=CAU'}} />
          <Text>Outros</Text>
          </Pressable>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  territorioArea:{
    flex:1,
    flexDirection:'row',
    height:'100%',
    width:'85%',
    margin:10,
  },
  buttonArea:{
    width:'50%',
    height:'100%',
    marginLeft:'0.5%',
    marginRight:'1.5%'
  },
  territorio:{
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center',
  },
  header:{
    flex:0.5
  }

});
