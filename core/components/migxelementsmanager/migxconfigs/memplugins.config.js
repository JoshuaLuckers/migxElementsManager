{
  "id":187,
  "name":"memplugins",
  "formtabs":[
    {
      "MIGX_id":49,
      "caption":"Element",
      "print_before_tabs":"0",
      "fields":[
        {
          "MIGX_id":269,
          "field":"package",
          "caption":"Package",
          "description":"Package Name, which the Element belongs to. Saves to the package - path.",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "pos":1
        },
        {
          "MIGX_id":270,
          "field":"static_path",
          "caption":"Static Path",
          "description":"Saves to this path, if defined",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"",
          "default":"",
          "pos":2
        },
        {
          "MIGX_id":271,
          "field":"exclude",
          "caption":"Exclude from Category",
          "description":"Exclude this Element from Saving by its Category",
          "description_is_code":"0",
          "inputTV":"",
          "inputTVtype":"checkbox",
          "validation":"",
          "configs":"",
          "restrictive_condition":"",
          "display":"",
          "sourceFrom":"config",
          "sources":"",
          "inputOptionValues":"exclude==1",
          "default":"",
          "pos":3
        }
      ],
      "pos":1
    }
  ],
  "contextmenus":"",
  "actionbuttons":"loadElements",
  "columnbuttons":"update",
  "filters":"",
  "extended":{
    "migx_add":"Add Plugin",
    "disable_add_item":"",
    "formcaption":"",
    "update_win_title":"",
    "win_id":"memplugins",
    "maxRecords":"",
    "addNewItemAt":"bottom",
    "multiple_formtabs":"",
    "actionbuttonsperrow":4,
    "winbuttonslist":"",
    "extrahandlers":"",
    "filtersperrow":4,
    "packageName":"migxelementsmanager",
    "classname":"memPlugin",
    "task":"",
    "getlistsort":"",
    "getlistsortdir":"",
    "sortconfig":"",
    "gridpagesize":"",
    "use_custom_prefix":"0",
    "prefix":"",
    "grid":"",
    "gridload_mode":1,
    "check_resid":1,
    "check_resid_TV":"",
    "join_alias":"",
    "has_jointable":"no",
    "getlistwhere":"",
    "joins":[
      {
        "alias":"Element"
      }
    ],
    "cmpmaincaption":"Elements Manager",
    "cmptabcaption":"Plugins",
    "cmptabdescription":"Manage Elements here",
    "cmptabcontroller":"",
    "winbuttons":"",
    "onsubmitsuccess":"",
    "submitparams":""
  },
  "columns":[
    {
      "MIGX_id":1,
      "header":"ID",
      "dataIndex":"id",
      "width":10,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":""
    },
    {
      "MIGX_id":2,
      "header":"Name",
      "dataIndex":"Element_name",
      "width":30,
      "sortable":"false",
      "show_in_grid":1,
      "renderer":"this.renderRowActions",
      "clickaction":"",
      "selectorconfig":"",
      "renderchunktpl":"",
      "renderoptions":""
    }
  ],
  "createdby":1,
  "createdon":"2014-06-22 12:37:34",
  "editedby":1,
  "editedon":"2014-06-22 12:54:18",
  "deleted":0,
  "deletedon":"-1-11-30 00:00:00",
  "deletedby":0,
  "published":1,
  "publishedon":"-1-11-30 00:00:00",
  "publishedby":0
}