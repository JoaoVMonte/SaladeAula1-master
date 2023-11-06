
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { IconButton } from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    padding: 16,
    backgroundColor: 'light-grey',
  },
  restaurantItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderWidth: 3,
    borderColor: 'black',
    padding: 10, 
    borderRadius: 8,

  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  restaurantInfo: {
    marginLeft: 30,
  },
  restaurantName: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  restaurantType: {
    fontSize: 15,
  },
});

function RestaurantList() {
  const navigation = useNavigation();
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/gustavoclay/food/restaurantes')
      .then(response => setRestaurants(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleRestaurantClick = (id) => {
    navigation.navigate('RestaurantDetail', { restaurantId: id });
  };

  return (
    <View style={styles.container}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center' }}>Restaurantes</Text>
      <FlatList
        data={restaurants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.restaurantItem} onPress={() => handleRestaurantClick(item.id)}>
            <Image source={{ uri: "https://plus.unsplash.com/premium_photo-1670984940113-f3aa1cd1309a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"  }} style={styles.avatar} />
            <View style={styles.restaurantInfo}>
              <IconButton name="star" size = {20} color ="gold"/>
              <Text style={styles.restaurantName}>{item.nome}</Text>
              <Text style={styles.restaurantType}>{item.tipo}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default RestaurantList