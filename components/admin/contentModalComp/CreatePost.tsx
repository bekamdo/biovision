import React, { useState } from 'react';
import { PostHeader } from './PostHeader';
import { TitleInput } from './TitleInput';
import { TagSelector } from './TagSelector';

import { RichTextEditor } from './RichTextEditor';
import { FileUpload } from './FileUpload';
import { ActionButtons } from './ActionButtons';
import { StoryEditor } from './StoryEditor';

interface Tag {
  id: string;
  name: string;
  selected: boolean;
}

interface PostData {
  title: string;
  selectedTags: string[];
  story: string;
  richContent: string;
  uploadedFiles: File[];
}

export const CreatePost: React.FC = () => {
  const [postData, setPostData] = useState<PostData>({
    title: '',
    selectedTags: ['stories'],
    story: '',
    richContent: '',
    uploadedFiles: []
  });

  const [tags, setTags] = useState<Tag[]>([
    { id: 'news', name: 'News', selected: false },
    { id: 'stories', name: 'Stories', selected: true },
    { id: 'directory', name: 'Directory', selected: false },
    { id: 'resources', name: 'Resources', selected: false }
  ]);

  const [isPublishing, setIsPublishing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleTitleChange = (title: string) => {
    setPostData(prev => ({ ...prev, title }));
  };

  const handleTagToggle = (tagId: string) => {
    setTags(prev => 
      prev.map(tag => 
        tag.id === tagId 
          ? { ...tag, selected: !tag.selected }
          : tag
      )
    );
    
    setPostData(prev => ({
      ...prev,
      selectedTags: tags
        .map(tag => tag.id === tagId ? { ...tag, selected: !tag.selected } : tag)
        .filter(tag => tag.selected)
        .map(tag => tag.id)
    }));
  };

  const handleStoryChange = (story: string) => {
    setPostData(prev => ({ ...prev, story }));
  };

  const handleRichContentChange = (richContent: string) => {
    setPostData(prev => ({ ...prev, richContent }));
  };

  const handleFileUpload = (files: File[]) => {
    setPostData(prev => ({ 
      ...prev, 
      uploadedFiles: [...prev.uploadedFiles, ...files] 
    }));
  };

  const handlePublish = async () => {
    setIsPublishing(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      console.log('Publishing post:', postData);
      alert('Post published successfully!');
    } catch (error) {
      console.error('Error publishing post:', error);
      alert('Error publishing post. Please try again.');
    } finally {
      setIsPublishing(false);
    }
  };

  const handleSaveDraft = async () => {
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Saving draft:', postData);
      alert('Draft saved successfully!');
    } catch (error) {
      console.error('Error saving draft:', error);
      alert('Error saving draft. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <main className="bg-[rgba(255,255,255,0.9)] flex flex-col items-stretch p-[50px] rounded-[50px] max-md:px-5">
      <PostHeader
        title="Create Post"
        description="Add, edit, schedule, and manage content."
        iconSrc="https://api.builder.io/api/v1/image/assets/c88595b038cb4ee6a726ac924480b160/82be12881b8e03529d3653a8df4162779bef6b1e?placeholderIfAbsent=true"
      />

      <form onSubmit={(e) => e.preventDefault()}>
        <TitleInput
          value={postData.title}
          onChange={handleTitleChange}
          placeholder="Title goes here"
        />

        <TagSelector
          tags={tags}
          onTagToggle={handleTagToggle}
        />

        <StoryEditor
          value={postData.story}
          onChange={handleStoryChange}
          placeholder="Tell your story... |"
        />

        <RichTextEditor
          content={postData.richContent}
          onChange={handleRichContentChange}
        />

        <FileUpload
          onFileUpload={handleFileUpload}
        />

        <ActionButtons
          onPublish={handlePublish}
          onSaveDraft={handleSaveDraft}
          isPublishing={isPublishing}
          isSaving={isSaving}
        />
      </form>
    </main>
  );
};
