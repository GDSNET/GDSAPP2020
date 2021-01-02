import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {View} from 'react-native'
import AplicacionNavigation from './AplicacionNavigation'
import ModalScreen from '../screens/ModalScreen'
import HelpScreen from '../screens/HelpScreen'
import EnvioScreen from '../screens/EnvioScreen'

// Imports: Redux Actions
import ActionCreators from '../redux/actions';



class Applicacion extends React.Component {

  constructor(props){
    super(props)
    this.state = {  
      dato: 'algo'
    }
  }

  

   async componentDidMount(){
    console.log('Inicio: Aplicacion')
    




   }
  
  render() {
    return (

      <View style={{flex: 1}}>
                
        <AplicacionNavigation />
        <ModalScreen />
        <HelpScreen />
        <EnvioScreen />
        

  

        
     </View>
    )
  }
}



// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    
    isRefresh: state.userReducer.isRefresh,

    
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({},
    ActionCreators,
    { dispatch },
  );
  return bindActionCreators(
    combiner,
    dispatch,
  );
}



// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Applicacion);


