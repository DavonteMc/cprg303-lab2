import React, {useState} from 'react';
import { View, TextInput, Button, StyleSheet } from "react-native";

function ToDoForm() {
  const [text, onChangeText] = useState("");
  return (
    <View style={styles.form}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Add a new task..."
      />
      <Button 
        title="Add" 
        style={styles.button}/>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginRight: 10,
  },
  button: {
    width: 30,
  },
});

export default ToDoForm;
