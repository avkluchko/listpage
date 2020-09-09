import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setPageTitle } from './actions';

export default function usePageTitle(initTitle?: string | null) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(initTitle);

    useEffect(() => {
        document.title = createTitle('ListPageApp', title);
        dispatch(setPageTitle(title));
    }, [title, dispatch]);

    return [title, setTitle]
}

const createTitle = (baseName: string, title?: string | null) => {
    if (title && title.length > 0) {
        return `${title} – ${baseName}`
    }

    return baseName;
};
