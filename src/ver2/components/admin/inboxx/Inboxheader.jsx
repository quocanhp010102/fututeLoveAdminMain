import React from "react";
import { IoIosSearch } from "react-icons/io";
import { MdNotifications } from 'react-icons/md';
const Inboxheader = (props) => {
  console.log(props.onUser.user_name);

  return (
    <div>
      <div className="inbox-header d-flex">
        <div className="inbox_header_left">
          <h1>Message</h1>
        </div>
        <div className="inbox_header_center">
          <button>
            <IoIosSearch />
          </button>

          <input type="text" />
        </div>
        <div className="inbox_header_right">
          <div className="khoi1">
            <button type="button" class="btn  position-relative">
            <MdNotifications className="fz-10" />
              <span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                <span class="visually-hidden">New alerts</span>
              </span>
            </button>
          </div>
          <div className="khoi2">
            <div className="khoi2_avt">
                <img src={props.onUser.link_avatar} alt="" />
            </div>
            <div className="khoi2_tennd">
                <h4>{props.onUser.user_name}</h4>
                <p>Project Manager</p>
            </div>
          </div>  
          <div className="khoi3">
              &#9650;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inboxheader;
