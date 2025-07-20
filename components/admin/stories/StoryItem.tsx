import { MessageCircle, MoreHorizontal, Pencil, Star } from "lucide-react";

export const StoryItem: React.FC<{
  title: string;
  author: string;
  date: string;
  isHighlighted?: boolean;
}> = ({ title, author, date, isHighlighted = false }) => (
  <div
    className={`flex p-4 items-center gap-3 self-stretch rounded ${isHighlighted ? "bg-dashboard-activity-bg" : ""}`}
  >
    <div className="flex w-8 h-8 justify-center items-center">
      <img
        src="/placeholder.svg"
        alt="Avatar"
        className="w-8 h-8 flex-shrink-0 rounded-3xl"
      />
    </div>
    <div className="flex flex-col justify-center items-start gap-0.5 flex-1">
      <div className="self-stretch text-dashboard-text text-sm font-medium leading-normal tracking-tight">
        {title}
      </div>
      <div className="flex items-start gap-2.5">
        <div className="text-dashboard-success text-xs font-normal leading-normal tracking-tight">
          {author}
        </div>
        <div className="text-dashboard-text text-xs font-normal italic leading-normal tracking-tight">
          {date}
        </div>
      </div>
    </div>
    {isHighlighted && (
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <div className="flex w-9 h-6 justify-center items-center gap-2">
            <MessageCircle className="w-4 h-4 text-dashboard-success" />
          </div>
          <div className="flex w-9 h-6 justify-center items-center gap-2">
            <Star className="w-4 h-4 text-dashboard-success" />
          </div>
          <div className="flex w-9 h-6 justify-center items-center gap-2">
            <Pencil className="w-4 h-4 text-dashboard-success" />
          </div>
        </div>
        <div className="w-px h-6 opacity-20 bg-dashboard-success"></div>
        <div className="flex w-9 h-6 justify-center items-center gap-2">
          <MoreHorizontal className="w-4 h-4 text-dashboard-text" />
        </div>
      </div>
    )}
  </div>
);