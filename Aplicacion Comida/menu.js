import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';


const yellowTheme = '#FFC107';
const HomeScreen = () => {
    
  return (
    <View style={styles.container}>
      {/* Header: Ubicación */}
      <View style={styles.header}>
        <Text style={styles.locationTitle}>Usuario</Text>
        <Text style={styles.locationText}>Jousef Antonio Urrutia Guevara</Text>
      </View>

      {/* categoría Scroll View */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryScrollView}>
        <TouchableOpacity style={styles.categoryItem}>
          <Image style={styles.categoryIcon} source={require('./assets/burger.png')} />
          <Text style={styles.categoryText}>Hamburguesas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image style={styles.categoryIcon} source={require('./assets/pizzas.png')} />
          <Text style={styles.categoryText}>Pizza</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image style={styles.categoryIcon} source={require('./assets/bife.png')} />
          <Text style={styles.categoryText}>Carne</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.categoryItem}>
          <Image style={styles.categoryIcon} source={require('./assets/helado.png')} />
          <Text style={styles.categoryText}>Helados</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Promociones y Ofertas */}
      <View style={styles.promotionView}>
        <Text style={styles.promotionText}>Articulos gratis(Gasta $10)</Text>
        <Image style={styles.promotionIcon} source={require('./assets/regalo.png')} />
      </View>

      {/* Sección de Comida Rápida */}
      <View style={styles.fastFoodSection}>
        <Image 
          source={require('./assets/promo.png')} 
          style={styles.fastFoodImage}
        />
        <View style={styles.fastFoodDetails}>
          <Text style={[styles.promotionText, { color: yellowTheme }]}>Articulos gratis(Gasta $10)</Text>
          <Text style={styles.foodTitle}>McDonald's (Mejor oferta)</Text>
          <View style={styles.ratingDeliveryContainer}>
            <Text style={styles.rating}>4.5</Text>
            <Text style={styles.deliveryInfo}>$4.99 Delivery Fee . 15-30 min</Text>
          </View>
        </View>
      </View>

      {/* Sección recomendada */}
        <View style={styles.recommendedSection}>
            <Text style={styles.sectionTitle}>Recomendada</Text>
            <ScrollView 
                 horizontal 
                pagingEnabled 
                showsHorizontalScrollIndicator={false} 
    style={styles.recommendedScrollView}>
        <View style={styles.foodItem}>
            <Image style={styles.foodImage} source={require('./assets/hamburguesa.png')} />
        <View style={styles.foodDetails}>
            <Text style={styles.foodTitle}>Mc Double</Text>
            <Text style={styles.foodPrice}>$20.99</Text>
        </View>
        </View>
        <View style={styles.foodItem}>
            <Image style={styles.foodImage} source={require('./assets/pizza.png')} />
        <View style={styles.foodDetails}>
            <Text style={styles.foodTitle}>Pizza de dios</Text>
            <Text style={styles.foodPrice}>$15.99</Text>
        </View>
        </View>
            </ScrollView>
        </View>

      {/* Navigation Bar */}
      <View style={styles.navigationBar}>
        <Image style={styles.navIcon} source={require('./assets/bag.png')} />
        <Image style={styles.navIcon} source={require('./assets/usuario.png')} />
        <Image style={[styles.navIcon, styles.navIconActive]} source={require('./assets/home.png')} />
        <Image style={styles.navIcon} source={require('./assets/lupa.png')} />
    </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9EC',
  },
  header: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#FFE082', 
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF6F00', 
  },
  locationText: {
    fontSize: 14,
    color: '#F57C00',
  },
    categoryScrollView: {
      paddingHorizontal: 20,
      paddingTop: 20,
    },
    categoryItem: {
      alignItems: 'center',
      marginRight: 15,
      backgroundColor: '#FFECB3',
      borderRadius: 10, 
      padding: 10, 
    },
    categoryIcon: {
      width: 50,
      height: 50,
    },
    categoryText: {
      fontSize: 14,
      color: '#FF9800', 
    },
    promotionView: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: '#FFF8E1', 
    },
    promotionText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#FFA000', 
    },
    promotionIcon: {
      width: 20,
      height: 20,
    },
    recommendedSection: {
      marginTop: 10,
      paddingHorizontal: 20,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    recommendedScrollView: {
      paddingBottom: 10,
    },
    foodItem: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 10,
      width: 300, 
    },
    foodImage: {
      width: 120, 
      height: 120, 
      borderRadius: 10, 
    },
    foodDetails: {
      justifyContent: 'center',
      marginLeft: 10,
    },
    foodTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333', 
    },
    foodPrice: {
      fontSize: 18,
      color: 'grey',
    },
    fastFoodSection: {
      backgroundColor: '#FFF',
      padding: 10,
      borderRadius: 10,
      marginHorizontal: 20,
      marginTop: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    fastFoodImage: {
      width: '100%',
      height: 150,
      borderRadius: 10,
    },
    fastFoodDetails: {
      paddingVertical: 10,
    },
    ratingDeliveryContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      fontWeight: 'bold',
      color: yellowTheme, 
      fontSize: 18,
      marginRight: 10,
    },
    deliveryInfo: {
      fontSize: 14,
      color: 'grey',
    },
    navigationBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 15, 
        backgroundColor: '#FFF3E0', 
        borderTopWidth: 2,
        borderTopColor: '#FFCCBC', 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 20, 
      },
    navIcon: {
      width: 30,
      height: 30,
    },
    navIconActive: {
      width: 30,
      height: 30,
      // Para resaltar el icono activo
      borderWidth: 2,
      borderColor: yellowTheme, 
      borderRadius: 15, 
    },
    
  });

  export default HomeScreen;
