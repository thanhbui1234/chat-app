import  { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import { RiRecordCircleLine } from "react-icons/ri";

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user",
};
interface cameraProp {
  isScreenShot: boolean;
}
const WebcamComponent = (props: cameraProp) => {
 const {isScreenShot} = props;  
 const [image,setImage] = useState('')
 const webcamRef = useRef<Webcam>(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
        setImage(imageSrc)
    }
  }, [webcamRef]);

  return (
    <div
      style={{
        textAlign: "center",
        padding: "20px",
        position: "absolute",
        top: "20%",
      }}
    >
        {isScreenShot && (
            <>      <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            style={{ width: "100%", maxWidth: "640px", marginBottom: "20px" }}/>
               <button
        onClick={capture}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
   <RiRecordCircleLine />
      </button>
            </>
        )}
           {image ? (
            <img  className="w-[250px] absolute right-0" src={image!} alt="BigCo Inc. logo"/>
           ) : ''} 
    </div>
  );
};

export default WebcamComponent;
