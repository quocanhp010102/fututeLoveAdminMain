import axios from "axios";

import { useEffect, useState } from "react";
import { IoIosClose } from "react-icons/io";
import { toast } from "react-toastify";

const AddeventAdd = (props) => {
    const [id_user, setId_user] = useState("");
  const [id_toan_bo_su_kien, setId_toan_bo_su_kien] = useState("");
  const [ten_sukien, setTen_sukien] = useState("");
  const [noidung_su_kien, setNoidung_su_kien] = useState("");
  const [ten_nam, setTen_nam] = useState("");
  const [ten_nu, setTen_nu] = useState("");
  const [device_them_su_kien, setDevice_them_su_kien] = useState("");
  const [ip_them_su_kien, setIp_them_su_kien] = useState("");
  
  const [id_template, setId_template] = useState("");
  const [thoigian_themsk, setThoigian_themsk] = useState("");

  const [so_thu_tu_su_kien, setSo_thu_tu_su_kien] = useState("");
  const [link_img, setLink_img] = useState("");
  const [link_video, setLink_video] = useState("");
  const [status, setStatus] = useState("");
  const [loading, isLoading] = useState(false);

  const server = "http://14.231.223.63:1995";
  const add_event = props.add_event;

  useEffect(() => {
    if (add_event) {
        setId_user(add_event.id_user);
        setId_toan_bo_su_kien(add_event.id_toan_bo_su_kien);
        setTen_sukien(add_event.ten_sukien);
        setNoidung_su_kien(add_event.noidung_su_kien);
        setTen_nam(add_event.ten_nam);
        setTen_nu(add_event.ten_nu);
        setDevice_them_su_kien(add_event.device_them_su_kien);
        setIp_them_su_kien(add_event.ip_them_su_kien);
        setId_template(add_event.id_template);
        setThoigian_themsk(add_event.thoigian_themsk);
        setSo_thu_tu_su_kien(add_event.so_thu_tu_su_kien);
        setLink_img(add_event.link_img);
        setLink_video(add_event.link_video);
        setLink_video(add_event.link_video);
      
    }
  }, [add_event]);

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    if (id_user === null || id_user === "") {
      isproceed = false;
      errormessage += " id_user";
    }
    if (id_toan_bo_su_kien === null || id_toan_bo_su_kien === "") {
      isproceed = false;
      errormessage += " id_toan_bo_su_kien";
    }
    if (ten_sukien === null || ten_sukien === "") {
      isproceed = false;
      errormessage += " ten_sukien";
    }
    if (noidung_su_kien === null || noidung_su_kien === "") {
        isproceed = false;
        errormessage += " noidung_su_kien";
      }
      if (ten_nam === null || ten_nam === "") {
        isproceed = false;
        errormessage += " ten_nam";
      }
      if (ten_nu === null || ten_nu === "") {
        isproceed = false;
        errormessage += " ten_nu";
      }
      if (device_them_su_kien === null || device_them_su_kien === "") {
        isproceed = false;
        errormessage += " device_them_su_kien";
      }
      if (ip_them_su_kien === null || ip_them_su_kien === "") {
        isproceed = false;
        errormessage += " ip_them_su_kien";
      }
      if (id_template === null || id_template === "") {
        isproceed = false;
        errormessage += " id_template";
      }
      if (thoigian_themsk === null || thoigian_themsk === "") {
        isproceed = false;
        errormessage += " thoigian_themsk";
      }
      if (so_thu_tu_su_kien === null || so_thu_tu_su_kien === "") {
        isproceed = false;
        errormessage += " so_thu_tu_su_kien";
      }
      
    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_user", id_user);
    formData.append("id_toan_bo_su_kien", id_toan_bo_su_kien);
    formData.append("ten_sukien", ten_sukien);
    formData.append("noidung_su_kien", noidung_su_kien);
    formData.append("ten_nam", ten_nam);
    formData.append("ten_nu", ten_nu);
    formData.append("device_them_su_kien", device_them_su_kien);
    formData.append("ip_them_su_kien", ip_them_su_kien);
    formData.append("link_img", link_img);
    formData.append("link_video", link_video);
    formData.append("id_template", id_template);
    formData.append("thoigian_themsk", thoigian_themsk);
    formData.append("so_thu_tu_su_kien", so_thu_tu_su_kien);
    formData.append("status", status);
    
console.log("buoc1");
    if (IsValidate()) {
      isLoading(true);
      let response;
      try {
        if (props.type === "edit") {
          response = await axios.put(
            `${server}/api/users/${add_event.id_user}`,
            formData
          );
        } else {
          //await uploadImg();
          console.log("fasdfsddddddd");
          response = await axios.post(`${server}/api/add-sukiens`, {
            
            id_user:parseInt(id_user),
            id_toan_bo_su_kien:id_toan_bo_su_kien,
            ten_sukien:ten_sukien,
            noidung_su_kien:noidung_su_kien,
            ten_nam:ten_nam,
            ten_nu:ten_nu,
            device_them_su_kien:device_them_su_kien,
            ip_them_su_kien:ip_them_su_kien,
            link_img:link_img,
            link_video:link_video,
            id_template:id_template,
            thoigian_themsk:thoigian_themsk,
            so_thu_tu_su_kien:parseInt(so_thu_tu_su_kien),
            status:"ok!"
          });
        }

        if (response.data.message) {
          alert("hewlooo")
          toast.success(response.data.message);
        }
        isLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
       
        alert("dafsdfas");
        throw new Error(error);
      } finally {
        alert("aaaaaaaaa");
        isLoading(false);
      }
    }
  };

  const handleImage = async (e) => {
    // setImageSrc(e.target.files[0]);
    // setImageName(e.target.files[0].name);
    // console.log(imageSrc);
  };

  const uploadImg = async (e) => {
    // try {
    //   var formData = new FormData();
    //   formData.append("image", imageSrc);
    //   const apiKey = "dc602cd2409c2f9f06d21dc9f6b26502";
    //   let body = new FormData();
    //   body.set("key", apiKey);
    //   body.append("image", imageSrc);

    //   await axios({
    //     method: "post",
    //     url: "https://api.imgbb.com/1/upload",
    //     data: body,
    //   });
    // } catch (error) {
    //   throw new Error(error);
    // }
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
                        value={id_user}
                        onChange={(e) => setId_user(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={id_toan_bo_su_kien}
                        onChange={(e) => setId_toan_bo_su_kien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={ten_sukien}
                        onChange={(e) => setTen_sukien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={noidung_su_kien}
                        onChange={(e) => setNoidung_su_kien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={ten_nam}
                        onChange={(e) => setTen_nam(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={ten_nu}
                        onChange={(e) => setTen_nu(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={device_them_su_kien}
                        onChange={(e) => setDevice_them_su_kien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={ip_them_su_kien}
                        onChange={(e) => setIp_them_su_kien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={id_template}
                        onChange={(e) => setId_template(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={thoigian_themsk}
                        onChange={(e) => setThoigian_themsk(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={so_thu_tu_su_kien}
                        onChange={(e) => setSo_thu_tu_su_kien(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={link_img}
                        onChange={(e) => setLink_img(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
                    </div>
                    <div className="font-bold">
                      <input
                        value={link_video}
                        onChange={(e) => setLink_video(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="User Name"
                      />
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
                      "Create event"
                    )}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default AddeventAdd
