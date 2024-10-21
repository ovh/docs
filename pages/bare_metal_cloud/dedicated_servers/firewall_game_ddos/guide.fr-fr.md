---
title: "Protéger un serveur GAME avec le firewall applicatif"
excerpt: "Découvrez comment configurer le GAME DDoS firewall"
updated: 2023-12-19
---

## Objectif

L’objectif de ce guide est de vous aider à mieux comprendre notre protection Game DDoS (Game firewall) et de vous fournir des instructions sur la façon de configurer une protection efficace pour les serveurs qui la prennent en charge.

> [!primary]
> Retrouvez plus d’informations sur notre protection anti-DDoS Game sur <https://www.ovhcloud.com/fr/security/game-ddos-protection/>.
>

Nos serveurs dédiés Game incluent une protection anti-DDoS spécialement conçue pour sécuriser les applications de jeu contre les cyberattaques, assurant ainsi stabilité et accessibilité aux joueurs. Cette solution de protection dédiée est à la fois robuste et facile à utiliser, vous permettant de vous concentrer sur le développement de votre entreprise sans vous laisser distraire par la lutte contre la cybercriminalité.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Schéma des services de protection Anti-DDoS Infrastructure & Game chez OVHcloud |

## Prérequis

- Un [serveur dédié OVHcloud **Game**](https://www.ovhcloud.com/fr/bare-metal/prices/#filterType=range_element&filterValue=game#filterType=range_element&filterValue=game)
- Être connecté à votre [espace client OVHcloud](/links/manager)

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les serveurs de la [**gamme Eco**](https://eco.ovhcloud.com/fr/about/).
>
> Veuillez consulter notre [page de comparaison](https://eco.ovhcloud.com/fr/compare/) pour plus d'informations.

## En pratique

### Introduction

L’infrastructure anti-DDoS, associée au Edge Network Firewall, protège le réseau des menaces courantes (principalement basées sur les couches réseau et transport du modèle TCP/IP). D’autre part, l’hébergement d’applications de jeu peut représenter un défi en termes de sécurité réseau. La protection anti-DDoS Game est là pour vous aider : il s’agit d’un pare-feu de couche 7 (application) qui se concentre sur la protection de protocoles de jeu spécifiques (utilisant généralement l’UDP). Ses principaux avantages sont les suivants :

- **Distance** : Nous savons que la latence et sa stabilité sont cruciales pour le gaming. Ces solutions sont mises au plus près des serveurs et fonctionnent avec un matériel dédié.
- **Bidirectionnel** : La plateforme analyse le trafic entrant et sortant pour une meilleure compréhension de la situation de chaque joueur.
- **Instantané** : Il permet de distinguer les vrais joueurs des attaques nuisibles sur un serveur dès les premiers paquets du réseau.
- **Toujours actif** : la possibilité de détecter et d’arrêter les attaques garantit une expérience fluide pour les applications de jeu sensibles, sans perturbations ni changements de latence.

### Activation de la protection anti-DDoS Game

> [!primary]
> Le firewall Game protège l’IP associée à un serveur. Par conséquent, si vous possédez un serveur avec plusieurs adresses IP (par exemple des adresses Additional IP), vous devez configurer chacune d’elles séparément.
>

Pour configurer les règles de gaming dans le firewall Game, vous devez d'abord vous connecter à votre espace client OVHcloud, puis suivre les étapes ci-dessous :

- Cliquez sur l'onglet `Bare Metal Cloud`{.action}.
- Rendez-vous ensuite dans `Network`{.action}.
- Ouvrez `IP`{.action}.

| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Cliquez sur le bouton `...`{.action} à côté de l’adresse IP de votre serveur Game |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Cliquez sur `Configurer le firewall GAME`{.action} |

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| Sur l'écran suivant, cliquez sur le bouton `Ajouter une règle`{.action} pour ajouter une règle au firewall Game |

Vous pouvez mettre en place jusqu’à **30 règles par IP** pour protéger un ou plusieurs jeux hébergés sur votre serveur derrière le Firewall Game. La liste des profils de jeux pris en charge peut être consultée [ici](https://www.ovhcloud.com/fr/security/game-ddos-protection/).

> [!primary]
> Par défaut, le firewall Game est préconfiguré avec certaines règles qu’OVHcloud a déterminées pour fonctionner avec les jeux les plus populaires. Cependant, pour les clients disposant d’un serveur dédié Game, nous vous permettons d’aller plus loin et de configurer également des règles pour les ports.
>

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Activez les ports selon vos besoins sur l'écran suivant et cliquez sur le bouton `Confirmer`{.action} lorsque vous avez terminé d'ajouter vos règles. La configuration des règles de pare-feu Game est alors terminée. |

> [!primary]
> Il est important de noter que la protection anti-DDoS Game ne prendra aucune mesure tant que des règles ne seront pas configurées.
> De plus, pour une meilleure protection, nous vous recommandons fortement de définir la politique « Default policy = DROP », ce qui supprimera tout trafic qui ne correspond pas aux règles définies. De cette manière, l'application répertoriée sera protégée et rien d'autre ne pourra atteindre votre serveur.
>

> [!warning]
> Veuillez également noter que la protection anti-DDoS Game vient après le Edge Network Firewall. Pour fonctionner correctement, la protection Edge Network Firewall ne peut pas être trop stricte et doit transmettre le trafic à la protection anti-DDoS Game. La solution optimale est donc d'avoir une règle sur le Edge Network Firewall qui autorise tout le trafic UDP, puis de laisser la protection anti-DDoS Game filtrer les ports UDP spécifiques.
>

### Informations importantes

#### FiveM

FiveM est un mod de GTA-V. Actuellement, il n'est pas entièrement reconnu par Rockstar (éditeur de jeux).

Pour cette raison, nous n'avons pas prévu de publier un profil de pare-feu public FiveM Game pour la protection de niveau 7.

#### Rust

Le firewall Game prend en charge Rust avec un profil détaillé. Vous pouvez en savoir plus sur l'hébergement de Rust sur les serveurs d'OVHcloud [ici](https://www.ovhcloud.com/fr/bare-metal/game/rust-server/).

#### Minecraft

Minecraft est correctement supporté dans les versions suivantes :

- Minecraft Java Edition
- Minecraft Pocket Edition
- Minecraft Query

> [!primary]
> Pour le moment, l'édition Java de Minecraft est protégée en mode « default » et aucune configuration supplémentaire n'est exposée. Si vous hébergez des serveurs Minecraft de plus grande taille ou si vous avez des besoins spécifiques, veuillez contacter notre support à l'aide du [Centre d'aide](https://help.ovhcloud.com/csm?id=csm_get_help) avec tous les détails permettant d'optimiser le profil de l'application.
>

## FAQ

### Puis-je utiliser le firewall Game sur d’autres gammes que Bare Metal GAME ?

Non, pour le moment le firewall Game est uniquement disponible pour l’offre Bare Metal GAME.

### Puis-je désactiver la protection pare-feu GAME ?

Nous ne recommandons pas de le faire, mais c'est effectivement possible. Vous pouvez le faire en supprimant toutes les règles de protocole de gaming de la configuration et en désactivant la politique `Default policy: Drop`.

### Mon jeu n'apparaît pas comme pris en charge sur la liste des protocoles, que puis-je faire ?

Vous pouvez proposer votre besoin sur notre [roadmap des solutions d’infrastructure sur GitHub](https://github.com/orgs/ovh/projects/16/views/14). Cela nous aidera à décider de la priorité entre les prochaines fonctionnalités à développer.

### Après avoir configuré mon jeu avec les ports appropriés et la politique par défaut sur « drop », je reçois toujours des attaques qui ont un impact sur mon serveur de jeu. Que faire ?

Pour cela, vous devrez nous partager un extrait du trafic réseau correspondant à cette attaque (fichier .pcap) et demander une configuration personnalisée de la protection de votre profil. Pour ce faire, vous pouvez utiliser notre [Centre d’aide](https://help.ovhcloud.com/csm?id=csm_get_help).

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
