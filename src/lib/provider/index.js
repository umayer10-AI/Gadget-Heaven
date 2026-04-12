import Context from '@/Context/Context';
import React from 'react';

const Provider = ({children}) => {
    return (
        <div>
            <Context>
                {children}
            </Context>
        </div>
    );
};

export default Provider;