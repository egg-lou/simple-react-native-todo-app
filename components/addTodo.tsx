import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

type AddTodoProps = {
    submitHandler: (text: string) => void;
};

export default function AddTodo({ submitHandler }: AddTodoProps) {
    const [text, setText] = useState('');

    const changeHandler = (val: string) => {
        setText(val);
    }
    return (
        <View>
            <TextInput
                placeholder="new todo..."
                onChangeText={changeHandler}
                style={styles.input}
            />
            <Button
                onPress={() => submitHandler(text)}
                title="add todo"
                color="#B200ED"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomColor: '#ddd',
    }
})