import NoticePopup from '@/components/NoticePopup';
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
      <CardHeader className="pb-2">
        <div className="w-14 h-14 rounded-lg bg-techori-purple/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-600 mb-4 min-h-[80px]">
          {description}
        </CardDescription>
        <Link
          to={link}
          className="inline-flex items-center text-techori-purple hover:text-techori-blue font-medium"
        >
          Learn more <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardContent>
    </Card>
  );
};

const ServiceHighlights = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive technology solutions tailored to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <ServiceCard
            title="IT Solutions"
            description="Comprehensive IT infrastructure management and support services to optimize your business operations."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-techori-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            }
            link="/it-solutions"
          />
          <ServiceCard
            title="Web & App Development"
            description="Custom websites and mobile apps that deliver exceptional user experiences and drive business results."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-techori-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                <polyline points="2 17 12 22 22 17"></polyline>
                <polyline points="2 12 12 17 22 12"></polyline>
              </svg>
            }
            link="/webapp-development"
          />
          <ServiceCard
            title="Public Wi-Fi Solutions service"
            description="Reliable and secure wireless connectivity solutions for public spaces and business environments."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-techori-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
            }
            link="/Wifi-solutions"
          />
                    <ServiceCard
            title="Saas Product"
            description="Reliable and secure wireless connectivity solutions for public spaces and business environments."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-techori-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                <line x1="12" y1="20" x2="12.01" y2="20"></line>
              </svg>
            }
            link="/saas-products"
          />
          <ServiceCard
            title="Robotics Development"
            description="Cutting-edge robotics solutions to automate processes and enhance productivity in various industries."
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-techori-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="10" rx="2"></rect>
                <circle cx="12" cy="5" r="2"></circle>
                <path d="M12 7v4"></path>
                <line x1="8" y1="16" x2="8" y2="16"></line>
                <line x1="16" y1="16" x2="16" y2="16"></line>
              </svg>
            }
            link="/robotics-development.tsx"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
