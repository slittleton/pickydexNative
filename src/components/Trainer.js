import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Trainer extends Component {
  render() {
    return (
      <View>
        <Text style={styles.title}>Trainer Name</Text>
      </View>
    )
  }
}
const mapStateToProps = state => {
  return {
    state
  }
}
export default connect(mapStateToProps, null)(Trainer)

const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    textAlign: 'center',
    backgroundColor: 'cyan',
    color: 'black'
  }
})