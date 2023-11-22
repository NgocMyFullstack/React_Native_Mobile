package com.example.demo.repository;

import com.example.demo.entity.Milk;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MilkRepository extends JpaRepository<Milk, Long> {
}