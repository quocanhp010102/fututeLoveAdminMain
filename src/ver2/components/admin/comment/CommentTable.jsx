import { useEffect, useRef, useState } from "react";
import { IoIosMore } from "react-icons/io";
import Switch from "react-switch";
import MoreOption from "../MoreOption";
import CommentMoreOption from "./CommentMoreOption";
import ConfirmModel from "../ConfirmModel";

const CommentTable = (props) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [showMoreAtIndex, setShowMoreAtIndex] = useState(-1);
  const [showConfirm, setShowConfirm] = useState(false);
  const [idToDelete, setIdToDelete] = useState(null);

  const isMobile = width <= 768;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

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

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const convertTime = (time) => {
    const date = `${new Date(time).getDate()}-${
      new Date(time).getMonth() + 1
    }-${new Date(time).getFullYear()}`;
    const hour = `${
      new Date(time).getHours() < 10
        ? `0${new Date(time).getHours()}`
        : new Date(time).getHours()
    }:${
      new Date(time).getMinutes() < 10
        ? `0${new Date(time).getMinutes()}`
        : new Date(time).getMinutes()
    }`;
    return `${date} ${hour}`;
  };

  const onDelete = (id) => {
    setShowConfirm(true);
    setIdToDelete(id);
  };

  const confirmDelete = async (confirm) => {
    if (confirm && idToDelete) {
      await props.deleteComment(idToDelete);
      setShowConfirm(false);
      setIdToDelete(null);
    } else {
      setShowConfirm(false);
      setIdToDelete(null);
    }
  };

  return (
    <>
      {showConfirm && <ConfirmModel confirm={confirmDelete} />}
      <div className="flex flex-col bg-white w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12 mb-[40%]">
        <div className="grid grid-cols-12 items-center rounded-xl bg-[#E2E8F0] sm:p-8 mb-6 text-3xl">
          <span className="text-sm sm:text-3xl col-span-2 col-start-3 sm:col-start-3">
            Username
          </span>
          <span className="text-sm sm:text-3xl col-span-3">Comment</span>
          <span className="text-sm sm:text-3xl">ip</span>
          <span className="text-sm sm:text-3xl col-span-2 col-start-10">
            Time
          </span>
          {/* <span className="text-sm sm:text-3xl">status</span> */}
        </div>
        {props.comments.length > 0 ? (
          props.comments.map((comment, index) => (
            <div
              className="grid grid-cols-12 items-center text-3xl mb-10 border-b-2 p-2 sm:p-0"
              key={comment.id_Comment}
            >
              <img
                src={comment.avatar_user}
                alt="avatar"
                className="w-12 h-12 sm:w-24 sm:h-24 rounded-full col-start-2"
              />
              <span className="text-sm col-span-2 sm:text-3xl ml-2 sm:ml-6">
                {comment.user_name}
              </span>
              <span className="text-xs sm:text-3xl col-span-3">
                {comment.noi_dung_Comment}
                {comment.imageattach && (
                  <img
                    src={comment.imageattach}
                    alt={comment.imageattach}
                    className="h-28 mt-4"
                  />
                )}
              </span>
              <span className="text-xs sm:text-3xl col-span-2 lg:col-span-2">
                {comment.IP_Comment}
                <p>{comment.location}</p>
              </span>
              <span className="text-xs sm:text-3xl col-span-2 lg:col-span-2 col-start-9">
                {convertTime(comment.thoi_gian_release)}
              </span>
              <div>
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
                    <CommentMoreOption
                      comment={comment}
                      hanldeDelete={() => onDelete(comment.id_Comment)}
                    />
                  </div>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-3xl mb-10 border-b-2 p-2 sm:p-0">
            Nothing to show
          </div>
        )}
      </div>
    </>
  );
};

export default CommentTable;
