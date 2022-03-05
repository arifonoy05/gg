package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MD_USER_RESPONSIBILITY {
    private long ID;
    private long USER_ID;
    private long RESPONSIBILITY_ID;
    private int IS_PRIMARY;
    private int ACTIVE;
    private long CREATED_AT;
    private int CREATED_BY;
    private String CREATED_BY_USERNAME;

    public MD_USER_RESPONSIBILITY(long USER_ID, long RESPONSIBILITY_ID, int IS_PRIMARY, int ACTIVE, long CREATED_AT, int CREATED_BY, String CREATED_BY_USERNAME) {
        this.USER_ID = USER_ID;
        this.RESPONSIBILITY_ID = RESPONSIBILITY_ID;
        this.IS_PRIMARY = IS_PRIMARY;
        this.ACTIVE = ACTIVE;
        this.CREATED_AT = CREATED_AT;
        this.CREATED_BY = CREATED_BY;
        this.CREATED_BY_USERNAME = CREATED_BY_USERNAME;
    }
}
