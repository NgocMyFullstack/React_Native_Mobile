package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Coffee;

public interface CoffeeService {
    List<Coffee> getAllCoffees();
    Coffee getCoffeeById(Long coffeeId);
    Coffee createCoffee(Coffee coffee);
    Coffee updateCoffee(Coffee coffee);
    void deleteCoffee(Long coffeeId);
}
