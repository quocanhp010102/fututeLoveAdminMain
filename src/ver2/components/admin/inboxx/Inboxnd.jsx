import React, { useCallback, useEffect, useRef, useState } from "react";
import { FaMobile, FaChevronRight } from "react-icons/fa";
import { RiMore2Fill } from "react-icons/ri";
import { FaCoffee } from "react-icons/fa";
import { FaPaperPlane } from "react-icons/fa";
import InboxUserInfor from "./InboxUserInfor";
import axios from "axios";
const Inboxnd = (props) => {
  
  const messagesRef = useRef(null);
  const [listUserib,setListUserss]=useState([])
  const [isShower,setIsShower]=useState(false)
  const [messages, setMessages] = useState([
    // { id: 1, text: "Hello", sender: "user" },
    // { id: 2, text: "Hi there!", sender: "other" },
    // { id: 3, text: "How are you?", sender: "user" },
    // Thêm các tin nhắn khác nếu cần
  ]);

  const storedData = localStorage.getItem('user-info');
  
  let id_userr;
if (storedData) {
  const parsedData = JSON.parse(storedData);
   id_userr=parsedData.id_user;
 
} else {
  console.log('Không có dữ liệu trong localStorage');
}
//lay danh sach tin nhan giua 2 nguoi
  useEffect(()=>{
    fetchData();
    //fetchData2();
  },[])
  
  const fetchData = useCallback(async () => {
    
    try {
      const response = await axios.get("http://localhost:3000/tinnhan");
      if (response.data.message) {
       // toast.error(response.data.message);   
      } else {
        const data = response.data;
        setMessages(data);
      }
    } catch (error) {
      return //toast.error(error.message);
    } finally {
     // setIsLoading(false);
    }
  }, []);
  const fetchData2 = useCallback(async () => {
    
    try {
      const response = await axios.get("http://localhost:3000/listinbox");
      if (response.data.message) {
       // toast.error(response.data.message);   
      } else {
        const data = response.data;
        setListUserss(data);
      }
    } catch (error) {
      return //toast.error(error.message);
    } finally {
     // setIsLoading(false);
    }
  }, []);
  useEffect(() => {
    // Chắc chắn rằng messagesRef và messagesRef.current tồn tại
    if (messagesRef && messagesRef.current) {
      // Cuộn đến cuối cùng khi messages thay đổi
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);
  const handlePatchData=async(text)=>{
    try {
      console.log(text);
      const response = await axios.get("http://localhost:3000/listinbox");
      if (response.data.message) {

        // Xử lý thông báo nếu cần
        // toast.error(response.data.message);
      } else {
         
          console.log(response.data);
          response.data.map(async (e)=>{
            if(e.id_user===props.contactid){
                const response2 = await axios.patch(`http://localhost:3000/listinbox/${e.id}`,{
                  
                  id_user:e.id_user,
                  last_message_time:e.last_message_time,
                  link_avatar:e.link_avatar,
                  user_name:e.user_name,
                  message:text
                })
              if (response2.data.message) {

                // Xử lý thông báo nếu cần
                // toast.error(response.data.message);
              }
              return

            }

          })
        // Xử lý dữ liệu trả về nếu cần
        // const data = response.data;
        // setMessages(data);
      }
    } catch (error) {
      // Xử lý lỗi nếu PATCH request thất bại
      // toast.error(error.message);
    } finally {
      // Các hành động cần thực hiện sau khi hoàn tất
      // setIsLoading(false);
    }
  }
  const sendMessage = async (text) => {
    const newMessage = { message:text, receiver_id:props.contactid, sender_id: id_userr,timestamp: "2023-11-16T10:59:16",
    contact_id: props.contactid };
    const newMessage2 = { id: messages.length + 1,message:text, receiver_id:props.contactid, sender_id: id_userr,timestamp: "2023-11-16T10:59:16",
    contact_id: props.contactid };
    setMessages([...messages, newMessage2]);
    
    try {
      const response = await axios.post("http://localhost:3000/tinnhan",newMessage);
      if (response.data.message) {
       // toast.error(response.data.message);
      } else {
        const data = response.data;
       // setMessages(data);
      }
    } catch (error) {
      return //toast.error(error.message);
    } finally {
     // setIsLoading(false);
    }
    console.log(newMessage);
  };
  return (
    <>
    
    { !isShower&&
     <div className="w-75 d-flex">
           <div className="message-container w-100 mt-2 mx-3">
           <div className="inbox-user-td w-100">
             <div className="td-img d-flex gap-2">
               <img src="logo192.png" alt="" />
               <div className="inbox-user-td-nd">
                 <h3>Alexandra Michu</h3>
                 <p>Online</p>
               </div>
             </div>
     
             <div className="inbox-user-td-btgoi">
               <FaMobile />
               <FaChevronRight />
               <RiMore2Fill className="cursor-pointer" onClick={()=>{setIsShower(true)}}/>
             </div>
           </div>
           <div ref={messagesRef} className="message-window ">
           
             {messages.map( (message) => {
                   
                    if(message.contact_id===props.contactid&&(message.receiver_id===id_userr||message.sender_id===id_userr)){
                    //   const response2 = await axios.patch(`http://localhost:3000/listinbox/${props.contactid}`,{
                  
                     
                    //   message:message.message
                    // })
                      return  (
                        <div
                          key={message.id}
                          className={`message ${
                            message.sender_id === id_userr ? "user" : "other"
                          }`}
                        >
                          {message.message}
                          
                        </div>
                      )
                    }


             }
             )}
             
           </div>
           
           <div className="input-container">
             <input
               className=""
               type="text"
               placeholder="Type your message..."
               onKeyDown={(e) => {
                 if (e.key === "Enter" && e.target.value.trim() !== "") {
                  e.preventDefault();
                   sendMessage(e.target.value);
                  
                   e.target.value = "";
                 }
               }}
             />
             <FaCoffee />
             <FaPaperPlane />
           </div>
         </div>
         </div>
    }
    
     
   
    {
      isShower&&(
        <div className="w-75 d-flex">
         <div className="message-container mt-2 mx-3">
           <div className="inbox-user-td w-100">
             <div className="td-img d-flex gap-2">
               <img src="logo192.png" alt="" />
               <div className="inbox-user-td-nd">
                 <h3>Alexandra Michu</h3>
                 <p>Online</p>
               </div>
             </div>
     
             <div className="inbox-user-td-btgoi">
               <FaMobile />
               <FaChevronRight />
               <RiMore2Fill className="cursor-pointer" onClick={()=>{setIsShower(true)}}/>
             </div>
           </div>
           <div ref={messagesRef} className="message-window ">
           
             {messages.map((message) => {

                    if(message.contact_id===props.contactid&&(message.receiver_id===id_userr||message.sender_id===id_userr)){
                      return  (
                        <div
                          key={message.id}
                          className={`message ${
                            message.sender_id === id_userr ? "user" : "other"
                          }`}
                        >
                          {message.message}
                         
                        </div>
                      )
                    }


             }
             )}
             
           </div>
           
           <div className="input-container">
             <input
               className=""
               type="text"
               placeholder="Type your message..."
               onKeyDown={(e) => {
                 if (e.key === "Enter" && e.target.value.trim() !== "") {
                  e.preventDefault();
                   sendMessage(e.target.value);
                   e.target.value = "";
                 }
               }}
             />
             <FaCoffee />
             <FaPaperPlane />
           </div>
         </div>
       <InboxUserInfor onClose={()=>setIsShower(false)}/>
  </div>
    
      )
    
    
      
     
    }
    
    
    </>
  
  );
};

export default Inboxnd;
