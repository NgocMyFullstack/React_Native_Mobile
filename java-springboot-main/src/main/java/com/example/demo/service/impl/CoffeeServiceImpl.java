package com.example.demo.service.impl;

import com.example.demo.entity.Coffee;
import com.example.demo.repository.CoffeeRepository;
import com.example.demo.service.CoffeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CoffeeServiceImpl implements CoffeeService {
    private final CoffeeRepository coffeeRepository;

    @Autowired
    public CoffeeServiceImpl(CoffeeRepository coffeeRepository) {
        this.coffeeRepository = coffeeRepository;
    }

    @Override
    public List<Coffee> getAllCoffees() {
        return coffeeRepository.findAll();
    }

    @Override
    public Coffee getCoffeeById(Long coffeeId) {
        Optional<Coffee> optionalCoffee = coffeeRepository.findById(coffeeId);
        return optionalCoffee.orElse(null);
    }

    @Override
    public Coffee createCoffee(Coffee coffee) {
        return coffeeRepository.save(coffee);
    }

    @Override
    public Coffee updateCoffee(Coffee coffee) {
        return coffeeRepository.save(coffee);
    }

    @Override
    public void deleteCoffee(Long coffeeId) {
        coffeeRepository.deleteById(coffeeId);
    }
}
