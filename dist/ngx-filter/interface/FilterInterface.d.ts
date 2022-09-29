export interface IOptions {
    value: string | boolean;
    label: string;
}
export interface Idate {
    type: "date";
    key: string;
    operator: 'gte' | 'lte' | 'eq';
    value?: string | Date;
    label?: string;
    class?: string;
}
export interface ISelect {
    type: "select";
    key: string;
    value: string | number | boolean;
    options: IOptions[];
    label?: string;
    class?: string;
}
export interface ISort {
    type: "sort";
    key: string;
    value: 'asc' | 'desc';
    label?: string;
    class?: string;
}
export interface IFilterConfiguration {
    filterData: Idate | ISelect | ISort;
}
export interface IFilterConfig {
    type: "select" | "date" | "sort";
    key: string;
    value?: string | number | boolean;
    label?: string;
    options?: IOptions[];
    operator?: 'gte' | 'lte' | 'eq';
}
