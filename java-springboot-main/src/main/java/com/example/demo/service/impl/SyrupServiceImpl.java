package com.example.demo.service.impl;

import com.example.demo.entity.Syrup;
import com.example.demo.repository.SyrupRepository;
import com.example.demo.service.SyrupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SyrupServiceImpl implements SyrupService {
    private final SyrupRepository syrupRepository;

    @Autowired
    public SyrupServiceImpl(SyrupRepository syrupRepository) {
        this.syrupRepository = syrupRepository;
    }

    @Override
    public List<Syrup> getAllSyrups() {
        return syrupRepository.findAll();
    }

    @Override
    public Syrup getSyrupById(Long syrupId) {
        Optional<Syrup> optionalSyrup = syrupRepository.findById(syrupId);
        return optionalSyrup.orElse(null);
    }

    @Override
    public Syrup createSyrup(Syrup syrup) {
        return syrupRepository.save(syrup);
    }

    @Override
    public Syrup updateSyrup(Syrup syrup) {
        return syrupRepository.save(syrup);
    }

    @Override
    public void deleteSyrup(Long syrupId) {
        syrupRepository.deleteById(syrupId);
    }
}
