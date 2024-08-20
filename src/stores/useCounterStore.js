import { create } from 'zustand';

const initalState = {count: 0};

const useCounterStore = create((set) => ({
    ...initalState,
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
    reset: () => set((state) => ({count: 0})),
}));

export default useCounterStore;