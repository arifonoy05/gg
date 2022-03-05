package io.ottapi.ottapi.service;

import io.ottapi.ottapi.model.MD_MENU;
import io.ottapi.ottapi.model.MD_USER;
import io.ottapi.ottapi.repository.MenuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuRepository menuRepository;

    public List<MD_USER> getAllUsers(){
        return menuRepository.allUser();
    }

    public List<MD_MENU> getAllMenu(){
        return menuRepository.getMenu();
    }

    public MD_USER getUserById(String id){
        return menuRepository.getUserById(id);
    }

    public MD_MENU getMenuById(String id){
        return menuRepository.getMenuById(id);
    }

    public void addMenuItem(MD_MENU newMenu){
        menuRepository.addMenuItem(newMenu);
    }
    public void updateMenuById(Long id, MD_MENU menu){
        menuRepository.updateMenuById(id, menu);
    }
    public void deleteMenuById(Long id){
        menuRepository.deleteMenuById(id);
    }
}
