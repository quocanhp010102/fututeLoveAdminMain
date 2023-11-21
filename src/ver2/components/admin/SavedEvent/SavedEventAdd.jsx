import axios from "axios";
import { parse } from "date-fns";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

import { toast } from "react-toastify";

const SavedEventAdd = (props) => {
  const [fileInputs, setFileInputs] = useState({
    input1: null,
    input2: null,
    input3: null,
    input4: null,
    input5: null,
    // Thêm các ô input file khác nếu cần
  });
  const [imageSrc, setImageSrc] = useState(null);
  const [imageName, setImageName] = useState("");

  //     id_saved: str
  // const [id_saved,setId_saved]=useState('');
  // link_nam_goc: str
  const [link_nam_goc, setLink_nam_goc] = useState("");
  // link_nu_goc: str
  const [link_nu_goc, setLink_nu_goc] = useState("");

  // link_nam_chua_swap: str
  const [link_nam_chua_swap, setLink_nam_chua_swap] = useState("");
  // link_nu_chua_swap: str
  const [link_nu_chua_swap, setLink_nu_chua_swap] = useState("");
  // link_da_swap: str
  const [link_da_swap, setLink_da_swap] = useState("");
  // thoigian_swap: str
  const [thoigian_swap, setThoigian_swap] = useState("");
  // ten_su_kien: str
  const [ten_su_kien, setTen_su_kien] = useState("");
  // noidung_su_kien: str
  const [noidung_su_kien, setNoidung_su_kien] = useState("");
  // id_toan_bo_su_kien: str
  const [id_toan_bo_su_kien, setId_toan_bo_su_kien] = useState("");
  // so_thu_tu_su_kien: int
  const [so_thu_tu_su_kien, setSo_thu_tu_su_kien] = useState("");
  // thoigian_sukien: str
  const [thoigian_sukien, setThoigian_sukien] = useState("");
  // device_them_su_kien: str
  const [device_them_su_kien, setDevice_them_su_kien] = useState("");
  // ip_them_su_kien: str
  const [ip_them_su_kien, setIp_them_su_kien] = useState("");
  // id_user: int
  const [id_user, setId_user] = useState("");
  // tomLuocText: str
  const [tomLuocText, setTomluocText] = useState("");
  // ten_nam: str
  const [ten_nam, setTen_nam] = useState("");
  // ten_nu: str
  const [ten_nu, setTen_nu] = useState("");
  // id_template: int
  const [id_template, setId_template] = useState("");
  // phantram_loading: int
  const [phantram_loading, setPhantram_loading] = useState("");

  const [loading, isLoading] = useState(false);
  const server = "http://14.231.223.63:1995";
  const saveSuKiens = props.savedSukiens;
  useEffect(() => {
    if (saveSuKiens) {
      // setId_saved(saveSuKiens.id_saved)
      setLink_nam_goc(saveSuKiens.link_nam_goc);
      setLink_nu_goc(saveSuKiens.link_nu_goc);
      setLink_nam_chua_swap(saveSuKiens.link_nam_chua_swap);
      setLink_nu_chua_swap(saveSuKiens.link_nu_chua_swap);
      setLink_da_swap(saveSuKiens.link_da_swap);
      setThoigian_swap(saveSuKiens.thoigian_swap);
      setTen_su_kien(saveSuKiens.ten_su_kien);
      setNoidung_su_kien(saveSuKiens.noidung_su_kien);
      setId_toan_bo_su_kien(saveSuKiens.id_toan_bo_su_kien);
      setSo_thu_tu_su_kien(saveSuKiens.so_thu_tu_su_kien);
      setThoigian_sukien(saveSuKiens.thoigian_sukien);
      setDevice_them_su_kien(saveSuKiens.device_them_su_kien);
      setIp_them_su_kien(saveSuKiens.ip_them_su_kien);
      setId_user(saveSuKiens.id_user);
      setTomluocText(saveSuKiens.tomLuocText);
      setTen_nam(saveSuKiens.ten_nam);
      setTen_nu(saveSuKiens.ten_nu);
      setId_template(saveSuKiens.id_template);
      setPhantram_loading(saveSuKiens.phantram_loading);
    }
  }, [saveSuKiens]);

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = "Please enter the value in ";
    // if (id_saved === null || id_saved === "") {
    //   isproceed = false;
    //   errormessage += " id_saved";
    // }
    if (thoigian_swap === null || thoigian_swap === "") {
      isproceed = false;
      errormessage += " thoigian_swap";
    }
    if (ten_su_kien === null || ten_su_kien === "") {
      isproceed = false;
      errormessage += " ten_su_kien";
    }

    if (!isproceed) {
      toast.warning(errormessage);
    }
    return isproceed;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    // const formData=new FormData();
    // // formData.append("id_saved",id_saved);
    // formData.append("link_nam_goc",link_nam_goc);
    // formData.append("link_nu_goc",link_nu_goc);
    // formData.append("link_nam_chua_swap",link_nam_chua_swap);
    // formData.append("link_nu_chua_swap",link_nu_chua_swap);
    // formData.append("link_da_swap",link_da_swap);
    // formData.append("thoigian_swap",thoigian_swap);
    // formData.append("ten_su_kien",ten_su_kien);
    // formData.append("noidung_su_kien",noidung_su_kien);
    // formData.append("id_toan_bo_su_kien",id_toan_bo_su_kien);
    // formData.append("so_thu_tu_su_kien",so_thu_tu_su_kien);
    // formData.append("thoigian_sukien",thoigian_sukien);
    // formData.append("device_them_su_kien",device_them_su_kien);
    // formData.append("ip_them_su_kien",ip_them_su_kien);
    // formData.append("id_user",id_user);
    // formData.append("tomLuocText",tomLuocText);
    // formData.append("ten_nam",ten_nam);
    // formData.append("ten_nu",ten_nu);
    // formData.append("id_template",id_template);
    // formData.append("phantram_loading",phantram_loading);

    if (IsValidate()) {
      isLoading(true);
      let response;
      try {
        if (props.type === "edit") {
          // response=await axios.put(
          //     `${server}/api/saved-sukiens/${user.id_user}`,
          // formData
          // )
        } else {
          await uploadImage();
          response = await axios.post(`${server}/api/saved-sukiens`, {
            id_saved: "212726883301",
            link_nam_goc: link_nam_goc
              ? `https://i.ibb.co/vjVvZL5/${link_nam_goc}`
              : fileInputs.input1,
            link_nu_goc: link_nu_goc
              ? `https://i.ibb.co/vjVvZL5/${link_nu_goc}`
              : fileInputs.input2,
            link_nam_chua_swap: link_nam_chua_swap
              ? `https://i.ibb.co/vjVvZL5/${link_nam_chua_swap}`
              : fileInputs.input3,
            link_nu_chua_swap: link_nu_chua_swap
              ? `https://i.ibb.co/vjVvZL5/${link_nu_chua_swap}`
              : fileInputs.input4,
            link_da_swap: link_da_swap
              ? `https://i.ibb.co/vjVvZL5/${link_da_swap}`
              : fileInputs.input5,
            thoigian_swap: thoigian_swap,
            ten_su_kien: ten_su_kien,
            noidung_su_kien: noidung_su_kien,
            id_toan_bo_su_kien: id_toan_bo_su_kien,
            so_thu_tu_su_kien: parseInt(so_thu_tu_su_kien),
            thoigian_sukien: thoigian_sukien,
            device_them_su_kien: device_them_su_kien,
            ip_them_su_kien: ip_them_su_kien,
            id_user: parseInt(id_user),
            tomLuocText: tomLuocText,
            ten_nam: ten_nam,
            ten_nu: ten_nu,
            id_template: parseInt(id_template),
            phantram_loading: parseInt(phantram_loading),
          });
        }
        if (response.data.message) {
          toast.success(response.data.message);
          alert("okok");
        }
        isLoading(false);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } catch (error) {
        alert(error);
        throw new Error(error);
      } finally {
        isLoading(false);
      }
    }
  };
  const uploadImage = async () => {
    try {
      setLink_nam_goc(fileInputs.input1);

      setLink_nu_goc(fileInputs.input2);

      setLink_nam_chua_swap(fileInputs.input3);

      setLink_nu_chua_swap(fileInputs.input1);

      setLink_da_swap(fileInputs.input2);

      // Set image state
      // setImageSrc(imageFile);
      // setImageName(imageFile.name);

      //       setLink_nam_goc(imageName);

      //       setLink_nu_goc(imageName)

      //       setLink_nam_chua_swap(imageName)

      //        setLink_nu_chua_swap(imageName)

      //        setLink_da_swap(imageName)

      // Upload image
      // var formData = new FormData();
      // formData.append("image", imageFile);

      // const apiKey = "dc602cd2409c2f9f06d21dc9f6b26502";
      // let body = new FormData();
      // body.set("key", apiKey);
      // body.append("image", imageFile);

      // await axios({
      //   method: "post",
      //   url: "https://api.imgbb.com/1/upload",
      //   data: body,
      // });
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleImage = async (inputId, files) => {
    setFileInputs((prevFileInputs) => ({
      ...prevFileInputs,
      [inputId]: files,
    }));
    console.log(fileInputs);
  };

  // const handleImage = async (e) => {
  //   setImageSrc(e.target.files[0]);
  //   setImageName(e.target.files[0].name);
  //   console.log(imageSrc);
  // };

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
                    {/* <div className="font-bold">
                      <input
                        value={id_saved}
                        onChange={(e) => setId_saved(e.target.value)}
                        className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                        placeholder="id_saved"
                      />
                    </div> */}
                    <div className="dvd">
                      <div className="dvd1">
                        <div className="font-bold">
                          <input
                            value={thoigian_swap}
                            onChange={(e) => setThoigian_swap(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="thoigian_swap"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={ten_su_kien}
                            onChange={(e) => setTen_su_kien(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="ten_su_kien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={noidung_su_kien}
                            onChange={(e) => setNoidung_su_kien(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="noidung_su_kien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={id_toan_bo_su_kien}
                            onChange={(e) =>
                              setId_toan_bo_su_kien(e.target.value)
                            }
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="id_toan_bo_su_kien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={so_thu_tu_su_kien}
                            onChange={(e) =>
                              setSo_thu_tu_su_kien(e.target.value)
                            }
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="so_thu_tu_su_kien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={thoigian_sukien}
                            onChange={(e) => setThoigian_sukien(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="thoigian_sukien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={device_them_su_kien}
                            onChange={(e) =>
                              setDevice_them_su_kien(e.target.value)
                            }
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="device_them_su_kien"
                          />
                        </div>

                        <div className="font-bold">
                          <input
                            value={ip_them_su_kien}
                            onChange={(e) => setIp_them_su_kien(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="ip_them_su_kien"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={id_user}
                            onChange={(e) => setId_user(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="id_user"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={ten_nam}
                            onChange={(e) => setTen_nam(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="ten_nam"
                          />
                        </div>
                      </div>
                      <div className="dvd2">
                        <div className="font-bold">
                          <input
                            value={ten_nu}
                            onChange={(e) => setTen_nu(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="ten_nu"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={id_template}
                            onChange={(e) => setId_template(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="id_template"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={phantram_loading}
                            onChange={(e) =>
                              setPhantram_loading(e.target.value)
                            }
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="phantram_loading"
                          />
                        </div>
                        <div className="font-bold">
                          <input
                            value={tomLuocText}
                            onChange={(e) => setTomluocText(e.target.value)}
                            className="form-control lg:w-[400px] lg:h-20 text-2xl w-[300px] h-[35px] rounded-md font-extrabold"
                            placeholder="tomLuocText"
                          />
                        </div>

                        <div className="mt-12">
                          <div>
                            <span>link_nam_goc</span>
                            <input
                              id="input1"
                              onChange={(e) => {
                                handleImage("input1", e.target.value);
                              }}
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
                        </div>
                        <div className="mt-12">
                          <div>
                            <span>link_nu_goc</span>
                            <input
                              id="input2"
                              onChange={(e) => {
                                handleImage("input2", e.target.value);
                              }}
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
                        </div>
                        <div className="mt-12">
                          <div>
                            <span>link_nam_chua_swap</span>
                            <input
                              id="input3"
                              onChange={(e) => {
                                handleImage("input3", e.target.value);
                              }}
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
                        </div>
                        <div className="mt-12">
                          <div>
                            <span>link_nu_chua_swap</span>
                            <input
                              id="input4"
                              onChange={(e) => {
                                handleImage("input4", e.target.value);
                              }}
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
                        </div>
                        <div className="mt-12">
                          <div>
                            <span>link_da_swap</span>
                            <input
                              id="input5"
                              onChange={(e) => {
                                handleImage("input5", e.target.value);
                              }}
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
                        </div>
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

export default SavedEventAdd;
