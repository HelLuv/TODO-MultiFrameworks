import { create } from "zustand";
import { MOCK_TODOS } from "../mocks";
import { TTodo } from "../types";

interface TodosState {
  todos: TTodo[];
  completedTodos: TTodo[];
  completeTodo: (id: number) => void;
  uncompleteTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  deleteCompletedTodo: (id: number) => void;
  completeAllTodos: (by: number) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todos: MOCK_TODOS,
  completedTodos: [],
  completeTodo: (id) =>
    set((state) => {
      return {
        todos: state.todos.filter((todo) => todo.id !== id),
        completedTodos: [
          ...state.completedTodos,
          state.todos.find((todo) => todo.id === id)!,
        ],
      };
    }),
  uncompleteTodo: (id) =>
    set((state) => {
      return {
        completedTodos: state.completedTodos.filter((todo) => todo.id !== id),
        todos: [
          ...state.todos,
          state.completedTodos.find((todo) => todo.id === id)!,
        ],
      };
    }),
  deleteTodo: (id) =>
    set((state) => {
      return { todos: state.todos.filter((todo) => todo.id !== id) };
    }),
  deleteCompletedTodo: (id) =>
    set((state) => {
      return { todos: state.completedTodos.filter((todo) => todo.id !== id) };
    }),
  completeAllTodos: () => set({ todos: [] }),
}));
