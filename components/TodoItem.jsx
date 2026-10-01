import { Text, View, Pressable, StyleSheet } from "react-native";

export function TodoItem({ title, id , onDeleteItem}) {
  return (
    <View style={styles.todoItem}>
      <Pressable
        android_ripple={{ color: "white" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={onDeleteItem.bind(this, id)}
      >
        <Text style={styles.todoItemText}>{title}</Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: "rebeccapurple",
    marginVertical: 8,
    borderRadius: 8,
  },
  todoItemText: {
    color: "white",
    fontSize: 18,
    padding: 8,
  },
  pressedItem: {
    backgroundColor: "blue",
    borderRadius: 8,
  },
});
