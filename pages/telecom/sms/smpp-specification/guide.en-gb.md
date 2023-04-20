---
title: SMPP Technical Specifications
excerpt: 'Discover the technical specifications of the OVHcloud SMPP solution'
updated: 2023-03-31
---

**Last updated 31st March 2023**

## Objective

**Discover the technical specifications of the OVHcloud SMPP solution.**

## Glossary

- PDU: Protocol Data Unit is the object/entity for exchanging requests and responses
- SMPP: Short Message Peer to Peer Protocol
- SMSC: Short Message Service Centre (server)
- ESME: External Short Message Entity (client)
- UDH: User Data Header
- SM: Short Message
- DLR: Delivery Receipt
- PTT: Premium Tracking Technical is an error code communicated in the message of a DLR
- MT: Mobile Terminated
- MO: Mobile Originated

For more explanation of abbreviations, see page 10 of [smpp.org's SMPP specifications](https://smpp.org/SMPP_v3_4_Issue1_2.pdf).

## Presentation

### What is SMPP used for?

The SMPP (Short Message Peer-to-Peer) is a protocol for exchanging SMS messages to telecom operators and by content providers. It typically uses two TCP/IP connections, one for sending and one for receiving data.

### What are the benefits of SMPP compared to the standard SMS offer

- The protocol is standardised and can be integrated with many market tools
- It provides high throughput with low latency

### What is the typical use of sending an SMS by SMPP?

**Client SMS sending application (ESME) has three means of communication with SMSC:**

- Transmitter: sending a message
- Receive: receiving a message
- Transceiver: sending and receiving a message

> [!primary]
>
> Find more information on the means of communication in the chapter [List of PDUs](#pdu-list).

Once a connection has been established between the ESME and an OVHcloud SMSC, a message can be sent and/or received.<br>
Authentication of the connection to the SMSC is done with the `system_id` (SMPP account), the `password` and the `IP address` of your application.

The OVHcloud SMPP solution allows you to:

- Send SMS messages with (or without) acknowledgement of receipt (DLR)
- Receive a message sent from a mobile phone


|        | Source           | Destination                |
|------|---------------------|---------------------|
| Sending an SMS (MT)           | - Shortcode (Metropolitan France and Belgium)<br> - Alphanumeric <br>- Virtual number* | International number in E.164 format |
| Send an SMS message authorising a reply | - Shortcode (Metropolitan France) | International number in E.164 format |
| Send an SMS message authorising a response with a MT/MO ratio of 1:1 | - Virtual number* | Virtual number* |
| Receiving an SMS sent from a mobile (MO) | - Mobile phone number | Virtual number* |

Virtual number*: transactional channel only

## Technical specifications

### Protocols description

#### Bind Request

An ESME can connect in one of three modes: Transmitter, Receiver, Transceiver.<br>
These connection requests are supported in accordance with the SMPP v3.4 protocol specification.

#### Bind Response

During the login process, the ESME makes a Bind Request providing the `system_id` (identifier) and its `password`.<br>
This information, along with your application's `IP`, is used to authenticate the connection request.<br>
A response is then sent by the SMSC with a status that defines whether authentication is successful or not.

#### PDU List <a name="pdu-list"></a>

##### **bind_transceiver and bind_transceiver_resp**

This type of bind is used to initiate a two-way communication connection between the SMSC and the ESME (the fusion of the transmitter and receiver modes).

##### **bind_transmitter and bind_transmitter_resp**

This type of bind is used to initiate a connection that only allows ESME to communicate to the SMSC (sending SMS to a mobile). The SMSC sends responses associated with query PDUs on the same connection.

##### **bind_receiver and bind_receiver_resp**

This type of bind is used to initiate a connection that only allows communication from the SMSC to the ESME (sending acknowledgement (DLR) or messages sent from a mobile phone). ESME sends responses associated with query PDUs on the same connection.

##### **unbind and unbind_resp**

A request to close a connection that is initiated by the SMSC or ESME. The party receiving the request returns a response when it is ready to cut the connection.

OVHcloud SMSC unbinds the connections every 24h, the ESME must reconnect automatically.

##### **outbind**

Not supported

##### **submit_sm and submit_sm_resp**

The `submit_sm` is used by an ESME to submit an SMS to the SMSC for transmission to a mobile number.

**Mandatory parameters:**

| Parameter name         | Ref. Spec 3.4 | Supported |
| ---------------------- |----------|----------|
| service_type           | 5.2.11   | No |
| source_addr_ton        | 5.2.5    | Yes |
| source_addr_npi        | 5.2.6    | Yes |
| source_addr            | 5.2.8    | Yes |
| dest_addr_ton          | 5.2.5    | Yes |
| dest_addr_npi          | 5.2.6    | Yes |
| destination_addr       | 5.2.9    | Yes |
| esm_class              | 5.2.12   | Yes |
| protocol_id            | 5.2.13   | No |
| priority_flag          | 5.2.14   | No |
| schedule_delivery_time | 5.2.15   | Yes |
| validity_period        | 5.2.16   | Yes |
| registered_delivery    | 5.2.17   | Yes |
| replace_if_present_flag| 5.2.18   | No |
| data_coding            | 5.2.19   | Yes |
| sm_default_msg_id      | 5.2.20   | No |
| sm_length              | 5.2.21   | Yes |
| short_message          | 5.2.22   | Yes |

- `source_addr` can be an international number, an alphanumeric number or a shortcode number:
    - **alphanumeric**: those phone numbers are composed of letters and numbers (e.g. ovh123).
        - `source_addr_ton` = 5
        - `source_addr_npi` = 0
    - **shortcode**: those phone numbers contain between 3 and 8 numbers (e.g. 38069). The shortcode is only set to notify our service that we will have to use one, the real shortcode used to send the sms will be set by the telecom operator.
        - `source_addr_ton` = 3
        - `source_addr_npi` = 1
    - **international**: those phone numbers are composed of the country identifier and usual number without the first 0 (e.g. 33601020304).
        - `source_addr_ton` = 1
        - `source_addr_npi` = 1
- `destination_addr` must be an international number (e.g. 33600000001).
    - `source_addr_ton` = 1
    - `source_addr_npi` = 1

**Optional settings:**

| Parameter name        | Ref. Spec 3.4 | Supported |
| --------------------- |----------|----------|
| user_message_reference| 5.3.2.17 | No |
| source_port           | 5.3.2.20 | No |
| source_addr_subunit   | 5.3.2.2  | No |
| destination_port      | 5.3.2.21 | No |
| dest_addr_subunit     | 5.3.2.1  | Yes |
| sar_msg_ref_num       | 5.3.2.22 | No |
| sar_total_segments    | 5.3.2.23 | No |
| sar_segment_seqnum    | 5.3.2.24 | No |
| more_messages_to_send | 5.3.2.34 | No |
| payload_type          | 5.3.2.10 | No |
| message_payload       | 5.3.2.32 | No |
| privacy_indicator     | 5.3.2.14 | No |
| callback_num          | 5.3.2.36 | No |
| callback_num_pres_ind | 5.3.2.37 | No |
| callback_num_atag     | 5.3.2.38 | No |
| source_subaddress     | 5.3.2.15 | No |
| dest_subaddress       | 5.3.2.16 | No |
| user_response_code    | 5.3.2.18 | No |
| display_time          | 5.3.2.26 | No |
| sms_signal            | 5.3.2.40 | No |
| ms_validity           | 5.3.2.27 | No |
| ms_msg_wait_facilities| 5.3.2.13 | No |
| number_of_messages    | 5.3.2.39 | No |
| alert_on_msg_delivery | 5.3.2.41 | No |
| language_indicator    | 5.3.2.19 | No |
| its_reply_type        | 5.3.2.42 | No |
| its_session_info      | 5.3.2.43 | No |
| ussd_service_op       | 5.3.2.44 | No |


The `submit_sm_resp` is confirmation that the SMSC has received the submit_sm.<br>
It contains a `message_id` which is the SMSC message identifier to link to the acknowledgement (DLR) sent later when the mobile phone received the SMS (provided that the DLR request is specified in the `submit_sm`).

##### **deliver_sm and deliver_sm_resp**

The `deliver_sm` is issued by the SMSC to send a DLR to the ESME if requested by the ESME in the `submit_sm` or for an incoming message (response to a shortcode or an SMS sent to your virtual number).

**Mandatory parameters:**

| Parameter name         | Ref. Spec 3.4 | Supported |
| ---------------------- |----------|----------|
| service_type           | 5.2.11   | No |
| source_addr_ton        | 5.2.5    | Yes |
| source_addr_npi        | 5.2.6    | Yes |
| source_addr            | 5.2.8    | Yes |
| dest_addr_ton          | 5.2.5    | Yes |
| dest_addr_npi          | 5.2.6    | Yes |
| destination_addr       | 5.2.9    | Yes |
| esm_class              | 5.2.12   | Yes |
| protocol_id            | 5.2.13   | No |
| priority_flag          | 5.2.14   | No |
| schedule_delivery_time | 5.2.15   | No |
| validity_period        | 5.2.16   | No |
| registered_delivery    | 5.2.17   | No |
| replace_if_present_flag| 5.2.18   | No |
| data_coding            | 5.2.19   | Yes |
| sm_default_msg_id      | 5.2.20   | No |
| sm_length              | 5.2.21   | Yes |
| short_message          | 5.2.22   | Yes |

**Optional settings:**

| Parameter name | Ref. Spec 3.4 | Supported |
| --------------------- |----------|----------|
| receipted_message_id  | 5.3.2.12 | Yes |
| user_message_reference| 5.3.2.17 | No |
| source_port           | 5.3.2.20 | No |
| destination_port      | 5.3.2.21 | No |
| sar_msg_ref_num       | 5.3.2.22 | No |
| sar_total_segments    | 5.3.2.23 | No |
| sar_segment_seqnum    | 5.3.2.24 | No |
| user_response_code    | 5.3.2.18 | No |
| privacy_indicator     | 5.3.2.14 | No |
| payload_type          | 5.3.2.10 | No |
| message_payload       | 5.3.2.32 | No |
| callback_num          | 5.3.2.36 | No |
| source_subaddress     | 5.3.2.15 | No |
| dest_subaddress       | 5.3.2.16 | No |
| language_indicator    | 5.3.2.19 | No |
| its_session_info      | 5.3.2.43 | No |
| network_error_code    | 5.3.2.31 | No |
| message_state         | 5.3.2.35 | No |

**OVHcloud-specific settings:**

| Parameter name | Tag TLV (hex) | Field type | Size | Description |
|------------------|---------------|---------------------------------------------|-----------|-------------|
| outgoing_id | 0x1401 | Null-terminated character string (\0) | 64 bytes | OVHcloud internal ID used in the case of a DLR |
| incoming_id | 0x1402 | Null-terminated character string (\0) | 64 bytes | OVHcloud internal ID used in the case of a MO |

Our service will attempt to send the `deliver_sm` to ESME for up to 7 days.

##### **Acknowledgement Error Codes (DLR)**

| Error code (PTT) | Description |
| ------------- |-----------------|
|0 | No Error |
|1 | Internal Error |
|2 | Network Error |
|3 | Unreachable Destination |
|4 | Equipment Error |
|5 | Subscriber / Credit Related (e.g. Account or sender is invalid, Recipient number unreachable) |
|6 | Timeout |
|7 | Operator Related |
|8 | Parental Lock |
|9 | Undeliverable |
|10 | Account Credit (e.g. Not enough credit, Auto-recredit issue) |
|50  | Internal Error |
|51  | Internal Error |
|52  | Missing Template (e.g. US destination requires approved templates) |
|53  | Blacklisted (a STOP response sent by the recipient to block the sender) |
|100 | Invalid Destination Numbering Plan |
|101 | Invalid Content |
|102 | Invalid GSM7 Coding (e.g. error with packed/unpacked GSM7) |
|254 | Pending |
|255 | Unknown Error |
|800 | Undeliverable |
|801 | Expired |
|802 | Deleted |
|803 | Rejected |
|804 | Unknown |

##### **enquire_link and enquire_link_resp**

PDU used by SMSC and ESME to check if a connection is still active.

It is recommended that you follow a 30-second interval between each request.

##### **generic_nack**

PDU returned by SMSC when a PDU is not supported or corrupted.

##### **query_sm and query_sm_resp**

Not supported.

##### **cancel_sm and cancel_sm_resp**

Not supported.

##### **replace_sm and replace_sm_resp**

Not supported.

##### **alert_notification**

Not supported.

##### **submit_multi and submit_multi_resp**

Not supported.

##### **data_sm and data_sm_resp**

Not supported.

#### Response PDU Statuses

Any response PDU (those ending with `_resp`) has a status. The SMPP specification provides a list of generic status (SMPP 3.4, 5.1.3 command_status) common to all SMSCs.

A specific range of statuses is reserved for SMSCs. These are the ones used by OVHcloud:

| Error code | Value | Description |
|---------------|--------|-------------|
| ESME_RBINDTHROTTLED | 0x00000400 | Too many bind authentication |
| ESME_RUNSDATACODING | 0x00000401 | Data Coding unsupported |
| ESME_RINVGSM7CODING | 0x00000402 | Short message GSM7 (GSM 03.38) encoding issues, contact support |

#### Data Coding Scheme

The data coding is used by the `submit_sm` and the `deliver_sm` to encode the message.

List of supported data coding:

- GSM 03.38 (GSM 7 bits)*
- UCS2

GSM 03.38*: this encoding represents each character on a septet, but some SMPP clients represent it on a byte.
Since the byte format is the most used, your SMPP account is configured on this format by default. If you experience encoding issues with your SMPP client, please contact OVHcloud support to have the format changed.

#### TLV

A TLV (*Tag, Length, Value*) can be used to enrich a PDU by adding optional information. Some are common and used by multiple SMSCs, and others may be more OVHcloud specific.

### Identification system

#### System ID

SMPP account as `smpp-**********`

#### Password

The password is generated and provided each time an SMPP account is created.

### List of authorised IPs

A list of IPs is required to authorise the machine(s) to connect to the SMSC.

### Connection type

- **Secure connection**: encrypted connection with TLS 1.3 minimum.
- **Insecure connection**: a connection that does not have TLS encryption for backward compatibility (all exchanges are in plain text and are therefore visible to third parties).

### Sending limits

#### Connection per zone

By default, an SMPP account can have only one pair of Transmitter/Receiver or one Transceiver per zone.

#### Windowing

By default, an SMPP account is allowed to process up to 10 messages simultaneously.

#### Throughput

By default, an SMPP account is allowed to process up to 20 messages per second per connection.

#### Protocol version

The protocol version is 3.4.

#### List of SMPP customers tested by OVHcloud

- Kannel 1.4.5

## Go further

[SMPP Technical Documentation](https://smpp.org/SMPP_v3_4_Issue1_2.pdf)

[Managing an SMS SMPP account](/pages/telecom/sms/smpp-control-panel)
