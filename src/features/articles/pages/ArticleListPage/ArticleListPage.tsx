import React from 'react';
import { RouteComponentProps } from '@reach/router';
import usePageTitle from '../../../system/usePageTitle';

interface Props extends RouteComponentProps {
    group?: string;
}

const ArticleListPage = ({ group }: Props) => {
    const title = React.useMemo(() => {
        return `Articles about ${group}`;
    }, [group]);

    usePageTitle(title);

    return (
        <div>
            <p>{group}</p>
        </div>
    );
};

export default ArticleListPage;
