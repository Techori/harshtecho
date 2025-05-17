import React, { FC } from "react";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Globe,
  Smartphone,
  ShoppingCart,
  Code,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

interface Process {
  step: string;
  phase: string;
  tasks: string[];
}

interface Technology {
  name: string;
}

const WebAppDevelopment: FC = () => {
  const services: Service[] = [
    {
      icon: <Globe className="h-10 w-10 text-techori-purple" />,
      title: "Website Development",
      description: "Custom websites designed to showcase your brand and drive conversions.",
      features: ["Responsive Design", "SEO Optimization", "Content Management", "Performance Tuning"],
    },
    {
      icon: <Smartphone className="h-10 w-10 text-techori-purple" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["iOS & Android Apps", "Cross-Platform Solutions", "App Store Support", "Performance Optimization"],
    },
    {
      icon: <ShoppingCart className="h-10 w-10 text-techori-purple" />,
      title: "E-commerce Solutions",
      description: "Complete online store development with seamless payment processing.",
      features: ["Custom E-commerce", "Payment Integration", "Inventory Management", "Customer Portal"],
    },
    {
      icon: <Code className="h-10 w-10 text-techori-purple" />,
      title: "Web Application Development",
      description: "Complex web applications to streamline your business processes.",
      features: ["SaaS Applications", "Custom Dashboards", "API Development", "Third-party Integrations"],
    },
  ];

  const processes: Process[] = [
    {
      step: "01",
      phase: "Discovery & Planning",
      tasks: ["Requirements Analysis", "User Research", "Technology Selection", "Project Roadmap"],
    },
    {
      step: "02",
      phase: "Design & Development",
      tasks: ["UI/UX Design", "Iterative Development", "Quality Assurance", "Client Review"],
    },
    {
      step: "03",
      phase: "Deployment & Support",
      tasks: ["Launch Preparation", "Deployment", "Training & Documentation", "Ongoing Maintenance"],
    },
  ];

  const technologies: Technology[] = [
    { name: "React" },
    { name: "Angular" },
    { name: "Vue.js" },
    { name: "Node.js" },
    { name: "Laravel" },
    { name: "Django" },
    { name: "Swift" },
    { name: "Kotlin" },
    { name: "Flutter" },
    { name: "React" },
    { name: "Angular" },
    { name: "Vue.js" },
    { name: "Node.js" },
    { name: "Laravel" },
    { name: "Django" },
    { name: "Flask" },
    { name: "PHP" },
    { name: "Swift" },
    { name: "Kotlin" },
    { name: "Flutter" },
    { name: "React Native" },
    { name: "Svelte" },
    { name: "Next.js" },
    { name: "Nuxt.js" },
    { name: "Bootstrap" },
    { name: "Tailwind CSS" },
    { name: "Express.js" },
    { name: "FastAPI" },
    { name: "Ruby on Rails" },
    { name: "Spring Boot" },
    { name: "ASP.NET Core" },
    { name: "Go" },
    { name: "Xamarin" },
    { name: "Ionic" },
    { name: "Capacitor.js" },
    { name: "Drupal" },
    { name: "Joomla" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "Terraform" },
    { name: "MySQL" },
    { name: "PostgreSQL" },
    { name: "MongoDB" },
    { name: "Firebase" },
    { name: "Redis" },
    { name: "TensorFlow" },
    { name: "PyTorch" },
    { name: "OpenCV" },
    { name: "GraphQL" },
    { name: "REST API" },
    { name: "Ajax" },
    { name: "Electron.js" },
    { name: "Three.js" },
    { name: "Unity" },
    { name: "Unreal Engine" },
    { name: "React Native" },
    { name: "Shopify" },
  ];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/600x400?text=Web+App+Development";
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-r from-techori-purple/10 to-techori-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Web & App Development</h1>
            <p className="text-xl text-gray-700 mb-8">
              Custom digital solutions that deliver exceptional user experiences
            </p>
            <Button
              asChild
              className="bg-techori-purple hover:bg-techori-blue transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Start your web or app development project"
            >
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-all duration-500 order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                alt="Web Development"
                className="w-full h-auto object-cover"
                onError={handleImageError}
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-bold mb-6">Cutting-Edge Web & Mobile Development</h2>
              <p className="text-gray-700 mb-6">
                We design and develop custom websites and mobile applications that not only look great
                but also deliver exceptional user experiences and drive business results.
              </p>
              <p className="text-gray-700 mb-6">
                Our development team stays ahead of the latest technologies and trends to build solutions
                that are fast, secure, and scalable for businesses of all sizes.
              </p>
              <div className="space-y-4">
                {[
                  "Custom website development",
                  "Mobile app development (iOS & Android)",
                  "E-commerce solutions",
                  "Progressive Web Applications (PWAs)",
                  "UI/UX design and optimization",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-techori-purple flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Services</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              End-to-end digital solutions for your unique business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 rounded-lg bg-techori-purple/10 flex items-center justify-center mb-6 group-hover:bg-techori-purple/20 transition-all">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-700 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Development Process</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              A proven methodology for delivering successful digital products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processes.map((process, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-techori-purple"
              >
                <div className="text-5xl font-bold text-techori-purple/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-3">{process.phase}</h3>
                <ul className="space-y-2">
                  {process.tasks.map((task, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-techori-purple" />
                      <span className="text-gray-700">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technologies We Use</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              We work with a wide range of modern technologies to build robust digital solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="font-medium text-gray-800">{tech.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-techori-purple to-techori-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Digital Product?</h2>
            <p className="text-xl opacity-90 mb-8">
              Let's discuss how we can bring your vision to life with our web and app development services.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-techori-purple hover:bg-gray-100 hover:text-techori-blue px-8 transform hover:-translate-y-1 transition-all shadow-xl"
              aria-label="Discuss your web or app development project"
            >
              <Link to="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WebAppDevelopment;
