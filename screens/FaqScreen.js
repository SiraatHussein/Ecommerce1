import {
  StyleSheet,
  Pressable,
  TextInput,
  Image,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const FaqScreen = ({}) => {
  const navigation = useNavigation();

  return (
    <View>
      <View>
      <View style={{ backgroundColor: "white", height: 155 }}>
        <Text style={{fontWeight:"bold", marginTop:100, fontSize:20, fontFamily:"times", marginLeft:50}}>Frequently Asked Questions (FAQ)</Text>
        <View>
          <Image style={{ height: 60, width: 60 }} />
        </View>
        <View
          style={{
            flexDirection: "row",
            marginLeft: 20,
            justifyContent: "flex-end",
            
          }}
        >
          <Pressable>
            <AntDesign
              name="search1"
              size={22}
              color="black"
              marginRight={20}
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Profile")}>
            <Ionicons
              marginRight={20}
              name="person-outline"
              size={24}
              color="black"
            />
          </Pressable>
          <Pressable onPress={() => navigation.navigate("Cart")}>
            <AntDesign
              onPress={() => navigation.navigate("cart")}
              marginRight={20}
              name="shoppingcart"
              size={24}
              color="black"
            />
          </Pressable>
        </View>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: "#f2c64b",
            height: 150,
            marginTop: 50,
            paddingLeft: 10,
            paddingTop: 10,
          }}
        >
          <Text style={{ fontWeight: "600", fontFamily:"times", paddingTop: 10 }}>Help Center</Text>
          <Text style={{ fontWeight: "600", fontFamily:"times", paddingTop: 10 }}>
            Hi, how can we help you?
          </Text>
          <Text style={{ fontWeight: "600" ,fontFamily:"times", paddingTop: 10 }}>
            You can try to find your problem here or contact us
          </Text>
          <Pressable
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginleft: 10,
              gap: 10,
              marginRight: 30,
              marginTop: 10,
              backgroundColor: "white",
              borderRadius: 3,
              height: 38,

              // flex: 1,
            }}
          >
            <AntDesign
              style={{ paddingLeft: 10 }}
              name="search1"
              size={22}
              color="grey"
            />
            <TextInput placeholder="Type keywords like return " />
          </Pressable>
        </View>
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Jumia's Key Services</Text>
            <Text style={styles.subtitle}>Jumia Marketplace</Text>
            <Text style={styles.paragraph}>
              The Jumia Marketplace is the core of the platform, where customers
              can browse and purchase a vast array of products, including
              electronics, fashion, home & kitchen, beauty, and more. Jumia
              partners with thousands of local and international sellers,
              providing a one-stop-shop for all shopping needs.
            </Text>

            <Text style={styles.subtitle}>Jumia Food</Text>
            <Text style={styles.paragraph}>
              Jumia Food is the food delivery service offered by Jumia, catering
              to the needs of customers who prefer the convenience of having
              their meals delivered to their doorsteps. From fast food to fine
              dining, Jumia Food partners with a wide range of restaurants and
              eateries, ensuring a diverse culinary experience.
            </Text>

            <Text style={styles.subtitle}>Jumia Travel</Text>
            <Text style={styles.paragraph}>
              Jumia Travel is the travel booking platform within the Jumia
              ecosystem, allowing customers to book flights, hotels, and
              vacation packages with ease. Customers can compare prices, read
              reviews, and make secure bookings, all within the Jumia app or
              website.
            </Text>

            <Text style={styles.subtitle}>Jumia Pay</Text>
            <Text style={styles.paragraph}>
              Jumia Pay is the digital payment solution offered by Jumia,
              providing a secure and convenient way for customers to make
              transactions on the platform. Jumia Pay supports various payment
              methods, including mobile money, debit/credit cards, and bank
              transfers, ensuring a seamless checkout experience.
            </Text>

            <Text style={styles.subtitle}>Jumia Services</Text>
            <Text style={styles.paragraph}>
              Jumia Services encompasses a range of additional services provided
              by the platform, including Jumia Express (fast delivery), Jumia
              Prime (subscription-based delivery), and Jumia Logistics (delivery
              and fulfillment services for businesses).
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#3e4042",
            height: 50,
            padding: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            gap: 10,
            
          }}
        >
          <Text style={{ color: "white", fontFamily:"times", fontSize: 13 }}>CHAT WITH US</Text>
          <Text style={{ color: "white", fontFamily:"times", fontSize: 13 }}>HELP CENTER</Text>
          <Text style={{ color: "white", fontFamily:"times", fontSize: 13 }}>
            TERMS & CONDITIONS
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "grey",
            height: 70,
            marginBottom: "600",
            gap: 10,
          }}
        >
          <Text style={{ color: "black", marginTop: 10, fontSize: 13 }}>
            This website uses cookies. For further information on how we use{" "}
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ color: "black", fontSize: 13, marginBottom: 3 }}>
              {" "}
              cookies you can read our
            </Text>
            <Text style={{ color: "blue", marginLeft: 3, fontSize: 13 }}>
              Privacy and Cookie notice
            </Text>
          </View>
        </View>
      </ScrollView>
      </View>
    </View>
  );
};

export default FaqScreen;

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
    marginBottom: 40,
    marginLeft: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
    color: "black",
    fontFamily:"times",
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
    color: "black",
    fontFamily:"times",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    fontFamily:"times",
  },
});
