import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Raquel Rojas Moran — REALTOR®",
  description: "Privacy Policy for raquelsellshomes.com — how we collect, use, and protect your personal information.",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-charcoal">
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">Privacy Policy</h1>
      <p className="text-sm text-charcoal/50 mb-10">Last updated: March 19, 2026</p>

      <div className="space-y-8 text-base leading-relaxed text-charcoal/70">
        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">1. Information We Collect</h2>
          <p>When you use our website or contact us through our forms, we may collect the following personal information:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Name (first and last)</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Real estate preferences and interests</li>
            <li>Preferred language</li>
            <li>Any additional information you provide in messages</li>
          </ul>
          <p className="mt-3">We also automatically collect certain technical information including IP address, browser type, device information, and pages visited through standard web server logs and analytics tools.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Respond to your inquiries and contact requests</li>
            <li>Provide real estate services, including property searches and market analysis</li>
            <li>Send you relevant property listings and market updates (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">3. Information Sharing</h2>
          <p>We do not sell, rent, or trade your personal information to third parties. We may share your information with:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li><strong>Baird & Warner</strong> — our affiliated brokerage, as necessary to provide real estate services</li>
            <li><strong>Service providers</strong> — trusted third parties who assist in operating our website and conducting business (e.g., email services), bound by confidentiality agreements</li>
            <li><strong>Legal requirements</strong> — when required by law, regulation, or legal process</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">4. Data Security</h2>
          <p>We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">5. Cookies</h2>
          <p>Our website may use cookies and similar tracking technologies to improve user experience and analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies may affect certain website functionality.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">6. Third-Party Links</h2>
          <p>Our website may contain links to third-party websites (e.g., Baird & Warner, Realtor.com, social media platforms). We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
            <li>Withdraw consent for data processing where applicable</li>
          </ul>
          <p className="mt-3">To exercise any of these rights, please contact us at <a href="mailto:raquel.moran@bairdwarner.com" className="text-gold hover:underline">raquel.moran@bairdwarner.com</a> or call <a href="tel:2242824610" className="text-gold hover:underline">(224) 282-4610</a>.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">8. Children&apos;s Privacy</h2>
          <p>Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If you believe we have inadvertently collected such information, please contact us immediately.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">9. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of the website after changes constitutes acceptance of the updated policy.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">10. Contact Us</h2>
          <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
          <div className="mt-3 bg-cream rounded-2xl p-6">
            <p className="font-medium text-charcoal">Raquel Rojas Moran, Broker-REALTOR®</p>
            <p>Baird & Warner — Winnetka Office</p>
            <p>594 Green Bay Rd, Winnetka, IL 60093</p>
            <p>Email: <a href="mailto:raquel.moran@bairdwarner.com" className="text-gold hover:underline">raquel.moran@bairdwarner.com</a></p>
            <p>Phone: <a href="tel:2242824610" className="text-gold hover:underline">(224) 282-4610</a></p>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-6 border-t border-charcoal/10">
        <a href="/" className="text-gold font-semibold text-sm hover:underline">← Back to Home</a>
      </div>
    </main>
  );
}
