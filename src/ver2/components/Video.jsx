import Header from "./Header";
import imgBg from "../components/image/backgroundLove.jpg"
import dl from "../components/image/dl.jpeg"
import nu from "../components/image/nu.png"
import start from "../components/image/heart.png"
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import * as faceapi from "face-api.js";



const Video = () => {
    const [video, setVideo] = useState("")
    const userInfo = JSON.parse(window.localStorage.getItem("user-info"));
    const token = userInfo && userInfo.token;
    useEffect(() => {
        axios.get(`https://metatechvn.store/lovehistory/video/1`, {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((response) => {
                setVideo(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);
    
    const [isLoading, setIsLoading] = useState(false);
    const [showImg, setShowImg] = useState({ img1: null });
    const [showModal, setShowModal] = useState(false);
    const [image1, setImage1] = useState(null);
    const [modelAlert, setModelAlert] = useState({ status: false, message: "" });
    const closeUploadImg = async () => {
        setImage1(null);       
        setShowModal(false);
        setIsLoading(false);
        setShowImg({ img1: null, img2: null });
        document.querySelector("#img1").value = "";
        return;
      };
    const validImage = async (image) => {
        try {
          const imageElement = document.createElement("img");
          imageElement.src = image;
          const netInput = imageElement;
          // console.log(netInput); // object img with src = blob:....
          let detections = await faceapi
            .detectAllFaces(netInput, new faceapi.TinyFaceDetectorOptions())
            .withFaceLandmarks()
            .withFaceExpressions();
          const detections2 = await faceapi
            .detectAllFaces(netInput, new faceapi.SsdMobilenetv1Options())
            .withFaceLandmarks()
            .withFaceExpressions();
    
          if (detections.length > 1) return detections;
          if (detections2.length == 0) return detections2;
          if (detections2.length == 1) return detections2;
          return detections;
        } catch (error) {
          console.log(error);
        }
      };
      const [apiKeys, setApiKeys] = useState([]);
      useEffect(() => {
        fetch('https://raw.githubusercontent.com/sonnh7289/mega27-5-2023/main/imgbb-key-reactjs-web-futurelove.json')
          .then(response => response.json())
          .then(data => {
            const keys = data.map(item => item.APIKey);
            setApiKeys(keys);
          })
          .catch(error => console.error('Lỗi:', error));
      }, []);
    
      useEffect(() => {
        if (apiKeys.length > 0) {
          const apiKey = chooseAPIKey();
          console.log(apiKey);
          // Gọi hàm uploadImage với apiKey
          // Ví dụ: uploadImage(image, setImage);
        }
      }, [apiKeys]);
    
      function chooseAPIKey() {
        const randomIndex = Math.floor(Math.random() * apiKeys.length);
        return apiKeys[randomIndex];
      }
    
      const uploadImage = async (image, setImage) => {
        const formData = new FormData();
        formData.append("image", image);
        try {
          if (image) {
            const input = document.getElementById(
              setImage === setImage1 ? "male" : "female"
            );
            if (input) {
              input.style.display = "none";
            }
            const apiKey = chooseAPIKey();
            const apiResponse = await axios.post(
              `https://api.imgbb.com/1/upload?key=${apiKey}`,
              formData
            );
            setImage(apiResponse.data.data.url);
            return { success: apiResponse.data.data.url };
          }
          return false;
        } catch (error) {
          console.log(error);
          return false;
        }
      };
      const handleChangeImage = async (event, setImage, atImg) => {
        let file = event.target.files[0];
        if (!file) {
          return;
        }
      
        try {
          if (!URL.createObjectURL(file)) return setShowModal(true);
      
          const res = await validImage(URL.createObjectURL(file));
      
          if (res.length == 0) {
            setIsLoading(false);
            closeUploadImg();
            return setModelAlert({
              status: true,
              message: "No faces can be recognized in the photo",
            });
          }
          if (res.length > 1) {
            setIsLoading(false);
            closeUploadImg();
            return setModelAlert({
              status: true,
              message: "Photos must contain only one face",
            });
          }
      
          if (atImg === "img1") {
            // Cập nhật state showImg
            setShowImg({ img1: URL.createObjectURL(file) });
      
            // Set ảnh cho setImage
            setImage(file);
          }
        } catch (error) {
          console.log(error);
          setShowModal(true);
          setIsLoading(false);
          closeUploadImg();
        }
      };
      console.log('hihi', image1)
      console.log('show',showImg)
      
    return (
        <div style={{ backgroundImage: `url(${imgBg})` }} className="bg-no-repeat bg-cover">
            <Header />
            <div className="flex">
                <div className="w-1/2 p-4 flex items-center justify-center relative">
                    <div
                        style={{
                            backgroundImage: `url(${nu})`,
                            height: `411px`,
                            width: `410px`,
                        }}
                        alt=""
                        className="responsiveImg relative"
                    >
                        <div
                            className="responsiveImg absolute cursor-pointer w-[330px] h-[330px] rounded-[50%] mt-110 ml-6 bg-center bg-no-repeat bg-cover bottom-0 mb-[14px]"
                            style={
                                showImg.img1
                                    ? { backgroundImage: `url(${showImg.img1})` }
                                    : null
                            }
                        ></div>
                        <input
                            onChange={(e) => {
                                handleChangeImage(e, setImage1, "img1");
                            }}
                            style={
                                showImg.img1
                                    ? { backgroundImage: `url(${showImg.img1})` }
                                    : null
                            }
                            type="file"
                            accept="image/*"
                            id="img1"
                            className={
                                image1
                                    ? " opacity-0 responsiveImg cursor-pointer w-[331px] h-[331px] rounded-[50%] mt-110 ml-6 bg-center bg-no-repeat bg-cover"
                                    : " opacity-0 cursor-pointer w-[331px] h-[331px] rounded-[50%] absolute mt-110 ml-6 bg-center bg-no-repeat bg-black"
                            }
                        />
                    </div>
                    <div className="flex">
                        <img
                            src={start}
                            alt="Start Button"
                            // onClick={handleClick}
                            style={{
                                cursor: 'pointer',
                                transition: 'transform 0.2s',
                            }}
                        />
                    </div>
                </div>
                <div className="w-1/2 p-4">
                    {video && video.list_sukien_video.map((v, index) => (
                        <div key={index} className="max-w-xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl mb-4">
                            <div className="md:flex">
                                <div className="md:flex-shrink-0">
                                    <img className="h-64 w-full object-cover md:h-full md:w-64" src={v.sukien_video[0].link_image} alt="Event" />
                                </div>
                                <div className="p-8 text-center items-center">
                                    <div className="uppercase tracking-wide text-sm font-semibold">{v.sukien_video[0].ten_su_kien}</div>
                                    <p className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{v.sukien_video[0].noidung_sukien}</p>
                                    <p className="mt-2 text-gray-500">{v.sukien_video[0].thoigian_taovid}</p>
                                    <a href={v.sukien_video[0].link_vid_swap} download>
                                        <img src={dl} alt="Download" className="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default Video;
