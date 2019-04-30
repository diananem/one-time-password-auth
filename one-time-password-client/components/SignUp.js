import React, { Component } from "react";
import { View, Text } from "react-native";
import { Input, Button } from "react-native-elements";
import axios from "axios";

import { ROOT_URL } from "../utils";

class SignUp extends Component {
  state = {
    phone: "",
    error: ""
  };

  handleSubmit = async () => {
    const { phone } = this.state;
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone });
      await axios.post(`${ROOT_URL}/requestPassword`, { phone });
    } catch (err) {
      console.log(err);
      this.setState({ error: "Something went wrong" });
    }
  };

  render() {
    const { phone, error } = this.state;
    return (
      <View>
        {error.length !== 0 && (
          <Text style={{ fontSize: 18, marginBottom: 20 }}>{error}</Text>
        )}
        <View style={{ marginBottom: 10 }}>
          <Input
            label="Enter phone number"
            placeholder="111111111"
            value={phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <Button title="Submit" onPress={this.handleSubmit} />
      </View>
    );
  }
}

export default SignUp;
