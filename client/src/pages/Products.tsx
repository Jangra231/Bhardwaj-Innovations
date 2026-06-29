import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Products() {
  const products = [
    {
      title: 'Workflow Tracker',
      description: 'Streamline your workflow, track operations in real-time, and improve productivity.',
      image: '/manus-storage/workflow-automation_e9e789f4.png',
      features: [
        'Real-time workflow management',
        'Advanced analytics and reporting',
        'Seamless integration capabilities',
        'User-friendly dashboard',
        'Mobile app support',
        'Custom workflows',
      ],
    },
    {
      title: 'Fleet Management System',
      description: 'Comprehensive fleet tracking with real-time monitoring and analytics.',
      image: '/manus-storage/gps-tracking-illustration_fb83cc73.png',
      features: [
        'Real-time GPS tracking',
        'Route optimization',
        'Fuel consumption monitoring',
        'Driver behavior analysis',
        'Maintenance scheduling',
        'Compliance reporting',
      ],
    },
    {
      title: 'Enterprise Solutions',
      description: 'Custom enterprise-level solutions tailored to your specific needs.',
      image: '/manus-storage/team-collaboration_1369c663.png',
      features: [
        'Custom development',
        'Enterprise integration',
        'Scalable architecture',
        'Advanced security',
        'Dedicated support',
        'Training & documentation',
      ],
    },
  ];

  const projects = [
    {
      title: 'NCCF Workflow Tracker',
      category: 'Agriculture',
      description: 'Streamlined workflow management for agricultural operations across multiple regions.',
      impact: '500+ users',
    },
    {
      title: 'GPS Deployment Projects',
      category: 'Logistics',
      description: 'Large-scale GPS deployment for fleet management across India.',
      impact: '2000+ vehicles',
    },
    {
      title: 'Enterprise Solutions',
      category: 'Enterprise',
      description: 'Custom enterprise-level tracking and management solutions.',
      impact: '50+ enterprises',
    },
    {
      title: 'Government Tracking Initiative',
      category: 'Government',
      description: 'Large-scale tracking system for government operations.',
      impact: '1000+ assets',
    },
    {
      title: 'Logistics Optimization',
      category: 'Logistics',
      description: 'Route optimization and fuel efficiency system.',
      impact: '30% cost reduction',
    },
    {
      title: 'Warehouse Management',
      category: 'Warehousing',
      description: 'Complete warehouse inventory and asset tracking system.',
      impact: '99.8% accuracy',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              Products & Projects
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Innovative solutions and successful implementations across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Powerful solutions designed to transform your operations.
            </p>
          </div>

          <div className="space-y-16 md:space-y-24">
            {products.map((product, idx) => (
              <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${idx % 2 === 1 ? 'lg:grid-cols-2 lg:[&>*:first-child]:order-2' : ''}`}>
                {/* Image */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                      {product.title}
                    </h3>
                    <p className="text-lg text-foreground/80 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {product.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center gap-3">
                        <CheckCircle className="text-accent flex-shrink-0" size={20} />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <a className="btn-primary inline-flex items-center gap-2 w-fit">
                      Learn More <ArrowRight size={20} />
                    </a>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies / Projects */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Real-world implementations and success stories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, idx) => (
              <div
                key={`case-study-${project.title}`}
                className="card-elevated group hover:shadow-2xl transition-all duration-300"
                style={{
                  animation: `slideUp 0.5s var(--ease-out) ${idx * 50}ms backwards`,
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-foreground flex-1">
                    {project.title}
                  </h3>
                </div>
                <div className="inline-block px-3 py-1 bg-accent/10 rounded-full mb-4">
                  <span className="text-sm font-medium text-accent">{project.category}</span>
                </div>
                <p className="text-foreground/70 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground/60">Impact</span>
                    <span className="font-semibold text-accent">{project.impact}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to see our solutions in action?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Schedule a demo or consultation with our team today.
          </p>
          <Link href="/contact">
            <a className="inline-block px-8 py-4 bg-primary-foreground text-primary font-semibold rounded-lg hover:shadow-lg transition-all duration-150 active:scale-95">
              Get in Touch
            </a>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
