import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Loading from "../../components/Loading";
import CommentTable from "../../components/admin/comment/CommentTable";
import CommentSubHeader from "../../components/admin/comment/CommentSubHeader";
import { useSearchParams } from "react-router-dom";

const ListComment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [commentData, setCommentData] = useState([]);

  const [searchParams] = useSearchParams();
  const searchInput = Object.fromEntries([...searchParams]);

  useEffect(() => {
    if (Object.keys(searchInput).length > 0) {
      searchComments(searchInput);
    } else getAllComments();
  }, []);

  useEffect(() => {
    if (Object.keys(searchInput).length > 0) searchComments(searchInput);
  }, [searchParams]);

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
      if (searchParams.size > 0) {
        searchComments(searchInput);
      } else {
        getAllComments();
      }
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const searchComments = useCallback(async (input) => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://14.231.223.63:1995/api/comments?content=${input.content}&ip_comment=${input.ip_comment}&user_name=${input.user_name}`
      );
      if (response.data.message) {
        toast.error(response.data.message);
        setCommentData([]);
        return;
      }
      setCommentData(response.data);
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      <CommentSubHeader />
      <div className="flex justify-center">
        <CommentTable comments={commentData} deleteComment={deleteComment} />
      </div>
    </>
  );
};

export default ListComment;
