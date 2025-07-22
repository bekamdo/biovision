import Link from "next/link"

// Using Lucide React icons for better consistency and styling with Tailwind
import { Twitter, Facebook, Instagram, PinIcon as Pinterest, LinkIcon, Phone, Mail, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-biovision-dark  w-full text-biovision-text-light">
      {/* Main Footer Content */}
      <div className="px-4 pt-8 md:pt-16 lg:pt-20 pb-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Logo and Description Section */}
            <div className="md:col-span-2 lg:col-span-5 space-y-6">
              {/* Logo */}
              <div>
                <img
                  src="/placeholder.svg?height=176&width=247"
                  alt="BioVision Africa Trust"
                  className="w-full max-w-[247px] h-auto object-contain"
                />
              </div>
              {/* Title */}
              <h2 className="text-xl md:text-2xl font-bold leading-relaxed">
                Growing Africa's Future Through Sustainable Agriculture
              </h2>
              {/* Description */}
              <p className="text-base leading-relaxed opacity-90">
                We partner with farmers across Africa to build sustainable food systems through agroecology, creating
                premium products that support rural communities.
              </p>
              {/* Social Media Icons */}
              <div className="flex items-center gap-6">
                {[
                  { platform: "twitter", icon: <Twitter className="w-4 h-4" /> },
                  { platform: "facebook", icon: <Facebook className="w-4 h-4" /> },
                  { platform: "pinterest", icon: <Pinterest className="w-4 h-4" /> },
                  { platform: "instagram", icon: <Instagram className="w-4 h-4" /> },
                ].map((social) => (
                  <Link
                    key={social.platform}
                    href="#"
                    className="w-10 h-10 bg-biovision-green rounded-full flex items-center justify-center hover:bg-opacity-80 transition-all duration-200"
                    aria-label={social.platform}
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/* Explore Section */}
            <div className="md:col-span-1 lg:col-span-3 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Explore</h3>
                <div className="w-11 h-1 bg-biovision-green rounded-full mb-6"></div>
              </div>
              <nav className="space-y-3">
                {[
                  { label: "Our Mission", href: "/mission" },
                  { label: "Sustainability Reports", href: "/sustainability" },
                  { label: "Become a Partner", href: "/partner" },
                  { label: "Press & Media", href: "/press" },
                  { label: "Careers", href: "/careers" },
                  { label: "FAQs", href: "/faqs" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-3 text-base font-medium hover:text-biovision-green transition-colors duration-200 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      <LinkIcon className="w-3 h-3" />
                    </span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            {/* Contact Section */}
            <div className="md:col-span-1 lg:col-span-4 space-y-6">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Contact</h3>
                <div className="w-11 h-1 bg-biovision-green rounded-full mb-6"></div>
              </div>
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-white" />
                  <span className="text-base font-medium">+254 (0) 20 632 4806</span>
                </div>
                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-white" />
                  <span className="text-base font-medium">info@biovisionafricatrust.org</span>
                </div>
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-base font-medium leading-relaxed">
                    Duduville Campus, Kasarani Nairobi, Kenya
                  </span>
                </div>
                {/* PO Box */}
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-white" />
                  <span className="text-base font-medium">P.O. Box 12345, Nairobi, Kenya</span>
                </div>
                {/* Hours */}
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-white" />
                  <div className="text-base font-medium leading-relaxed">
                    <div>Monday - Friday: 8:00 AM - 5:00 PM EAT</div>
                    <div>Saturday: 9:00 AM - 1:00 PM EAT</div>
                    <div>Sunday: Closed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="bg-biovision-dark-alt py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-biovision-gold text-sm font-bold">
              © 2025 BioVision Africa Trust. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6 text-sm">
              {[
                { label: "Terms of Use", href: "/terms" },
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Cookie Policy", href: "/cookies" },
              ].map((link, index) => (
                <div key={link.href} className="flex items-center">
                  {index > 0 && <div className="w-px h-3.5 bg-biovision-gold mr-6"></div>}
                  <Link
                    href={link.href}
                    className="text-biovision-gold hover:text-biovision-cream transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
