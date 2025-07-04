export interface ToggleData {
    name: string;
    id: string;
}

export interface InputData {
    name: string;
    id: string;
    placeholder: string;
}

export interface SettingsTemplateData {
    title?: string;
    toggles?: ToggleData[];
    inputs?: InputData[];
}
