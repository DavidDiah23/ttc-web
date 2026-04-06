import { Check, X } from "lucide-react";

export function IncludesExcludes({ included, excluded }: { included: string[], excluded: string[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-[#81491B]/10 flex items-center justify-center">
            <Check className="w-4 h-4 text-[#81491B]" strokeWidth={3} />
          </div>
          What's Included
        </h3>
        <ul className="space-y-4">
          {included.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <Check className="w-5 h-5 text-[#81491B] mt-0.5 flex-shrink-0" />
              <span className="text-[#4A2910]">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-6 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-red-900/10 flex items-center justify-center">
            <X className="w-4 h-4 text-red-700" strokeWidth={3} />
          </div>
          What's Excluded
        </h3>
        <ul className="space-y-4">
          {excluded.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <X className="w-5 h-5 text-red-700/80 mt-0.5 flex-shrink-0" />
              <span className="text-[#7A5A42]">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
