import { useRouter } from 'next/router';
import React from 'react';

const ReviewID = () => {
    const router = useRouter()
    const {id,reviewId} = router.query
    return (
        <div>
            <h1>{id} -- {reviewId}</h1>
        </div>
    );
};

export default ReviewID;