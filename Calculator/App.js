import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button } from 'react-native';

export default class App extends React.Component {

  state = {
      joke: "(Groan-worthy jokes will promptly arrive here)"
  }

  _generateJoke = () => {
    const headers = new Headers();
    headers.append("Accept", "application/json");

    fetch('https://icanhazdadjoke.com/',
          {
            headers: headers,
            method: 'GET'
          })
          .then((res) => res.json())
          .then((data) => {
              this.setState({
                joke: data.joke
              });
          })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>Dad Joke Generator</Text>
        <Text style={styles.jokeText}>{this.state.joke}</Text>
        <TouchableHighlight
          style={styles.jokeButton}
          onPress={this._generateJoke}
          underlayColor='#128040' >
          <Text style={{color: 'white', fontSize: 20}}>Generate a Dad Joke!</Text>
        </TouchableHighlight>
        <Button
          style={styles.anotherJokeButton}
          title="Tap here for another joke"
          onPress={() => {
            var jokes = ['USC Dean background checks #staywoke', 'cs 201 instructions', 'sam darnold'];
            var rand = Math.floor((Math.random() * 3));
            this.setState({
              joke: jokes[rand]
            });
          }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100
  },
  jokeText: {
    marginLeft: 20,
    marginRight: 20
  },
  jokeButton: {
    backgroundColor: '#2ecc71',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    marginTop: 100
  },
  anotherJokeButton: {
    marginTop: 100,
    fontSize: 8
  }
});
