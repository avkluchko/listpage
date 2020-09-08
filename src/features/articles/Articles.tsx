import React from 'react';
import { RouteComponentProps, Router } from '@reach/router';

import ArticleListPage from './pages/ArticleListPage/ArticleListPage';

const Articles: React.FC<RouteComponentProps> = () => {
    return (
        <Router primary={false}>
            <ArticleListPage path="/" />
        </Router>
    );
};

export default Articles;
