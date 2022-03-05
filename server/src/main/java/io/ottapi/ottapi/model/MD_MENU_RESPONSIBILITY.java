package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MD_MENU_RESPONSIBILITY {
    private Long ID = 0L;
    private Long RESPONSIBILITY_ID = 0L;
    private Long MENU_ID = 0L;
    private Long ACTIVE = 0L;
    private String CREATED_AT = "";
    private String CREATED_BY = "";
    private String CREATED_BY_USERNAME = "";

    public MD_MENU_RESPONSIBILITY(Long RESPONSIBILITY_ID, Long MENU_ID, Long ACTIVE, String CREATED_AT, String CREATED_BY, String CREATED_BY_USERNAME) {
        this.RESPONSIBILITY_ID = RESPONSIBILITY_ID;
        this.MENU_ID = MENU_ID;
        this.ACTIVE = ACTIVE;
        this.CREATED_AT = CREATED_AT;
        this.CREATED_BY = CREATED_BY;
        this.CREATED_BY_USERNAME = CREATED_BY_USERNAME;
    }
}
