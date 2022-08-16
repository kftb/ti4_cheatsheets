import uuid from 'react-uuid';
import create from 'zustand';

export const useSetupStore = create((set) => ({
  factions: [],

  addFaction: (faction) => set((state) => ({ factions: faction })),
}));

//TODO: Figure out why store goes into infinite loop if addConfig is merged with above store

export const useConfigStore = create((set) => ({
  config: { letter: true, sc: false },

  addConfig: (newConfig) => set({ config: { ...newConfig } }),
}));
