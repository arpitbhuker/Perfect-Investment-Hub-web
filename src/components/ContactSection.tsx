import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Facebook,
  Send,
  Smartphone,
  CheckCircle,
} from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input updates
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submit (send via EmailJS)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_vg21gfj"; // <-- replace
    const TEMPLATE_ID = "template_bhb4no5"; // <-- replace
    const PUBLIC_KEY = "HcZRS-qvEytKJWJQQ"; // <-- replace

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
    };

    try {
      const response = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      if (response.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description:
            "Thank you for your interest. Rajesh will contact you within 24 hours.",
        });

        // Clear form
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        toast({
          title: "Message Sending Failed",
          description: "Something went wrong. Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Message Sending Failed",
        description:
          "Please check your internet connection or try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <MessageCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">
              Get In Touch
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Start Your
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Investment Journey
            </span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take control of your financial future? Contact Perfect
            Investment Hub today for personalized investment advice and
            comprehensive financial services.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:items-stretch items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-8 h-full flex flex-col justify-between">
            {/* Contact Info */}
            <div className="space-y-6 flex-grow">
              {/* Phone */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Call Us
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                    <a
                      href="tel:+919354555150"
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      +91 9354555150
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">
                      |
                    </span>
                    <a
                      href="tel:+9101250462295"
                      className="text-primary hover:text-primary-light transition-colors"
                    >
                      +91 01250-462295
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Mon–Fri, 9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

              {/* Office with Map */}
              <div className="flex flex-col sm:flex-row items-start sm:items-stretch sm:justify-between p-6 bg-card rounded-lg border border-border gap-6">
                {/* Left: Text Content */}
                <div className="flex items-start space-x-4 sm:w-1/2">
                  <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-lg flex-shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Visit Our Office
                    </h3>
                    <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                      Perfect Investment Hub
                      <br />
                      Near SBI Bank, Loharu Road
                      <br />
                      Charkhi Dadri, Haryana, India
                    </p>
                  </div>
                </div>

                {/* Right: Google Map */}
                <div className="w-full sm:w-[300px] flex flex-col">
                  <h4 className="font-medium text-sm text-foreground mb-2 text-center sm:text-left">
                    📍 Perfect Investment Hub Location
                  </h4>
                  <div className="h-[200px] rounded-xl overflow-hidden shadow-md">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.164486674846!2d76.25940837461587!3d28.59484187568532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39128f2fc0ec7687%3A0xdad5e94903bc6eaa!2sPERFECT%20INVESTMENT%20HUB!5e0!3m2!1sen!2sin!4v1761893017241!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start space-x-4 p-6 bg-card rounded-lg border border-border">
                <div className="flex items-center justify-center w-12 h-12 bg-success/10 rounded-lg">
                  <Clock className="w-6 h-6 text-success" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">
                    Business Hours
                  </h3>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9:00 AM - 6:00 PM
                    <br />
                    Saturday & Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Connect Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                Quick Connect
              </h3>
              <div className="grid sm:grid-cols-2 gap-3">
                <Button
                  variant="cta"
                  size="lg"
                  className="justify-start"
                  onClick={() =>
                    window.open(
                      "https://whatsapp.com/channel/0029Va92wPT7IUYX51z02Z2w",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  <MessageCircle className="w-5 h-5 mr-3" />
                  Join Our WhatsApp Channel
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  className="justify-start"
                  onClick={() =>
                    window.open(
                      "https://www.facebook.com/profile.php?id=100084687213016",
                      "_blank"
                    )
                  }
                >
                  <Facebook className="w-5 h-5 mr-3" />
                  Follow on Facebook
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start"
                  onClick={() => window.open("tel:+919354555150", "_self")}
                >
                  <Smartphone className="w-5 h-5 mr-3" />
                  Mobile
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  className="justify-start"
                  onClick={() => window.open("tel:+9101250462295", "_self")}
                >
                  <Phone className="w-5 h-5 mr-3" />
                  Telephone
                </Button>

                <Button
                  variant="cta"
                  size="lg"
                  className="justify-start w-auto px-6"
                  onClick={() => window.open("mailto:arprajesh@gmail.com")}
                >
                  <Mail className="w-5 h-5 mr-3" />
                  Email
                </Button>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Contact Form */}
          <div className="bg-card p-10 rounded-2xl border border-border shadow-custom-md flex flex-col justify-between h-full">
            <h3 className="text-3xl font-bold text-foreground mb-8 text-center sm:text-left">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-7 flex-grow">
              {/* Name + Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-base font-medium text-foreground mb-3"
                  >
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="text-base py-3"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-foreground mb-3"
                  >
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+91 9876543210"
                    className="text-base py-3"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-foreground mb-3"
                >
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="text-base py-3"
                />
              </div>

              {/* Service Interest */}
              <div>
                <label
                  htmlFor="service"
                  className="block text-base font-medium text-foreground mb-3"
                >
                  Service Interest
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full p-3 border border-border rounded-md bg-background text-foreground text-base"
                >
                  <option value="">Select a service</option>
                  <option value="demat-account">Demat Account Opening</option>
                  <option value="smc-pi">SMC PI Portfolio</option>
                  <option value="equity-trading">Equity Trading</option>
                  <option value="mutual-funds">Mutual Funds</option>
                  <option value="commodities">Commodities Trading</option>
                  <option value="currency">Currency Trading</option>
                  <option value="ipo-financing">IPO Financing</option>
                  <option value="insurance">Insurance</option>
                  <option value="real-estate">Real Estate Advisory</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-foreground mb-3"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your investment goals and how we can help..."
                  className="text-base p-3"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full text-lg py-6 font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <CheckCircle className="w-5 h-5 mr-2 animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <p className="text-sm text-muted-foreground mt-6 text-center leading-relaxed">
              By submitting this form, you agree to be contacted by{" "}
              <span className="font-medium text-foreground">
                Perfect Investment Hub
              </span>{" "}
              regarding your investment needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
