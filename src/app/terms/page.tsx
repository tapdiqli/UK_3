import type { Metadata } from "next";
import { LegalLayout } from "@/components/layout/LegalLayout";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms governing your use of BestBritCasinoList, an independent UK casino comparison website. 18+ only.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalLayout
      title="Terms of Use"
      label="Terms of Use"
      updated="1 June 2026"
      intro="Please read these terms carefully. By using this website you agree to be bound by them."
      sections={[
        {
          heading: "About this website",
          body: [
            `${site.domain} is an independent comparison and information service for UK online casinos. We are not a gambling operator and do not accept bets or deposits.`,
          ],
        },
        {
          heading: "Eligibility and age restriction",
          body: [
            "This website is intended solely for adults aged 18 or over who are legally permitted to gamble in the United Kingdom. By using the site you confirm that you are 18 or over.",
            "Gambling may be illegal in some jurisdictions. It is your responsibility to ensure gambling is lawful where you live.",
          ],
        },
        {
          heading: "No gambling advice",
          body: [
            "Content on this site is provided for general information only and does not constitute financial, legal or professional advice. Gambling involves risk and outcomes are determined by chance.",
            "We do not guarantee winnings and nothing on this site should be interpreted as a promise of profit.",
          ],
        },
        {
          heading: "Affiliate relationships",
          body: [
            "We may earn a commission when you register or deposit with an operator via links on our site. This does not affect our independent editorial ratings, and it does not cost you anything.",
          ],
        },
        {
          heading: "Accuracy of information",
          body: [
            "We work hard to keep bonus details, terms and ratings accurate and up to date, but offers change frequently. Always confirm the current terms on the operator's own website before signing up.",
          ],
        },
        {
          heading: "Third-party sites",
          body: [
            "Our site links to third-party operators and support services. We are not responsible for the content, terms or practices of any third-party website.",
          ],
        },
        {
          heading: "Intellectual property",
          body: [
            `All content on ${site.domain}, including text, design and graphics, is owned by or licensed to us and may not be reproduced without permission.`,
          ],
        },
        {
          heading: "Limitation of liability",
          body: [
            "To the fullest extent permitted by law, we accept no liability for any loss arising from your use of this website or from gambling with any operator listed here.",
          ],
        },
        {
          heading: "Responsible gambling",
          body: [
            "We are committed to promoting safer gambling. If gambling is affecting you, please visit our Responsible Gambling page or contact the National Gambling Helpline on 0808 8020 133.",
          ],
        },
        {
          heading: "Governing law",
          body: [
            "These terms are governed by the laws of England and Wales, and any disputes are subject to the exclusive jurisdiction of the courts of England and Wales.",
          ],
        },
      ]}
    />
  );
}
