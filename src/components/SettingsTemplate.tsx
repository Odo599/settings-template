import type { SettingsTemplateData } from "../interfaces";
import { Toggle } from "./Toggle";
import "../styles/globals.css";
import "../styles/SettingsTemplate.css";

export const SettingsTemplate: React.FC<SettingsTemplateData> = ({
    title,
    toggles,
}) => {
    const togglesElements = toggles?.map((toggle) => (
        <Toggle
            name={toggle.name}
            state={false}
            id={toggle.id}
            key={toggle.id}
        />
    ));

    return (
        <div className="settings-container">
            <h2>{title}</h2>
            <div>{togglesElements}</div>
        </div>
    );
};
