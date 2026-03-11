import { Button } from "@/components/ui/button";
import messengerIcon from "@assets/Black-facebook-messenger-icon-on-transparent-background-PNG_1768661610213.png";

export function MessengerButton() {
  const handleClick = () => {
    window.open("https://www.facebook.com/profile.php?id=100046329536199", "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-6 left-6 z-50 rounded-full w-14 h-14 p-2 bg-white hover:bg-gray-100 shadow-lg flex items-center justify-center transition-transform hover:scale-110 border border-gray-200"
      aria-label="Contact us on Messenger"
    >
      <img src={messengerIcon} alt="Messenger" className="w-full h-full object-contain" />
    </Button>
  );
}
