import { Link } from 'wouter';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Quick Links': [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Products', href: '/products' },
    ],
    'Our Services': [
      { label: 'GPS Installation', href: '/services' },
      { label: 'Fleet Monitoring', href: '/services' },
      { label: 'Technical Support', href: '/services' },
      { label: 'Custom Solutions', href: '/services' },
    ],
    'Contact Info': [
      { icon: MapPin, text: 'New Delhi, India' },
      { icon: Phone, text: '+91 12345 67890' },
      { icon: Mail, text: 'info@bhardwaj.com' },
    ],
  };

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/manus-storage/brand-logo_5e3aa7c0.png" 
                alt="Bhardwaj Innovations" 
                className="h-10 w-10 brightness-0 invert"
              />
              <h3 className="font-bold text-lg">Bhardwaj Innovations</h3>
            </div>
            <p className="text-sm opacity-90">
              Transforming operations with smart GPS tracking, fleet monitoring, and custom software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-primary-foreground/20 rounded-lg hover:bg-primary-foreground/30 transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks['Quick Links'].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {footerLinks['Our Services'].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              {footerLinks['Contact Info'].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <li key={idx} className="flex items-start gap-2">
                    <Icon size={18} className="mt-0.5 flex-shrink-0" />
                    <span className="text-sm opacity-90">{item.text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-90">
            <p>&copy; {currentYear} Bhardwaj Innovations. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
              <a href="#" className="hover:opacity-100 transition-opacity">Terms & Conditions</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
