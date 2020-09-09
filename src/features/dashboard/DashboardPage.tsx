import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

import usePageTitle from '../system/usePageTitle';

const DashboardPage: React.FC<RouteComponentProps> = () => {
    usePageTitle('Dashboard');

    return (
        <div>
            <ul>
                <li>
                    <p>Articles</p>
                    <ul>
                        <li>
                            <Link to="/articles/javascript">JavaScript</Link>
                        </li>
                        <li>
                            <Link to="/articles/nodejs">NodeJS</Link>
                        </li>
                        <li>
                            <Link to="/articles/typescript">TypeScript</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default DashboardPage;
