import React, { useState } from "react";
import { View, StyleSheet, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [text, setText] = useState("");

  const speak = () => {
    if (text.trim() === "") {
      alert("Please enter some text");
      return;
    }
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={(inputText) => setText(inputText)}
        value={text}
        placeholder="Enter text"
      />
      <View style={styles.buttonContainer}>
        <Button title="Press to hear text" onPress={speak} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  input: {
    width: "75%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  buttonContainer: {
    width: "50%",
  },
});
