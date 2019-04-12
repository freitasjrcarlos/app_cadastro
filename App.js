import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';


//Variáveis necessárias para RNFetchBlob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {};

    /* Conexão com Firebase */
    let config = {
			apiKey: "AIzaSyCigAgH9ha1k3aF8zOQhkTWn5zXp0lmJEc",
			authDomain: "projeto-teste-20eff.firebaseapp.com",
			databaseURL: "https://projeto-teste-20eff.firebaseio.com",
			projectId: "projeto-teste-20eff",
			storageBucket: "projeto-teste-20eff.appspot.com",
			messagingSenderId: "951771389914"
		};
    firebase.initializeApp(config);
    /* Fim Conexão */


    //Funções

  }


  //Tela Principal
  render() {
    return (
      <View style={styles.container}>
        <Text> Teste </Text>
      </View>
    );
  }
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
