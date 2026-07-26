import { create } from 'zustand';
import { TABS } from '../enums';

type TabStore = {
    currentTab: string;
    setCurrentTab: (tab: string) => void;
};

export const useTabStore = create<TabStore>((set) => ({
    currentTab: TABS.ABOUT_ME,
    setCurrentTab: (tab) => set({ currentTab: tab }),
}));
