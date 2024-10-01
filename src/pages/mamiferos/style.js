import { StyleSheet } from "react-native";

export default StyleSheet.create({
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
        alignSelf:'center',
        justifyContent:'center',
        width:'100%',
        height:'100%',
        backgroundColor:'#828282'
      },
      animal:{
        height:'85%',
        marginBottom:5.5,
        marginLeft:5
      },
      image:{
        width:'50%',
        height:'30%',
        alignSelf:'center',
        margin:'5%'
      }

});