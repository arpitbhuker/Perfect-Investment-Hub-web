import { Button } from "@/components/ui/button";
import { Smartphone, Zap, Feather, PiggyBank, Download, Star } from "lucide-react";

const SmcAppsSection = () => {
  const apps = [
    {
      icon: Zap,
      name: "SMC Ace",
      description: "Professional trading platform with advanced charting and analysis tools",
      features: [
        "Advanced charting with 100+ indicators",
        "Real-time market data and quotes",
        "Option chain analysis",
        "Basket orders and algo trading"
      ],
      color: "primary",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.smc.ace",
        ios: "https://apps.apple.com/us/app/smc-ace/id6451310604"
      }
    },
    {
      icon: Smartphone,
      name: "EasyTrade",
      description: "Simple and intuitive trading app for everyday investors",
      features: [
        "One-click trading interface",
        "Portfolio tracking",
        "Market news and updates",
        "Quick order placement"
      ],
      color: "secondary",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.wave.smc",
        ios: "https://apps.apple.com/us/app/smceasytrade/id1239735693"
      }
    },
    {
      icon: Feather,
      name: "SMC Lite",
      description: "Lightweight trading solution for basic investment needs",
      features: [
        "Minimal data usage",
        "Fast execution",
        "Essential market tools",
        "Simplified interface"
      ],
      color: "success",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.smctradeonline.xts",
        ios: "https://apps.apple.com/us/app/smc-ace/id6451310604" // optional placeholder
      }
    },
    {
      icon: PiggyBank,
      name: "EasyInvest",
      description: "Smart investment platform for mutual funds and SIPs",
      features: [
        "Goal-based investing",
        "SIP automation",
        "Fund recommendations",
        "Portfolio diversification"
      ],
      color: "primary",
      links: {
        android: "https://play.google.com/store/apps/details?id=com.smc.easyinvest",
        ios: "https://apps.apple.com/by/app/smc-easyinvest-mutual-funds/id6737273400"
      }
    }
  ];

  return (
    <section id="smc-apps" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Smartphone className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">SMC Mobile Apps</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trade & Invest
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              On The Go
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access powerful trading and investment tools through SMC Global's suite of mobile applications.
            Trade anywhere, anytime with professional-grade features in your pocket.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {apps.map((app, index) => (
            <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-start space-x-4 mb-6">
                <div className={`flex items-center justify-center w-12 h-12 rounded-xl ${app.color === 'primary' ? 'bg-primary/10' :
                  app.color === 'secondary' ? 'bg-secondary/10' : 'bg-success/10'
                  }`}>
                  <app.icon className={`w-6 h-6 ${app.color === 'primary' ? 'text-primary' :
                    app.color === 'secondary' ? 'text-secondary' : 'text-success'
                    }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{app.name}</h3>
                  <p className="text-sm text-muted-foreground">{app.description}</p>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {app.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <div className={`w-1.5 h-1.5 rounded-full mr-3 ${app.color === 'primary' ? 'bg-primary' :
                      app.color === 'secondary' ? 'bg-secondary' : 'bg-success'
                      }`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full lg:w-auto"
                  onClick={() => window.open(app.links.android, "_blank", "noopener,noreferrer")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download for Android
                </Button>

                <Button
                  variant="outline"
                  size="sm"
                  className="w-full lg:w-auto"
                  onClick={() => window.open(app.links.ios, "_blank", "noopener,noreferrer")}
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download for iOS
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <div className="bg-gradient-primary p-8 rounded-2xl text-primary-foreground text-center">
          <h3 className="text-2xl font-bold mb-4">Download SMC Apps Today</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join millions of investors who trust SMC Global's mobile trading platforms.
            Get started with your preferred app and start trading within minutes.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center space-x-4">
              {/* Google Play Button */}
              <a
                href="https://play.google.com/store/games?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Download on Google Play"
                  className="h-12"
                />
              </a>

              {/* Apple App Store Button */}
              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-12"
                />
              </a>
            </div>

            <div className="text-sm text-primary-foreground/70">
              Available on <span className="font-semibold">iOS</span> & <span className="font-semibold">Android</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmcAppsSection;