package io.ottapi.ottapi.controller;

import io.ottapi.ottapi.model.*;
import io.ottapi.ottapi.service.MenuService;
import io.ottapi.ottapi.service.ResponsibilityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import top.jfunc.json.JsonObject;
import top.jfunc.json.impl.JSONObject;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class MainController {
    @Autowired
    private MenuService menuService;

    @Autowired
    private ResponsibilityService responsibilityService;

    // USERS
    @GetMapping("/users")
    public List<MD_USER> getUsers(){
        return menuService.getAllUsers();
    }

    @GetMapping("/users/{id}")
    public MD_USER getUserById(@PathVariable("id") String id){
        return menuService.getUserById(id);
    }

    // MENU
    @GetMapping("/menu")
    public List<MD_MENU> getMenu(){
        return menuService.getAllMenu();
    }

    @GetMapping("/menu/{id}")
    public MD_MENU getMenuById(@PathVariable("id") String id){
        return menuService.getMenuById(id);
    }

    @PostMapping("/menu/add")
    public String addMenuItem(@RequestBody MD_MENU newMenu){
        menuService.addMenuItem(newMenu);

        return "MENU ADDED SUCCESSFULLY";
    }

    @PutMapping("/menu/update/{id}")
    public int updateMenuById(@RequestBody MD_MENU menu, @PathVariable(name = "id") Long id){
        menuService.updateMenuById(id, menu);

        return 200;
    }

    @DeleteMapping("/menu/delete/{id}")
    public String deleteMenuById(@PathVariable(name = "id") Long id){
        menuService.deleteMenuById(id);
        return "MENU DELETED SUCCESSFULLY";
    }

    // RESPONSIBILITY
    @GetMapping("/responsibility")
    public List<USER_RESPONSIBILITY_LIST> allResponsibility(){
        return responsibilityService.allResponsibility();
    }

    @GetMapping("/responsibility/{id}")
    public USER_RESPONSIBILITY_LIST getResponsibilityById(@PathVariable(name = "id") Long id){
        return responsibilityService.getResponsibilityById(id);
    }

    @PostMapping("/responsibility/add")
    public Long addResponsibilityItem(@RequestBody USER_RESPONSIBILITY_LIST newResponsibility){
        return responsibilityService.addResponsibility(newResponsibility);
    }

    @PutMapping("/responsibility/update/{id}")
    public String updateResponsibility(@PathVariable(name = "id") Long id, @RequestBody USER_RESPONSIBILITY_LIST responsibility){
        return "Responsibility of ID: "+id+" has been updated successfully";
    }

    @DeleteMapping("/responsibility/delete/{id}")
    public String deleteResponsibility(@PathVariable(name = "id") Long id){
        responsibilityService.deleteResponsibilityById(id);
        return "RESPONSIBILITY of id: "+id+" was deleted successfully!";
    }

    // FIND MENU BY RESPONSIBILITY
    @GetMapping("/responsibility/{id}/menu")
    public List<MD_MENU_RESPONSIBILITY> findMenuListByResponsibility(@PathVariable(name = "id") Long id){
        return responsibilityService.findMenuListByResponsibility(id);
    }

    @PostMapping("/responsibility/addMenu/{resId}")
    public String addMenuToResponsibility(@PathVariable(name = "resId") Long resId,@RequestBody Map<String, String> json){
        json.put("active", json.get("active"));
        json.put("responsibility", json.get("responsibility"));

        if(resId!=0){
            responsibilityService.mapMenuToResponsibility(resId, json);
            return "Menu of ID: "+json.get("responsibility")+" has been added to Responsibility of ID: "+resId+" successfully";
        }
        return "Responsibility added, no menu to map";

    }
}
