"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "@/redux/reducers/imageState";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { X } from "lucide-react";

function UploadImg() {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.pictures.images);
  console.log(images);
  return (
    <div className="flex select-none flex-col gap-2">
      {images.length === 3 ? null : (
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
      )}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((image) => (
            <div key={image} className="relative h-28 w-full">
              <Image
                src={image}
                alt={image}
                className="rounded-sm object-cover"
                fill
              />
              <span
                className="absolute right-1 top-1 cursor-pointer rounded-sm bg-red-600/70 p-1 text-white hover:scale-105 hover:bg-red-500 hover:shadow-sm active:scale-95"
                onClick={() => dispatch(removeImage(image))}
              >
                <X size={16} />
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadImg;
