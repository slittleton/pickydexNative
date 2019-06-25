import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';


const FavsList = () => {
  return (
    <View>
      <Text style={styles.title}> Favorites </Text>
    </View>
  )
}

const mapStateToProps = state => {
  return {
    state
  }
}
  export default connect(mapStateToProps, null)(FavsList);

  const styles = StyleSheet.create({
    title: {
      fontSize: 50,
      textAlign: 'center',
      backgroundColor: 'yellow',
      color: 'black'
    }
  })