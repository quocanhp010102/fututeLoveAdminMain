import axios from "axios";
import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const FormInput = (props) => {
  const [user_name, usernamechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [imageName, setImageName] = useState("");
  const [ipRegister, setIpRegister] = useState("");
  const [deviceRegister, setDeviceRegister] = useState("");
  const [loading, isLoading] = useState(false);

  const server = "http://14.231.223.63:1995";
  const user = props.user;

  useEffect(() => {
    if (user) {
      usernamechange(user.user_name);
      emailchange(user.email);
      passwordchange(user.password);
      setIpRegister(user.ip_register !== "null" ? user.ip_register : "");
      setDeviceRegister(user.device_register);
      setImageSrc(user.link_avatar);
    }
  }, [user]);

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (user_name === null || user_name === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (email === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    }
    if (password === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (props.type !== "edit" && imageSrc === null) {
      isproceed = false;
      errormessage += "Image";
    }
    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("user_name", user_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("ip_register", ipRegister);
    formData.append("devcie_register", deviceRegister);
    formData.append(
      "link_avatar",
      imageName ? `https://i.ibb.co/vjVvZL5/${imageName}` : imageSrc
    );

    if (IsValidate()) {
      isLoading(true);
      await uploadImg();
      let response;
      try {
        if (props.type === "edit") {
          response = await axios.put(
            `${server}/api/users/${user.id_user}`,
            formData
          );
        } else {
          response = await axios.post(`${server}/api/users`, {
            link_avatar: `https://i.ibb.co/vjVvZL5/${imageName}`,
            password: password,
            email: email,
            ip_register: ipRegister,
            device_register: deviceRegister,
          });
        }

        if (response.data.message) {
          toast.success(response.data.message);
        }
        isLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        throw new Error(error);
      } finally {
        isLoading(false);
      }
    }
  };

  const handleImage = async (e) => {
    setImageSrc(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const uploadImg = async (e) => {
    try {
      var formData = new FormData();
      formData.append("image", imageSrc);
      const apiKey = "dc602cd2409c2f9f06d21dc9f6b26502";
      let body = new FormData();
      body.set("key", apiKey);
      body.append("image", imageSrc);

      await axios({
        method: "post",
        url: "https://api.imgbb.com/1/upload",
        data: body,
      });
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <>
      {props.isShow && (
        <div className="bg-black/30 fixed z-20 w-full h-full top-0 left-0 flex items-center justify-center">
          <div className="bg-white opacity-100 text-blue-500 w-[50%] h-max rounded-3xl py-12 px-10">
            <div className="w-full p-2 flex items-end justify-end text-8xl">
              <IoIosClose
                className="cursor-pointer"
                onClick={() => props.handleShowForm(false)}
              />
            </div>
            <form className="z-40" onSubmit={handlesubmit}>
              <div className="flex flex-col items-center text-center mx-5">
                <div className="">
                  <div className="">
                    <div className="font-bold">
                      <input
                        value={user_name}
                        onChange={(e) => usernamechange(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="mt-12">
                      <input
                        value={email}
                        onChange={(e) => emailchange(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mt-12">
                      <input
                        value={password}
                        onChange={(e) => passwordchange(e.target.value)}
                        type="password"
                        className="font-extrabold form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mt-12">
                      <div>
                        <input
                          onChange={handleImage}
                          type="file"
                          className="form-control rounded-md"
                          accept="image/*"
                        />
                        {imageSrc && (
                          <img
                            src={imageSrc}
                            className="w-24 h-24 rounded-full"
                            alt=""
                          />
                        )}
                      </div>
                      <div className="mt-12">
                        <input
                          value={ipRegister}
                          onChange={(e) => setIpRegister(e.target.value)}
                          className="font-extrabold form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md"
                          placeholder="Ip register"
                        />
                      </div>
                      <div className="mt-12">
                        <input
                          value={deviceRegister}
                          onChange={(e) => setDeviceRegister(e.target.value)}
                          className="font-extrabold form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md"
                          placeholder="Device register"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-10 flex justify-center">
                  <button
                    type="submit"
                    className="mt-3 register-title rounded-full w-60 h-24 text-4xl text-white bg-blue-500"
                  >
                    {loading ? (
                      <div role="status" className="flex justify-center">
                        <svg
                          aria-hidden="true"
                          className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                          viewBox="0 0 100 101"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                          />
                          <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                          />
                        </svg>
                      </div>
                    ) : props.type === "edit" ? (
                      "Update user"
                    ) : (
                      "Create user"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default FormInput;
