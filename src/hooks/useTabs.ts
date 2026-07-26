import { useTabStore } from "../stores/TabStore";

export default function useTabs() {
    const currentTab = useTabStore((state) => state.currentTab)
    const setCurrentTab = useTabStore((state) => state.setCurrentTab)

    // const [currentTab, setCurrentTab] = useState(TABS.ABOUT_ME);

    return { currentTab, setCurrentTab };
}
