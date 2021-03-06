export interface FormioAlert {
    type: string;
    message: string;
}
export declare class FormioAlerts {
    alerts: FormioAlert[];
    setAlert(alert: FormioAlert): void;
    addAlert(alert: FormioAlert): void;
    setAlerts(alerts: FormioAlert[]): void;
}
