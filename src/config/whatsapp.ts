// Centralized Official WhatsApp Configuration for ProMedia & ProTech
export const WHATSAPP_PHONE_NUMBER = "201110070072"; 

export const generateWhatsAppLink = (message: string): string => {
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodedText}`;
};
