---
title: 'Configurer le Network Firewall'
excerpt: 'Découvrez comment configurer votre Network Firewall'
updated: 2023-05-02
---

## Objectif

Pour protéger son infrastructure globale et les serveurs de ses clients, OVHcloud propose un pare-feu paramétrable et intégré à la solution **Anti-DDoS** : le Network Firewall. Cette option vous permet de limiter l'exposition de votre service aux attaques provenant du réseau public.

**Ce guide vous explique comment configurer votre Network Firewall.**

> [!primary]
>
> Pour plus d'informations sur notre solution Anti-DDoS, cliquez ici : <https://www.ovhcloud.com/fr/security/anti-ddos/>.
> 

![Le VAC en détail](images/vac-inside.png){.thumbnail}

## Prérequis

- Posséder un service OVHcloud bénéficiant d’un Network Firewall ([Serveur Dédié](https://www.ovh.com/fr/serveurs_dedies/){.external}, [VPS](https://www.ovh.com/fr/vps/){.external},[instance Public Cloud](https://www.ovhcloud.com/fr/public-cloud/), [Hosted Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/), [Additional IP](https://www.ovhcloud.com/fr/bare-metal/ip/){.external}, etc.)
- Avoir accès à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}.

> [!warning]
> Cette fonctionnalité peut être indisponible ou limitée sur les [serveurs dédiés **Eco**](https://eco.ovhcloud.com/fr/about/).
>
> Consultez notre [comparatif](https://eco.ovhcloud.com/fr/compare/) pour plus d’informations.

## En pratique

OVHcloud a récemment amélioré son offre de sécurité avec l'introduction de l'Edge Network Firewall. Cette fonctionnalité avancée permet de réduire l'exposition aux attaques de réseau en provenance d'Internet, en déplaçant les règles de pare-feu du serveur vers la périphérie du réseau d'OVHcloud. Cela permet de bloquer les attaques entrantes aussi près que possible de leur origine, réduisant ainsi le risque de saturation de la connectivité du serveur ou du rack pour les attaques plus importantes. La gestion des règles de pare-feu peut être complexe, mais grâce à la récente mise à jour de l'interface de l'Edge Network Firewall, cette tâche est désormais plus simple et plus intuitive.

### Activer le Network Firewall

> [!primary]
>
> Le Network Firewall protège l'adresse IP associée à un serveur. Par conséquent, si vous avez un serveur avec plusieurs adresses IP, vous devez configurer chaque IP indépendamment. Une configuration globale du serveur est impossible.
> 

Connectez-vous à[ l’espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external}, accédez à la section `Bare Metal Cloud`{.action} et cliquez sur `IP`{.action}.

Vous pouvez utiliser le menu déroulant sous « Mes adresses IP publiques et services associés » pour filtrer vos services par catégorie.

![filter service](images/selectservice.png){.thumbnail}

Cliquez ensuite sur le bouton `...`{.action} pour activer le pare-feu sur une adresse IPv4.

![Activation du Network Firewall](images/firewallcreation2022.png){.thumbnail}

Confirmez votre action.

![Confirmation](images/creationvalid.png){.thumbnail}

Cliquez ensuite sur `Activer le firewall`{.action} (1), puis sur ` Configurer le firewall`{.action} (2) pour commencer le paramétrage.

![Activation de la configuration](images/activationconfig.png){.thumbnail}

Vous pouvez configurer jusqu'à **20 règles par adresse IP**.

> [!warning]
>
> Si le Network firewall est configuré avec des règles, ces règles sont automatiquement appliquées à chaque attaque DDoS. Le Firewall ne peut pas être désactivé avant la fin de l'attaque, c'est pourquoi il est important de maintenir à jour les règles de pare-feu.
> Par défaut, vous n’avez pas de règles configurées. Toutes les connexions peuvent donc être établies.
> Si vous en possédez, nous vous recommandons de les vérifier régulièrement, même si le pare-feu est désactivé.
> 

> [!primary]
>
> - La fragmentation UDP est bloquée (DROP) par défaut. Lorsque vous activez le Network Firewall, n'oubliez pas de configurer correctement votre unité de transmission maximale (<i>Maximum Transmission Unit</i> ou MTU) si vous utilisez un VPN. Par exemple, sur OpenVPN, vous pouvez cocher `MTU test`{.action} .
> - Le Network Firewall n'est pas pris en compte au sein du réseau OVHcloud. Par conséquent, les règles configurées n'affectent pas les connexions de ce réseau interne.
>

### Configurer le Network Firewall

> [!warning]
> Veuillez noter que le Network Firewall d'OVHcloud ne peut pas être utilisé pour ouvrir des ports sur un serveur. Pour ouvrir des ports sur un serveur, vous devez passer par le pare-feu du système d'exploitation installé sur le serveur.<br>
> Pour plus d'informations, consultez les guides suivants : [Configurer le pare-feu sous Windows](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win) et [Configurer le pare-feu sous Linux avec Iptables](/pages/bare_metal_cloud/dedicated_servers/firewall-Linux-iptable).
>

Pour ajouter une règle:

| ![add-rule-btn](images/edge-firewall-add-rule.png) | 
|:--:| 
| Cliquezr sur `Ajouter une règle`{.action}. |


Pour chaque règle (hors TCP), vous devez choisir :

| ![add-rule-btn](images/basic-rule.png) | 
|:--| 
| &bull; une priorité (de 0 à 19, 0 étant la première règle à appliquer) <br>&bull; une action (`Autoriser`{.action} ou `Refuser`{.action}) <br>&bull; le protocol <br>&bull; une adresse IP (facultatif) |


Pour chaque règle **TCP**, vous devez choisir :

| ![add-rule-btn](images/tcp-rule.png) | 
|:--| 
| &bull; une priorité (de 0 à 19, 0 étant la première règle à appliquer) <br>&bull; une action (`Autoriser`{.action} ou `Refuser`{.action}) <br>&bull; le protocol <br>&bull; une adresse IP (facultatif) <br>&bull; le port source <br>&bull; le port de destination <br>&bull; les options <br>&bull; Fragments|


> [!primary]
>
> - Priorité 0 : nous vous conseillons d'autoriser le protocole TCP sur toutes les adresses IP avec une option `établie`{.action}. Celle-ci vous permet de vérifier que le paquet fait partie d'une session précédemment ouverte (déjà initiée). Si vous ne l'autorisez pas, le serveur ne recevra pas les retours du protocole TCP des requêtes SYN/ACK.
> - Priorité 19 : nous vous conseillons de refuser tout trafic de protocole IPv4 qui n'a été accepté par aucune règle antérieure.
> 

### Exemple de configuration

Pour vous assurer que seuls les ports SSH (22), HTTP (80), HTTPS (443) et UDP (10 000) restent ouverts lors de l'autorisation de l'ICMP, suivez les règles ci-dessous :

![Exemple de configuration](images/exemple.png){.thumbnail}

Les règles sont triées de 0 (la première règle lue) à 19 (la dernière). La chaîne cesse d'être analysée dès qu'une règle est appliquée au paquet reçu.

Par exemple, un paquet pour le port 80/TCP sera capturé par la règle 2 et les règles qui suivent ne seront pas appliquées. Un paquet pour le port 25/TCP ne sera attrapé qu'à la dernière règle (19) qui le bloquera, car le pare-feu n'autorise pas la communication sur le port 25 dans les règles précédentes.

> [!warning]
> Comme indiqué, la configuration ci-dessus n’est qu’un exemple et doit être utilisée comme référence si les règles ne s'appliquent pas aux services hébergés sur votre serveur. Il est absolument nécessaire de configurer les règles de votre firewall en fonction des services hébergés sur votre serveur. Une mauvaise configuration de vos règles de firewall peut entrainer le blocage du trafic légitime et l'inaccessibilité des services du serveur.
>

### Mitigation

Notre solution Anti-DDoS (VAC) comprend trois modes de mitigation : automatique, permanente ou forcée.

**Mitigation automatique (détection permanente)** : par défaut, toutes les IPs OVHcloud sont soumises à la mitigation automatique.  Avec ce mode, le trafic ne passe par le système de mitigation que s'il est détecté comme « inhabituel » par rapport au trafic normal habituellement reçu par le serveur.

**Mitigation permanente** : ce mode peut être activé ou désactivé depuis votre espace client. Avec la mitigation permanente (si elle est activée), vous appliquez un premier niveau de filtrage constant à travers notre Shield hardware.<br>
Tout le trafic passe en permanence par le système de mitigation avant d'atteindre le serveur. Nous recommandons ce mode pour les services faisant l'objet d'attaques fréquentes.<br>
Veuillez noter que la mitigation permanente faisant partie de notre solution Anti-DDoS (VAC), vous pouvez l'activer sur votre IP sans activer le Network Firewall.

Pour l'activer, cliquez sur le menu `Bare Metal Cloud`{.action} et ouvrez `IP`{.action}. Cliquez ensuite sur les `...`{.action} à droite de l'IPv4 concernée et sélectionnez `Mitigation : mode permanent`{.action}.

**Mitigation forcée** : ce mode est activé automatiquement dès qu'une attaque est détectée sur le serveur. Une fois activé sur notre infrastructure Anti-DDoS, ce mode ne peut être désactivé. Afin de protéger notre infrastructure, la protection sera activée pendant toute la durée de l’attaque, jusqu’à ce qu’elle soit totalement mitigée.

> [!warning]
> 
> Si notre solution anti-DDoS limite une attaque, les règles configurées de votre Network Firewall finiront par être appliquées, même si vous avez désactivé le Firewall. Si vous souhaitez qu'aucune règle ne soit appliquée durant une attaque, vous devez supprimer toute règle préalablement créée.
>
> La mitigation étant intégrée à notre solution Anti-DDoS (VAC), elle ne peut être désactivée sur un service. Tous les produits OVHcloud sont livrés avec la protection Anti-DDoS.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
