import Image from "next/image"
import Link from "next/link"

interface EventCardProps {
  imageSrc: string
  imageAlt: string
  title: string
  description: string
  dateLocation: string
  onViewClick?: () => void 
  showPublishButton?: boolean
}

export default function EventCard({
  imageSrc,
  imageAlt,
  title,
  description,
  dateLocation,
  showPublishButton = false,
  onViewClick
}: EventCardProps) {
  return (
    <div className="rounded-[20px] overflow-hidden relative group">
      <div className="relative">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={imageAlt}
          width={400}
          height={447} // Calculated from aspect-[0.894] with width 400
          className="w-full aspect-[0.894] object-cover rounded-[20px]"
        />
        <div className="absolute inset-0 bg-black/5 rounded-[20px] flex flex-col justify-end p-4 sm:p-6 lg:p-8">
          <div className="text-white w-full overflow-hidden">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">
              {title}
            </h3>
            <p className="text-sm sm:text-base mb-2 lg:mb-2.5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words line-clamp-3">
              {description}
            </p>
            <p className="text-xs mb-4 lg:mb-5 drop-shadow-[0px_4px_30px_rgba(0,0,0,1)] break-words">{dateLocation}</p>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Link href="#" passHref>
                <button onClick={onViewClick} className="bg-white text-[#2e7d32]  font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                  View
                </button>
              </Link>
              {showPublishButton && (
                <button className="bg-white text-[#2e7d32]  font-bold px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-full text-xs sm:text-sm hover:bg-gray-50 transition-colors whitespace-nowrap">
                  Publish
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
