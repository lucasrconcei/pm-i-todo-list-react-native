import { Text, StyleSheet, View } from 'react-native';
import TaskDetails from '../components/TaskDetails';

export default function TaskDetailsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.taskContainer}>
                <Text style={styles.title}>Detalhes Tarefa</Text>
                <TaskDetails />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    taskContainer: {
        paddingTop: 32,
        backgroundColor: "lightblue",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 16,
    },
})