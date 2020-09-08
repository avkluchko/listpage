import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    group?: string;
}

const ArticleListPage = ({ group }: Props) => {
    return (
        <div>
            <h2>ArticleListPage</h2>
            <p>{group}</p>
        </div>
    );
};

export default ArticleListPage;
