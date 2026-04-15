"use client";

import { UploadDropzone } from "@/lib/uploadthing";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { addImage, removeImage } from "@/redux/reducers/imageState";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { LoaderCircle, X } from "lucide-react";
import { deleteFile } from "@/actions/admin-actions";
import { useState } from "react";
import { cn } from "@/lib/utils";

function UploadImg() {
  const dispatch = useDispatch();
  const images = useSelector((state: RootState) => state.pictures.images);
  const [isLoading, setIsLoading] = useState(false);

  async function deleteImgThingEndRedux(imageUrl: string) {
    try {
      setIsLoading(true);
      const res = await deleteFile(imageUrl);

      if (res?.status === 200) {
        setIsLoading(false);
        dispatch(removeImage(imageUrl));
      } else {
        toast.error("O'chirishda xato yuz berdi ❌");
      }
    } catch (err) {
      toast.error(`O'chirishda xato yuz berdi ❌, ERR ${err}`);
    }
  }

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
            <div
              key={image}
              className="group relative h-28 w-full rounded-sm bg-white"
            >
              <Image
                src={image}
                alt={image}
                className={cn(
                  "rounded-sm object-cover transition-all duration-300",
                  isLoading ? "brightness-75" : "group-hover:brightness-90",
                )}
                fill
              />
              {!isLoading && (
                <span
                  className="absolute right-1 top-1 cursor-pointer rounded-sm bg-red-600/70 p-1 text-white hover:scale-105 hover:bg-red-500 hover:shadow-sm active:scale-95"
                  onClick={() => deleteImgThingEndRedux(image)}
                >
                  <X size={16} />
                </span>
              )}
              {isLoading && (
                <span className="absolute inset-0 flex animate-spin cursor-pointer items-center justify-center text-white">
                  <LoaderCircle size={30} />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UploadImg;
