import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const PokeList = () => {
  return (
    <View>
      <Text style={styles.title}> Pokemon List </Text>

    </View>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}
  export default connect(mapStateToProps, null)(PokeList);

  const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      textAlign: 'center',
      backgroundColor: 'red',
      color: 'black'
    }
  })