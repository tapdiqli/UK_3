import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "How BestBritCasinoList uses cookies and similar technologies, and how you can manage your preferences.",
  alternates: { canonical: "/cookie-policy" },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      label="Cookie Policy"
      updated="1 June 2026"
      intro="This policy explains what cookies are, how we use them, and how you can control them."
      sections={[
        {
          heading: "What are cookies?",
          body: [
            "Cookies are small text files stored on your device when you visit a website. They help sites work, remember your preferences and understand how visitors use them.",
          ],
        },
        {
          heading: "Types of cookies we use",
          body: [
            "Essential cookies: required for the website to function, including remembering your cookie choices. These cannot be switched off.",
            "Analytics cookies: help us understand how visitors interact with the site so we can improve it. These are only set with your consent.",
            "Functional cookies: remember choices you make to provide a more personalised experience.",
          ],
        },
        {
          heading: "Managing your preferences",
          body: [
            "When you first visit our site, a Cookie Settings dialog lets you accept all cookies or open Preferences to choose analytics and functional cookies. Closing the dialog keeps essential cookies only. You can change your choice later by clearing site data in your browser.",
            "Most browsers also let you block or delete cookies through their settings. Note that blocking essential cookies may affect how the site works.",
          ],
        },
        {
          heading: "Third-party cookies",
          body: [
            "Some cookies may be set by third-party services we use, such as analytics providers. When you follow a link to a casino operator, that operator may set its own cookies under its own policy.",
          ],
        },
        {
          heading: "Contact",
          body: [
            "If you have questions about our use of cookies, please contact us using the details on our Contact page.",
          ],
        },
      ]}
    />
  );
}
