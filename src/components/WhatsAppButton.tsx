import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi Rajesh, I found your website and I'm interested in learning more about Perfect Investment Hub's services. Please share more details about investment opportunities.`
    );
    window.open(`https://wa.me/919354555150?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center bg-green-500 text-white p-4 rounded-full shadow-custom-lg hover:shadow-custom-glow transition-all duration-300 hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
        
        {/* Tooltip */}
        <div className={`absolute right-full mr-3 bg-card text-foreground px-3 py-2 rounded-lg shadow-custom-md whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        }`}>
          <span className="text-sm font-medium">Chat with Rajesh</span>
          <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-card rotate-45"></div>
        </div>
        
        {/* Pulse animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
      </button>
    </div>
  );
};

export default WhatsAppButton;