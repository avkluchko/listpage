import React from 'react';
import { Link, RouteComponentProps } from '@reach/router';

const DashboardPage: React.FC<RouteComponentProps> = () => {
    return (
        <div>
            <h2>Dashboard Page</h2>

            <ul>
                <li>
                    <p>Articles</p>
                    <ul>
                        <li>
                            <Link to="/articles/nodejs">JavaScript</Link>
                        </li>
                        <li>
                            <Link to="/articles/nodejs">NodeJS</Link>
                        </li>
                        <li>
                            <Link to="/articles/nodejs">TypeScript</Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default DashboardPage;
