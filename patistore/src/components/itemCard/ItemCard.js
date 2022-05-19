import React from 'react'
import {View ,Text,Image} from 'react-native'
import {style} from "./itemCardStyle"
function ItemCard(props) {
  return (
      <View style={style.card}>

        <Image 
        style={
            style.img
        }
        source={{
            uri: props.imgURL
        }}/>
        <Text style={style.name}>{props.title}</Text>
        <Text style={style.price}>$15</Text>
         {props.inStock ? null :<Text style= {style.stock}> Not in Stock </Text> }
      </View>
  )
}

export default ItemCard