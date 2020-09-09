import { replaceParams, subtractParams } from '../object';

describe('Object Helpers', () => {
    describe('replaceParams', () => {
        const params = { page: 1, limit: 20, filter: '' };

        it('should return same object if changes is empty', () => {
            expect(replaceParams(params, {})).toEqual(params);
        });

        it('should return new object with changes', () => {
            expect(replaceParams(params, { page: 1, limit: 50 }))
                .toEqual({ page: 1, limit: 50, filter: '' });

            expect(replaceParams(params, { page: 2, limit: 10, filter: '123asd' }))
                .toEqual({ page: 2, limit: 10, filter: '123asd' });
        });

        it('should return new object without extra parameters', () => {
            expect(replaceParams(params, { page: 3, boo: '1234' }))
                .toEqual({ page: 3, limit: 20, filter: '' });
        });
    });

    describe('subtractParams', () => {
        const defaultParams = { page: 1, limit: 20, filter: '' };

        it('should return same object if it or defaultParams empty', () => {
            expect(subtractParams({}, {})).toEqual({});
            expect(subtractParams({}, defaultParams)).toEqual({});
            expect(subtractParams({ year: 2020 }, {})).toEqual({ year: 2020 });
        });

        it('should return new object without default params', () => {
            expect(subtractParams({ page: 1, limit: 20, filter: '123asd' }, defaultParams))
                .toEqual({ filter: '123asd' });

            expect(subtractParams({ page: 1, limit: 50, filter: '123asd' }, defaultParams))
                .toEqual({ limit: 50, filter: '123asd' });

            expect(subtractParams({ page: 2, limit: 10, filter: '123asd' }, defaultParams))
                .toEqual({ page: 2, limit: 10, filter: '123asd' });

            expect(subtractParams({ page: 2, year: 2020 }, { year: null }))
                .toEqual({ page: 2, year: 2020 });

            expect(subtractParams({ page: 2, limit: 20, filter: undefined }, defaultParams))
                .toEqual({ page: 2 });

            expect(subtractParams({ page: 2, limit: 20, filter: '' }, defaultParams))
                .toEqual({ page: 2 });
        });
    });
});
