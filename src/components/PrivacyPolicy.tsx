import { Helmet } from 'react-helmet-async';

const PrivacyPolicy = () => {
  return (
    <div id="privacy-policy" className="max-w-4xl mx-auto px-6 py-20 text-gray-300">
      <Helmet>
        <title>Privacy Policy | MC Heating & Plumbing</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-white mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>

      <div className="prose prose-invert max-w-none space-y-8 text-white/80">
        <p>MC Heating & Plumbing ("we", "us", or "our") respects your privacy and is committed to protecting your personal data.</p>

        <h2 className="text-2xl font-semibold text-white mt-12">Information We Collect</h2>
        <p>We collect personal information such as your name, phone number, email address, and property details when you request a quote, book a service, or contact us.</p>

        <h2 className="text-2xl font-semibold text-white mt-12">How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>To provide heating and plumbing services</li>
          <li>To communicate with you regarding appointments and quotes</li>
          <li>To improve our services and respond to your enquiries</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white mt-12">Data Sharing</h2>
        <p>We do not sell your personal data. We may share your information with trusted third parties only when necessary to deliver our services (e.g., payment processors or suppliers).</p>

        <h2 className="text-2xl font-semibold text-white mt-12">Your Rights</h2>
        <p>You have the right to access, correct, or delete your personal data. Please contact us at <a href="mailto:mitchcheating@gmail.com" className="text-primary hover:underline">mitchcheating@gmail.com</a>.</p>

        <p className="text-sm text-white/50 mt-16">This Privacy Policy is governed by UK law.</p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
