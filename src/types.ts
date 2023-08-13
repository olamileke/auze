
export type TTask = {
    id: number;
    name: string;
    description: string;
    is_completed: boolean;
}

export type TControl = {
    label: string;
    type: string;
    properties: { [key: string]: string | boolean };
}