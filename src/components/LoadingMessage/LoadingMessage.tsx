import React from 'react';

type LoadingMessageProps = {} & typeof defaultProps;

const defaultProps = {
    text: 'Загрузка данных...'
};

const LoadingMessage = ({ text }: LoadingMessageProps) => {
    return (
        <p>{text}</p>
    );
};

LoadingMessage.defaultProps = defaultProps;

export default LoadingMessage;
