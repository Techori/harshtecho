import { useState } from "react";
import Layout from "@/components/layout/Layout";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Terms: FC = () => {
  const [language, setLanguage] = useState<"english" | "hindi">("english");

  return (
    <Layout>
      <section className="bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <title>Terms of Service | TECHORI</title>
        <meta name="description" content="TECHORI's Terms of Service governing your use of our website and services." />
        </section>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Terms of Service</h1>
            <p className="text-xl text-gray-700 mb-8">
              Understand the rules and guidelines for using our website and services.
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Contact us about our terms of service"
            >
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Language Selector Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Tabs defaultValue="english" onValueChange={(value) => setLanguage(value as "english" | "hindi")}>
              <TabsList className="grid w-[200px] grid-cols-2 mb-8">
                <TabsTrigger value="english">English</TabsTrigger>
                <TabsTrigger value="hindi">हिंदी</TabsTrigger>
              </TabsList>
            </Tabs>
            <p className="text-lg mb-6">Last Updated: May 6, 2025</p>
          </div>
        </div>
      </section>

      {language === "english" ? (
        <>
          {/* Introduction Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">1. Introduction</h2>
                <p className="text-gray-700 mb-6">
                  Welcome to TECHORI. By accessing our website at www.techori.com, you agree to be bound by these Terms of Service, all applicable laws and regulations, 
                  and agree that you are responsible for compliance with any applicable local laws.
                </p>
                <p className="text-gray-700">
                  If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are 
                  protected by applicable copyright and trademark law.
                </p>
              </div>
            </div>
          </section>

          {/* Use License Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">2. Use License</h2>
                <p className="text-gray-700 mb-6">
                  Permission is granted to temporarily download one copy of the materials on TECHORI's website for personal, non-commercial transitory viewing only. 
                  This is the grant of a license, not a transfer of title, and under this license you may not:
                </p>
                <ul className="space-y-4">
                  {[
                    "Modify or copy the materials",
                    "Use the materials for any commercial purpose or for any public display",
                    "Attempt to reverse engineer any software contained on TECHORI's website",
                    "Remove any copyright or other proprietary notations from the materials",
                    "Transfer the materials to another person or 'mirror' the materials on any other server",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-6">
                  This license shall automatically terminate if you violate any of these restrictions and may be terminated by TECHORI at any time.
                </p>
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">3. Services</h2>
                <p className="text-gray-700">
                  TECHORI provides various IT services, including web and mobile app development, Wi-Fi solutions, and robotics development. The specific terms 
                  relating to each service will be outlined in separate agreements for clients of such services.
                </p>
              </div>
            </div>
          </section>

          {/* Payments and Refunds Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">4. Payments and Refunds</h2>
                <p className="text-gray-700 font-bold mb-6">
                  ALL PAYMENTS MADE TO TECHORI ARE STRICTLY NON-REFUNDABLE.
                </p>
                <p className="text-gray-700 mb-6">
                  By making a payment for any of our services, products, or subscriptions, you acknowledge and agree that:
                </p>
                <ul className="space-y-4">
                  {[
                    "All fees paid to TECHORI are non-refundable under any circumstances.",
                    "There is no cooling-off period once a payment is made.",
                    "In case of service termination by you or by TECHORI, no refunds will be issued for any unused portion of the service period.",
                    "In case of disputes or dissatisfaction with services, TECHORI may, at its sole discretion, offer service credits or alternative solutions, but no monetary refunds will be provided.",

"If a double payment occurs due to any technical error or mistake, we will verify the transaction and process a refund to your original payment method within 7 working days.",

                    "All purchases, orders, and subscription fees are final once processed.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">5. Disclaimer</h2>
                <p className="text-gray-700 mb-6">
                  The materials on TECHORI's website are provided on an 'as is' basis. TECHORI makes no warranties, expressed or implied, and hereby disclaims and 
                  negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, 
                  or non-infringement of intellectual property or other violation of rights.
                </p>
                <p className="text-gray-700">
                  Further, TECHORI does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials 
                  on its website or otherwise relating to such materials or on any sites linked to this site.
                </p>
              </div>
            </div>
          </section>

          {/* Limitations Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">6. Limitations</h2>
                <p className="text-gray-700">
                  In no event shall TECHORI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to 
                  business interruption) arising out of the use or inability to use the materials on TECHORI's website, even if TECHORI or a TECHORI authorized 
                  representative has been notified orally or in writing of the possibility of such damage.
                </p>
              </div>
            </div>
          </section>

          {/* Accuracy of Materials Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">7. Accuracy of Materials</h2>
                <p className="text-gray-700">
                  The materials appearing on TECHORI's website could include technical, typographical, or photographic errors. TECHORI does not warrant that any of 
                  the materials on its website are accurate, complete, or current. TECHORI may make changes to the materials contained on its website at any time 
                  without notice.
                </p>
              </div>
            </div>
          </section>

          {/* Links Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">8. Links</h2>
                <p className="text-gray-700">
                  TECHORI has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of 
                  any link does not imply endorsement by TECHORI of the site. Use of any such linked website is at the user's own risk.
                </p>
              </div>
            </div>
          </section>

          {/* Modifications Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">9. Modifications</h2>
                <p className="text-gray-700">
                  TECHORI may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the 
                  then current version of these terms of service.
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">10. Governing Law</h2>
                <p className="text-gray-700">
                  These terms and conditions are governed by and construed in accordance with the laws of the United States, and you irrevocably submit to the 
                  exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">11. Privacy Policy</h2>
                <p className="text-gray-700">
                  Your use of TECHORI's website is also governed by our Privacy Policy, which is incorporated herein by reference. Please review our Privacy Policy at 
                  <Link to="/privacy-policy" className="text-techori-purple hover:underline ml-1">Privacy Policy</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">12. Intellectual Property</h2>
                <p className="text-gray-700">
                  The TECHORI name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of TECHORI or its affiliates or 
                  licensors. You must not use such marks without the prior written permission of TECHORI.
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">13. Prohibited Uses</h2>
                <p className="text-gray-700 mb-6">
                  You may use the TECHORI website only for lawful purposes and in accordance with these Terms of Service. You agree not to use the website:
                </p>
                <ul className="space-y-4">
                  {[
                    "In any way that violates any applicable federal, state, local, or international law or regulation.",
                    "To transmit, or procure the sending of, any advertising or promotional material, including any 'junk mail', 'chain letter,' 'spam,' or any other similar solicitation.",
                    "To impersonate or attempt to impersonate TECHORI, a TECHORI employee, another user, or any other person or entity.",
                    "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by TECHORI, may harm TECHORI or users of the website, or expose them to liability.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* User Contributions Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">14. User Contributions</h2>
                <p className="text-gray-700 mb-6">
                  The TECHORI website may contain message boards, chat rooms, personal web pages or profiles, forums, bulletin boards, and other interactive features 
                  that allow users to post, submit, publish, display, or transmit to other users or other persons content or materials on or through the website.
                </p>
                <p className="text-gray-700">
                  All user contributions must comply with the content standards set out in these Terms of Service. Any user contribution you post to the site will be 
                  considered non-confidential and non-proprietary.
                </p>
              </div>
            </div>
          </section>

          {/* Termination Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">15. Termination</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI may terminate your access to all or any part of the website at any time, with or without cause, with or without notice, effective immediately. 
                  If you wish to terminate this agreement, you may simply discontinue using the website.
                </p>
                <p className="text-gray-700">
                  All provisions of the Terms of Service which by their nature should survive termination shall survive termination, including, without limitation, 
                  ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us Section */}
          <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Have Questions?</h2>
                <p className="text-xl opacity-90 mb-8">
                  If you have any questions about these Terms of Service, please reach out to us.
                </p>
                <p className="text-lg mb-6">
                  <strong>Email:</strong> legal@techori.com<br />
                  <strong>Address:</strong> 123 Tech Avenue, Innovation Park, CA 94088
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
                  aria-label="Contact us about our terms of service"
                >
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Introduction Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">1. परिचय</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI में आपका स्वागत है। www.techori.com पर हमारी वेबसाइट का उपयोग करके, आप इन सेवा की शर्तों, सभी लागू कानूनों और नियमों से बाध्य होने के लिए सहमत होते हैं,
                  और आप किसी भी लागू स्थानीय कानूनों के अनुपालन के लिए जिम्मेदार हैं।
                </p>
                <p className="text-gray-700">
                  यदि आप इन शर्तों में से किसी से भी सहमत नहीं हैं, तो आपको इस साइट का उपयोग करने या इसे एक्सेस करने से मना किया जाता है। इस वेबसाइट में मौजूद सामग्री
                  लागू कॉपीराइट और ट्रेडमार्क कानून द्वारा संरक्षित है।
                </p>
              </div>
            </div>
          </section>

          {/* Use License Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">2. उपयोग लाइसेंस</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI की वेबसाइट पर सामग्री की एक प्रति को केवल व्यक्तिगत, गैर-वाणिज्यिक क्षणिक देखने के लिए अस्थायी रूप से डाउनलोड करने की अनुमति दी जाती है।
                  यह एक लाइसेंस का अनुदान है, न कि शीर्षक का हस्तांतरण, और इस लाइसेंस के तहत आप निम्नलिखित नहीं कर सकते:
                </p>
                <ul className="space-y-4">
                  {[
                    "सामग्री को संशोधित या कॉपी करना",
                    "सामग्री का उपयोग किसी भी वाणिज्यिक प्रयोजन या किसी भी सार्वजनिक प्रदर्शन के लिए करना",
                    "TECHORI की वेबसाइट पर मौजूद किसी भी सॉफ्टवेयर को रिवर्स इंजीनियर करने का प्रयास करना",
                    "सामग्री से कॉपीराइट या अन्य मालिकाना अंकन हटाना",
                    "सामग्री को किसी अन्य व्यक्ति को स्थानांतरित करना या किसी अन्य सर्वर पर सामग्री को 'मिरर' करना",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-700 mt-6">
                  यह लाइसेंस स्वचालित रूप से समाप्त हो जाएगा यदि आप इनमें से किसी भी प्रतिबंध का उल्लंघन करते हैं और TECHORI द्वारा किसी भी समय समाप्त किया जा सकता है।
                </p>
              </div>
            </div>
          </section>

          {/* Services Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">3. सेवाएँ</h2>
                <p className="text-gray-700">
                  TECHORI विभिन्न आईटी सेवाएं प्रदान करता है, जिनमें वेब और मोबाइल ऐप डेवलपमेंट, वाई-फाई समाधान, और रोबोटिक्स डेवलपमेंट शामिल हैं। प्रत्येक सेवा से संबंधित विशिष्ट शर्तें
                  उस सेवा के ग्राहकों के लिए अलग समझौतों में उल्लिखित की जाएंगी।
                </p>
              </div>
            </div>
          </section>

          {/* Payments and Refunds Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">4. भुगतान और रिफंड</h2>
                <p className="text-gray-700 font-bold mb-6">
                  TECHORI को किए गए सभी भुगतान सख्ती से अप्रतिदेय हैं।
                </p>
                <p className="text-gray-700 mb-6">
                  हमारी किसी भी सेवा, उत्पाद या सदस्यता के लिए भुगतान करके, आप स्वीकार करते हैं और सहमत होते हैं कि:
                </p>
                <ul className="space-y-4">
                  {[
                    "TECHORI को भुगतान किए गए सभी शुल्क किसी भी परिस्थिति में अप्रतिदेय हैं।",
                    "भुगतान करने के बाद कोई कूलिंग-ऑफ अवधि नहीं है।",
                    "आपके द्वारा या TECHORI द्वारा सेवा समाप्ति के मामले में, सेवा अवधि के किसी भी अप्रयुक्त हिस्से के लिए कोई रिफंड नहीं दिया जाएगा।",
                    "सेवाओं के साथ विवादों या असंतुष्टि के मामले में, TECHORI अपने विवेकाधिकार पर, सेवा क्रेडिट या वैकल्पिक समाधान प्रदान कर सकता है, लेकिन कोई मौद्रिक रिफंड नहीं दिया जाएगा।",
                    "सभी खरीदारी, आदेश और सदस्यता शुल्क प्रोसेस होने के बाद अंतिम हैं।",

 "यदि किसी तकनीकी त्रुटि या गलती से आपका डबल पेमेंट हो जाता है, तो हम उसे सत्यापन के बाद 7 कार्य दिवसों के भीतर आपके मूल भुगतान माध्यम में रिफंड कर देंगे।",

                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Disclaimer Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">5. अस्वीकरण</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI की वेबसाइट पर सामग्री 'जैसी है' के आधार पर प्रदान की जाती है। TECHORI कोई वारंटी नहीं देता है, व्यक्त या निहित, और एतद्द्वारा अस्वीकार करता है और
                  सभी अन्य वारंटियों को नकारता है, जिसमें, बिना किसी सीमा के, व्यापारिकता की निहित वारंटी या शर्तें, किसी विशेष उद्देश्य के लिए उपयुक्तता,
                  या बौद्धिक संपदा के गैर-उल्लंघन या अधिकारों के अन्य उल्लंघन शामिल हैं।
                </p>
                <p className="text-gray-700">
                  इसके अलावा, TECHORI वारंटी नहीं देता है या अपनी वेबसाइट पर सामग्री के उपयोग की सटीकता, संभावित परिणामों, या विश्वसनीयता के बारे में कोई प्रतिनिधित्व नहीं करता है
                  या अन्यथा उस सामग्री से संबंधित या इस साइट से जुड़ी किसी भी साइट पर।
                </p>
              </div>
            </div>
          </section>

          {/* Limitations Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">6. सीमाएँ</h2>
                <p className="text-gray-700">
                  किसी भी स्थिति में TECHORI या उसके आपूर्तिकर्ता किसी भी नुकसान (बिना किसी सीमा के, डेटा या लाभ के नुकसान, या व्यावसायिक
                  व्यवधान के कारण होने वाले नुकसान सहित) के लिए उत्तरदायी नहीं होंगे जो TECHORI की वेबसाइट पर सामग्री का उपयोग करने या उपयोग करने में असमर्थता से उत्पन्न होते हैं,
                  भले ही TECHORI या TECHORI के अधिकृत प्रतिनिधि को मौखिक रूप से या लिखित रूप में ऐसे नुकसान की संभावना के बारे में सूचित किया गया हो।
                </p>
              </div>
            </div>
          </section>

          {/* Accuracy of Materials Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">7. सामग्री की सटीकता</h2>
                <p className="text-gray-700">
                  TECHORI की वेबसाइट पर दिखाई देने वाली सामग्री में तकनीकी, टाइपोग्राफिकल, या फोटोग्राफिक त्रुटियां शामिल हो सकती हैं। TECHORI वारंटी नहीं देता है कि अपनी वेबसाइट पर
                  की कोई भी सामग्री सटीक, पूर्ण, या वर्तमान है। TECHORI अपनी वेबसाइट पर मौजूद सामग्री में किसी भी समय बिना सूचना के परिवर्तन कर सकता है।
                </p>
              </div>
            </div>
          </section>

          {/* Links Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">8. लिंक्स</h2>
                <p className="text-gray-700">
                  TECHORI ने अपनी वेबसाइट से जुड़ी सभी साइटों की समीक्षा नहीं की है और किसी भी ऐसी लिंक की साइट की सामग्री के लिए जिम्मेदार नहीं है। किसी भी
                  लिंक का समावेश TECHORI द्वारा साइट के समर्थन का संकेत नहीं देता है। ऐसी किसी भी लिंक की गई वेबसाइट का उपयोग उपयोगकर्ता के अपने जोखिम पर है।
                </p>
              </div>
            </div>
          </section>

          {/* Modifications Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">9. संशोधन</h2>
                <p className="text-gray-700">
                  TECHORI अपनी वेबसाइट के लिए इन सेवा की शर्तों को किसी भी समय बिना सूचना के संशोधित कर सकता है। इस वेबसाइट का उपयोग करके, आप इन सेवा की शर्तों के
                  तब वर्तमान संस्करण से बाध्य होने के लिए सहमत होते हैं।
                </p>
              </div>
            </div>
          </section>

          {/* Governing Law Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">10. शासी कानून</h2>
                <p className="text-gray-700">
                  ये नियम और शर्तें संयुक्त राज्य अमेरिका के कानूनों के अनुसार नियंत्रित और निर्मित हैं, और आप उस स्थान की अदालतों के अनन्य अधिकार क्षेत्र के अधीन अपरिवर्तनीय रूप से प्रस्तुत करते हैं।
                </p>
              </div>
            </div>
          </section>

          {/* Privacy Policy Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">11. गोपनीयता नीति</h2>
                <p className="text-gray-700">
                  TECHORI की वेबसाइट का आपका उपयोग हमारी गोपनीयता नीति द्वारा भी नियंत्रित होता है, जो यहां संदर्भ द्वारा शामिल की गई है। कृपया हमारी गोपनीयता नीति पर समीक्षा करें
                  <Link to="/privacy-policy" className="text-techori-purple hover:underline ml-1">गोपनीयता नीति</Link>.
                </p>
              </div>
            </div>
          </section>

          {/* Intellectual Property Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">12. बौद्धिक संपदा</h2>
                <p className="text-gray-700">
                  TECHORI नाम, लोगो, और सभी संबंधित नाम, लोगो, उत्पाद और सेवा नाम, डिज़ाइन, और स्लोगन TECHORI या उसके सहयोगियों या
                  लाइसेंसदाताओं के ट्रेडमार्क हैं। आपको TECHORI की पूर्व लिखित अनुमति के बिना ऐसे निशानों का उपयोग नहीं करना चाहिए।
                </p>
              </div>
            </div>
          </section>

          {/* Prohibited Uses Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">13. निषिद्ध उपयोग</h2>
                <p className="text-gray-700 mb-6">
                  आप TECHORI वेबसाइट का उपयोग केवल कानूनी उद्देश्यों के लिए और इन सेवा की शर्तों के अनुसार कर सकते हैं। आप इस वेबसाइट का उपयोग न करने के लिए सहमत हैं:
                </p>
                <ul className="space-y-4">
                  {[
                    "किसी भी तरह से जो किसी भी लागू संघीय, राज्य, स्थानीय, या अंतर्राष्ट्रीय कानून या विनियमन का उल्लंघन करता है।",
                    "किसी भी विज्ञापन या प्रचार सामग्री के प्रसारण के लिए, जिसमें कोई भी 'जंक मेल', 'चेन लेटर,' 'स्पैम,' या कोई अन्य समान याचना शामिल है।",
                    "TECHORI, TECHORI कर्मचारी, किसी अन्य उपयोगकर्ता, या किसी अन्य व्यक्ति या संस्था का प्रतिरूपण करने या प्रतिरूपण करने का प्रयास करने के लिए।",
                    "किसी अन्य आचरण में संलग्न होने के लिए जो वेबसाइट के उपयोग या आनंद को प्रतिबंधित या निषेध करता है, या जो, TECHORI द्वारा निर्धारित, TECHORI या वेबसाइट के उपयोगकर्ताओं को नुकसान पहुंचा सकता है, या उन्हें देयता के संपर्क में ला सकता है।",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* User Contributions Section (Hindi) */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">14. उपयोगकर्ता योगदान</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI वेबसाइट में संदेश बोर्ड, चैट रूम, व्यक्तिगत वेब पेज या प्रोफाइल, फोरम, बुलेटिन बोर्ड, और अन्य इंटरैक्टिव सुविधाएं शामिल हो सकती हैं
                  जो उपयोगकर्ताओं को वेबसाइट पर या उसके माध्यम से अन्य उपयोगकर्ताओं या अन्य व्यक्तियों को सामग्री या सामग्री पोस्ट करने, प्रस्तुत करने, प्रकाशित करने, प्रदर्शित करने, या प्रसारित करने की अनुमति देती हैं।
                </p>
                <p className="text-gray-700">
                  सभी उपयोगकर्ता योगदानों को इन सेवा की शर्तों में निर्धारित सामग्री मानकों का पालन करना होगा। आपके द्वारा साइट पर पोस्ट किया गया कोई भी उपयोगकर्ता योगदान
                  गैर-गोपनीय और गैर-मालिकाना माना जाएगा।
                </p>
              </div>
            </div>
          </section>

          {/* Termination Section (Hindi) */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-6">15. समाप्ति</h2>
                <p className="text-gray-700 mb-6">
                  TECHORI किसी भी समय, किसी भी कारण से, किसी भी सूचना के बिना, प्रभावी रूप से तुरंत, वेबसाइट के सभी या किसी भी भाग तक आपकी पहुंच को समाप्त कर सकता है।
                  यदि आप इस समझौते को समाप्त करना चाहते हैं, तो आप बस वेबसाइट का उपयोग बंद कर सकते हैं।
                </p>
                <p className="text-gray-700">
                  सेवा की शर्तों के सभी प्रावधान जो अपनी प्रकृति के अनुसार समाप्ति के बाद भी बने रहने चाहिए, वे समाप्ति के बाद भी बने रहेंगे, जिसमें, बिना किसी सीमा के,
                  स्वामित्व प्रावधान, वारंटी अस्वीकरण, क्षतिपूर्ति, और देयता की सीमाएं शामिल हैं।
                </p>
              </div>
            </div>
          </section>

          {/* Contact Us Section (Hindi) */}
          <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">प्रश्न हैं?</h2>
                <p className="text-xl opacity-90 mb-8">
                  यदि आपके पास इन सेवा की शर्तों के बारे में कोई प्रश्न हैं, तो कृपया हमसे संपर्क करें।
                </p>
                <p className="text-lg mb-6">
                  <strong>ईमेल:</strong> legal@techori.com<br />
                  <strong>पता:</strong> 123 Tech Avenue, Innovation Park, CA 94088
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
                  aria-label="Contact us about our terms of service"
                >
                  <Link to="/contact">हमसे संपर्क करें</Link>
                </Button>
              </div>
            </div>
          </section>
        </>
      )}
    </Layout>
  );
};

export default Terms;