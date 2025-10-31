import React, { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();
const GTM_ID = "GTM-KPJG96MF"; // your GTM container id

// This component inserts the GTM <script> into <head> once on mount
// and renders the noscript <iframe> as the first DOM child (acts like right after <body>).
// It also listens to route changes (SPA) and pushes page_view events to dataLayer.
function GTM() {
  const location = useLocation();

  // Insert GTM script into head on first mount
  useEffect(() => {
    // initialize dataLayer if not present
    (window as any).dataLayer = (window as any).dataLayer || [];
    (window as any).dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });

    // check if script already exists
    if (!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_ID}"]`)) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
      document.head.insertBefore(script, document.head.firstChild);
    }

    // nothing to clean up for the injected script (keeps working across SPA navigations)
  }, []);

  // Send a page_view event on every route change (important for single-page apps)
  useEffect(() => {
    // push a page_view so GTM/GA can pick up SPA navigation
    try {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({
        event: "page_view",
        page_path: window.location.pathname + window.location.search,
        page_title: document.title,
      });
    } catch (e) {
      // swallow errors silently — analytics must not break the app
      // console.warn("GTM page_view push failed", e);
    }
  }, [location.pathname, location.search]);

  // Render the noscript iframe as the first child of the app body.
  // This is the recommended fallback for users with JS disabled.
  return (
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      }}
    />
  );
}

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      {/* BrowserRouter provides routing context required by GTM component below */}
      <BrowserRouter>
        {/* GTM component must be inside BrowserRouter so it can access useLocation */}
        <GTM />

        <Routes>
          <Route path="/" element={<Index />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
