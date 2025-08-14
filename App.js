import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TaskContextProvider } from "./contexts/TaskContext";
import TaskList from "./components/TaskList";
import TaskRegister from "./components/TaskRegister";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TaskListScreen from './screens/TaskListScreen';
import TaskFormScreen from './screens/TaskFormScreen';
import TaskHomeScreen from "./screens/TaskHomeScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="TaskHome">
          <Stack.Screen name="TaskHome" component={TaskHomeScreen}></Stack.Screen>
          <Stack.Screen name="TaskList" component={TaskListScreen}></Stack.Screen>
          <Stack.Screen name="TaskForm" component={TaskFormScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
}


export const styles = StyleSheet.create({
 
  taskItemButtons: {
    flexDirection: 'row',
    gap: 10,
  },
});
