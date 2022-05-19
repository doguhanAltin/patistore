import {StyleSheet, Dimensions} from 'react-native'

export const style= StyleSheet.create (
  {
      card: {
          flex:1,
          backgroundColor:"#f5f5f5",
          borderRadius:15,
          margin:5,
          padding:10,
          },
      img:  {
          
        width:150,
          height:200,
          marginLeft: "auto",
          marginRight: "auto",
          
               },
      name:{
          fontSize:15,
          fontWeight:"bold",

      },
      price: {
        fontSize:15,
        textAlign:"left"
      },
      stock:{
          color:"red",
        fontWeight:"bold",
        textAlign:"center"
      }
      
  }
);