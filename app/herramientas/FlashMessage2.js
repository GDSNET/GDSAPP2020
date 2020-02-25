import React, { Component } from "react";
import { connect } from "react-redux";
import combinaActions from "../redux/actions/index";
import {bindActionCreators} from 'redux';
import {Button, View, StyleSheet} from 'react-native'
import { showMessage } from "react-native-flash-message";

 
class FlashMessages extends Component {



render() {
  

  return (
    <View style={{ flex: 1 }}>
    <Button
      onPress={() => {
        /* HERE WE GONE SHOW OUR FIRST MESSAGE */
        showMessage({
          message: "My message title",
          description: "My message description",
          type: "default",
          backgroundColor: '#567', // background color
          color: "#fff", // text color
        });


      }}
      title="Request Details"
      color="#841584"
    />
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