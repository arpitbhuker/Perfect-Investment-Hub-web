import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Priya Sharma",
      location: "Charkhi Dadri",
      rating: 5,
      text: "Rajesh sir has been managing my investments for over 3 years. His honest advice and market insights have helped me achieve my financial goals. The SMC PI portfolio has given consistent returns.",
      investment: "₹8 Lacs Portfolio"
    },
    {
      name: "Amit Kumar",
      location: "Rohtak",
      rating: 5,
      text: "Perfect Investment Hub lives up to its name. The transparency in all dealings and regular updates make me confident about my investments. Highly recommend for long-term wealth creation.",
      investment: "₹12 Lacs Portfolio"
    },
    {
      name: "Sunita Devi",
      location: "Bhiwani",
      rating: 5,
      text: "As a first-time investor, I was nervous about the stock market. Rajesh ji explained everything clearly and guided me step by step. My SIP investments are performing excellently.",
      investment: "₹25,000 Monthly SIP"
    },
    {
      name: "Vikash Yadav",
      location: "Tosham",
      rating: 5,
      text: "The SMC trading platform recommended by Rajesh sir is excellent. Fast execution, good brokerage rates, and his expert guidance have made my trading journey profitable.",
      investment: "Active Trader"
    },
    {
      name: "Rakesh Goel",
      location: "Loharu",
      rating: 5,
      text: "I've been a client for 5+ years. The demat account opening was hassle-free, and the ongoing support is exceptional. Regular portfolio reviews help me stay on track.",
      investment: "₹15 Lacs Portfolio"
    },
    {
      name: "Meera Jain",
      location: "Narnaul",
      rating: 5,
      text: "The insurance and mutual fund advice provided by Perfect Investment Hub is comprehensive. They helped me plan for my daughter's education and our retirement goals.",
      investment: "Multi-goal Planner"
    }
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
            <div className="text-3xl font-bold text-primary mb-2">170+</div>
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