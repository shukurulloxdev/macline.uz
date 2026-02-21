"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addImage } from "@/redux/reducers/imageState";
import { RootState } from "@/redux/store";
import Image from "next/image";

function UploadImg() {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.pictures.images);
  return (
    <div className="flex flex-col gap-2">
      <UploadDropzone
        className="h-[210px] w-full cursor-pointer"
        config={{ appendOnPaste: true, mode: "auto" }}
        appearance={{
          container: {
            border: "2px dotted white",
            borderRadius: "10px",
            backgroundColor: "rgba(255,255,255,0.05)",
            padding: "1rem",
          },
          button: {
            backgroundColor: "blue",
            color: "white",
            padding: "12px 24px",
            borderRadius: "0.5rem",
            fontWeight: "bold",
            position: "relative",
            overflow: "hidden", // nuqtani yashirish uchun
          },
          uploadIcon: {
            color: "white",
            fontSize: "50px",
            width: "50px",
            height: "50px",
          },
        }}
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          if (res && res[0] && res[0].ufsUrl) {
            dispatch(addImage(res[0].ufsUrl));
          } else {
            toast.error("Hato yuz berdi ❌");
          }
        }}
        onUploadError={(error) => {
          console.error("Upload error:", error);
          alert("❌ Rasim yuklanmadi");
        }}
      />
      {images.length > 0 && (
        <div className="grd grid-cols-3 gap-2">
          {images.map((image) => (
            <div key={image} className="relative h-14 w-full">
              <Image
                src={image}
                alt={image}
                className="rounded-sm object-cover"
                fill
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadImg;
