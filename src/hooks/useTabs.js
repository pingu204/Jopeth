import { useState } from "react";
import { TABS } from "../enums";

export default function useTabs() {
	const [currentTab, setCurrentTab] = useState(TABS.ABOUT_ME);

	return { currentTab, setCurrentTab };
}
