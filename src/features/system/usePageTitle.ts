import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setPageTitle } from './actions';

export default function usePageTitle(initTitle?: string | null) {
    const dispatch = useDispatch();

    const [title, setTitle] = useState(initTitle);

    useEffect(() => {
        dispatch(setPageTitle(title));
    }, [dispatch, title]);

    return [title, setTitle]
}
