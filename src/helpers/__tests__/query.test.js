import { parseQuery } from '../query';

describe('Query Helpers', () => {
    describe('parseQuery', () => {
        it('should be empty object when empty search', () => {
            expect(parseQuery('')).toEqual({});
            expect(parseQuery('?')).toEqual({});
        });

        it('should return correct object', () => {
            expect(parseQuery('?page=1&filter=123asd')).toEqual({ page: '1', filter: '123asd' });
        });

        it('should return correct object with numbers', () => {
            expect(parseQuery('?page=1&limit=20&filter=123asd', ['page', 'limit']))
                .toEqual({ page: 1, limit: 20, filter: '123asd' });
        });
    });
});
