import React, { useState } from 'react';

interface RichTextEditorProps {
  content: string;
  onChange: (content: string) => void;
}

export const RichTextEditor: React.FC<RichTextEditorProps> = ({ content, onChange }) => {
  const [activeTab, setActiveTab] = useState('File');
  const [wordCount, setWordCount] = useState(0);

  const tabs = ['File', 'Edit', 'View', 'Insert', 'Format', 'Tools', 'Help'];

  const handleContentChange = (newContent: string) => {
    onChange(newContent);
    const words = newContent.trim().split(/\s+/).filter(word => word.length > 0);
    setWordCount(words.length);
  };

  return (
    <section className="w-full mt-5 max-md:max-w-full">
      {/* Header with tabs */}
      <div className="items-center border bg-[rgba(46,125,50,0.04)] flex w-full font-bold whitespace-nowrap flex-wrap px-6 py-3 rounded-[20px_20px_0_0] border-solid border-[#D9D9D9] max-md:max-w-full max-md:px-5">
        <div className="items-center self-stretch flex min-w-60 gap-1 text-base text-[#2c2a29] text-center flex-wrap flex-1 shrink basis-[0%] my-auto max-md:max-w-full">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`justify-center items-center self-stretch flex min-h-11 gap-2 overflow-hidden my-auto px-4 py-0 rounded-xl transition-colors ${
                activeTab === tab ? 'bg-white shadow-sm' : 'hover:bg-white/50'
              }`}
            >
              <span className="self-stretch my-auto text-base leading-6">{tab}</span>
            </button>
          ))}
        </div>
        <div className="self-stretch flex gap-2 text-sm text-[rgba(44,42,41,1)] tracking-[-0.08px] leading-none my-auto">
          <button className="border flex items-center gap-2 overflow-hidden justify-center px-4 py-2.5 rounded-[1234px] border-[rgba(217,217,217,1)] border-solid hover:bg-gray-50 transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/dc2f3ac7b08bb20a8990eb26140e576a66d4c443?placeholderIfAbsent=true"
              alt="Preview icon"
              className="aspect-[1] object-contain w-5 self-stretch shrink-0 my-auto"
            />
            <span className="self-stretch my-auto">Preview</span>
          </button>
        </div>
      </div>

      {/* Toolbar */}
      <div className="justify-center items-center content-center flex-wrap border bg-white flex w-full gap-6 px-8 py-6 border-solid border-[#D9D9D9] max-md:max-w-full max-md:px-5">
        {/* Undo/Redo */}
        <div className="justify-center items-center rounded self-stretch flex gap-3 my-auto">
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/f4995828979787d71fa483b28ea767a4935fbedf?placeholderIfAbsent=true"
              alt="Undo"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/0c646dafff0f59263bfa7ffeca5e77bc71983248?placeholderIfAbsent=true"
              alt="Redo"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
        </div>

        {/* Main toolbar */}
        <div className="justify-center items-center content-center flex-wrap self-stretch flex min-w-60 gap-[0_12px] my-auto max-md:max-w-full">
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/496985e3851351cc2b479d7a9a178ae054b800e7?placeholderIfAbsent=true"
              alt="Tool"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/2c8d608826d8a97d01da65230186d998f0253db2?placeholderIfAbsent=true"
              alt="Tool"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>

          {/* Zoom control */}
          <div className="items-center self-stretch flex gap-1.5 overflow-hidden text-base text-[#2C2A29] font-medium whitespace-nowrap text-center my-auto px-1.5 py-0">
            <span className="text-base leading-6 self-stretch my-auto">100%</span>
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a1639776d56cd6a74ca64bccca1d03d749a0b95b?placeholderIfAbsent=true"
              alt="Dropdown"
              className="aspect-[1] object-contain w-7 self-stretch shrink-0 h-7 my-auto"
            />
          </div>

          {/* Font controls */}
          <div className="self-stretch flex min-w-60 items-center gap-3 justify-center my-auto">
            <div className="items-center rounded bg-[rgba(46,125,50,0.04)] self-stretch flex gap-1.5 overflow-hidden text-base text-[#2C2A29] font-medium text-center my-auto px-1.5 py-0">
              <span className="text-base leading-6 self-stretch my-auto">Paragraph text</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a1639776d56cd6a74ca64bccca1d03d749a0b95b?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-7 self-stretch shrink-0 h-7 my-auto"
              />
            </div>
            <div className="items-center rounded bg-[rgba(46,125,50,0.04)] self-stretch flex gap-1.5 overflow-hidden text-base text-[#2C2A29] font-medium whitespace-nowrap text-center my-auto px-1.5 py-0">
              <span className="text-base leading-6 self-stretch my-auto">Arial</span>
              <img
                src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a1639776d56cd6a74ca64bccca1d03d749a0b95b?placeholderIfAbsent=true"
                alt="Dropdown"
                className="aspect-[1] object-contain w-7 self-stretch shrink-0 h-7 my-auto"
              />
            </div>
            <div className="justify-center items-center border shadow-[0_1px_2px_0_rgba(26,26,26,0.08)] bg-[rgba(46,125,50,0.04)] self-stretch flex min-h-7 gap-2.5 my-auto rounded-xl border-solid border-[#D9D9D9]">
              <button className="justify-center items-center shadow-[0_1px_2px_0_rgba(26,26,26,0.08)] self-stretch flex min-h-7 flex-col w-9 my-auto p-0 rounded-xl hover:bg-gray-100 transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/a378c35c64ec34bb77fe3ada83387ca75212b4c4?placeholderIfAbsent=true"
                  alt="Decrease"
                  className="aspect-[1] object-contain w-5 h-5"
                />
              </button>
              <span className="self-stretch text-[#2c2a29] text-center text-base font-medium leading-6 w-[21px]">
                00
              </span>
              <button className="justify-center items-center shadow-[0_1px_2px_0_rgba(26,26,26,0.08)] self-stretch flex min-h-7 flex-col w-9 my-auto p-0 rounded-xl hover:bg-gray-100 transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ac9aaca8fe868177e5f304db5b7f32a580de5e13?placeholderIfAbsent=true"
                  alt="Increase"
                  className="aspect-[1] object-contain w-5 h-5"
                />
              </button>
            </div>
          </div>

          <div className="self-stretch flex min-h-7 my-auto pr-3 border-r-[#D9D9D9] border-r border-solid" />
        </div>

        {/* Formatting tools */}
        <div className="justify-center items-center self-stretch flex min-w-60 gap-3 my-auto">
          {[
            "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4949412de42a049dcd8614f81c9ba49e7a24334f?placeholderIfAbsent=true",
            "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/d17b80e20f47178d10a795a9069ae9acb3ae441d?placeholderIfAbsent=true",
            "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/b8f01b7550be532b138f13d3c4ccb0ce9e5c8d41?placeholderIfAbsent=true",
            "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/50980a2299cd5483bc1e24a37f519de65e01216b?placeholderIfAbsent=true"
          ].map((src, index) => (
            <button key={index} className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
              <img
                src={src}
                alt={`Format tool ${index + 1}`}
                className="aspect-[1] object-contain w-7 h-7"
              />
            </button>
          ))}
          <button className="hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4faf09e0bfb1de954cf7637b024ca1e902f7fa6c?placeholderIfAbsent=true"
              alt="Format tool"
              className="aspect-[2] object-contain w-14 self-stretch shrink-0 my-auto"
            />
          </button>
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/4f7d57cd14ce917a14efb657b2b471d61d372ac2?placeholderIfAbsent=true"
              alt="Format tool"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
          <div className="self-stretch flex min-h-7 my-auto pr-3 border-r-[#D9D9D9] border-r border-solid" />
        </div>

        {/* Attachment tools */}
        <div className="justify-center items-center self-stretch flex gap-3 my-auto">
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/d2422e6b872fd176f641be9141d76e8fa450e975?placeholderIfAbsent=true"
              alt="Attachment"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
          <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
            <img
              src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/8aa972006df7521e680d7bdcb59ee11f5c4d0e69?placeholderIfAbsent=true"
              alt="Attachment"
              className="aspect-[1] object-contain w-7 h-7"
            />
          </button>
          <div className="self-stretch flex min-h-7 my-auto pr-3 border-r-[#D9D9D9] border-r border-solid" />
        </div>

        {/* Paragraph tools */}
        <div className="justify-center items-center content-center flex-wrap self-stretch flex min-w-60 gap-[24px_32px] my-auto max-md:max-w-full">
          {/* List tools */}
          <div className="justify-center items-center self-stretch flex gap-3 my-auto">
            <div className="items-center self-stretch flex gap-1.5 overflow-hidden my-auto">
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/9480de9a3deb2544e0cd570d3aa505c0fcf52910?placeholderIfAbsent=true"
                  alt="Bullet list"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/5aa56bfeb92e0d7516f8d3f4d42198e35c4f2ec9?placeholderIfAbsent=true"
                  alt="List dropdown"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
            </div>
            <div className="items-center self-stretch flex gap-1.5 overflow-hidden my-auto">
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/2fb31c45b65463bf77767bcfd82efe231d2db246?placeholderIfAbsent=true"
                  alt="Numbered list"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/5aa56bfeb92e0d7516f8d3f4d42198e35c4f2ec9?placeholderIfAbsent=true"
                  alt="List dropdown"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
            </div>
            <div className="items-center self-stretch flex gap-1.5 overflow-hidden my-auto">
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/9dfd2865123498da9544380a98296e0b4e337545?placeholderIfAbsent=true"
                  alt="Todo list"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
              <button className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/5aa56bfeb92e0d7516f8d3f4d42198e35c4f2ec9?placeholderIfAbsent=true"
                  alt="List dropdown"
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
            </div>
          </div>

          {/* Alignment tools */}
          <div className="justify-center items-center self-stretch flex gap-3 my-auto">
            {[
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/356c204403e4432848d4aa6f96321daa0cbfd1d0?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/b69e7eef847ff70b6997c9be85c2ad74f697d04b?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/87779a8649905e9572b8726d0bc62ca2c30a61a2?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/e4699874c0d77c4f8663b18fa27ef754b1b04dfe?placeholderIfAbsent=true"
            ].map((src, index) => (
              <button key={index} className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src={src}
                  alt={`Alignment ${index + 1}`}
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
            ))}
          </div>

          {/* Edit tools */}
          <div className="justify-center items-center self-stretch flex gap-3 my-auto">
            {[
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/66c4e5ccbe532caa7b7fe0b8fcd3aee9013bb680?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/99aff4e33fec2a4941f746dd19f1969b9ddd48dd?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/7b2767dc7d62847641e155a32c0350675eed150e?placeholderIfAbsent=true",
              "https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/ecd3a37acbdc1a1c5b6168f1362612968eb4da1d?placeholderIfAbsent=true"
            ].map((src, index) => (
              <button key={index} className="aspect-[1] w-7 h-7 hover:bg-gray-100 rounded transition-colors">
                <img
                  src={src}
                  alt={`Edit tool ${index + 1}`}
                  className="aspect-[1] object-contain w-7 h-7"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="justify-between items-center bg-[rgba(46,125,50,0.04)] flex min-h-10 w-full gap-[40px_100px] overflow-hidden text-base text-[#2c2a29] font-medium text-center flex-wrap px-4 py-0 rounded-[0_0_20px_20px] border-b-[#D9D9D9] border-b border-solid max-md:max-w-full">
        <span className="text-base leading-6 self-stretch my-auto">
          {wordCount} words
        </span>
        <img
          src="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/e47303ca50c3b1b7eedf027d7d258aea26db7c95?placeholderIfAbsent=true"
          alt="Status"
          className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto"
        />
      </div>
    </section>
  );
};
