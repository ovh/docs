# Migration Triage: Legacy Guides

## account_and_service_management (86 guides)

**Status: ALREADY FULLY MIGRATED** - All 86 guides across 15 locales exist in `docs/*/guides/account-and-service-management/`.

| Sub-category | Guides | Status |
|---|---|---|
| account_information | 15 | Migrated |
| managing_billing_payments_and_services | 20 | Migrated |
| responsibility_sharing | 2 | Migrated |
| reversibility | 26 | Migrated |
| startup-program | 5 | Migrated |

No action required.

## web_cloud/phone_and_fax/voip (70 guides)

**Status: ALREADY FULLY MIGRATED** - All 70 guides exist in `docs/*/guides/web-cloud/phone-and-fax/voip/`.

### Active guides (47)

Core VoIP service features still actively maintained: call forwarding, conference, voicemail, SIP trunk (3CX), number portability, call queues, IVR, softphones, billing management, etc.

### Archived guides (23)

Legacy hardware and software guides marked with `flag: hidden` in the original source. These cover:

- **Discontinued phone hardware**: Cisco SPA112, C530 IP, 7841, 8851; Alcatel IP5000; Gigaset C530IP; Yealink CP860, T4X, W56P
- **Deprecated PBX solutions**: Asterisk, FreeSWITCH (replaced by 3CX)
- **Obsolete integrations**: SugarCRM CTI, community CTI project
- **Legacy monitoring**: QoS call statistics (2018)

All already migrated with appropriate archive prefixes (`_` prefix in docs).

## Conclusion

Both legacy categories require **no further migration action**. All guides were migrated in previous batches.
