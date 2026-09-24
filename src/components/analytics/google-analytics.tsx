import Script from "next/script";
import { ConsentBanner } from "@/components/analytics/consent-banner";

export function GoogleAnalytics() {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) return null;
  return <><Script id="ga-consent-default" strategy="afterInteractive">{`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}window.gtag=gtag;gtag('consent','default',{'analytics_storage':'denied'});`}</Script><Script src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`} strategy="afterInteractive" /><Script id="ga-config" strategy="afterInteractive">{`window.gtag&&window.gtag('js',new Date());window.gtag&&window.gtag('config','${measurementId}');`}</Script><ConsentBanner /></>;
}
