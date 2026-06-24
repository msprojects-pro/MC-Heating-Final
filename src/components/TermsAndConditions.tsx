import { Helmet } from 'react-helmet-async';

const TermsAndConditions = () => {
  return (
    <div id="terms-and-conditions" className="max-w-4xl mx-auto px-6 py-20 text-gray-300 border-t border-white/10">
      <Helmet>
        <title>Terms and Conditions | MC Heating & Plumbing</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-white mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-500 mb-12">Last updated: June 2026</p>
      
      <div className="prose prose-invert max-w-none space-y-6 text-white/80">
        <p>Paste your full Terms and Conditions content here.</p>
        {/* Add the complete text here */}
      </div>
    </div>
  );
};

export default TermsAndConditions;