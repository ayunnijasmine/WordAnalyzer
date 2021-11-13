import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const vowels = ["a", "e", "i", "o", "u"];
const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      word: '',
      noConso: 0,
      noVowel: 0,
      noChar: 0
    }

    this.analyze = () => {
      let vowel_count = 0;
      let conso_count = 0;
      let char_count = 0;
      let str = this.state.word;

      for (let letter of str.toLowerCase()){
        if(vowels.includes(letter)){
          vowel_count++;
        }
        else if (consonants.includes(letter)){
          conso_count++;
        }

        if (letter != ' '){
          char_count += letter.length;
        }
      }

      this.setState({noConso: conso_count});
      this.setState({noVowel: vowel_count});
      this.setState({noChar: char_count});

    }
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.header}>Word Analyzer</Text>

          <Text>Word: </Text>
          <TextInput style={styles.input} onChangeText={(word) => this.setState({word})}/>
          <Button onPress={this.analyze} title='Analyze'/>

        <Text style={{margin: 10}}>Word: {this.state.word}</Text>
        <Text>No. of characters: {this.state.noChar}</Text>
        <Text>No. of vowels: {this.state.noVowel}</Text>
        <Text>No. of consonants: {this.state.noConso}</Text>

        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 20,
    margin: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10
  }

});
