import { create } from "zustand";
import { MOCK_TODOS } from "../mocks";
import { TTodo } from "../types";

interface TodosState {
  todos: TTodo[];
  completedTodos: TTodo[];
  isCreating: boolean;
  completeTodo: (id: number) => void;
  uncompleteTodo: (id: number) => void;
  createTodo: (todo: TTodo) => void;
  setIsCreating: (is: boolean) => void;
  deleteTodo: (id: number) => void;
  deleteCompletedTodo: (id: number) => void;
  completeAllTodos: (by: number) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  /* State */
  todos: MOCK_TODOS,
  completedTodos: [],
  isCreating: false,

  /* Actions */
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
  createTodo: (todo) =>
    set((state) => {
      return {
        todos: [...state.todos, { ...todo }],
      };
    }),

  setIsCreating: (is: boolean) =>
    set(() => {
      return {
        isCreating: is,
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
