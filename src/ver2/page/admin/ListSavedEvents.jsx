import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import axios from "axios";
import { toast } from "react-toastify";
import SavedEventTable from "../../components/admin/SavedEvent/SavedEventTable";

const ListEvents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = useCallback(async () => {
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
      <div className="flex justify-center">
        <SavedEventTable events={events} />
      </div>
    </>
  );
};

export default ListEvents;
