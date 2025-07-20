


export const ActivityCard: React.FC<{
  title: string;
  description: string;
  footer: string;
}> = ({ title, description, footer }) => (
  <div className="flex h-[210px] p-8 flex-col justify-center items-start gap-2.5 flex-shrink-0 self-stretch rounded-[10px] bg-dashboard-green">
    <div className="flex flex-col items-start gap-2.5 self-stretch">
      <div className="flex flex-col items-start gap-2.5 self-stretch">
        <div className="flex flex-col items-start gap-1.5 self-stretch">
          <div className="self-stretch text-white text-xs font-medium leading-normal opacity-60">
            10.40 AM, Fri 10 June 2025
          </div>
          <div className="self-stretch text-white text-lg font-medium leading-7">
            {title}
          </div>
          <div className="self-stretch text-white text-sm font-normal leading-5 opacity-80">
            {description}
          </div>
        </div>
        <div className="flex h-12 justify-between items-center self-stretch">
          <div className="text-white text-sm font-normal leading-normal">
            {footer}
          </div>
          <div className="flex h-9 px-4 py-2.5 justify-center items-center gap-2.5 rounded-[20px] bg-white">
            <div className="flex w-[107px] h-4 flex-col justify-center text-dashboard-success text-center text-sm font-medium leading-normal">
              See All Activity
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);