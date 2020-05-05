
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

      }]}>
      <Text
      adjustsFontSizeToFit
      numberOfLines={1}
      style={{
        fontSize: constants.SIZE_LETRA_X_LARGE,
        textAlignVertical: "center",
        textAlign: "center",
        fontFamily:"Futura",
        color: constants.COLOR_QUINTENARIO_CLARO,
      }}>{text}</Text>
    </View>
    )
  }
}




