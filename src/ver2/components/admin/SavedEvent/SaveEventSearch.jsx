import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";

const SaveEventSearch = () => {
    const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [searchInput, setSearchInput] = useState({
    id_saved: "",
    ten_su_kien: "",
    id_user: "",
  });

  useEffect(() => {
    const searchInput = Object.fromEntries([...searchParams]);
    if (Object.keys(searchInput).length > 0) setSearchInput(searchInput);
  }, []);

  const search = () => {
    navigate(
      `?id_saved=${searchInput.id_saved}&ten_su_kien=${searchInput.ten_su_kien}&id_user=${searchInput.id_user}`
    );
  };
  return (
    <>
       <div className="w-full p-8 flex items-center bg-white justify-center border-gray-300 border-t-[0.5px]">
        <div>
          <input
            value={searchInput.id_saved}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder=" id_saved..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, id_saved: e.target.value })
            }
          />
          <input
            value={searchInput.ten_su_kien}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="ten_su_kien ..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, ten_su_kien: e.target.value })
            }
          />
          <input
            value={searchInput.id_user}
            type="text"
            className="border-gray-400 rounded-xl border-2 text-2xl p-4 mr-8 w-[30rem]"
            placeholder="id user..."
            onChange={(e) =>
              setSearchInput({ ...searchInput, id_user: e.target.value })
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
  )
}

export default SaveEventSearch
