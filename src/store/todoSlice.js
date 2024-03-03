import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },

  reducers: {
    createTodo(state, action) {},
  },
});

export const todoReducer = todoSlice.reducer;

export const { createTodo } = todoSlice.actions;

export const selectTodos = state => state.items;
