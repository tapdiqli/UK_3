import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BestBritCasinoList collects, uses and protects your personal data in line with UK GDPR and the Data Protection Act 2018.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      label="Privacy Policy"
      updated="1 June 2026"
      intro="This policy explains what personal data we collect, why we collect it, and the rights you have under UK data protection law."
      sections={[
        {
          heading: "Who we are",
          body: [
            `${site.name} ("we", "us", "our") operates the website ${site.domain}. We are an independent casino comparison service and do not offer gambling facilities. You can contact us at ${site.email}.`,
          ],
        },
        {
          heading: "Information we collect",
          body: [
            "We collect information you provide directly, such as your name, email address and message when you use our contact form.",
            "We also collect limited technical information automatically, including your IP address, browser type, device information and pages visited, using cookies and similar technologies.",
          ],
        },
        {
          heading: "How we use your information",
          body: [
            "We use your information to respond to enquiries, operate and improve our website, measure traffic and performance, and comply with our legal obligations.",
            "Where we rely on consent (for example, non-essential analytics cookies), you may withdraw that consent at any time.",
          ],
        },
        {
          heading: "Legal bases for processing",
          body: [
            "We process personal data under the UK GDPR on the basis of your consent, our legitimate interests in operating and improving the site, and where necessary to comply with legal obligations.",
          ],
        },
        {
          heading: "Cookies and analytics",
          body: [
            "We use essential cookies to run the site and, with your consent, analytics cookies to understand how the site is used. You can manage your preferences via our cookie banner. See our Cookie Policy for details.",
          ],
        },
        {
          heading: "Sharing your information",
          body: [
            "We do not sell your personal data. We may share it with service providers who help us operate the site (such as hosting and analytics providers), and with authorities where required by law.",
            "When you click an outbound link to a casino operator, that operator processes your data under its own privacy policy, which we do not control.",
          ],
        },
        {
          heading: "Data retention",
          body: [
            "We keep personal data only for as long as necessary for the purposes described in this policy, after which it is securely deleted or anonymised.",
          ],
        },
        {
          heading: "Your rights",
          body: [
            "Under UK data protection law you have the right to access, rectify, erase, restrict or object to the processing of your personal data, and the right to data portability.",
            `To exercise any of these rights, contact us at ${site.email}. You also have the right to complain to the Information Commissioner's Office (ICO) at ico.org.uk.`,
          ],
        },
        {
          heading: "Children",
          body: [
            "Our website is intended for adults aged 18 and over. We do not knowingly collect personal data from anyone under 18.",
          ],
        },
        {
          heading: "Changes to this policy",
          body: [
            "We may update this policy from time to time. Any changes will be posted on this page with a revised 'last updated' date.",
          ],
        },
      ]}
    />
  );
}
