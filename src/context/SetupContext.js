import uuid from 'react-uuid';
import create from 'zustand';

export const useSetupStore = create((set) => ({
  factions: [],

  config: { page_size: 'a4' },

  addFaction: (faction) => set((state) => ({ factions: faction })),
  addConfig: (config) => set((state) => ({ config: config })),
}));
