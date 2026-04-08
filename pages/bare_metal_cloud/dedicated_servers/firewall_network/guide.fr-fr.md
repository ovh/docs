---
title: "Configurer le Edge Network Firewall pour serveurs dédiés"
excerpt: "Activez et configurez le Edge Network Firewall pour filtrer le trafic entrant vers votre serveur dédié OVHcloud"
updated: 2026-03-10
---

## Objectif

Pour protéger les services des clients exposés sur les adresses IP publiques, OVHcloud propose un pare-feu sans état (*stateless*) qui est configuré et intégré à l’**infrastructure anti-DDoS** : le Edge Network Firewall. Il permet de limiter l’exposition des services aux attaques DDoS, en supprimant des flux réseau spécifiques qui peuvent provenir de l’extérieur du réseau OVHcloud.

**Ce guide vous explique comment configurer le Edge Network Firewall pour vos services.**

> [!primary]
>
> Pour plus d'informations sur notre solution Anti-DDoS, [cliquez ici](/links/security/antiddos).
> 

| Infrastructure anti-DDoS et protection DDoS Game chez OVHcloud |
|:--:|
| ![global-schema](images/global_schema_2025.png){.thumbnail} |

## Prérequis

- Un service OVHcloud exposé et utilisant une adresse IP publique dédiée ([Serveur Dédié](/links/bare-metal/bare-metal), [VPS](/links/bare-metal/vps),[instance Public Cloud](/links/public-cloud/public-cloud), [Hosted Private Cloud](/links/hosted-private-cloud/vmware), [Additional IP](/links/network/additional-ip), etc.)

<!-- CP-NAV-START:network-public-ip -->
---

### Accès à l'espace client OVHcloud

- **Lien direct :** [IP publiques](/links/control-panel/network-public-ip)
- **Pour accéder à vos services :** `Network`{.action} > `Adresses IP Publiques`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](/links/bare-metal/eco-about).
>
> Consultez notre [comparatif](/links/bare-metal/eco-compare) pour plus d’informations.

> [!warning]
> Le Edge Network Firewall ne prend pas en charge le protocole QUIC.

## En pratique

Le Edge Network Firewall réduit l’exposition aux attaques DDoS réseau en permettant aux utilisateurs de répliquer certaines règles de pare-feu du serveur à la périphérie du réseau OVHcloud. Cela bloque les attaques entrantes au plus près de leur source, réduisant ainsi le risque de surcharge des ressources du serveur en cas d'attaque importante.

### Configurer le Edge Network Firewall

Le Edge Network Firewall peut être activé ou désactivé par l'utilisateur à tout moment, à une exception près : il est **automatiquement activé** lorsqu’une attaque DDoS est détectée et ne **peut pas être désactivé** tant que l’attaque n’est pas terminée. Par conséquent, toutes les règles configurées dans le pare-feu sont appliquées pendant la durée de l’attaque. Cette logique permet à nos clients de décharger les règles de pare-feu du serveur à la périphérie du réseau OVHcloud pendant la durée de l'attaque.

#### Accéder à la page de configuration du Edge Network Firewall

> [!primary]
>
> À date, cette fonctionnalité n'est disponible que pour les adresses IPv4.

> [!primary]
>
> Le Edge Network Firewall protège une IP spécifique associée à un serveur (ou service). Par conséquent, si vous avez un serveur avec plusieurs adresses IP, vous devez configurer chaque IP séparément.
> 

Vous pouvez utiliser le menu déroulant sous **Mes adresses IP publiques et services associés** pour filtrer vos services par catégorie, ou taper directement l'adresse IP désirée dans la barre de recherche.

![filtrer les services](images/selectservice_cut_new.png){.thumbnail}

Cliquez ensuite sur le bouton `⁝`{.action} à droite de l'IPv4 concernée et sélectionnez `Configurer le Edge Network Firewall`{.action} (ou cliquez sur l'icône de statut dans la colonne **Edge Firewall**).

![Activation du Edge Network Firewall](images/firewall_config_new.png){.thumbnail}

Vous serez amené vers la page de configuration du pare-feu.

> [!primary]
>
> - La fragmentation UDP est bloquée (*DROP*) par défaut. Lors de l'activation du Edge Network Firewall, si vous utilisez un VPN, n'oubliez pas de configurer correctement votre unité de transmission maximale (MTU). Par exemple, avec OpenVPN, vous pouvez le vérifier via `MTU test`.
> - Le Edge Network Firewall (ENF), intégré aux Scrubbing Centers (VAC), gère uniquement le trafic réseau provenant de l’extérieur du réseau OVHcloud.
>

> [!warning]
> Veuillez noter que vous devez configurer vos propres pare-feux locaux même si le Edge Network Firewall a été configuré, car son rôle principal est de gérer le trafic en dehors du réseau OVHcloud.
>
> Si vous avez configuré des règles, nous vous recommandons de les vérifier régulièrement ou lors de changements dans le fonctionnement de vos services. Comme évoqué précédemment, le Edge Network Firewall sera automatiquement activé en cas d’attaque DDoS, même s’il est désactivé dans vos paramètres IP.
>

### Configurer des règles de pare-feu

Vous pouvez mettre en place jusqu'à **20 règles par adresse IP**.

> [!primary]
> Depuis mars 2026, le Edge Network Firewall prend en charge des règles s'appliquant à des plages de ports, en plus des règles habituelles à port unique.
>
> L'utilisation de plages de ports vous permet de protéger avec une seule règle les applications nécessitant plusieurs ports en séquence. Cela garantit que votre configuration respecte la limite des 20 règles, sans avoir à créer une règle distincte pour chaque port utilisé.

> [!warning]
> Veuillez noter que le Edge Network Firewall d’OVHcloud ne peut pas être utilisé pour ouvrir des ports sur un serveur. Pour ouvrir des ports sur un serveur, vous devez passer par le pare-feu du système d'exploitation installé sur le serveur.
>
> Pour plus d'informations, reportez-vous aux guides suivants : [Configuration du pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) et [Configuration du pare-feu sous Linux avec iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Pour ajouter une règle**, cliquez sur le bouton `+ Ajouter une règle`{.action}, en haut à gauche de la page.

| ![add-rule-btn](images/enf_add_rule_new.png) |
|:--:|
| Cliquez sur `+ Ajouter une règle`{.action}. |

Pour chaque règle (hors TCP), vous devez choisir :

| ![add-rule-btn](images/enf_add_rule_no_tcp_new.png){.thumbnail} |
|:--|
| - Une priorité (de 0 à 19, 0 étant la première règle à appliquer, suivie des autres) <br> - Une action (`Accepter`{.action} ou `Refuser`{.action}) <br> - Le protocole <br> - L'adresse IP source (facultatif) |

Pour chaque règle **TCP**, vous devez choisir :

| ![add-rule-btn](images/enf_add_rule_tcp_new.png){.thumbnail} |
|:--|
| - Une priorité (de 0 à 19, 0 étant la première règle à appliquer, suivie des autres) <br> - Une action (`Accepter`{.action} ou `Refuser`{.action}) <br> - Le protocole <br> - L'adresse IP source (facultatif) <br> - Port ou plage de ports source (facultatif) <br> - Port ou plage de ports de destination (facultatif) <br> - L'état TCP (facultatif) <br> - Fragments (facultatif) |

Lorsque vous configurez une règle TCP ou UDP avec un port ou une plage de ports, vérifiez que les champs `port source` et `port destination` contiennent soit un nombre unique compris entre 1 et 65535 (inclus), soit une plage de ports (deux nombres séparés par un tiret, par exemple : 8887-8888).

> [!primary]
> Nous vous conseillons d'autoriser le protocole TCP avec une option `established` (pour les paquets qui font partie d'une session précédemment ouverte/démarrée), les paquets ICMP (pour le ping et traceroute) et éventuellement les réponses DNS UDP des serveurs externes (si vous utilisez des serveurs DNS externes).
>
> **Exemple de configuration :**
>
> - Priorité 0 : Autoriser TCP `established`
> - Priorité 1 : Autoriser UDP, port source 53
> - Priorité 2 : Autoriser ICMP
> - Priorité 19 : Refuser l'IPv4

> [!warning]
> Les configurations de pare-feu avec seulement des règles de mode  `Accept` ne sont pas du tout efficaces. Une instruction doit indiquer ce qui doit être supprimé par le pare-feu. Vous recevrez un avertissement à moins qu'une règle « Refuser » ne soit créée.
> 

**Activer/désactiver le pare-feu :**

| ![activate-desactivate](images/enf_enable_disable_new.png) |
|:--:| 
| Utilisez le bouton commutateur pour activer ou désactiver le pare-feu. |

Après validation, le pare-feu sera activé ou désactivé.

Notez que les règles sont désactivées jusqu'au moment où une attaque est détectée, puis qu'elles sont activées. Cette logique peut être utilisée pour les règles qui ne sont actives que lorsqu'une attaque répétée connue arrive.

### Erreurs courantes et bonnes pratiques

#### Définir simultanément les ports source et destination dans une même règle

Lors de la création de règles de pare-feu, définir à la fois le port source et le port de destination est généralement une erreur de configuration. En effet, les ports sources sont la plupart du temps attribués de manière aléatoire par le système d'exploitation du client (ports éphémères).

Si vous paramétrez une règle sur un port source spécifique, le trafic légitime sera probablement bloqué dès que le port du client changera lors de la session suivante. Pour garantir la continuité de la connexion, vous ne devez spécifier que le port de destination (le port de votre service).

**Bonne pratique :** Laissez le port source vide, sauf si vous filtrez le trafic provenant d'un système spécialisé disposant d'une configuration de sortie statique.

#### Plages de ports trop étendues

Créer des règles autorisant le trafic sur de très larges plages de ports peut constituer un risque de sécurité, car cela augmente considérablement la surface d'attaque de votre serveur. Cela peut entraîner plusieurs problèmes :

- Vous pourriez exposer par inadvertance des services d'arrière-plan qui n'ont pas vocation à être publics, risquant ainsi des fuites d'informations sur votre système et permettant à des acteurs malveillants de sonder votre serveur à la recherche de vulnérabilités.
- L'audit et le dépannage deviennent beaucoup plus complexes, car il est plus difficile de vérifier quelles applications communiquent réellement, ce qui peut masquer des erreurs de configuration ou des intrusions.
- Les larges plages UDP ouvertes sont fréquemment ciblées par des attaques par amplification et réflexion, car la probabilité d'y trouver des services exposés est plus élevée. Des attaquants peuvent usurper une adresse IP cible pour envoyer de petites requêtes aux services de cette plage, lesquels répondent avec des paquets beaucoup plus volumineux. De cette manière, ils utilisent votre serveur pour lancer des attaques DDoS tout en saturant potentiellement votre propre bande passante.

**Bonne pratique :** Utilisez uniquement des plages restreintes pour les ports séquentiels requis par une application spécifique (ex : 5000-5100).

### Exemple de configuration

Pour vous assurer que seuls les ports SSH (22), HTTP (80), HTTPS (443) et UDP (53) restent ouverts lors de l'autorisation de l'ICMP, suivez les règles ci-dessous :

![Exemple de configuration](images/exemple.png){.thumbnail}

Les règles sont triées de 0 (la première règle lue) à 19 (la dernière). La chaîne cesse d'être analysée dès qu'une règle est appliquée au paquet.

Par exemple, un paquet pour le port TCP 80 sera intercepté par la règle 2 et les règles qui suivent ne seront pas appliquées. Un paquet pour le port TCP 25 ne sera capturé que par la dernière règle (19), ce qui le bloquera car le pare-feu n'autorise pas la communication sur le port 25 dans les règles précédentes.

> [!warning]
> La configuration ci-dessus n'est qu'un exemple et ne doit être utilisée comme référence que si les règles ne s'appliquent pas aux services hébergés sur votre serveur. Il est indispensable de configurer les règles de votre pare-feu pour qu'elles correspondent aux services hébergés sur votre serveur. Une configuration incorrecte de vos règles de pare-feu peut entraîner le blocage du trafic légitime et l'inaccessibilité des services du serveur.
> 

### Mitigation des attaques - Activité du centre de nettoyage (Scrubbing Center)

Notre infrastructure anti-DDoS (VAC) fonctionne automatiquement. Le processus de mitigation s'effectue via un centre de nettoyage (**Scrubbing Center**) automatisé. C’est là que notre technologie avancée examine en profondeur les paquets et tente de supprimer le trafic DDoS tout en permettant au trafic légitime de passer.

Toutes les adresses IP OVHcloud sont en mitigation automatique. Si un trafic malveillant est détecté, le **Scrubbing Center** s'active. Cet état est alors représenté par un statut « Forcé » pour une adresse IP donnée. Le Edge Network Firewall est également actif. La situation revient à la normale lorsque l’attaque est mitigée et qu’aucune autre activité suspecte n’est observée.

> [!success]
> **Astuces**
>
> Vous pouvez créer des règles de pare-feu dédiées aux attaques et qui ne s’appliquent qu’après la détection d’une attaque. Pour ce faire, des règles Edge Network Firewall doivent être créées mais désactivées.
>

> [!warning]
> Si notre infrastructure anti-DDoS traite une attaque, les règles de votre Edge Network Firewall finiront par être appliquées, même si vous avez désactivé le pare-feu. Si vous avez désactivé votre pare-feu, n'oubliez pas de supprimer également vos règles.
> 
> Veuillez noter que l’infrastructure anti-DDoS ne peut pas être désactivée sur un service. Tous les produits OVHcloud sont livrés avec ce dispositif et cela ne peut pas être modifié.
>

## Network Security Dashboard

Pour un aperçu détaillé des attaques détectées et des résultats des activités du Scrubbing Center, nous vous encourageons à consulter notre guide sur le [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

## Conclusion

Après avoir lu ce tutoriel, vous devriez pouvoir configurer le Edge Network Firewall pour améliorer la sécurité de vos services OVHcloud.

## Aller plus loin

- [Protéger un serveur GAME avec le pare-feu applicatif](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

[Comment configurer l'infrastructure Anti-DDoS pour Solana](/pages/bare_metal_cloud/dedicated_servers/blockchain_anti_ddos)

Échangez avec notre [communauté d'utilisateurs](/links/community).
