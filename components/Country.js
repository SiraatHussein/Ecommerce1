import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';

const Country= () => {
  const countries = [
    { name: 'Benin', selected: false },
    { name: 'Burkina Faso', selected: false },
    { name: 'Cape Verde', selected: false },
    { name: 'Côte d\'Ivoire', selected: false },
    { name: 'Gambia', selected: false },
    { name: 'Ghana', selected: false },
    { name: 'Guinea', selected: false },
    { name: 'Guinea-Bissau', selected: false },
    { name: 'Liberia', selected: false },
    { name: 'Mali', selected: false },
    { name: 'Mauritania', selected: false },
    { name: 'Niger', selected: false },
    { name: 'Nigeria', selected: false },
    { name: 'Senegal', selected: false },
    { name: 'Sierra Leone', selected: false },
    { name: 'Togo', selected: false },
  ];

  const [selectedCountry, setSelectedCountry] = useState(null);

  const toggleCountrySelection = (index) => {
    const updatedCountries = countries.map((country, i) => ({
      ...country,
      selected: i === index,
    }));
    setSelectedCountry(updatedCountries[index].name);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select  Country</Text>
      <FlatList
        data={countries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.countryContainer}
            onPress={() => toggleCountrySelection(index)}
          >
            <View style={[styles.radioButton, item.selected && styles.radioButtonSelected]}>
              {item.selected && <View style={styles.radioButtonFill} />}
            </View>
            <Text style={styles.countryName}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {selectedCountry && (
        <View style={styles.selectedCountryContainer}>
          <Text style={styles.selectedCountryLabel}>Selected Country:</Text>
          <Text style={styles.selectedCountry}>{selectedCountry}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    marginTop:20,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  countryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  radioButton: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: '#007aff',
  },
  radioButtonFill: {
    width: 12,
    height: 12,
    backgroundColor: '#007aff',
    borderRadius: 6,
  },
  countryName: {
    fontSize: 16,
    color:'#f07b07'
  },
  selectedCountryContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedCountryLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 10,
  },
  selectedCountry: {
    fontSize: 20,
    fontWeight:"bold",
    color:'#f07b07'
  },
});

export default Country;
