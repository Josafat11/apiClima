import { StyleSheet } from "react-native";

export const estilos = StyleSheet.create({
    //Estilos para el boton
    imagenB:{
        height:33,
        width:30,
        marginEnd:10
      },
      textoB:{
        color:'white',
        fontSize:18
      },
      boton:{
        flexDirection:'row',
        padding:5,
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#c09a7e',
        borderWidth:1,
        borderRadius:5
      },
      //estilos para la caja de la calculadora
      caja:{
        borderColor:'#fff',
        borderWidth:2,
        borderRadius:10,
        height:70,
        alignItems:'flex-end',
        justifyContent:'center',
        padding:10
      },
      textBox:{
        color:'white',
        fontSize:30
      },
      //estilos para el div de la botonera
      botonera:{
        flexDirection:'row',
        padding:10,
        justifyContent:'space-evenly',
        flexWrap:'wrap'
      },
      //propiedades de la card
      card:{
        borderColor:'white',
        borderWidth:2,
        borderRadius:6,
        marginVertical:2,
        flexDirection:'row'
      },
      //estilos app clima
      ContainerClima:{
        backgroundColor:'#4b73ec',
        flex:1
      }

})