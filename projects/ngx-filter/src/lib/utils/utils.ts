import { chain, filter } from 'lodash'

export const onApply = (datas: any[], filterConfig: any) => {
    try {
        const filterResultEquality: any = {}
        const filterResultDate: any = {}
        const filterResultSort: any = {}
        for (const { filterData } of filterConfig) {
            for (const key in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, key) && filterData[key]) {
                    if (filterData["type"] === 'date') {
                        filterResultDate[`${filterData["key"]}-${filterData["operator"]}`] = {
                            operator: filterData["operator"],
                            value: filterData["value"],
                            key: filterData["key"]
                        }
                    } else if (filterData["type"] === 'sort') {
                        filterResultSort[filterData["key"]] = filterData["value"]
                    } else if (!!filterData["value"] || filterData["value"] === false) {
                        filterResultEquality[filterData["key"]] = filterData["value"]
                    }
                }
            }
        }
        const dataFilteredByEquality = filter(datas, filterResultEquality);
        const dataFilteredByDate = chain(dataFilteredByEquality).filter((data: { [x: string]: string | number | Date }) => {
            let isTrue = true;
            for (const key in filterResultDate) {
                const dataDate = new Date(data[filterResultDate[key]['key']])
                const filterDate = new Date(filterResultDate[key]["value"])
                dataDate.setHours(0, 0, 0, 0)
                filterDate.setHours(0, 0, 0, 0)
                if (filterResultDate[key]["value"]) {
                    if (filterResultDate[key]["operator"] === 'gte' && dataDate.getTime() < filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'lte' && dataDate.getTime() > filterDate.getTime()) {
                        isTrue = false;
                        return
                    }
                    else if (filterResultDate[key]["operator"] === 'eq' && dataDate.getTime() !== filterDate.getTime()) {
                        isTrue = false;
                        return
                    }
                }
            }
            return isTrue
        }).value()

        return { filterConfig, datas: dataFilteredByDate, type: 'group' }
    } catch (error) {
        return { filter: {}, datas: [], type: 'group' }
    }

}

export const searchGlobal = (datas: any[], text = "") => {
    const result = datas.filter((data) => Object.values(data).some((val: any) => String(val)?.toLowerCase()?.includes(text?.toLowerCase())));
    return { datas: result, searchText: text, type: 'text' }
}