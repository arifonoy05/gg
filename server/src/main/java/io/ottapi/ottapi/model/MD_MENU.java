package io.ottapi.ottapi.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MD_MENU {
    private Long ID=null;
    private String NAME=null;
    private String MENU_URL=null;
    private String DESCRIPTION=null;
    private String ICON_CLASS=null;
    private Integer IS_PARENT=0;
    private Long PARENT_ID=0L;
    private Long API_PARENT =0L;
    private Integer HAS_LINK=0;
    private Integer CHECK_FULL_PATH=0;
    private Integer ACTIVE=0;
    private Integer PRIORITY=0;
    private Long CREATED_AT;
    private Integer CREATED_BY;
    private String CREATED_BY_USERNAME;
    private Long UPDATED_AT;
    private Integer UPDATED_BY;
    private String UPDATED_BY_USERNAME;
    private Integer IS_SIDEBAR_MENU=0;

    public MD_MENU(String NAME, String MENU_URL, String DESCRIPTION, String ICON_CLASS, Integer IS_PARENT, Long PARENT_ID, Long API_PARENT, Integer HAS_LINK, Integer CHECK_FULL_PATH, Integer ACTIVE, Integer PRIORITY, long CREATED_AT, int CREATED_BY, String CREATED_BY_USERNAME, long UPDATED_AT, int UPDATED_BY, String UPDATED_BY_USERNAME, Integer IS_SIDEBAR_MENU) {
        this.NAME = NAME;
        this.MENU_URL = MENU_URL;
        this.DESCRIPTION = DESCRIPTION;
        this.ICON_CLASS = ICON_CLASS;
        this.IS_PARENT = IS_PARENT;
        this.PARENT_ID = PARENT_ID;
        this.API_PARENT = API_PARENT;
        this.HAS_LINK = HAS_LINK;
        this.CHECK_FULL_PATH = CHECK_FULL_PATH;
        this.ACTIVE = ACTIVE;
        this.PRIORITY = PRIORITY;
        this.CREATED_AT = CREATED_AT;
        this.CREATED_BY = CREATED_BY;
        this.CREATED_BY_USERNAME = CREATED_BY_USERNAME;
        this.UPDATED_AT = UPDATED_AT;
        this.UPDATED_BY = UPDATED_BY;
        this.UPDATED_BY_USERNAME = UPDATED_BY_USERNAME;
        this.IS_SIDEBAR_MENU = IS_SIDEBAR_MENU;
    }
}
