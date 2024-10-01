import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

export default function Login() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
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

        <TouchableOpacity style={styles.button}
        onPress={ () => navigation.navigate('Territorios')}>
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
