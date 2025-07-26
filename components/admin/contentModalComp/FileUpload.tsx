import React, { useState, useRef } from 'react';

interface UploadedFile {
  name: string;
  size: number;
  progress: number;
  uploading: boolean;
}

interface FileUploadProps {
  onFileUpload: (files: File[]) => void;
}

export const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload }) => {
  const [dragActive, setDragActive] = useState(false);
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(Array.from(e.dataTransfer.files));
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(Array.from(e.target.files));
    }
  };

  const handleFiles = (files: File[]) => {
    onFileUpload(files);
    
    // Simulate file upload
    files.forEach((file) => {
      const uploadFile: UploadedFile = {
        name: file.name,
        size: file.size,
        progress: 0,
        uploading: true
      };
      
      setUploadedFiles(prev => [...prev, uploadFile]);
      
      // Simulate upload progress
      const interval = setInterval(() => {
        setUploadedFiles(prev => 
          prev.map(f => 
            f.name === file.name && f.uploading
              ? { ...f, progress: Math.min(f.progress + 10, 100) }
              : f
          )
        );
      }, 200);
      
      // Complete upload after 2 seconds
      setTimeout(() => {
        clearInterval(interval);
        setUploadedFiles(prev => 
          prev.map(f => 
            f.name === file.name 
              ? { ...f, progress: 100, uploading: false }
              : f
          )
        );
      }, 2000);
    });
  };

  const onButtonClick = () => {
    fileInputRef.current?.click();
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <section className="bg-white border flex w-full flex-col mt-5 rounded-[46px] border-[rgba(217,217,217,1)] border-solid p-[47px] max-md:rounded-[25px] max-md:p-4">
      {/* Header section */}
      <div className="flex w-full items-center justify-between gap-5 mb-8 max-md:flex-col max-md:gap-4 max-md:text-center">
        <div className="flex items-center gap-[30px] max-md:flex-col max-md:gap-4">
          <img
            src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/83c4ca4aa73fcbedf46f55452675c40427b5894b?placeholderIfAbsent=true"
            alt="Upload files icon"
            className="aspect-[1] object-contain w-[94px] max-md:w-[64px]"
          />
          <div>
            <h2 className="text-[rgba(44,42,41,1)] text-2xl font-medium max-md:text-xl">Upload files</h2>
            <p className="text-[#2c2a29] text-base mt-1.5 max-md:text-sm">
              Select and upload the files of your choice
            </p>
          </div>
        </div>
        <button className="border flex min-h-12 items-center gap-2.5 justify-center w-12 rounded-[50px] border-[rgba(44,42,41,0.4)] border-solid hover:bg-gray-50 transition-colors">
          <img
            src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/28719a3f443225cc5d2174d086622de45a6a938f?placeholderIfAbsent=true"
            alt="Close"
            className="aspect-[1] object-contain w-6"
          />
        </button>
      </div>

      {/* Decorative line */}
      <div className="w-full h-px bg-[rgba(217,217,217,1)] mb-8 max-md:hidden" />

      {/* Upload area */}
      <div 
        className={`bg-white flex flex-col items-center justify-center min-h-[381px] w-full rounded-[26px] border-dashed border-4 transition-colors px-8 py-16 max-md:min-h-[300px] max-md:rounded-[20px] max-md:px-4 max-md:py-12 ${
          dragActive ? 'border-[rgba(46,125,50,1)] bg-[rgba(46,125,50,0.04)]' : 'border-[rgba(217,217,217,1)]'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/287796b4f0d7b99ef26e291c7bb1b54712097e56?placeholderIfAbsent=true"
          alt="Upload icon"
          className="aspect-[1] object-contain w-[46px] max-md:w-[36px]"
        />
        <div className="flex flex-col items-center font-medium text-center mt-8 max-md:mt-6">
          <h3 className="text-[rgba(44,42,41,1)] text-2xl max-md:text-xl">
            Choose a file or drag & drop it here
          </h3>
          <p className="text-[#2c2a29] text-base mt-[15px] max-md:text-sm max-md:mt-3">
            JPEG, PNG, PDG, and MP4 formats, up to 50MB
          </p>
        </div>
        <button 
          onClick={onButtonClick}
          className="bg-white flex items-center gap-2.5 text-xl text-[rgba(44,42,41,1)] font-bold justify-center mt-8 px-[60px] py-5 rounded-[50px] border-[rgba(44,42,41,1)] border-solid border-2 hover:bg-gray-50 transition-colors max-md:mt-6 max-md:px-8 max-md:py-3 max-md:text-lg max-md:rounded-[25px]"
        >
          <span className="self-stretch my-auto">Browse Files</span>
        </button>
      </div>

      {/* Upload progress section */}
      {uploadedFiles.length > 0 && (
        <div className="bg-[rgba(46,125,50,0.04)] flex flex-col rounded-[26px] mt-8 p-4 max-md:rounded-[20px]">
          {uploadedFiles.map((file, index) => (
            <div key={index} className="flex flex-col p-4 max-md:p-2">
              <div className="flex w-full items-start justify-between gap-4 max-md:flex-col">
                <div className="flex-1">
                  <h4 className="text-[rgba(44,42,41,1)] text-2xl font-medium max-md:text-lg">
                    {file.name}
                  </h4>
                  <div className="flex gap-2.5 text-base font-normal mt-4 max-md:text-sm max-md:mt-2 max-md:flex-col max-md:gap-1">
                    <span className="text-[#2c2a29]">
                      {formatFileSize(file.size * file.progress / 100)} of {formatFileSize(file.size)} •
                    </span>
                    <div className="flex items-center gap-2.5 text-[rgba(44,42,41,1)]">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/6f22afe34aea861a2d813a82bf132b2e7454a5d8?placeholderIfAbsent=true"
                        alt="Upload status"
                        className="aspect-[1] object-contain w-6"
                      />
                      <span>
                        {file.uploading ? 'Uploading...' : 'Complete'}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="hover:bg-gray-100 rounded p-1 transition-colors">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/af34c22ca38e788aa1a7a976f73f2bcdd7562f08?placeholderIfAbsent=true"
                    alt="Remove file"
                    className="aspect-[1] object-contain w-[30px] max-md:w-6"
                  />
                </button>
              </div>
              {/* Progress bar */}
              <div className="w-full mt-[25px] bg-gray-200 rounded-full h-2 max-md:mt-4">
                <div 
                  className="bg-[rgba(46,125,50,1)] h-2 rounded-full transition-all duration-300"
                  style={{ width: `${file.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      )}

      <input
        ref={fileInputRef}
        type="file"
        multiple
        onChange={handleChange}
        accept=".jpeg,.jpg,.png,.pdf,.mp4"
        className="hidden"
      />
    </section>
  );
};