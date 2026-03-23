import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Raquel Rojas Moran — REALTOR®",
  description: "Terms of Service for raquelsellshomes.com.",
};

export default function TermsOfService() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20 md:py-28 text-charcoal">
      <h1 className="font-serif text-4xl md:text-5xl font-light mb-8">Terms of Service</h1>
      <p className="text-sm text-charcoal/50 mb-10">Last updated: March 19, 2026</p>

      <div className="space-y-8 text-base leading-relaxed text-charcoal/70">
        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using raquelsellshomes.com (the &quot;Website&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use this Website.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">2. Services</h2>
          <p>This Website is operated by Raquel Rojas Moran, a licensed Broker-REALTOR® affiliated with Baird & Warner. The Website provides information about real estate services, property listings, and a means to contact Raquel for real estate inquiries.</p>
          <p className="mt-3">The information provided on this Website is for general informational purposes only and does not constitute professional real estate advice. Property details, pricing, and availability are subject to change without notice.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">3. Listing Information</h2>
          <p>Property listings displayed on this Website are sourced from third-party MLS (Multiple Listing Service) data and may be provided by Baird & Warner, Realtor.com, or other real estate platforms. While we strive to keep information accurate and current:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>We do not guarantee the accuracy, completeness, or timeliness of listing data</li>
            <li>Listings may have been sold, withdrawn, or modified since last update</li>
            <li>Square footage, lot size, and other property details should be independently verified</li>
            <li>Photos may not reflect the current condition of properties</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">4. Fair Housing</h2>
          <p>We are committed to compliance with all federal, state, and local fair housing laws. We do not discriminate on the basis of race, color, religion, sex, handicap, familial status, national origin, sexual orientation, gender identity, or any other protected class.</p>
          <div className="mt-3 bg-cream rounded-2xl p-5 text-sm">
            <p className="font-medium text-charcoal">Equal Housing Opportunity</p>
            <p className="mt-1">All real estate advertised herein is subject to the Federal Fair Housing Act, which makes it illegal to advertise any preference, limitation, or discrimination based on protected classes.</p>
          </div>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">5. Intellectual Property</h2>
          <p>All content on this Website — including text, graphics, logos, images, and software — is the property of Raquel Rojas Moran or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works without prior written consent.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">6. User Conduct</h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            <li>Use the Website for any unlawful purpose</li>
            <li>Submit false or misleading information through contact forms</li>
            <li>Attempt to interfere with the Website&apos;s functionality or security</li>
            <li>Scrape, harvest, or collect data from the Website without permission</li>
            <li>Use the Website to send unsolicited communications or spam</li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">7. Disclaimer of Warranties</h2>
          <p>THIS WEBSITE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">8. Limitation of Liability</h2>
          <p>In no event shall Raquel Rojas Moran, Baird & Warner, or their affiliates be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the Website or reliance on any information provided herein.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">9. Third-Party Links</h2>
          <p>This Website may contain links to third-party websites. These links are provided for your convenience and do not signify endorsement. We are not responsible for the content or practices of linked websites.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">10. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of Illinois, without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Cook County, Illinois.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">11. Changes to Terms</h2>
          <p>We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting. Your continued use of the Website constitutes acceptance of the modified Terms.</p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-medium text-charcoal mb-3">12. Contact</h2>
          <p>For questions about these Terms, contact:</p>
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
