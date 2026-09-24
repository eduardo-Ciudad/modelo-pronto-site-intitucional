"use client";

import Link from "next/link";
import { useEffect, useSyncExternalStore } from "react";
import { clinic } from "@/config/clinic";
import { Button } from "@/components/ui/button";

const storageKey = "alento-analytics-consent";
const changeEvent = "alento-consent-change";
const subscribe = (callback: () => void) => { window.addEventListener(changeEvent, callback); return () => window.removeEventListener(changeEvent, callback); };
const getSnapshot = () => { try { return localStorage.getItem(storageKey) ?? "unset"; } catch { return "unset"; } };
const getServerSnapshot = () => "pending";

export function ConsentBanner() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  useEffect(() => { if (consent === "granted") window.gtag?.("consent", "update", { analytics_storage: "granted" }); }, [consent]);
  const choose = (choice: "granted" | "denied") => { try { localStorage.setItem(storageKey, choice); } catch {} window.gtag?.("consent", "update", { analytics_storage: choice }); window.dispatchEvent(new Event(changeEvent)); };
  if (consent !== "unset") return null;
  return <aside className="fixed inset-x-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-brand-border bg-card p-5 shadow-card sm:inset-x-6 sm:flex sm:items-center sm:gap-6" style={{ bottom: "max(1rem, env(safe-area-inset-bottom))" }}><p className="flex-1 text-sm text-muted">{clinic.analytics.consentText} <Link href="/politica-de-privacidade" className="font-semibold text-brand underline decoration-brand-border underline-offset-4">{clinic.analytics.privacyLink}</Link></p><div className="mt-4 flex gap-2 sm:mt-0"><Button variant="ghost" className="min-h-10 px-4 py-2" onClick={() => choose("denied")}>{clinic.analytics.decline}</Button><Button className="min-h-10 px-4 py-2" onClick={() => choose("granted")}>{clinic.analytics.accept}</Button></div></aside>;
}
