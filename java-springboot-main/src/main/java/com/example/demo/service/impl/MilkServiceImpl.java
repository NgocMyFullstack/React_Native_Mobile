package com.example.demo.service.impl;

import com.example.demo.entity.Milk;
import com.example.demo.repository.MilkRepository;
import com.example.demo.service.MilkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MilkServiceImpl implements MilkService {
    private final MilkRepository milkRepository;

    @Autowired
    public MilkServiceImpl(MilkRepository milkRepository) {
        this.milkRepository = milkRepository;
    }

    @Override
    public List<Milk> getAllMilks() {
        return milkRepository.findAll();
    }

    @Override
    public Milk getMilkById(Long milkId) {
        Optional<Milk> optionalMilk = milkRepository.findById(milkId);
        return optionalMilk.orElse(null);
    }

    @Override
    public Milk createMilk(Milk milk) {
        return milkRepository.save(milk);
    }

    @Override
    public Milk updateMilk(Milk milk) {
        return milkRepository.save(milk);
    }

    @Override
    public void deleteMilk(Long milkId) {
        milkRepository.deleteById(milkId);
    }
}
