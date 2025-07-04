import type { SettingsTemplateData } from "../interfaces";
import { Toggle } from "./Toggle";
import "../styles/globals.css";
import "../styles/SettingsTemplate.css";
import { Input } from "./Input";

export const SettingsTemplate: React.FC<SettingsTemplateData> = ({
    title,
    toggles,
    inputs,
}) => {
    const togglesElements = toggles?.map((toggle) => (
        <Toggle name={toggle.name} id={toggle.id} key={toggle.id} />
    ));

    const inputElements = inputs?.map((input) => (
        <Input
            name={input.name}
            id={input.id}
            placeholder={input.placeholder}
            key={input.id}
        />
    ));

    return (
        <div className="settings-container">
            <h2>{title}</h2>
            <div>{togglesElements}</div>
            <div>{inputElements}</div>
        </div>
    );
};
