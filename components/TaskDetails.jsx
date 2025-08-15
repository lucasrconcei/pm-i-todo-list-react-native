import { useRoute } from "@react-navigation/native";
import { View, Text, StyleSheet } from "react-native";

export default function TaskDetails() {

    const route = useRoute();
    const {task} = route.params;

    console.log(task)

    return (
        <View>
            <Text>Título: {task?.title}</Text>
            <Text>Descrição: {task?.description}</Text>
            <Text>date_reg: {task?.date_reg?.toLocaleDateString("pt-BR")}</Text>
            <Text>date_done: {task?.date_done?.toLocaleDateString("pt-BR")}</Text>
        </View>
    );
}

const styles = StyleSheet.create({ 
    containerDetails: {
        flex: 1,
        flexDirection: "column",
        gap: 5,
    }
});
