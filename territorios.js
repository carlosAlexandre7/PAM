import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Pressable, TextInput } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>1</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>2</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>3</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>4</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>5</Text>
          </Pressable>
        </View>
      </View>

      <View>
        <View style={styles.territorioArea}>
          <Pressable style={styles.territorio}>
            <Text>6</Text>
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'row'
  },
  territorioArea:{
    flex:1,
  }
});
