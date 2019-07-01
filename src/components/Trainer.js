import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { connect } from "react-redux";
import { TouchableOpacity } from "react-native-gesture-handler";
import { setTrainerName } from '../actions';
import { tsThisType } from "@babel/types";


class Trainer extends Component {
  state = {
    trainerName: "",
    err: null,

    errColor:null,
  };

  changeName () {
    if(this.state.trainerName !== '' && this.state.trainerName !== null){
      this.props.setTrainerName(this.state.trainerName);
    } else {
      this.trainerNameErr()
    }
  }

  trainerNameErr () {
    this.setState({ err: "Please Enter A Trainer Name"})
    setTimeout(()=>{this.setState({ err: null})}, 2500)
  }
  render() {
    return (
      <View style={styles.trainerContainer}>
        <Text style={styles.title}>Settings</Text>
        <View style={styles.colorBox}>
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
          <View><Text style={styles.err}>{this.state.err}</Text></View>
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
    color: "#ffe875",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10,
    borderRadius: 10,
    padding: 5,
    margin: 10
  },
  infoContainer: {
    backgroundColor: "#0793ff",
    borderRadius: 10,
    borderWidth: 4,
    borderColor: '#ffe875',
    margin: 10
  },
  infoText: {
    fontSize: 25,
    color: '#ffe875',
    marginLeft: 10,
    fontWeight: 'bold'
  },
  textInput: {
    backgroundColor:'white',
    color: "black",
    fontSize: 20,
    paddingLeft: 15,
    margin: 10,
    borderRadius: 10

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
  },
  err: {
    color: '#ab1f00',
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    borderRadius: 10,
    fontWeight: 'bold'
  },
  trainerContainer: {
    flex: 1,
    backgroundColor: 'white'
  },
  colorBox: {
    backgroundColor: "#0793ff",
    margin:10,
    borderRadius: 10
  }
});
