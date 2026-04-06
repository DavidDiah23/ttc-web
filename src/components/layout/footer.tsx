import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="bg-[#1C0F06] text-[#FAF3EB] pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Column 1: Brand & Socials */}
          <div className="space-y-6">
            <Link href="/" className="relative h-16 w-40 flex items-center shrink-0 mb-4 invert">
              <Image 
                src="/images/logo.png" 
                alt="Tanzania Travel Company" 
                fill
                sizes="160px"
                className="object-contain object-left" 
              />
            </Link>
            <p className="text-[#7A5A42] leading-relaxed max-w-sm">
              Experience the ultimate African safari, Kilimanjaro climbs, and Zanzibar escapes with 100% true local experts.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full border border-[#4A2910] flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 text-[#C4783A] hover:text-[#1C0F06]">
                <FaInstagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#4A2910] flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 text-[#C4783A] hover:text-[#1C0F06]">
                <FaFacebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-[#4A2910] flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-500 text-[#C4783A] hover:text-[#1C0F06]">
                <FaTwitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Travel Experiences */}
          <div>
            <h4 className="font-heading text-xl font-medium mb-6 text-[#FFF8F2]">Experiences</h4>
            <ul className="space-y-4">
              <li><Link href="/tours?category=Wildlife Safaris" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Wildlife Safaris</Link></li>
              <li><Link href="/tours?category=Kilimanjaro" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Kilimanjaro Climbs</Link></li>
              <li><Link href="/tours?category=Zanzibar" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Zanzibar Escapes</Link></li>
              <li><Link href="/tours?category=Gorilla Trekking" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Gorilla Trekking</Link></li>
              <li><Link href="/tours?category=Custom" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Custom Itineraries</Link></li>
            </ul>
          </div>

          {/* Column 3: Destinations */}
          <div>
            <h4 className="font-heading text-xl font-medium mb-6 text-[#FFF8F2]">Destinations</h4>
            <ul className="space-y-4">
              <li><Link href="/destinations/tanzania" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Tanzania</Link></li>
              <li><Link href="/destinations/zanzibar" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Zanzibar</Link></li>
              <li><Link href="/destinations/kenya" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Kenya</Link></li>
              <li><Link href="/destinations/rwanda" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Rwanda</Link></li>
              <li><Link href="/destinations/uganda" className="text-[#7A5A42] hover:text-[#C4783A] transition-colors duration-500">Uganda</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="font-heading text-xl font-medium mb-6 text-[#FFF8F2]">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#C4783A] mt-0.5 flex-shrink-0" />
                <span className="text-[#7A5A42]">Moshono Road, Arusha<br/>Tanzania</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#C4783A] flex-shrink-0" />
                <span className="text-[#7A5A42]">+255 754 294 365</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#C4783A] flex-shrink-0" />
                <span className="text-[#7A5A42]">enquiries@tanzaniatravel.co.tz</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Accreditation & Bottom Bar */}
        <div className="pt-8 border-t border-[#4A2910] flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-wrap gap-4 items-center justify-center md:justify-start grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {/* Dummy text for partner logos as placeholders */}
            <span className="text-xs font-bold font-heading text-[#C4783A] border border-[#C4783A] px-2 py-1">SafariBookings</span>
            <span className="text-xs font-bold font-heading text-[#C4783A] border border-[#C4783A] px-2 py-1">SATSA</span>
            <span className="text-xs font-bold font-heading text-[#C4783A] border border-[#C4783A] px-2 py-1">TANAPA</span>
            <span className="text-xs font-bold font-heading text-[#C4783A] border border-[#C4783A] px-2 py-1">TTB</span>
          </div>

          <p className="text-[#7A5A42] text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} Tanzania Travel Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
