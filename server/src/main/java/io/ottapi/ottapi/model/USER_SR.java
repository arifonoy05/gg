package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class USER_SR {
    private Long ID;
    private String NAME;
    private String LOGIN_NAME;
    private String EMAIL;
    private Long USER_GROUP_ID;
    private String USER_GROUP_NAME;
    private Long PRIMARY_RESP_ID;
    private String PRIMARY_RESP_NAME;
    private Long POSITION_ID;
    private String WORK_PHONE;
    private Long SOURCE_ID;
    private Long SOURCE_LOCATION_ID;
    private Long POSITION_ORGANIZATION_ID;
    private String POSITION_ORGANIZATION_NAME;
}
