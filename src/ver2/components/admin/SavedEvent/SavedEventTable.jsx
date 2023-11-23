import SavedEventTab from "./SavedEventTab";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const SavedEventTable = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const eventsPerPage = 20; // Số sự kiện trên mỗi trang
  const [events, setEvents] = useState([]);

  const eventsData = props.events;

  useEffect(() => {
    setEvents(eventsData.payload);
  }, [eventsData.payload]);

  useEffect(() => {
    setTotalRecords(eventsData.total_records);
  }, [eventsData.total_records]);

  const pageCount = Math.ceil(totalRecords / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    props.handleChangePage(selected + 1);
  };

  return (
    <>
<<<<<<< Updated upstream
=======
   
    <div className="them-saved-sukien">
    <button
          className="d-block text-3xl text-white bg-blue-500 py-4 px-10 "
          onClick={() => {
            setShowForm(true);
          }}
        >
          + New saved-sukiens
        </button>
    </div>
     
>>>>>>> Stashed changes
      <div className="themsukienduoi">
        <div className="bg-white mb-[40%] w-[95%] rounded-xl p-4 sm:p-12">
          {events.map((event, index) => (
            <div key={index} className="mb-4">
              <SavedEventTab event={event} />
            </div>
          ))}

          {/* Phân trang */}
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"pagination"}
            previousLinkClassName={"pagination__link"}
            nextLinkClassName={"pagination__link"}
            disabledClassName={"pagination__link--disabled"}
            activeClassName={"pagination__link--active"}
          />
        </div>
      </div>
    </>
  );
};

export default SavedEventTable;
