import { Button } from "@/components/ui/button";
import { Building2, Award, MapPin, Users, ExternalLink  } from "lucide-react";

const CompanyOverviewSection = () => {
  const features = [
    {
      icon: Building2,
      title: "Established Legacy",
      description: "Founded in 1990 by Subhash C. Aggarwal and Mahesh C. Gupta"
    },
    {
      icon: MapPin,
      title: "Wide Reach",
      description: "Operating in 450+ cities across India with comprehensive coverage"
    },
    {
      icon: Users,
      title: "Diverse Clientele",
      description: "Serving corporate, institutional, HNI, and retail clients"
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for strong digital infrastructure and services"
    }
  ];

  const services = [
    "Equities & Derivatives Trading",
    "Commodities & Currency",
    "Investment Banking",
    "Wealth Management", 
    "Insurance Broking",
    "Portfolio Management Services"
  ];

  return (
    <section id="company-overview" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full border border-secondary/20">
            <Building2 className="w-4 h-4 text-secondary mr-2" />
            <span className="text-sm font-medium text-secondary">SMC Global Securities</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Our Partner
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              SMC Global
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Perfect Investment Hub is proudly associated with SMC Global Securities Ltd., 
            a leading financial services company with over 30 years of market excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-foreground">About SMC Global</h3>
              <p className="text-muted-foreground leading-relaxed">
                SMC Global Securities Ltd. has been a pioneer in the Indian financial markets since 1990. 
                Founded by visionary leaders Subhash C. Aggarwal and Mahesh C. Gupta, the company has 
                grown to become one of India's most trusted financial services providers.
              </p>
            </div>

            {/* Services List */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Complete Financial Solutions</h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3"></div>
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Partnership Badge */}
            <div className="bg-gradient-primary p-6 rounded-lg text-primary-foreground">
              <h4 className="font-semibold mb-2">Authorized Partner</h4>
              <p className="text-primary-foreground/80 text-sm">
                Perfect Investment Hub is an authorized partner of SMC Global, bringing you 
                the same world-class services and digital infrastructure with personalized 
                local support in Charkhi Dadri.
              </p>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-card rounded-2xl border border-border hover:shadow-custom-md transition-all hover:-translate-y-1">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-accent p-8 rounded-2xl border border-border">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-sm text-muted-foreground">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">450+</div>
              <div className="text-sm text-muted-foreground">Cities Covered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-sm text-muted-foreground">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Market Support</div>
            </div>
          </div>
         {/* Visit Website Button */}
          <div className="text-center">
            <Button
              variant="hero"
              size="lg"
              className="inline-flex items-center gap-2 px-8 py-6 mt-4"
              onClick={() =>
                window.open("https://www.smctradeonline.com", "_blank", "noopener,noreferrer")
              }
            >
              Visit SMC Global Website
              <ExternalLink className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverviewSection;