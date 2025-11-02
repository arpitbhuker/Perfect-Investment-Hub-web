import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  MapPin,
  Phone,
  Smartphone,
  Mail,
  Facebook,
  MessageCircle,
  TrendingUp,
  ChevronUp,
} from "lucide-react";

const Footer = () => {
  const { toast } = useToast();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="/Logo.png"
                  alt="Perfect Investment Hub Logo"
                  className="w-10 h-10 object-contain rounded-lg"
                />
              </div>
              <span className="font-bold text-lg">Perfect Investment Hub</span>
            </div>

            <p className="text-primary-foreground/80 text-sm">
              Your trusted partner in wealth creation with over 18+ years of
              market experience. Serving 500+ clients with transparent and
              profitable investment solutions.
            </p>

            <div className="flex space-x-4">
              {/* Facebook */}
              <button
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/profile.php?id=100084687213016",
                    "_blank"
                  )
                }
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </button>

              {/* WhatsApp Channel */}
              <button
                onClick={() =>
                  window.open(
                    "https://whatsapp.com/channel/0029Va92wPT7IUYX51z02Z2w",
                    "_blank"
                  )
                }
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                title="Join our WhatsApp Channel"
              >
                <MessageCircle className="w-5 h-5" />
              </button>

              {/* Mobile Call */}
              <button
                onClick={() => (window.location.href = "tel:+919354555150")}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                title="Call Mobile: +91 9354555150"
              >
                <Smartphone className="w-5 h-5" />
              </button>

              {/* Office Landline */}
              <button
                onClick={() => (window.location.href = "tel:+9101250462295")}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                title="Office Landline: +91 1250-462295"
              >
                <Phone className="w-5 h-5" />
              </button>

              {/* Email */}
              <button
                onClick={() =>
                  (window.location.href = "mailto:arprajesh@gmail.com")
                }
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
                title="Email Us"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Our Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("smc-pi")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  SMC PI Portfolio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Our Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-primary-foreground/80">
                SMC PI Portfolio Investment
              </li>
              <li className="text-primary-foreground/80">
                Mutual Funds & SIP Planning
              </li>
              <li className="text-primary-foreground/80">
                Equity & Commodity Trading
              </li>
              <li className="text-primary-foreground/80">
                Currency (Forex) Trading
              </li>
              <li className="text-primary-foreground/80">
                Demat Account Opening
              </li>
              <li className="text-primary-foreground/80">
                IPO Financing & Application Support
              </li>
              <li className="text-primary-foreground/80">
                LIC & Insurance Solutions
              </li>
              <li className="text-primary-foreground/80">
                Real Estate Investment Advisory
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contact Info</h4>
            <div className="space-y-3 text-sm">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-primary-foreground/80">
                    Near SBI Bank, Loharu Road
                    <br />
                    Charkhi Dadri, Haryana, India
                  </p>
                </div>
              </div>

              {/* Mobile */}
              <div className="flex items-center space-x-3">
                <Smartphone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="tel:+919354555150"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 9354555150
                </a>
              </div>

              {/* Telephone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="tel:+9101250462295"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +91 01250-462295
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a
                  href="mailto:arprajesh@gmail.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  arprajesh@gmail.com
                </a>
              </div>

              {/* SMC Global Partner */}
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-4 h-4 text-secondary flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  SMC Global Partner
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <div className="mt-12 text-sm text-primary-foreground/70 border-t border-primary-foreground/10 pt-4 leading-relaxed">
          <strong>Disclaimer:</strong> All investments are subject to market
          risks. Past performance is not indicative of future results. Perfect
          Investment Hub and its associates do not guarantee returns. Please
          consult before making investment decisions.
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Perfect Investment Hub. All rights
              reserved.
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-xs text-primary-foreground/60">
                Moneywise. Be Wise.
              </span>
              <button
                onClick={scrollToTop}
                className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-foreground/20 transition-colors"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
