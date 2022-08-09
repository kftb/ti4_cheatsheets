import uuid from 'react-uuid';
import create from 'zustand';

export const useSetupStore = create((set) => ({
  factions: ['arborec', 'argent', 'barony', 'jolnar', 'l1z1x', 'titans', 'xxcha', 'yssaril'],

  config: { page_size: 'letter' },

  addFaction: (faction) => set((state) => ({ factions: faction })),
  addConfig: (config) => set((state) => ({ config: config })),
}));
