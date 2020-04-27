export interface Cnc {
  id: Number,
  descr: String,
  plant_name: String,
  department_name: String,
  position_id: Number,
  department_id: Number,
  idle_time: Number,
  id_type: String,
  cnc_table_id: String,
  skudId1: Number,
  skudId2: Number,
  average_2019: String
}

export interface Department {
  department_name: String,
  department_id: Number
}

export interface UserLog {
  ACTION: String,
  DEVHINT: Number,
  DEVICEID: Number,
  DEVICENAME: String,
  EMPHINT: Number,
  ID: Number,
  NAME: String,
  POSITION: String,
  TABID: String,
  TIME: String,
  USERACTION: Number
}

export interface User {
  ID: Number,
  NAME: String,
  DESCRIPTION: String,
  EMAIL: String
  EMAIL_SUBJECT: String,
  STATUS: String,
  TABID: String,
  TELEGRAM_CHATID: String,
  TYPE: String,
  USER_MONVIEW_POLICY: String,
  image: string

  // USER_ALMRESTRICTION: 0
  // USER_APPLS_EDIT_ALL: 1
  // USER_APPLS_EDIT_CURRENT: 1
  // USER_APPLS_SEE_ALL: 1
  // USER_APPLS_SEE_CURRENT: 1
  // USER_APRESTRICTION: 0
  // USER_CHOWNPASS: 1
  // USER_CNTLMODULES: 1
  // USER_DEPSRESTRICTION: 0
  // USER_ENABLED: 0
  // USER_EXITPASSWORD: ""
  // USER_EXITPASSWORD_USED: 0
  // USER_FLOORSRESTRICTION: 0
  // USER_GSTAPPL_CREATE: 0
  // USER_GSTAPPL_MODIFY: 0
  // USER_GSTAPPL_RANGE: "ALL"
  // USER_LOCALSETTINGS: 1
  // USER_LOGIN: ""
  // USER_OIF: 1
  // USER_PASSWORD: null
  // USER_REPRESTRICTION: 0
  // USER_T_ALARM: 1
  // USER_T_ALARM_CMD: 1
  // USER_T_ALARM_EDITCONF: 1
  // USER_T_ARCHIVE: 1
  // USER_T_AUTOPARK: 1
  // USER_T_CARDLOGIN: 1
  // USER_T_EDITPLANS: 1
  // USER_T_EVENTS: 1
  // USER_T_FACE: 1
  // USER_T_GUESTS: 1
  // USER_T_GUESTS_DELETEPD: 1
  // USER_T_GUESTS_EDIT: 1
  // USER_T_HW: 1
  // USER_T_MON: 1
  // USER_T_MON_ALLOWANONPASS: 1
  // USER_T_MON_ALLOWAUTHPASS: 1
  // USER_T_MON_ALLOWPASS: 1
  // USER_T_MON_CNTLAP: 1
  // USER_T_NFCTERMINAL: 0
  // USER_T_NFCTERMINAL_REG_AUTO: 0
  // USER_T_NFCTERMINAL_REG_IN: 0
  // USER_T_NFCTERMINAL_REG_OUT: 0
  // USER_T_OD: 1
  // USER_T_PARKINGPAY: 1
  // USER_T_PARKINGTARIFFS: 1
  // USER_T_PAYACC: 1
  // USER_T_PAYACCMNG: 0
  // USER_T_PAYDESK: 1
  // USER_T_PAYDESKLITE: 0
  // USER_T_PAYDESKLITE_MANUALSEL: 0
  // USER_T_PAYDESK_ACCINC: 1
  // USER_T_PAYDESK_MANUALSELECT: 0
  // USER_T_PAYINC: 1
  // USER_T_PAYMENU: 1
  // USER_T_PERSONAL: 1
  // USER_T_PERSONAL_ACC: 1
  // USER_T_PERSONAL_ACCESS: 1
  // USER_T_PERSONAL_ADD: 1
  // USER_T_PERSONAL_BADGES: 1
  // USER_T_PERSONAL_DEL: 1
  // USER_T_PERSONAL_EDIT: 1
  // USER_T_PERSONAL_SETZONE: 1
  // USER_T_PERSONAL_SMS: 1
  // USER_T_PLANS: 1
  // USER_T_REPORTS: 1
  // USER_T_RULES: 1
  // USER_T_USERS: 0
  // USER_WRITEDB: 1
  // AD_DOMAIN_ID: Number,
  // AD_ENABLED: Number,
  // AD_SYNC_PENDING: Number,
  // AD_USER_DN: ""
  // APB_ON: Number,
  // APL_EXPTIME: null
  // APL_ON: Number,
  // BADGE: Number,
  // BADGEB: Number,
  // BOOLPARAM1: Number,
  // BOOLPARAM2: Number,
  // BOOLPARAM3: Number,
  // BOOLPARAM4: Number,
  // CODEKEYTIME: "2016-12-15T11:42:28.000Z"
  // CODEKEY_DISP_FORMAT: String,
  // CREATEDTIME: "2016-09-26T13:36:08.000Z"
  // EXPTIME: null
  // EXTID: null
  // EXTSOURCEID: 0
  // FIREDTIME: "2018-08-16T08:26:06.000Z"
  // LASTLPR_AP: 0
  // LASTLPR_DIR: 0
  // LASTLPR_TIME: null
  // LASTPASS_AP: 5
  // LOCATIONACT: "2018-08-15T06:31:19.000Z"
  // LOCATIONZONE: 0
  // MF_UID: null
  // NTFY_ENDDATE: null
  // NTFY_GSTAPPL_ENABLED: 0
  // NTFY_GSTAPPL_TEXT: null
  // NTFY_LAST_AP: 0
  // NTFY_LAST_DIR: 0
  // NTFY_LAST_SENT: 1
  // NTFY_LAST_TIME: null
  // NTFY_PASS_ENABLED: 0
  // NTFY_PASS_TEXT: null
  // NTFY_PAY_DEC_ENABLED: 0
  // NTFY_PAY_DEC_TEXT: null
  // NTFY_PAY_DEC_THR: 0
  // NTFY_PAY_ENABLED: 0
  // NTFY_PAY_TEXT: null
  // NTFY_STARTDATE: null
  // NTFY_TYPE: "SMS"
  // PARENT_ID: 9
  // POS: ""
  // SIDEPARAM0: null
  // SIDEPARAM1: null
  // SIDEPARAM2: null
  // SIDEPARAM3: null
  // SIDEPARAM4: null
  // SIDEPARAM5: null
  // SMS_TARGETNUMBER: ""
  // SOAA_KEY_STATUS: "UPDATE_REQUIRED"
  // SOAA_UID: null
}

export interface Filter {
  start?: Date,
  end?: Date,
  order?: number
}