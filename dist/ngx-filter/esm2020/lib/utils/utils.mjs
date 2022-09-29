import _ from 'lodash';
export const onApply = (datas, filterConfig) => {
    try {
        const filterResultEquality = {};
        const filterResultDate = {};
        const filterResultSort = {};
        for (const { filterData } of filterConfig) {
            for (const key in filterData) {
                if (Object.prototype.hasOwnProperty.call(filterData, key) && filterData[key]) {
                    if (filterData["type"] === 'date') {
                        filterResultDate[`${filterData["key"]}-${filterData["operator"]}`] = {
                            operator: filterData["operator"],
                            value: filterData["value"],
                            key: filterData["key"]
                        };
                    }
                    else if (filterData["type"] === 'sort') {
                        filterResultSort[filterData["key"]] = filterData["value"];
                    }
                    else if (!!filterData["value"] || filterData["value"] === false) {
                        filterResultEquality[filterData["key"]] = filterData["value"];
                    }
                }
            }
        }
        const dataFilteredByEquality = _.filter(datas, filterResultEquality);
        const dataFilteredByDate = _.chain(dataFilteredByEquality).filter((data) => {
            let isTrue = true;
            for (const key in filterResultDate) {
                const dataDate = new Date(data[filterResultDate[key]['key']]);
                const filterDate = new Date(filterResultDate[key]["value"]);
                dataDate.setHours(0, 0, 0, 0);
                filterDate.setHours(0, 0, 0, 0);
                if (filterResultDate[key]["value"]) {
                    if (filterResultDate[key]["operator"] === 'gte' && dataDate.getTime() < filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'lte' && dataDate.getTime() > filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                    else if (filterResultDate[key]["operator"] === 'eq' && dataDate.getTime() !== filterDate.getTime()) {
                        isTrue = false;
                        return;
                    }
                }
            }
            return isTrue;
        }).value();
        return { filterConfig, datas: dataFilteredByDate, type: 'group' };
    }
    catch (error) {
        return { filter: {}, datas: [], type: 'group' };
    }
};
export const searchGlobal = (datas, text) => {
    const result = datas.filter((data) => Object.values(data).some((val) => String(val).toLowerCase().includes(text.toLowerCase())));
    return { datas: result, filterConfig: text, type: 'text' };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9maWx0ZXIvc3JjL2xpYi91dGlscy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLENBQUMsTUFBTSxRQUFRLENBQUE7QUFFdEIsTUFBTSxDQUFDLE1BQU0sT0FBTyxHQUFHLENBQUMsS0FBSyxFQUFFLFlBQVksRUFBRSxFQUFFO0lBQzNDLElBQUk7UUFDQSxNQUFNLG9CQUFvQixHQUFHLEVBQUUsQ0FBQTtRQUMvQixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUMzQixNQUFNLGdCQUFnQixHQUFHLEVBQUUsQ0FBQTtRQUMzQixLQUFLLE1BQU0sRUFBRSxVQUFVLEVBQUUsSUFBSSxZQUFZLEVBQUU7WUFDdkMsS0FBSyxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUU7Z0JBQzFCLElBQUksTUFBTSxDQUFDLFNBQVMsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsSUFBSSxVQUFVLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzFFLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxLQUFLLE1BQU0sRUFBRTt3QkFDL0IsZ0JBQWdCLENBQUMsR0FBRyxVQUFVLENBQUMsS0FBSyxDQUFDLElBQUksVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsR0FBRzs0QkFDakUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxVQUFVLENBQUM7NEJBQ2hDLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDOzRCQUMxQixHQUFHLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQzt5QkFDekIsQ0FBQTtxQkFDSjt5QkFBTSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxNQUFNLEVBQUU7d0JBQ3RDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FB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Q0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0SSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQTtBQUM5RCxDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5leHBvcnQgY29uc3Qgb25BcHBseSA9IChkYXRhcywgZmlsdGVyQ29uZmlnKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbHRlclJlc3VsdEVxdWFsaXR5ID0ge31cclxuICAgICAgICBjb25zdCBmaWx0ZXJSZXN1bHREYXRlID0ge31cclxuICAgICAgICBjb25zdCBmaWx0ZXJSZXN1bHRTb3J0ID0ge31cclxuICAgICAgICBmb3IgKGNvbnN0IHsgZmlsdGVyRGF0YSB9IG9mIGZpbHRlckNvbmZpZykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBmaWx0ZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGZpbHRlckRhdGEsIGtleSkgJiYgZmlsdGVyRGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpbHRlckRhdGFbXCJ0eXBlXCJdID09PSAnZGF0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyUmVzdWx0RGF0ZVtgJHtmaWx0ZXJEYXRhW1wia2V5XCJdfS0ke2ZpbHRlckRhdGFbXCJvcGVyYXRvclwiXX1gXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wZXJhdG9yOiBmaWx0ZXJEYXRhW1wib3BlcmF0b3JcIl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmlsdGVyRGF0YVtcInZhbHVlXCJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWx0ZXJEYXRhW1wia2V5XCJdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpbHRlckRhdGFbXCJ0eXBlXCJdID09PSAnc29ydCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyUmVzdWx0U29ydFtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoISFmaWx0ZXJEYXRhW1widmFsdWVcIl0gfHwgZmlsdGVyRGF0YVtcInZhbHVlXCJdID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXJSZXN1bHRFcXVhbGl0eVtmaWx0ZXJEYXRhW1wia2V5XCJdXSA9IGZpbHRlckRhdGFbXCJ2YWx1ZVwiXVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRhRmlsdGVyZWRCeUVxdWFsaXR5ID0gXy5maWx0ZXIoZGF0YXMsIGZpbHRlclJlc3VsdEVxdWFsaXR5KTtcclxuICAgICAgICBjb25zdCBkYXRhRmlsdGVyZWRCeURhdGUgPSBfLmNoYWluKGRhdGFGaWx0ZXJlZEJ5RXF1YWxpdHkpLmZpbHRlcigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaXNUcnVlID0gdHJ1ZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZmlsdGVyUmVzdWx0RGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YURhdGUgPSBuZXcgRGF0ZShkYXRhW2ZpbHRlclJlc3VsdERhdGVba2V5XVsna2V5J11dKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsdGVyRGF0ZSA9IG5ldyBEYXRlKGZpbHRlclJlc3VsdERhdGVba2V5XVtcInZhbHVlXCJdKVxyXG4gICAgICAgICAgICAgICAgZGF0YURhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICAgICAgICAgIGZpbHRlckRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcclxuICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJ2YWx1ZVwiXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXJSZXN1bHREYXRlW2tleV1bXCJvcGVyYXRvclwiXSA9PT0gJ2d0ZScgJiYgZGF0YURhdGUuZ2V0VGltZSgpIDwgZmlsdGVyRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUcnVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdsdGUnICYmIGRhdGFEYXRlLmdldFRpbWUoKSA+IGZpbHRlckRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVHJ1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZmlsdGVyUmVzdWx0RGF0ZVtrZXldW1wib3BlcmF0b3JcIl0gPT09ICdlcScgJiYgZGF0YURhdGUuZ2V0VGltZSgpICE9PSBmaWx0ZXJEYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RydWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBpc1RydWVcclxuICAgICAgICB9KS52YWx1ZSgpXHJcbiAgICAgICAgcmV0dXJuIHsgZmlsdGVyQ29uZmlnLCBkYXRhczogZGF0YUZpbHRlcmVkQnlEYXRlLCB0eXBlOiAnZ3JvdXAnIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZmlsdGVyOiB7fSwgZGF0YXM6IFtdLCB0eXBlOiAnZ3JvdXAnIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzZWFyY2hHbG9iYWwgPSAoZGF0YXM6IGFueVtdLCB0ZXh0OiBzdHJpbmcpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGRhdGFzLmZpbHRlcigoZGF0YSkgPT4gT2JqZWN0LnZhbHVlcyhkYXRhKS5zb21lKCh2YWw6IGFueSkgPT4gU3RyaW5nKHZhbCkudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKSk7XHJcbiAgICByZXR1cm4geyBkYXRhczogcmVzdWx0LCBmaWx0ZXJDb25maWc6IHRleHQsIHR5cGU6ICd0ZXh0JyB9XHJcbn0iXX0=