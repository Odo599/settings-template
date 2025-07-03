export interface ToggleData {
    name: string;
    state: boolean;
    id: string;
}

export interface SettingsTemplateData {
    title?: string;
    toggles?: ToggleData[];
}
