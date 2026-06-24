import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <div id="terms-and-conditions" className="max-w-4xl mx-auto px-6 py-20 text-gray-300">
      <Helmet>
        <title>Terms & Conditions | MC Heating & Plumbing</title>
      </Helmet>

      <h1 className="text-4xl font-bold text-white mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>

      <div className="prose prose-invert max-w-none space-y-8 text-white/80">
        <h2 className="text-2xl font-semibold text-white">1. Services</h2>
        <p>MC Heating & Plumbing provides boiler installation, servicing, repairs, central heating, bathroom installations, and general plumbing work in Birmingham and surrounding areas.</p>

        <h2 className="text-2xl font-semibold text-white">2. Quotes & Pricing</h2>
        <p>All quotes are valid for 30 days. Final price may vary if additional work is required after inspection.</p>

        <h2 className="text-2xl font-semibold text-white">3. Payment</h2>
        <p>Payment is due on completion of work unless otherwise agreed. We accept bank transfer and cash.</p>

        <h2 className="text-2xl font-semibold text-white">4. Guarantee</h2>
        <p>We provide guarantees on parts and labour as per manufacturer’s warranty and our standard terms.</p>

        <h2 className="text-2xl font-semibold text-white">5. Cancellation</h2>
        <p>24 hours notice is required for cancellations. Late cancellations may incur a call-out fee.</p>

        <h2 className="text-2xl font-semibold text-white">6. Liability</h2>
        <p>Our liability is limited to the value of the services provided. We are fully insured.</p>

        <p className="text-sm text-white/50 mt-16">These Terms & Conditions are governed by the laws of England and Wales.</p>
      </div>
    </div>
  );
};

export default TermsAndConditions;
