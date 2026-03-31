import uuid from 'react-uuid';
import create from 'zustand';
import { persist } from 'zustand/middleware';

export const useSetupStore = create(
  persist(
    (set) => ({
      factions: [],
      addFaction: (faction) => set({ factions: faction }),
    }),
    { name: 'ti4-setup-store' }
  )
);

//TODO: Figure out why store goes into infinite loop if addConfig is merged with above store

export const useConfigStore = create(
  persist(
    (set) => ({
      config: { letter: true, sc: false, base: true, pok: true, ds: false },
      addConfig: (newConfig) => set({ config: { ...newConfig } }),
    }),
    { name: 'ti4-config-store' }
  )
);
