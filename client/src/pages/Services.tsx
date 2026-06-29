import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, MapPin, Truck, Headphones, Code, Users, TrendingUp, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Services() {
  const services = [
    {
      icon: MapPin,
      title: 'GPS Device Installation',
      description: 'Professional installation of advanced GPS tracking devices for your fleet.',
      features: ['Expert installation', 'Quality assurance', 'Quick deployment', 'Full support'],
    },
    {
      icon: Truck,
      title: 'Fleet Monitoring Solutions',
      description: 'Real-time tracking and monitoring of your entire fleet operations.',
      features: ['Real-time tracking', 'Route optimization', 'Fuel monitoring', 'Driver behavior analysis'],
    },
    {
      icon: Headphones,
      title: 'Technical Support & Maintenance',
      description: '24/7 technical support and maintenance for all your systems.',
      features: ['24/7 support', 'Preventive maintenance', 'Quick response', 'Expert technicians'],
    },
    {
      icon: Code,
      title: 'Custom Software Solutions',
      description: 'Tailored software solutions designed for your specific needs.',
      features: ['Custom development', 'API integration', 'Scalable architecture', 'User-friendly interface'],
    },
    {
      icon: Users,
      title: 'Consulting & Deployment',
      description: 'Expert consulting and seamless deployment of solutions.',
      features: ['Strategic planning', 'Change management', 'Training & onboarding', 'Smooth transition'],
    },
    {
      icon: TrendingUp,
      title: 'Analytics & Reporting',
      description: 'Comprehensive analytics and detailed reporting dashboards.',
      features: ['Real-time dashboards', 'Custom reports', 'Data insights', 'Performance metrics'],
    },
  ];

  const industries = [
    { icon: '🏛️', name: 'Government', description: 'Large-scale tracking for government operations' },
    { icon: '🚚', name: 'Logistics', description: 'Fleet management and route optimization' },
    { icon: '🌾', name: 'Agriculture', description: 'Farming equipment and vehicle tracking' },
    { icon: '🏭', name: 'Warehousing', description: 'Warehouse and inventory management' },
    { icon: '👥', name: 'Enterprise', description: 'Enterprise-level solutions and support' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Comprehensive solutions to optimize your operations and drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={`service-detail-${service.title}`}
                  className="card-elevated group hover:shadow-2xl transition-all duration-300"
                  style={{
                    animation: `slideUp 0.5s var(--ease-out) ${idx * 50}ms backwards`,
                  }}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <Icon className="text-accent" size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-center gap-2 text-sm text-foreground/70">
                        <CheckCircle size={16} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Our solutions are tailored for various industries and business scales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="card-elevated text-center group hover:scale-105 transition-transform duration-300"
              >
                <div className="text-5xl mb-4">{industry.icon}</div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{industry.name}</h3>
                <p className="text-sm text-foreground/70">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Service Process
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              We follow a structured approach to ensure your success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your needs and goals' },
              { step: '02', title: 'Planning', desc: 'Develop a tailored solution' },
              { step: '03', title: 'Implementation', desc: 'Deploy and configure systems' },
              { step: '04', title: 'Support', desc: 'Ongoing maintenance and support' },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="card-elevated text-center">
                  <div className="text-4xl font-bold text-accent mb-3">{item.step}</div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-foreground/70">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="text-accent" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to optimize your operations?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contact our team today to discuss which services are right for your business.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-150 active:scale-95">
              Get Started
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
