import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet
} from "react-native";
import { connect } from "react-redux";

class Content extends Component {
  state = {
    searchTerm: ""
  };

  search(searchItem) {}

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Pickydex </Text>

        <View style={styles.searchBoxContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Enter Pokemon Name"
              placeholderTextColor="gray"
              onChangeText={searchItem => {
                this.setState({ searchTerm: searchItem });
              }}
              style={styles.textInput}
            />
          </View>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.search(this.state.searchTerm)}
            >
              <Text style={styles.btnText}>Search</Text>
            </TouchableOpacity>
          </View>
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
  searchBoxContainer:{
    display: 'flex',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: 40,
    backgroundColor: "red",
    textAlign: "center",
    color: "black",
    borderRadius: 20,
    margin: 10
  },
  textInput: {
    color: "white",
    fontSize: 20,
    paddingLeft: 20
  },
  inputContainer: {
    backgroundColor: "#444444"
  },
  btn: {
    backgroundColor: "white",
    width: 75,
    borderRadius: 10
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center'
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
