import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import SavedEventTable from "../../components/admin/SavedEvent/SavedEventTable";
import SaveEventSearch from "../../components/admin/SavedEvent/SaveEventSearch";
import SavedEventAdd from "../../components/admin/SavedEvent/SavedEventAdd";

const ListSavedEvent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [pageData, setPageData] = useState({
    page: Number,
    per_page: Number,
    this_page: Number,
    payload: [],
  });
  const [events, setEvents] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = (isShow) => {
    setShowForm(isShow);
  };

  useEffect(() => {
    getEventPerPage(1);
    // getAllEvent();
  }, []);

  const getEventPerPage = useCallback(async (page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `http://14.231.223.63:1995/api/saved-sukiens/pagination?pno=${page}`
      );
      if (response.data.message) {
        toast.error(response.data.message);
      } else {
        const data = response.data;
        setPageData(data);
      }
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getAllEvent = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://14.231.223.63:1995/api/saved-sukiens"
      );
      if (response.data.message) {
        toast.error(response.data.message);
      } else {
        const data = response.data;
        setEvents(data);
      }
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <SaveEventSearch />
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
      <SavedEventAdd isShow={showForm} handleShowForm={handleShowForm} />
      {pageData.payload.length > 0 && (
        <div className="flex justify-center">
          <SavedEventTable
            events={pageData}
            handleChangePage={getEventPerPage}
          />
        </div>
      )}
      {/* {events.length > 0 && (
        <div className="flex justify-center">
          <SavedEventTable events={events} handleChangePage={getEventPerPage} />
        </div>
      )} */}
    </>
  );
};

export default ListSavedEvent;
