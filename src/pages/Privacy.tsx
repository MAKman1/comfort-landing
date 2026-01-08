import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo className="text-primary mr-3" width={40} height={40} />
            <span className="text-xl font-extrabold text-text-dark">
              Comfort <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Dry Eye App</span>
            </span>
          </Link>
          <Link
            to="/"
            className="flex items-center text-primary hover:text-primary-dark transition-colors font-medium"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-8">Privacy Policy</h1>

          <div className="prose prose-lg max-w-none text-text-light">
            <p className="mb-6">
              This Privacy Policy describes how Dry Eye Solutions Ltd, Company number 16616614, Heritage Exchange, South Lane, Elland, United Kingdom, HX5 0HG, <a href="mailto:info@dryeye.co" className="text-primary hover:text-primary-dark">info@dryeye.co</a> ("we," "us," or "our") collects, uses, and discloses your information when you use our website when you visit or interact with dryeye.co (the "Site").
            </p>

            <p className="mb-6">
              We are committed to protecting your privacy and handling your data in a transparent and secure manner. Your continued use of the website shall indicate your continued acceptance of the terms of this Privacy Policy. If You no longer agree with the terms of this Privacy Policy, please refrain from using the website.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">1. Principles of Data Processing</h2>
            <p className="mb-4">We are committed to processing your personal data according to GDPR principles.</p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li><strong>Lawfulness, Fairness, and Transparency:</strong> We process your data lawfully and in a transparent manner. This policy explains exactly how your data is used.</li>
              <li><strong>Purpose Limitation:</strong> We collect your data for specific, explicit, and legitimate purposes. We will not process it in a way that is incompatible with those purposes.</li>
              <li><strong>Data Minimisation:</strong> We only collect the data that is necessary for the purposes we've outlined. We do not collect excessive information.</li>
              <li><strong>Accuracy:</strong> We strive to keep your personal data accurate and up to date. We will take every reasonable step to ensure inaccurate data is corrected or erased without delay.</li>
              <li><strong>Storage Limitation:</strong> We only store your personal data for as long as it's necessary for the purposes for which it was collected.</li>
              <li><strong>Integrity and Confidentiality:</strong> We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.</li>
            </ul>
            <p className="mb-4">
              The legal basis on which we hold and use your personal information is primarily for the purpose of pursuing our legitimate interests as a business which provides digital health and wellness services to users. In certain circumstances, we may process your personal information because it is necessary for us to perform our contract with you (for example, to create your account and provide app functionality).
            </p>
            <p className="mb-6">
              Where we process special category data (such as health information you provide within the app), we will do so on the basis of your explicit consent, which we will request separately from you and which you may withdraw at any time. If we ever rely on your consent for any other purpose, we will let you know and provide you with a way to withdraw your consent.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">2. Information We Collect</h2>
            <p className="mb-4">We collect information to provide and improve the website and its services. The types of information we may collect include:</p>

            <h3 className="text-lg font-semibold text-text-dark mt-6 mb-3">a) Personal Information</h3>
            <p className="mb-4">This is information that can be used to identify you as an individual. We may collect this when you voluntarily provide it to us, such as when you create an account. This may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-dark mt-6 mb-3">b) Health and Wellness Information</h3>
            <p className="mb-4">We may collect information related to your dry eye condition and general wellness. This may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Symptoms you log</li>
              <li>Information about treatments you are using</li>
              <li>Lifestyle factors you track (e.g., screen time, diet)</li>
              <li>Any other health-related data you choose to input</li>
            </ul>

            <h3 className="text-lg font-semibold text-text-dark mt-6 mb-3">c) Usage Data</h3>
            <p className="mb-4">This data is collected automatically when you use the website. It helps us understand how you interact with the website and improve its functionality. This may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your device's IP address</li>
              <li>Device type and operating system</li>
              <li>Device technical specifications</li>
              <li>Device language and time zone</li>
              <li>Device location</li>
              <li>App version</li>
              <li>Screens or features you visit</li>
              <li>The time and date of your use</li>
            </ul>

            <p className="mb-4">Third parties may collect other information, including but not limited to financial information (including card details), individuals' address, sex, gender, data from or about devices. Please review their privacy policies below (including but not limited to):</p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li><a href="http://amazon.co.uk/gp/help/customer/display.html?nodeId=GX7NJQ4ZB8MHFRNJ" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Amazon Privacy Policy</a></li>
              <li><a href="https://stripe.com/gb/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Stripe Privacy Policy</a></li>
              <li><a href="https://www.butterflies-eyecare.co.uk/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Butterflies Eyecare Privacy Policy</a></li>
              <li><a href="https://www.facebook.com/privacy/policy/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Facebook Privacy Policy</a></li>
              <li><a href="https://help.instagram.com/155833707900388" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Instagram Privacy Policy</a></li>
              <li><a href="https://www.linkedin.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">LinkedIn Privacy Policy</a></li>
              <li><a href="https://www.apple.com/uk/legal/privacy/data/en/app-store/" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Apple App Store Privacy Policy</a></li>
              <li><a href="https://policies.google.com/privacy?hl=en-GB" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">Google Privacy Policy</a></li>
            </ul>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="mb-4">We use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li><strong>To Personalize Your Experience:</strong> To tailor the App's content and features to your specific dry eye condition and preferences.</li>
              <li><strong>For Analytics and Research:</strong> To analyze usage trends, track the effectiveness of features, and conduct research to improve the App. This data is typically anonymized or aggregated to protect your identity.</li>
              <li><strong>To Communicate with You:</strong> To send you updates, notifications, and other information related to the App.</li>
              <li><strong>For Security and Compliance:</strong> To detect and prevent fraud, protect the security of our systems, and comply with legal obligations.</li>
            </ul>
            <p className="mb-4">
              We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).
            </p>
            <p className="mb-6">
              If you contact us (via email, Facebook, Twitter, LinkedIn, or other means), we will collect (and may retain) any personally identifying information, such as your name and email address, and any other information you provide. We will use this information to try to fulfil your request and may use it to provide you with additional information later in order to fulfil the contractual obligation Dry Eyes Solutions Ltd has to users. We may keep this information for an unlimited period.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">4. Data Security</h2>
            <p className="mb-6">
              We take reasonable measures to protect your information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your data, we cannot guarantee its absolute security.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">5. Disclosure of Your Information</h2>
            <p className="mb-4">We may share your anonymised data with a third party. We may share your information with third parties only in the following circumstances:</p>
            <ul className="list-disc pl-6 mb-6 space-y-3">
              <li><strong>With Your Consent:</strong> When you give us explicit permission to share your information.</li>
              <li><strong>For Legal Obligations:</strong> To comply with a legal process, such as a court order, or to protect our rights and property.</li>
              <li><strong>With Service Providers:</strong> We may share data with third-party vendors who perform services on our behalf (e.g., cloud hosting, analytics). These providers are contractually obligated to handle your information securely and only for the purposes we specify.</li>
              <li><strong>With Research Partners:</strong> To collaborate to better understand dry eye disease.</li>
            </ul>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">6. Your Rights</h2>
            <p className="mb-4">Depending on your location, you may have certain rights regarding your personal data. These rights may include:</p>
            <ul className="list-disc pl-6 mb-4 space-y-3">
              <li><strong>Right to Access:</strong> The right to request a copy of the information we hold about you.</li>
              <li><strong>Right to Rectification:</strong> The right to request that we correct any inaccurate or incomplete information.</li>
              <li><strong>Right to Erasure:</strong> The right to request that we delete your information, under certain conditions.</li>
              <li><strong>Right to Object to Processing:</strong> The right to object to our processing of your information, under certain conditions.</li>
              <li><strong>Right to Data Portability:</strong> The right to request that we transfer the data we have collected to another organisation, or directly to you, under certain conditions.</li>
              <li><strong>Right to withdraw Consent:</strong> The right to withdraw consent to the processing of personal data at any time.</li>
            </ul>
            <p className="mb-4">To exercise any of these rights, please contact us using the details below.</p>
            <p className="mb-6">
              Please note the website contains links to third-party websites and applications (such as social media sites and through affiliate links), which are governed by their own terms of use and privacy policies. We are not responsible for the practices or content of these third-party sites, and encourage users to review these policies independently before sharing any personal information.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">7. Children's Privacy</h2>
            <p className="mb-6">
              Our website is not intended for use by anyone under the age of 13. We do not knowingly collect personally identifiable information from children under 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so we can take the necessary steps to remove that information from our servers.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">8. Changes to This Privacy Policy</h2>
            <p className="mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">9. Contact Us and Complaints</h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:info@dryeye.co" className="text-primary hover:text-primary-dark">info@dryeye.co</a>
            </p>
            <p className="mb-6">
              Alternatively, you have the right to make a complaint to the Information Commissioner's Office (which is the supervisory body in the UK) or, if you are an EU data subject, one of the <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-dark">competent European supervisory authorities</a>.
            </p>
          </div>
        </article>
      </main>

      <footer className="bg-text-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 Dry Eye Solutions Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;
