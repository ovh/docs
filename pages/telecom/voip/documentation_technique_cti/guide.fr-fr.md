---
title: 'Documentation technique CTI'
slug: documentation_technique_cti
excerpt: 'Ce guide est une introduction aux outils de gestion des appels via les interfaces CRM et ERP les plus connus.'
section: 'Computer Telephony Integration (CTI)'
---

## Définition

*CTI (Computer Telephony Integration) :* Dispositif permettant d’interfacer le système de téléphonie aux applicatifs informatiques. Il permet principalement de gérer la remontée de fiches.

*ERP (Enterprise Resource Planning) :* Application dont le but est de coordonner l'ensemble des activités d'une entreprise (activités dites verticales telles que la production, l'approvisionnement ou bien horizontales comme le marketing, les forces de vente, la gestion des ressources humaines, etc.) autour d'un même système d'information. 

*CRM (Customer Relationship Management) :* Application dont le but est d’optimiser la qualité de la relation client, de fidéliser et de maximiser le chiffre d’affaires ou la marge par client.

*TOKEN (Jeton d'authentification) :* Jeton utilisé en complément ou à la place d'un mot de passe pour identifier la ligne du client.

*CGI (Common Gateway Interface) :*  Méthode standard utilisée pour générer un contenu dynamique de pages et d'applications web. Il fournit une interface entre le serveur web et l'application qui l'utilise.


## Contexte

Les outils CTI d'OVH permettent de recevoir des évenements en continue sur l'état des lignes et des files d'appels OVH.


## Champ d'action

Les évenements sont remontés pour le protocole *SIP* (sipCirpack) et les files d'appels OVH (easyHunting et cloudHunting). 
Cela fonctionne pour quelques postes MGCP excepté dans les cas suivants : 

- Transferts d'appels
- Appels en attente
- Appels en absence


## Pré-requis

Cela nécessite d'effectuer en continue des requêtes (http) curl de long-polling du côté client. Aucune requête serveur n'est executée.


## Principe

OVH fournit des évenements pour les lignes SIP/MGCP et files d'appels.

**Pour une ligne :**

- Sonnerie (start_ringing)
- Décroché (start_calling)
- Fin de sonnerie (end_ringing)
- Raccroché (end_calling)
- Enregistrement (registered)

**Pour une file d'appels :**

- Entrée d'un numéro dans la file (member-queue-start)
- Prise en charge d'un numéro dans la file (bridge-agent-start)
- Raccroché d'un numéro dans la file (member-queue-end)
- Raccroché d'un numéro pris en charge (bridge-agent-end)
- Nombre de numéros en queue (member-count)


## Récupération du token d'authentification

Il est possible d'associer un token à une ligne/alias (sipCirpack, mgcpCirpack, easyHunting, cloudHunting) ou à un groupe de facturation.

[Via l'API](https://api.ovh.com/console/#/telephony)

> [!api]
>
> @api {GET} /telephony/{billingAccount}/eventToken
> 

> [!api]
>
> @api {GET} /telephony/{billingAccount}/service/{serviceName}/eventToken
> 


## One liner CURL

Après avoir récuperé votre token depuis l'API, supposons que celui-ci soit : ABCDEFAB-CDEF-ABCD-EFAB-CDEFABCDEFAB,

Vous pouvez vérifier la réception du flux d'évenements en executant la requête Curl suivante : 

```curl
curl https://events.voip.ovh.net/?token=ABCDEFAB-CDEF-ABCD-EFAB-CDEFABCDEFAB
```

## Réception des paramètres

Le format type d'un évenement (en JSON) :

```json
Data: 
	Billing: "0033912312312" (Le numéro OVH)
	Body: "SIP/2.0 200 OK" (Le header du paquet SIP)
	CallId: "N2ZkZmEyNGMxZWM0N2VhN2M4NGJkMTY4ZGYwZmU2OTY." (Le callId de l'appel)
	Called: "0033912312312" (L'appelé)
	Calling: "0033912312312" (L'appelant)
	Cseq: "181 REGISTER" (Le code CSeq du paquet SIP)
	DateStart: Thu Mar 05 2015 12:44:30 GMT+0100 (CET) (La date)
	Dialed: "0033912312312" (Le numéro composé)
	Event: "registered" (Le type d'évenement)
	Protocol: "sip" (Le type de protocole, sip ou mgcp)
	RelevantInfo: "" (Information importante)
	Ts: 1425554670.102
	TsGet: 1425554670238926800 (Le timestamp de l'évenement en nanoseconde)

Date: "2015-03-05T12:24:30.255954 (CET)"
Details: 
	Description: "Gaelle Becquet" (Description du numéro OVH)
	Id: "295670" (Identifiant de la ligne du numéro OVH)
	IdBillingAccount: "59415" (Identifiant du groupe du numéro OVH)
	SimultaneousLine: "2" (Nombre de lignes simultannées)
	Type: "sipCirpack" (Type de ligne)

Event: "registered" (Le type d'évenement)
Ressource: "0033912312312" (Le numéro OVH)
Service: "sip" (Le protocole)
Timestamp: 1425554670255954700 (Le timestamp de l'évenement en nanoseconde)
Token: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX" (Le token)
```


## IMPORTANT !!!

- Pour les évenements de type `register` les informations de l'appelant, l'appelé et numéro composé sont les mêmes que le numéro OVH.
- Il est possible que certains champs soient redondants.
- Dans le cas d'une file d'appels, les headers freeswitchs sont stockés dans "Data" sous la forme "Queue" suivi du header sans les patterns "CC" et "-" .


## Exemple de script Perl

Voici un exemple basic en perl :

```perl
#!/usr/bin/perl

use strict;
use LWP::UserAgent;
use HTTP::Headers;

my $ua = LWP::UserAgent->new('keep_alive' =>  0, timeout => 7200);

while (1)
{
    my $request = HTTP::Request->new("GET",'https://events.voip.ovh.net/?token=XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX', HTTP::Headers->new(), "\n\n");
    my $response = $ua->request($request);
    if ($response->is_success)
    {
        print $response->content."\n";
    }
}
```


## Aller plus loin

- [Projet communautaire](https://docs.ovh.com/fr/voip/projet_communautaire_cti/){.external}
- [Intégration CTI de la téléphonie OVH aux CRM et ERP](https://docs.ovh.com/fr/voip/integration-cti-ovh-aux-crm-erp-avec-sugarcrm/){external}

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com>.