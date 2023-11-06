import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'light-grey',
  },
  avatar: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 3, 
    borderColor: 'black',
    padding: 16, 
  },
  restaurantName: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
  },
  cardapioTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
    alignItems:'center',
  },
  cardapioItem: {
    marginBottom: 10,
    borderWidth: 5, // Adicione uma borda
    borderColor: 'black', // Cor da borda
    borderRadius: 20,
    padding: 16, // Espaçamento interno
  },
});

function RestaurantDetail() {
  const route = useRoute();
  const { restaurantId } = route.params;
  const [restaurant, setRestaurant] = useState(null);
  const [pratos, setPratos] = useState([]);
  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/gustavoclay/food/restaurantes/${restaurantId}`)
      .then((response) => setRestaurant(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`https://my-json-server.typicode.com/gustavoclay/food/pratos?restaurante_id=${restaurantId}`)
      .then((response) => setPratos(response.data))
      .catch((error) => console.error(error));

    axios
      .get(`https://my-json-server.typicode.com/gustavoclay/food/bebidas?restaurante_id=${restaurantId}`)
      .then((response) => setBebidas(response.data))
      .catch((error) => console.error(error));
  }, [restaurantId]);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.restaurantName}>{restaurant ? restaurant.nome : 'Carregando...'}</Text>
      <Image
        source={{
          uri:
            'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHJlc3RhdXJhbnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
        }}
        style={styles.avatar}
      />
      <Text style={styles.description}>{restaurant ? restaurant.descricao : ''}</Text>
      <Text style={styles.detailText}>Tipo de Cozinha: {restaurant ? restaurant.tipo : ''}</Text>
      <Text style={styles.detailText}>Endereço: {restaurant ? restaurant.endereco : ''}</Text>
      <Text style={styles.detailText}>Horário de Funcionamento: {restaurant ? restaurant.horario : ''}</Text>

      <View>
        <Text style={[styles.cardapioTitle, { textAlign: 'center' }]}>Cardápio</Text>

        <Text style={styles.cardapioTitle}>Pratos</Text>
        <FlatList
          data={pratos}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardapioItem}>
              <Text style={styles.detailText}>{item.nome} Preço: 9,00 </Text>
              <Text style={styles.description}>{item.descricao}</Text>
            </View>
          )}
        />

        <Text style={styles.cardapioTitle}>Bebidas</Text>
        <FlatList
          data={bebidas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.cardapioItem}>
              <Text style={styles.detailText}>{item.nome}</Text>
              <Text style={styles.description}>{item.descricao}</Text>
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
}

export default RestaurantDetail
