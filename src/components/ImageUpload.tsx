"use client";

import { CldUploadWidget } from "next-cloudinary";
import { Plus, X, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
  value: string[];
  onChange: (value: string[]) => void;
  onRemove: (value: string) => void;
}

export default function ImageUpload({
  value,
  onChange,
  onRemove
}: ImageUploadProps) {
  const onUpload = (result: any) => {
    onChange([...value, result.info.secure_url]);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        {value.map((url) => (
          <div key={url} className="relative w-32 h-32 border-2 border-skena-border group">
            <img
              src={url}
              alt="Product image"
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={() => onRemove(url)}
              className="absolute -top-2 -right-2 bg-red-600 text-white p-1 hover:bg-red-700 transition-colors shadow-lg"
            >
              <X size={14} />
            </button>
          </div>
        ))}
        
        <CldUploadWidget 
          uploadPreset="ml_default"
          onSuccess={onUpload}
          options={{ multiple: true }}
        >
          {({ open }) => {
            return (
              <button
                type="button"
                onClick={() => open()}
                className="w-32 h-32 border-2 border-dashed border-skena-border flex flex-col items-center justify-center gap-2 text-skena-muted hover:text-skena-accent hover:border-skena-accent transition-all bg-skena-dark"
              >
                <Plus size={24} />
                <span className="text-[10px] font-bold uppercase tracking-widest">Upload</span>
              </button>
            );
          }}
        </CldUploadWidget>
      </div>
      
      {value.length === 0 && (
        <div className="flex items-center gap-2 text-skena-muted italic text-[10px] uppercase tracking-widest">
          <ImageIcon size={14} />
          <span>No images uploaded yet.</span>
        </div>
      )}
    </div>
  );
}
