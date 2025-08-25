import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ExternalLink, X } from 'lucide-react';
import Logo from './Logo';
import DownloadButtons from './DownloadButtons';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const Modal: React.FC<{ title: string; content: string; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-4xl max-h-[80vh] overflow-auto p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-xl md:text-2xl font-bold text-text-dark mb-6">{title}</h2>
        <div className="text-sm md:text-base text-text-light whitespace-pre-wrap font-light leading-relaxed">{content}</div>
      </motion.div>
    </div>
  );

  const privacyContent = `Privacy Policy
Effective Date: August 21, 2025

This Privacy Policy describes how your personal information is collected, used, and shared when you visit or interact with dryeye.co (the "Site").

Personal Information We Collect
When you visit the Site, we automatically collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device. Additionally, as you browse the Site, we collect information about the individual web pages or products that you view, what websites or search terms referred you to the Site, and information about how you interact with the Site. We refer to this automatically-collected information as "Device Information."

We collect Device Information using the following technologies:
• "Cookies" are data files that are placed on your device or computer and often include an anonymous unique identifier. For more information about cookies, and how to disable cookies, visit http://www.allaboutcookies.org.
• "Log files" track actions occurring on the Site, and collect data including your IP address, browser type, Internet service provider, referring/exit pages, and date/time stamps.
• "Web beacons," "tags," and "pixels" are electronic files used to record information about how you browse the Site.

How We Use Your Personal Information
We use the Device Information that we collect to help us screen for potential risk and fraud (in particular, your IP address), and more generally to improve and optimize our Site (for example, by generating analytics about how our customers browse and interact with the Site, and to assess the success of our marketing and advertising campaigns).

If you contact us (via email, Facebook, Twitter, LinkedIn, or other means), we will collect (and may retain) any personally identifying information, such as your name and email address, and any other information you provide. We will use this information to try to fulfil your request and may use it to provide you with additional information later. We may keep this information for an unlimited period.

Sharing Your Personal Information
We do not sell, rent, or trade your personal information with third parties. We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.

Your Rights
You have the right to access the personal information we hold about you and to ask that your personal information be corrected, updated, or deleted. If you would like to exercise this right, please contact us through the contact information below.

Data Retention
When you submit information through the Site, we will maintain your Form Information for our records unless and until you ask us to delete this information.

Changes
We may update this privacy policy from time to time in order to reflect, for example, changes to our practices or for other operational, legal or regulatory reasons.

Contact Us
For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at info@dryeye.co`;

  const termsContent = `Terms of Use
Effective Date: August 21, 2025

Please read these Terms of Use ("Terms") carefully before using dryeye.co (the "Site"). By accessing or using the Site, you agree to be bound by these Terms and all terms incorporated in by reference. If you do not agree to all of these Terms, do not use the Site.

General
These Terms apply to your use of the Site and do not alter in any way the terms or conditions of any other agreement you may have with Dry Eye Solutions Ltd for products, services, or otherwise.

Privacy Policy
Please refer to our Privacy Policy for information on how we collect, use, and disclose personally identifiable information from our users.

Site Content
Unless otherwise indicated on the Site, the Site and all content and other materials on the Site, including, without limitation, the logo and all designs, text, graphics, pictures, information, data, software, sound files, other files, and the selection and arrangement thereof (collectively, "Site Content") are the proprietary property of Dry Eye Solutions Ltd or our licensors or users and are protected by UK and international copyright laws.

Limited License
You are granted a limited, non-exclusive, non-transferable license to access and use the Site Content solely for your personal, non-commercial use. This license does not include:
(a) any resale or commercial use of the Site or the Site Content;
(b) the distribution, public performance, or public display of any Site Content;
(c) modifying or otherwise making any derivative uses of the Site or the Site Content, or any portion thereof;
(d) use of any data mining, robots, or similar data gathering or extraction methods;
(e) downloading (other than the page caching) of any portion of the Site Content or any information contained therein, except as expressly permitted on the Site; or
(f) any use of the Site or the Site Content other than for their intended purposes.

Trademarks
"Dry Eye Solutions Ltd," the logos, and any other product or service name or slogan contained on the Site are trademarks of Dry Eye Solutions Ltd and may not be copied, imitated, or used, in whole or in part, without the prior written permission of Dry Eye Solutions Ltd or the applicable trademark holder.

Disclaimer of Warranties
The Site and the Site Content are provided on an "as is" basis without warranties of any kind, either express or implied. Dry Eye Solutions Ltd disclaims all warranties, express or implied, including, without limitation, implied warranties of merchantability, fitness for a particular purpose, title, and non-infringement as to the information, content, and materials on the Site.

Limitation of Liability
In no event shall Dry Eye Solutions Ltd, or our directors, members, employees, or agents be liable for any direct, special, indirect, or consequential damages, or any other damages of any kind, including but not limited to loss of use, loss of profits, or loss of data, whether in an action in contract, tort (including but not limited to negligence), or otherwise, arising out of or in any way connected with the use of or inability to use the Site or the Site Content.

Applicable Law and Venue
These Terms and your use of the Site shall be governed by and construed in accordance with the laws of England and Wales. You agree that any action at law or in equity arising out of or relating to these Terms shall be filed only in the courts located in England and you hereby irrevocably and unconditionally consent and submit to the exclusive jurisdiction of such courts over any suit, action or proceeding arising out of these Terms.

Termination
Dry Eye Solutions Ltd reserves the right, without notice and in its sole discretion, to terminate your license to use the Site, and to block or prevent your future access to and use of the Site.

Severability
If any provision of these Terms shall be deemed unlawful, void, or for any reason unenforceable, then that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.

Contact Us
If you have any questions regarding the use of the Site, please contact us at info@dryeye.co`;

  return (
    <>
      <footer id="contact" className="bg-gradient-to-br from-text-dark to-text py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Download Section */}
            <div className="mb-12 text-center">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-6">
                Get the App Today
              </h3>
              <DownloadButtons className="justify-center" size="medium" />
            </div>

            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {/* Brand */}
              <div>
                <div className="flex items-center mb-4">
                  <Logo className="text-primary-light mr-3" width={40} height={40} />
                  <h3 className="text-xl md:text-2xl font-extrabold text-white">
                    Comfort <span className="bg-gradient-to-r from-primary-light to-primary bg-clip-text text-transparent">Dry Eye App</span>
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-300 font-light">
                  Your personal companion for managing dry eye symptoms and finding lasting comfort.
                </p>
              </div>

              {/* Contact */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-white mb-6">Contact Us</h4>
                <a
                  href="mailto:info@dryeye.co"
                  className="flex items-center text-sm md:text-base text-gray-300 hover:text-primary-light transition-colors font-light"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  info@dryeye.co
                </a>
              </div>

              {/* Legal */}
              <div>
                <h4 className="text-base md:text-lg font-bold text-white mb-6">Legal</h4>
                <button
                  onClick={() => setShowPrivacy(true)}
                  className="flex items-center text-sm md:text-base text-gray-300 hover:text-primary-light transition-colors mb-2 font-light"
                >
                  Privacy Policy
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
                <button
                  onClick={() => setShowTerms(true)}
                  className="flex items-center text-sm md:text-base text-gray-300 hover:text-primary-light transition-colors font-light"
                >
                  Terms of Use
                  <ExternalLink className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>

            {/* Copyright */}
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-sm md:text-base text-gray-400 font-light">
                © 2025 Dry Eye Solutions Ltd. All rights reserved.
              </p>
              <p className="text-xs md:text-sm text-gray-500 mt-2 font-light">
                Version 1.0 | Brand Guidelines Version 1.0
              </p>
            </div>
          </motion.div>
        </div>
      </footer>

      {/* Modals */}
      {showPrivacy && (
        <Modal
          title="Privacy Policy"
          content={privacyContent}
          onClose={() => setShowPrivacy(false)}
        />
      )}
      {showTerms && (
        <Modal
          title="Terms of Use"
          content={termsContent}
          onClose={() => setShowTerms(false)}
        />
      )}
    </>
  );
};

export default Footer;
