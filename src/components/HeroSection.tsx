import { Button } from "@/components/ui/button";
import { TrendingUp, Star, Users, Award } from "lucide-react";
import officeExteriorImage from "@/assets/office-exterior.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-radial overflow-hidden pt-28 sm:pt-32 lg:pt-0"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-secondary/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Headline */}
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-6xl sm:text-7xl font-bold text-foreground leading-tight text-left">
                  Perfect <br /> Investment Hub
                </h1>

                <p className="text-xl md:text-2xl bg-gradient-primary bg-clip-text text-transparent font-medium">
                  Moneywise. Be Wise.
                </p>
              </div>

              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Your trusted financial partner for wealth creation through expert
                <span className="font-semibold text-foreground">
                  {" "}
                  stock market guidance{" "}
                </span>
                and comprehensive investment solutions.
              </p>
            </div>

            {/* === Right Content for Mobile/Tablet (Above Stats & CTA) === */}
            <div className="block lg:hidden">
              <div className="relative flex flex-col items-center mt-4">
                <div className="relative rounded-2xl overflow-hidden shadow-custom-lg w-full max-w-sm mx-auto">
                  <img
                    src={officeExteriorImage}
                    alt="Perfect Investment Hub Office - SMC Global Partner in Charkhi Dadri"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

                  <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3">
                    <p className="text-xs text-muted-foreground text-center">
                      Near SBI Bank, Loharu Road, Charkhi Dadri
                    </p>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="mt-2 w-full max-w-sm rounded-xl overflow-hidden shadow-custom-md">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.164486674846!2d76.25940837461587!3d28.59484187568532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128f2fc0ec7687%3A0xdad5e94903bc6eaa!2sPERFECT%20INVESTMENT%20HUB!5e0!3m2!1sen!2sin!4v1761893017241!5m2!1sen!2sin"
                    width="100%"
                    height="110"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Perfect Investment Hub Location Map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 justify-center text-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  18+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  170+
                </div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  5★
                </div>
                <div className="text-sm text-muted-foreground">SMC Partner</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6"
              >
                Open Demat Account
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="text-lg px-8 py-6"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>

          {/* === Right Content - For Desktop Only === */}
          <div className="relative flex-col items-center hidden lg:flex">
            <div className="relative rounded-2xl overflow-hidden shadow-custom-lg max-w-sm mx-auto">
              <img
                src={officeExteriorImage}
                alt="Perfect Investment Hub Office - SMC Global Partner in Charkhi Dadri"
                className="w-full h-80 md:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>

              <div className="absolute bottom-4 left-4 right-4 bg-card/95 backdrop-blur-sm border border-border rounded-lg p-3">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground">
                    Near SBI Bank, Loharu Road, Charkhi Dadri
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-2 w-full max-w-sm rounded-xl overflow-hidden shadow-custom-md translate-y-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.164486674846!2d76.25940837461587!3d28.59484187568532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128f2fc0ec7687%3A0xdad5e94903bc6eaa!2sPERFECT%20INVESTMENT%20HUB!5e0!3m2!1sen!2sin!4v1761893017241!5m2!1sen!2sin"
                width="100%"
                height="110"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Perfect Investment Hub Location Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
