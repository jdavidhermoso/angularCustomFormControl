// This model should be logic-specific. Your items model could change.
export interface Item {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    image: string;
    disabled: boolean;
}
