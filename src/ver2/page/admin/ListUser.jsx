import axios from "axios";
import UserTable from "../../components/admin/UserTable";
import { toast } from "react-toastify";
import { useCallback, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import AdminSubheader from "../../components/admin/AdminSubheader";

const ListUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [usersData, setUsersData] = useState([]);
  const [inputSearch, setInputSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://14.231.223.63:1995/api/users");
      if (response.data.message) {
        toast.error(response.data.message);
      } else {
        const data = response.data;
        setUsersData(data);
      }
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handeUserStatus = async (id, nextChecked) => {
    // console.log(id);
    // console.log(nextChecked);

    var status = 0;
    if (nextChecked) {
      status = 2;
    } else {
      status = 3;
    }

    setIsLoading(true);
    try {
      const response = await axios.patch(
        `http://14.231.223.63:1995/api/users/${id}`,
        {
          status: status,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.message) {
        toast.success(response.data.message);
      }
      fetchData();
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActiveAccount = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.patch(
        `http://14.231.223.63:1995/api/users/${id}`,
        {
          status: 2,
        },
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.data.message) {
        toast.success(response.data.message);
      }
      fetchData();
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteUser = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `http://14.231.223.63:1995/api/users/${id}`
      );
      if (response.data.message) {
        toast.success(response.data.message);
      }
      fetchData();
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchUser = async (input) => {
    setInputSearch(input);
  };

  const handleSearchByEmail = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `http://14.231.223.63:1995/api/users?email=${inputSearch}`
      );
      if (response.data.message) {
        toast.error(response.data.message);
        return;
      }
      setUsersData(response.data);
      console.log(response.datas);
      setIsLoading(false);
    } catch (error) {
      return toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchByIp = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        ` http://14.231.223.63:1995/api/users?ip_register=${inputSearch}`
      );
      if (response.data.message) {
        toast.error(response.data.message);
        return;
      }
      setUsersData(response.data);
      console.log(response.data);
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
      <AdminSubheader
        onSearch={handleSearchUser}
        searchByEmail={handleSearchByEmail}
        searchByIp={handleSearchByIp}
      />
      <div className="flex justify-center">
        {usersData && (
          <UserTable
            data={usersData}
            deleteUser={deleteUser}
            handeUserStatus={handeUserStatus}
            handleActiveAccount={handleActiveAccount}
          />
        )}
      </div>
    </>
  );
};

export default ListUser;
