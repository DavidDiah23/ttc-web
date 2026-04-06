import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-xs font-medium tracking-wide">
      <div className="container mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center opacity-90">
        <div className="flex items-center space-x-6 mb-2 sm:mb-0">
          <div className="flex items-center space-x-2">
            <Phone className="w-3.5 h-3.5 text-accent" />
            <span>+255 754 294 365</span>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span>enquiries@tanzaniatravel.co.tz</span>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="w-3.5 h-3.5 text-accent" />
            <span>Arusha, Tanzania</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Link href="#" className="hover:text-accent transition-colors duration-500">
            TripAdvisor
          </Link>
          <span className="w-px h-3 bg-primary-foreground/30"></span>
          <Link href="#" className="hover:text-accent transition-colors duration-500">
            Instagram
          </Link>
          <span className="w-px h-3 bg-primary-foreground/30"></span>
          <Link href="#" className="hover:text-accent transition-colors duration-500">
            Facebook
          </Link>
        </div>
      </div>
    </div>
  );
}
