// Imports: Dependencies
import React from "react";
import { StyleSheet, View, StatusBar, ScrollView, Text} from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { useIsFocused } from '@react-navigation/native';

//import data from "../api/home.json";
import CardIndicadores from "../components/home/CardIndicadores";
import * as constants from "../herramientas/Const";
import TareaHome from "../components/home/TareaHome";

import SalaRanking from "../components/home/SalasRanking";
// Imports: Redux Actions
import ActionCreators from "../redux/actions";
import EnvioBoton from "../components/pendientesEnvio/EnvioBoton";
import NetworkScreen from './NetworkScreen'

function FocusAwareStatusBar(props) {
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar {...props} /> : null;
}

// Screen: Counter
class Home extends React.Component {

 
  
  render() {
    const {dataHome} = this.props;

    return (
      <View style={styles.container}>
          <FocusAwareStatusBar barStyle="light-content" />
          <NetworkScreen />
          <View style={styles.styDown}>
          
          <CardIndicadores data={dataHome} />
              <ScrollView >
               <SalaRanking />
              </ScrollView>
              <TareaHome touchHandler={() => this.props.navigation.navigate("Tareas")}/>

          </View>
        <EnvioBoton />

      </View>

    );
  }
}

// Styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: constants.COLOR_GRIS_D,
    flex: 1,
  },

  styDown: { flex: 1 },
});

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // Redux Store --> Component
  return {
    dataHome: state.userReducer.dataHome,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
function mapDispatchToProps(dispatch) {
  const combiner = Object.assign({}, ActionCreators, { dispatch });
  return bindActionCreators(combiner, dispatch);
}

// Exports
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
