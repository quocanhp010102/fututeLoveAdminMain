import AddEventTab from "./AddEventTab";
import AddeventAdd from "./AddeventAdd";
import React, { useEffect, useState } from "react";
const AddEventTable = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (isShow) => {
    setShowForm(isShow);
  };
  return (
    <>
      {/* <div className="">
        <button
          className="d-block text-3xl text-white bg-blue-500 py-4 px-10 "
          onClick={() => {
            setShowForm(true);
          }}
        >
          + New saved-sukiens
        </button>
      </div> */}
      {/* <div className="">
        <AddeventAdd isShow={showForm} handleShowForm={handleShowForm} />
      </div> */}
      <div className="bg-white mb-[40%] w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12">
        {props.events.map((event) => (
          <div key={event.id_saved} className="mb-4">
            <AddEventTab event={event} />
          </div>
        ))}
      </div>
    </>
  );
};

export default AddEventTable;
