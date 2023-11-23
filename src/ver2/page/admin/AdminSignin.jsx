import axios from "axios";
import AuthenLayout from "../../layouts/AuthenLayout";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Loading from "../../components/Loading";

const AdminSignin = () => {
  const [email_or_username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [reset, setReset] = useState(false);
  const [emailReset, setEmailReset] = useState("");

  const navigate = useNavigate();

  // const redirect = () => {
  //   navigate("/register");
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email_or_username", email_or_username);
    formData.append("password", password);

    if (validate()) {
      setLoading(true);
      try {
        const response = await axios.post(
          `http://14.231.223.63:1995/api/users/login`,
          {
            username_or_email: formData.get("email_or_username"),
            password: formData.get("password"),
          },
          {
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
          }
        );
        if (response.data.message) {
          toast.success(response.data.message);
          localStorage.setItem("user-info", JSON.stringify(response.data.user));
          setTimeout(() => {
            navigate("/users");
          }, 1200);
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        return toast.error("Wrong username or password");
      } finally {
        setLoading(false);
      }
    }
  };

  // const sendReset = async (e) => {
  //   e.preventDefault();
  //   // const param = {
  //   //     email: emailReset
  //   // }
  //   const formData = new FormData();
  //   formData.append("email", emailReset);

  //   try {
  //     setLoading(true);
  //     const response = await axios.post(
  //       "https://metatechvn.store/reset",
  //       formData
  //     );
  //     console.log("okoko", response);
  //     if (
  //       response.data.message === "Đã reset mật khẩu thành công và gửi email!"
  //     ) {
  //       toast.success(response.data.message);
  //       setLoading(false);
  //     } else {
  //       toast.error(response.data.message);
  //     }
  //   } catch (error) {
  //     console.log("sda", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const validate = () => {
    let result = true;
    if (
      (email_or_username === "" || email_or_username === null) &&
      (password === "" || password === null)
    ) {
      result = false;
      toast.warning("Please enter username and password");
    } else if (email_or_username === "" || email_or_username === null) {
      result = false;
      toast.warning("Please Enter Username");
    } else if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };

  return (
    <>
      {loading && <Loading />}
      <AuthenLayout>
        <h1 className="mb-16 text-5xl text-left"><span> Sign In</span></h1>
        <form onSubmit={handleLogin}>
          <div className="font-bold">
            <input
              value={email_or_username}
              onChange={(e) => setUsername(e.target.value)}
              className="form-control lg:w-[400px] lg:h-[50px] w-[300px] h-[50px] font-extrabold rounded-lg text-2xl"
              placeholder="User Name"
            />
          </div>
          <div className="mt-12 font-bold">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control lg:w-[400px] lg:h-[50px] w-[300px] h-[50px] font-extrabold rounded-lg text-2xl"
              placeholder="Password"
            />
            {/* <p className="block mr-0 ml-auto text-[#2563EB] text-xl mt-6 float-right cursor-pointer">
              Forgot password
            </p> */}
            <br />
          </div>
          <div className="flex justify-center w-full">
            <button
              type="submit"
              className="text-white mx-auto rounded-xl lg:w-[300px] h-[50px] w-[200px] text-4xl bg-[#2563EB] mt-12"
            >
              Sign In
            </button>
          </div>
        </form>
      </AuthenLayout>
    </>
  );
};

export default AdminSignin;
