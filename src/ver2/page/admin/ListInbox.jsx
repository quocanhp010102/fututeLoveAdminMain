
import React, { useState } from 'react';
import Inboxheader from '../../components/admin/inboxx/Inboxheader';
import Inboxnd from '../../components/admin/inboxx/Inboxnd';
import InboxTable from '../../components/admin/inboxx/InboxTable';
import InboxUserInfor from '../../components/admin/inboxx/InboxUserInfor';

const ListInbox = () => {
  const [isShower,setIsShower]=useState(false)
  const [contactid,setContactId]=useState([])
  const [user,setUser]=useState([])
  const handleGetContactId=(contact_id)=>{
    setContactId(contact_id)
    console.log(contactid);
  }
  const handleGetuse=(user)=>{
         setUser(user)
  }
  return (
   <>
     <Inboxheader onUser={contactid} />
     <div className="ndc d-flex">
     <InboxTable handleGetuse={handleGetuse} handleGetContactId={handleGetContactId}/>
     <Inboxnd onUser={user} contactid={contactid} />
     
     </div>
     
   </>
  )
}

export default ListInbox
