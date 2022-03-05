package io.ottapi.ottapi.repository;

import com.google.gson.Gson;
import com.google.gson.reflect.TypeToken;
import io.ottapi.ottapi.model.MD_MENU;
import io.ottapi.ottapi.model.MD_USER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class MenuRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<MD_USER> allUser(){

        String sql = "SELECT * FROM MD_MENU";
        List<MD_USER> resultList = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(MD_USER.class));

        return resultList;
    }

    public MD_USER getUserById(String id){
        String sql = "SELECT * FROM MD_USER WHERE ID="+id;
        return jdbcTemplate.queryForObject(sql, MD_USER.class);
    }

    public List<MD_MENU> getMenu(){
        String sql = "SELECT * FROM MD_MENU";
        return jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(MD_MENU.class));
    }

    public MD_MENU getMenuById(String id){
        String sql = "SELECT ID, NAME, MENU_URL, DESCRIPTION, ICON_CLASS, IS_PARENT, IS_SIDEBAR_MENU, PARENT_ID, API_PARENT, HAS_LINK, ACTIVE, PRIORITY FROM MD_MENU WHERE ID='"+ id +"'";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(MD_MENU.class));
    }

    public void addMenuItem(MD_MENU newMenu){
        String sql = "INSERT INTO MD_MENU (`NAME`, `MENU_URL`, `DESCRIPTION`, `ICON_CLASS`, `IS_PARENT`, `PARENT_ID`, `API_PARENT`, `HAS_LINK`, `CHECK_FULL_PATH`, `ACTIVE`, `PRIORITY`, `IS_SIDEBAR_MENU`) VALUES " +
                "('"+newMenu.getNAME()+"', '"+newMenu.getMENU_URL()+"', '"+newMenu.getDESCRIPTION()+"', '"+newMenu.getICON_CLASS()+"', '"+newMenu.getIS_PARENT()+"', '"+newMenu.getPARENT_ID()+"', '"+newMenu.getAPI_PARENT()+"', '"+newMenu.getHAS_LINK()+"', '"+newMenu.getCHECK_FULL_PATH()+"', '"+newMenu.getACTIVE()+"', '"+newMenu.getPRIORITY()+"', '"+newMenu.getIS_SIDEBAR_MENU()+"')";
        jdbcTemplate.update(sql);
    }

    public void updateMenuById(Long id, MD_MENU menu){
        String sql = "UPDATE MD_MENU SET " +
                "   NAME = '"+ menu.getNAME() +
                "', MENU_URL = '"+menu.getMENU_URL() +
                "', DESCRIPTION = '"+menu.getDESCRIPTION() +
                "', ICON_CLASS = '"+menu.getICON_CLASS()+
                "', IS_PARENT = '"+menu.getIS_PARENT()+
                "', PARENT_ID = '"+menu.getPARENT_ID()+
                "', API_PARENT = '"+menu.getAPI_PARENT()+
                "', HAS_LINK = '"+menu.getHAS_LINK()+
                "', CHECK_FULL_PATH = '"+menu.getCHECK_FULL_PATH()+
                "', ACTIVE = '"+menu.getACTIVE()+
                "', PRIORITY = '"+menu.getPRIORITY()+
                "', IS_SIDEBAR_MENU = '"+menu.getIS_SIDEBAR_MENU()+
                "' WHERE ID = '"+id+"';";

        jdbcTemplate.update(sql);
    }

    public void deleteMenuById(Long id){
        String sql = "DELETE FROM MD_MENU WHERE ID="+id+";";
        jdbcTemplate.update(sql);
    }

}
