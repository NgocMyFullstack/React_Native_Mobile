package com.example.demo.entity;

import lombok.Data;
import lombok.NoArgsConstructor;


import jakarta.persistence.*;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Data
@NoArgsConstructor
@Table(name = "syrups")
public class Syrup {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "coffee_id")
    private Coffee coffee;
}