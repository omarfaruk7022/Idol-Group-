import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { _id } = useParams();

  const [docDetail, setDocDetail] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`http://localhost:5000/documents/${_id}`)
      .then((res) => res.json())
      .then((data) => setDocDetail(data));
  }, []);
  console.log(docDetail);
  return (
    <div>
      <h1>{docDetail?.name}</h1>
      <h1>
        {docDetail?.comilla?.status}

        <span>
          <button
            className="underline text-purple-400 ml-2"
            onClick={() =>
              navigate(
                `/details/${docDetail?._id}/districtDetails/${docDetail?.comilla?.id}`
                
              )
             
            }
          >
            See more
          </button>
        </span>
      </h1>
      <h1>
        {docDetail?.dhakaB?.status}

        <span>
          <button
            className="underline text-purple-400 ml-2"
            onClick={() =>
              navigate(
                `/details/${docDetail?._id}/districtDetails/${docDetail?.dhakaB?.id}`
              )
            }
          >
            See more
          </button>
        </span>
      </h1>
      <h1>
        {docDetail?.dhaka2?.status}

        <span>
          <button
            className="underline text-purple-400 ml-2"
            onClick={() =>
              navigate(
                `/details/${docDetail?._id}/districtDetails/${docDetail?.dhaka2?.id}`
              )
            }
          >
            See more
          </button>
        </span>
      </h1>
      <h1>
        {docDetail?.barishal?.status}

        <span>
          <button
            className="underline text-purple-400 ml-2"
            onClick={() =>
              navigate(
                `/details/${docDetail?._id}/districtDetails/${docDetail?.barishal?.id}`
              )
            }
          >
            See more
          </button>
        </span>
      </h1>
      <h1>
        {docDetail?.cox?.status}

        <span>
          <button
            className="underline text-purple-400 ml-2"
            onClick={() =>
              navigate(
                `/details/${docDetail?._id}/districtDetails/${docDetail?.barishal?.id}`
              )
            }
          >
            See more
          </button>
        </span>
      </h1>
    </div>
  );
};

export default Detail;
