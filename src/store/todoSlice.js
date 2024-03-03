import { createSlice, nanoid } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: { items: [] },

  reducers: {
    addTodo: {
      reducer(state, action) {
        state.items = [...state.items, action.payload];
      },
      prepare(prevPayload) {
        return { payload: { ...prevPayload, id: nanoid() } };
      },
    },
  },
});

export const todoReducer = todoSlice.reducer;

export const { addTodo } = todoSlice.actions;

export const selectTodos = state => state.items;
