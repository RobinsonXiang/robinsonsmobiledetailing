'use client';

import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Star, Car, Sparkles, Shield, Clock, MapPin, Zap, Wrench } from 'lucide-react';
import Image from 'next/image';

interface Service {
  id: number;
  picture: string;
  name: string;
  prices: {
    coupe: string;
    twoRow: string;
    threeRow: string;
  };
  description: string;
  features: string[];
  icon: React.ReactElement;
}

interface AddOn {
  id: number;
  picture: string;
  name: string;
  price: string;
  description: string;
}

interface Review {
  id: string;
  author_name: string;
  rating: number;
  text: string;
  time: number;
  profile_photo_url?: string;
  car_photo_url?: string;
}

export default function Home(): React.ReactElement {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock reviews for now - replace with actual API call
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        setReviews(data.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
        // Fallback to mock data if API fails - ensuring 6 reviews are shown
        const mockReviews = [
          {
            id: '1',
            author_name: 'Jen',
            rating: 5,
            text: 'Robinson came to my home on time. He detailed and washed my Volvo. He spent hours meticulously cleaning every inch of the car inside and out. When he was finished it was like having a new car all over again. As a mom of a toddler it was very convenient to have him come to my home to provide this service. I highly recommend him!',
            time: Date.now() - 86400000, // 1 day ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          },
          {
            id: '2',
            author_name: 'Brady Tse',
            rating: 5,
            text: 'Just got an exterior detail done and I couldn\'t be happier with the results. The wash used premium-grade soap that left the paint looking glossy and refreshed. What really stood out was the care and knowledge that went into the process. Everything was explained step-by-step, from what each product did to how it helped protect and enhance the finish. That level of transparency and attention to detail made the experience feel really professional. When it was done, my car genuinely looked brand new again. Highly recommend to anyone who wants quality work and real pride put into the detailing. You won\'t be disappointed!',
            time: Date.now() - 172800000, // 2 days ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          },
          {
            id: '3',
            author_name: 'Luke Wu',
            rating: 5,
            text: 'Robinson made sure that the my Toyota was pristine in&out. He is a young man with an inspiring work ethic and dedication to his craft. Incredibly friendly demeanor the whole detail and is here to make money and make customers happy!',
            time: Date.now() - 259200000, // 3 days ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          },
          {
            id: '4',
            author_name: 'Rachel Meyer',
            rating: 5,
            text: 'Robinson did 2 amazing exterior details for our cars! He was very kind, efficient, and meticulous with his work and the cars looked beautiful in the end. Thank you Robinson!! Highly recommend!!',
            time: Date.now() - 345600000, // 4 days ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          },
          {
            id: '5',
            author_name: 'Kyle',
            rating: 5,
            text: 'Robinson replies quickly (via phone) and has put in a lot of effort into researching how to perfect his mobile detailing services. My BMW\'s leather felt like new after he vacuumed it!',
            time: Date.now() - 432000000, // 5 days ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          },
          {
            id: '6',
            author_name: 'Sarah Johnson',
            rating: 5,
            text: 'Robinson did an amazing job on my car! The interior was spotless and the exterior looked brand new. Very professional and reasonably priced.',
            time: Date.now() - 518400000, // 6 days ago
            profile_photo_url: '/globe.svg',
            car_photo_url: '/globe.svg'
          }
        ];
        setReviews(mockReviews);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const services: Service[] = [
    {
      id: 1,
      name: "Interior Detail Package",
      picture: "public/globe.svg",
      prices: {
        coupe: "$199.99",
        twoRow: "$224.99",
        threeRow: "$249.99"
      },
      description: "Complete interior deep clean and protection",
      features: [
        "Full spotless vacuum",
        "Complete disinfection of all surfaces",
        "Stain removal on carpets, floor mats, seats, plastics",
        "Leather conditioner",
        "Pet hair removal"
      ],
      icon: <Car className="w-6 h-6" />
    },
    {
      id: 2,
      name: "Exterior Detail Package",
      picture: "public/globe.svg",
      prices: {
        coupe: "$149.99",
        twoRow: "$174.99",
        threeRow: "$199.99"
      },
      description: "Professional exterior wash and protection",
      features: [
        "Professional hand wash and dry",
        "Clay mitt entire exterior",
        "Streak-free windows",
        "Wheels & tire shine",
        "Ceramic wax protection"
      ],
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      id: 3,
      name: "Full Interior + Exterior Package",
      picture: "public/globe.svg",
      prices: {
        coupe: "$249.99",
        twoRow: "$299.99",
        threeRow: "$349.99"
      },
      description: "Complete interior and exterior detailing service",
      features: [
        "Everything from both packages",
        "Best value for complete car care",
        "Professional-grade results inside and out",
        "Comprehensive vehicle transformation"
      ],
      icon: <Shield className="w-6 h-6" />
    }
  ];

  const addOns: AddOn[] = [
    {
      id: 1,
      picture: "public/globe.svg",
      name: "Engine Bay Detail",
      price: "$40",
      description: "Professional engine compartment cleaning and detailing"
    },
    {
      id: 2,
      picture: "public/globe.svg",
      name: "Headlight Restoration",
      price: "$50",
      description: "Restore clarity and brightness to both foggy headlights"
    },
    {
      id: 3,
      picture: "public/globe.svg",
      name: "Black Trim Restoration",
      price: "$50",
      description: "Restore faded plastic trim to like-new condition"
    },
    {
      id: 4,
      picture: "public/globe.svg",
      name: "Heavy Interior Stain Removal w/ Shampoo",
      price: "$100",
      description: "Deep shampoo treatment on floor mats and seats for stubborn stains"
    },
    {
      id: 5,
      picture: "public/globe.svg",
      name: "One-Step Paint Correction",
      price: "$150",
      description: "Clay bar decontamination + orbital buffer compound for lighter scratches & imperfections"
    },
    {
      id: 6,
      picture: "public/globe.svg",
      name: "Two-Step Paint Correction",
      price: "$200",
      description: "Everything in one-step correction + orbital buffer polish & wax for a showroom shine"
    }
  ];

  const handleCall = (): void => {
    if (typeof window !== 'undefined') {
      window.open('tel:408-333-2639', '_self');
    }
  };

  const handleText = (): void => {
    if (typeof window !== 'undefined') {
      window.open('sms:408-333-2639', '_self');
    }
  };

  const scrollToServices = (): void => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-card border-b border-border fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Image 
                src="/robinsons_mobile_detailing_logo.png" 
                alt="Robinson's Mobile Detailing Logo" 
                width={75} 
                height={75} 
                className="mr-3"
              />
              <span className="text-lg font-semibold text-foreground hidden sm:inline">Robinson's Mobile Detailing</span>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={scrollToServices}
                className="text-sm text-foreground hover:text-primary transition-colors cursor-pointer"
              >
                Services
              </button>
              <button
                onClick={handleCall}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors flex items-center space-x-2 text-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-28 bg-gradient-to-b from-primary/10 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="flex justify-center mb-6">
              <div className="p-3 rounded-lg">
                <Image 
                  src="/robinsons_mobile_detailing_logo.png" 
                  alt="Robinson's Mobile Detailing Logo" 
                  width={150} 
                  height={150} 
                />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Robinson's Mobile Detailing
            </h1>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Here at Robinson's Mobile Detailing, we take great pride in taking care of your vehicle for a great price. Experience the difference quality car care can make today. 
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={handleCall}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (408) 333-2639</span>
            </button>
            <button
              onClick={handleText}
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Text Us</span>
            </button>
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      <div className="py-4 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full">
              <Star className="w-4 h-4 fill-current" />
              <span className="font-medium">5.0 Average Rating</span>
            </div>
          </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {review.profile_photo_url ? (
                        <>
                          <Image
                            src={review.profile_photo_url}
                            alt={`${review.author_name}'s profile`}
                            width={40}
                            height={40}
                            className="rounded-full"
                            onError={(e) => {
                              // If profile photo fails, show fallback
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hidden">
                            <span className="text-primary font-semibold text-sm">
                              {review.author_name.charAt(0)}
                            </span>
                          </div>
                        </>
                      ) : (
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                          <span className="text-primary font-semibold text-sm">
                            {review.author_name.charAt(0)}
                          </span>
                        </div>
                      )}
                      <div>
                        <h4 className="font-medium text-foreground">{review.author_name}</h4>
                        <div className="flex items-center space-x-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {review.text}
                  </p>
                  
                  {/* Car Photo Display */}
                  {review.car_photo_url && (
                    <div className="mt-4">
                      <Image
                        src={review.car_photo_url}
                        alt={`${review.author_name}'s car after detailing`}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg"
                        onError={(e) => {
                          // Hide the image if it fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="bg-background">
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Services
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                {index === 2 && (
                  <div className="mb-4">
                    <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Best Value
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary/10 rounded-lg p-2 mr-3">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{service.name}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                  
                  {/* Vehicle Type Pricing */}
                  <div className="space-y-2 mb-6">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">Coupe/Sedan</span>
                      <span className="font-semibold text-foreground">{service.prices.coupe}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="text-sm text-muted-foreground">2 Row SUV/Truck</span>
                      <span className="font-semibold text-foreground">{service.prices.twoRow}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-sm text-muted-foreground">3 Row SUV/Minivan</span>
                      <span className="font-semibold text-foreground">{service.prices.threeRow}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-medium text-foreground mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 bg-primary"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={handleCall}
                  className="w-full bg-primary text-primary-foreground py-2 px-4 rounded-md font-medium hover:bg-primary/90 transition-colors text-sm"
                >
                  Book Now - Call/Text
                </button>
              </div>
            ))}
          </div>

          {/* Add-Ons Section */}
          <div className="bg-muted/30 rounded-lg p-8 border border-border">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="p-2 bg-primary rounded-lg">
                  <Zap className="w-6 h-6 text-primary-foreground" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Premium Add-Ons
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              {addOns.map((addOn, index) => (
                <div
                  key={addOn.id}
                  className="bg-card rounded-lg p-4 border border-border hover:shadow-sm transition-shadow"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-medium text-foreground flex-1 pr-3 text-sm">
                      {addOn.name}
                    </h4>
                    <span className="font-semibold text-primary text-sm bg-primary/10 px-2 py-1 rounded flex-shrink-0">
                      {addOn.price}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {addOn.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Mobile Service Highlight */}
            <div className="bg-primary rounded-lg p-6 text-primary-foreground">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-2 bg-white/20 rounded-lg">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3">
                  100% Mobile Service
                </h4>
                <p className="text-sm text-primary-foreground/90 max-w-2xl mx-auto mb-6">
                  We are 100% mobile to anywhere in the Bay Area as long as you have water and power accessible within 100 feet.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={handleCall}
                    className="bg-white text-primary px-6 py-2 rounded-md font-medium hover:bg-white/90 transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call (408) 333-2639</span>
                  </button>
                  <button
                    onClick={handleText}
                    className="bg-white/20 border border-white/30 text-white px-6 py-2 rounded-md font-medium hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 text-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Text to Book</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Footer */}
      <div className="bg-card border-t border-border text-foreground py-12">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Bring Your Vehicle Back to Life?
          </h2>
          <p className="text-muted-foreground mb-6">
            Send us a quick text or call (408) 333-2639 to book a detail today!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
            <button
              onClick={handleCall}
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call (408) 333-2639</span>
            </button>
            <button
              onClick={handleText}
              className="bg-secondary text-secondary-foreground px-6 py-3 rounded-md font-medium hover:bg-secondary/90 transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Text Us</span>
            </button>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex justify-center items-center space-x-2 mb-2">
              <Image 
                src="/robinsons_mobile_detailing_logo.png" 
                alt="Robinson's Mobile Detailing Logo" 
                width={50} 
                height={50} 
              />
              <span className="font-medium">Robinson's Mobile Detailing</span>
            </div>
            <p className="text-sm text-muted-foreground">
              San Jose, CA • Bay Area
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}