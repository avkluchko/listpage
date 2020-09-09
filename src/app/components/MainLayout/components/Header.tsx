import React from 'react';
import { Link } from '@reach/router';
import { useSelector } from 'react-redux';

import { selectTitle } from '../../../../features/system/reducer';

const Header = () => {
    const title = useSelector(selectTitle);

    return (
        <div>
            <h1><Link to="/">ListPageApp</Link></h1>
            <h2>{title}</h2>
        </div>
    );
};

export default Header;
