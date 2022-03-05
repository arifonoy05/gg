package io.ottapi.ottapi.service;

import io.ottapi.ottapi.model.MD_MENU;
import io.ottapi.ottapi.model.MD_MENU_RESPONSIBILITY;
import io.ottapi.ottapi.model.MD_USER_RESPONSIBILITY;
import io.ottapi.ottapi.model.USER_RESPONSIBILITY_LIST;
import io.ottapi.ottapi.repository.MappingRepository;
import io.ottapi.ottapi.repository.ResponsibilityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Map;

@Service
public class ResponsibilityService {
    @Autowired
    private ResponsibilityRepository responsibilityRepository;
    @Autowired
    private MappingRepository mappingRepository;

    public List<USER_RESPONSIBILITY_LIST> allResponsibility(){
        return responsibilityRepository.allResponsibility();
    }

    public USER_RESPONSIBILITY_LIST getResponsibilityById(Long id){
        return responsibilityRepository.getResponsibilityById(id);
    }

    public List<MD_MENU_RESPONSIBILITY> findMenuListByResponsibility(Long id){
        return mappingRepository.findMenuListByResponsibility(id);
    }

    public Long addResponsibility(USER_RESPONSIBILITY_LIST responsibility_list){
        return responsibilityRepository.addResponsibility(responsibility_list);
    }

    public USER_RESPONSIBILITY_LIST updateResponsibility(Long id, USER_RESPONSIBILITY_LIST responsibility_list){
        return responsibilityRepository.updateResponsibility(id, responsibility_list);
    }

    public void mapMenuToResponsibility(Long resId, Map<String, String> json){
        json.put("active", json.get("active"));
        json.put("responsibility", json.get("responsibility"));

        mappingRepository.mapMenuToResponsibility(resId, json);
    }

    public void deleteResponsibilityById(Long id){
        responsibilityRepository.deleteResponsibilityById(id);
    }

}
