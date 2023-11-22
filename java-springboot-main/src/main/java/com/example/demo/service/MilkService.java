package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Milk;

public interface MilkService {
    List<Milk> getAllMilks();
    Milk getMilkById(Long milkId);
    Milk createMilk(Milk milk);
    Milk updateMilk(Milk milk);
    void deleteMilk(Long milkId);
}
