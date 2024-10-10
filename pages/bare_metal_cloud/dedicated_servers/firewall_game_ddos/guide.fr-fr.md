---
title: "Protéger un serveur Game avec le firewall applicatif"
excerpt: "Découvrez comment configurer le OVHcloud Game DDoS Protection firewall"
updated: 2024-10-24
---

## Objectif

L’objectif de ce guide est de vous aider à mieux comprendre notre protection anti-DDoS Game (également appelée *Game firewall*) et de vous fournir des instructions sur la façon de configurer une protection efficace.

> [!primary]
> Retrouvez plus d’informations sur notre [protection anti-DDoS Game sur notre site](/links/security/ddos).
>

Nos serveurs dédiés Bare Metal gaming incluent une protection supplémentaire contre les attaques réseau spécialement conçue pour sécuriser les applications de jeu contre les attaques ciblées, garantissant ainsi la stabilité et l’accessibilité aux joueurs. Cette solution de protection dédiée est à la fois robuste et facile à utiliser, vous permettant de vous concentrer sur le développement de votre entreprise sans avoir à vous défendre contre la cybercriminalité.

| ![global-schema](images/global_schema_focus_game.png) |
|:--:|
| Schéma des services d’infrastructure et de protection des jeux anti-DDoS chez OVHcloud |

## Prérequis

- Un [serveur dédié OVHcloud **Game**](/links/bare-metal/game)
- Être connecté à l’[espace client OVHcloud](/links/manager)

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les serveurs de la [**gamme Eco**](/links/bare-metal/eco-about).
>
> Veuillez consulter notre [page de comparaison](/links/bare-metal/eco-compare) pour plus d'informations.

## En pratique

### Introduction

L’infrastructure anti-DDoS, associée au pare-feu Edge Network, protège le réseau des menaces courantes (principalement axées sur les couches ISO OSI 3 et 4). L’hébergement d’applications de jeux peut toutefois s’avérer une expérience difficile en termes de sécurité réseau. **Game DDoS Protection** est là pour vous aider : il s’agit d’un pare-feu de couche 7 (application) qui se concentre sur la protection de protocoles de jeu spécifiques. Ses principaux avantages sont les suivants :

- **Très faible latence** : Nous savons que la latence et sa stabilité sont essentielles pour les jeux en ligne. Ces solutions sont mises au plus près des serveurs et fonctionnent ensemble avec un matériel performant.
- **Bidirectionnel** : La plateforme analyse le trafic entrant et sortant pour une meilleure compréhension de la situation de chaque joueur.
- **Instantané** : Il permet de distinguer les vrais joueurs des attaques nuisibles sur un serveur dès les premiers paquets du réseau.
- **Toujours actif** : la possibilité de détecter et d’arrêter les attaques garantit une expérience fluide pour les applications de jeu sensibles, sans perturbations ni changements de latence.

### Activation et configuration de la protection anti-DDoS Game

> [!primary]
> Le *Firewall Game* protège l’IP associée à un serveur. Par conséquent, si vous possédez un serveur avec plusieurs adresses IP (ex: des [adresses Additional IPs](/links/network/additional-ip)), vous devez configurer chacune d’entre elles séparément.
>

Pour configurer les règles de protection de jeu de votre serveur Bare Metal Game, connectez-vous à votre espace client OVHcloud et suivez ces étapes :

- Cliquez sur l'onglet `Bare Metal Cloud`{.action}.
- Rendez-vous dans `Network`{.action} dans la barre latérale de gauche.
- Ouvrez `IP`{.action}.

Vous pouvez filtrer les adresses IP en utilisant le menu déroulant `Tous les services`{.action}. Renseignez le nom ou la catégorie du serveur correspondant :

| ![configure-game-firewall](images/ip_listing.png) |
|:--:|
| Liste des IP : trouvez votre adresse IP par service correspondant |

Accédez à la configuration du *Firewall Game* :

| ![game-server](images/firewall_game_01_blur.png) |
|:--:|
| Cliquez sur le bouton `...`{.action} à côté de l’adresse IP de votre serveur Game. |

| ![configure-game-firewall](images/firewall_game_02.png) |
|:--:|
| Cliquez sur `Configurer le firewall GAME`{.action}. |

Vous pouvez maintenant configurer des règles de protection de jeu pour l'adresse IP sélectionnée.

> [!primary]
> Il est important de noter que la protection anti-DDoS Game ne prendra aucune mesure tant que les règles de protection de jeu ne sont pas configurées.
>

Pour activer la protection anti-DDoS Game, il vous suffit de définir les applications de jeu ainsi que la plage de ports réseau (ou port unique) qui leur est associée :

| ![add-rule-btn](images/firewall_game_03.png) |
|:--:|
| Sur l'écran suivant, cliquez sur le bouton `Ajouter une règle`{.action} pour ajouter une règle au *Firewall Game*. |


La protection anti-DDoS Game vous permet de configurer jusqu’à **100 règles par adresse IP** qui pointent vers un serveur de jeu Bare Metal de 3ème génération (serveurs commercialisés en 2024 ou version ultérieure), ou jusqu’à **30 règles par adresse IP** pour les anciennes gammes de jeux Bare Metal (généralement identifiées comme RISE-GAME ou SYS-GAME).

Veuillez noter que les protocoles de jeux pris en charge (titres et versions de jeux pouvant être protégés) peuvent changer au fil du temps. De plus, elles peuvent être différentes entre les anciennes gammes de serveurs Bare Metal Game et les plus récentes. La liste la plus récente des profils de jeux pris en charge est disponible [ici](/links/security/ddos).

| ![confirm-new-rule](images/firewall_game_04.png) |
|:--:|
| Configurez les protections du jeu en sélectionnant un **Protocole** dans la liste et en définissant la **plage de ports** sur laquelle votre application de jeu reçoit les connexions (reportez-vous à la documentation d'installation du jeu). Cliquez ensuite sur le bouton `Confirmer`{.action} pour enregistrer. La configuration des règles du *firewall game* est terminée. |

Les règles de protection du *Firewall Game* ne doivent pas se chevaucher en termes de ports définis.

L'option **Autre** peut être sélectionnée pour les applications hébergées sur des ports spécifiques (pour lesquels il n'y a pas de protection disponible) afin de laisser passer le trafic client. Veuillez noter qu'il n'y a pas beaucoup de sécurité supplémentaire pour le trafic correspondant à la règle **Autre** et il doit être utilisé avec prudence.

De plus, nous vous recommandons fortement de définir la règle **« Default policy = DROP »** sur chaque IP pointant vers votre serveur Game. Cette option permettra à la protection anti-DDoS Game de supprimer tout trafic ne correspondant pas aux règles définies, c’est-à-dire que toutes les applications de jeu répertoriées seront protégées et qu’aucune autre connexion ne pourra atteindre votre serveur.

> [!warning]
> La protection anti-DDoS Game prend effet après les règles définies dans le [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network). Pour que les deux fonctionnent correctement, le Edge Firewall Network ne peut pas être trop strict et doit passer le trafic à la protection anti-DDoS Game.
>

### Mentions spécifiques pour certains jeux

#### Ark Survival Evolved

- **Ark Survival Evolved** : Moteur de protection de base.
- **Ark Survival Evolved v.311.78** : Moteur de protection mis à jour, ajouté dans la 3ème génération de serveurs Bare Metal Game (version 2024).

#### Counter Strike 2

- **Counter Strike 2** : Nouveau moteur de protection ajouté dans la 3ème génération de serveurs Bare Metal Game (version 2024).

#### FiveM

- **FiveM** est un mod multijoueur Grand Theft Auto V de Cfx.re désormais reconnu par l’éditeur de jeux Rockstar. Nous avons ajouté la prise en charge de FiveM dans la 3ème génération de serveurs Bare Metal Game (version 2024).

#### Rust

- **Rust** est supporté avec un profil de protection dédié sur toutes les générations de serveurs Bare Metal Game. Veuillez noter que nous avons mis à jour ce profil de protection (c’est-à-dire que nous avons ajouté la prise en charge des cookies RakNet) pour la 3ème génération de serveurs Bare Metal Game (version 2024).
Vous pouvez en savoir plus sur l'hébergement Rust sur les serveurs OVHcloud [ici](/links/bare-metal/bare-metal/game-rust).

#### Minecraft

Minecraft est bien supporté par les profils suivants :

- **Java Minecraft** : Devrait être la meilleure solution pour toutes les versions de Java Minecraft. Il protège le protocole Minecraft Query et est réglé pour le trafic TCP. Il a été ajouté en 2024, mais est également disponible pour les générations précédentes de serveurs Bare Metal Game. Attention si d'autres jeux UDP sont hébergés sur la même IP.
- **Minecraft Query** : Protection générale du protocole Minecraft Query.
- **Minecraft Bedrock** : Protection Minecraft Bedrock (avec prise en charge des cookies RakNet), ajoutée dans la 3ème génération de serveurs Bare Metal Game (version 2024).
- **Minecraft Pocket Edition** : Protection PE/Bedrock Minecraft.

#### Valheim

- **Valheim** : Nouveau moteur de protection, ajouté dans la 3ème génération de serveurs Bare Metal Game (version 2024).

> [!primary]
> Si vous hébergez un service plus important avec l’un des jeux pris en charge, mais que vous observez tout de même des faux positifs provenant des systèmes d’infrastructure anti-DDoS, contactez notre assistance à l’aide du [Centre d’aide](https://help.ovhcloud.com/csm?id=csm_get_help) avec tous les détails nécessaires pour améliorer le profil de l’application.
>

### Utilisation d'adresses Additional IP wavec des Serveurs Dédiés Game

Les adresses Additional IP offrent un moyen flexible de gérer vos applications sur plusieurs serveurs ou services hébergés. Elles apportent une valeur ajoutée à votre infrastructure d’hébergement de jeux en permettant de gérer l’évolutivité ou les actions de failover sans impact sur les adresses IP publiques. Les Additional IP vous permettent également de définir différentes localisations géographiques d’IP ou encore d’exploiter votre propre bloc d’IP (en utilisant le service BYOIP) pour les serveurs Game d’OVHcloud.

Bien que les Additional IP permettent une certaine flexibilité, certaines situations nécessitent une attention supplémentaire.

#### Configuration par IP spécifique à la génération d’un serveur Game

Pour offrir la plus grande flexibilité de configuration, différentes règles de protection du jeu peuvent être définies sur différentes adresses adresses Additional IP pointant vers le même serveur Bare Metal Game. 
Le nombre maximal de règles et les paramètres de protection disponibles sont définis sur une base par adresse IP, mais sont spécifiques à la génération de serveur Bare Metal Game spécifique derrière le pare-feu.

Des différences peuvent être observées entre les serveurs Game les plus récents (3ème génération de serveurs Game Bare Metal, sortie en 2024) et les serveurs Game les plus anciens (générations précédentes, généralement identifiées comme RISE-GAME ou SYS-GAME).

##### Vérification des protections de jeu prises en charge

Tous les protocoles de protection anti-DDoS Game pris en charge pour un serveur spécifique sont visibles sur la page de configuration `GAME firewall`{.action} pour toute adresse IP pointant vers ce serveur, dans le menu déroulant `Game protocol`{.action} :

| ![control-panel-game-protocols](images/game_protocols_list.png) |
|:--:|
| Liste des protocoles de protection supportés |

Si vous préférez l'automatisation, les détails du protocole peuvent être récupérés à l'aide de [l'APIv6 OVHcloud](/pages/manage_and_operate/api/first-steps) :

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/game/{ipOnGame}
>

Exemple de réponse API :

```python
{
    ipOnGame: "1.2.3.4"
    maxRules: 30
    state: "ok"
    firewallModeEnabled: true
  - supportedProtocols: [
        "arkSurvivalEvolved"
        "arma"
        "gtaMultiTheftAutoSanAndreas"
        "gtaSanAndreasMultiplayerMod"
        "hl2Source"
        "minecraftPocketEdition"
        "minecraftQuery"
        "mumble"
        "other"
        "rust"
        "teamspeak2"
        "teamspeak3"
        "trackmaniaShootmania"
    ]
}
```


#### Déplacement d’une Additional IP entre serveurs

Bien qu'une configuration d'ensemble de règles statique puisse être explicite, les actions de déplacement d'adresses Additional IP peuvent nécessiter quelques commentaires.

- **Déplacement d’une IP d’une ancienne génération vers une nouvelle génération de serveurs Bare Metal Game :**
    - Le processus est transparent et toutes les règles de protection et les paramètres IP seront conservés.

- **Déplacement d’une IP d’une nouvelle génération vers une ancienne génération de serveurs Bare Metal Game :**
    - Si le serveur de destination prend en charge moins de règles de protection que le serveur d'origine, une erreur sera affichée et l'action sera arrêtée.
    - Sinon :
        - Les règles de compatibilité descendante sont conservées (le nom du profil de protection doit être égal).
        - Les règles qui ne sont pas prises en charge sur le serveur de destination seront supprimées.

- **Déplacement d’une IP d’un serveur Bare Metal Game vers d’autres serveurs ou services :**
    - Toutes les règles de protection anti-DDoS Game appliquées à l’IP seront supprimées, car elles ne sont pas supportées en dehors des serveurs Bare Metal Game.


## FAQ

/// details | **Puis-je utiliser la protection anti-DDoS Game sur d’autres gammes que les serveurs Bare Metal Game ?**

Non, la protection anti-DDoS Game n’est disponible que pour nos serveurs dédiés Bare Metal Game.

///

/// details | **Comment puis-je m’assurer que l’automatisation fonctionne pour une Additional IP entre une nouvelle et une ancienne génération de serveurs Bare Metal Game ?**

Vous pouvez soit limiter vos règles de protection à 30 par IP, soit configurer vos scripts d'automatisation pour qu'ils puissent supprimer et ajouter des règles avant et après le déplacement d'une IP vers un autre serveur. Nous vous recommandons d'utiliser la dernière génération de serveurs Bare Metal Game car ils sont livrés avec de nombreuses améliorations.

///

/// details | **Puis-je désactiver la protection anti-DDoS Game ?**

C'est possible, mais non recommandé. Vous pouvez le faire en supprimant toutes les règles de protocole de jeu de la configuration et en désactivant l'entrée `Default policy: DROP`.

///

/// details | **Mon jeu ne figure pas sur la liste des protocoles supportés, que puis-je faire ?**

Vous pouvez proposer votre besoin sur notre [roadmap des solutions d'infrastructure sur GitHub](https://github.com/orgs/ovh/projects/16/views/14). Cela nous aidera à décider de la priorité des prochaines fonctionnalités à développer.

///

/// details | **Après avoir configuré mon jeu avec les ports appropriés et la stratégie par défaut à supprimer, je continue à recevoir des attaques qui affectent mon serveur Game. Que faire ?**

Vous devrez partager des dumps pertinents du trafic réseau à titre d'exemples de telles attaques (fichier *.pcap*) afin de demander le réglage de la protection de votre profil. Pour ce faire, veuillez vous connecter à notre [Centre d’aide](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
