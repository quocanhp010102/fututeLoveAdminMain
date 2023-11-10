import circle from "../components/image/circle.png";

const AuthenLayout = (props) => {
  return (
    <>
      <div className="flex flex-row justify-between">
        <div className="bg-[#2563EB] h-screen w-1/2">
          <div className="flex flex-col items-center h-screen justify-center">
            <img className="w-3/4" src={circle} alt="circle" />
            <p className="text-white mt-10 text-3xl">
              Login FutureLove Account To Predict The Future Of Love Between Two
              People
              {/* Register FutureLove Account To Predict The Future Of Love Between Two People */}
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center h-screen justify-center">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default AuthenLayout;
