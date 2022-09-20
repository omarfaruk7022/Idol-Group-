import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const DistrictDetail = () => {
 const [districtDetail, setDistrictDetail] = useState();
 const { id } = useParams();

useEffect(() => {
    fetch(`http://localhost:5000/districtDetail/${id}`)
    .then((res) => res.json())
    .then((data) => setDistrictDetail(data));
}, [id]);
console.log(districtDetail);
    return (
        <div>
            <h1>this is country detail page</h1>
        </div>
    );
};

export default DistrictDetail;