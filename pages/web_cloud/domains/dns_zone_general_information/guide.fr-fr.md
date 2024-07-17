---
title: "Tout savoir sur la zone DNS"
excerpt: "Découvrez le rôle d'une zone DNS et les enregistrements qu'elle contient pour un nom de domaine"
updated: 2024-06-17
---

## Objectif

Le sigle **DNS**, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Il est essentiel de différencier les **serveurs DNS** et la **zone DNS**. En effet, c'est au niveau du **serveur DNS** qu'est configurée une **zone DNS**.

Pour une meilleure compréhension de l'ensemble, nous vous recommandons au préalable de consulter notre guide « [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) ».

Par exemple, lorsque vous souhaitez accéder au site *domain.tld* via un navigateur Internet, votre requête est initialement traitée par cet ensemble DNS. Cet ensemble DNS va ensuite fournir en réponse à votre navigateur Internet l'adresse IP du serveur hébergeant le site *domain.tld*.

Ainsi, lorsque vous tapez *domain.tld*, les **serveurs DNS** associés à ce nom de domaine seront interrogés. Ces derniers contiennent la **zone DNS** du nom de domaine *domain.tld* où est renseignée l'adresse IP de l'hébergement de *domain.tld*. Votre navigateur est ensuite en mesure d'afficher le site internet *domain.tld* contenu sur l'hébergement web. On appelle cela une résolution DNS.

**Découvrez le rôle d'une zone DNS, ce qu'elle contient et comment elle fonctionne avec un nom de domaine.**

## En pratique

### Rôle d'une zone DNS

La zone DNS d’un nom de domaine contient une configuration applicable à ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, un centre d'aiguillage pour un nom de domaine.

Vous pouvez, par exemple, y préciser :

- L'adresse IP (enregistrements DNS de type *A* et *AAAA*) de votre hébergement web pour afficher votre site web avec votre nom de domaine.
- Les serveurs e-mail (enregistrements DNS de type *MX*) vers lesquels votre nom de domaine doit rediriger les e-mails qu'il reçoit.
- Des informations liées à la sécurité / l'authentification de vos services (hébergement web, serveur web, serveur e-mail, etc.) associés à votre nom de domaine (enregistrements DNS de type SPF, DKIM, DMARC, etc.).

Une zone DNS est hébergée / enregistrée sur des **serveurs DNS**. Ce sont les **serveurs DNS** qui doivent être déclarés (auprès du bureau d'enregistrement d'un nom de domaine) pour utiliser la zone DNS qu'ils hébergent. 

Pour plus d'informations, consultez notre page web expliquant [comment fonctionne un serveur DNS](/links/web/domains-dns-server).

### Les enregistrements DNS

De nombreux enregistrements DNS existent. Ils ont tous un but spécifique dans la résolution DNS. Chez OVHcloud, ils sont distingués en trois parties : 

- Les enregistrements de pointage (A, AAAA, CNAME, DNAME, NS)
- Les enregistrements e-mail (MX, SPF, DKIM, DMARC)
- Les enregistrements étendus (TXT, SRV, CAA, NAPTR, LOC, SSHFP, TLSA)

Consultez notre guide sur [les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records) pour plus d'informations sur les différents types d'enregistrements évoqués ci-dessus. Vous y retrouverez des éléments qui vous permettront, par exemple, de mieux appréhender l'[édition d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).

### Exemple de zone DNS

Pour mieux vous représenter ce qu'est une zone DNS, retrouvez ci-dessous un exemple de zone DNS hébergée chez OVHcloud pour le nom de domaine *domain.tld*. Celle-ci est configurée sur les serveurs DNS *dns200.anycast.me* et *ns200.anycast.me* d'OVHcloud :

![DNS zone dashboard](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-dashboard.png){.thumbnail}

En comparaison, voici son équivalent en « mode textuel » :

```bash
$TTL 3600
@	IN SOA dns200.anycast.me. tech.ovh.net. (2024051800 86400 3600 3600000 60)
                 IN NS     ns200.anycast.me.
                 IN NS     dns200.anycast.me.
                 IN MX     1 mx1.mail.ovh.net.
                 IN MX     5 mx2.mail.ovh.net.
                 IN MX     10 mx3.mail.ovh.net.
                 IN A      203.0.113.0
www              IN A      203.0.113.0
```

Dans cet exemple, la zone DNS précise, entre autres, les informations suivantes aux requêtes DNS qui lui parviennent :

- Les serveurs DNS déclarés pour le nom de domaine *domain.tld* sont les serveurs DNS *dns200.anycast.me* et *ns200.anycast.me*.
- Le serveur doit renvoyer l'adresse IP 203.0.113.0 si une requête DNS est effectuée vers le nom de domaine *domain.tld* ou le sous-domaine *www.domain.tld*. Derrière l'adresse IP 203.0.113.0 on peut, par exemple, retrouver le site web *domain.tld*.
- Pour les e-mails, la zone DNS indique que les requêtes DNS réalisées pour les adresses e-mail en *@domain.tld* doivent être envoyées vers le serveur *mx1.mail.ovh.net* en priorité. Si celui-ci met trop de temps à répondre ou est indisponible, la requête sera alors renvoyées vers le serveur *mx2.mail.ovh.net* et ainsi de suite jusqu'au dernier serveur déclaré *mx3.mail.ovh.net*.
- Le SOA (**S**tart **O**f **A**uthority) de la zone DNS OVHcloud indique que la date de dernière mise à jour de la zone DNS est le 18/05/2024 et que le délai de rafraichissement de la zone DNS est de 3600 secondes. Dans des zones DNS hébergées ailleurs que chez OVHcloud, les SOA peuvent contenir d'autres éléments tels que l'adresse e-mail de l'administrateur de la zone DNS. Pour des raisons de sécurité, OVHcloud a choisi de ne pas afficher cette information dans le SOA.

## Aller plus loin

[Qu'est ce qu'un serveur DNS?](/pages/web_cloud/domains/dns_server_general_information)

[Tout savoir sur les enregistrements DNS](/pages/web_cloud/domains/dns_zone_records)

[Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)

[Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Gérer l’historique d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_history)

[Supprimer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).
