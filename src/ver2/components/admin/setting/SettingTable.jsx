
import axios from "axios";
import { fr } from "date-fns/locale";
import Switch from "react-switch";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";

const Setting = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = (checked) => {
    setIsChecked(checked);
  };



  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmNewPass, setConfirmNewPass] = useState("");

  const [selectedTab, setSelectedTab] = useState("editProfile");
  const [user_name, usernamechange] = useState("");
  const [email, emailchange] = useState("");
  const [password, passwordchange] = useState("");
  const [imageSrc, setImageSrc] = useState(null);
  const [imageName, setImageName] = useState("");
  const [ipRegister, setIpRegister] = useState("");
  const [deviceRegister, setDeviceRegister] = useState("");

  const storedUserData = localStorage.getItem("user-info");
  const user = JSON.parse(storedUserData);
  
  const server = "http://14.231.223.63:1995";
  useEffect(() => {
    
  
    if (user) {
      passwordchange(user.password);

      usernamechange(user.user_name);
      emailchange(user.email);

      setIpRegister(user.ip_register !== "null" ? user.ip_register : "");
      setDeviceRegister(user.device_register);
      setImageSrc(user.link_avatar);
    }
  }, []);
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };
  
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(newPass);
    console.log(password);
    if(selectedTab==="account"){
      if(oldPass===password){
           if(newPass!==confirmNewPass){
            
            alert("mat khau moi va mat khau xac nhan khong khop !!!")
            return
             
           }
      }else{
        alert("mat khau cu khong chinh xac");
        return;
      }}
      
    //console.log(password);

    const formData = new FormData();
    formData.append("id_user", user.id_user);
    formData.append("user_name", user_name);
    formData.append("email", email);
    formData.append("password", (newPass?newPass:password));
    formData.append("ip_register", ipRegister);
    formData.append("device_register", deviceRegister);
    formData.append(
      "link_avatar",
      imageName ? `https://i.ibb.co/vjVvZL5/${imageName}` : imageSrc
    );

    let response;
    try {
      response = await axios.put(
        `${server}/api/users/${user.id_user}`,
        formData
      );

      if (response.data.message) {
        const object = {};
        formData.forEach((value, key) => {
          object[key] = value;
        });

        localStorage.setItem("user-info", JSON.stringify(object));
        toast.success(response.data.message);
      }

      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      alert("nguuu");
      throw new Error(error);
    } finally {
    }
  };
  const handleImage = async (e) => {
    setImageSrc(e.target.files[0]);
    setImageName(e.target.files[0].name);
    console.log(imageSrc);
  };

  return (
    <>
      <div className="setting">
        <div className="setting_td">
          <h1>SETTING</h1>
        </div>
        <div className="setting_than">
          <div className="setting_than-td">
            <ul>
              <li
                onClick={() => handleTabClick("editProfile")}
                className={selectedTab === "editProfile" ? "liaction" : ""}
              >
                Edit Profile
              </li>
              <li
                onClick={() => handleTabClick("account")}
                className={selectedTab === "account" ? "liaction" : ""}
              >
                Account
              </li>
              <li
                onClick={() => handleTabClick("notifications")}
                className={selectedTab === "notifications" ? "liaction" : ""}
              >
                Notifications
              </li>
            </ul>
          </div>
          {selectedTab === "editProfile" && (
            <div className="setting_than-nd">
              <div>
                <h3>Profile information</h3>
              </div>
              <form action="" onSubmit={handlesubmit}>
                <div className="setting_sua-anh">
                  <img src="" alt="" />

                  <input
                   accept="imgage/*"
                    capture="environment"
                    className="btn btn-primary"
                    onChange={handleImage}
                    type="file"
                  />

                  <button className="btn btn-primary">remove</button>
                </div>
                <div className="setting_suaten d-flex flex-column py-3">
                  <label htmlFor="ten">Display name</label>
                  <input
                    id="ten"
                    value={user_name}
                    type="text"
                    className="suateninput"
                    onChange={(e) => usernamechange(e.target.value)}
                    placeholder="name...."
                  />
                </div>
                <div className="setting_suaemail d-flex flex-column py-3">
                  <label htmlFor="email">email</label>
                  <input 
                  id="email"
                  className="suaemailinput"
                    value={email}
                    type="text"
                    onChange={(e) => emailchange(e.target.value)}
                    placeholder="email...."
                  />
                </div>

                <div>
                  <button className="btn btn-primary">SAVE</button>
                </div>
              </form>
            </div>
          )}
          {selectedTab === "account" && (
            <div className="setting_than-nd than2">
              <div>
                <h3>account</h3>
              </div>
              <form action="" onSubmit={handlesubmit}>
                <div>
                  <label htmlFor="">old Password</label> <br />
                  <input
                    className="my-3"
                    type="password"
                    onChange={(e) => setOldPass(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">new Password</label>
                  <br />
                  <input
                    className="my-3"
                    type="password"
                    onChange={(e) => setNewPass(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="">confirm new Password</label>
                  <br />
                  <input
                    className="my-3"
                    type="password"
                    onChange={(e) => setConfirmNewPass(e.target.value)}
                  />
                </div>

                <div>
                  <button className="btn btn-primary">SAVE</button>
                </div>
              </form>
            </div>
          )}
          {selectedTab === "notifications" && (
            <div className="setting_than-nd than3">
              <div>
                <h3>notifications</h3>
              </div>
              <div className="setting_than-bat border-bottom py-3 d-flex justify-content-between align-items-center">
                <p>Report from users</p>
                <Switch
                  checked={isChecked}
                  onChange={
                    handleToggle
                  }
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                 
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                 
                  className="react-switch"
                  id="material-switch"
                />
              </div>
              <div className="setting_than-bat border-bottom py-3 d-flex justify-content-between align-items-center">
                <p>Complain from users</p>
                <Switch
                  checked={isChecked}
                  onChange={
                    handleToggle
                  }
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                 
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                 
                  className="react-switch"
                  id="material-switch"
                />
              </div>
              <div className="setting_than-bat border-bottom py-3 d-flex justify-content-between align-items-center">
                <p>Inbox</p>
                <Switch
                  checked={isChecked}
                  onChange={
                    handleToggle
                  }
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                 
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                 
                  className="react-switch"
                  id="material-switch"
                />
              </div>
              <div className="setting_than-bat border-bottom py-3 d-flex justify-content-between align-items-center">
                <p>event</p>
                <Switch
                  checked={isChecked}
                  onChange={
                    handleToggle
                  }
                  onColor="#86d3ff"
                  onHandleColor="#2693e6"
                 
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                 
                  className="react-switch"
                  id="material-switch"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Setting;
