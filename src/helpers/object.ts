export interface Params {
    [key: string]: any;
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

const isUndefinedOrEmpty = (value?: any) => value === undefined || value === '';

export const subtractParams = (params: Params = {}, defaultParams: Params = {}) => {
    if (Object.keys(params).length === 0) {
        return {};
    }

    if (Object.keys(defaultParams).length === 0) {
        return params;
    }

    let result: Params = {};
    Object.keys(params).forEach(key => {
        if (defaultParams[key] === undefined || params[key] !== defaultParams[key]) {
            result[key] = params[key];
        }
    });

    return result;
}
