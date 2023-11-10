const ConfirmModel = (props) => {
  return (
    <>
      <div className="w-full h-screen top-0 left-0 fixed z-50 bg-black bg-opacity-50 flex justify-center  items-center">
        <div className="fixed top-50 left-[50%] translate-x-[-30%] px-24 py-12 bg-white h-max rounded-[16px] shadow-lg">
          <p className="text-3xl mb-16">Are you sure you want to delete ?</p>
          <div className="flex w-full justify-between">
            <button
              className="text-3xl bg-blue-500 text-white rounded-xl px-12 py-4"
              onClick={() => props.confirm(true)}
            >
              Yes
            </button>
            <button
              className="text-3xl bg-blue-500 text-white rounded-xl px-12 py-4"
              onClick={() => props.confirm(false)}
            >
              No
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmModel;
