package com.example.demo.service;

import java.util.List;

import com.example.demo.entity.Syrup;

public interface SyrupService {
    List<Syrup> getAllSyrups();
    Syrup getSyrupById(Long syrupId);
    Syrup createSyrup(Syrup syrup);
    Syrup updateSyrup(Syrup syrup);
    void deleteSyrup(Long syrupId);
}
