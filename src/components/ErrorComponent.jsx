import { useRouter } from 'next/router';
import React from 'react';

const ErrorComponent = () => {
    const router = useRouter()

    return (
        <div>
            <h1 className='alert alert-danger'>Error , Data Not Found</h1>
            <button className="btn btn-dark" onClick={()=>router.replace("/")}>Back To Home</button>
        </div>
    );
};

export default ErrorComponent;