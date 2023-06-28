---
title: Configurer un enregistrement DMARC
excerpt: Découvrez comment configurer un enregistrement DMARC sur votre nom de domaine.
updated: 2023-06-20
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #fff; 
   color: #000;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.90em;
   color: #000;
 }
 .small {
     font-size: 0.90em;
 }
</style>

## Objectif

L'enregistrement DMARC (**D**omain-based **M**essage **A**uthentication, **R**eporting, and **C**onformance) est un mécanisme de sécurité e-mail. Il s'appuie sur le résultat des vérifications [SPF](/pages/web/domains/dns_zone_spf) et [DKIM](/pages/web/domains/dns_zone_dkim).

**Découvrez comment fonctionne DKIM et comment le mettre en place pour votre service e-mail.**

## Prérequis

- Disposer d'un accès à la gestion du nom de domaine concerné depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) ou auprès de votre prestataire de domaine s'il est enregistré en dehors d'OVHcloud.
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).
- Disposer d'un service e-mail compatible avec le DMARC.
- Les mécanismes d'authentification [SPF]() et/ou [DKIM]()

## En pratique

L' enregistrement DMARC contient des informations sur la politique à appliquer concernant les e-mails malveillant qui tentent d'usurper votre nom de domaine. Pour cela DMARC intéroge les mécanismes d'authentification [SPF](/pages/web/domains/dns_zone_spf) et [DKIM](/pages/web/domains/dns_zone_dkim) pour vérifier les e-mails entrants et les mesures à prendre lorsqu'un e-mail échoue aux contrôles d'authentification, comme la mise en quarantaine ou le rejet des e-mails.

### Comment le DMARC fonctionne-t-il ? <a name="how-dmarc-work"></a>

Pour bien comprendre comment fonctionne le DMARC, nous allons voir un exmple.

Lorsque l'adresse **contact@mydomain.ovh** envoie un e-mail à l'adresse **recipient@otherdomain.ovh**, le serveur de réception du nom de domaine **otherdomain.ovh** va intéroger la zone DNS du nom de domaine **mydomain.ovh** pour lire les intructions de l'enregistrement DMARC.

L'enregistrement DMARC communique la politique à adopter en fonction du résultat des tests SPF et DKIM. il peut également renseigner une ou des adresses e-mail servant à recevoir les rapports d'échecs d'e-mails envoyer depuis le nom de domaine **mydomain.ovh**, représenté par l'adresse **report@mydomain.ovh** dans notre exemple..

![dmarc](images/dns-dmarc-diagram.png){.thumbnail}

### Comment configurer le DMARC 

Vous devez d'abord activer le DMARC sur le service e-mail associé à votre nom de domaine.

Il vous sera également nécessaire de configurer la zone DNS du nom de domaine de votre service e-mail depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, dans la sections `Noms de domaine`{.action} à gauche.

Vous avez 2 façons de configurer le DMARC dans votre zone DNS :

- [un enregistrement DMARC](#dmarc-record) : Cet enregistrement permet une configuration simplifié du DMARC, vous n'avez qu'à compléter les champs avec les paramètres DMARC nécessaire à votre configuration. Cet enregistrement est lu comme un enregistrement TXT par les serveurs DNS.

- [un enregistrement TXT](#txt-record) : Cet enregistrement est utilisé pour d'autres usages mais dans le cadre de la configuration du DMARC depuis l'espace client OVHcloud, il vous permettra d'intégrer l'ensemble des balises DMARC qui pourraient être absentes via l'enregistrement DMARC. Il necessite toutefois de bien respecter la syntaxe 

#### Enregistrement DMARC <a name="dmarc-record"></a>

Vous trouverez ici le descriptif exhaustif des balises utiliséent pour **l'enregistrement DMARC**. Vous pouvez l'ajouter à votre zone DNS depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

Une fois votre zone DNS affichée, cliquez sur le bouton `Ajouter une entrée`{.action}, puis sur « Champs mails » `DMARC`{.action}.

- **Version (v=)** : champ obligatoire déterminant la version du protocole DMARC

- **Règle pour le domaine (p=)** : politique à adopter par le destinataire à la demande du propriétaire du domaine expéditeur. La politique s'applique au domaine interrogé et aux sous-domaines, sauf si la balise de sous-domaine **sp=** indique des instructions différentes. Les valeurs possibles sont les suivantes :
    - *aucune* : le propriétaire du domaine ne demande aucune action spécifique concernant la livraison des messages.
    - *quarantaine* : en cas d'échec de la vérification du mécanisme DMARC, les e-mails doivent être traités par les destinataires comme suspect. Selon les capacités du serveur destinataire, cela peut signifier « placer dans le dossier spam » et/ou « signaler comme suspect ».
    - *rejeter* : rejet des e-mails qui échouent à la vérification du mécanisme DMARC.

- **Pourcentage des messages filtrés (pct=)** : (valeur comprise entre 0 et 100, la valeur par défaut est 100). Pourcentage de messages du flux de messages auquel la politique DMARC doit être appliquée. Le but de la balise « pct » est de permettre aux propriétaires de domaine d'adopter une mise en œuvre lente du mécanisme DMARC.

- **URI de création de rapports globaux (rua=)** : adresses auxquelles les rapports doivent être envoyés (liste en texte brut séparées par des virgules). N'importe quel URI valide peut être spécifié. Un destinataire e-mail doit précéder la mention « mailto:» (exemple: `mailto:address@example.com`).

- **Règle pour les sous-domaines (sp=)** : politique à adopter par le destinataire pour tous les sous-domaines. elle s'applique uniquement aux sous-domaines du domaine interrogé et non au domaine lui-même. Sa syntaxe est identique à celle de la balise « p » définie ci-dessus. S'il est absent, la politique spécifiée par la balise « p » est appliquée pour les sous-domaines.

- **Mode d'alignement pour SPF (aspf=)** : (la valeur par défaut est `r`). Indique si le mode d'identifiant SPF est strict ou permissif est requis par le Propriétaire du domaine. Les valeurs sont `r` (Relaxed) pour le mode permissif et `s` (Strict) pour le mode stricte.

![dmarc](images/dns-dmarc-01.png){.thumbnail}

#### Enregistrement TXT <a name="txt-record"></a>

Vous trouverez ici le descriptif des balises utilisées pour créer un **enregistrement TXT** avec les paramètres DMARC, la liste ci-dessous est complémentaire avec les balises mentionnées dans la section [Enregistrement DMARC](#dmarc-record).

Vous pouvez l'ajouter à votre zone DNS depuis l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, cliquez sur `Noms de domaine`{.action}, puis choisissez le nom de domaine concerné. Positionnez-vous enfin sur l'onglet `Zone DNS`{.action}.

Une fois votre zone DNS affichée, cliquez sur le bouton `Ajouter une entrée`{.action}, puis sur « Champs étendus » `TXT`{.action}.

- **adkim**: indique si le mode d'alignement d'identifiant DKIM strict ou souple est requis par le propriétaire du domaine. Les valeurs sont `r` pour le mode permissif et `s` pour le mode strict.

- **fo**: Les options de rapport d'échec (texte brut ; la valeur par défaut est `0`) fournissent les options demandées pour la génération de rapports d'échec. Les générateurs de rapports PEUVENT choisir de se conformer aux options demandées. Le contenu de cette balise doit être ignoré si une balise `ruf` (ci-dessous) n'est pas également spécifiée. La valeur de cette balise est une liste de caractères séparés par deux-points qui indiquent les options de rapport d'échec comme suit :
     - **0** : génère un rapport d'échec DMARC si tous les mécanismes d'authentification (DKIM **ET** SPF) ne parviennent pas à produire un résultat « pass » aligné.
     - **1** : génère un rapport d'échec DMARC si un mécanisme d'authentification (DKIM **OU** SPF) produit autre chose qu'un résultat « success » aligné.
     - **d** : génère un rapport d'échec DKIM si le mécanisme d'authentification DKIM échoue, quel que soit son alignement.
     - **s** : génère un rapport d'échec SPF si le mécanisme d'authentification SPF échoue, quel que soit son alignement.

- **rf** : format à utiliser pour les rapports d'échec spécifiques aux messages (valeurs en texte brut séparées par des virgules, la valeur par défaut est `afrf`). La valeur de cette balise est une liste d'un ou plusieurs formats de rapport demandés par le propriétaire du domaine à utiliser lorsqu'un message échoue aux tests [SPF] et [DKIM] pour rapporter les détails de l'échec individuel. Les valeurs DOIVENT être présentes dans le registre des formats de rapport définis à la section 11 ; un receveur de courrier observant une valeur différente DEVRAIT l'ignorer ou PEUT ignorer l'intégralité de l'enregistrement DMARC. Pour cette version, seul `afrf` (le type de rapport d'échec d'authentification défini dans [AFRF]) est actuellement pris en charge. Voir la section 7.3 pour plus de détails. Pour l'interopérabilité, le format de rapport d'échec d'authentification (AFRF) doit être pris en charge.

- **ri** : intervalle requis entre les rapports agrégés (entier non signé 32 bits en texte brut ; la valeur par défaut est 86400). Indique une demande aux récepteurs pour générer des rapports agrégés séparés par pas plus que le nombre de secondes demandé. Les implémentations DMARC DOIVENT être en mesure de fournir des rapports quotidiens et DEVRAIENT être en mesure de fournir des rapports horaires sur demande. Cependant, tout ce qui n'est pas un rapport quotidien doit être pris en compte dans la mesure du possible.

- **ruf** : adresses auxquelles les informations d'échec spécifiques au message doivent être signalées (liste en texte brut séparée par des virgules). S'il est présent, le propriétaire du domaine demande aux destinataires de messagerie d'envoyer des rapports d'échec détaillés sur les messages qui échouent à l'évaluation DMARC de manière spécifique (voir la balise `fo` ci-dessus). Le format du message à générer DOIT suivre le format spécifié pour la balise `rf`. La section 7.1 discute des considérations qui s'appliquent lorsque le nom de domaine d'un URI diffère de celui du domaine annonçant la politique. Un receveur de courrier DOIT implémenter la prise en charge d'un URI `mailto:`, c'est-à-dire la capacité d'envoyer un rapport DMARC par courrier électronique. S'il n'est pas fourni, les récepteurs de courrier NE DOIVENT PAS générer de rapports d'échec. Voir la section 12.5 pour des considérations supplémentaires.

![dmarc](images/dns-dmarc-02.png){.thumbnail}

#### Exemples d'enregistrement TXT<a name="txt-record"></a>

Voici des exemples d'enregistrement DMARC et TXT, les 

<pre class="console"><code>

</code></pre>

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).