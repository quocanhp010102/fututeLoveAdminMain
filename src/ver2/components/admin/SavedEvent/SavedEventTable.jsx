import SavedEventTab from "./SavedEventTab";

const SavedEventTable = (props) => {
  return (
    <>
      <div className="bg-white mb-[40%] w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12">
        {props.events.map((event) => (
          <div key={event.id_saved} className="mb-4">
            <SavedEventTab event={event} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SavedEventTable;
