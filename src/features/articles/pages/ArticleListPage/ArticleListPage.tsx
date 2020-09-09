import React, { useEffect } from 'react';
import { RouteComponentProps } from '@reach/router';
import { useDispatch } from 'react-redux';

import usePageTitle from '../../../system/usePageTitle';
import { initPage } from '../../store/actions';
import { parseQuery } from '../../../../helpers/query';

interface Props extends RouteComponentProps {
    group?: string;
}

const ArticleListPage = ({ group, location }: Props) => {
    const title = React.useMemo(() => {
        return `Articles about ${group}`;
    }, [group]);

    usePageTitle(title);

    const dispatch = useDispatch();

    const urlParams = React.useMemo(() => {
        return location ? parseQuery(location.search, ['page', 'limit', 'year']) : {};
    }, [location]);

    useEffect(() => {
        if (group) {
            dispatch(initPage(group, urlParams));
        }
    }, [group, urlParams, dispatch]);

    return (
        <div>
            <p>{group}</p>
        </div>
    );
};

export default ArticleListPage;
