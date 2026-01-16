import { Button } from "@/components/ui/button";

export function MessengerButton() {
  const handleClick = () => {
    window.open("https://m.me/lasavonniere", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 rounded-full w-14 h-14 p-0 bg-transparent hover:bg-transparent shadow-lg flex items-center justify-center transition-transform hover:scale-110 border-none"
      aria-label="Contact us on Messenger"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
        <defs>
          <linearGradient id="messenger-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00B2FF" />
            <stop offset="100%" stopColor="#006AFF" />
          </linearGradient>
        </defs>
        <path 
          d="M50 0C22.4 0 0 21.2 0 47.4C0 61.2 5.2 73.7 14 83V100L29.2 91.1C35.6 94.5 42.6 96.4 50 96.4C77.6 96.4 100 75.2 100 49C100 22.8 77.6 0 50 0ZM56.3 64.6L44.8 52.3L22.4 64.6L47 38.3L58.5 50.6L80.9 38.3L56.3 64.6Z" 
          fill="url(#messenger-gradient)" 
        />
        <path 
          d="M56.3 64.6L44.8 52.3L22.4 64.6L47 38.3L58.5 50.6L80.9 38.3L56.3 64.6Z" 
          fill="white" 
        />
      </svg>
    </Button>
  );
}
