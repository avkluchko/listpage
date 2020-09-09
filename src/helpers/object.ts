type ParamsValue = string | string[] | number | null | undefined;

interface Params {
    [key: string]: ParamsValue;
}

export const replaceParams = (params: Params, newParams: Params = {}) => {
    if (Object.keys(newParams).length === 0) {
        return params;
    }

    let result: Params = {};
    Object.keys(params).forEach((key) => {
        result[key] = isUndefinedOrEmpty(newParams[key]) ? params[key] : newParams[key];
    });

    return result;
}

const isUndefinedOrEmpty = (value?: ParamsValue) => value === undefined || value === '';
