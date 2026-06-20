import { useRouter } from 'next/router';
import React from 'react';

const Docs = () => {
    const router = useRouter()
    const {params=[]} = router.query;
    if(params.length === 2){
        return <h1> {params[0]} -- {params[1]}</h1>
    }if(params.length ===1){
        return <h1>{params[0]}</h1>
    }
    return (
        <div>
            <h1>Docs</h1>
        </div>
    );
};

export default Docs;