---
title: Spécifications techniques du SMPP
slug: smpp-specifications
excerpt: 'Découvrez les spécifications techniques du SMPP'
section: SMPP
order: 02
---

**Dernière mise à jour le 09/02/2023**

## Objectif

**Découvrez les spécifications techniques de l'offre SMPP OVHcloud.**

## Glossaire

- PDU : Protocol Data Unit est l'objet/entité permettant d'échanger des requêtes et des réponses
- SMPP : Short Message Peer to Peer Protocol
- SMSC : Short Message Service Center (serveur)
- ESME : External Short Message Entity (client)
- UDH : User Data Header
- SM : Short Message
- DLR : Delivery Receipt
- PTT : Premium Tracking Technical est un code d'erreur communiqué dans le message d'un DLR
- MT : Mobile Terminated
- MO : Mobile Originated

Pour plus d'explications sur les abréviations, consultez la page 10 des [spécifications SMPP de smpp.org](https://smpp.org/SMPP_v3_4_Issue1_2.pdf).

## Présentation

### A quoi sert le SMPP ?

Le SMPP (Short Message Peer-to-Peer) est un protocole permettant d’échanger des SMS vers des opérateurs téléphoniques et par des fournisseurs de contenu. Il utilise en général deux connexions TCP/IP, une pour l'envoi et une pour la réception de données.

### Quels sont les bénéfices du SMPP par rapport à l'offre standard SMS

- Le protocole est standardisé et permet de s’intégrer à de nombreux outils du marché
- Il permet d’obtenir un débit important avec peu de latence

### Quelle est l'utilisation type d’envoi d’un SMS par SMPP ?

**L'application d'envoi de SMS du client (ESME) a trois moyens de communication avec le SMSC :**

- Transmitter : émission d’un message
- Receiver : réception d’un message
- Transceiver : émission et réception d’un message

> [!primary]
>
> Retrouvez des informations complémentaires sur les moyens de communication au chapitre [Liste des PDUs](#pdu-list).

Une fois la connexion établie entre le ESME et un SMSC OVHcloud, l'émission et/ou la réception d’un message peuvent être effectuées.<br>
L’authentification de la connexion au SMSC se fait avec le `system_id` (compte SMPP), le `password` et l’`adresse IP` de votre application.

L’offre SMPP OVHcloud permet :

- L’envoi de SMS avec (ou sans) accusé de réception (DLR)
- La réception d’un message envoyé depuis un mobile


|        | Source           | Destination                |
|------|---------------------|---------------------|
| Envoi d'un SMS (MT)           | - Shortcode (France métropolitaine et Belgique)<br> - Alphanumérique <br>- Numéro virtuel* | Numéro international au format E.164             |
| Envoi d'un SMS autorisant une réponse                           | - Shortcode (France métropolitaine)                             | Numéro international au format E.164             |
| Envoi d'un SMS autorisant une réponse avec un ratio MT/MO 1:1   | - Numéro virtuel*                     | Numéro virtuel* |
| Réception d'un SMS envoyé depuis un mobile (MO)   | - Numéro du téléphone mobile                      | Numéro virtuel* |

Numéro virtuel* : canal transactionnel uniquement

## Spécifications techniques

### Description des protocoles

#### Bind Request

Un ESME peut se connecter dans l'un des trois modes suivants : Transmitter, Receiver, Transceiver.<br>
Ces demandes de connexion sont prises en charge conformément à la spécification du protocole SMPP v3.4.

#### Bind Response

Lors du processus de connexion, le ESME fait une requête de Bind en fournissant le `system_id` (identifiant) et son `mot de passe`.<br>
Ces informations, ainsi que l'`IP` de votre application, sont utilisées pour authentifier la demande de connexion.<br>
Une réponse est ensuite envoyée par le SMSC avec un statut définissant le succès ou non de l'authentification.

#### Liste des PDUs <a name="pdu-list"></a>

##### **bind_transceiver et bind_transceiver_resp**

Ce type de bind est utilisé pour initier une connexion permettant la communication bidirectionnelle entre le SMSC et le ESME (c'est la fusion des modes transmitter et receiver).

##### **bind_transmitter et bind_transmitter_resp**

Ce type de bind est utilisé pour initier une connexion permettant uniquement la communication du ESME vers le SMSC (envoi de SMS vers un mobile). Le SMSC envoie les réponses associées aux PDUs de requête sur la même connexion.

##### **bind_receiver et bind_receiver_resp**

Ce type de bind est utilisé pour initier une connexion permettant uniquement la communication du SMSC vers le ESME (envoi d'accusé de réception (DLR) ou de messages envoyés depuis un mobile). Le ESME envoie les réponses associées aux PDUs de requête sur la même connexion.

##### **unbind et unbind_resp**

Requête de fermeture d'une connexion étant initiée par le SMSC ou le ESME. La partie recevant la requête renvoie une réponse quand elle est prête pour couper la connexion.

Le SMSC OVHcloud ferme (_unbind_) les connexions toutes les 24h, le ESME doit se reconnecter automatiquement.

##### **outbind**

Non supporté

##### **submit_sm et submit_sm_resp**

Le `submit_sm` est utilisée par un ESME pour soumettre un SMS au SMSC pour transmission à un numéro de téléphone mobile.

**Paramètres obligatoires :**

| Nom du paramètre       | Réf. Spec 3.4   | Supporté |
| ---------------------- |----------|----------|
| service_type           | 5.2.11   | Non |
| source_addr_ton        | 5.2.5    | Oui |
| source_addr_npi        | 5.2.6    | Oui |
| source_addr            | 5.2.8    | Oui |
| dest_addr_ton          | 5.2.5    | Oui |
| dest_addr_npi          | 5.2.6    | Oui |
| destination_addr       | 5.2.9    | Oui |
| esm_class              | 5.2.12   | Oui |
| protocol_id            | 5.2.13   | Non |
| priority_flag          | 5.2.14   | Non |
| schedule_delivery_time | 5.2.15   | Oui |
| validity_period        | 5.2.16   | Oui |
| registered_delivery    | 5.2.17   | Oui |
| replace_if_present_flag| 5.2.18   | Non |
| data_coding            | 5.2.19   | Oui |
| sm_default_msg_id      | 5.2.20   | Non |
| sm_length              | 5.2.21   | Oui |
| short_message          | 5.2.22   | Oui |

- `source_addr` peut être un numéro international, un numéro alphanumérique ou un numéro shortcode :
    - **international** : ces numéros de téléphone se composent de l'identifiant du pays et du numéro habituel sans le premier 0 (par exemple +33601020304). Ils doivent avoir `source_addr_ton` = 1 et `source_addr_npi` = 1.
    - alphanumérique : ces numéros de téléphone sont composés de lettres et de chiffres (ex : ovh123). Ils doivent avoir `source_addr_ton` = 3 et `source_addr_npi` = 1.
    - shortcode: ces numéros de téléphone contiennent entre 3 et 8 numéros (ex : 38069). Ils doivent avoir `source_addr_ton` = 5 et `source_addr_npi` = 1. Le shortcode est seulement là pour avertir notre service que nous allons devoir en utiliser un. Le shortcode réel utilisé pour envoyer le sms sera défini par l'opérateur télécom.
- `destination_addr` doit être un numéro international (`source_addr_ton` = 1 et `source_addr_npi` = 1).

**Paramètres optionnels :**

| Nom du paramètre      | Réf. Spec 3.4   | Supporté |
| --------------------- |----------|----------|
| user_message_reference| 5.3.2.17 | Non |
| source_port           | 5.3.2.20 | Non |
| source_addr_subunit   | 5.3.2.2  | Non |
| destination_port      | 5.3.2.21 | Non |
| dest_addr_subunit     | 5.3.2.1  | Oui |
| sar_msg_ref_num       | 5.3.2.22 | Non |
| sar_total_segments    | 5.3.2.23 | Non |
| sar_segment_seqnum    | 5.3.2.24 | Non |
| more_messages_to_send | 5.3.2.34 | Non |
| payload_type          | 5.3.2.10 | Non |
| message_payload       | 5.3.2.32 | Non |
| privacy_indicator     | 5.3.2.14 | Non |
| callback_num          | 5.3.2.36 | Non |
| callback_num_pres_ind | 5.3.2.37 | Non |
| callback_num_atag     | 5.3.2.38 | Non |
| source_subaddress     | 5.3.2.15 | Non |
| dest_subaddress       | 5.3.2.16 | Non |
| user_response_code    | 5.3.2.18 | Non |
| display_time          | 5.3.2.26 | Non |
| sms_signal            | 5.3.2.40 | Non |
| ms_validity           | 5.3.2.27 | Non |
| ms_msg_wait_facilities| 5.3.2.13 | Non |
| number_of_messages    | 5.3.2.39 | Non |
| alert_on_msg_delivery | 5.3.2.41 | Non |
| language_indicator    | 5.3.2.19 | Non |
| its_reply_type        | 5.3.2.42 | Non |
| its_session_info      | 5.3.2.43 | Non |
| ussd_service_op       | 5.3.2.44 | Non |


Le `submit_sm_resp` est la confirmation de la bonne réception du submit_sm par le SMSC.<br>
Il contient un `message_id` qui est l'identifiant du message du SMSC permettant de faire le lien avec avec l'accusé de réception (DLR) envoyé plus tard lorsque le mobile a reçu le SMS (sous réserve que la demande d'un DLR est spécifiée dans le `submit_sm`).

##### **deliver_sm et deliver_sm_resp**

Le `deliver_sm` est émis par le SMSC pour envoyer un accusé de réception (DLR) au ESME si ce dernier en a fait la demande dans le `submit_sm`, ou lorsqu'un SMS entrant est reçu (réponse à un shortcode ou un SMS envoyé à destination d'un numéro virtuel).

**Paramètres obligatoires :**

| Nom du paramètre       | Réf. Spec 3.4   | Supporté |
| ---------------------- |----------|----------|
| service_type           | 5.2.11   | Non |
| source_addr_ton        | 5.2.5    | Oui |
| source_addr_npi        | 5.2.6    | Oui |
| source_addr            | 5.2.8    | Oui |
| dest_addr_ton          | 5.2.5    | Oui |
| dest_addr_npi          | 5.2.6    | Oui |
| destination_addr       | 5.2.9    | Oui |
| esm_class              | 5.2.12   | Oui |
| protocol_id            | 5.2.13   | Non |
| priority_flag          | 5.2.14   | Non |
| schedule_delivery_time | 5.2.15   | Non |
| validity_period        | 5.2.16   | Non |
| registered_delivery    | 5.2.17   | Non |
| replace_if_present_flag| 5.2.18   | Non |
| data_coding            | 5.2.19   | Oui |
| sm_default_msg_id      | 5.2.20   | Non |
| sm_length              | 5.2.21   | Oui |
| short_message          | 5.2.22   | Oui |


**Paramètres optionnels :**

| Nom du paramètre      | Réf. Spec 3.4 | Supporté |
| --------------------- |----------|----------|
| receipted_message_id  | 5.3.2.12 | Oui |
| user_message_reference| 5.3.2.17 | Non |
| source_port           | 5.3.2.20 | Non |
| destination_port      | 5.3.2.21 | Non |
| sar_msg_ref_num       | 5.3.2.22 | Non |
| sar_total_segments    | 5.3.2.23 | Non |
| sar_segment_seqnum    | 5.3.2.24 | Non |
| user_response_code    | 5.3.2.18 | Non |
| privacy_indicator     | 5.3.2.14 | Non |
| payload_type          | 5.3.2.10 | Non |
| message_payload       | 5.3.2.32 | Non |
| callback_num          | 5.3.2.36 | Non |
| source_subaddress     | 5.3.2.15 | Non |
| dest_subaddress       | 5.3.2.16 | Non |
| language_indicator    | 5.3.2.19 | Non |
| its_session_info      | 5.3.2.43 | Non |
| network_error_code    | 5.3.2.31 | Non |
| message_state         | 5.3.2.35 | Non |


**Paramètres propres à OVHcloud :**

| Nom du paramètre | Tag TLV (hex) | Type de champ                               | Taille    | Description |
|------------------|---------------|---------------------------------------------|-----------|-------------|
| outgoing_id      | 0x1401        | Chaîne de caractères terminée par null (\0) | 64 octets | ID interne à OVHcloud utilisé dans le cas d'un DLR |
| incoming_id      | 0x1402        | Chaîne de caractères terminée par null (\0) | 64 octets | ID interne à OVHcloud utilisé dans le cas d'un MO |

Notre service essaie d'envoyer les `deliver_sm` au ESME pendant 7 jours maximum.

###### **Codes d'erreur des accusés de réception (DLR)**

| Code d'erreur (PTT) |     Description |
| ------------- |-----------------|
|0 | No Error |
|1 | Internal Error |
|2 | Network Error |
|3 | Unreachable Destination |
|4 | Equipment Error |
|5 | Subscriber / Credit Related (e.g. Recipient number unreachable) |
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

##### **enquire_link et enquire_link_resp**

PDU utilisée par le SMSC et le ESME pour vérifier si une connexion est toujours active.

Il est recommandé de respecter un intervalle de 30 secondes entre chaque requête.

##### **generic_nack**

PDU retourné par le SMSC lorsqu'un PDU n'est pas supporté ou corrompu.

##### **query_sm et query_sm_resp**

Non supportés.

##### **cancel_sm et cancel_sm_resp**

Non supportés.

##### **replace_sm et replace_sm_resp**

Non supportés.

##### **alert_notification**

Non supporté.

##### **submit_multi et submit_multi_resp**

Non supportés.

##### **data_sm et data_sm_resp**

Non supportés

#### Statuts des PDU de réponse

Tout PDU de réponse (ceux terminant par `_resp`) possède un statut. La spécification SMPP fournit une liste de statuts génériques (SMPP 3.4, 5.1.3 command_status) communs à tous les SMSC.

Une plage spécifique de statuts est réservé aux SMSC. Voici ceux utilisés par OVHcloud :

| Code d'erreur | Valeur | Description |
|---------------|--------|-------------|
| ESME_RBINDTHROTTLED | 0x00000400 | Too many bind authentication |
| ESME_RUNSDATACODING | 0x00000401 | Data Coding unsupported |
| ESME_RINVGSM7CODING | 0x00000402 | Short message GSM7 (GSM 03.38) encoding issues, contact support |

#### Data Coding Scheme

Le data coding est utilisé par le `submit_sm` et le `deliver_sm` pour encoder le message.

Liste des data coding supportés:

- GSM 03.38 (GSM 7 bits)*
- UCS2

GSM 03.38* : cet endodage représente chaque caractère sur un septet mais certains clients SMPP le représentent sur un octet.
Le format octet étant le plus utilisé, votre compte SMPP est configuré par défaut sur ce format. Si vous rencontrez des problèmes d'encodage avec votre client SMPP, veuillez contacter le support OVHcloud pour faire modifier le format.

#### TLV

Un TLV (*Tag, Length, Value*) permet d'enrichir un PDU en y ajoutant des informations optionnelles. Certains sont communs et utilisés par plusieurs SMSCs et d'autres peuvent être plus spécifiques à OVHcloud.

### Système d'identification

#### Système ID

Compte SMPP sous la forme `smpp-*********`

#### Mot de passe

Le mot de passe est généré et fourni à chaque création de compte SMPP.

#### Liste d'IPs autorisées

Une liste d'IPs est nécessaire pour autoriser la ou les machines à se connecter au SMSC.

### Type de connexion

- **Connexion sécurisée** : connexion chiffrée avec TLS 1.3 minimum.
- **Connexion non sécurisée** : connexion ne bénéficiant pas de chiffrement TLS pour des besoins de rétrocompatibilité (tous les échanges sont en clair et donc visibles par des personnes tierces).

### Limites d'envoi

#### Connexion par zone

Par défaut, un compte SMPP ne peut avoir qu'une paire de Transmitter/Receiver ou un Transceiver par zone.

#### Windowing

Par défaut, un compte SMPP est autorisé à traiter jusqu'à maximum 10 messages simultanément.

#### Débit autorisé

Par défaut, un compte SMPP est autorisé à traiter jusqu'à maximum 20 messages par seconde par connexion.

### Version du protocole

La version du protocole est le 3.4.

### Liste des clients SMPP testés par OVHcloud

- Kannel 1.4.5

## Aller plus loin

[Documentation technique SMPP](https://smpp.org/SMPP_v3_4_Issue1_2.pdf)

[Gestion d'un compte SMS SMPP](https://docs.ovh.com/fr/sms/smpp-control-panel/)
