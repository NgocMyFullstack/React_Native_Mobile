package com.example.demo.controller;

import com.example.demo.entity.Coffee;
import com.example.demo.entity.Order;
import com.example.demo.repository.CoffeeRepository;
import com.example.demo.repository.OrderRepository;
import com.example.demo.service.CoffeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/coffees")
public class CoffeeController {

    @Autowired
    private final CoffeeService coffeeService;
    private CoffeeRepository coffeeRepository;


    public CoffeeController(CoffeeService coffeeService) {
        this.coffeeService = coffeeService;
    }

    @GetMapping
    public ResponseEntity<List<Coffee>> getAllCoffees() {
        List<Coffee> coffees = coffeeService.getAllCoffees();
        return new ResponseEntity<>(coffees, HttpStatus.OK);
    }

    @GetMapping("/{coffeeId}")
    public ResponseEntity<Coffee> getCoffeeById(@PathVariable Long coffeeId) {
        Coffee coffee = coffeeService.getCoffeeById(coffeeId);
        if (coffee != null) {
            return new ResponseEntity<>(coffee, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Coffee> createCoffee(@RequestBody Coffee coffee) {
        Coffee createdCoffee = coffeeService.createCoffee(coffee);
        return new ResponseEntity<>(createdCoffee, HttpStatus.CREATED);
    }

    @PutMapping("/{coffeeId}")
    public ResponseEntity<Coffee> updateCoffee(@PathVariable Long coffeeId, @RequestBody Coffee coffee) {
        coffee.setId(coffeeId);
        Coffee updatedCoffee = coffeeService.updateCoffee(coffee);
        return new ResponseEntity<>(updatedCoffee, HttpStatus.OK);
    }

    @DeleteMapping("/{coffeeId}")
    public ResponseEntity<Void> deleteCoffee(@PathVariable Long coffeeId) {
        coffeeService.deleteCoffee(coffeeId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
