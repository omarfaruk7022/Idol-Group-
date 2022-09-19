import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const {_id} = useParams();

    const [docDetail,setDocDetail] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/documents/${_id}`)
        .then(res => res.json())
        .then(data => setDocDetail(data))
    },[])
    console.log(docDetail);
    return (
        <div>
            <h1>{docDetail?.name}</h1>
            <h1>{docDetail?.comilla}</h1>
            <h1>{docDetail?.dhakaB}</h1>
            <h1>{docDetail?.dhaka2}</h1>
            <h1>{docDetail?.barishal}</h1>
            <h1>{docDetail?.cox}</h1>
        </div>
    );
};

export default Detail;