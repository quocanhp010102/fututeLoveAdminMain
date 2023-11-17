import SavedEventTab from "./SavedEventTab";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const SavedEventTable = (props) => {
  const [pageNumber, setPageNumber] = useState(0);
  const eventsPerPage = 1; // Số sự kiện trên mỗi trang
  const pagesVisited = pageNumber * eventsPerPage;

  const displayEvents = props.events
    .slice(pagesVisited, pagesVisited + eventsPerPage)
    .map((event) => (
      <div key={event.id_saved} className="mb-4">
        <SavedEventTab event={event} />
      </div>
    ));

  const pageCount = Math.ceil(props.events.length / eventsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="bg-white mb-[40%] w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12">
        {displayEvents}

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
    </>
  );
};

export default SavedEventTable;
