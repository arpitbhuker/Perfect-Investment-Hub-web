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
  Home,
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
      details:
        "Our team designs and actively manages your portfolio to align with your risk profile and goals. You retain complete control — trades are executed only after your confirmation, ensuring absolute clarity and trust.",
      features: [
        "₹5 Lacs minimum",
        "24x7 tracking",
        "Client confirmation before execution",
      ],
      highlighted: true,
      provider: "SMC Global",
    },
    {
      icon: Building,
      title: "Mutual Funds & SIP",
      description:
        "Systematic and lump-sum investments in top-performing mutual funds to grow your wealth steadily.",
      details:
        "We help you choose mutual funds tailored to your goals — be it wealth creation, retirement, or children’s education — and set up SIPs that make disciplined investing effortless and effective.",
      features: ["SIP planning", "Goal-based investing", "Tax-saving ELSS options"],
      provider: "AMCs",
    },

    // 📈 Market Trading
    {
      icon: TrendingUp,
      title: "Equity Trading",
      description:
        "Buy and sell stocks with expert guidance and real-time market insights through SMC Global.",
      details:
        "From opening a trading account to providing actionable stock recommendations, our equity desk helps you make informed decisions using market trends, research, and technical analysis.",
      features: [
        "Intraday & Delivery trading",
        "Expert recommendations",
        "Dedicated support desk",
      ],
      provider: "SMC Global",
    },
    {
      icon: Banknote,
      title: "Commodities Trading",
      description:
        "Trade in gold, silver, crude oil, and agricultural commodities with proper risk management.",
      details:
        "Diversify your investment through commodities while managing exposure using hedging strategies. We provide you with the latest market trends and advisory to minimize risks and maximize returns.",
      features: ["MCX platform", "Market analysis", "Hedging solutions"],
      provider: "SMC Global",
    },
    {
      icon: Globe,
      title: "Currency Trading",
      description:
        "Forex trading in major currency pairs with professional research support.",
      details:
        "Ideal for investors looking to benefit from currency movements. Get access to expert guidance, technical charts, and real-time updates to help you navigate the global forex market confidently.",
      features: ["USD/INR", "EUR/INR", "GBP/INR", "JPY/INR"],
      provider: "SMC Global",
    },

    // 💰 Financing & Capital Market
    {
      icon: DollarSign,
      title: "IPO Financing & Applications",
      description:
        "Apply for IPOs and get financing assistance to increase your chances of allotment.",
      details:
        "Gain early access to promising IPOs with financial assistance options, expert recommendations, and hassle-free application support — helping you participate confidently in new market opportunities.",
      features: ["Financing facility", "Application support", "Allotment tracking"],
      provider: "SMC Global",
    },
    {
      icon: FileText,
      title: "Demat & Trading Accounts",
      description:
        "Open your Demat and Trading account with SMC Global to start investing seamlessly.",
      details:
        "Experience seamless account opening, quick e-KYC, and a user-friendly trading platform. Enjoy competitive brokerage, transparency, and secure transactions — all in one place.",
      features: [
        "Free account opening",
        "Easy online KYC",
        "Competitive brokerage",
      ],
      provider: "SMC Global",
    },

    // 🛡️ Insurance & Protection
    {
      icon: Shield,
      title: "LIC & Insurance Solutions",
      description:
        "Comprehensive life and health insurance solutions through LIC and other trusted insurers.",
      details:
        "Protect your family and assets with tailored insurance plans. From life cover to health and general insurance, we ensure your financial security and peace of mind.",
      features: ["LIC Life Insurance", "Health Insurance", "General Insurance"],
      provider: "LIC",
    },

    // 🏠 Advisory Services
    {
      icon: Home,
      title: "Real Estate Advisory",
      description:
        "Expert guidance on property investments, documentation, and market trends.",
      details:
        "Whether you're buying, selling, or just exploring real estate options, we provide research-based insights, property valuations, and documentation support for a smooth and profitable experience.",
      features: [
        "Market research",
        "Investment advice",
        "Legal documentation support",
      ],
      provider: "Independent",
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
              className={`relative group p-6 rounded-2xl border transition-all duration-300 hover:shadow-custom-lg hover:-translate-y-1 ${
                service.highlighted
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
                className={`flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  service.highlighted ? "bg-primary-foreground/10" : "bg-primary/10"
                }`}
              >
                <service.icon
                  className={`w-6 h-6 ${
                    service.highlighted
                      ? "text-primary-foreground"
                      : "text-primary"
                  }`}
                />
              </div>

              <h3
                className={`text-xl font-semibold mb-3 ${
                  service.highlighted
                    ? "text-primary-foreground"
                    : "text-foreground"
                }`}
              >
                {service.title}
              </h3>

              <p
                className={`text-sm mb-3 ${
                  service.highlighted
                    ? "text-primary-foreground/80"
                    : "text-muted-foreground"
                }`}
              >
                {service.description}
              </p>

              <p
                className={`text-sm mb-4 ${
                  service.highlighted
                    ? "text-primary-foreground/75"
                    : "text-muted-foreground"
                }`}
              >
                {service.details}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className={`text-xs flex items-center ${
                      service.highlighted
                        ? "text-primary-foreground/70"
                        : "text-muted-foreground"
                    }`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        service.highlighted
                          ? "bg-primary-foreground/50"
                          : "bg-primary"
                      }`}
                    ></div>
                    {feature}
                  </li>
                ))}
              </ul>
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
