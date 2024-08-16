---
title: "Monitoring des attaques DDoS avec le Network Security Dashboard"
excerpt: "Apprenez à naviguer dans le Network Security Dashboard"
updated: 2023-12-19
---

## Objectif

Ce guide a pour but de présenter le tableau de bord de sécurité réseau (*Network Security Dashboard*), un outil d'aperçu de ce qui se passe lorsqu'une activité réseau malveillante est détectée et que l'infrastructure de protection DDoS est impliquée. Vous y trouverez des détails sur ce qui a déclenché la mise en place de protections supplémentaires pour maintenir vos services opérationnels. Des graphiques de trafic correspondant aux périodes d’activité du centre de nettoyage (*Scrubbing Center*) y sont également disponibles afin de mieux visualiser la situation.

## Prérequis

- Un service OVHcloud exposé sur une adresse IP publique dédiée ([Serveur dédié](https://www.ovhcloud.com/fr/bare-metal/), [VPS](https://www.ovhcloud.com/fr/vps/), [Instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/fr/network/additional-ip/), etc.)
- Être connecté à votre [espace client OVHcloud](/links/manager)

## En pratique

### Sécurité Réseau

L'infrastructure anti-DDoS d'OVHcloud est un système de défense distribué à plusieurs niveaux pour lutter contre les cyberattaques. Il se compose de plusieurs dispositifs en périphérie de réseau et de centres de nettoyage (*Scrubbing Centers*) qui peuvent analyser et nettoyer le trafic malveillant. Associé au [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network) et au dispositif [Game DDoS Protection](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos), il offre des services de protection de qualité pour de multiples cas d'usage.

L’infrastructure anti-DDoS analyse en permanence le trafic entrant (mécanisme de détection) et redirige ce trafic via nos Scrubbing Centers (une opération également appelée « Mitigation ») situés dans les datacenters du monde entier. Le trafic entrant est ensuite analysé en profondeur et finalement filtré des paquets malveillants avant d'atteindre votre serveur ou votre service.

#### Que se passe-t-il lorsqu’une attaque atteint l’adresse IP de mon service ?

Chaque fois qu'une attaque est détectée sur une adresse IP de votre service, vous êtes averti par e-mail que le trafic a été redirigé via l'infrastructure anti-DDoS. Vous pouvez également surveiller ces périodes dans le Network Security Dashboard avec des détails supplémentaires.

Lors d'une attaque, une action de mitigation active sera indiquée par une icône d'avertissement sur la page qui liste vos adresses IP (dans la section `Gérer les IPs`{.action} de votre espace client).

![red-line-attack](images/forced_blur.png){.thumbnail}

> [!primary]
>
> Découvrez comment la mitigation des attaques DDoS est réalisée chez OVHcloud [ici](https://www.ovhcloud.com/fr/security/anti-ddos/ddos-attack-mitigation/).
>

> [!warning]
>
> Veuillez noter que la logique de protection repose sur des adresses IP publiques associées à un serveur (ou service). Par conséquent, les statistiques et les graphiques sont affichés ou calculés par IP.
> 

### Notifications de sécurité réseau

![red-line-attack](images/nsd_04_blur.PNG){.thumbnail}

Dans votre espace client, accédez à l'onglet `Bare Metal Cloud`{.action}. Cliquez ensuite sur `Network`{.action} puis sur le menu `IP`{.action}. Assurez-vous que le « mode avancé » est activé pour voir l'état de l'infrastructure anti-DDoS et la configuration de ses composants.

Les colonnes correspondent à la disponibilité et aux états de l'anti-DDoS Scrubbing (**Mitigation**), du Edge Network **Firewall** et du **GAME firewall**.

- L'état **Mitigation** peut être :
    - **Automatique** - Le centre de nettoyage est en mode **automatique**. Il s'agit du mode recommandé, car il redirige le trafic pour une analyse plus approfondie lorsque cela est nécessaire.
    - **Permanent**** - Le centre de nettoyage est **activé en permanence**. Il est déconseillé de l'activer de manière permanente, sauf en cas de gigue (*jitter*) de latence due à un réacheminement du trafic en va-et-vient.
    - **Forcé** - Ceci indique que le centre de nettoyage est **en train d'effectuer une action**.

- La colonne **Firewall** indique l'état du Edge Firewall Network qui peut être :
    - **Activé** - le pare-feu est **activé** pour cette IP.
    - **Désactivé** - le pare-feu est **désactivé** pour cette IP.
    - **(aucun état)** - la configuration du pare-feu n'est pas créée pour cette IP. Cette configuration peut être créée en utilisant le bouton `...`{.action} puis en cliquant sur `Créer un pare-feu`{.action}.

- L’état du **firewall GAME** (disponible uniquement pour les serveurs dédiés [OVHcloud **Game**](https://www.ovhcloud.com/fr/bare-metal/prices/#filterType=range_element&filterValue=game)) peut être :
    - **Activé** - La protection anti-DDoS GAME est **activée** sur cette IP.
    - **Désactivé** - Le Firewall GAME est **disponible** mais **désactivé** sur cette IP.
    - **(aucun statut)** - Le Firewall GAME n'est pas disponible pour cette IP. Cela signifie que l'IP répertoriée n'est pas configurée sur la gamme de produits prise en charge.

- La colonne **Alertes** peut indiquer un centre de nettoyage actif avec une icône d'avertissement et un conseil approprié.

### Network Security Dashboard

Dans l'espace client OVHcloud, l'accès au Network Security Dashboard peut se faire soit à partir de la page qui liste les IP (pour une IP particulière), soit en vous rendant directement dans le Network Security Dashboard dans le menu `Network`{.action}.

Cliquez sur l'onglet `Bare Metal Cloud`{.action} puis sur `Network`{.action} et sélectionnez `Network Security Dashboard`{.action}.

Vous pouvez également, à partir de la liste des adresses IP (cette option n'est disponible que lorsque le Centre de nettoyage est en action), accéder à l'onglet `Bare Metal Cloud`{.action} puis vous rendre dans `Network`{.action} et cliquer sur `Adresses IP publiques`{.action}. Cliquez sur le bouton `...`{.action} et accédez à `Network Security Dashboard`{.action}.

Dans l'onglet **Journal du Centre de nettoyage**, vous pouvez récupérer toutes les informations sur les attaques détectées dans le passé (ou en cours).

![red-line-attack](images/nsd_main_blur.png)

Dans le tableau, les colonnes suivantes sont présentes : 

- **Heure de détection** - horodatage de la première détection d'attaque.
- **Heure de fin** - horodatage de la fin de la mitigation par le centre de nettoyage.
- **IP de destination** - l'IP qui a été la cible de l'attaque.
- **Vecteurs d’attaque** - gournit des informations sur les types d’attaques détectés, tels que les attaques UDP ou TCP, etc.

> [!warning]
>
> Veuillez noter que les adresses IP sources des événements détectés ne sont pas affichées. C'est intentionnel de notre part car, la plupart du temps, elles sont usurpées (*spoofed*) (les attaques DDoS peuvent pointer vers des sources autres que celles dont elles proviennent réellement) et ces informations seraient trompeuses ou inutilisables.
> 

Dans l'onglet **Graphique du trafic**, vous pouvez voir un graphique illustrant le trafic vers votre adresse IP (bit/s ou pps).

![red-line-attack](images/nsd_graph_tab_blur.png)

Il présente le trafic malveillant qui a été supprimé (**en rouge**) et le trafic « propre » livré à votre adresse IP (**en vert**). Des statistiques de mitigation de base sont également affichées, c'est-à-dire : combien d'attaques ont été détectées pour une IP sélectionnée, quel volume de trafic (ou de paquets) a été nettoyé pendant les attaques ou combien de fois les centres de nettoyage ont entrepris une action pour inspecter votre trafic (nombre d'événements) dans une période de temps sélectionnée.

## FAQ

### Pourquoi toutes les attaques ne sont-elles pas visibles sur le Network Security Dashboard ?

En fonction de la nature de l’attaque, différentes actions peuvent être entreprises pour éliminer au mieux la menace. Dans les deux cas, il est préférable de mitiger les attaques au plus près de leur origine :

- En cas d’attaque arrivant sur le réseau d’OVHcloud (**externe**), le trafic est redirigé vers les centres de nettoyage anti-DDoS pour être nettoyé (il est ainsi visible sur le Network Security Dashboard).
- Les attaques provenant de l’intérieur du réseau OVHcloud (**internes**) sont gérées par nos équipes de sécurité. La mitigation se concentre sur le blocage de l'origine de l'attaque et ne sera pas signalée par les systèmes d'infrastructure anti-DDoS.

### Je ne vois aucune donnée dans les journaux du centre de nettoyage, est-ce normal ?

Oui, c'est bon signe ! Cela signifie que nous n'avons vu aucune attaque présumée ciblant vos adresses IP publiques.

### Je ne vois pas de graphique de trafic / données pour une IP que je saisis

Ces données ne sont disponibles que pour les adresses IP publiques lors des événements de détection automatique de l’infrastructure anti-DDoS (lorsque le trafic est redirigé via le centre de nettoyage).

### Je ne peux pas afficher le graphique de trafic pour certains périodes dans les logs du centre de nettoyage

Les données du Network Security Dashboard ne sont disponibles que pour les deux dernières semaines, tandis que les entrées du journal peuvent être examinées pour l'année écoulée.

### Je suis attaqué, comment protéger au mieux mon serveur ?

Certains types d’attaques peuvent être si spécifiques que notre infrastructure anti-DDoS ne sera pas en mesure de les détecter et de les nettoyer. Dans de tels cas, le pare-feu configuré sur votre serveur peut vous aider et nous vous recommandons également de reporter certaines règles de pare-feu du serveur sur la périphérie de notre réseau, à l'aide du Edge Network Firewall.

Pour plus d'informations sur la configuration des règles du Edge Network Firewall, consultez notre guide sur le [Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Je suis attaqué et je rencontre des problèmes sur mon serveur. Que puis-je faire de plus ?

L’infrastructure anti-DDoS est une solution conçue pour une efficacité optimale et une large gamme de services à protéger. Dans certains cas spécifiques, un réglage supplémentaire peut être nécessaire (par exemple, pour être en adéquation avec la spécificité ou la taille de l'application). Pour demander un tel réglage personnalisé, veuillez utiliser notre [Centre d’aide](https://help.ovhcloud.com/csm?id=csm_get_help) et rechercher les actions appropriées dans la catégorie « Attaque réseau et/ou Anti-DDoS ».

Afin de nous permettre de mieux comprendre votre cas d'usage et de pouvoir vous aider, nous vous invitons à nous fournir plus de détails :

#### Étape 1 - Capturer le trafic

Afin de vous offrir la meilleure solution, nous aurons besoin d'analyser un échantillon de trafic.

Pour nous fournir une telle capture, veuillez exécuter cette commande sur Linux :

```bash
tcpdump -w capture-ovh -c 100000 port not ssh
```

>[!primary]
>
> Si vous utilisez Windows, utilisez [Wireshark](https://www.wireshark.org/) et capturez 100000 paquets.
>

Une fois l'exécution de la commande terminée, le fichier de capture est créé. Vous pouvez soit joindre le fichier créé à votre ticket d'assistance, soit le téléverser sur notre solution de partage de fichiers à l'aide de [ce guide](/pages/account_and_service_management/account_information/use-plik).

Veillez à partager, dans le ticket d'assistance, le lien du fichier téléversé.

#### Étape 2 - Fournir des informations à OVHcloud

Dans tous les cas de figure où des ajustements de notre système Anti-DDoS seront nécessaires, il sera indispensable de nous fournir les détails spécifiques suivants :

- Service hébergé sur le serveur concerné :
- Date et heure de début de l'attaque :
- Date et heure de la fin de l'attaque :
- IP(s) concernée(s) :
- Service & Protocole & Port utilisés par le service affecté :
- Taille du service (XS : 1-10, S : 10-100, M : 100-1k, L : 1-10k, XL : 10-100k, XXL : plus de 100k clients connectés) :
- Autres services hébergés sur le serveur :
- Autres ports utilisés sur le serveur : 
- Existe-t-il d'autres services sur des IP distinctes : Oui/Non
- Si oui, quelles sont les IPs :
- Le trafic légitime est-il supprimé : OUI/NON
- La connexion au serveur a-t-elle été perdue : OUI/NON
- Quel type de trafic légitime est supprimé :

## Aller plus loin

- [Activation et configuration du Edge Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

- [Protéger un serveur GAME avec le pare-feu applicatif](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.