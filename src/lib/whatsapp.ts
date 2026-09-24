import { clinic } from "@/config/clinic";

export function whatsappLink(message: string = clinic.whatsappUi.defaultMessage) {
  return `https://wa.me/${clinic.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function treatmentWhatsappLink(treatment: string) {
  return whatsappLink(treatmentWhatsappMessage(treatment));
}

export function treatmentWhatsappMessage(treatment: string) {
  return `${clinic.whatsappUi.treatmentMessagePrefix} ${treatment}.`;
}
