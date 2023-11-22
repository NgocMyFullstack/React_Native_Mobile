package com.example.demo.entity;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;


@Transactional
@Data
@NoArgsConstructor
@Entity
@Table(name = "coffees")
public class Coffee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Column(nullable = false)
    private String image;
    @Column(nullable = false)
    private Double price;

    // ------MILK-----
    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnoreProperties("id")
    @JoinColumn(name = "coffee_id", referencedColumnName = "id")
    private List<Milk> milks;

    @JsonIgnore
    public List<Milk> getMilk() {
        return milks;
    }

    public List<String> getMilks() {
        List<String> milkNames = new ArrayList<>();
        for (Milk milk : milks) {
            milkNames.add(milk.getName());
        }
        return milkNames;
    }

    // ------SYRUP-----
    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnoreProperties("id")
    @JoinColumn(name = "coffee_id", referencedColumnName = "id", nullable = true)
    private List<Syrup> syrups;
    
    @JsonIgnore
    public List<Syrup> getSyrup() {
        return syrups;
    }

    public List<String> getSyrups() {
        List<String> syrupNames = new ArrayList<>();
        for (Syrup syrup : syrups) {
            syrupNames.add(syrup.getName());
        }
        return syrupNames;
    }

    @OneToMany
    @JsonIgnore
    @JoinColumn(name = "coffee_id")
    private List<OrderDetail> orderDetails;

    @ManyToOne
    @JoinColumn(name = "res_id")
    private Restaurant restaurant;
}