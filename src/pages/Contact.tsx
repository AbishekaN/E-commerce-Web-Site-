
import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Star, Users, Award, Smartphone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Chatbot from '../components/Chatbot';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const stats = [
    { icon: Users, label: 'Happy Customers', value: '10,000+' },
    { icon: Award, label: 'Years Experience', value: '8+' },
    { icon: Smartphone, label: 'Devices Repaired', value: '25,000+' },
    { icon: Star, label: 'Average Rating', value: '4.9/5' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation cartItemsCount={0} onCartClick={() => {}} />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl md:text-2xl text-orange-100 max-w-3xl mx-auto">
            Have questions about our services? Need a repair quote? We're here to help!
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    >
                      <option value="">Select a service</option>
                      <option value="screen-repair">Screen Repair</option>
                      <option value="battery-replacement">Battery Replacement</option>
                      <option value="water-damage">Water Damage Repair</option>
                      <option value="software-issues">Software Issues</option>
                      <option value="accessories">Accessories</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                    placeholder="Tell us about your device issue or inquiry..."
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information & Company Details */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-lg">
                          <MapPin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Visit Our Store</h3>
                          <p className="text-gray-600">
                            123 Tech Street, Digital City<br />
                            Technology District, TC 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-lg">
                          <Phone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Call Us</h3>
                          <p className="text-gray-600">
                            Main: +1 (555) 123-4567<br />
                            Emergency: +1 (555) 123-4568
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-lg">
                          <Mail className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
                          <p className="text-gray-600">
                            General: info@fixcellpromobile.com<br />
                            Support: support@fixcellpromobile.com
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-orange-200">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-lg">
                          <Clock className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
                          <div className="text-gray-600 space-y-1">
                            <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                            <p>Saturday: 10:00 AM - 6:00 PM</p>
                            <p>Sunday: 12:00 PM - 5:00 PM</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Company Details */}
              <Card className="border-orange-200 bg-gradient-to-r from-orange-50 to-yellow-50">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">About Fixcell Pro Mobile</CardTitle>
                  <CardDescription className="text-gray-600">
                    Your trusted mobile repair and accessories partner since 2016
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      Founded in 2016, Fixcell Pro Mobile has been serving the Digital City community 
                      with professional mobile device repair services and premium accessories.
                    </p>
                    <p>
                      Our certified technicians use only genuine parts and cutting-edge repair 
                      techniques to ensure your device works like new. We pride ourselves on 
                      fast turnaround times, competitive pricing, and exceptional customer service.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Our Mission</h4>
                        <p className="text-sm">
                          To provide reliable, affordable, and professional mobile repair services 
                          while building lasting relationships with our customers.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-orange-600 mb-2">Our Vision</h4>
                        <p className="text-sm">
                          To be the leading mobile repair service provider, known for quality, 
                          innovation, and customer satisfaction.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Our Location</h2>
            <p className="text-xl text-gray-600">
              Visit our store for in-person consultations and repairs
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="h-96 bg-gradient-to-r from-orange-200 to-yellow-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-orange-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Interactive Map</h3>
                <p className="text-gray-600">
                  123 Tech Street, Digital City, TC 12345
                </p>
                <Button className="mt-4 bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-yellow-600">
                  Get Directions
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <Chatbot />
    </div>
  );
};

export default Contact;
