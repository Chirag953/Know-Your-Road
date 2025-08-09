import React from 'react'
import moment from 'moment';
function DisplayForm({ form }) {
  return (
    <div className="border rounded shadow p-5 m-5 flex flex-col gap-3 cursor-pointer">
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
