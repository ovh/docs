---
title: "Changement des adresses IP des serveurs DNS OVHcloud"
excerpt: "Découvrez la liste des nouvelles adresses IP des serveurs DNS OVHcloud"
updated: 2025-08-07
---

## Objectif

Ce guide présente les changements d’adresses IP affectant une partie de nos serveurs DNS hébergés en Europe, applicables à partir d'**août 2025**.

**Découvrez la liste des nouvelles adresses IP des serveurs DNS.**

## Prérequis

- Avoir un accès à votre [espace client OVHcloud](/links/manager) pour configurer le nom de domaine concerné.

## En pratique

### Qui est concerné ?

Ce changement peut impacter les clients qui :

- Ont défini un nom de serveur DNS personnalisé dans les enregistrements DNS de type `NS` de leur zone DNS, et ont associé une adresse IP d’un serveur DNS OVHcloud à ce nom via un enregistrement DNS de type `A`.
- Ont également configuré un enregistrement `GLUE` pour ce nom personnalisé, afin de l’associer à l’adresse IP d’un serveur DNS OVHcloud, dans la configuration des serveurs DNS du nom de domaine.
- Utilisent actuellement ce nom personnalisé comme serveur DNS de leur nom de domaine (défini dans leur espace client ou auprès de leur bureau d’enregistrement).

Pour plus d'informations, consultez notre guide « [Personnaliser les serveurs DNS d'un nom de domaine (Glue Records)](/pages/web_cloud/domains/glue_registry) ».

> [!warning]
>
> Si vous n’avez effectué aucune modification manuelle de la configuration DNS (paramétrage par défaut), vous n’êtes pas concerné par ce changement.

### Calendrier

| Étape                                | Date prévue           |
|-------------------------------------|------------------------|
| Suppression du trafic IPv6 sur les anciennes adresses IP         | Effectuée le 05 août 2025 |
| Mise en service des nouvelles adresses IP   | Dès le 5 août 2025 |
| Envoi du premier e-mail d’information aux clients identifiés | Mi-août 2025 |
| Envoi du second e-mail de rappel         | 15 septembre 2025 |
| Suppression du trafic IPv4          | Début octobre 2025 |

> [!warning]
>
> L’utilisation des anciennes adresses IP après cette date provoquera l’échec de la résolution DNS pour les noms de domaine dont la configuration n'a pas été mise à jour.

### Que faire si je suis concerné ?

1. Identifiez si vous utilisez encore une ancienne adresse IP dans votre zone DNS.
2. **Remplacez-la** par la nouvelle adresse IP (voir le tableau ci-dessous).
3. [Mettez à jour vos GLUE records](/pages/web_cloud/domains/glue_registry) si vous en avez configuré dans votre interface client.

### Tableau de correspondance des adresses IP

| Nom d’hôte     | Ancienne IPv4   | Nouvelle IPv4   | Ancienne IPv6       | Nouvelle IPv6         |
|:---------------|:----------------|:----------------|:--------------------|:----------------------|
| dns.ovh.net    | 213.186.33.102  | 5.135.230.153   | 2001:41d0:3:166::1  | 2001:41d0:d00:e400::2 |
| ns.ovh.net     | 213.251.128.136 | 5.135.230.149   | 2001:41d0:209::1    | 2001:41d0:b00:ea00::2 |
| dns10.ovh.net  | 213.251.188.129 | 5.135.85.109    | 2001:41d0:1:4a81::1 | 2001:41d0:d00:6100::2 |
| ns10.ovh.net   | 213.251.128.129 | 5.39.20.253     | 2001:41d0:1:1981::1 | 2001:41d0:b00:3a00::2 |
| dns11.ovh.net  | 213.251.188.130 | 5.135.86.61     | 2001:41d0:1:4a82::1 | 2001:41d0:d00:f000::2 |
| ns11.ovh.net   | 213.251.128.130 | 5.39.27.169     | 2001:41d0:1:1982::1 | 2001:41d0:b00:d000::2 |
| dns12.ovh.net  | 213.251.188.131 | 5.135.86.81     | 2001:41d0:1:4a83::1 | 2001:41d0:d00:f100::2 |
| ns12.ovh.net   | 213.251.128.131 | 5.39.102.21     | 2001:41d0:1:1983::1 | 2001:41d0:b00:eb00::2 |
| dns13.ovh.net  | 213.251.188.132 | 5.135.98.29     | 2001:41d0:1:4a84::1 | 2001:41d0:d00:f200::2 |
| ns13.ovh.net   | 213.251.128.132 | 5.39.112.241    | 2001:41d0:1:1984::1 | 2001:41d0:b00:ec00::2 |
| dns14.ovh.net  | 213.251.188.133 | 5.135.99.133    | 2001:41d0:1:4a85::1 | 2001:41d0:d00:f300::2 |
| ns14.ovh.net   | 213.251.128.133 | 5.39.113.141    | 2001:41d0:1:1985::1 | 2001:41d0:b00:ed00::2 |
| dns15.ovh.net  | 213.251.188.134 | 5.135.110.101   | 2001:41d0:1:4a86::1 | 2001:41d0:d00:f400::2 |
| ns15.ovh.net   | 213.251.128.134 | 5.39.114.9      | 2001:41d0:1:1986::1 | 2001:41d0:b00:ee00::2 |
| dns16.ovh.net  | 213.251.188.135 | 5.135.112.57    | 2001:41d0:1:4a87::1 | 2001:41d0:d00:f500::2 |
| ns16.ovh.net   | 213.251.128.135 | 5.39.116.25     | 2001:41d0:1:1987::1 | 2001:41d0:b00:ef00::2 |
| dns17.ovh.net  | 213.251.188.137 | 5.135.112.105   | 2001:41d0:1:4a89::1 | 2001:41d0:d00:f600::2 |
| ns17.ovh.net   | 213.251.128.137 | 5.39.116.57     | 2001:41d0:1:1989::1 | 2001:41d0:b00:f000::2 |
| dns18.ovh.net  | 213.251.188.138 | 5.135.200.249   | 2001:41d0:1:4a8a::1 | 2001:41d0:d00:f700::2 |
| ns18.ovh.net   | 213.251.128.138 | 5.135.34.109    | 2001:41d0:1:198a::1 | 2001:41d0:b00:f100::2 |
| dns19.ovh.net  | 213.251.188.139 | 5.135.216.9     | 2001:41d0:1:4a8b::1 | 2001:41d0:d00:f800::2 |
| ns19.ovh.net   | 213.251.128.139 | 5.135.36.129    | 2001:41d0:1:198b::1 | 2001:41d0:b00:f200::2 |
| dns20.ovh.net  | 213.251.188.143 | 5.135.249.213   | 2001:41d0:1:4a8f::1 | 2001:41d0:d00:f900::2 |
| ns20.ovh.net   | 213.251.128.143 | 5.135.43.97     | 2001:41d0:1:198f::1 | 2001:41d0:b00:f300::2 |
| dns100.ovh.net | 213.251.188.144 | 5.135.250.177   | 2001:41d0:1:4a90::1 | 2001:41d0:d00:fa00::2 |
| ns100.ovh.net  | 213.251.128.144 | 5.135.44.185    | 2001:41d0:1:1990::1 | 2001:41d0:b00:f400::2 |
| dns101.ovh.net | 213.251.188.145 | 5.196.38.125    | 2001:41d0:1:4a91::1 | 2001:41d0:d00:fb00::2 |
| ns101.ovh.net  | 213.251.128.145 | 5.135.53.37     | 2001:41d0:1:1991::1 | 2001:41d0:b00:f500::2 |
| dns102.ovh.net | 213.251.188.146 | 5.196.38.181    | 2001:41d0:1:4a92::1 | 2001:41d0:d00:fc00::2 |
| ns102.ovh.net  | 213.251.128.146 | 5.135.54.1      | 2001:41d0:1:1992::1 | 2001:41d0:b00:f600::2 |
| dns103.ovh.net | 213.251.188.147 | 5.196.39.89     | 2001:41d0:1:4a93::1 | 2001:41d0:d00:fd00::2 |
| ns103.ovh.net  | 213.251.128.147 | 5.135.54.65     | 2001:41d0:1:1993::1 | 2001:41d0:b00:f700::2 |
| dns104.ovh.net | 213.251.188.148 | 5.196.39.113    | 2001:41d0:1:4a94::1 | 2001:41d0:d00:fe00::2 |
| ns104.ovh.net  | 213.251.128.148 | 5.135.60.17     | 2001:41d0:1:1994::1 | 2001:41d0:b00:f800::2 |
| dns105.ovh.net | 213.251.188.149 | 5.196.40.17     | 2001:41d0:1:4a95::1 | 2001:41d0:d00:ff00::2 |
| ns105.ovh.net  | 213.251.128.149 | 5.135.60.37     | 2001:41d0:1:1995::1 | 2001:41d0:b00:f900::2 |
| dns106.ovh.net | 213.251.188.150 | 5.196.41.1      | 2001:41d0:1:4a96::1 | 2001:41d0:d01::2      |
| ns106.ovh.net  | 213.251.128.150 | 5.135.65.21     | 2001:41d0:1:1996::1 | 2001:41d0:b00:fa00::2 |
| dns107.ovh.net | 213.251.188.151 | 5.196.41.137    | 2001:41d0:1:4a97::1 | 2001:41d0:d01:100::2  |
| ns107.ovh.net  | 213.251.128.151 | 5.135.65.209    | 2001:41d0:1:1997::1 | 2001:41d0:b00:fb00::2 |
| dns108.ovh.net | 213.251.188.152 | 5.196.41.157    | 2001:41d0:1:4a98::1 | 2001:41d0:d01:200::2  |
| ns108.ovh.net  | 213.251.128.152 | 5.135.66.229    | 2001:41d0:1:1998::1 | 2001:41d0:b00:fc00::2 |
| dns109.ovh.net | 213.251.188.153 | 5.196.41.217    | 2001:41d0:1:4a99::1 | 2001:41d0:d01:300::2  |
| ns109.ovh.net  | 213.251.128.153 | 5.135.67.9      | 2001:41d0:1:1999::1 | 2001:41d0:b00:fd00::2 |
| dns110.ovh.net | 213.251.188.154 | 5.196.44.1      | 2001:41d0:1:4a9a::1 | 2001:41d0:d01:400::2  |
| ns110.ovh.net  | 213.251.128.154 | 5.135.78.233    | 2001:41d0:1:199a::1 | 2001:41d0:b00:fe00::2 |
| dns111.ovh.net | 213.251.188.155 | 5.196.45.181    | 2001:41d0:1:4a9b::1 | 2001:41d0:d01:500::2  |
| ns111.ovh.net  | 213.251.128.155 | 5.135.79.5      | 2001:41d0:1:199b::1 | 2001:41d0:b00:ff00::2 |
| dns112.ovh.net | 51.68.107.108   | 5.196.45.209    | 2001:41d0:1:4a9d::1 | 2001:41d0:d01:600::2  |
| ns112.ovh.net  | 51.68.107.109   | 5.135.80.109    | 2001:41d0:209::3    | 2001:41d0:b01::2      |
| dns113.ovh.net | 87.98.168.13    | 5.196.46.145    | 2001:41d0:1:4a9e::1 | 2001:41d0:d01:700::2  |
| ns113.ovh.net  | 87.98.168.141   | 5.135.82.125    | 2001:41d0:209::4    | 2001:41d0:b01:100::2  |

## Aller plus loin

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).