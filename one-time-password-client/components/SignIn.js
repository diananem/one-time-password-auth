import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

import { ROOT_URL } from "../utils";

class SignIn extends Component {
  state = {
    phone: "",
    code: ""
  };

  handleSubmit = async () => {
    const { phone, code } = this.state;
    try {
      let response = await axios.post(`${ROOT_URL}/verifyPassword`, {
        phone,
        code
      });
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { phone, code } = this.state;
    return (
      <View>
        <View style={{ marginBottom: 20 }}>
          <Input
            label="Enter phone number"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 20 }}>
          <Input
            label="Enter code"
            value={code}
            onChangeText={code => this.setState({ code })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignIn;
