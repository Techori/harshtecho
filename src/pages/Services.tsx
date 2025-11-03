
import React from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Wrench, Code, Wifi, Bot, ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      title: "IT Solutions",
      description: "Comprehensive IT infrastructure support, security solutions,and managed services designed to optimize your business operations. Our services start from ₹25,000",
      icon: <Wrench className="h-12 w-12 text-techori-blue" />,
      features: ["Network Infrastructure", "Cybersecurity", "Cloud Migration", "IT Consulting"],
      link: "/it-solutions"
    },
    {
      title: "Web & App Development",
      description: "Custom websites and mobile applications built with cutting-edge technologies and exceptional user experiences. Our services start from ₹50,000",
      icon: <Code className="h-12 w-12 text-techori-blue" />,
      features: ["Responsive Websites", "Mobile Apps", "E-commerce", "Custom Web Platforms"],
      link: "/webapp-development"
    },
    {
      title: "Public Wi-Fi Solutions",
      description: "Reliable, secure, and high-performance wireless connectivity solutions for businesses, events, and public spaces. our services start from ₹35,000",
      icon: <Wifi className="h-12 w-12 text-techori-blue" />,
      features: ["Analytics Dashboard", "Captive Portal", "Multi-location Setup", "Advanced Security"],
      link: "/WiFI-solutions"
    },
    {
      title: "Robotics Development",
      description: "Innovative robotics solutions that automate processes, increase efficiency, and transform business operations. our services start from ₹250,000",
      icon: <Bot className="h-12 w-12 text-techori-blue" />,
      features: ["Automation Solutions", "Custom Robotics", "AI Integration", "Industrial Applications"],
      link: "/robotics-development"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-700 mb-8">
              Comprehensive IT solutions tailored to transform your business
            </p>
            <Button asChild className="bg-techori-purple hover:bg-techori-blue">
              <Link to="/contact">Request a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-techori-purple"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="ghost" className="text-techori-purple hover:text-techori-blue hover:bg-transparent p-0 flex items-center">
                    <Link to={service.link}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              How we deliver exceptional results for every client
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "01",
                title: "Consultation",
                description: "We begin by understanding your business objectives, challenges, and requirements."
              },
              {
                step: "02",
                title: "Strategy",
                description: "Our team develops a comprehensive plan tailored to your specific needs."
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the plan with precision, keeping you informed at every step."
              },
              {
                step: "04",
                title: "Support",
                description: "Our relationship continues with ongoing support and optimization."
              }
            ].map((process, index) => (
              <div key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 relative z-10">
                  <div className="text-5xl font-bold text-techori-purple/20 mb-4">{process.step}</div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-700">{process.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 left-full w-8 h-0.5 bg-techori-blue/30 z-0 transform -translate-y-1/2"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Hear from businesses that have transformed with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                quote: "TECHORI transformed our entire IT infrastructure, resulting in a 40% increase in operational efficiency.",
                author: "Sarah Johnson",
                position: "CTO, GlobalTech Inc.",
                service: "IT Solutions"
              },
              {
                quote: "The mobile app developed by TECHORI has revolutionized how we engage with our customers. User satisfaction is up by 85%.",
                author: "Michael Chen",
                position: "Marketing Director, RetailPlus",
                service: "Web & App Development"
              },
              {
                quote: "Their public Wi-Fi solution has not only improved connectivity at our venues but has provided valuable customer insights.",
                author: "Elena Rodriguez",
                position: "Operations Manager, EventSpace",
                service: "Public Wi-Fi Solutions"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="text-2xl text-gray-400 mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-sm text-techori-purple mt-1">Service: {testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl opacity-90 mb-8">
              Get in touch with our team to discuss how TECHORI can help you achieve your technology goals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-techori-purple hover:bg-gray-100 px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 px-8">
                <Link to="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
