import { useState, useEffect } from "react";
import { ChevronDown, HelpCircle, Smartphone, Phone } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Open first FAQ by default
    setOpenIndex(0);
  }, []);

  const faqs = [
    {
      question: "How do I open a Demat account with Perfect Investment Hub?",
      answer:
        "Opening a Demat account is simple and can be done online. You need basic KYC documents like PAN, Aadhaar, bank statements, and passport-size photographs. Our team will guide you through the entire process and ensure your account is activated within 2-3 business days.",
    },
    {
      question: "What is SMC PI (Portfolio Investment) and how does it work?",
      answer:
        "SMC PI is our flagship portfolio management service offering handpicked stocks with a 1-3 year investment horizon. With a minimum investment of ₹5 lacs, you get 100% transparency, no lock-in period, client confirmation before every trade, and 24x7 portfolio tracking.",
    },
    {
      question: "What are the brokerage charges for trading?",
      answer:
        "We offer competitive brokerage rates across all segments. For equity delivery, rates start from 0.30% and for intraday trading from 0.03%. Commodity and currency trading rates are also market competitive. Contact us for detailed brokerage structure based on your trading volume.",
    },
    {
      question: "Is my money safe with SMC Global?",
      answer:
        "Yes, absolutely. SMC Global is a SEBI-registered member of NSE, BSE, and MCX. Client funds are kept in segregated accounts with scheduled banks. The company follows all regulatory guidelines and has been serving investors for over 30 years with an excellent track record.",
    },
    {
      question: "What trading platforms are available?",
      answer:
        "We provide multiple trading platforms including SMC Ace (advanced), EasyTrade (mobile app), SMC Lite (lightweight), and EasyInvest (mutual funds). You also have access to Odin Client for desktop trading with advanced charting and analysis tools.",
    },
    {
      question: "Do you provide investment advice and research?",
      answer:
        "Yes, we provide comprehensive research reports, market analysis, and personalized investment advice. Our team shares daily market updates, stock recommendations, and sector insights to help you make informed investment decisions.",
    },
    {
      question: "What is the minimum amount required to start investing?",
      answer:
        "You can start equity trading with as little as ₹5,000-10,000. For our SMC PI portfolio service, the minimum is ₹5 lacs. For mutual fund SIPs, you can start with just ₹500 per month. We believe in making investing accessible to everyone.",
    },
    {
      question: "How can I track my portfolio performance?",
      answer:
        "You can track your portfolio 24x7 through our mobile apps and web platforms. We provide real-time P&L statements, portfolio analytics, and detailed transaction history. For SMC PI clients, we also provide weekly portfolio updates and performance reports.",
    },
  ];

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <HelpCircle className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Frequently Asked Questions</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Got
            <span className="block bg-gradient-primary bg-clip-text text-transparent">Questions?</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about investing, trading, and our services. Can't find what you're
            looking for? Contact us directly.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-card border border-border rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <div className="pt-2 border-t border-border">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Still have questions?</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Mobile Contact */}
            <a
              href="tel:+919354555150"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Smartphone className="w-5 h-5 mr-2" />
              +91 9354555150
            </a>

            {/* Office Landline Contact */}
            <a
              href="tel:+9101250462295"
              className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/90 transition-colors"
            >
              <Phone className="w-5 h-5 mr-2" />
              +91 01250-462295
            </a>

            {/* WhatsApp Contact */}
            <a
              href="https://wa.me/919354555150"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
