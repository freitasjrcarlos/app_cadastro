import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import firebase from 'firebase';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';


//Variáveis necessárias para RNFetchBlob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      formAvatar: null,
      formNome: '',
      formEmail: '',
      formSenha: ''
    };

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
        <View style={styles.cadastroArea}>
          <Text> Cadastre um novo usuário </Text>

          <View style={styles.form}>
            <Image source={this.state.formAvatar} style={styles.formAvatar} />
            <View style={styles.formInfo}>

              <TextInput style={styles.input} placeholder="Nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})} />

              <TextInput style={styles.input} placeholder="Email" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})} />

              <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})} />

            </View>
          </View>

        </View>
      </View>
    );
  }
}


//Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  cadastroArea: {
    height: 300,
    backgroundColor: '#eeeeee',
    margin: 10,
    padding: 10,
  },
  form: {
    flex: 1,
    flexDirection: 'row',
  },
  formAvatar: {
    width: 100,
    height: 100
  },
  formInfo: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',

  }
});
