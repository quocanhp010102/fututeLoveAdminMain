import { useCallback, useEffect, useState } from "react";
import CommentTable from "../../components/admin/CommentTable";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../../components/Loading";

const ListComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [commentData, setCommentData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "http://14.231.223.63:1995/api/comments"
      );
      if (response.data.message) {
        toast.error(response.data.message);
      } else {
        const data = response.data;
        setCommentData(data);
      }
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteComment = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `http://14.231.223.63:1995/api/comments/${id}`
      );
      if (response.data.message) {
        toast.success(response.data.message);
      }
      getAllComments();
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isLoading && <Loading />}
      {/* <AdminSubheader
        onSearch={handleSearchUser}
        searchByEmail={handleSearchByEmail}
        searchByIp={handleSearchByIp}
      /> */}
      <div className="flex justify-center">
        <CommentTable comments={commentData} deleteComment={deleteComment} />
      </div>
    </>
  );
};

export default ListComment;
