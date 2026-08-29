import { Container } from "@/components/Container";
import { buildPageMetadata } from "@/lib/metadata";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/constants";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "How Just Genius Recruiting collects, uses, and protects your information.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <div className="max-w-3xl">
          <h1 className="text-3xl leading-[1.1] text-ink sm:text-4xl">Privacy Policy</h1>
          <p className="mt-4 text-sm text-stone-500">Effective Date: August 29, 2026</p>

          <div className="mt-10 space-y-10 text-stone-600">
            <p>
              {SITE_NAME} (&ldquo;JGR,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we
              collect, use, and protect information when you visit our website, contact us,
              or otherwise interact with JGR.
            </p>

            <Section title="Information We Collect">
              <p>We may collect information that you voluntarily provide to us, including:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Your name</li>
                <li>Email address</li>
                <li>Company name</li>
                <li>Information you include in a contact or inquiry form</li>
                <li>Information you provide when communicating with us about our services</li>
              </ul>
              <p className="mt-4">
                When you visit our website, our hosting and technical service providers may
                automatically process limited technical information necessary to operate,
                secure, and deliver the website, such as your IP address, browser or device
                information, and request or server log information.
              </p>
              <p className="mt-4">
                If you choose to book a call through our website, this is handled through
                Calendly, a third-party scheduling service embedded directly on our site. When
                you book a call, Calendly collects your name, email address, and any other
                information you provide as part of the scheduling process, subject to
                Calendly&rsquo;s own privacy policy, not this one.
              </p>
              <p className="mt-4">
                If you engage JGR for recruiting or talent services, additional information
                may be collected and processed as necessary to provide those services. This
                may include professional and employment-related information concerning
                candidates, prospects, client representatives, or other individuals involved
                in a search.
              </p>
              <p className="mt-4">
                Please do not submit sensitive personal information or protected health
                information through our general website contact forms.
              </p>
            </Section>

            <Section title="How We Use Information">
              <p>We may use information we collect to:</p>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                <li>Respond to inquiries and communicate with you</li>
                <li>Evaluate potential client engagements</li>
                <li>Provide recruiting, talent advisory, and related professional services</li>
                <li>Manage client and business relationships</li>
                <li>Conduct legitimate business development activities</li>
                <li>Operate, maintain, secure, and improve our website and services</li>
                <li>Maintain appropriate business records</li>
                <li>Comply with applicable legal obligations</li>
              </ul>
              <p className="mt-4">
                We do not use personal information for purposes materially different from
                those described here without an appropriate basis for doing so.
              </p>
            </Section>

            <Section title="Service Providers">
              <p>
                JGR may use third-party service providers to help operate our business,
                website, communications, scheduling, recruiting workflows, and other business
                systems.
              </p>
              <p className="mt-4">
                These providers may process information on our behalf as necessary to provide
                their services.
              </p>
              <p className="mt-4">
                We may also disclose information when required by law, to protect our rights
                or the rights of others, or in connection with a business transaction
                involving JGR.
              </p>
            </Section>

            <Section title="We Do Not Sell Your Information">
              <p>We do not sell your personal information.</p>
            </Section>

            <Section title="Data Security">
              <p>
                We use reasonable administrative, technical, and organizational measures
                designed to protect information in our possession or control.
              </p>
              <p className="mt-4">
                Access to business and recruiting information is limited based on business
                need, and we seek to minimize unnecessary collection and storage of personal
                information.
              </p>
              <p className="mt-4">
                However, no internet transmission, electronic system, or method of storage can
                be guaranteed to be completely secure.
              </p>
            </Section>

            <Section title="Data Retention">
              <p>
                We retain personal information for as long as reasonably necessary to fulfill
                the purposes described in this policy, provide our services, maintain
                appropriate business records, resolve disputes, comply with legal obligations,
                and protect our legitimate business interests.
              </p>
              <p className="mt-4">
                Retention periods may vary depending on the nature of the information and our
                relationship with you.
              </p>
            </Section>

            <Section title="Your Choices">
              <p>
                You may contact JGR to ask questions about personal information you have
                provided to us or to request that we update or delete that information.
              </p>
              <p className="mt-4">
                Depending on where you live, applicable law may provide additional rights
                concerning your personal information.
              </p>
              <p className="mt-4">
                We will evaluate and respond to applicable privacy requests in accordance with
                relevant legal requirements.
              </p>
            </Section>

            <Section title="Children’s Privacy">
              <p>
                JGR&rsquo;s website and services are intended for businesses and working
                professionals and are not directed toward children under 13.
              </p>
              <p className="mt-4">
                We do not knowingly seek to collect personal information from children under
                13 through our website.
              </p>
            </Section>

            <Section title="Third-Party Links and Tools">
              <p>
                Our website may contain links to third-party websites, and we also use
                embedded third-party tools, such as Calendly for scheduling, directly on our
                site. When you interact with an embedded tool like Calendly, you are
                interacting directly with that third party, and any information you provide is
                subject to their privacy policy, not this one.
              </p>
              <p className="mt-4">
                JGR is not responsible for the privacy practices of third parties. We encourage
                you to review their privacy policies before providing information to them.
              </p>
            </Section>

            <Section title="Changes to This Policy">
              <p>
                We may update this Privacy Policy periodically to reflect changes to our
                business, website, services, or legal obligations.
              </p>
              <p className="mt-4">
                When we make changes, we will update the effective date shown at the top of
                this policy.
              </p>
            </Section>

            <Section title="Contact Us">
              <p>
                If you have questions about this Privacy Policy or would like to make a
                privacy-related request, please contact:
              </p>
              <p className="mt-4 text-ink">
                {SITE_NAME}
                <br />
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:text-accent-dim">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </Section>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
