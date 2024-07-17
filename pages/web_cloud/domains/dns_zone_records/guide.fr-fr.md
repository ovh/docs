---
title: "Tout savoir sur les enregistrements DNS"
excerpt: "Découvrez les différents types d'enregistrements DNS disponibles dans une zone DNS OVHcloud"
updated: 2024-07-17
---

## Objectif

Le sigle **DNS**, signifiant **D**omain **N**ame **S**ystem, est un ensemble d'éléments (serveurs DNS, zones DNS, etc.) permettant de faire correspondre un nom de domaine avec une adresse IP.

Au préalable, nous vous recommandons de consulter nos guides « [Tout savoir sur les serveurs DNS](/pages/web_cloud/domains/dns_server_general_information) » et « [Tout savoir sur la zone DNS](/pages/web_cloud/domains/dns_zone_general_information) » dans cet ordre.

La zone DNS d’un nom de domaine constitue le fichier de configuration de ce dernier. Elle se compose d’informations techniques, appelées *enregistrements DNS*. La zone DNS est, en quelque sorte, un centre d'aiguillage pour un nom de domaine.

Ce guide a pour objectif de vous présenter les différents types d'enregistrements DNS disponibles dans une zone DNS gérée chez OVHcloud. Il est complémentaire aux guides suivants :

- [Créer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_create)
- [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
- [Gérer l’historique d'une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_history)
- [Supprimer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_deletion)

**Découvrez les différents types d'enregistrements DNS disponibles dans une zone DNS OVHcloud.**

## En pratique

### Les enregistrements DNS

**L'[édition d'une zone DNS](/pages/web_cloud/domains/dns_zone_edit) est une manipulation sensible** : réaliser un changement inopportun pourrait, par exemple, rendre indisponible l'accès à votre site internet ou la réception de nouveaux messages sur vos adresses e-mail.

La liste ci-dessous reprend les objectifs et spécificités de chaque enregistrement. Elle vous permettra de mieux appréhender vos manipulations sur vos services DNS.

#### Enregistrements de pointage <a name="pointer-records"></a>

Sélectionnez l'enregistrement de votre choix en cliquant sur chacun des onglets ci-dessous.

> [!tabs]
> **A**
>> **A**ddress<br><br>
>> Relie un nom de domaine à une adresse IPv4 `X.X.X.X` (où les `X` sont des chiffres compris entre `0` et `255`). Par exemple, l'adresse IPv4 du serveur où est hébergé votre site web.
>>
> **AAAA**
>> 4 lettres **A** car cet enregistrement est encodé sur quatre fois plus de bits que le champ de pointage **A** historique.<br><br>
>> Relie un nom de domaine à une adresse IPv6. Par exemple, l'adresse IPv6 du serveur où est hébergé votre site web.
>>
>> > [!primary]
>> > Les adresses IPv6 sont progressivement mises en place pour pallier au manque d'adresses IPv4 dû à l'expansion continue des usages numériques. L'encodage sur 128 bits des adresses IPv6 permet ainsi de fournir un plus grand nombre d'adresses IP.
>> >
>> > Cependant, si votre serveur dispose déjà d'une IPv4, nous vous recommandons de privilégier l'utilisation de celle-ci à votre IPv6.<br>
>> > En effet, les IPv6 ne sont pas encore correctement interprétées sur l'ensemble du réseau Internet, ce qui peut engendrer des perturbations d'affichage ou d'accès.
>>
> **CNAME**
>> **C**anonical **NAME**<br><br>
>> Utilise l'adresse IP d'un autre nom de domaine en créant un lien appelé alias. Par exemple, si *www.domain.tld* est un alias de *domain.tld*, cela indique que *www.domain.tld* utilisera l'adresse IP de *domain.tld*.
>>
>> > [!alert]
>> >
>> > Un enregistrement TXT utilisant le même domaine ou sous-domaine qu'un enregistrement CNAME perturbe le fonctionnement de ce dernier. Votre enregistrement CNAME ne fonctionnera alors que partiellement ou pas du tout.
>> 
>> > [!warning]
>> >
>> > Par convention, les champs CNAME ne peuvent pas être directement utilisés par un domaine dans sa propre zone DNS. En effet, le domaine seul doit obligatoirement et directement pointer vers une adresse IP avec un champ de type A (ou AAAA s’il s’agit d’une IPv6).
>> > 
>> > Pour reprendre l’exemple donné ci-dessus, vous ne pourrez pas créer un champ CNAME pour le domaine *domain.tld* dans la zone DNS que vous avez créée pour celui-ci.
>> > Vous pourrez cependant créer des champs CNAME avec tous les sous-domaines (exemple : *subdomain.domain.tld* ou *www.domain.tld*) du domaine *domain.tld* dans la zone DNS créée pour *domain.tld*.
>> >
>> > Si vous souhaitez aller plus loin techniquement sur ce sujet, vous pouvez retrouver, en bas de cette page, [un cas particulier d’usage concernant les CNAME et les zones DNS créées pour des sous-domaines](#cnameusecase).
>>
> **Champ DNAME**
>> **D**elegation **NAME**<br><br>
>> Permet de générer un « alias » pour l’ensemble des sous-domaines d’un domaine. Cet enregistrement évite de créer une multitude d’enregistrements CNAME. En effet, un champ CNAME ne redirige indépendamment qu'un seul sous-domaine vers une seule cible.
>>
>> Exemple : en créant un enregistrement DNAME de *domain.tld* vers *ovh.com*, tous les sous-domaines de *domain.tld* (tels que *dname.domain.tld* et *xxx.domain.tld*) seront redirigés respectivement vers les sous-domaines de *ovh.com* (tels que *dname.ovh.com* et *xxx.ovh.com*).
>>
>> En d’autres termes, l’enregistrement DNAME indique que *dname.domain.tld* et *xxx.domain.tld* doivent respectivement afficher les résultats de *dname.ovh.com* et *xxx.ovh.com*.
>>
>> > [!warning]
>> >
>> > En revanche, *domain.tld* en tant que domaine n’affichera pas la cible du domaine *ovh.com* car l’enregistrement DNAME n’est valable que pour les sous-domaines des domaines définis dans l’enregistrement DNAME.
>> >
>> > De plus, en reprenant l'un des exemples ci-dessus, si le sous-domaine cible *xxx.ovh.com* ne pointe nulle part, alors l’enregistrement DNAME n’affichera rien non plus pour *xxx.domain.tld*.
>> 
>> > [!success]
>> >
>> > L’enregistrement DNAME est généralement utilisé dans le cadre d’un changement de nom de société. Il peut aussi être mis en place lorsqu’un utilisateur dispose de plusieurs extensions de domaines (.fr, .net, .com, .info, etc.) pour les rediriger entre eux facilement.
>> >
> **Champ NS**
>> **N**ame **S**erver<br><br>
>> Définit les serveurs DNS associés à votre zone DNS. Par exemple, si les enregistrements NS de votre zone DNS affichent les serveurs *dnsXX.ovh.net* et *nsXX.ovh.net*, vous devrez alors utiliser ces derniers dans l'onglet `Serveurs DNS`{.action} de votre espace client OVHcloud. Consultez notre documentation « [Modifier les serveurs DNS d’un nom de domaine OVHcloud](/pages/web_cloud/domains/dns_server_edit) » pour plus d'informations.
>>
>> > [!warning]
>> > 
>> > Si vous [éditez une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit), ne modifiez pas, via le bouton `Modifier en mode textuel`{.action}, les enregistrements NS de votre zone DNS au profit de serveurs DNS externes à OVHcloud. En effet, cette zone DNS fonctionne **uniquement** avec des serveurs DNS OVHcloud.
>> 

#### Enregistrements e-mail <a name="mail-records"></a>

Sélectionnez l'enregistrement de votre choix en cliquant sur chacun des onglets ci-dessous.

> [!tabs]
> **MX**
>> **M**ail e**X**changer<br><br>
>> Relie un nom de domaine à un serveur e-mail. Par exemple, l'adresse *10 mx1.mail.ovh.net* correspond à l'un des serveurs e-mail OVHcloud lorsque vous possédez une offre e-mail OVHcloud. Il est probable que votre fournisseur e-mail dispose de plusieurs serveurs e-mail : plusieurs champs MX doivent donc être créés. Consultez notre documentation « [Ajouter un champ MX à la configuration de son nom de domaine](/pages/web_cloud/domains/dns_zone_mx) ».
>>
>> > [!warning]
>> >
>> > De manière générale, il est recommandé de n’utiliser qu’un ou plusieurs serveurs d’un même fournisseur e-mail dans votre zone DNS.
>> > En effet, si vous disposez déjà de services e-mail chez un autre fournisseur e-mail et que vous ajoutez en parallèle (sans remplacer) les serveurs e-mail de votre nouveau fournisseur e-mail, vous risquez de recevoir aléatoirement vos e-mails chez l’un ou l’autre de vos deux fournisseurs.
>>
> **SPF**
>> **S**ender **P**olicy **F**ramework <br><br>
>> Permet d'éviter les potentielles usurpations d’identité sur les adresses e-mail utilisant votre nom de domaine (*spoofing*). Par exemple, l'enregistrement `v=spf1 include:mx.ovh.com ~all` indique que seuls les serveurs d'envoi liés à votre offre mail OVHCloud peuvent être considérés comme légitimes par le serveur de réception. Vous pouvez renseigner cet enregistrement sous la forme d'un champ TXT ou via notre système de configuration automatique.
>>
>> Consultez notre documentation « [Ajouter un champ SPF à la configuration de son nom de domaine](/pages/web_cloud/domains/dns_zone_spf) » pour en savoir plus.
>>
> **DKIM**
>> **D**omain**K**eys **I**dentified **M**ail<br><br>
>> Permet de vérifier l'authenticité du nom de domaine de l'expéditeur et assurer l'intégrité de l'e-mail envoyé. L'enregistrement DKIM se présente sous la forme d'une clé composée de plusieurs caractères. La clé DKIM est fournie par votre prestataire e-mail (si cette fonctionnalité est proposée par ce dernier). Il est possible de la renseigner sous la forme d'un champ TXT.
>>
>> Consultez notre documentation « [Configurer un enregistrement DKIM](/pages/web_cloud/domains/dns_zone_dkim) » pour en savoir plus.
>>
> **DMARC**
>> **D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance<br><br>
>> Contribue à l'authentification des e-mails en association avec les méthodes SPF et/ou DKIM. Cette valeur vous sera donnée par votre fournisseur e-mail (si cette fonctionnalité est proposée par ce dernier). Elle sera au minimum associée à un enregistrement SPF ou DKIM.
>>
>> Consultez notre documentation « [Configurer un enregistrement DMARC sur votre nom de domaine](/pages/web_cloud/domains/dns_zone_dmarc) » pour en savoir plus.

#### Enregistrements étendus <a name="extended-records"></a>

Sélectionnez l'enregistrement de votre choix en cliquant sur chacun des onglets suivants.

> [!tabs]
> **TXT**
>> **T**e**XT**<br><br>
>> Permet d'ajouter la valeur de votre choix, au format textuel, dans la zone DNS de votre nom de domaine. Cet enregistrement est souvent utilisé lors de processus de vérification/validation ou de sécurité.
>>
>> > [!warning]
>> >
>> > L'enregistrement TXT est limité à 255 caractères. Il est néanmoins possible, dans certains cas, de scinder votre valeur en plusieurs enregistrements. Renseignez-vous auprès de votre prestataire lorsque celui-ci vous demande de renseigner une valeur dépassant le quota des 255 caractères.
>> >
>> > Cette limite n'est cependant pas existante si vous passez par la fonctionnalité `Modifier en mode textuel`{.action} décrite dans notre guide « [Éditer une zone DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit) » (pour les utilisateurs avertis).
>>
> **SRV**
>> **S**e**RV**ice resource<br><br>
>> Permet d'indiquer l'adresse d'un serveur gérant un service. Par exemple, il peut indiquer l'adresse d'un serveur SIP ou celle d'un serveur permettant la configuration automatique d'un logiciel de messagerie.
>>
> **CAA**
>> **C**ertification **A**uthority **A**uthorization<br><br>
>> Permet de lister les autorités de certification autorisées à délivrer des certificats SSL pour un nom de domaine.
>>
>> > [!warning]
>> >
>> > Si vous configurez une entrée CAA pour un nom de domaine, cette configuration s'appliquera également à **tous les sous-domaines** de ce même nom de domaine.
>> >
>> > Si vous utilisez un certificat SSL Let's Encrypt avec votre domaine sur un hébergement mutualisé OVHcloud et que vous utilisez un enregistrement CAA, ce dernier empêchera la régénération du certificat SSL Let's Encrypt.
>>
> **NAPTR**
>> **N**ame **A**uthority **P**oin**T**e**R**<br><br>
>> Utilisé en télécommunication pour diriger une requête émise par un terminal mobile vers un serveur. Un enregistrement SRV peut y être associé pour générer de façon dynamique des URIs (Uniform Resource Identifier) cibles.
>>
> **LOC**
>> **LOC**ation <br><br>
>> Utilisé pour renseigner les informations de position géographique (notamment avec la latitude, la longitude et l'altitude).
>>
> **SSHFP**
>> **S**ecure **SH**ell **F**inger**P**rint<br><br>
>> Utilisé pour renseigner l'empreinte d'une clé publique SSH.
>>
> **TLSA**
>> **T**ransport **L**ayer **S**ecurity **A**uthentification<br><br>
>> Utilisé pour renseigner l'empreinte d'un certificat SSL/TLS. Il va permettre de conserver le *hash* d'un certificat directement dans la zone DNS de votre nom de domaine via un enregistrement DNS. 
>>
>> Cet enregistrement est utilisé dans le cadre du protocole **D**NS-based **A**uthentication of **N**amed **E**ntities (DANE).
>>
>> Le protocole DANE permet a un client (navigateur internet, client de messagerie email, client FTP, client SSH, etc.) de consulter l'enregistrement TLSA. Ainsi, il s'assure qu'un certificat SSL/TLS utilisé pour un nom de domaine est bien celui certifiant ce même nom de domaine.
>>
>> Si besoin, retrouvez plus de détails sur le site de l' [**I**nternet **E**ngineering **T**ask **F**orce (**IETF**)](https://datatracker.ietf.org/doc/html/rfc6698){.external} (EN).
>>

#### Cas particulier d'usage : l'utilisation des enregistrements CNAME <a name="cnameusecase"></a>

Certains utilisateurs créent des zones DNS directement pour le sous-domaine d’un domaine (par exemple *subdomain-with-its-own-DNS-zone.domain.tld*). La règle précisée plus haut dans l'onglet « CNAME » de la partie « [Enregistrements de pointage](#pointer-records) » s’applique alors également dans ce cas de figure.

La zone DNS étant créée pour le sous-domaine (dans notre exemple *subdomain-with-its-own-DNS-zone.domain.tld*), ce dernier est alors considéré comme un domaine à part entière dans sa zone DNS.

De ce fait et dans ce cas bien spécifique, vous ne pourrez pas créer un champ CNAME pour *subdomain-with-its-own-DNS-zone.domain.tld* dans la zone DNS que vous avez créé pour celui-ci. Vous pourrez cependant créer des champs CNAME tels que *subdomain.subdomain-with-its-own-DNS-zone.domain.tld* ou *xxx.subdomain-with-its-own-DNS-zone.domain.tld*.

## Aller plus loin

[Qu'est ce qu'un serveur DNS?](/pages/web_cloud/domains/dns_server_general_information)

[Qu'est ce qu'une zone DNS?](/pages/web_cloud/domains/dns_zone_general_information)

[Ajouter un champ SPF à la configuration de son nom de domaine](/pages/web_cloud/domains/dns_zone_spf)

[Protégez votre domaine contre le Cache Poisoning avec le DNSSEC](/links/web/domains-dnssec)

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).