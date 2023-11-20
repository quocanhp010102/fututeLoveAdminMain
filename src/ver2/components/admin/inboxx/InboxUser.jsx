import React from 'react'
import { FaMobile,FaChevronRight  } from 'react-icons/fa';
import { RiMore2Fill } from 'react-icons/ri';
const InboxUser = (props) => {
  return (
    <>
    
      <div className="inbox-user d-flex justify-content-between">
        <div className="inbox-user-left">
             <img src="logo192.png" alt="" />
        </div>
        <div className="inbox-user-center">
             <h3>Andreana Viola</h3>
             <p>Hi, How are you today?</p>
        </div>
        <div className="inbox-user-right">
              <h4>1m ago</h4>
              <p>2</p>
        </div>
      </div>
    </>
  )
}

export default InboxUser
