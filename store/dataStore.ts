import {create} from 'zustand';

const useBearStore = create(set => ({
  bears: 11,
  increasePopulation: () => set((state: any) => ({bears: state.bears + 1})),
  removeAllBears: () => set({bears: 0}),
}));

export default useBearStore;
