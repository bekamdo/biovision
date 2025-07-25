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

interface ResponsiveArticleTableProps {
  articles: Article[];
}

export default function ResponsiveArticleTable({ articles }: ResponsiveArticleTableProps) {
  return (
    <div className="w-full bg-white font-sans">
      {/* Desktop Table View */}
      <div className="hidden lg:block max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="bg-[#f8f8f8] border border-[#eaeaea] rounded-t-md flex items-center px-4 py-3 text-sm font-semibold text-[#1e1e1e] leading-[1.14]">
          <div className="w-20 flex-shrink-0">ID</div>
          <div className="w-48 flex-shrink-0">Author</div>
          <div className="flex-1 min-w-0 pr-6">Title</div>
          <div className="w-32 flex-shrink-0">Approved By</div>
          <div className="w-28 flex-shrink-0 text-center">Status</div>
        </div>

        {/* Rows */}
        <div className="border-l border-r border-[#eaeaea]">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`border-b border-[#eaeaea] flex items-center px-4 py-3 text-sm text-[#1e1e1e] ${
                index === articles.length - 1 ? 'rounded-b-md' : ''
              }`}
            >
              {/* ID */}
              <div className="w-20 flex-shrink-0 font-semibold leading-[1.14]">
                {article.id}
              </div>

              {/* Author */}
              <div className="w-48 flex-shrink-0 flex items-center gap-2">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <span className="truncate">{article.author.name}</span>
              </div>

              {/* Title */}
              <div className="flex-1 min-w-0 pr-6">
                <div className="text-[#1e1e1e] text-sm leading-[1.2] mb-2">
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
              <div className="w-32 flex-shrink-0 text-sm leading-[1.14] text-[#1e1e1e]">
                {article.approvedBy}
              </div>

              {/* Status */}
              <div className="w-28 flex-shrink-0 flex justify-center">
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

      {/* Mobile Card View */}
      <div className="lg:hidden space-y-4">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border border-[#eaeaea] rounded-md p-4 bg-white"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <div className="font-semibold text-sm text-[#1e1e1e]">
                    {article.author.name}
                  </div>
                  <div className="text-xs text-[#606060]">ID: {article.id}</div>
                </div>
              </div>
              <div className="border border-[#eaeaea] rounded-md px-2 py-1 flex items-center gap-1.5 text-xs leading-[1.14] text-[#1e1e1e] text-center whitespace-nowrap">
                <div
                  className={`w-2 h-2 rounded-full flex-shrink-0 ${
                    article.status === 'Published' ? 'bg-[#119c30]' : 'bg-[#ed1010]'
                  }`}
                />
                {article.status}
              </div>
            </div>

            <div className="mb-3">
              <div className="text-[#1e1e1e] text-sm leading-[1.2] mb-2">
                {article.title}
              </div>
              <div className="text-[#606060] text-xs leading-[1.25]">
                Published On:{' '}
                <span className="text-[#1e1e1e]">{article.publishedOn}</span>
                <br />
                Updated On:{' '}
                <span className="text-[#1e1e1e]">{article.updatedOn}</span>
              </div>
            </div>

            <div className="text-xs text-[#606060]">
              Approved By:{' '}
              <span className="text-[#1e1e1e] font-medium">{article.approvedBy}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tablet View */}
      <div className="hidden md:block lg:hidden">
        {/* Header */}
        <div className="bg-[#f8f8f8] border border-[#eaeaea] rounded-t-md flex items-center px-4 py-3 text-sm font-semibold text-[#1e1e1e] leading-[1.14]">
          <div className="w-24 flex-shrink-0">ID</div>
          <div className="w-40 flex-shrink-0">Author</div>
          <div className="flex-1 min-w-0 pr-4">Title</div>
          <div className="w-28 flex-shrink-0 text-center">Status</div>
        </div>

        {/* Rows */}
        <div className="border-l border-r border-[#eaeaea]">
          {articles.map((article, index) => (
            <div
              key={article.id}
              className={`border-b border-[#eaeaea] flex items-center px-4 py-3 text-sm text-[#1e1e1e] ${
                index === articles.length - 1 ? 'rounded-b-md' : ''
              }`}
            >
              {/* ID */}
              <div className="w-24 flex-shrink-0 font-semibold leading-[1.14]">
                {article.id}
              </div>

              {/* Author */}
              <div className="w-40 flex-shrink-0 flex items-center gap-2">
                <img
                  src={article.author.image}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full object-cover flex-shrink-0"
                />
                <span className="truncate text-xs">{article.author.name}</span>
              </div>

              {/* Title + Details */}
              <div className="flex-1 min-w-0 pr-4">
                <div className="text-[#1e1e1e] text-sm leading-[1.2] mb-1">
                  {article.title}
                </div>
                <div className="text-[#606060] text-xs leading-[1.25] mb-1">
                  Published: <span className="text-[#1e1e1e]">{article.publishedOn}</span>
                </div>
                <div className="text-[#606060] text-xs">
                  Approved By: <span className="text-[#1e1e1e]">{article.approvedBy}</span>
                </div>
              </div>

              {/* Status */}
              <div className="w-28 flex-shrink-0 flex justify-center">
                <div className="border border-[#eaeaea] rounded-md px-2 py-1 flex items-center gap-1.5 text-xs leading-[1.14] text-[#1e1e1e] text-center whitespace-nowrap">
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
    </div>
  );
}
