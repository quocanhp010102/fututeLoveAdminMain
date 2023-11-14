import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const CommentSubHeader = (props) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState({
    content: "",
    ip_comment: "",
    user_name: "",
  });

  useEffect(() => {
    const searchInput = Object.fromEntries([...searchParams]);
    if (Object.keys(searchInput).length > 0) setSearchInput(searchInput);
  }, []);

  const search = () => {
    navigate(
      `?content=${searchInput.content}&ip_comment=${searchInput.ip_comment}&user_name=${searchInput.user_name}`
    );
  };

  return (
    <>
      <div className="w-full p-8 flex items-center bg-white justify-center border-gray-300 border-t-[0.5px]">
        <div>
          <input
            value={searchInput.content}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="Comment content..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, content: e.target.value })
            }
          />
          <input
            value={searchInput.ip_comment}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="Comment ip..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, ip_comment: e.target.value })
            }
          />
          <input
            value={searchInput.user_name}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="Username..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, user_name: e.target.value })
            }
          />
          <button
            className="text-3xl text-white bg-blue-500 py-4 px-10 rounded-2xl mr-8"
            onClick={search}
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
};

export default CommentSubHeader;
