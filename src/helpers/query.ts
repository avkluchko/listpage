import qs from 'query-string';

interface ParsedQuery {
    [key: string]: string | string[] | number | null | undefined;
}

export const parseQuery = (query: string, numeric: string[] = []) => {
    let result: ParsedQuery = qs.parse(query);

    numeric.forEach(key => {
        if (result[key] !== undefined) {
            result[key] = Number(result[key]);
        }
    });

    return result;
}

