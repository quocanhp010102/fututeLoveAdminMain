import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import FormInput from "./FormInput";

const CommentMoreOption = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (isShow) => {
    setShowForm(isShow);
  };

  return (
    <>
      {/* <FormInput
        isShow={showForm}
        handleShowForm={handleShowForm}
        type="edit"
        user={props.userData}
      /> */}
      <div className="absolute w-52 z-50 -ml-2 bg-white h-max rounded-[16px] shadow-lg">
        <ul>
          {/* <li className="w-full py-4 flex justify-center items-center text-blue-500">
            <span className="cursor-pointer" onClick={handleShowForm}>
              Edit
            </span>
          </li> */}
          <li className="w-full py-4 flex justify-center items-center text-blue-500">
            <span className="cursor-pointer" onClick={props.hanldeDelete}>
              Delete
            </span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CommentMoreOption;
