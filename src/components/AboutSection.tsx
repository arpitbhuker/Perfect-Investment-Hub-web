import { Button } from "@/components/ui/button";
import { GraduationCap, TrendingUp, Target, CheckCircle } from "lucide-react";
import rajeshProfileImage from "@/assets/rajesh-profile.jpg";

const AboutSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const achievements = [
    "18+ years of market experience",
    "170+ satisfied clients and growing",
    "SMC Global authorized partner",
    "B.Com graduate with financial expertise",
    "Comprehensive investment services",
    "24/7 market tracking and support",
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout for image (left) and content (right) */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-10 items-center max-w-6xl mx-auto mb-16">
          {/* Left Column - Image & About Label */}
<div className="flex flex-col items-center lg:items-start -mt-1 lg:-mt-3">
  {/* About Label */}
  <div className="inline-flex items-center px-4 py-2 mb-4 bg-secondary/10 rounded-full border border-secondary/20">
    <Target className="w-4 h-4 text-secondary mr-2" />
    <span className="text-sm font-medium text-secondary">
      About Rajesh Bhuker
    </span>
  </div>

  {/* Profile Image */}
  <img
    src={rajeshProfileImage}
    alt="Rajesh Bhuker"
    className="w-88 h-88 md:w-[26rem] md:h-[26rem] object-cover rounded-2xl shadow-lg border border-border"
  />
</div>

          {/* Right Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                Your Trusted
                <span className="block bg-gradient-secondary bg-clip-text text-transparent">
                  Financial Partner
                </span>
              </h2>

              <div className="text-lg text-muted-foreground space-y-4">
                <p>
                  Meet Rajesh Bhuker, a seasoned stock market professional with
                  over 18+ years of hands-on experience in the world of finance
                  and investments. A proud alumnus of Jawahar Navodaya Vidyalaya,
                  Kaloi (Jhajjar) and a B.Com graduate, Rajesh has built a
                  reputation for his deep market insight, ethical investment
                  practices, and client-first approach.
                </p>

                <p>
                  As the founder of Perfect Investment Hub, he has guided 170+
                  investors across India toward smarter, more confident financial
                  decisions. His expertise spans equity trading, mutual funds,
                  IPOs, insurance, and portfolio management, making him a trusted
                  advisor for both beginners and seasoned investors alike.
                </p>

                <p>
                  Driven by the vision of promoting financial literacy and
                  disciplined investing, Rajesh continues to empower individuals
                  to build sustainable wealth and achieve financial independence
                  through informed market participation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Experience & Education */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          {/* Experience */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-secondary/10 rounded-lg">
              <TrendingUp className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Experience</h3>
              <p className="text-sm text-muted-foreground">
                18+ Years in Stock Markets
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                SMC Global — Authorized Partner
              </p>
            </div>
          </div>

          {/* Education */}
          <div className="flex items-start space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
              <GraduationCap className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Education</h3>
              <div className="mt-1">
                <p className="text-sm text-muted-foreground">
                  Bachelor of Commerce (B.Com)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements List */}
        <div className="space-y-3 max-w-4xl mx-auto mb-12">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
              <span className="text-muted-foreground">{achievement}</span>
            </div>
          ))}
        </div>

        {/* Mission & CTA */}
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="bg-gradient-accent p-6 rounded-lg border border-border">
            <h3 className="font-semibold text-foreground mb-2">Our Mission</h3>
            <p className="text-muted-foreground text-sm">
              "At Perfect Investment Hub, we believe in building long-term
              relationships with our clients through transparent, ethical, and
              profitable investment strategies. Our goal is to make wealth
              creation accessible to everyone with the right guidance and tools."
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="cta"
              size="lg"
              onClick={() => scrollToSection("contact")}
            >
              Start Your Investment Journey
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => scrollToSection("services")}
            >
              Explore Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
