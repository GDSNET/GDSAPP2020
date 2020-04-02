import React, {Component} from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import * as constants from '../../herramientas/Const'
import Indicadores from './Indicadores'
import {funMessage} from '../../herramientas/Mensaje'

export default class SalasListadoInCo extends Component {

funIndicadores(){
  const {data} = this.props

  try {
    

return(

  data.map((valores, x)=>{

    return this.crearIndicadores(valores.indicadores)
  }


)

)

} catch (error) {
  funMessage('mensaje', error)
    
}
}


crearIndicadores(item){
  try {
    return(
        <FlatList  
        numColumns={3}
        key={1}
        data={item}
        renderItem={({item}) => <Indicadores data={item} />}
        keyExtractor={(item, index) => '' + index}
/>   
    )
  
  } catch (error) {
    alert(error)
  }
  
}



  
  render() {
   
    return (
      <View style={styles.container}>
          {this.funIndicadores()}
     
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },

});