import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, MapPin, Truck, Headphones, Code, Users, TrendingUp } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const services = [
    {
      icon: MapPin,
      title: 'GPS Device Installation',
      description: 'Professional installation of advanced GPS tracking devices for your fleet.',
    },
    {
      icon: Truck,
      title: 'Fleet Monitoring',
      description: 'Real-time tracking and monitoring of your entire fleet operations.',
    },
    {
      icon: Headphones,
      title: 'Technical Support',
      description: '24/7 technical support and maintenance for all your systems.',
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed for your specific needs.',
    },
    {
      icon: Users,
      title: 'Consulting & Deployment',
      description: 'Expert consulting and seamless deployment of solutions.',
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and detailed reporting dashboards.',
    },
  ];

  const projects = [
    {
      title: 'NCCF Workflow Tracker',
      description: 'Streamlined workflow management for agricultural operations.',
      image: '/manus-storage/workflow-automation_e9e789f4.png',
    },
    {
      title: 'GPS Deployment Projects',
      description: 'Large-scale GPS deployment across multiple regions.',
      image: '/manus-storage/gps-tracking-illustration_fb83cc73.png',
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom enterprise-level tracking and management solutions.',
      image: '/manus-storage/team-collaboration_1369c663.png',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in">
              <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
                <span className="text-accent font-semibold text-sm">🚀 Innovation Driven</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                Transforming Operations with Technology & Innovation
              </h1>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
                We deliver smart GPS tracking, fleet monitoring, and custom software solutions that drive efficiency and transparency across your operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/services">
                  <a className="btn-primary inline-flex items-center justify-center gap-2">
                    Our Services <ArrowRight size={20} />
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="btn-outline inline-flex items-center justify-center gap-2">
                    Contact Us
                  </a>
                </Link>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative h-96 md:h-full min-h-96 animate-scale-in">
              <img
                src="/manus-storage/hero-dashboard_b0700fc1.png"
                alt="Dashboard"
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Key Services
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Comprehensive solutions to optimize your operations and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`service-${service.title}`}
                  className="card-elevated group hover:shadow-2xl transition-all duration-300"
                  style={{
                    animation: `slideUp 0.5s var(--ease-out) ${idx * 50}ms backwards`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <Icon className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg text-foreground mb-2">
                        {service.title}
                      </h3>
                      <p className="text-foreground/70 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Product Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Visual */}
            <div className="relative h-80 md:h-96 order-2 lg:order-1">
              <img
                src="/manus-storage/workflow-automation_e9e789f4.png"
                alt="Workflow Tracker"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">
                Featured Product: Workflow Tracker
              </h2>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Streamline your workflow, track operations in real-time, and improve productivity with our powerful workflow solution.
              </p>
              <ul className="space-y-3">
                {[
                  'Real-time workflow management',
                  'Advanced analytics and reporting',
                  'Seamless integration capabilities',
                  'User-friendly dashboard',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="/products">
                <a className="btn-primary inline-flex items-center gap-2 w-fit">
                  View Product <ArrowRight size={20} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Successful implementations across various industries and scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8">
            {projects.map((project, idx) => (
              <div
                key={`project-${project.title}`}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden bg-muted">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 bg-card">
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {project.title}
                  </h3>
                  <p className="text-foreground/70 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <a className="btn-outline inline-flex items-center gap-2">
                View All Projects <ArrowRight size={20} />
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <div className="inline-block px-4 py-2 bg-primary-foreground/20 rounded-full">
            <span className="font-semibold text-sm">Ready to Transform?</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Let's build something great together
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Get in touch with our team to discuss your project and discover how we can help optimize your operations.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-150 active:scale-95">
              Contact Us Today
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
