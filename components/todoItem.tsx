// TodoItem.js or TodoItem.tsx
import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface TodoItemProps {
    item: { text: string; key: string };
    pressHandler: (key: string) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ item, pressHandler }) => {
    return (
        <TouchableOpacity
            style={styles.item}
            onPress={() => pressHandler(item.key)}
        >
            <Text>{item.text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: "#bbb",
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 10,
    },
});

export default TodoItem;
