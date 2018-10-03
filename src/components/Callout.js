import React, { Component } from 'react';
import {
  Image,              // Renders images
  StyleSheet,         // CSS-like styles
  Text,               // Renders text
  View,               // Container component
  Button,
    TouchableOpacity,   // Pressable container
} from 'react-native';

export default class Callout extends Component {
  render() {
    const { name, image, license, rating } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.bubble}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <Image
              style={styles.image}
              source={{ uri: image }}
            />
            <Text style={styles.license}>lic#:{license}</Text>
            <Image
              style={styles.rating}
              source={{ uri: rating }}
            />

            <TouchableOpacity
            style={styles.button}>
            <Text style={styles.centerTxt}>{'Message me'}</Text>
          </TouchableOpacity>
            
          </View>
        </View>
        <View style={styles.arrowBorder} />
        <View style={styles.arrow} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  // Callout bubble
  bubble: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: 'rgba(102, 195, 219, 0.8)',
    borderRadius: 10,
    padding: 2,
    margin: 2,
    width: 100,
  },

  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // profile image
  image: {
    width: 120,
    height: 120,
  },
  rating: {
    width: 120,
    height: 20,
  },
  centerTxt: {
    textAlign: 'center',
  },
  license:{
    color:'green',
  }
});