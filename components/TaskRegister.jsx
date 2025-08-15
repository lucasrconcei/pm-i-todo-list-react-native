import { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button as PButton } from "react-native-paper";
import { useTaskContext } from "../contexts/TaskContext";
import { globalStyles } from "../styles/globalStyles";
import { useNavigation } from "@react-navigation/native";

export default function TaskRegister() {
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const tasksContext = useTaskContext();
  const navigation = useNavigation();

  const onChangeTextHandler = (task) => {
    setTask(task);
  };

  const onChangeDescHandler = (desc) => {
    setDescription(desc);
  }

  const onPressHandler = () => {
    tasksContext.addTask({
      id: new Date().toISOString(),
      title: task,
      description: description,
      date_reg: new Date(),
      date_done: null,
      done: false,
    });
    setTask("");
    navigation.navigate('TaskList');
  };


  return (
    <View style={styles.taskInputContainer}>
      <TextInput
        style={styles.taskInput}
        value={task}
        onChangeText={onChangeTextHandler}
        placeholder="Digite o título da tarefa aqui"
      />
      <TextInput
        style={styles.taskInput}
        value={description}
        numberOfLines={4}
        onChangeText={onChangeDescHandler}
        placeholder="Digite a descrição da tarefa aqui"
      />
      <View style={globalStyles.taskItemButtons}>
        <PButton icon="plus" mode="contained" onPress={onPressHandler}>
          Adicionar
        </PButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskInputContainer: {
    flex: 1,
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },

  taskInput: {
    borderWidth: 1,
    borderColor: "red",
    width: "60%",
    marginEnd: 8,
    padding: 8,
    borderRadius: 10,
  },
})