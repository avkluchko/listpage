import React from 'react';
import { RouteComponentProps } from '@reach/router';

interface Props extends RouteComponentProps {
    children: RouteComponentProps | RouteComponentProps[];
}

const MainLayout = (props: Props) => {
    return (
        <div>
            <React.Suspense fallback={<p>Loading module...</p>}>
                {props.children}
            </React.Suspense>
        </div>
    );
};

export default MainLayout;
