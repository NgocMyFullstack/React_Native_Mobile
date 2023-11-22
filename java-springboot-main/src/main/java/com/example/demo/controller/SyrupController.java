package com.example.demo.controller;

import com.example.demo.entity.Syrup;
import com.example.demo.service.SyrupService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/syrups")
public class SyrupController {

    private final SyrupService syrupService;

    public SyrupController(SyrupService syrupService) {
        this.syrupService = syrupService;
    }

    @GetMapping
    public ResponseEntity<List<Syrup>> getAllSyrups() {
        List<Syrup> syrups = syrupService.getAllSyrups();
        return new ResponseEntity<>(syrups, HttpStatus.OK);
    }

    @GetMapping("/{syrupId}")
    public ResponseEntity<Syrup> getSyrupById(@PathVariable Long syrupId) {
        Syrup syrup = syrupService.getSyrupById(syrupId);
        if (syrup != null) {
            return new ResponseEntity<>(syrup, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Syrup> createSyrup(@RequestBody Syrup syrup) {
        Syrup createdSyrup = syrupService.createSyrup(syrup);
        return new ResponseEntity<>(createdSyrup, HttpStatus.CREATED);
    }

    @PutMapping("/{syrupId}")
    public ResponseEntity<Syrup> updateSyrup(@PathVariable Long syrupId, @RequestBody Syrup syrup) {
        syrup.setId(syrupId);
        Syrup updatedSyrup = syrupService.updateSyrup(syrup);
        return new ResponseEntity<>(updatedSyrup, HttpStatus.OK);
    }

    @DeleteMapping("/{syrupId}")
    public ResponseEntity<Void> deleteSyrup(@PathVariable Long syrupId) {
        syrupService.deleteSyrup(syrupId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
