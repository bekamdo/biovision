import React from 'react';

import { StatusIndicator } from './StatusIndicator';
import { StoryCard } from './StoryCard';

interface Story {
  id: string;
  title: string;
  description: string;
  author: string;
}

interface StatusColumnProps {
  status: 'approved' | 'pending' | 'rejected';
  stories: Story[];
  onStoryAction: (storyId: string, action: string) => void;
}

export const StatusColumn: React.FC<StatusColumnProps> = ({
  status,
  stories,
  onStoryAction
}) => {
  return (
    <section className="flex w-full max-w-[360px] md:min-w-[280px] lg:min-w-[320px] xl:min-w-[360px] flex-col items-start gap-[25px]">
      <StatusIndicator status={status} count={stories.length} />
      
      <div className="flex flex-col gap-[25px] w-full">
        {stories.map((story) => (
          <StoryCard
            key={story.id}
            title={story.title}
            description={story.description}
            author={story.author}
            status={status}
            onAction={(action) => onStoryAction(story.id, action)}
          />
        ))}
      </div>
    </section>
  );
};
