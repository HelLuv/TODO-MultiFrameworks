import { create } from "zustand";
import { MOCK_TODOS } from "../mocks";
import { TTodo } from "../types";

interface TodosState {
  todos: TTodo[];
  completeAllTodos: (by: number) => void;
}

export const useTodosStore = create<TodosState>((set) => ({
  todos: MOCK_TODOS,
  completeAllTodos: () => set({ todos: [] }),
}));
