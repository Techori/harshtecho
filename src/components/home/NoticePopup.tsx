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
            हम आपको सूचित करना चाहते हैं कि हमारी संस्था ने एक रणनीतिक निर्णय के तहत, टर्की एवं अज़रबैजान में हमारे सभी प्रकार के व्यावसायिक कार्यों और व्यापारिक गतिविधियों को <strong>सौहार्द्रपूर्ण एवं मैत्री भाव</strong> के साथ <strong>पूर्ण रूप से बंद</strong> करने का निर्णय लिया है।
          </p>
          <p>
            यह निर्णय आपसी समझ और सम्मान के साथ लिया गया है, जिसमें किसी भी प्रकार की दुर्भावना नहीं है। हम इन देशों के साथ भविष्य में अच्छे संबंध बनाए रखने की आशा करते हैं और उन सभी सहयोगियों व ग्राहकों का हृदय से आभार व्यक्त करते हैं जिन्होंने अब तक हमारा समर्थन किया।
          </p>
          <hr className="border-yellow-300" />
          <p>
            We would like to inform you that our organization has made a strategic decision to <strong>permanently discontinue all types of business operations and commercial activities in Turkey and Azerbaijan</strong>, conducted in a spirit of mutual respect and friendship.
          </p>
          <p>
            This decision has been taken amicably and in good faith, without any conflict or negativity. We sincerely appreciate the support and cooperation extended by our partners and clients in these countries over the years.
          </p>
          <p className="font-semibold text-right">— Rishishwar Industry Private Limited</p>
        </div>
      </div>
    </div>
  );
};

export default NoticePopup;
