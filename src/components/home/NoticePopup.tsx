import React, { useEffect, useState } from 'react';

const NoticePopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(true);

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    // Optional: Auto-close after 15 seconds
    const timer = setTimeout(() => setShowPopup(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-60">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 border border-yellow-400 relative">
        <button
          onClick={handleClose}
          className="absolute top-2 right-4 text-gray-500 hover:text-red-600 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center">
          महत्वपूर्ण सूचना / Important Notice
        </h2>
        <div className="text-gray-800 space-y-4 text-base">
          <p>
    यह सूचना हमारे सभी ग्राहकों एवं कर्मचारियों के लिए है।
  </p>

  <p>
    हम आपको सूचित करना चाहते हैं कि हमारी संस्था ने एक रणनीतिक व्यवसायिक निर्णय के तहत, 
    <strong>दिनांक 15 मई 2025 से</strong> टर्की एवं अज़रबैजान में हमारे सभी प्रकार के व्यावसायिक कार्यों और व्यापारिक गतिविधियों को 
    <strong>सौहार्द्रपूर्ण एवं मैत्री भाव</strong> के साथ <strong>पूर्ण रूप से बंद</strong> करने का निर्णय लिया है।
  </p>

  <p>
    यह निर्णय आपसी समझ और सम्मान के साथ लिया गया है, जिसमें किसी भी प्रकार की दुर्भावना या राजनीतिक उद्देश्य नहीं है। 
    यह पूरी तरह से संसाधनों के पुनःआवंटन और रणनीतिक व्यापारिक योजना के अंतर्गत लिया गया कदम है।
  </p>

  <p>
    हम टर्की एवं अज़रबैजान में अब तक हमारे साथ जुड़े रहे सभी ग्राहकों, सहयोगियों और कर्मचारियों का हृदय से आभार व्यक्त करते हैं 
    और आशा करते हैं कि भविष्य में हमारे संबंध सौहार्द्रपूर्ण बने रहेंगे।
  </p>

  <hr class="border-yellow-300" />

  <p>
    <strong>This notice is for all our valued customers and employees.</strong>
  </p>

  <p>
    We would like to inform you that effective from <strong>15th May 2025</strong>, our organization has made a strategic business decision 
    to <strong>permanently discontinue all types of business operations and commercial activities in Turkey and Azerbaijan</strong>, 
    conducted in the spirit of mutual respect and friendship.
  </p>

  <p>
    This decision has been made amicably, with no political or negative intent. 
    It is part of a strategic business restructuring and resource reallocation. 
    We sincerely appreciate the continued support and cooperation of our clients, partners, and employees in these countries.
  </p>
          <p className="font-semibold text-right">— TECHORI From Rishishwar Industry Private Limited</p>
        </div>
      </div>
    </div>
  );
};

export default NoticePopup;
