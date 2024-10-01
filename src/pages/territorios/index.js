import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { Pressable} from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import styles from './style.js'

export default function Territorios() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Mamiferos')}>
              <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://static.escolakids.uol.com.br/2021/01/varios-animais-aafricanos.jpg'}} />
              <Text>Mamiferos</Text>
            </Pressable>
          </View>

        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Aves')}>
          <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://ambientes.ambientebrasil.com.br/wp-content/uploads/2020/12/mix_imagens_aves.jpg'}} />
          <Text>Aves</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Repteis')}>
            <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://petanjo.com/blog/wp-content/uploads/2023/07/repteis.jpg'}} />
            <Text>Répteis</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Anfibios')}>
          <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://thumbs.dreamstime.com/b/anf%C3%ADbios-e-r%C3%A9pteis-isolados-no-branco-16104589.jpg'}} />
          <Text>Anfibios</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.territorioArea}>
        <View style={styles.buttonArea}>
            <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Peixes')}>
            <Image style={{width:'100%',height:'90%'}}
              source={{uri:'https://4.bp.blogspot.com/-KrRWINYSgjw/VDQlHrr6nbI/AAAAAAAAAYQ/Ks3zf3rlbjQ/s1600/material-vetor-de-peixes_15-1163.jpg'}} />
            <Text>Peixes</Text>
            </Pressable>
          </View>
          
        <View style={styles.buttonArea}>
          <Pressable style={styles.territorio} onPress={ () => navigation.navigate('Outros')}>
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