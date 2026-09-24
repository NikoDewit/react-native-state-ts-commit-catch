import { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { AppButton } from "./AppButton";
import { colors } from "../assets/theme";

export function TodoInput({ onAddTodo }) {
  const [enteredTodo, setEnteredTodo] = useState("placeholder Text");

  const inputHandler = (text) => {
    setEnteredTodo(text);
  };

  const addTodoHandler = () => {
    onAddTodo(enteredTodo);
    setEnteredTodo("");
  };

  const cancelHandler = () => {
    setEnteredTodo("");
  };

  return (
    <View style={styles.inputSection}>
      <Text style={styles.inputSectionTitle}>Add a Todo</Text>
      <TextInput
        onChangeText={inputHandler}
        value={enteredTodo}
        placeholder="Enter a todo"
        placeholderTextColor={styles.overlay}
        style={styles.textInput}
      />
      <Text style={styles.inputHint}>
        Type a task above, then tap Add Todo.
      </Text>
      <View style={styles.buttonContainer}>
        
        <AppButton text="Add Todo" onPress={addTodoHandler} />
        {/* TODO: wire onPress to cancelHandler */}
        <AppButton text="Cancel" onPress={cancelHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputSection: {
    backgroundColor: colors.surface0,
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 12,
  },
  inputSectionTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
  },
  textInput: {
    backgroundColor: colors.mantle,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.surface1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 15,
  },
  inputHint: {
    fontSize: 13,
    color: colors.overlay,
    marginTop: 8,
    fontStyle: "italic",
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 12,
    gap: 12,
  },
});
