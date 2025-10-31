import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCalcOpen, setIsCalcOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-custom-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Logo.png"
              alt="Perfect Investment Hub Logo"
              className="w-14 h-14 object-contain rounded-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("smc-pi")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              SMC PI
            </button>

            {/* ✅ Calculators Dropdown (Fixed Hover) */}
            <div
              className="relative group"
            >
              <button className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                <Calculator className="w-4 h-4 mr-1" />
                Calculators
              </button>

              <div
                className="absolute left-0 mt-2 w-56 bg-card border border-border rounded-lg shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
              >
                {[
                  {
                    name: "SIP Calculator",
                    url: "https://dhan.co/calculators/sip-calculator/?gad_source=1&gad_campaignid=23043382290&gbraid=0AAAAAqs39t9D-Gm5xudMFwkG83m3K45Rm&gclid=Cj0KCQjwmYzIBhC6ARIsAHA3IkTp3JtlKq7AHM-5mtiazL4tPwsw_FqBkL3aLRSmAQWAYqzV-8hfVDkaAggFEALw_wcB",
                  },
                  { name: "EMI Calculator", url: "https://investor.sebi.gov.in/calc/emi.html" },
                  { name: "SWP Calculator", url: "https://www.sbimf.com/swp-calculator" },
                  { name: "CAGR Calculator", url: "https://cleartax.in/s/cagr-calculator" },
                  {
                    name: "Lumpsum Calculator",
                    url: "https://www.finology.in/Calculators/Invest/Lumpsum-Calculator.aspx",
                  },
                ].map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-muted-foreground hover:bg-accent hover:underline transition-all"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {[
                { name: "Home", id: "home" },
                { name: "About", id: "about" },
                { name: "Services", id: "services" },
                { name: "SMC PI", id: "smc-pi" },
                { name: "Testimonials", id: "testimonials" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left py-2"
                >
                  {item.name}
                </button>
              ))}

              {/* ✅ Mobile Calculators Dropdown */}
              <div className="border-t border-border pt-3">
                <div className="flex items-center text-muted-foreground mb-2">
                  <Calculator className="w-4 h-4 mr-1" />
                  Calculators
                </div>
                <div className="flex flex-col pl-5 space-y-2">
                  {[
                    {
                      name: "SIP Calculator",
                      url: "https://dhan.co/calculators/sip-calculator/?gad_source=1&gad_campaignid=23043382290&gbraid=0AAAAAqs39t9D-Gm5xudMFwkG83m3K45Rm&gclid=Cj0KCQjwmYzIBhC6ARIsAHA3IkTp3JtlKq7AHM-5mtiazL4tPwsw_FqBkL3aLRSmAQWAYqzV-8hfVDkaAggFEALw_wcB",
                    },
                    { name: "EMI Calculator", url: "https://investor.sebi.gov.in/calc/emi.html" },
                    { name: "SWP Calculator", url: "https://www.sbimf.com/swp-calculator" },
                    { name: "CAGR Calculator", url: "https://cleartax.in/s/cagr-calculator" },
                    {
                      name: "Lumpsum Calculator",
                      url: "https://www.finology.in/Calculators/Invest/Lumpsum-Calculator.aspx",
                    },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary hover:underline transition-all"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
