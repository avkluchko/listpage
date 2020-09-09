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
                            <Link to="/articles/nodejs?page=3&limit=50&filter=">NodeJS page=3&limit=50&filter=</Link>
                        </li>
                        <li>
                            <Link to="/articles/typescript">TypeScript</Link>
                        </li>
                        <li>
                            <Link to="/articles/typescript?page=2&limit=10&filter=123">TypeScript page=2&limit=10&filter=123</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default DashboardPage;
