export declare const onApply: (datas: any[], filterConfig: any) => {
    filterConfig: any;
    datas: any[];
    type: string;
    filter?: undefined;
} | {
    filter: {};
    datas: never[];
    type: string;
    filterConfig?: undefined;
};
export declare const searchGlobal: (datas: any[], text?: string) => {
    datas: any[];
    searchText: string;
    type: string;
};
