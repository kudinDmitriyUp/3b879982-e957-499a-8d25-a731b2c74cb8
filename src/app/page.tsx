"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureCardSix from '@/components/sections/feature/FeatureCardSix';
import PricingCardOne from '@/components/sections/pricing/PricingCardOne';
import MetricCardOne from '@/components/sections/metrics/MetricCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from '@/providers/themeProvider/ThemeProvider';
import { Star, Bed, Sparkles, Gift, Award, MessageSquare, Phone, Instagram, Facebook, Twitter, Heart, Briefcase, Users, Calendar, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
      contentWidth="large"
      sizing="large"
      background="gradientBars"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="radial-glow"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Azure Grand Hotel"
        />
      </div>
      
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Experience Luxury Redefined"
          description="Discover unparalleled comfort and elegance at Azure Grand Hotel, where every detail is crafted for your perfect stay"
          tag="5-Star Luxury"
          tagIcon={Star}
          buttons={[
            { text: "Book Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325332377-jh525jux.jpg"
          imageAlt="Azure Grand Hotel exterior"
          imagePosition="right"
        />
      </div>
      
      <div id="rooms" data-section="rooms">
        <ProductCardOne
          title="Luxurious Accommodations"
          description="Choose from our carefully curated selection of rooms and suites, each designed to provide the ultimate comfort"
          tag="Premium Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "deluxe",
              name: "Deluxe Room",
              price: "$299/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325333033-e50nr4le.jpg",
              imageAlt: "Deluxe room interior"
            },
            {
              id: "premium",
              name: "Premium Suite",
              price: "$499/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325333549-8fnji5sb.jpg",
              imageAlt: "Premium suite interior"
            },
            {
              id: "presidential",
              name: "Presidential Suite",
              price: "$899/night",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325334074-6iifmpdk.jpg",
              imageAlt: "Presidential suite interior"
            }
          ]}
          buttons={[
            { text: "View All Rooms", href: "contact" }
          ]}
        />
      </div>
      
      <div id="amenities" data-section="amenities">
        <FeatureCardSix
          title="World-Class Amenities"
          description="Indulge in our comprehensive range of luxury facilities designed to enhance every moment of your stay"
          tag="Premium Services"
          tagIcon={Sparkles}
          textboxLayout="default"
          features={[
            {
              id: 1,
              title: "Spa & Wellness Center",
              description: "Rejuvenate your body and mind at our award-winning spa featuring world-class treatments and wellness facilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325334898-i48nml1x.jpg",
              imageAlt: "Spa and wellness center"
            },
            {
              id: 2,
              title: "Fine Dining Restaurant",
              description: "Savor exquisite cuisine prepared by renowned chefs using the finest local and international ingredients",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325335593-yn8rfgwt.jpg",
              imageAlt: "Fine dining restaurant"
            },
            {
              id: 3,
              title: "Fitness & Recreation",
              description: "Stay active with our state-of-the-art fitness center and recreational facilities available 24/7",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325336350-4kb45cyy.jpg",
              imageAlt: "Fitness center"
            },
            {
              id: 4,
              title: "Business Center",
              description: "Conduct meetings and events in our sophisticated business center with modern conference facilities",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325337077-1sd2v39y.jpg",
              imageAlt: "Business conference room"
            }
          ]}
        />
      </div>
      
      <div id="pricing" data-section="pricing">
        <PricingCardOne
          title="Exclusive Packages"
          description="Choose the perfect package for your stay with our specially curated offers"
          tag="Special Offers"
          tagIcon={Gift}
          textboxLayout="default"
          animationType="slide-up"
          plans={[
            {
              id: "romantic",
              badge: "Most Popular",
              badgeIcon: Heart,
              price: "$599/night",
              subtitle: "Perfect for romantic getaways",
              features: [
                "Deluxe room with city view",
                "Couples spa treatment",
                "Champagne and chocolates",
                "Late checkout until 2 PM"
              ]
            },
            {
              id: "business",
              badge: "Business Choice",
              badgeIcon: Briefcase,
              price: "$449/night",
              subtitle: "Ideal for business travelers",
              features: [
                "Executive room with workspace",
                "Complimentary breakfast",
                "High-speed internet",
                "Airport transfer service"
              ]
            },
            {
              id: "family",
              badge: "Family Fun",
              badgeIcon: Users,
              price: "$699/night",
              subtitle: "Great for family vacations",
              features: [
                "Family suite for up to 4 guests",
                "Kids club activities",
                "Pool and recreation access",
                "Family dining package"
              ]
            }
          ]}
        />
      </div>
      
      <div id="metrics" data-section="metrics">
        <MetricCardOne
          title="Excellence in Hospitality"
          description="Our commitment to exceptional service is reflected in these remarkable achievements"
          tag="Achievements"
          tagIcon={Award}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          metrics={[
            {
              id: "1",
              value: "50K+",
              title: "guests",
              description: "Happy guests served annually",
              icon: Users
            },
            {
              id: "2",
              value: "4.9",
              title: "rating",
              description: "Average guest satisfaction score",
              icon: Star
            },
            {
              id: "3",
              value: "25",
              title: "years",
              description: "Of luxury hospitality excellence",
              icon: Calendar
            },
            {
              id: "4",
              value: "15",
              title: "awards",
              description: "International hospitality awards",
              icon: Trophy
            }
          ]}
        />
      </div>
      
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Guests Say"
          description="Discover why travelers from around the world choose Azure Grand Hotel for their luxury stays"
          tag="Guest Reviews"
          tagIcon={MessageSquare}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Michael Chen",
              role: "CEO at TechVentures",
              testimonial: "Exceptional service and unparalleled luxury. The attention to detail at Azure Grand Hotel made our corporate retreat absolutely perfect.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325337806-3iady6x2.jpg",
              imageAlt: "Michael Chen portrait"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Travel Blogger",
              testimonial: "From the moment I arrived, every aspect of my stay exceeded expectations. The spa treatments and dining experiences were world-class.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325338592-u7xhhz77.jpg",
              imageAlt: "Sarah Williams portrait"
            },
            {
              id: "3",
              name: "Robert & Emma Johnson",
              role: "Anniversary Celebration",
              testimonial: "Our 25th anniversary celebration was made magical by the incredible staff and luxurious amenities. We'll treasure these memories forever.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325339657-v416kp9w.jpg",
              imageAlt: "Robert and Emma Johnson portrait"
            },
            {
              id: "4",
              name: "David Martinez",
              role: "Frequent Business Traveler",
              testimonial: "Azure Grand Hotel has become my preferred choice for business stays. The executive services and business center facilities are outstanding.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325340638-zjdx8y4a.jpg",
              imageAlt: "David Martinez portrait"
            }
          ]}
        />
      </div>
      
      <div id="about" data-section="about">
        <TextSplitAbout
          title="Azure Grand Hotel"
          description={[
            "For over two decades, Azure Grand Hotel has been the pinnacle of luxury hospitality, offering discerning guests an unmatched experience of elegance and comfort.",
            "Our commitment to excellence is evident in every detail, from our meticulously appointed rooms to our world-class amenities and personalized service that anticipates your every need."
          ]}
          buttons={[
            { text: "Our Story", href: "about" },
            { text: "Contact Us", href: "contact" }
          ]}
        />
      </div>
      
      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Reservations"
          tagIcon={Phone}
          title="Experience Luxury Today"
          description="Ready to indulge in the finest hospitality? Book your stay at Azure Grand Hotel and create unforgettable memories."
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32m5rRdd38TAyU0DZCqvrl288SF/uploaded-1763325341244-0m61ahje.jpg"
          imageAlt="Hotel concierge at reception desk"
          mediaPosition="right"
          inputPlaceholder="Enter your email for special offers"
          buttonText="Book Now"
          termsText="By booking, you agree to receive exclusive offers and updates from Azure Grand Hotel."
        />
      </div>
      
      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Azure Grand Hotel"
          copyrightText="© 2025 | Azure Grand Hotel. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Amenities", href: "amenities" },
                { label: "Dining", href: "dining" },
                { label: "Special Offers", href: "pricing" }
              ]
            },
            {
              title: "Services",
              items: [
                { label: "Concierge", href: "contact" },
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Business Center", href: "amenities" },
                { label: "Event Planning", href: "contact" }
              ]
            },
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Careers", href: "contact" },
                { label: "Press", href: "contact" },
                { label: "Awards", href: "about" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Contact Us", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "Guest Services", href: "contact" },
                { label: "FAQ", href: "contact" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com/azuregrandhotel", ariaLabel: "Follow us on Instagram" },
            { icon: Facebook, href: "https://facebook.com/azuregrandhotel", ariaLabel: "Follow us on Facebook" },
            { icon: Twitter, href: "https://twitter.com/azuregrandhotel", ariaLabel: "Follow us on Twitter" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}