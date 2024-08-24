import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Services = () => {
  return (
    <View >
           <View
            style={{
              backgroundColor: "#262624",
              height: 80,
              marginTop:40,
              flexDirection: "row",
              alignItems: "center",
            }}
            
          >
            <Text style={{color:"white", fontWeight:"bold", fontSize:20, marginLeft:170}}>Services</Text>
          </View>
        
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Introduction to Jumia</Text>
        <Text style={styles.paragraph}>
          Jumia is a leading e-commerce platform in Africa, providing a wide range of products and services to customers across the continent. Founded in 2012, Jumia has grown to become a trusted name in the industry, offering a seamless shopping experience and a diverse selection of items.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jumia's Key Services</Text>
        <Text style={styles.subtitle}>Jumia Marketplace</Text>
        <Text style={styles.paragraph}>
          The Jumia Marketplace is the core of the platform, where customers can browse and purchase a vast array of products, including electronics, fashion, home & kitchen, beauty, and more. Jumia partners with thousands of local and international sellers, providing a one-stop-shop for all shopping needs.
        </Text>

        <Text style={styles.subtitle}>Jumia Food</Text>
        <Text style={styles.paragraph}>
          Jumia Food is the food delivery service offered by Jumia, catering to the needs of customers who prefer the convenience of having their meals delivered to their doorsteps. From fast food to fine dining, Jumia Food partners with a wide range of restaurants and eateries, ensuring a diverse culinary experience.
        </Text>

        <Text style={styles.subtitle}>Jumia Travel</Text>
        <Text style={styles.paragraph}>
          Jumia Travel is the travel booking platform within the Jumia ecosystem, allowing customers to book flights, hotels, and vacation packages with ease. Customers can compare prices, read reviews, and make secure bookings, all within the Jumia app or website.
        </Text>

        <Text style={styles.subtitle}>Jumia Pay</Text>
        <Text style={styles.paragraph}>
          Jumia Pay is the digital payment solution offered by Jumia, providing a secure and convenient way for customers to make transactions on the platform. Jumia Pay supports various payment methods, including mobile money, debit/credit cards, and bank transfers, ensuring a seamless checkout experience.
        </Text>

        <Text style={styles.subtitle}>Jumia Services</Text>
        <Text style={styles.paragraph}>
          Jumia Services encompasses a range of additional services provided by the platform, including Jumia Express (fast delivery), Jumia Prime (subscription-based delivery), and Jumia Logistics (delivery and fulfillment services for businesses).
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jumia's Customer Experience</Text>
        <Text style={styles.paragraph}>
          Jumia is committed to providing an exceptional customer experience across all its services. Some key aspects of Jumia's customer experience include:
        </Text>

        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>Fast and Reliable Delivery</Text>
          <Text style={styles.featureDescription}>
            Jumia's extensive logistics network ensures that orders are delivered quickly and efficiently, with real-time tracking and updates for customers.
          </Text>
        </View>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Secure Payments</Text>
          <Text style={styles.featureDescription}>
          Jumia Pay provides a safe and trusted payment experience, with multiple payment options and advanced security measures to protect customer data.
          </Text>
        </View>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Responsive Customer Support</Text>
          <Text style={styles.featureDescription}>
            Jumia's dedicated customer support team is available 24/7 to assist customers with any inquiries, returns, or issues they may have.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jumia's Commitment to Sustainability</Text>
        <Text style={styles.paragraph}>
          Jumia is dedicated to promoting sustainable practices and reducing its environmental impact. Some of Jumia's sustainability initiatives include:
        </Text>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Eco-Friendly Packaging</Text>
          <Text style={styles.featureDescription}>
            Jumia is actively transitioning to more sustainable packaging options, such as recyclable and biodegradable materials, to minimize waste.
          </Text>
        </View>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Carbon Offset Programs</Text>
          <Text style={styles.featureDescription}>
            Jumia partners with organizations to offset the carbon footprint of its operations, contributing to the fight against climate change.
          </Text>
        </View>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Ethical Sourcing</Text>
          <Text style={styles.featureDescription}>
            Jumia works closely with its suppliers to ensure ethical and responsible sourcing practices, promoting fair labor conditions and environmental stewardship.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Jumia's Social Impact</Text>
        <Text style={styles.paragraph}>
          Jumia is committed to making a positive impact on the communities it serves, with a focus on empowering entrepreneurs, supporting education, and promoting inclusive economic growth.
        </Text>

        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>Empowering Sellers</Text>
          <Text style={styles.featureDescription}>
            Jumia provides a platform for local and international sellers to reach a wider customer base, helping them grow their businesses and create employment opportunities.
          </Text>
        </View>

        <View style={styles.featureContainer}>
        
          <Text style={styles.featureTitle}>Education Initiatives</Text>
          <Text style={styles.featureDescription}>
            Jumia supports various educational programs and scholarships, aiming to improve access to quality education and empower the next generation of leaders.
          </Text>
        </View>

        <View style={styles.featureContainer}>
          <Text style={styles.featureTitle}>Promoting Economic Inclusion</Text>
          <Text style={styles.featureDescription}>
          Jumia's platforms and services are designed to be accessible and inclusive, enabling more individuals and communities to participate in the digital economy.
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conclusion</Text>
        <Text style={styles.paragraph}>
          Jumia's comprehensive range of services, commitment to customer experience, sustainability initiatives, and social impact make it a leading e-commerce platform in Africa. As Jumia continues to evolve and expand, it remains dedicated to empowering businesses, enhancing the lives of its customers, and driving positive change across the continent.
        </Text>
      </View>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({

    
  
  section: {
    marginBottom: 40,
    marginLeft:10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color:"#f07b07"
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    color:"#f07b07"

  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
  },
  featureContainer: {
    // flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 16,
  },
  featureImage: {
    width: 50,
    height: 50,
    marginRight: 16,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color:"#f07b07"

  },
  featureDescription: {
    fontSize: 16,
    lineHeight: 24,

  },
});

export default Services;
