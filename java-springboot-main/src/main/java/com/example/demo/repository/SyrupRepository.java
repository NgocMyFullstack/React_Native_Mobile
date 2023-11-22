package com.example.demo.repository;

import com.example.demo.entity.Syrup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SyrupRepository extends JpaRepository<Syrup, Long> {
}