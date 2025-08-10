import React from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
function DisplayForm({ form }) {
  const navigate = useNavigate();

  return (
    <div className="border rounded shadow p-5 m-5 flex flex-col gap-3 cursor-pointer"
      onClick={() => navigate(`/edit-form-admin/${form._id}`)}
      >
      <h1 className='text-xl font-bold'>{form.roadName}</h1>
      <hr />
      <h1 >{form.builder}</h1>

      <div className='flex justify-between items-center' >
        <div className=' '>
           <h1>
            Posted By: {form.user.name}
           </h1>
           <h1>
            Posted On: {moment(form.createdAt).format("DD-MM-YYYY, hh:mm:ss A")}
           </h1>
        </div>

      </div>
    </div>
  )
}

export default DisplayForm
