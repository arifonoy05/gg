package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class USER_RESPONSIBILITY_LIST {
           private Long ID;
           private String NAME;
           private String DESCRIPTION;
           private int ACTIVE;
           private Long CREATED_AT;
           private Long CREATED_BY;
           private String CREATED_BY_USERNAME;
           private Long UPDATED_AT;
           private Long UPDATED_BY;
           private String UPDATED_BY_USERNAME;
//           private CREATED_AT_DT;
//           private UPDATED_AT_DT;

    public USER_RESPONSIBILITY_LIST(String NAME, String DESCRIPTION, int ACTIVE, Long CREATED_AT, Long CREATED_BY, String CREATED_BY_USERNAME, Long UPDATED_AT, Long UPDATED_BY, String UPDATED_BY_USERNAME) {
        this.NAME = NAME;
        this.DESCRIPTION = DESCRIPTION;
        this.ACTIVE = ACTIVE;
        this.CREATED_AT = CREATED_AT;
        this.CREATED_BY = CREATED_BY;
        this.CREATED_BY_USERNAME = CREATED_BY_USERNAME;
        this.UPDATED_AT = UPDATED_AT;
        this.UPDATED_BY = UPDATED_BY;
        this.UPDATED_BY_USERNAME = UPDATED_BY_USERNAME;
    }
}
