import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5538999329662"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp size={32} />
    </a>
  );
};

export default WhatsAppButton;