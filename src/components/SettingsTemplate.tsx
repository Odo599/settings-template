import type { SettingsTemplateData } from "../interfaces";

export const SettingsTemplate: React.FC<SettingsTemplateData> = ({
    title,
    toggles,
}) => {
    return (
        <div>
            <h2>{title}</h2>
            <div>{JSON.stringify(toggles)}</div>
        </div>
    );
};
