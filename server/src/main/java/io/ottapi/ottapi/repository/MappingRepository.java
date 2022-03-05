package io.ottapi.ottapi.repository;

import io.ottapi.ottapi.model.MD_MENU;
import io.ottapi.ottapi.model.MD_MENU_RESPONSIBILITY;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Map;

@Repository
public class MappingRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<MD_MENU_RESPONSIBILITY> findMenuListByResponsibility(Long id){
        String sql = "SELECT RESPONSIBILITY_ID, MENU_ID, ACTIVE, CREATED_AT, CREATED_BY, CREATED_BY_USERNAME FROM MD_RESPONSIBILITY_MENU_MAP WHERE `RESPONSIBILITY_ID` = '\"+id+\"';";

        List<MD_MENU_RESPONSIBILITY> result =  jdbcTemplate.queryForObject(sql, List.class);

        System.out.println(result);
        return  result;
    }

    public void mapMenuToResponsibility(Long resID, Map<String, String> json){
        json.put("active", json.get("active"));
        json.put("responsibility", json.get("responsibility"));

        String sql = "INSERT INTO MD_RESPONSIBILITY_MENU_MAP (`RESPONSIBILITY_ID`, `MENU_ID`, `ACTIVE`) VALUES ('"+resID+"', '"+json.get("responsibility")+"', '"+json.get("active")+"');";
        System.out.println(sql);
        jdbcTemplate.update(sql);
    }
}
