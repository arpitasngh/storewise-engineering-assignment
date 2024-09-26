import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a task slice
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload);
    },
    toggleTaskStatus: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    editTask: (state, action) => {
      const { id, newName } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.name = newName;
      }
    },
  },
});

// Export actions
export const { addTask, removeTask, toggleTaskStatus, editTask } = tasksSlice.actions;

// Create the store
const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export default store;
