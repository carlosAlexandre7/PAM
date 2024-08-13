import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, TouchableOpacity, Image } from 'react-native-web';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.view}>
        <Text style={{fontSize:65, fontFamily:"League Gothic"}}>Jokenpo</Text>
      </View>

      <View style={styles.viewP}>
        <Text style={{fontSize:35, fontFamily:"League Gothic"}}>Placar</Text>
      </View>

      <View style={styles.view}>
        <Text style={{paddingRight:200, fontSize:25, fontFamily:"League Gothic"}}>0</Text>
        <Text style={{fontSize:25, fontFamily:"League Gothic"}}>0</Text>
      </View>

      <View style={styles.view}>
        <Image style={{width:'200%',height:'95%'}}
        source={{uri:"https://i.pinimg.com/originals/23/f9/19/23f919ecefe7c9113855bac4ac84916c.png"}}/>
        <Text style={{margin:30, fontSize:20, fontFamily:"League Gothic"}}>VS</Text>
        <Image style={{width:'200%',height:'95%'}} 
        source={{uri:"https://i.pinimg.com/originals/23/f9/19/23f919ecefe7c9113855bac4ac84916c.png"}}/>
      </View>

      <View style={styles.view}>
        <TouchableOpacity style={styles.botao}>
          <View style={styles.btnArea}>
            <Text style={{fontSize:40, fontFamily:"League Gothic", margin:'auto'}}>Nova Partida</Text>
          </View>

        </TouchableOpacity>
      </View>

      <View style={styles.view}>
          <Pressable on pressRetentionOffset={()=>jogar(1)}>
          source={{uri:"https://images.vexels.com/media/users/3/145827/isolated/preview/357f06ecbaaa77d750259c459c0ed55f-ilustracao-de-pedra-redonda.png"}}/>
          </Pressable>

          <Pressable on pressRetentionOffset={()=>jogar(2)}>
          source={{uri:"https://static.vecteezy.com/system/resources/thumbnails/022/219/336/small/white-torn-paper-isolated-on-a-transparent-background-png.png"}}/>
          </Pressable>

          <Pressable on pressRetentionOffset={()=>jogar(3)}>
          source={{uri:"https://static.vecteezy.com/system/resources/previews/016/314/773/non_2x/scissors-transparent-scissors-free-png.png"}}/>
          </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDBE58',
    alignItems: 'center',
    justifyContent: 'center',
  },
  view:{
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },
  btnArea:{
    backgroundColor:"#D98E04",
    width:300,
    height:60,
    justifyContent:'center',
    alignContent:'center',
    borderRadius:50,
    borderWidth:2
  },
  viewP:{
    flex:0.2,
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'row'
  },

});
