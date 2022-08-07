import uuid from 'react-uuid';
import create from 'zustand';

export const useSetupStore = create((set) => ({
  factions: ['arborec'],

  addFaction: (faction) => set((state) => ({ factions: [faction] })),
}));
