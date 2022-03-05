package io.ottapi.ottapi.repository;

import io.ottapi.ottapi.model.MD_MENU;
import io.ottapi.ottapi.model.USER_RESPONSIBILITY_LIST;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.PreparedStatementCreator;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.List;

@Repository
public class ResponsibilityRepository {
    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<USER_RESPONSIBILITY_LIST> allResponsibility() {
        String sql = "SELECT * FROM MD_RESPONSIBILITY";
        List<USER_RESPONSIBILITY_LIST> resultList = jdbcTemplate.query(sql, new BeanPropertyRowMapper<>(USER_RESPONSIBILITY_LIST.class));
//        System.out.println(resultList);
        return resultList;
    }

    public USER_RESPONSIBILITY_LIST getResponsibilityById(Long id) {
        String sql = "SELECT * FROM MD_RESPONSIBILITY WHERE ID='" + id + "';";
        return jdbcTemplate.queryForObject(sql, new BeanPropertyRowMapper<>(USER_RESPONSIBILITY_LIST.class));
    }

    public Long addResponsibility(USER_RESPONSIBILITY_LIST responsibility_list) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        String sql = "INSERT INTO MD_RESPONSIBILITY (NAME, DESCRIPTION, ACTIVE) VALUES (?, ?, ?)";

        jdbcTemplate.update(new PreparedStatementCreator() {
            public PreparedStatement createPreparedStatement(Connection connection) throws SQLException {
                PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
                ps.setString(1, responsibility_list.getNAME());
                ps.setString(2, responsibility_list.getDESCRIPTION());
                ps.setInt(3, responsibility_list.getACTIVE());
                return ps;
            }
        }, keyHolder);

        System.out.println(keyHolder.getKey().longValue());
        return keyHolder.getKey().longValue();

    }

    public USER_RESPONSIBILITY_LIST updateResponsibility(Long id, USER_RESPONSIBILITY_LIST responsibility_list) {
        String sql = "UPDATE MD_RESPONSIBILITY SET NAME = '" + responsibility_list.getNAME() + "', DESCRIPTION = '" + responsibility_list.getDESCRIPTION() + "', ACTIVE = '" + responsibility_list.getACTIVE() + "', CREATED_AT = '" + responsibility_list.getCREATED_AT() + "', CREATED_BY = '" + responsibility_list.getCREATED_BY() + "', CREATED_BY_USERNAME = '" + responsibility_list.getCREATED_BY_USERNAME() + "', UPDATED_AT = '" + responsibility_list.getUPDATED_AT() + "', UPDATED_BY = '" + responsibility_list.getUPDATED_BY() + "', UPDATED_BY_USERNAME = '" + responsibility_list.getUPDATED_BY_USERNAME() + "';";

        jdbcTemplate.update(sql);
        return getResponsibilityById(id);
    }

    public void deleteResponsibilityById(Long id) {
        String sql = "DELETE FROM MD_RESPONSIBILITY WHERE ID=" + id + ";";
        jdbcTemplate.update(sql);
    }
}
