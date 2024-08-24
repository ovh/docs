---
title: 'Activer et configurer le Edge Network Firewall'
excerpt: 'Découvrez comment configurer le Edge Network Firewall pour vos services'
updated: 2024-01-05
---

## Objectif

Pour protéger les services des clients exposés sur les adresses IP publiques, OVHcloud propose un pare-feu sans état (*stateless*) qui est configuré et intégré à l’**infrastructure anti-DDoS** : le Edge Network Firewall. Il permet de limiter l’exposition des services aux attaques DDoS, en supprimant des flux réseau spécifiques qui peuvent provenir de l’extérieur du réseau OVHcloud.

**Ce guide vous explique comment configurer le Edge Network Firewall pour vos services.**

> [!primary]
>
> Pour plus d'informations sur notre solution Anti-DDoS, cliquez ici : <https://www.ovhcloud.com/fr-ca/security/anti-ddos/>.
> 

| ![global-schema](images/global_schema.png) | 
|:--:| 
| Comment DDoS mitigation est réalisée chez OVHcloud |

## Prérequis

- Un service OVHcloud exposé et utilisant une adresse IP publique dédiée ([Serveur Dédié](/links/bare-metal/bare-metal), [VPS](https://www.ovhcloud.com/fr-ca/vps/),[instance Public Cloud](https://www.ovhcloud.com/fr-ca/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/fr-ca/enterprise/products/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/fr-ca/network/additional-ip/), etc.)
- Avoir accès à votre [espace client OVHcloud](/links/manager).

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr/compare/) pour plus d’informations.

## En pratique

Le Edge Network Firewall réduit l’exposition aux attaques DDoS réseau en permettant aux utilisateurs de répliquer certaines règles de pare-feu du serveur à la périphérie du réseau OVHcloud. Cela bloque les attaques entrantes au plus près de leur source, réduisant ainsi le risque de surcharge des ressources du serveur en cas d'attaque importante.

### Activer le Edge Network Firewall

> [!primary]
>
> Le Edge Network Firewall protège une IP spécifique associée à un serveur (ou service). Par conséquent, si vous avez un serveur avec plusieurs adresses IP, vous devez configurer chaque IP séparément.
> 

Connectez-vous à[ l’espace client OVHcloud](/links/manager), accédez à la section `Bare Metal Cloud`{.action} puis au menu `Network`{.action} et ouvrez les `Adresses IP publiques`{.action}. Vous pouvez utiliser le menu déroulant sous **« Mes adresses IP publiques et services associés »** pour filtrer vos services par catégorie.

![filtrer les service](images/selectservice_cut.png){.thumbnail}

Cliquez ensuite sur le bouton `...`{.action} à droite de l'IPv4 concernée et sélectionnez d'abord `Créer un pare-feu`{.action}.

![Activation du Edge Network Firewall](images/firewallcreation2022.png){.thumbnail}

Une confirmation vous sera alors demandée. Après confirmation, un pare-feu sera créé et disponible à la configuration.

> [!primary]
> Le bouton `Créer un pare-feu`{.action} ne sera disponible que pour les IP n'ayant jamais eu de pare-feu configuré. Si ce n'est pas la première fois que vous configurez votre pare-feu, vous pouvez ignorer cette étape.
>

| ![Activation de la configuration](images/activationconfig.png) |
|:--:|
| Cliquez ensuite sur `Edge Network Firewall Configuration`{.action} pour commencer à le configurer. |

Sur cette page, vous pouvez choisir d'**activer** ou de **désactiver** le pare-feu à l'aide du bouton dédié.
Il est également possible de le faire d'une autre manière expliquée ci-dessous.

Vous pouvez mettre en place jusqu'à **20 règles par adresse IP**.

> [!warning]
>
> Le Edge Network Firewall est automatiquement activé lorsqu’une attaque DDoS est détectée et ne peut pas être désactivé tant que l’attaque n’est pas terminée. Par conséquent, toutes les règles configurées dans le pare-feu sont appliquées pendant la durée de l’attaque. Cette logique permet à nos clients de décharger les règles de pare-feu du serveur à la périphérie du réseau OVHcloud pendant la durée de l'attaque.
> Veuillez noter que vous devez configurer vos propres pare-feux locaux même si le Edge Network Firewall a été configuré, car son rôle principal est de gérer le trafic en dehors du réseau OVHcloud.
> Si vous avez configuré des règles, nous vous recommandons de les vérifier régulièrement ou lors de changements dans le fonctionnement de vos services. Comme évoqué précédemment, le Edge Network Firewall sera automatiquement activé en cas d’attaque DDoS, même s’il est désactivé dans vos paramètres IP.
>

> [!primary]
>
> - La fragmentation UDP est bloquée (*DROP*) par défaut. Lors de l'activation du Edge Network Firewall, si vous utilisez un VPN, n'oubliez pas de configurer correctement votre unité de transmission maximale (MTU). Par exemple, avec OpenVPN, vous pouvez le vérifier via `MTU test`.
> - Le Edge Network Firewall (ENF), intégré aux Scrubbing Centers (VAC), gère uniquement le trafic réseau provenant de l’extérieur du réseau OVHcloud.
>

### Configurer le Edge Network Firewall

> [!warning]
> Veuillez noter que le Edge Network Firewall d’OVHcloud ne peut pas être utilisé pour ouvrir des ports sur un serveur. Pour ouvrir des ports sur un serveur, vous devez passer par le pare-feu du système d'exploitation installé sur le serveur.
> Pour plus d'informations, reportez-vous aux guides suivants : [Configuration du pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) et [Configuration du pare-feu sous Linux avec iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

**Pour ajouter une règle :**

| ![add-rule-btn](images/enf_add_rule.png) |
|:--:|
| Cliquez sur `Ajouter une règle`{.action}. |

Pour chaque règle (hors TCP), vous devez choisir :

| ![add-rule-btn](images/enf_add_rule_other_than_tcp.png) | 
|:--| 
| &bull; Une priorité (de 0 à 19, 0 étant la première règle à appliquer, suivie des autres) <br>&bull; Une action (`Accepter`{.action} ou `Refuser`{.action}) <br>&bull; Le protocole <br>&bull; L'adresse IP source (facultatif) |

Pour chaque règle **TCP**, vous devez choisir :

| ![add-rule-btn](images/enf_add_rule_tcp.png) | 
|:--| 
| &bull; Une priority (de 0 à 19, 0 étant la première règle à appliquer, suivie des autres) <br>&bull; Une action (`Accepter`{.action} ou `Refuser`{.action}) <br>&bull; Le protocole <br>&bull; L'adresse IP source (facultatif) <br>&bull; Le port source (facultatif) <br>&bull; Le port de destination (facultatif) <br>&bull; L'état TCP (facultatif) <br>&bull; Fragments (facultatif)|

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
> Les configurations de pare-feu avec seulement des règles de mode « Accept » ne sont pas du tout efficaces. Une instruction doit indiquer ce qui doit être supprimé par le pare-feu. Vous recevrez un avertissement à moins qu'une règle « Refuser » ne soit créée.
> 

**Activer le pare-feu :**

| ![activate-desactivate](images/enf_enabled_button_01.png) |
|:--:| 
| Utilisez le bouton `Activer`{.action} pour activer le pare-feu. |

Après validation, le firewall sera activé.

**Désactiver le pare-feu :**

| ![activate-desactivate](images/enf_enabled_button_04.png) |
|:--:|
| Utilisez le bouton `Désactiver`{.action} pour le désactiver. |

Après validation, le firewall sera désactivé.

Notez que les règles sont désactivées jusqu'au moment où une attaque est détectée, puis qu'elles sont activées. Cette logique peut être utilisée pour les règles qui ne sont actives que lorsqu'une attaque répétée connue arrive.

### Exemple de configuration

Pour vous assurer que seuls les ports SSH (22), HTTP (80), HTTPS (443) et UDP (53) restent ouverts lors de l'autorisation de l'ICMP, suivez les règles ci-dessous :

![Exemple de configuration](images/exemple.png){.thumbnail}

Les règles sont triées de 0 (la première règle lue) à 19 (la dernière). La chaîne cesse d'être analysée dès qu'une règle est appliquée au paquet.

Par exemple, un paquet pour le port TCP 80 sera intercepté par la règle 2 et les règles qui suivent ne seront pas appliquées. Un paquet pour le port TCP 25 ne sera capturé que par la dernière règle (19), ce qui le bloquera car le pare-feu n'autorise pas la communication sur le port 25 dans les règles précédentes.

> [!warning]
> La configuration ci-dessus n'est qu'un exemple et ne doit être utilisée comme référence que si les règles ne s'appliquent pas aux services hébergés sur votre serveur. Il est indispensable de configurer les règles de votre firewall pour qu'elles correspondent aux services hébergés sur votre serveur. Une configuration incorrecte de vos règles de pare-feu peut entraîner le blocage du trafic légitime et l'inaccessibilité des services du serveur.
> 

### Mitigation des attaques - Activité du centre de nettoyage (Scrubbing Center)

Notre infrastructure anti-DDoS (VAC) dispose de deux modes de fonctionnement : **automatique** et **permanent**. Le processus de mitigation est effectué via un centre de nettoyage (*Scrubbing Center*) automatisé. C’est là que notre technologie avancée examine en profondeur les paquets et tente de supprimer le trafic DDoS tout en permettant au trafic légitime de passer.

- **La mitigation automatique** est la valeur par défaut : toutes les adresses IP OVHcloud sont en mitigation automatique et il s'agit en général du meilleur choix pour vos services. Si un trafic malveillant est détecté, le Scrubbing Center est actif. Cet état est alors indiqué par un statut « Forcé » pour une adresse IP donnée. Le Edge Network Firewall est également actif. La situation revient à la normale lorsque l’attaque est mitigée et qu’aucune autre activité suspecte n’est observée.

- **Le mode mitigation permanente** peut être activé ou désactivé depuis votre espace client. Avec la mitigation permanente, vous appliquez de manière permanente le premier niveau de filtrage afin que tout le trafic passe en permanence par le système de mitigation avant d’atteindre le serveur. Il est déconseillé d'activer cette option sur de plus longues périodes, à moins que vous ne subissiez de la gigue (variation de la latence), en raison du fait que le Scrubbing Center redirige le trafic trop fréquemment.
À noter que, contrairement au mode automatique, il n’y a **pas** d’augmentation du niveau de protection lorsque ce mode est activé.

Pour l'activer, procédez comme suit :

- Cliquez sur `Bare Metal Cloud`{.action}.
- Sélectionnez le menu `Network`{.action} .
- Rendez-vous dans la section `IP`{.action} .

| ![menu-ipv4](images/mitigation_menu.png) | 
|:--:| 
| Cliquez ensuite sur le bouton `...`{.action} à droite de l'IPv4 concernée |


| ![mitigation-option](images/mitigation_menu_step_2.png) | 
|:--:| 
| Sélectionnez `Mitigation : mode permanent`{.action} |

> [!success]
> **Astuces**
> Vous pouvez créer des règles de pare-feu dédiées aux attaques et qui ne s’appliquent qu’après la détection d’une attaque. Pour ce faire, des règles Edge Network Firewall doivent être créées mais désactivées.
>

> [!warning]
> Si notre infrastructure anti-DDoS traite une attaque, les règles de votre Edge Network Firewall finiront par être appliquées, même si vous avez désactivé le pare-feu. Si vous avez désactivé votre pare-feu, n'oubliez pas de supprimer également vos règles.
> 
> Veuillez noter que l’infrastructure anti-DDoS ne peut pas être désactivée sur un service. Tous les produits OVHcloud sont livrés avec ce dispositif et cela ne peut pas être modifié.
>

## Network Security Dashboard

Pour un aperçu détaillé des attaques détectées et des résultats des activités du Scrubbing Center, nous vous encourageons à consulter notre guide sur le [Network Security Dashboard](/pages/bare_metal_cloud/dedicated_servers/network_security_dashboard).

### Conclusion

Après avoir lu ce tutoriel, vous devriez pouvoir configurer le Edge Network Firewall pour améliorer la sécurité de vos services OVHcloud.

## Aller plus loin

- [Protéger un serveur GAME avec le pare-feu applicatif](/pages/bare_metal_cloud/dedicated_servers/firewall_game_ddos)

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
