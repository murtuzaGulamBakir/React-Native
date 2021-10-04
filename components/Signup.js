import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TextInput,
  Button,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

import axios from "axios";
import UploadImage from "../components/upload.js";

const SignUp = () => {
  const [firstName, onChangefirstName] = React.useState("");
  const [lastName, onChangelastName] = React.useState("");
  const [phone, onChangephone] = React.useState("");
  const [userName, onChangeuserName] = React.useState("");
  const [location, onChangelocation] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [photo, setPhoto] = React.useState(null);

  const getUser = () => {
    axios
      .get("http://192.168.43.148:3000/user/getUsers")
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
    // .then(function () {
    //   // always executed
    // });
  };
  const handleLogin = () => {
    alert("Name: " + firstName + "\nPassword:" + password);
    // axios
    //   .get("/user/getUsers")
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });

    axios
      .post("http://192.168.43.148:3000/user/addUser", {
        firstName: firstName,
        lastName: lastName,
        phone: phone,
        userName: userName,
        location: location,
        items: ["Oneplus 9t"],
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const handlePhotoUpload = () => {
    alert("handlePhotoUpload");
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}> DoneWithIt</Text>
        <Text style={{ marginLeft: 50, fontSize: 15 }}> Just sell it</Text>
      </View>

      <View style={styles.container}>
        <UploadImage onPress={handlePhotoUpload} />
      </View>

      <Text style={{ marginLeft: 10 }}>First Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangefirstName}
        value={firstName}
        placeholder="Eg:zaki"
      />
      <Text style={{ marginLeft: 10 }}>Last Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelastName}
        value={lastName}
        placeholder="Eg:Bhojani"
      />
      <Text style={{ marginLeft: 10 }}>Phone</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangephone}
        value={phone}
        placeholder="Eg: 8879xxxxxx"
      />
      <Text style={{ marginLeft: 10 }}>User Name:</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeuserName}
        value={userName}
        placeholder="Eg:MZB"
      />
      <Text style={{ marginLeft: 10 }}>Location</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangelocation}
        value={location}
        placeholder="Eg:Mumbai"
      />

      <TouchableOpacity onPress={handleLogin} style={styles.roundButton1}>
        <Text>Signup</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={getUser} style={styles.roundButton1}>
        <Text>Test</Text>
      </TouchableOpacity>

      <Text style={{ color: "blue", marginLeft: 200, marginBottom: 50 }}>
        Already a user? Login
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginLeft: 100,
    marginTop: 20,
    marginBottom: 50,
  },
  input: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    marginBottom: 30,
    borderRadius: 15,
  },
  input1: {
    height: 50,
    margin: 12,
    borderWidth: 2,
    padding: 10,
    borderRadius: 15,
  },
  submit: {
    marginLeft: 40,
    marginRight: 40,
    padding: 10,
    //borderRadius: 150,
  },
  roundButton1: {
    width: 350,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    padding: 5,
    borderRadius: 30,
    backgroundColor: "orange",
  },
});

export default SignUp;
