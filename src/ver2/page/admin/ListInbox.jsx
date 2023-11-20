
import React, { useState } from 'react';
import Inboxheader from '../../components/admin/inboxx/Inboxheader';
import Inboxnd from '../../components/admin/inboxx/Inboxnd';
import InboxTable from '../../components/admin/inboxx/InboxTable';
import InboxUserInfor from '../../components/admin/inboxx/InboxUserInfor';

const ListInbox = () => {
   
    
  return (
   <>
     <Inboxheader/>
     <div className="ndc d-flex">
     <InboxTable/>
     <Inboxnd/>
     <InboxUserInfor/>
     </div>
     
   </>
  )
}

export default ListInbox
