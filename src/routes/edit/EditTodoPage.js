import React from 'react';
import { TodoForm } from '../../ui/TodoForm';
import { useTodos } from '../App/useTodos';
import { useParams } from 'react-router-dom';

function EditTodoPage() {
    const params = useParams();
    const id = Number(params.id);


    const { stateUpdaters } = useTodos();
    const { editTodo } = stateUpdaters;

    return (
        <TodoForm 
            label="Edita tu nuevo TODO"
            submitText = "Editar"
            submitEvent = {() => editTodo(id, newTest)}
        />
    );
}

export { EditTodoPage }