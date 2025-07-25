interface Article {
  id: string;
  author: {
    name: string;
    image: string;
  };
  title: string;
  publishedOn: string;
  updatedOn: string;
  approvedBy: string;
  status: 'Published' | 'Unpublished';
}

interface ArticleTableProps {
  articles: Article[];
}

export default function ArticleTable({ articles }: ArticleTableProps) {
  return (
    <div className="w-full bg-white font-sans">
      {/* Header */}
      <div className="bg-[#f8f8f8] border border-[#eaeaea] rounded-t-md flex items-center px-4 py-3 gap-5 text-sm font-semibold text-[#1e1e1e] leading-[1.14]">
        <div className="w-16 flex-shrink-0">ID</div>
        <div className="w-32 flex-shrink-0">Author</div>
        <div className="flex-1 min-w-0">Title</div>
        <div className="w-32 flex-shrink-0 text-right">Approved By</div>
        <div className="w-24 flex-shrink-0 text-center">Status</div>
      </div>

      {/* Rows */}
      <div className="border-l border-r border-[#eaeaea]">
        {articles.map((article, index) => (
          <div
            key={article.id}
            className={`border-b border-[#eaeaea] flex items-center px-4 py-3 gap-5 text-sm text-[#1e1e1e] ${
              index === articles.length - 1 ? 'rounded-b-md' : ''
            }`}
          >
            {/* ID */}
            <div className="w-16 flex-shrink-0 font-semibold leading-[1.14]">
              {article.id}
            </div>

            {/* Author */}
            <div className="w-32 flex-shrink-0 flex items-center gap-2">
              <img
                src={article.author.image}
                alt={article.author.name}
                className="w-10 h-10 rounded-full object-cover flex-shrink-0"
              />
              <span className="truncate">{article.author.name}</span>
            </div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <div className="text-[#1e1e1e] text-sm leading-[1.2] mb-2 truncate">
                {article.title}
              </div>
              <div className="text-[#606060] text-xs leading-[1.25]">
                Published On:{' '}
                <span className="text-[#1e1e1e]">{article.publishedOn}</span>{' '}
                Updated On:{' '}
                <span className="text-[#1e1e1e]">{article.updatedOn}</span>
              </div>
            </div>

            {/* Approved By */}
            <div className="w-32 flex-shrink-0 text-right text-sm leading-[1.14] text-[#1e1e1e]">
              {article.approvedBy}
            </div>

            {/* Status */}
            <div className="w-24 flex-shrink-0 flex justify-center">
              <div className="border border-[#eaeaea] rounded-md px-2 py-1 flex items-center gap-1.5 text-sm leading-[1.14] text-[#1e1e1e] text-center whitespace-nowrap">
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    article.status === 'Published' ? 'bg-[#119c30]' : 'bg-[#ed1010]'
                  }`}
                />
                {article.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
