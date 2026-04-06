export function AccreditationBar() {
  const partners = [
    "SafariBookings", "SATSA", "TLTO", "TANAPA", "KIATO", "TTB", "KAYAK"
  ];

  return (
    <section className="py-12 bg-[#FAF3EB] border-t border-[#e6d8c8]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
          {partners.map((partner) => (
            <div 
              key={partner}
              className="font-heading text-xl md:text-2xl font-bold text-[#81491B] grayscale hover:grayscale-0 transition-all duration-500 cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
