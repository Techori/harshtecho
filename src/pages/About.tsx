import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building, Users, GraduationCap, Handshake, CheckCircle, Activity, Heart, ArrowRight } from "lucide-react";
import {NoticePopup} from '@/components/NoticePopup';
const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const leaders = [
    {
      name: "Mr. King Raj Rishishwar",
      position: "Managing & visionary Director",
      company: "Rishishwar Industry Private Limited",
      image: "/aboutus/KR Rishishwar.jpg",
    },
    {
      name: "Mr. DInesh kumar sharma",
      position: "Authorized Director",
      company: "Rishishwar Industry Private Limited",
      image: "/aboutus/DInesh kumar sharma.jpg"
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-24 bg-white overflow-hidden h-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About TECHORI</h1>
            <p className="text-xl text-gray-600 mb-10">
              Pioneering digital transformation with innovative IT solutions since 2019
            </p>
          </div>
        </div>
        <div className="absolute bottom-50 left-0 w-full h-16 bg-white" style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%, 0% 100%)" }}></div>
      </section>

      <div className="min-h-screen flex flex-col">
        <main className="flex-grow pt-20">
          {/* About Us Section */}
          <section className="py-12 md:py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-10">
                  <div className="md:w-1/2">
                    <div className="inline-block bg-orange-100 px-3 py-1 rounded-full text-orange-700 font-medium text-sm mb-4">
                      "डिजिटल भारत"
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 mb-4">
                      TECHORI.
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                      At TECHORI, we believe that technology should empower every business — from startups to enterprises — to innovate, grow, and thrive without limits.
                    </p>
                    <Link to="/apply-loan">
                      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className="md:w-1/2">
                    <div className="relative aspect-square md:aspect-[4/3]">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-full h-full">
                          <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-100 rounded-full mix-blend-multiply animate-float opacity-60"></div>
                          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply animate-float opacity-60" style={{ animationDelay: "2s" }}></div>
                          <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl bg-white">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-pink-50 opacity-90"></div>
                            <div className="absolute inset-0 flex items-center justify-center p-6">
                              <div className="text-center">
                                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                                  <Heart className="h-10 w-10 text-orange-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation for All</h3>
                                <p className="text-gray-600">
                                 Empowering individuals and businesses through accessible innovation by delivering advanced IT solutions, smart applications, and public Wi-Fi—enabling inclusive growth in a digitally connected world..
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Who We Are Section */}
          <section className="py-16">
            <div className="container mx-auto px-4 sm:px-6">
              <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row gap-12 items-center">
                  <div className="md:w-1/2">
                    <div className={`rounded-2xl overflow-hidden shadow-lg transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                      <div className="aspect-[4/3] bg-orange-500 relative">
                        <div className="absolute inset-0 bg-black/20"></div>
                        <div className="absolute inset-0 flex items-center justify-center p-8">
                          <div className="text-center">
                            <div className="mb-4 p-4 inline-block rounded-full bg-white">
                              <Users className="h-10 w-10 text-orange-500" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Who We Are</h3>
                            <p className="text-white/90">
                              A leading IT and digital solutions provider, empowering businesses and startups with innovative website portals, mobile applications, robotics development, and public Wi-Fi services — driving digital transformation across industries.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-1/2">
                    <div className={`transition-all duration-500 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "200ms" }}>
                      <h2 className="text-3xl font-bold font-display text-gray-900 mb-6">
                        Our Company
                      </h2>
                      <p className="text-gray-600 mb-6">
                        Techori is a visionary initiative by Rishishwar Industry Private Limited, working under its dynamic leadership. Techori empowers entrepreneurs and local businesses by offering innovative partnership models and digital earning opportunities across Bharat.
                      </p>
                      <div className="space-y-6">
                        {leaders.map((leader, index) => (
                          <div key={index} className="flex items-center gap-4">
                            <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900">{leader.name}</h4>
                              <p className="text-gray-600 text-sm">{leader.position}</p>
                              <p className="text-gray-500 text-sm">{leader.company}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Mission & Vision Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                    alt="TECHORI team collaboration"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-4 rounded-lg shadow-lg hidden md:block">
                    <p className="font-bold">Since July 2024</p>
                    <p>80+ Projects Delivered</p>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission & Vision</h2>
                  <p className="text-gray-600 mb-4">
                    At TECHORI, our mission is to empower businesses through technology, delivering innovative IT solutions that solve real-world problems and drive sustainable growth.
                  </p>
                  <p className="text-gray-600 mb-6">
                    We envision a future where every business, regardless of size, can harness the full potential of technology to achieve operational excellence and competitive advantage in the digital landscape.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Deliver exceptional value through innovative IT solutions",
                      "Foster long-term partnerships built on trust and results",
                      "Stay at the forefront of technological advancements",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-6 w-6 text-orange-500 mr-2 flex-shrink-0" />
                        <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Our Story Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Story</h2>
                <p className="text-gray-600">The journey that shaped who we are today</p>
              </div>
              <div className="relative max-w-4xl mx-auto">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-orange-200"></div>
                {[
                  {
                    year: "2019",
                    title: "Our Beginning",
                    description: "TECHORI was founded with a vision to bridge the gap between complex technology and practical business solutions.",
                  },
                  {
                    year: "2020",
                    title: "Expanding Services",
                    description: "Expanded our service offerings to include mobile app development and public Wi-Fi solutions.",
                  },
                  {
                    year: "2021",
                    title: "Global Reach",
                    description: "Established partnerships with international clients and opened our first overseas office.",
                  },
                  {
                    year: "2023",
                    title: "Innovation Center",
                    description: "Launched our Innovation Lab focused on robotics and emerging technologies.",
                  },
                  {
                    year: "Today",
                    title: "Leading the Industry",
                    description: "Now recognized as an industry leader with over 500 successful projects and clients worldwide.",
                  },
                ].map((item, index) => (
                  <div key={index} className={`relative mb-12 ${index % 2 === 0 ? "md:ml-auto md:mr-[50%]" : "md:mr-auto md:ml-[50%]"} md:w-[45%]`}>
                    <div className="bg-white p-6 rounded-lg shadow-md relative z-10">
                      <div
                        className={`absolute top-6 hidden md:block ${
                          index % 2 === 0 ? "right-0 translate-x-1/2" : "left-0 -translate-x-1/2"
                        } w-4 h-4 rounded-full bg-orange-500`}
                      ></div>
                      <span className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Core Values Section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Our Core Values</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The principles that guide everything we do at TECHORI
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Innovation",
                    description: "We constantly push boundaries to create solutions that set new industry standards.",
                    icon: <Activity className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                  {
                    title: "Excellence",
                    description: "We are committed to delivering the highest quality in every project we undertake.",
                    icon: <GraduationCap className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                  {
                    title: "Collaboration",
                    description: "We believe in the power of teamwork, both internally and with our clients.",
                    icon: <Users className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                  {
                    title: "Integrity",
                    description: "We operate with transparency, honesty, and ethical practices in all our dealings.",
                    icon: <Handshake className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                  {
                    title: "Client-Focused",
                    description: "We prioritize understanding and meeting our clients' unique needs and goals.",
                    icon: <Heart className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                  {
                    title: "Accountability",
                    description: "We take ownership of our work and stand behind every solution we deliver.",
                    icon: <Building className="h-10 w-10 text-orange-500 mb-4" />,
                  },
                ].map((value, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
                    <div className="flex flex-col items-center text-center">
                      {value.icon}
                      <h3 className="text-xl font-bold mb-2 text-gray-900">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Meet Our Directors & Management</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  The talented professionals behind TECHORI's success
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    name: "K.R. Rishishwar",
                    position: "Managing & visionary Director",
                    image: "aboutus/KR Rishishwar.jpg",
                    bio: "With 5+ years in the tech industry, Mr. KR leads TECHORI's vision and strategy Of Our Company.",
                  },
                  {
                    name: "DInesh kumar sharma",
                    position: "Authorised Director Of Rishishwar Industry Private limited",
                    image: "aboutus/DInesh kumar sharma.jpg",
                    bio: "An expert in emerging technologies, Samantha drives our technical innovation.",
                  },
                  {
                    name: "Vrindavan Viharini,",
                    position: "Guardian of Our Companies",
                    image: "aboutus/Vrindavan Viharini.jpg",
                    bio: "Guardian of Rishishwar Industry Private Limited, upholds its values, guiding sustainable growth and community welfare with visionary leadership and ethical direction..",
                  },
                  {
                    name: "Aisha Patel",
                    position: "Lead Designer",
                    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956",
                    bio: "Aisha combines aesthetics and functionality to create exceptional user experiences.",
                  },
                ].map((member, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group">
                    <div className="relative overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                      <p className="text-orange-500 font-medium mb-2">{member.position}</p>
                      <p className="text-gray-600">{member.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Stats Section */}
<section className="py-16 bg-black text-white">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        { number: "80+", label: "Projects Completed" },
        { number: "50+", label: "Happy Clients" },
        { number: "150+", label: "Team Members" },
        { number: "17+", label: "Countries Served" },
      ].map((stat, index) => (
        <div key={index} className="p-6">
          <p className="text-4xl md:text-5xl font-bold mb-2 text-orange-500">{stat.number}</p>
          <p className="text-lg text-gray-300">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


          {/* CTA Section */}
          <section className="py-20 bg-orange-500 text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work with Us?</h2>
                <p className="text-xl opacity-90 mb-8">
                  Partner with TECHORI to transform your business with innovative technology solutions.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button asChild size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-500">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </Layout>
  );
};

export default About;
