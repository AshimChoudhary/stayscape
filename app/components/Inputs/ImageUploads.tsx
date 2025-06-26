'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { FC, useCallback } from 'react';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

interface ImageUploadprops {
  onChange: (value: string) => void;
  value: string;
}

const ImageUploads: FC<ImageUploadprops> = ({ onChange, value }) => {
  const handleUploads = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onSuccess={handleUploads}
      uploadPreset="stayScape_preset"
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50} />

            <div className="font-semibold text-lg ">Click to Upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  src={value}
                  priority
                  className="rounded-2xl"
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUploads;
