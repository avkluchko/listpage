import React from 'react';
import { Router } from '@reach/router';

import MainLayout from './components/MainLayout';

const DashboardPage = React.lazy(() => import('../features/dashboard/DashboardPage'));
const Articles = React.lazy(() => import('../features/articles/Articles'));

function App() {
    return (
        <Router>
            <MainLayout path="/">
                <DashboardPage path="/"/>
                <Articles path="articles/:group/*"/>
            </MainLayout>
        </Router>
    );
}

export default App;
