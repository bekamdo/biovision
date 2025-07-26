import React from 'react';

interface ActionButtonsProps {
  onPublish: () => void;
  onSaveDraft: () => void;
  isPublishing?: boolean;
  isSaving?: boolean;
}

export const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  onPublish, 
  onSaveDraft, 
  isPublishing = false, 
  isSaving = false 
}) => {
  return (
    <div className="flex justify-center">
      <div className="flex gap-5 text-sm font-bold mt-5">
        <button 
          onClick={onPublish}
          disabled={isPublishing}
          className="bg-[rgba(46,125,50,1)] flex items-center gap-2.5 text-[rgba(253,251,246,1)] whitespace-nowrap justify-center px-[60px] py-5 rounded-[50px] hover:bg-[rgba(46,125,50,0.9)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-md:px-5"
        >
          <span className="self-stretch my-auto">
            {isPublishing ? 'Publishing...' : 'Publish'}
          </span>
        </button>
        <button 
          onClick={onSaveDraft}
          disabled={isSaving}
          className="bg-[rgba(253,251,246,1)] flex items-center gap-2.5 text-[rgba(46,125,50,1)] justify-center px-[60px] py-5 rounded-[50px] border-[rgba(46,125,50,1)] border-solid border-2 hover:bg-[rgba(46,125,50,0.04)] transition-colors disabled:opacity-50 disabled:cursor-not-allowed max-md:px-5"
        >
          <span className="self-stretch my-auto">
            {isSaving ? 'Saving...' : 'Save Draft'}
          </span>
        </button>
      </div>
    </div>
  );
};
