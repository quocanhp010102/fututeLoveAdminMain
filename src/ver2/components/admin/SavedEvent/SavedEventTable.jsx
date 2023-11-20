import SavedEventTab from "./SavedEventTab";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import SavedEventAdd from "./SavedEventAdd";
import SaveEventSearch from "./SaveEventSearch";

const SavedEventTable = (props) => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (isShow) => {
    setShowForm(isShow);
  };
  const [pageNumber, setPageNumber] = useState(0);
  const eventsPerPage = 20; // Số sự kiện trên mỗi trang
  const pagesVisited = pageNumber * eventsPerPage;

  const displayEvents = props.events
    .slice(pageNumber, pageNumber + eventsPerPage)
    .map((event) => (
      <div key={event.id_saved} className="mb-4">
        <SavedEventTab event={event} />
      </div>
    ));

  const pageCount = Math.ceil(props.events.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
    props.handleChangePage(selected + 1);
  };

  return (
    <>
    <SaveEventSearch/>
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
     
      <div className="themsukienduoi">
      <SavedEventAdd isShow={showForm} handleShowForm={handleShowForm} />
      <div className="bg-white mb-[40%] w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12">
        {displayEvents}

        {/* Phân trang */}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={changePage}
          pageRangeDisplayed={5}
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
