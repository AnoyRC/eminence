"use client";
import {
  ArrowDownIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
  CameraIcon,
} from "@heroicons/react/24/solid";
import Webcam from "react-webcam";
import { useSelector, useDispatch } from "react-redux";
import { useRef, useCallback } from "react";
import { setFile, setImage } from "@/redux/fileSlice";
import Image from "next/image";

export default function CameraInterface() {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();
  const image = useSelector((state) => state.file.image);
  const file = useSelector((state) => state.file.file);

  function download(e, file) {
    e.preventDefault();

    const link = document.createElement("a");
    const url = URL.createObjectURL(file);

    link.href = url;
    link.download = file.name;
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  }

  const capture = useCallback(
    (e) => {
      e.preventDefault();
      const imageSrc = webcamRef.current.getScreenshot();
      dispatch(setImage(imageSrc));
      const file = new File([imageSrc], "image.jpg", { type: "image/jpeg" });
      dispatch(setFile(file));
    },
    [webcamRef]
  );

  const retake = (e) => {
    e.preventDefault();
    dispatch(setImage(null));
    dispatch(setFile(null));
  };

  return !image ? (
    <div className="flex w-[400px] h-[300px] flex-col items-center justify-center gap-5 relative">
      <Webcam
        audio={false}
        height={500}
        width={500}
        screenshotFormat="image/jpeg"
        videoConstraints={{
          facingMode: "user",
        }}
        ref={webcamRef}
      ></Webcam>
      <div className="absolute ">
        <button
          className="bg-black/30 text-white rounded-full h-[100px] w-[100px] hover:bg-black/50 flex items-center justify-center group"
          onClick={(e) => capture(e)}
        >
          <CameraIcon className="h-10 w-10 opacity-60 group-hover:opacity-100" />
        </button>
      </div>
    </div>
  ) : (
    <div className="flex w-[400px] h-[300px] flex-col items-center justify-center gap-5 relative">
      <Image src={image} alt="Picture of the author" width={500} height={500} />
      <div className="absolute bottom-2 right-2 flex flex-col gap-2 ">
        <button
          className="bg-black/40 text-white rounded-full h-[50px] w-[50px] hover:bg-black/50 flex items-center justify-center group"
          onClick={(e) => retake(e)}
        >
          <ArrowPathIcon className="h-5 w-5 opacity-80 group-hover:opacity-100" />
        </button>
        <button
          className="bg-white text-red-900 rounded-full h-[50px] w-[50px] flex items-center justify-center group hover:bg-black hover:text-white transition-colors duration-300"
          onClick={(e) => download(e, file)}
        >
          <ArrowDownTrayIcon className="h-5 w-5 opacity-100" />
        </button>
      </div>
    </div>
  );
}
