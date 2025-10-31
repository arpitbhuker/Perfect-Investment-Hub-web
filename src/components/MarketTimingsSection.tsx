import { Clock, Calendar, AlertCircle } from "lucide-react";

const MarketTimingsSection = () => {
  const marketHours = [
    {
      market: "Stock Market",
      timing: "9:15 AM - 3:30 PM",
      days: "Monday - Friday",
      note: "Free trading with bilateral order matching"
    },
    {
      market: "Commodity Market",
      timing: "9:00 AM - 11:30/11:55 PM*",
      days: "Monday - Friday",
      note: "Extended evening session available"
    }
  ];

  const sessions = [
    {
      name: "Morning Session",
      time: "9:00 AM - 5:00 PM",
      description: "All commodities trading"
    },
    {
      name: "Evening Session", 
      time: "5:00 PM - 11:30/11:55 PM*",
      description: "Metals & Energy only"
    }
  ];

  return (
    <section id="market-timings" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full border border-primary/20">
            <Clock className="w-4 h-4 text-primary mr-2" />
            <span className="text-sm font-medium text-primary">Market Timings</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Trading
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Schedule
            </span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay updated with market hours and trading sessions to maximize your investment opportunities.
          </p>
        </div>

        {/* Market Hours Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {marketHours.map((market, index) => (
            <div key={index} className="p-6 bg-card rounded-2xl border border-border hover:shadow-custom-md transition-all">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{market.market}</h3>
                  <p className="text-sm text-muted-foreground">{market.days}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-2xl font-bold text-primary">{market.timing}</div>
                <p className="text-sm text-muted-foreground">{market.note}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Commodity Sessions */}
        <div className="bg-gradient-accent p-8 rounded-2xl border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Commodity Trading Sessions</h3>
          
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            {sessions.map((session, index) => (
              <div key={index} className="bg-card/50 p-4 rounded-lg border border-border/50">
                <h4 className="font-semibold text-foreground mb-1">{session.name}</h4>
                <div className="text-lg font-bold text-primary mb-2">{session.time}</div>
                <p className="text-sm text-muted-foreground">{session.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-warning/10 border border-warning/20 rounded-lg p-4 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-warning flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <strong className="text-warning">Note:</strong> *11:55 PM during Daylight Saving Time. 
              Agricultural commodities close at 5:00 PM. Non-agricultural commodities (metals, energy) 
              trade until market close. MCX timing variations and trading holidays may apply.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketTimingsSection;