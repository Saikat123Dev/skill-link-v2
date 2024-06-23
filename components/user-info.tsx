"use client"
import { useState, useEffect } from "react";

import { Icons } from "@/components/icons"; // Adjust path if necessary
import { UploadButton } from "@uploadthing/react";
import type { ExtendedUser } from "@/next-auth"; // Adjust path and import type if necessary
import { Pencil } from "lucide-react";


interface UserInfoProps {
  user?: ExtendedUser;
}

export const UserInfo = ({ user }: UserInfoProps) => {
  
  
  const [imageUrl, setImageUrl] = useState<string | null>(
    () => localStorage.getItem("userImageUrl") || user?.image || null
  );
  // Update localStorage whenever imageUrl changes
  useEffect(() => {
    if (imageUrl) {
      localStorage.setItem("userImageUrl", imageUrl);
    } else {
      localStorage.removeItem("userImageUrl");
    }
  }, [imageUrl]);

  const handleImageReset = () => {
    setImageUrl(null);
    
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="h-[150px] w-[150px] hover:cursor-pointer relative">
        {imageUrl ? (
          <div className="relative h-full w-full rounded-full overflow-hidden">
            <img
              src={imageUrl}
              alt="Profile Picture"
              className="h-full w-full object-cover"
            />
            <button
              onClick={handleImageReset}
              type="button"
              className="absolute top-0 right-0 p-2 bg-slate-900 rounded-full shadow text-slate-50"
            >
              <Pencil className="w-5 h-5" />
            </button>
          </div>
        ) : (
          <div className="h-full w-full bg-blue-300 flex items-center justify-center rounded-full">
            <Icons.user className="h-12 w-12 text-gray-600" />
          </div>
        )}
      </div>
      {!imageUrl && (
        <UploadButton<string | null, string>
          endpoint="imageUploader" // Replace with your actual endpoint URL
          onClientUploadComplete={(res) => {
            setImageUrl(res[0].url);
            console.log("Files: ", res);
            alert("Upload Completed");
          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
      <p className="text-lg text-white font-semibold">
        {user?.name || "Anonymous"}
      </p>
    </div>
  );
};
