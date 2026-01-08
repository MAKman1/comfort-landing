import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

const Terms: React.FC = () => {
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
          <h1 className="text-3xl md:text-4xl font-bold text-text-dark mb-2">Terms of Use</h1>
          <p className="text-text-light mb-8">
            <strong>Effective Date:</strong> October 20, 2025
          </p>

          <div className="prose prose-lg max-w-none text-text-light">
            <p className="mb-6">
              Please read these Terms of Use ("Terms") carefully before using dryeye.co (the "Site"). By accessing or using the Site, you agree to be bound by these Terms and all terms incorporated in by reference. If you do not agree to all of these Terms, do not use the Site.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">1. General</h2>
            <p className="mb-6">
              These Terms apply to your use of the Site and do not alter in any way the terms or conditions of any other agreement you may have with Dry Eye Solutions Ltd, Company number 16616614, Heritage Exchange, South Lane, Elland, United Kingdom, HX5 0HG, <a href="mailto:info@dryeye.co" className="text-primary hover:text-primary-dark">info@dryeye.co</a> for products, services, or otherwise.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">2. Privacy Policy</h2>
            <p className="mb-6">
              Please refer to our Privacy Policy (<a href="https://dryeye.co/privacy" className="text-primary hover:text-primary-dark">https://dryeye.co/privacy</a>) for information on how we collect, use, and disclose personally identifiable information from our users.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">3. Intellectual Property</h2>
            <p className="mb-4">
              The Site and all its intellectual property (including but not limited to; original content, features, functionality, source code, object code, features, designs, logos, layouts and functions) are and will remain the exclusive property of Dry Eye Solutions Ltd and its licensors. The Site is protected by copyright, trademark, and intellectual property laws. All our intellectual property trademarks may not be used in connection with any product or service without our prior written consent.
            </p>
            <p className="mb-6">
              These terms do not have the effect of granting any other form of licence or right for you to use the App and/or the content in any way, and you may not otherwise use these intellectual property rights made available to you in the App and content without our written consent or purport that you own any such rights.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">4. Limited License</h2>
            <p className="mb-4">
              You are granted a limited, non-exclusive, non-transferable license to access and use the Site Content solely for your personal, non-commercial use. This license does not include:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>(a) any resale or commercial use of the Site or the Site Content;</li>
              <li>(b) the distribution, public performance, or public display of any Site Content;</li>
              <li>(c) modifying or otherwise making any derivative uses of the Site or the Site Content, or any portion thereof;</li>
              <li>(d) use of any data mining, robots, or similar data gathering or extraction methods;</li>
              <li>(e) downloading (other than the page caching) of any portion of the Site Content or any information contained therein, except as expressly permitted on the Site; or</li>
              <li>(f) any use of the Site or the Site Content other than for their intended purposes.</li>
            </ul>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">6. Disclaimer of Warranties</h2>
            <p className="mb-6">
              The Site and the Site Content are provided on an "as is" basis, to the maximum extent permitted by applicable law we exclude all representations, warranties and conditions of any kind, either express or implied. Dry Eye Solutions Ltd disclaims all warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement as to the information, content, and materials on the Site.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">7. Limitation of Liability</h2>
            <p className="mb-6">
              To the maximum extent permitted by applicable law we exclude Dry Eye Solutions Ltd, or our directors, members, employees, or agents be liable for any direct, special, indirect, or consequential damages, or any other damages of any kind, including but not limited to loss of use, loss of profits, or loss of data, whether in an action in contract, tort (including but not limited to negligence), or otherwise, arising out of or in any way connected with the use of or inability to use the Site or the Site Content, including without limitation any damages caused by or resulting from reliance by user on any information obtained from Dry Eye Solutions Ltd, or that result from mistakes, omissions, interruptions, deletion of files or email, errors, defects, viruses, delays in operation or transmission, or any failure of performance, whether or not resulting from acts of god, communications failure, theft, destruction or unauthorized access to Dry Eye Solutions Ltd's records, programs or services.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">8. Applicable Law and Venue</h2>
            <p className="mb-6">
              These Terms and your use of the Site shall be governed by and construed in accordance with the laws of England and Wales. You agree that any action at law or in equity arising out of or relating to these Terms shall be filed only in the courts located in England and you hereby irrevocably and unconditionally consent and submit to the exclusive jurisdiction of such courts over any suit, action or proceeding arising out of these Terms.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">9. Termination</h2>
            <p className="mb-6">
              We may suspend or withdraw or restrict the availability of all or any part of your license to use the Site for business, operational, or other reasons, including and without limitation if you breach these Terms, and may need to do so with little or no notice, although we will always try to give you notice of any such suspension, withdrawal or restriction. We may block or prevent future access to the Site with a period of notice of 30 days, for any reason including and without limitation if you breach these terms.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">10. Severability</h2>
            <p className="mb-6">
              If any provision of these Terms shall be deemed unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
            </p>

            <h2 className="text-xl font-bold text-text-dark mt-8 mb-4">11. Contact Us</h2>
            <p className="mb-6">
              If you have any questions regarding the use of the Site, please contact us at <a href="mailto:info@dryeye.co" className="text-primary hover:text-primary-dark">info@dryeye.co</a>
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

export default Terms;
