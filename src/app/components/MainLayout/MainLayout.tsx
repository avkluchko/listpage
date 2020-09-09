import React from 'react';
import { RouteComponentProps } from '@reach/router';

import Header from './components/Header';

interface Props extends RouteComponentProps {
    children: RouteComponentProps | RouteComponentProps[];
}

const MainLayout = (props: Props) => {
    return (
        <div>
            <Header />
            <React.Suspense fallback={<p>Loading module...</p>}>
                {props.children}
            </React.Suspense>
        </div>
    );
};

export default MainLayout;
