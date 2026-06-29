import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: 'New Delhi, India',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 12345 67890',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@bhardwaj.com',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      content: 'Mon - Sat: 10 AM - 6 PM',
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
              Get In Touch
            </h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              We are here to help you. Reach out to us with any questions or inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16">
            {contactInfo.map((info, idx) => {
              const Icon = info.icon;
              return (
                <div
                  key={`contact-info-${info.title}`}
                  className="card-elevated text-center group hover:shadow-2xl transition-all duration-300"
                  style={{
                    animation: `slideUp 0.5s var(--ease-out) ${idx * 50}ms backwards`,
                  }}
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="text-accent" size={24} />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-foreground/70">{info.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
                  Send us a Message
                </h2>
                <p className="text-lg text-foreground/80">
                  Fill out the form below and we will get back to you as soon as possible.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    required
                    className="w-full min-h-32"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <div className="h-96 md:h-full min-h-96 bg-muted rounded-2xl overflow-hidden shadow-xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="text-accent mx-auto" size={48} />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Our Location</h3>
                    <p className="text-foreground/70">New Delhi, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'What services do you offer?',
                a: 'We offer GPS tracking, fleet monitoring, technical support, custom software solutions, consulting, and analytics services.',
              },
              {
                q: 'How long does implementation take?',
                a: 'Implementation timeline varies based on project scope. Typically, it takes 2-8 weeks from consultation to full deployment.',
              },
              {
                q: 'Do you provide 24/7 support?',
                a: 'Yes, we provide round-the-clock technical support for all our clients to ensure minimal downtime.',
              },
              {
                q: 'Can you customize solutions for my business?',
                a: 'Absolutely! We specialize in creating tailored solutions that meet your specific business requirements.',
              },
            ].map((faq, idx) => (
              <div key={idx} className="card-elevated group hover:shadow-2xl transition-all duration-300">
                <h3 className="font-semibold text-lg text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Ready to get started?
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Contact our team today to discuss your project and discover how we can help transform your operations.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
