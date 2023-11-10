import { useState } from "react";
import FormInput from "./FormInput";

const AdminSubheader = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (isShow) => {
    setShowForm(isShow);
  };
  return (
    <>
      <div className="w-full p-8 flex items-center bg-white justify-between border-gray-300 border-t-[0.5px]">
        <div>
          <input
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="Search user..."
            onChange={(e) => props.onSearch(e.target.value)}
          />
          <button
            className="text-3xl text-white bg-blue-500 py-4 px-10 rounded-2xl mr-8"
            onClick={() => {
              props.searchByEmail();
            }}
          >
            Search by email
          </button>
          <button
            className="text-3xl text-white bg-blue-500 py-4 px-10 rounded-2xl"
            onClick={() => {
              props.searchByIp();
            }}
          >
            Search by Ip
          </button>
        </div>
        <button
          className="text-3xl text-white bg-blue-500 py-4 px-10 rounded-2xl"
          onClick={() => {
            setShowForm(true);
          }}
        >
          + New user
        </button>
      </div>
      <FormInput isShow={showForm} handleShowForm={handleShowForm} />
    </>
  );
};

export default AdminSubheader;
