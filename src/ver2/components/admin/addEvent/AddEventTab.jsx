import { useState } from "react";
import maleIcon from "../../image/nam1.png";
import femaleIcon from "../../image/nu1.png";
import img1 from "../../image/finish.png";
import bg1 from "../../image/bg-1.png";
import bg2 from "../../image/bg-2.png";
import bg4 from "../../image/bg4.jpeg";
import vec1 from "../../image/Vector1.png";
import vec2 from "../../image/Vector2.png";
import vec3 from "../../image/hoa.png";
import vec4 from "../../image/tron2.png";

const AddEventTab = (props) => {
  const eventDetail = props.event;

  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg2})` }}
        className="bg-no-repeat bg-cover rounded-[29px] h-[214px] bg-center lg:w-full lg:h-full border-2 border-blue-500"
      >
        <div className="grid grid-cols-3">
          <div className="bg-no-repeat bg-cover lg:w-96 lg:h-96 w-48 h-48 relative">
            <div className="flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${vec3})`,
                  marginTop: "20%",
                }}
                className="bg-no-repeat bg-cover lg:w-96 lg:h-96 w-48 h-48 z-10"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${eventDetail.link_nam_goc})`,
                  borderRadius: "50%",
                  backgroundSize: "cover",

                  marginTop: "20%", // Thay đổi khoảng cách dọc giữa các ảnh
                  backgroundPosition: "center",
                }}
                className="bg-no-repeat bg-cover lg:w-72 lg:h-72 w-36 h-36 absolute"
              ></div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-12">
            {/* image love */}
            <span
              key={eventDetail.id_saved}
              to={`/ array / ${eventDetail.id_saved}`}
              className="lg:text-[24px] starborn leading-tight mb-4"
            >
              {eventDetail.ten_su_kien}
            </span>
            <div className="box lg:h-52 h-36 mt-3">
              <p className="slab font-semibold lg:text-[16px]">
                {eventDetail.noidung_su_kien}
              </p>
            </div>

            <div className="my-4 slab font-semibold lg:text-[16px]">
              <span
                style={{ fontStyle: "normal", marginTop: 100 }}
                className="text-time"
              >
                {/* {eventDetail.thoigian_sukien} */}
                {eventDetail.thoigian_sukien}
              </span>
            </div>
          </div>
          <div className="bg-no-repeat bg-cover lg:w-96 lg:h-96 w-48 h-48 relative ml-auto">
            <div className="flex justify-center items-center">
              <div
                style={{
                  backgroundImage: `url(${vec3})`,
                  marginTop: "20%",
                }}
                className="bg-no-repeat bg-cover lg:w-96 lg:h-96 w-48 h-48 z-10"
              ></div>
              <div
                style={{
                  backgroundImage: `url(${eventDetail.link_nu_goc})`,
                  borderRadius: "50%",
                  backgroundSize: "cover",

                  marginTop: "20%", // Thay đổi khoảng cách dọc giữa các ảnh
                  backgroundPosition: "center",
                }}
                className="bg-no-repeat bg-cover lg:w-72 lg:h-72 w-36 h-36 absolute"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddEventTab;
