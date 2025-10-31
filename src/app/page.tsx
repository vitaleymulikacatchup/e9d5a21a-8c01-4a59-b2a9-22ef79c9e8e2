"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import TeamCardTwo from '@/components/sections/team/TeamCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Coffee, Star, Users, Heart } from 'lucide-react';

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="slide-background"
      defaultTextAnimation="background-highlight"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Home", id: "hero" },
            { name: "About", id: "about" },
            { name: "Products", id: "products" },
            { name: "Team", id: "team" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Sweet Delights Bakery"
          button={{
            text: "Order Online",
            href: "https://order.sweetdelights.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Fresh Baked Daily"
          description="Experience the warmth of artisan breads, pastries, and desserts made with love using traditional techniques and the finest ingredients."
          tag="Artisan Bakery"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Fresh baked bread and pastries"
          buttons={[
            {
              text: "Order Online",
              href: "https://order.sweetdelights.com"
            },
            {
              text: "View Menu",
              href: "products"
            }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Crafted with Passion"
          description={[
            "Since 1985, Sweet Delights Bakery has been the heart of our community, bringing families together with the aroma of fresh-baked goods and the taste of traditional recipes passed down through generations.",
            "Our master bakers start before dawn, kneading dough and shaping loaves with the same dedication our founder brought to this very kitchen nearly four decades ago."
          ]}
          buttons={[
            {
              text: "Our Story",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Daily Fresh Selection"
          description="From classic sourdough to delicate pastries, every item is handcrafted daily using premium ingredients."
          tag="Today's Specials"
          tagIcon={Star}
          products={[
            {
              id: "1",
              name: "Classic French Croissant",
              price: "$3.50",
              imageSrc: "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Golden butter croissants",
              initialQuantity: 1
            },
            {
              id: "2",
              name: "Artisan Sourdough Loaf",
              price: "$8.95",
              imageSrc: "https://images.pexels.com/photos/2601014/pexels-photo-2601014.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh sourdough bread",
              initialQuantity: 1
            },
            {
              id: "3",
              name: "Chocolate Éclair",
              price: "$4.25",
              imageSrc: "https://images.pexels.com/photos/6205522/pexels-photo-6205522.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Chocolate filled éclairs",
              initialQuantity: 1
            }
          ]}
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardTwo
          title="Meet Our Master Bakers"
          description="The passionate artisans behind every delicious creation"
          tag="Our Team"
          tagIcon={Users}
          members={[
            {
              id: "1",
              name: "Marie Dubois",
              role: "Head Baker",
              description: "With 20 years of experience in French patisserie, Marie brings European tradition and innovation to every recipe.",
              imageSrc: "https://images.pexels.com/photos/7552730/pexels-photo-7552730.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Marie Dubois",
              socialLinks: [
                {
                  icon: "Instagram",
                  url: "https://instagram.com/mariebakes"
                },
                {
                  icon: "Linkedin",
                  url: "https://linkedin.com/in/marie-dubois"
                }
              ]
            },
            {
              id: "2",
              name: "James Thompson",
              role: "Pastry Chef",
              description: "James specializes in artisan breads and has won multiple awards for his sourdough techniques and seasonal pastries.",
              imageSrc: "https://images.pexels.com/photos/1619573/pexels-photo-1619573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of James Thompson",
              socialLinks: [
                {
                  icon: "Twitter",
                  url: "https://twitter.com/jamesthompsonbaker"
                },
                {
                  icon: "Globe",
                  url: "https://jamesthompsonbaking.com"
                }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Customers Say"
          description="Real stories from our beloved community"
          tag="Reviews"
          tagIcon={Heart}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "Local Resident",
              testimonial: "The croissants here are absolutely divine! They remind me of the ones I had in Paris. Marie and her team have created something truly special.",
              imageSrc: "https://images.pexels.com/photos/5709708/pexels-photo-5709708.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "David Chen",
              role: "Coffee Shop Owner",
              testimonial: "We've been sourcing our daily bread from Sweet Delights for 5 years. The quality is consistently excellent and our customers always ask where we get it from.",
              imageSrc: "https://images.pexels.com/photos/6269880/pexels-photo-6269880.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Food Blogger",
              testimonial: "I've visited bakeries all over the world, and Sweet Delights stands out for its authentic flavors and the genuine care put into every single item.",
              imageSrc: "https://images.pexels.com/photos/3985080/pexels-photo-3985080.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emma Rodriguez"
            },
            {
              id: "4",
              name: "Michael Johnson",
              role: "Regular Customer",
              testimonial: "My family's Saturday morning tradition is stopping by for fresh pastries and coffee. The staff knows our order by heart and always greets us with a smile.",
              imageSrc: "https://images.pexels.com/photos/9032658/pexels-photo-9032658.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Johnson"
            }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about our bakery"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Tuesday through Sunday, 6:00 AM to 6:00 PM. We're closed on Mondays to prepare fresh ingredients and give our team a well-deserved rest."
            },
            {
              id: "2",
              title: "Do you offer custom cakes for special occasions?",
              content: "Absolutely! We create custom cakes for birthdays, weddings, and other celebrations. Please place orders at least 48 hours in advance for best results."
            },
            {
              id: "3",
              title: "Are there gluten-free and vegan options available?",
              content: "Yes, we offer a selection of gluten-free breads and vegan pastries. Please ask our staff about today's available options as they vary by season."
            },
            {
              id: "4",
              title: "Do you deliver or offer online ordering?",
              content: "We offer online ordering for pickup and local delivery within a 5-mile radius. Delivery is available for orders over $25 with a small delivery fee."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Get in Touch"
          description="Have questions about custom orders, catering, or want to share feedback? We'd love to hear from you."
          imageSrc="https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Cozy bakery interior"
          mediaPosition="right"
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: false
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Tell us about your custom order or inquiry...",
            rows: 5,
            required: true
          }}
          buttonText="Send Message"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Bakery",
              items: [
                {
                  label: "Daily Specials",
                  href: "products"
                },
                {
                  label: "Custom Orders",
                  href: "contact"
                },
                {
                  label: "Catering",
                  href: "contact"
                }
              ]
            },
            {
              title: "About",
              items: [
                {
                  label: "Our Story",
                  href: "about"
                },
                {
                  label: "Team",
                  href: "team"
                },
                {
                  label: "Careers",
                  href: "contact"
                }
              ]
            },
            {
              title: "Contact",
              items: [
                {
                  label: "Visit Us",
                  href: "contact"
                },
                {
                  label: "Call Us",
                  href: "tel:+15551234567"
                },
                {
                  label: "Email",
                  href: "mailto:hello@sweetdelights.com"
                }
              ]
            }
          ]}
          copyrightText="© 2025 Sweet Delights Bakery"
        />
      </div>
    </ThemeProvider>
  );
}