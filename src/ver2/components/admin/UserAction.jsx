import React, { useEffect, useRef, useState } from "react";
import "./css/UserAction.css";
import { FaSearch } from "react-icons/fa";

import OptionUserActive from "./OptionUserActive";
import { IoIosMore } from "react-icons/io";

const UserAction = () => {
  const [action, setAction] = useState(false);
  const [action2, setAction2] = useState(false);
  const [showMoreAtIndex, setShowMoreAtIndex] = useState(-1);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (menuRef.current) {
        if (!menuRef.current.contains(e.target)) setShowMoreAtIndex(-1);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <>
      <div className="useraction p-3 ml-5">
        <h1>USER ACTION</h1>
        <div className="useraction-than">
          <div className="action-left">
            <div className="action-left-td">
              <h2>Activity</h2>
              <div className="action-search">
                <FaSearch size={20} />
                <input type="text" placeholder="search..." />
              </div>
              <div className="action-luachon">
                <select name="" id="">
                  <option value="">Rencent</option>
                  <option value="">Rencent</option>
                  <option value="">Rencent</option>
                </select>
              </div>
            </div>
            <div className="action-left-nd">
                
              <div className="acton-left-ndc">
                <div className="action-img">
                  <img src="https://i.ibb.co/vjVvZL5/15.jpg" alt="" />
                </div>
                <div className="action-center">
                  <p className="d1">
                    luran <span>@username</span>
                  </p>
                  <p className="d2">
                    complain on <span>A & B Event</span>
                  </p>
                  <p className="d3">Lorem ipsum dolor sit amet consectetur. </p>

                  <p className="d4 d-flex gap-5">
                    <span
                      onClick={() => setAction(!action)}
                      className={
                        action
                          ? "cursor-pointer fw-bold active"
                          : "cursor-pointer fw-bold"
                      }
                    >
                      Like
                    </span>{" "}
                    <span
                      onClick={() => setAction2(!action2)}
                      className={
                        action2
                          ? "cursor-pointer fw-bold active"
                          : "cursor-pointer fw-bold"
                      }
                    >
                      reply
                    </span>
                  </p>
                </div>
                <div className="action-right">
                    <span>1h ago</span>
                    {/* <div>
              <IoIosMore
                className="text-center w-full text-6xl mb-2 cursor-pointer"
                onClick={() => {
                  if (index === showMoreAtIndex) {
                    setShowMoreAtIndex(-1);
                  } else setShowMoreAtIndex(index);
                }}
              />
              {index === showMoreAtIndex && (
                <div ref={menuRef}>
                  <MoreOption
                    userData={user}
                    hanldeDelete={() => onDelete(user.id_user)}
                  />
                </div>
              )}
            </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="action-right"></div>
        </div>
      </div>
    </>
  );
};

export default UserAction;
