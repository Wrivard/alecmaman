import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MessengerButton() {
  const handleClick = () => {
    // Open Messenger link (replace with actual FB page ID/link)
    window.open("https://m.me/lasavonniere", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 rounded-full w-14 h-14 bg-[#0084FF] hover:bg-[#006bd1] text-white shadow-lg flex items-center justify-center transition-transform hover:scale-110"
      aria-label="Contact us on Messenger"
    >
      <MessageCircle className="w-8 h-8" fill="currentColor" />
    </Button>
  );
}
