import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setTrainerName } from '../actions';


class Trainer extends Component {
  state = {
    trainerName: "",
    name:''
  };

  changeName () {
    this.props.setTrainerName(this.state.trainerName);
  }

  render() {
    return (
      <View>
        <Text style={styles.title}>Settings</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Trainer: {this.props.currentTrainer}</Text>
        </View>
        <View>
          <TextInput
            placeholder="Enter New Trainer Name"
            placeholderTextColor="gray"
            onChangeText={name => {this.setState({ trainerName: name });}}
            style={styles.textInput}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity onPress={this.changeName.bind(this)} style={styles.btn}>
              <Text style={styles.btnText}>Submit</Text>
            </TouchableOpacity>
          </View>

        </View>

      </View>
    );
  }
}
const mapStateToProps = state => {
  return {
    currentTrainer: state.trainerReducer.currentTrainer
  };
};
export default connect(
  mapStateToProps,
  {setTrainerName}
)(Trainer);

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    textAlign: "center",
    backgroundColor: "#0793ff",
    fontFamily: "Pokemon Solid",
    color: "gold",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10
  },
  infoContainer: {
    backgroundColor: '#d4d4d4',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    margin: 10
  },
  infoText: {
    fontSize: 25,
    color: 'black',
    marginLeft: 10,

  },
  textInput: {
    color: "black",
    fontSize: 20,
    paddingLeft: 15
  },
  inputContainer: {
    backgroundColor: "white",
    width: "65%"
  },
  btnContainer: {
    width: "25%",
    marginRight: 10,
    marginLeft: 10
  },
  btn: {
    backgroundColor: "#eaeaea",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black"
  },
  btnText: {
    fontSize: 20,
    textAlign: "center",
    color: "#444444"
  }
});
