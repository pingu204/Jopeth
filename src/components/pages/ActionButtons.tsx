import { SetStateAction } from "react";
import { ActionButton } from "../ActionButton"
import { useTabStore } from "../../stores/TabStore";
import { TABS } from "../../enums";

interface Props {
    visible: boolean
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

export const ActionButtons = ({
    visible,
    setVisible,
}: Props) => {
    const setCurrentTab = useTabStore((state) => state.setCurrentTab)

    const scrollToView = (id: string) => {
        const el = document.getElementById(id);

        if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    const RADIUS_PERCENT = 30; // distance from center

    const actions = [
        { iconName: "Rocketship", text: "Ask about Interests", onClick: () => scrollToView("interests"), angle: 145 },
        { iconName: "Books", text: "Ask about Alma Mater", onClick: () => scrollToView("education"), angle: 180 },
        { iconName: "Coffee", text: "Ask about Career", onClick: () => scrollToView("experience"), angle: 210 },
        { iconName: "ComputerKey", text: "Inspect Source Code", onClick: () => setCurrentTab(TABS.TECH), angle: 30 },
        { iconName: "Triangle", text: "Talk about Design", onClick: () => setCurrentTab(TABS.GRAPHIC_DESIGN), angle: 0 },
        { iconName: "Headphones", text: "View Tech Stack", angle: 330 },
    ];

    // Helper to derive top/left from center (50%, 50%)
    const getPositionStyle = (angleDeg: number) => {
        const rad = (angleDeg * Math.PI) / 180;
        const isInRightQuadrants = angleDeg <= 90 || (360-angleDeg) <= 90
        const x = 50 + (isInRightQuadrants ? -2 : 0) + RADIUS_PERCENT * Math.cos(rad);
        const y = 50 - RADIUS_PERCENT * Math.sin(rad);
        
        return {
            left: `${x}%`,
            top: `${y}%`,
            transform: "translate(-50%, -50%)",
        }
    };

    const actionsWithPositioning = actions.map(
        (action) => ({
            ...action,
            position: getPositionStyle(action.angle),
        })
    )

    return (<>       
    {actionsWithPositioning.map(({iconName, text, onClick, position}, index) => 
        <span key={index} style={position} className={`${visible ? "opacity-100" : "opacity-0"} group-hover:opacity-100 opacity-0 absolute transition-all hover:-translate-y-1 whitespace-nowrap w-max`}>
            <ActionButton
                iconName={iconName}
                text={text}
                onClick={() => {
                    onClick?.()
                    setVisible(false)
                }}
            />
        </span>
    )} 
    </>)
}