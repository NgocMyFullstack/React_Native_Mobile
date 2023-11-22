package com.example.demo.controller;

import com.example.demo.entity.Milk;
import com.example.demo.service.MilkService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/milks")
public class MilkController {

    private final MilkService milkService;

    public MilkController(MilkService milkService) {
        this.milkService = milkService;
    }

    @GetMapping
    public ResponseEntity<List<Milk>> getAllMilks() {
        List<Milk> milks = milkService.getAllMilks();
        return new ResponseEntity<>(milks, HttpStatus.OK);
    }

    @GetMapping("/{milkId}")
    public ResponseEntity<Milk> getMilkById(@PathVariable Long milkId) {
        Milk milk = milkService.getMilkById(milkId);
        if (milk != null) {
            return new ResponseEntity<>(milk, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Milk> createMilk(@RequestBody Milk milk) {
        Milk createdMilk = milkService.createMilk(milk);
        return new ResponseEntity<>(createdMilk, HttpStatus.CREATED);
    }

    @PutMapping("/{milkId}")
    public ResponseEntity<Milk> updateMilk(@PathVariable Long milkId, @RequestBody Milk milk) {
        milk.setId(milkId);
        Milk updatedMilk = milkService.updateMilk(milk);
        return new ResponseEntity<>(updatedMilk, HttpStatus.OK);
    }

    @DeleteMapping("/{milkId}")
    public ResponseEntity<Void> deleteMilk(@PathVariable Long milkId) {
        milkService.deleteMilk(milkId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
