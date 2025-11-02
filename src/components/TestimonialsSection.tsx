import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Amit Kumar",
      location: "Rohtak",
      text: "I’ve been investing through Perfect Investment Hub for a few years now. Clear guidance and timely communication make it easy to stay confident with every decision. The portfolio has shown consistent growth over time.",
      investment: "₹12 Lacs Portfolio",
    },
    {
      name: "Vikash Yadav",
      location: "Tosham",
      text: "Trading has become more structured since I started following Rajesh’s advice. The SMC platform works seamlessly, and his market updates really help in managing short-term positions.",
      investment: "Active Trader",
    },
    {
      name: "Rakesh Goel",
      location: "Loharu",
      text: "Been associated for over 5 years now. The experience has been smooth and transparent — from account setup to regular reviews, everything is handled personally and efficiently.",
      investment: "₹15 Lacs Portfolio",
    },
    {
      name: "Sunita Mehta",
      location: "Bhiwani",
      text: "I began SIPs about two years ago and I’m quite happy with the results. The explanations are always simple, and I get regular updates without having to follow up.",
      investment: "₹20,000 Monthly SIP",
    },
    {
      name: "Deepak Sharma",
      location: "Charkhi Dadri",
      text: "What I appreciate most is the honest approach — no over-promises, just practical advice that fits your goals. The consistency in communication builds real trust.",
      investment: "₹10 Lacs Portfolio",
    },
    {
      name: "Anil Verma",
      location: "Mahendragarh",
      text: "Working together for nearly three years now. The portfolio is reviewed regularly, and Rajesh always explains market changes in a straightforward way that’s easy to understand.",
      investment: "₹9 Lacs Portfolio",
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-success/10 rounded-full border border-success/20">
            <Star className="w-4 h-4 text-success mr-2" />
            <span className="text-sm font-medium text-success">Client Testimonials</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            What Our
            <span className="block bg-gradient-secondary bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Hear from our 170+ satisfied clients who have 
            achieved their financial goals with Perfect Investment Hub.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-secondary mb-2">5.0</div>
            <div className="text-sm text-muted-foreground">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-success mb-2">18+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">₹50Cr+</div>
            <div className="text-sm text-muted-foreground">Assets Managed</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group p-6 bg-card rounded-2xl border border-border hover:shadow-custom-lg transition-all duration-300 hover:-translate-y-1">
              {/* Quote Icon */}
              <div className="flex justify-between items-start mb-4">
                <Quote className="w-8 h-8 text-primary/20" />
              </div>
              
              {/* Testimonial Text */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Client Info */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-end">
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-medium text-primary">{testimonial.investment}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-accent p-8 rounded-2xl border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Join Our Growing Family of Successful Investors
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Experience the same level of service and success that our clients rave about. 
              Start your investment journey with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-gradient-hero text-primary-foreground px-8 py-3 rounded-lg font-semibold shadow-custom-lg hover:shadow-custom-glow transform hover:scale-105 transition-all duration-300"
              >
                Become Our Next Success Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;