"use client";
import { cn } from "@/lib/utils";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useDropzone } from "react-dropzone";
import { RiUploadLine } from "@remixicon/react";
import Image from "next/image";

const mainVariant = {
  initial: {
    x: 0,
    y: 0,
  },
  animate: {
    x: 20,
    y: -20,
    opacity: 0.9,
  },
};

const secondaryVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

export const FileUpload = ({ onChange }) => {
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleFileChange = async (newFiles) => {
    const fileDataPromises = newFiles.map(async (file) => {
      const base64 = await convertToBase64(file);
      return {
        name: file.name,
        size: file.size,
        type: file.type,
        lastModified: file.lastModified,
        base64,
      };
    });

    const fileData = await Promise.all(fileDataPromises);
    setFiles((prevFiles) => [...prevFiles, ...fileData]);
    onChange && onChange(fileData);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const { getRootProps, isDragActive } = useDropzone({
    multiple: false,
    noClick: true,
    onDrop: handleFileChange,
    onDropRejected: (error) => {
      // console.log(error);
    },
  });

  return (
    <div className="w-full" {...getRootProps()}>
      <motion.div
        onClick={handleClick}
        whileHover="animate"
        className="p-10 group/file block rounded-lg cursor-pointer w-full relative overflow-hidden"
      >
        <input
          ref={fileInputRef}
          id="file-upload-handle"
          type="file"
          onChange={(e) => handleFileChange(Array.from(e.target.files || []))}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center">
          <p className="relative z-20 font-sans font-bold text-[#011] text-base group-hover/file:text-[#EE3A39] transition-colors">
            Upload files
          </p>
          <p className="relative z-20 font-sans font-normal text-[#626262] text-sm mt-2 text-center max-w-[200px]">
            Drag or drop your files here or click to browse
          </p>
          <div className="relative w-full mt-10 max-w-xl mx-auto">
            {files.length > 0 &&
              files.map((file, idx) => (
                <motion.div
                  key={"file" + idx}
                  layoutId={idx === 0 ? "file-upload" : "file-upload-" + idx}
                  className={cn(
                    "relative overflow-hidden group z-40 bg-white border border-gray-100 flex flex-col items-start justify-start p-4 mt-4 w-full mx-auto rounded-xl",
                    "shadow-sm"
                  )}
                >
                  <div className="flex justify-between w-full items-center gap-4">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="text-sm font-bold text-[#011] truncate max-w-xs"
                    >
                      {file.name}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="rounded-lg px-2 py-1 w-fit flex-shrink-0 text-xs font-medium bg-gray-50 border border-gray-100 text-[#626262] shadow-sm tracking-wide"
                    >
                      {(file.size / (1024 * 1024)).toFixed(2)} MB
                    </motion.p>
                  </div>

                  <div className="flex text-xs md:flex-row flex-col items-start md:items-center w-full mt-3 justify-between text-[#626262]">
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="px-2 py-1 rounded-md bg-gray-50 border border-gray-100 font-medium uppercase tracking-wider text-[10px]"
                    >
                      {file.type || "FILE"}
                    </motion.p>

                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      layout
                      className="font-medium"
                    >
                      modified{" "}
                      {new Date(file.lastModified).toLocaleDateString()}
                    </motion.p>
                  </div>
                </motion.div>
              ))}
            {!files.length && (
              <motion.div
                layoutId="file-upload"
                variants={mainVariant}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
                className={cn(
                  "relative group-hover/file:shadow-sm z-40 bg-white border border-dashed border-gray-300 group-hover/file:border-[#EE3A39]/50 transition-colors flex items-center justify-center p-4 mt-6 w-16 h-16 mx-auto rounded-2xl",
                  "shadow-[0_4px_20px_rgba(0,0,0,0.03)]"
                )}
              >
                {isDragActive ? (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-[#EE3A39] flex flex-col items-center justify-center"
                  >
                    <RiUploadLine className="h-6 w-6 text-[#EE3A39]" />
                  </motion.p>
                ) : (
                  <RiUploadLine className="h-6 w-6 text-[#626262] group-hover/file:text-[#EE3A39] transition-colors" />
                )}
              </motion.div>
            )}

            {!files.length && (
              <motion.div
                variants={secondaryVariant}
                className="absolute opacity-0 border border-dashed border-[#EE3A39] inset-0 z-30 bg-transparent flex items-center justify-center mt-6 w-16 h-16 mx-auto rounded-2xl pointer-events-none"
              ></motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
