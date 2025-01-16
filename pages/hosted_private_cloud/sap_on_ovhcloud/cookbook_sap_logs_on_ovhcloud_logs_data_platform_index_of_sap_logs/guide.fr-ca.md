---
title: "SAP logs sur OVHcloud Logs Data Platform - Index des logs SAP"
excerpt: "Ce guide a pour but de vous aider à récupérer les bons champs de vos logs SAP pour effectuer des recherches dans vos logs."
updated: 2024-05-16
---

## Objectif

Ce guide a pour but de vous aider à récupérer les champs de vos logs SAP pour effectuer des recherches dans vos logs.

Si vous n'avez pas configuré votre service OVHcloud Logs Data Platform, veuillez prendre connaissance de notre documentation [SAP logs on OVHcloud Logs Data Platform - Configuration](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_logs_on_ovhcloud_logs_data_platform_solution_setup) pour démarrer.

## Prérequis

- [SAP logs on OVHcloud Logs Data Platform configuré](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_logs_on_ovhcloud_logs_data_platform_solution_setup)

## En pratique

| Valeur du champ saplog  | Fichier source des logs | Champs additionnels |
| ----------------------- | ----------------------- | ------------------- |
| available           | /usr/sap/<SAP_SID\>/{D\|J\|ASCS\|SCS\|HDB\|W}<INSTANCE_NUMBER\>/work/available.log | |
| sapstartsrv         | /usr/sap/<SAP_SID\>/{D\|J\|ASCS\|SCS\|W}<INSTANCE_NUMBER\>/work/sapstartsrv.log | |
| dev_icm             | /usr/sap/<SAP_SID\>/{D\|J}<INSTANCE_NUMBER\>/work/dev_icm | |
| dev_rfc             | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/work/dev_rfc* | |
| dev_disp            | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/work/dev_disp | |
| dev_rd              | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/work/dev_rd                           | |
| dev_w               | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/work/dev_w*                           | |
| gw_log              | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/work/gw_log*                          | |
| applications_java   | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/applications_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| default_trace_java  | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/defaultTrace_\*.\*.trc | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| config_changes_java | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/configChanges_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| security_audit_java | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/security_audit_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo, Event_Name, Event_Type, ObjectID, ObjectName, Details |
| userinterface_java  | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/userinterface_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| database_java       | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/database_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| security_java       | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/security_0\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| server_java         | /usr/sap/<SAP_SID\>/J<INSTANCE_NUMBER\>/j2ee/cluster/server*/log/system/server_\*.\*.log | SAP_Version, DateTime, TimeZone, Severity, SourceName, MsgCode, CSN_Component, DC_Component, GUID, Correlation_ID, SAP_Application, SAP_Location, SAP_User, Session, Transaction, DSRRootContextID, DSRTransaction, DSRConnection, DSRCounter, ThreadName, MsgType, ResourceBundle, MsgText, MsgArgsNo |
| dev_ms              | /usr/sap/<SAP_SID\>/{ASCS\|SCS}<INSTANCE_NUMBER\>/work/dev_ms                            | |
| dev_ms_audit        | /usr/sap/<SAP_SID\>/{ASCS\|SCS}<INSTANCE_NUMBER\>/work/dev_ms_audit                      | |
| dev_enqsrv          | /usr/sap/<SAP_SID\>/<SERVER_TYPE><INSTANCE_NUMBER\>/work/dev_enqsrv                     | |
| dev_enq_server      | /usr/sap/<SAP_SID\>/<SERVER_TYPE><INSTANCE_NUMBER\>/work/dev_enq_server                 | |
| daemon              | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/daemon_<HOSTNAME\>.\* | |
| nameserver_loads    | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>01.loads.\*.trc | |
| nameserver_unloads  | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>01.unloads.\*.trc | |
| nameserver          | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_<HOSTNAME\>.00000.\*.trc | |
| nameserver          | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>01.\*.trc | |
| nameserver_table_consistency_check | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>01.table_consistency_check.0\*.trc | |
| preprocessor        | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/preprocessor_<HOSTNAME\>.\*.\*.trc | |
| compileserver       | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/compileserver_<HOSTNAME\>.\*.\*.trc | |
| backup              | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/backup.log  | |
| backint             | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/backint.log | |
| nameserver_alert    | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/nameserver_alert_<HOSTNAME\>.trc | |
| preprocessor_alert  | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/preprocessor_alert_<HOSTNAME\>.trc | |
| compileserver_alert | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/compileserver_alert_<HOSTNAME\>.trc | |
| backup_tenant       | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/backup.log | |
| backint_tenant      | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/backint.log | |
| indexserver         | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/indexserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>03.\*.trc                     | |
| indexserver_loads   | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/indexserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>03.loads.\*.trc               | |
| indexserver_executed_statements | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/indexserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>03.executed_statements.\*.trc | |
| indexserver_unloads | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/indexserver_<HOSTNAME\>.3<INSTANCE_NUMBER\>03.unloads.\*.trc             | |
| xsengine_tenant     | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/xsengine_<HOSTNAME\>.\*.\*.trc | |
| indexserver_alert_tenant | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/indexserver_alert_<HOSTNAME\>.trc | |
| xsengine_alert_tenant    | /hana/shared/<HANA_SID\>/HDB<INSTANCE_NUMBER\>/<HOSTNAME\>/trace/DB_<HANA_TENANT\>/xsengine_alert_<HOSTNAME\>.trc | |
| dev_rout            | /usr/sap/saprouter/dev_rout | |
| dev_webdisp         | /usr/sap/<SAP_SID\>/W<INSTANCE_NUMBER\>/work/dev_webdisp | |
| security_audit_abap | /usr/sap/<SAP_SID\>/D<INSTANCE_NUMBER\>/log/sec/audit_<date\> | SLGFTYP, AREA, SUBID, DATE, TIME, DUMMY, UNIXPID, TASKTNO, SLGTTYP, SLGLTRM, SLGUSER, SLGTC, SLGREPNA, SLGMAND, SLGMODE, SLGDATA, SLGLTRM2, SLGDATA_VAR_A, SLGDATA_VAR_B, SLGDATA_VAR_C, SLGDATA_VAR_D, Class, Severity, Details |
| security_audit_hana | /var/log/messages | Event_Timestamp, Service_Name, SAP_Hostname, SID, Instance_Number, Port_Number, Database_Name, Client_IP_Address, Client_Name, Client_Process_ID, Client_Port_Number, Policy_Name, Audit_Level, Audit_Action, Session_User, Target_Schema, Target_Object, Privilege_Name, Grantable, Role_Name, Target_Principal, Action_Status, Component, Section, Parameter, Old_Value, New_Value, Comment, Executed_Statement, Session_ID, Application_User_Name, Role_Schema_Name, Grantee_Schema_Name, Origin_Database_Name, Origin_User_Name, XS_Application_User_Name, Application_Name, Statement_User_Name, Create_Time, XSA_MESSAGE_IP, XSA_TENANT, XSA_UUID, XSA_CHANNEL, XSA_ATTACHMENT_ID, XSA_ATTACHMENT_NAME, XSA_ORGANIZATION_ID, XSA_SPACE_ID, XSA_INSTANCE_ID, XSA_BINDING_ID, XSA_OBJECT, XSA_DATA_SUBJECT |
| syslog              | /var/log/messages            | program, pid |
| firewall            | /var/log/firewall            | program, pid |
| saptune             | /var/log/saptune/saptune.log | |
| zypp_history        | /var/log/zypp/history        | |
| firewalld           | /var/log/firewalld           | |
| dnf_history         | /var/log/dnf.log             | |
| audit               | /var/log/audit/audit.log     | |

## Aller plus loin

- [SAP logs on OVHcloud Logs Data Platform - Configuration](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_logs_on_ovhcloud_logs_data_platform_solution_setup)
- [SAP Logs on OVHcloud Logs Data Platform - Analysez et exploitez vos logs](/pages/hosted_private_cloud/sap_on_ovhcloud/cookbook_sap_logs_on_ovhcloud_logs_data_platform_analyze_and_work_with_your_logs)

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
