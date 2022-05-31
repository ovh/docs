---
title: "Introduction"
slug: api
excerpt: "Présentation générale de l'API publique OVHcloud pour les noms de domaines"
section: "API domaines"
order: 1
---

**Dernière mise à jour le 05/05/2022**

<!-- Begin TOC -->

## Sommaire

- **Introduction**
- [Commander un nom de domaine](../api-order)
- [Gestion des tâches](../api-tasks)
- [Gestion des contacts d'un nom de domaine](../api-contact)
- [Gestion des règles d'éligibilité](../api-rules)
- [Configurer l'affichage de ses données dans le Whois](../api-whois)
- [Configurer les DNS de son nom de domaine](../api-dns)
- [Transférer un nom de domaine](../api-transfer)
<!-- End TOC -->

<!-- Rappel à mettre au début de chaque page CA/US/AU/ASIA/SG (API CA) -->

Nous vous rappelons que les liens vers les routes d'API donnés dans ce document renvoient vers l'API européenne.
Pensez à remplacer [https://eu.api.ovh.com](https://eu.api.ovh.com) par [https://ca.api.ovh.com](https://ca.api.ovh.com) dans les URLs d'API pour pouvoir utiliser l'API avec votre identifiant.

## Connexion à l'API

Avant de lire cette documentation, il est nécessaire de commencer par prendre connaissance de la documentation suivante.
Elle décrit la mise en place de l'environnement de test et la connexion à l'API OVHcloud, et permet également de comprendre la signature des requêtes.

- [Premiers pas avec les APIs OVHcloud](../../api/first-steps-with-ovh-api/)

## SDKs disponibles

Afin de faciliter les appels à l'API, des SDKs sont disponibles pour plusieurs langages :

- Node.js: [https://github.com/ovh/node-ovh](https://github.com/ovh/node-ovh)
- Python: [https://github.com/ovh/python-ovh](https://github.com/ovh/python-ovh)
- Go : [https://github.com/ovh/go-ovh](https://github.com/ovh/go-ovh)
- C#: [https://github.com/ovh/csharp-ovh](https://github.com/ovh/csharp-ovh)
- PHP: [https://github.com/ovh/php-ovh](https://github.com/ovh/php-ovh)
- Perl: [https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip](https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip)
- Swift: [https://github.com/ovh/swift-ovh](https://github.com/ovh/swift-ovh)

<!-- prettier-ignore -->
> [!tabs]
> JavaScript
>> ```javascript
>> var client = require("ovh")({
>>   endpoint: "ovh-eu",
>>   appKey: CLÉ_APPLICATION,
>>   appSecret: SECRET_APPLICATION,
>>   consumerKey: CLÉ_CONSOMMATEUR_APPLICATION,
>> });
>> ```
> Python
>> ```python
>> import ovh
>>
>> client = ovh.Client(
>>     endpoint = 'ovh-eu',
>>     application_key = CLÉ_APPLICATION,
>>     application_secret = SECRET_APPLICATION,
>>     consumer_key = CLÉ_CONSOMMATEUR_APPLICATION,
>> )
>> ```
> Go
>> ```go
>> package main
>>
>> import (
>> 	"fmt"
>> 	"github.com/ovh/go-ovh/ovh"
>> )
>>
>> func main() {
>> 	client, err :=  ovh.NewClient(
>> 		"ovh-eu",
>> 		CLÉ_APPLICATION,
>> 		SECRET_APPLICATION,
>> 		CLÉ_CONSOMMATEUR_APPLICATION,
>> 	)
>> 	if err != nil {
>> 		fmt.Printf("Error: %q\n", err)
>> 		return
>> 	}
>> }
>> ```

## Glossaire

Vous pourrez rencontrer les termes ci-dessous en parcourant cette documentation.

- **Registre** : organisme détenteur d'une extension. Par exemple, le `.fr` appartient à l'Afnic, le `.com` et le `.net` à Verisign.
- **Registrar** (ou **bureau d'enregistrement**) : revendeur de noms de domaines. Le registre passe obligatoirement par un registrar afin de vendre son nom de domaine au client final. OVHcloud est un registrar.
- **Registrant** : propriétaire d'un nom de domaine. Il porte la responsabilité légale de l'utilisation du nom de domaine et possède tous les droits sur le nom de domaine.
- **gTLD** (_Generic Top Level Domain_) : extension générique, utilisée internationalement, dont le fonctionnement est régi par une autorité tierce indépendante, l'[ICANN](https://www.icann.org/). Le `.com` et le `.net` sont des gTLDs.
- **ccTLD** (_Country Code Top Level Domain_) : extension spécifique à un pays, dont le fonctionnement est régi par le pays lui-même. De ce fait, les [règles d'éligibilité](../api-rules), voire le mode de vente ou le cycle de vie des domaines, peuvent différer fortement d'une extension à l'autre. C'est le rôle du registrar d'abstraire tout cela pour le client final. Les ccTLDs sont les seules extensions constituées de 2 caractères exactement : par exemple `.fr` pour la France, `.io` pour le territoire britannique de l'Océan Indien (bien qu'il soit utilisé pour de nombreuses applications, en référence à l'acronyme I/O pour _Input/Output_).
