import clsx from "clsx";
import style from "./conversation.module.scss";
import { useEffect, useRef } from "react";
const Convesation = () => {
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  return (
    <div className={clsx(style.conversationContainer)}>
      <div className="flex flex-col gap-2 items-end">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <p className="max-w-[500px] bg-gray-800 p-2 rounded-lg">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
        </p>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-end ">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">
          rem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">
          Anh ơi , cho em hỏi về vụ checkpoint với ạ . Tại em không có email
          điền form checkpoint giống với mọi người thì em phải checkpoint như
          thế nào vậy ạ :vv:.oftware like Aldus PageMaker including versions of
          Lorem Ipsum.
        </p>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <div className="flex gap-5">
          <img
            className="w-14 h-14 rounded-full  object-cover"
            src={
              "https://i.ibb.co/5r8brGK/z5553475737458-e5443d92be3f289fdd521b1b72666e30.jpg"
            }
            alt={""}
          />
          <p className="max-w-[500px] bg-gray-800 p-2 rounded-lg">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and
          </p>
        </div>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">
          rem Ipsum passages, and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem Ipsum.
        </p>
        <p className="items-center">1 min ago</p>
      </div>

      <div className="flex flex-col gap-2 items-start">
          <div className="flex gap-5">
            <img
              className="w-14 h-14 rounded-full  object-cover"
              src={
                "https://i.ibb.co/5r8brGK/z5553475737458-e5443d92be3f289fdd521b1b72666e30.jpg"
              }
              alt={""}
            />
            <div className="flex flex-col gap-2 ">
            <p className="max-w-[500px] bg-gray-800 p-2 rounded-lg">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </p>
            <img
              className="w-[40%] rounded-sm"
              src={
                "https://i.ibb.co/5r8brGK/z5553475737458-e5443d92be3f289fdd521b1b72666e30.jpg"
              }
              alt={""}
            />
            </div>
          </div>
    
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">bitch accc</p>
        <p className="items-center">1 min ago</p>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <p className="max-w-[500px] bg-blue-500 p-2 rounded-lg">bitch accc</p>
        <p className="items-center">1 min ago</p>
      </div>
      <div ref={endRef}></div>
    </div>
  );
};

export default Convesation;
