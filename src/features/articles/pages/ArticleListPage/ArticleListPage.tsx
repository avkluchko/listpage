import React, { useEffect } from 'react';
import { Link, RouteComponentProps } from '@reach/router';
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
            <ul>
                <li><Link to="?page=1">Page 1</Link></li>
                <li><Link to="?page=2">Page 2</Link></li>
                <li><Link to="?page=3">Page 3</Link></li>
                <li><Link to="?page=4">Page 4</Link></li>
            </ul>
            <ul>
                <li><Link to="?page=1&limit=10">10</Link></li>
                <li><Link to="?page=1&limit=20">20</Link></li>
                <li><Link to="?page=1&limit=50">50</Link></li>
            </ul>
        </div>
    );
};

export default ArticleListPage;
