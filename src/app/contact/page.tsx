"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  travelDates: z.string().optional(),
  travelers: z.string().min(1, "Please specify number of travelers"),
  destination: z.string().min(1, "Please select an interest"),
  message: z.string().min(10, "Please provide some details about your perfect trip"),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    // Simulate API Call or Server Action
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Form data submitted:", data);
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <div className="bg-[#FAF3EB] min-h-screen text-[#2E1A0E] pt-20">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        
        <div className="text-center mb-16">
          <span className="text-[#C4783A] uppercase tracking-[0.2em] text-sm font-semibold block mb-4">
            Get in touch
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-medium text-[#1C0F06] mb-6">
            Plan Your Journey
          </h1>
          <p className="text-[#4A2910] text-lg font-light max-w-2xl mx-auto">
            Ready to experience the magic of East Africa? Share your travel dreams with us, and our local experts will craft the perfect itinerary for you.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3 space-y-12">
            <div>
              <h3 className="font-heading text-2xl font-medium text-[#1C0F06] mb-6">Arusha Office</h3>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8F2] border border-[#e6d8c8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#C4783A]" />
                  </div>
                  <div>
                    <span className="block text-sm uppercase tracking-widest text-[#7A5A42] font-semibold mb-1">Address</span>
                    <span className="text-[#4A2910]">Moshono Road, Arusha<br/>Tanzania</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8F2] border border-[#e6d8c8] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#C4783A]" />
                  </div>
                  <div>
                    <span className="block text-sm uppercase tracking-widest text-[#7A5A42] font-semibold mb-1">Phone</span>
                    <span className="text-[#4A2910]">+255 754 294 365</span>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-full bg-[#FFF8F2] border border-[#e6d8c8] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#C4783A]" />
                  </div>
                  <div>
                    <span className="block text-sm uppercase tracking-widest text-[#7A5A42] font-semibold mb-1">Email</span>
                    <span className="text-[#4A2910]">enquiries@tanzaniatravel.co.tz</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="p-8 bg-[#1C0F06] text-[#FFF8F2]">
              <h4 className="font-heading text-xl font-medium mb-4">Why book directly?</h4>
              <p className="text-sm text-[#FAF3EB]/80 font-light leading-relaxed mb-6">
                Booking directly with Tanzania Travel Company means bypassing international agents. 100% of your investment supports local guides, conservation, and communities.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="w-full lg:w-2/3 bg-[#FFF8F2] p-8 md:p-12 border border-[#e6d8c8] shadow-sm relative">
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                className="absolute inset-0 bg-[#FFF8F2] flex flex-col items-center justify-center text-center p-8 z-10"
              >
                <div className="w-20 h-20 bg-[#81491B]/10 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-8 h-8 text-[#81491B] ml-1" />
                </div>
                <h3 className="font-heading text-3xl font-medium text-[#1C0F06] mb-4">Enquiry Sent Successfully</h3>
                <p className="text-[#4A2910] mb-8 max-w-md mx-auto">
                  Thank you for reaching out. One of our local safari experts will review your details and get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="bg-transparent border border-[#81491B] text-[#81491B] hover:bg-[#81491B] hover:text-[#FFF8F2] px-8 py-4 uppercase tracking-widest text-xs font-semibold transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : null}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Full Name *</label>
                  <input 
                    {...register("name")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="text-red-600 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Email Address *</label>
                  <input 
                    {...register("email")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="text-red-600 text-xs mt-1">{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Phone (Optional)</label>
                  <input 
                    {...register("phone")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Travel Dates</label>
                  <input 
                    {...register("travelDates")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                    placeholder="e.g. August 2026"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Number of Travelers *</label>
                  <select 
                    {...register("travelers")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                  >
                    <option value="">Select...</option>
                    <option value="1">1 Person (Solo)</option>
                    <option value="2">2 People (Couple)</option>
                    <option value="3-4">3-4 People</option>
                    <option value="5+">5+ People (Group)</option>
                  </select>
                  {errors.travelers && <p className="text-red-600 text-xs mt-1">{errors.travelers.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Primary Interest *</label>
                  <select 
                    {...register("destination")}
                    className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06]"
                  >
                    <option value="">Select...</option>
                    <option value="wildlife">Wildlife Safari</option>
                    <option value="kilimanjaro">Kilimanjaro Climb</option>
                    <option value="zanzibar">Zanzibar Beach</option>
                    <option value="custom">Custom Itinerary</option>
                  </select>
                  {errors.destination && <p className="text-red-600 text-xs mt-1">{errors.destination.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#7A5A42] font-semibold">Tell us about your trip *</label>
                <textarea 
                  {...register("message")}
                  rows={5}
                  className="w-full bg-[#FAF3EB] border border-[#e6d8c8] p-4 text-sm focus:outline-none focus:border-[#C4783A] text-[#1C0F06] resize-none"
                  placeholder="What are your must-sees? Preferred accommodation style? Any special occasions?"
                ></textarea>
                {errors.message && <p className="text-red-600 text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-[#81491B] hover:bg-[#C4783A] text-[#FFF8F2] py-5 uppercase tracking-widest text-sm transition-colors duration-500 font-medium disabled:opacity-70 flex justify-center items-center gap-3 mt-4"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-[#FFF8F2] border-t-transparent rounded-full animate-spin"></span>
                ) : (
                  <>Submit Enquiry <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
