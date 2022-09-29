export declare const onApply: (datas: any, filterConfig: any) => {
    filterConfig: any;
    datas: any;
    type: string;
    filter?: undefined;
} | {
    filter: {};
    datas: any[];
    type: string;
    filterConfig?: undefined;
};
export declare const searchGlobal: (datas: any[], text: string) => {
    datas: any[];
    filterConfig: string;
    type: string;
};
