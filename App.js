import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image, Button, FlatList} from 'react-native';
import firebase from './src/FirebaseConnection';
import ImagePicker from 'react-native-image-picker';
import RNFetchBlob from 'react-native-fetch-blob';


//Variáveis necessárias para RNFetchBlob
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
window.Blob = RNFetchBlob.polyfill.Blob;


export default class Cadastro extends Component {

  constructor(props){
    super(props);
    this.state = {
      formAvatar: null,
      formNome: '',
      formEmail: '',
      formSenha: '',
      lista: [],
    };
   


    //Funções
    this.cadastrar = this.cadastrar.bind(this);
    this.carregarFoto = this.carregarFoto.bind(this);


  }

  //Função carregarFoto
  carregarFoto() {
    ImagePicker.showImagePicker({}, (r)=> {
      if(r.uri){
        
        let state = this.state;
        state.formAvatar = {uri:r.uri};
        this.setState(state);

      }
    });
  }

  //Função cadastrar
  cadastrar() {
    if(this.state.formAvatar != null &&
      this.state.formNome != null &&
      this.state.formEmail != null &&
      this.state.formSenha != null){


    }
  }


  //Tela Principal
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.cadastroArea}>
          <Text> Cadastre um novo usuário </Text>
          <View style={styles.form}>
            <View style={styles.formInfo}>
              <Image source={this.state.formAvatar} style={styles.formAvatar} />
              <Button title="Carregar" onPress={this.carregarFoto} />
            </View>
            <View style={styles.formInfo}>
              <TextInput style={styles.input} placeholder="Nome" value={this.state.formNome} onChangeText={(formNome)=>this.setState({formNome})} />
              <TextInput style={styles.input} placeholder="Email" value={this.state.formEmail} onChangeText={(formEmail)=>this.setState({formEmail})} />
              <TextInput style={styles.input} secureTextEntry={true} placeholder="Senha" value={this.state.formSenha} onChangeText={(formSenha)=>this.setState({formSenha})} />
            </View>
          </View>
          <Button title="Cadastrar" onPress={this.cadastrar} />
        </View> 

        <View style={styles.listaArea}>
          <FlatList
            data={this.state.lista}
            renderItem={(item)=> {
              return(
                <View style={styles.itemArea}>
                  <Image source={item.avatar} style={styles.itemAvatar} />
                  <View style={styles.itemInfo}>
                    <Text>{item.nome}</Text>
                    <Text>{item.email}</Text>
                  </View>
                </View>
              );
            }}
          />
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
    backgroundColor: '#ffffff'
  },
  cadastroArea: {
    height: 240,
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
    height: 100,
    backgroundColor: '#cccccc'
  },
  formInfo: {
    flex: 1,
    flexDirection: 'column'
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#000000',
    margin: 5
  },
  listaArea: {
    flex: 1,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
  itemArea: {
    height: 100,
    flex: 1,
    flexDirection: 'row',
  },
  itemAvatar: {
    width: 80,
    height: 80,
    margin: 10,
  },
  itemInfo: {
    flex: 1,
    flexDirection: 'column',
  }
});
