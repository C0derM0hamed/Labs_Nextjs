import ErrorComponent from '@/components/ErrorComponent';
import React from 'react';

const Err = () => {
    return (
        <div>
            <ErrorComponent/>
        </div>
    );
};

export default Err;
Err.getLayout = function(page){
    return <>{page}</>
}