import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../redux/actions/index";
import {bindActionCreators} from 'redux';
import {Text, View, StyleSheet} from 'react-native'


 
class FlashMessages extends Component {


funEnviar(){
  const {message, funMessage} = this.props;

  setTimeout(() => {
    funMessage('')
  }, 5000);
  
if(message==''){
return ( 
      <View />
           )

}else{
  return (
  
  <View style={styles.flashMessage}>
          <View style={styles.v_text}>
          <Text style={styles.texto}>
            {message}
            </Text>
          </View>
  </View>
   )

}



}




render() {
  

  return (
<View>
    {this.funEnviar()}
    
 </View>
  );
}
}
 

function mapStateToProps(state){
  return{
    message: state.messageReducer.message,
  }
}

function mapDispatchToProps (dispatch) {
 const combiner = Object.assign({},
  combinaActions,
{dispatch}
);
return bindActionCreators(
  combiner,
  dispatch,
);
}



export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);


const styles = StyleSheet.create({

  container: {

    flex: 1,
    
  },
  v_icon: {
    margin: 2
  },

  v_text: {
    marginHorizontal: 20
  },
  texto: {
    color: '#FFF',
    fontSize: 20,
  },

  flashMessage: {

    flexDirection: 'row',
    backgroundColor: '#76D7C4',
    
    left:0,
    right:300,
    height: 50,
    padding: 20,
    top: 0,
    borderBottomRightRadius: 50,
    zIndex: 10000,
    
  },
});