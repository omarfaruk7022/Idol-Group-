import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";

const Documents = () => {
  const navigate = useNavigate();
const [documents,setDocuments] = useState()


useEffect(()=>{ 
  fetch(`http://localhost:5000/documents`)
  .then(res => res.json())
  .then(data => setDocuments(data))
},[])


  return (
    <div className="my-12">
      <h1 className="text-2xl text-green-400">Documents</h1>
      <div class="overflow-hidden overflow-x-auto border border-gray-100 rounded">
        <table class="min-w-full text-sm divide-y divide-gray-200">
          <thead>
            <tr class="bg-gray-50">
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Name
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Comilla
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Dhaka-B
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Dhaka-2
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Barishal
              </th>
              <th class="px-4 py-2 font-medium text-left text-gray-900 whitespace-nowrap">
                Cox-Bazar
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-100">
           {
              documents?.map(document => 
                <>
                
                <tr>
                <td class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap">
                 {document?.name}
                </td>
                <td class=" py-2 text-gray-700 whitespace-nowrap">
                  {document?.comilla?.status}
                  <span>
                    <button className="underline text-purple-400 ml-2" onClick={() => navigate(`/details/${document._id}`)} >
                   
                    
                      See more
                    </button>
                  </span>
                </td>
                <td class="py-2 text-gray-700 whitespace-nowrap">
                  {document?.dhakaB?.status}
                  <span>
                    <button className="underline text-purple-400 ml-2" onClick={() => navigate(`/details/${document._id}`)} >
                      See more
                    </button>
                  </span>
                </td>
                <td class=" py-2 text-gray-700 whitespace-nowrap">
                  {document?.dhaka2?.status}
                  <span>
                    <button className="underline text-purple-400 ml-2" onClick={() => navigate(`/details/${document._id}`)} >
                      See more
                    </button>
                  </span>
                </td>
                <td class="py-2 text-gray-700 whitespace-nowrap">
                  {document?.barishal?.status}
                  <span>
                    <button className="underline text-purple-400 ml-2" onClick={() => navigate(`/details/${document._id}`)} >
                      See more
                    </button>
                  </span>
                </td>
                <td class="py-2 text-gray-700 whitespace-nowrap">
                  {document?.cox?.status}
                  <span>
                    <button className="underline text-purple-400 ml-2" onClick={() => navigate(`/details/${document._id}`)} >
                      See more
                    </button>
                  </span>
                </td>
              </tr>
                </>
              )
           }
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Documents;
