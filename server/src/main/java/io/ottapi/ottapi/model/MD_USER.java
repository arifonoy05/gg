package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MD_USER {
    private Long ID;
    private String NAME;
    private String LOGIN_NAME;
    private String EMAIL;
    private Long USER_GROUP_ID;
    private String USER_GROUP_NAME;
    private String REMARKS;
    private Long CREATED_AT;
    private Long CREATED_BY;
    private String CREATED_BY_USERNAME;
    private Long UPDATED_BY;
    private String UPDATED_BY_USERNAME;
    private Long UPDATED_AT;
    private Integer ACTIVE;
    private Long PRIMARY_RESP_ID;
    private String PRIMARY_RESP_NAME;
    private Long POSITION_ID;
    private String WORK_PHONE;
}
