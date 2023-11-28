import React from 'react'
import InboxUser from './InboxUser'

const InboxTable = (props) => {
  const handleClick=(contact_id)=>{
      props.handleGetContactId(contact_id);
      
  }
  return (
    <div className='inbox_table w-25 ml-2'>
      <div className="inbox_table_td">
        <h1>chat</h1>
        <span class="badge rounded-pill text-bg-primary">+</span>
      </div>
      <div className="inbox_table_chon d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
             <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked/>
             <label className="btn btn-outline-primary" for="btnradio1">Radio 1</label>

             <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off"/>
            <label class="btn btn-outline-primary" for="btnradio2">Radio 2</label>

            
          </div>
        


      </div>
      <InboxUser handleClick={handleClick} />
     
    </div>
  )
}

export default InboxTable
