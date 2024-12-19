import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function UserDetailsScreen({ route }) {
  const { user } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{user.name}</Text>
      <Text>Email: {user.email}</Text>
      <Text style={styles.sectionHeader}>Address</Text>
      <Text>Street: {user.address.street}</Text>
      <Text>City: {user.address.city}</Text>
      <Text>Zip Code: {user.address.zipcode}</Text>
      <Text style={styles.sectionHeader}>Company</Text>
      <Text>{user.company.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
});