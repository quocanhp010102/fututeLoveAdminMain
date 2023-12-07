import React, { useEffect, useState } from "react";
import axios from "axios";
import SavedEventTab from "./SavedEventTab";
import ReactPaginate from "react-paginate";
import "./css/SaveEnvetTable.css";

const SavedEventTable = (props) => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [idUser, setIdUser] = useState(1);

  // Define visiblePages here
  
  // const [pageNumber, setPageNumber] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  // const eventsPerPage = 20; // Số sự kiện trên mỗi trang
  // const [events, setEvents] = useState([]);
  // const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `http://14.231.223.63:1995/api/saved-sukiens/pagination?pno=${currentPage}`
      );
      setData(response.data.payload);
      console.log(response.data);
      //console.log(`https://metatechvn.store/lovehistory/page/${currentPage}?id_user=${props.idtim?props.idtim:1}`);
      // setTotalPages(response.data.total_pages);
    };

    fetchData();
  }, [currentPage]);

  // useEffect(() => {
  //   setTotalRecords(eventsData.total_records);
  // }, [eventsData.total_records]);
  const pageCount =30;

  const changePage = ({ selected }) => {
      setCurrentPage(selected+1)
      console.log(selected);
  };

  
  return (
    <div>
      <div className="sotrang d-flex gap-3 mt-10 flex-wrap">
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
      
    <div className="bg-white mb-[40%] w-[95%] rounded-xl mt-28 p-4 lg:mt-20 sm:p-12">
        {data.map((element) => (
         
          
              <SavedEventTab event={element} />
            
         
        ))}
      </div> 
    </div>
  );
};

export default SavedEventTable;
