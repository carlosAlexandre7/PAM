import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
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