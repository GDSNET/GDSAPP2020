
import React from 'react';
import {Text, View} from 'react-native';
import * as constants from '../../herramientas/Const'




export default class TextTypeA extends React.Component {

render() {

const {text} = this.props;


    return (
      <View 
      style={[{
        flex:1,
          padding:2,
          justifyContent:"center",
          alignItems:'center',
          margin:2,
          fontFamily:"Futura",
          
      }]}>
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontSize: constants.SIZE_LETRA_SMALL,
        textAlignVertical: "center",
        textAlign: "center",
        fontWeight: 'bold',
        color: constants.COLOR_QUINTENARIO_CLARO,
      }}>{text}</Text>
    </View>
    )
  }
}




