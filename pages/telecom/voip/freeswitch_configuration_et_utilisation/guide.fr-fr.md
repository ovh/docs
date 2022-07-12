---
title: 'Freeswitch - configuration et utilisation'
slug: freeswitch-configuration-et-utilisation
legacy_guide_number: '7536736'
section: IPBX
---

> [!warning]
> 
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
>
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un [prestataire spécialisé](https://partner.ovhcloud.com/fr/) et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
>

## Préambule {#préambule}

Ce guide vous présente la configuration à utiliser pour enregistrer votre trunk sur Freeswitch mais aussi comment router les appels selon le numéro appelé et gérer la présentation du numéro selon l'extension utilisée.

Pour plus d'informations sur Freeswitch : <https://freeswitch.org/confluence/display/FREESWITCH/FreeSWITCH+Explained>

**Sommaire :**

Niveau : Expert

------------------------------------------------------------------------

### Prérequis {#prérequis}

Pour réaliser ce tutoriel, il faut :

-   Un serveur avec Debian d'installé et un accès Internet.
-   Deux alias configurés en redirection DDI vers le trunk.
-   Une ligne SIP Trunk. Pour en commander une : **<https://www.ovhtelecom.fr/telephonie/sip_trunk/>**

------------------------------------------------------------------------

## Installation {#installation}

Votre serveur est déjà installé. Nous utilisons Debian 7 dans ce guide et partons du principe que vous avez déjà suivi et appliqué les recommandations de la partie **[sécurisation](#Freeswitch:configurationetutilisation-securisation)**.

Nous recommandons de compiler Freswitch sur votre machine directement. Vous obtiendrez plus d’informations via ce lien : **<https://freeswitch.org/confluence/display/FREESWITCH/Debian>**

Pour faciliter la gestion, lancez Freeswitch en fond avec cette commande : **/usr/local/freeswitch/bin/freeswitch**Pour accéder à la console plus facilement, créez l'alias suivant :**ln -s /usr/local/freeswitch/bin/fs\_cli /usr/local/bin/fs\_cli**Grâce à cet alias, il faudra simplement lancer la console avec la commande**fs\_cli**.

------------------------------------------------------------------------

## Enregistrement de votre ligne {#enregistrement-de-votre-ligne}

Le fichier de configuration à créer pour enregistrer votre ligne se situe dans le répertoire **/usr/local/freeswitch/conf/sip\_profiles/external/**.

Le fichier sera appelé **siptrunk.ovh.net.xml** :

**siptrunk.ovh.net.xml**

    <include> <gateway name="trunk-ovh"> <!-- Nom du trunk -->
        <param name="username" value="0033972320690"/> <!-- Le username de votre trunk -->
        <param name="password" value="2484fUfFGRgw"/> <!-- Le mot de passe du trunk -->
        <param name="realm" value="siptrunk.ovh.net"/> <!-- Le proxy du trunk --> <param
        name="proxy" value="siptrunk.ovh.net"/> <!-- Le proxy du trunk --> <param
        name="register" value="true"/> <!-- Option permettant d'envoyer le REGISTER -->
        <param name="caller-id-in-from" value="true"/> <!-- Permet d'inserer le Caller ID dans
        le FROM --> <param name="expire-seconds" value="1800"/> <!-- Temps d'expiration du
        REGISTER --> </gateway> </include>

Il va ensuite falloir recharger la configuration. Lancez **fs\_cli** et entrez la commande **sofia profile external restart reloadxml** :

    freeswitch@internal> sofia profile external restart reloadxml Reload XML [Success] restarting: external [..]
        2015-03-26 16:56:46.080989 [NOTICE] sofia_reg.c:3329 Added gateway 'trunk-ovh' to profile 'external' 2015-03-26
        16:56:46.080989 [NOTICE] sofia_reg.c:3329 Added gateway 'example.com' to profile 'external' 2015-03-26
        16:56:46.080989 [NOTICE] sofia_reg.c:448 Registering trunk-ovh

Pour vérifier l'état d'enregistrement, entrez la commande **sofia status trunk-ovh** :

    freeswitch@internal> sofia status trunk-ovh Profile::Gateway-Name Data State Ping Time IB Calls(F/T) OB
        Calls(F/T) =================================================================================================
        external-ipv6::example.com sip:joeuser@example.com NOREG 0.00 0/0 0/0 external::example.com sip:joeuser@example.com
        NOREG 0.00 0/0 0/0 external::trunk-ovh sip:0033972320690@siptrunk.ovh.net REGED 0.00 0/0 0/0
        ================================================================================================= 3 gateways:
        Inbound(Failed/Total): 0/0,Outbound(Failed/Total):0/0

L'état **REGED** indique que le trunk est bien enregistré.

------------------------------------------------------------------------

## Création et configuration des utilisateurs {#création-et-configuration-des-utilisateurs}

Les utilisateurs doivent être créés dans le répertoire **/usr/local/freeswitch/conf/directory/default/**. Dans notre guide nous allons créer l'extension **200** et **300** :

**/usr/local/freeswitch/conf/directory/default/200.xml**

    <include> <user id="200"> <!--
        ID de l'extension --> <params> <param name="password" value="MyPassword"/>
        <!-- Mot de passe SIP de l'extension --> <param name="vm-password" value="3214"/>
        </params> <variables> <variable name="toll_allow"
        value="domestic,international,local"/> <variable name="accountcode"
        value="200"/> <variable name="user_context" value="default"/> <variable
        name="effective_caller_id_name" value="Kevin"/> <variable
        name="effective_caller_id_number" value="0033185450330"/> <!-- Numéro DDI presente -->
        <variable name="outbound_caller_id_name" value="$${outbound_caller_name}"/> <variable
        name="outbound_caller_id_number" value="$${outbound_caller_id}"/> <variable
        name="callgroup" value="techsupport"/> </variables> </user>
        </include>

Il faut modifier le **dialplan** en local en conséquence :

**/usr/local/freeswitch/conf/dialplan/default.xml**

    [..] <extension name="Local_Extension">
        <condition field="destination_number" expression="^(10[01][0-9]|200|300)$"> <!-- Nous
        ajoutons en dur les nouvelles extensions 200 et 300. --> <action application="export"
        data="dialed_extension=$1"/> <!-- bind_meta_app can have these args <key> [a|b|ab] [a|b|o|s]
        <app> --> <action application="bind_meta_app" data="1 b s execute_extension::dx XML
        features"/> <action application="bind_meta_app" data="2 b s
        record_session::$${recordings_dir}/${caller_id_number}.${strftime(%Y-%m-%d-%H-%M-%S)}.wav"/> <action
        application="bind_meta_app" data="3 b s execute_extension::cf XML features"/> <action
        application="bind_meta_app" data="4 b s execute_extension::att_xfer XML features"/>
        <action application="set" data="ringback=${us-ring}"/> <action
        application="set" data="transfer_ringback=$${hold_music}"/> <action
        application="set" data="call_timeout=30"/> <!-- <action application="set"
        data="sip_exclude_contact=${network_addr}"/> --> <action application="set"
        data="hangup_after_bridge=true"/> <!--<action application="set"
        data="continue_on_fail=NORMAL_TEMPORARY_FAILURE,USER_BUSY,NO_ANSWER,TIMEOUT,NO_ROUTE_DESTINATION"/>
        --> <action application="set" data="continue_on_fail=true"/> <action
        application="hash"
        data="insert/${domain_name}-call_return/${dialed_extension}/${caller_id_number}"/> <action
        application="hash" data="insert/${domain_name}-last_dial_ext/${dialed_extension}/${uuid}"/>
        <action application="set"
        data="called_party_callgroup=${user_data(${dialed_extension}@${domain_name} var callgroup)}"/>
        <action application="hash"
        data="insert/${domain_name}-last_dial_ext/${called_party_callgroup}/${uuid}"/> <action
        application="hash" data="insert/${domain_name}-last_dial_ext/global/${uuid}"/>
        <!--<action application="export"
        data="nolocal:rtp_secure_media=${user_data(${dialed_extension}@${domain_name} var
        rtp_secure_media)}"/>--> <action application="hash"
        data="insert/${domain_name}-last_dial/${called_party_callgroup}/${uuid}"/> <action
        application="bridge" data="user/${dialed_extension}@${domain_name}"/> <action
        application="answer"/> <action application="sleep" data="1000"/> <action
        application="bridge" data="loopback/app=voicemail:default ${domain_name}
        ${dialed_extension}"/> </condition> </extension> [..]

## Configuration du dialplan {#configuration-du-dialplan}

Nous allons dans un premier temps modifier le dialplan pour les appels sortants. Il se gère dans le fichier**/usr/local/freeswitch/conf/dialplan/default/01\_custom.xml** :

**/usr/local/freeswitch/conf/dialplan/default/01\_custom.xml**

    <include> <extension
        name="trunk-ovh"> <condition field="destination_number"
        expression="^(0[1-7]\d{8})$"> <!-- Le chiffre après le 0 doit être compris entre 1 et 7. Il doit y
        avoir 8 chiffres ensuite. --> <action application="bridge"
        data="sofia/gateway/trunk-ovh/$1"/> </condition> </extension> </include>
        <include> <extension name="trunk-ovh"> <condition field="destination_number"
        expression="^(09\d{8})$"> <!-- Le chiffre après le 0 doit être compris un 9. Il doit y avoir 8
        chiffres ensuite. --> <action application="bridge" data="sofia/gateway/trunk-ovh/$1"/>
        </condition> </extension> </include>

Ce dialplan permet d'appeler les numéros fixes **français** de **01 à 07 et les 09**.

Le dialplan pour les appels entrants se gère dans le fichier**/usr/local/freeswitch/conf/dialplan/public/00\_inbound\_did.xml** :

**/usr/local/freeswitch/conf/dialplan/public/00\_inbound\_did.xml**

    <!-- Configuration pour le DDI 0366725520 --> <include> <extension name="public_did"> <condition field="${sip_to_user}" expression="(366725520)$"> <action application="set" data="domain_name=$${domain}"/> <action application="bridge" data="sofia/internal/200%${sip_profile}"/> </condition> </extension> </include> <!-- Configuration pour le DDI 185450330 --> <include> <extension name="public_did"> <condition field="${sip_to_user}" expression="(185450330)$"> <action application="set" data="domain_name=$${domain}"/> <action application="bridge" data="sofia/internal/300%${sip_profile}"/> </condition> </extension> </include> <!-- Joue un son lors d'un appel sur le trunk directement --> <include> <extension name="public_did"> <condition field="${sip_to_user}" expression="(972320690)$"> <action application="answer" /> <action application="playback" data="/tmp/son.wav"/> <!-- Si un appel arrive sur le trunk, le son "son.wav" est lu --> <action application="set" data="domain_name=$${domain}"/> </condition> </extension> </include>
    
## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
