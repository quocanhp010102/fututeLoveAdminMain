import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { FaMobile,FaChevronRight  } from 'react-icons/fa';
import { RiMore2Fill } from 'react-icons/ri';
import axios from 'axios';
import { useCallback } from 'react';

const InboxUser = (props) => {
  const [listinb,setListinb]=useState([])
  useEffect(()=>{
    fetchData();
    

  },[])
  const clickhere=(contact_id)=>{
     props.handleClick(contact_id)
  }
  const fetchData = useCallback(async () => {
    
    try {
      const response = await axios.get("http://localhost:3000/listinbox");
      if (response.data.message) {
       // toast.error(response.data.message);
      } else {
        const data = response.data;
        
        setListinb(data);
       // console.log(listinb);
      }
    } catch (error) {
      return //toast.error(error.message);
    } finally {
     // setIsLoading(false);
    }
  }, []);
  return <>
     {
      listinb.map((inbuser,index)=>(
        <div className="inbox-user d-flex justify-content-between">
        
        <div className="inbox-user-left">
             <img src={inbuser.link_avatar}  onClick={()=>clickhere(inbuser.id_user)} alt="" />
        </div>
        <div className="inbox-user-center">
             <h3>{inbuser.user_name}</h3>
             <p>{inbuser.message}</p>
             
        </div>
        <div className="inbox-user-right">
              <h4>1m ago {index}</h4>
              <p>2</p>
        </div>
      </div>
      ))
     }
  </>
}

export default InboxUser
