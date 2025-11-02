import { Button } from "@/components/ui/button";
import {
  Shield,
  Clock,
  Eye,
  CheckCircle,
  BarChart3,
  IndianRupee,
  TrendingUp,
  Users
} from "lucide-react";

const SmcPiSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const features = [
    {
      icon: Clock,
      title: "1-3 Year Horizon",
      description: "Medium-term investment strategy designed for optimal returns",
    },
    {
      icon: Shield,
      title: "No Lock-in Period",
      description: "Complete flexibility to exit your investment anytime",
    },
    {
      icon: Eye,
      title: "100% Transparency",
      description: "Full visibility into your portfolio and investment decisions",
    },
    {
      icon: CheckCircle,
      title: "Client Confirmation",
      description: "No trades executed without your explicit confirmation",
    },
    {
      icon: BarChart3,
      title: "24x7 Tracking",
      description: "Real-time portfolio monitoring and performance updates",
    },
    {
      icon: IndianRupee,
      title: "₹5 Lacs Minimum",
      description: "Accessible entry point for serious investors",
    },
  ];

  const benefits = [
    "Professional portfolio management by experienced fund managers",
    "Diversified investment across multiple sectors and market caps",
    "Regular portfolio rebalancing based on market conditions",
    "Detailed performance reports and investment insights",
    "Direct communication with portfolio management team",
    "Tax-efficient investment strategies"
  ];

  return (
    <section id="smc-pi" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <TrendingUp className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">SMC Portfolio Investment</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            SMC PI
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Professional Portfolio Management
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience professional portfolio management with SMC PI - a comprehensive investment
            solution designed to maximize your returns while maintaining complete transparency and control.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Features */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors">
                  <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg flex-shrink-0">
                    <feature.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Why Choose SMC PI?</h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Highlight Card */}
          <div className="space-y-6">
            {/* Main Feature Card */}
            <div className="bg-gradient-secondary p-8 rounded-2xl text-secondary-foreground shadow-custom-lg">
              <div className="text-center space-y-6">
                <div className="w-16 h-16 bg-secondary-foreground/10 rounded-2xl flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-secondary-foreground" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold mb-2">Start Your SMC PI Journey</h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    Join hundreds of investors who trust SMC PI for their wealth creation goals.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">₹5L</div>
                    <div className="text-xs text-secondary-foreground/70">Minimum Investment</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">1-3Y</div>
                    <div className="text-xs text-secondary-foreground/70">Investment Horizon</div>
                  </div>
                </div>

                {/* Replaced Button with extra explanation */}
                <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                  With SMC PI, you gain a professionally managed portfolio tailored to your goals. 
                  Every investment decision is guided by expert research and executed only with your consent, 
                  ensuring your funds are always aligned with your comfort and expectations.
                </p>
              </div>
            </div>

            {/* Process Steps */}
            <div className="bg-card p-6 rounded-lg border border-border space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Simple 3-Step Process</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">1</div>
                  <span className="text-sm text-muted-foreground">Schedule a consultation call</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">2</div>
                  <span className="text-sm text-muted-foreground">Complete your investment profile</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xs font-bold">3</div>
                  <span className="text-sm text-muted-foreground">Start your managed portfolio</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Experience Professional Portfolio Management?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let our experts handle your investments while you focus on your business and life.
              SMC PI provides personalized management, transparency, and consistency — everything 
              you need for long-term financial growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="hero"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Schedule SMC PI Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmcPiSection;
