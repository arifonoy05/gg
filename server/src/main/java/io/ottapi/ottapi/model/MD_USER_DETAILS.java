package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MD_USER_DETAILS {
    private Long ID;
    private Long USER_ID;
    private String LOGIN_NAME;
    private String NAME_PREFIX;
    private String FIRST_NAME;
    private String LAST_NAME;
    private String ALIAS_NAME;
    private String SHORT_NAME;
    private String DEALER_CODE;
    private String EXTENSION;
    private String PAGER;
    private String PRESENCE;
    private String MOBILE_PHONE;
    private String FAX;
    private String WORK_ADDRESS;
    private String CITY;
    private String ZIP_CODE;
    private String STATE;
    private String COUNTRY;
    private Long SOURCE_ID;
    private Long SOURCE_LOCATION_ID;
    private String TIME_ZONE;
    private Long POSITION_ORGANIZATION_ID;
    private String POSITION_ORGANIZATION_NAME;
    private Long ADDRESS_ID;
}
