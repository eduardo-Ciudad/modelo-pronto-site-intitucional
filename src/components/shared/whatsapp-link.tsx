"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";
import { whatsappLink } from "@/lib/whatsapp";

type WhatsappLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  children: ReactNode;
  location: string;
  message?: string;
};

export function WhatsappLink({ children, location, message, onClick, ...props }: WhatsappLinkProps) {
  const trackClick: AnchorHTMLAttributes<HTMLAnchorElement>["onClick"] = (event) => {
    window.gtag?.("event", "whatsapp_click", { location });
    onClick?.(event);
  };
  return <a href={whatsappLink(message)} target="_blank" rel="noreferrer" onClick={trackClick} {...props}>{children}</a>;
}
