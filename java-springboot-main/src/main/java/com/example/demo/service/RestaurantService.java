package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Restaurant;

public interface RestaurantService {
    List<Restaurant> getAllRestaurants();
    Restaurant getRestaurantById(Long restaurantId);
    Restaurant createRestaurant(Restaurant restaurant);
    Restaurant updateRestaurant(Restaurant restaurant);
    void deleteRestaurant(Long restaurantId);
}
