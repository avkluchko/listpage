import { replaceParams } from '../object';

describe('Object Helpers', () => {
    describe('replaceParams', () => {
        const params = {
            page: 1,
            limit: 20,
            filter: ''
        };

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
});
