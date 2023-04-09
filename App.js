import React from 'react';
import { StyleSheet,  Platform, SafeAreaView as SafeAreaViewIos } from 'react-native';
import { SafeAreaView as SafeAreaViewAndroid } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import Main from './src/Main';

//const Stack = createNativeStackNavigator();

const App = () => { 
  let SafeArea = Platform.OS==="ios"?SafeAreaViewIos:SafeAreaViewAndroid
  return (
    <Provider store={store}>
      <SafeArea  style={styles.container}>  
          <Main /> 
      </SafeArea>
    </Provider>
  ); 
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;
