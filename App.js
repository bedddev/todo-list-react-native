import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Task from "./components/Task";

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  };

  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1);
    setTaskItems(itemsCopy);
  };

  return (
    <View style={styles.container}>
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today's Tasks</Text>
        <View style={styles.items}>
          {taskItems.map((item, index) => (
            <TouchableOpacity key={index} onPress={() => completeTask(index)}>
              <Task text={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <KeyboardAvoidingView style={styles.writeTaskWrapper}>
        <TextInput
          style={styles.input}
          placeholder={"Write a task"}
          value={task}
          onChangeText={(text) => setTask(text)}
        />
        <TouchableOpacity onPress={() => handleTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
  },
  tasksWrapper: {
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  items: { marginTop: 30 },
  writeTaskWrapper: {
    position: "absolute",
    bottom: 16,
    width: "100%",
    flexDirection: "row",
    justifyContent:'space-between',
    alignItems: "center",
    paddingHorizontal: 20
  },
  input: {
    padding: 10,
    paddingLeft: 12,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#C0C0C0",
    width: 250,
    backgroundColor: 'transparent'
  },
  addWrapper: {
    width: 54,
    height: 54,
    backgroundColor: "#fff",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#C0C0C0",
    borderWidth: 1,
    backgroundColor: 'transparent'
  },
  addText: {
    fontSize: 24,
    color: '#C0C0C0'
  },
});
