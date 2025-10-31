import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  PieChart,
  DollarSign,
  Banknote,
  Globe,
  Building,
  FileText,
  Shield,
  Home
} from "lucide-react";

const ServicesSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    // 🏆 Investment & Wealth Management
    {
      icon: PieChart,
      title: "Portfolio Investment (SMC PI)",
      description:
        "Professional portfolio management with 1–3 year horizon, no lock-in, and 100% transparency.",
      features: [
        "₹5 Lacs minimum",
        "24x7 tracking",
        "Client confirmation before execution"
      ],
      highlighted: true,
      provider: "SMC Global",
      link: "https://www.smcindiaonline.com/portfolio-management/",
    },
    {
      icon: Building,
      title: "Mutual Funds & SIP",
      description:
        "Systematic and lump-sum investments in top-performing mutual funds to grow your wealth steadily.",
      features: ["SIP planning", "Goal-based investing", "Tax-saving ELSS options"],
      provider: "AMCs",
      link: "https://www.mutualfundssahihai.com/",
    },

    // 📈 Market Trading
    {
      icon: TrendingUp,
      title: "Equity Trading",
      description:
        "Buy and sell stocks with expert guidance and real-time market insights through SMC Global.",
      features: ["Intraday & Delivery trading", "Expert recommendations", "Dedicated support desk"],
      provider: "SMC Global",
      link: "https://www.smctradeonline.com/invest/equities",
    },
    {
      icon: Banknote,
      title: "Commodities Trading",
      description:
        "Trade in gold, silver, crude oil, and agricultural commodities with proper risk management.",
      features: ["MCX platform", "Market analysis", "Hedging solutions"],
      provider: "SMC Global",
      link: "https://www.smcindiaonline.com/commodity/",
    },
    {
      icon: Globe,
      title: "Currency Trading",
      description:
        "Forex trading in major currency pairs with professional research support.",
      features: ["USD/INR", "EUR/INR", "GBP/INR", "JPY/INR"],
      provider: "SMC Global",
      link: "https://www.smcindiaonline.com/currency/",
    },

    // 💰 Financing & Capital Market
    {
      icon: DollarSign,
      title: "IPO Financing & Applications",
      description:
        "Apply for IPOs and get financing assistance to increase your chances of allotment.",
      features: ["Financing facility", "Application support", "Allotment tracking"],
      provider: "SMC Global",
      link: "https://www.smcindiaonline.com/ipo",
    },
    {
      icon: FileText,
      title: "Demat & Trading Accounts",
      description:
        "Open your Demat and Trading account with SMC Global to start investing seamlessly.",
      features: ["Free account opening", "Easy online KYC", "Competitive brokerage"],
      provider: "SMC Global",
      link: "https://www.smctradeonline.com/open-demat-account",
    },

    // 🛡️ Insurance & Protection
    {
      icon: Shield,
      title: "LIC & Insurance Solutions",
      description:
        "Comprehensive life and health insurance solutions through LIC and other trusted insurers.",
      features: ["LIC Life Insurance", "Health Insurance", "General Insurance"],
      provider: "LIC",
      link: "https://licindia.in/",
    },

    // 🏠 Advisory Services
    {
      icon: Home,
      title: "Real Estate Advisory",
      description:
        "Expert guidance on property investments, documentation, and market trends.",
      features: ["Market research", "Investment advice", "Legal documentation support"],
      provider: "Independent",
      link: "https://qbcon.in/blog/real-estate-investment-without-buying-property",
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <TrendingUp className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Our Services</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Comprehensive
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Financial Services
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From portfolio management to real estate advisory, we offer a complete suite of
            financial services to help you achieve your investment goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-1 ${service.highlighted
                  ? "bg-gradient-primary border-primary/20 text-primary-foreground shadow-custom-md"
                  : "bg-card border-border hover:border-primary/20"
                }`}
            >
              {service.highlighted && (
                <div className="absolute -top-3 left-6 bg-secondary text-secondary-foreground px-3 py-1 rounded-full text-xs font-medium">
                  Featured Service
                </div>
              )}

              <div
                className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${service.highlighted ? "bg-primary-foreground/10" : "bg-primary/10"
                  }`}
              >
                <service.icon
                  className={`w-6 h-6 ${service.highlighted ? "text-primary-foreground" : "text-primary"
                    }`}
                />
              </div>

              <h3
                className={`text-xl font-semibold mb-3 ${service.highlighted ? "text-primary-foreground" : "text-foreground"
                  }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm mb-4 ${service.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
              >
                {service.description}
              </p>

              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-center ${service.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                      }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mr-2 ${service.highlighted
                          ? "bg-primary-foreground/50"
                          : "bg-primary"
                        }`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex gap-2">
                <Button
                  variant={service.highlighted ? "secondary" : "default"}
                  size="sm"
                  className="w-full py-2.5 text-base"
                  onClick={() => window.open(service.link, "_blank", "noopener,noreferrer")}
                >
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start Your Investment Journey?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get personalized investment advice and access to all our services.
              Book a free consultation with Rajesh Bhuker today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
