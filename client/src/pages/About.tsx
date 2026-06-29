import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function About() {
  const timeline = [
    { year: '2020', title: 'Company Founded', description: 'Bhardwaj Innovations established with a vision to transform fleet operations.' },
    { year: '2021', title: 'First Major Project', description: 'Successfully deployed GPS tracking for 500+ vehicles across India.' },
    { year: '2022', title: 'Expanded Solutions', description: 'Launched comprehensive fleet monitoring and analytics platform.' },
    { year: '2023', title: 'Government Projects', description: 'Partnered with government agencies for large-scale tracking initiatives.' },
    { year: '2024+', title: 'Growing Together', description: 'Continuing to innovate and expand our service offerings globally.' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty and transparency in all our dealings.',
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Constantly pushing boundaries to deliver cutting-edge technology solutions.',
    },
    {
      icon: Users,
      title: 'Customer Success',
      description: 'Your success is our success. We are committed to your growth and excellence.',
    },
  ];

  const team = [
    { name: 'Name Here', role: 'Designation' },
    { name: 'Name Here', role: 'Designation' },
    { name: 'Name Here', role: 'Designation' },
    { name: 'Name Here', role: 'Designation' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-background via-background to-blue-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
              About Bhardwaj Innovations
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Driving innovation in technology and commitment to transforming how businesses operate.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src="/manus-storage/team-collaboration_1369c663.png"
              alt="Team Collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our Journey
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              From humble beginnings to industry leadership, our growth story is one of innovation and dedication.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-accent" />

            <div className="space-y-8 md:space-y-12">
              {timeline.map((item, idx) => (
                <div key={idx} className={`flex gap-8 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1 md:text-right">
                    <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                      <div className="text-2xl font-bold text-accent mb-2">{item.year}</div>
                      <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div className="w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg" />
                  </div>

                  {/* Spacer */}
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Vision */}
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Vision</h3>
              <p className="text-foreground/80">
                To be a leading technology partner in operational excellence and digital transformation.
              </p>
            </div>

            {/* Mission */}
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Mission</h3>
              <p className="text-foreground/80">
                Deliver reliable and innovative solutions for business transformation.
              </p>
            </div>

            {/* Values */}
            <div className="card-elevated text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⭐</span>
              </div>
              <h3 className="text-2xl font-bold text-primary mb-3">Values</h3>
              <p className="text-foreground/80">
                Integrity, Innovation, Customer Success, Excellence.
              </p>
            </div>
          </div>

          {/* Core Values Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <div key={`value-${value.title}`} className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon className="text-primary" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground">{value.title}</h4>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Leadership Team
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Meet the talented individuals driving innovation at Bhardwaj Innovations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {team.map((member, idx) => (
              <div key={`team-member-${idx}`} className="card-elevated text-center group">
                <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="text-4xl">👤</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-1">{member.name}</h4>
                <p className="text-sm text-foreground/70">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Partner with us for your success
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their operations with our innovative solutions.
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
