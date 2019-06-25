import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";
import SearchBox from './layout/SearchBox';


class Content extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>
        
        <SearchBox/>

        <View>
          <Text>{JSON.stringify(this.props)}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#444444"
  },
  title: {
    fontSize: 40,
    fontWeight:'bold',
    backgroundColor: "#9b0000",
    textAlign: "center",
    color: "white",
    marginTop: 5,
    marginBottom: 5
  }
});

const mapStateToProps = state => {
  return {
    state
  };
};

export default connect(
  mapStateToProps,
  null
)(Content);
