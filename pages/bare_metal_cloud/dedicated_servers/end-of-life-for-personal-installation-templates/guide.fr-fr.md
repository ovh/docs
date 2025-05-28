---
title: "Fin des gabarits d'installation personnels"
excerpt: "Information sur la suppression de vos gabarits d'installation et présentation de la solution de contournement"
updated: 2025-04-29
---

**Veuillez lire ce guide dans son intégralité avec une attention toute particulière, car vous pourriez potentiellement être impacté si vous effectuez une demande d'installation OS sur un nouveau serveur dédié ou une demande de réinstallation OS sur l'un de vos serveurs dédiés.**

Bien que cette page explique le décommissionnement des gabarits personnels pour l'installation du système d'exploitation (OS) des serveurs dédiés et ses impacts, soyez rassurés : il n'y a **aucune perte de fonctionnalités**.
En effet, après ce décommissionnement, vous pourrez toujours installer des OS avec le **même niveau de personnalisation qu'auparavant**. De plus, les clients qui utilisent l'API directement bénéficieront d'**un appel API plus simple**.

## Objectif

Cette page fournit des informations clés sur le plan de décommissionnement des gabarits personnels pour l'installation OS des serveurs dédiés. Elle offre également des conseils utiles pour les clients utilisant l'espace client OVHcloud, SoYouStart ou Kimsufi. Enfin, elle présente les avantages de l'appel API nouveau par rapport à l'appel API obsolète.

## Contexte <a name="context"></a>

OVHcloud se réinvente constamment pour adapter ses offres à une demande croissante de résilience. Afin d'atteindre cet objectif, **les gabarits personnels d'installation OS pour les serveurs dédiés** seront tous supprimés le **7 Octobre 2025**.

Cette fonctionnalité permettait de démarrer des tâches d'installation OS sur un serveur dédié en utilisant un gabarit personnel qui contenait les éléments suivants :

- système d'exploitation à installer,
- schéma de partitionnement,
- configuration du RAID matériel,
- nom d'hôte,
- clé SSH publique,
- script de post-installation.

Afin de simplifier l'installation des OS sur les serveurs dédiés, ainsi que pour simplifier la communication de ce changement, un nouvel appel API a été créé : `POST /dedicated/server/{serviceName}/reinstall`{.action}. Cet appel API est le successeur de l'ancienne route : `POST /dedicated/server/{serviceName}/install/start`{.action}. Cette ancienne route permettait de cibler une installation OS depuis un gabarit OVHcloud **ou un gabarit personnel**.

Cette ancienne route, ainsi que la notion de gabarit personnel, seront décommissionnées. En effet, la nouvelle route ne permet que l'installation OS depuis un gabarit OVHcloud. Aussi, veuillez noter que la terminologie « gabarit OVHcloud » (*OVHcloud template* en anglais) va progressivement disparaître en faveur du terme « système d'exploitation » (ou « OS » pour *Operating System*).

Le décommissionnement des gabarits personnels sera effectué en 2 étapes :

### Étape 1 : 17 Juin 2025 <a name="step-1"></a>

- Les clients ne pourront plus **éditer** ou **ajouter** de nouveaux gabarits personnels.
- Les clients ayant un/des gabarit(s) personnel(s) et au moins un service de serveur dédié actif recevront par e-mail des informations techniques détaillées personnalisées pour migrer leurs requêtes API vers la [nouvelle route /reinstall](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall).

### Étape 2 : 7 Octobre 2025 <a name="step-2"></a>

- Les clients ne pourront plus accéder à leur(s) gabarit(s) d'installation personnel(s)
- Toutes les données liées aux gabarits d'installation personnels seront supprimées.

Veuillez noter que les clients pourront toujours retrouver les données depuis l'e-mail du 17 Juin 2025, puisque la documentation personnalisée envoyée a été générée à partir des données des gabarits personnels en date du 17 Juin 2025.

## En pratique <a name="instructions"></a>

La section ci-dessous contient des informations spécifiques en fonction de votre situation : si vous avez un compte OVHcloud, SoYouStart ou Kimsufi et si vous avez l'habitude d'utiliser l'espace client ou l'API pour installer les OS sur vos serveurs dédiés.

### Espace client OVHcloud, SoYouStart ou Kimsufi <a name="ux"></a>

Le bouton `Installation à partir d'un de vos gabarits`{.action} a été supprimé de l'assistant d'installation OS des serveurs dédiés en Avril 2025. Si vous utilisiez ce bouton, vous disposez de 3 possibilités sur le long-terme :

- Continuer à utiliser l'espace client (non recommandé si vous tendez vers une stratégie d'automatisation), ce qui nécessite d'appliquer manuellement toutes les personnalisations dans l'assistant à chaque fois que vous effectuez une installation OS.
- Ecrire un script qui utilise l'API (recommandé pour les automatisations, mais requiert des connaissances en programmation) : voir la section [API OVHcloud, SoYouStart ou Kimsufi](#api) ci-dessous.
- Utiliser la console API (bon compromis) : utilisez l'ancien appel API jusqu'au 17 Juin 2025, puis utilisez le nouveau appel API avec les payloads fournis ensuite.

Même si vous pouvez déjà explorer des exemples et schémas de la [nouvelle route API /reinstall dans la console API](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall) et lire la [documentation publique](/pages/bare_metal_cloud/dedicated_servers/api-os-installation), voici un contournement temporaire que vous pouvez suivre en attendant de recevoir les payloads de la nouvelle route API dans le courriel du 19 Mai 2025.

#### Contournement pour les comptes OVHcloud <a name="ux-ovh"></a>

Comme mentionné dans la [documentation API OVHcloud](/pages/manage_and_operate/api/first-steps#se-connecter-aux-api-ovhcloud), sur la [page des API OVHcloud](https://eu.api.ovh.com/console/) :

- Cliquez sur `Authentication`{.action} en haut à gauche.
- Cliquez ensuite `Login with OVHcloud SSO`{.action}.
- Saisissez vos identifiants OVHcloud.
- Cliquez sur le bouton `Authorize`{.action} pour autoriser les appels aux API depuis ce site.

![API](images/login.png){.thumbnail}

Ensuite, exécutez l'appel API pour déclencher une installation OS depuis votre gabarit personnel :

- Sélectionnez `v1`{.action}.
- Choisissez la section `/dedicated/server`{.action}.
- Cherchez l'appel API `POST /dedicated/server/{serviceName}/install/start`{.action} (vous pouvez utiliser le filtre).
- Dans le champ `serviceName`, saisissez le nom du serveur dédié auquel vous souhaitez installer l'OS.
- Dans le champ `REQUEST BODY` ("payload API"), mettez le contenu JSON suivant (dans cet exemple, nous supposons que "my-amazing-template" est le nom du gabarit personnel que vous souhaitez installer) :

```json
{
  "templateName": "my-amazing-template"
}
```

Si vous avez besoin de lister et d'afficher les détails de vos gabarits personnels, vous pouvez le faire dans la section `/me`{.action} dans les appels API dans `/me/installationTemplate`{.action}.

> [!alert]
> **Effectuer l'appel API [POST /dedicated/server/{serviceName}/install/start](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/install/start) sur un serveur dédié va effacer toutes ses données. VEUILLEZ UTILISER CET APPEL API AVEC PRÉCAUTION.**
>

Cliquez ensuite sur le bouton `Execute`{.action} pour lancer la tâche d'installation OS.

![console API](images/screenshot-api-console-workaround.png){.thumbnail}

Vous pouvez revenir sur la page du tableau de bord du serveur dédié dans [l'espace client OVHcloud](/links/manager), afin de suivre la progression de la tâche d'installation OS.

#### Contournement pour les comptes SoYouStart ou Kimsufi <a name="ux-sys-ks"></a>

Ouvrez la [console API SoYouStart](https://eu.api.soyoustart.com/console/) ou [celle de Kimsufi](https://eu.api.kimsufi.com/console/).

Cliquez sur le bouton `Login`{.action} en haut à droite et saisissez vos identifiants. Ensuite, cliquez sur `Log in`{.action}. Vous êtes alors authentifié sur la console API.

- Ouvrez la section `/dedicated/server`{.action}.
- Trouvez l'appel API `POST /dedicated/server/{serviceName}/install/start`{.action}.
- Dans le champ `serviceName`, entrez le nom du serveur dédié auquel vous souhaitez installer l'OS.
- Dans le champ `templateName`, mettez le nom du gabarit personnel que vous souhaitez installer.

Si vous avez besoin de lister et d'afficher les détails de vos gabarits personnels, vous pouvez le faire dans la section `/me`{.action} dans les appels API dans `/me/installationTemplate`{.action}.

> [!alert]
> **Effectuer l'appel API [POST /dedicated/server/{serviceName}/install/start](https://eu.api.soyoustart.com/console/#/dedicated/server/%7BserviceName%7D/install/start~POST) (ou [ici](https://eu.api.kimsufi.com/console/#/dedicated/server/%7BserviceName%7D/install/start~POST) pour Kimsufi) sur un serveur dédié va effacer toutes ses données. VEUILLEZ UTILISER CET APPEL API AVEC PRÉCAUTION.**
>

Cliquez ensuite sur le bouton `Execute`{.action} pour lancer la tâche d'installation OS.

Vous pouvez revenir sur la page tableau de bord du serveur dédié dans [l'espace client SoYouStart](https://eu.soyoustart.com/manager) ou [Kimsufi](https://www.kimsufi.com/fr/manager), afin de suivre la progression de la tâche d'installation OS.

### Utiliser les APIs OVHcloud, SoYouStart ou Kimsufi <a name="api"></a>

Si vous utilisez directement les appels APIs OVHcloud, SoYouStart ou Kimsufi pour déclencher les installations OS depuis un gabarit personnel, vous pouvez continuer à utiliser l'appel API `POST /dedicated/server/{serviceName}/install/start`{.action} jusqu'au **7 Octobre 2025**.
Cependant, veuillez noter qu'à partir du **17 Juin 2025**, il ne sera plus possible d'ajouter ou de modifier vos gabarits personnels.

Même si vous allez recevoir un e-mail avec tous les détails concernant les adaptations de payloads API à effectuer pour utiliser le [nouvel appel API /reinstall](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall), vous pouvez commencer dès maintenant à parcourir son schéma [dans la console API](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall) (le schéma est le même pour OVHcloud, [SoYouStart](https://eu.api.soyoustart.com/console/#/dedicated/server/%7BserviceName%7D/install/start~POST) et [Kimsufi](https://eu.api.kimsufi.com/console/#/dedicated/server/%7BserviceName%7D/install/start~POST)) et à regarder sa [documentation publique](/pages/bare_metal_cloud/dedicated_servers/api-os-installation).

Dans votre cas, le décommissionnement des gabarits personnels simplifie l'installation des OS sur les serveurs dédiés. En effet, le [nouvel appel API /reinstall](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall) apporte toutes les personnalisations possibles que l'ancien appel API [POST /dedicated/server/{serviceName}/install/start](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/install/start) n'était pas en mesure de fournir directement sans devoir définir un gabarit personnel dans [/me/installationTemplate](https://eu.api.ovh.com/console/?section=%2Fme&branch=v1#get-/me/installationTemplate) au préalable.

La comparaison suivante vous donne une idée de la réduction du nombre d'appels APIs apportée par le [nouvel appel API /reinstall](https://eu.api.ovh.com/console/?section=%2Fdedicated%2Fserver&branch=v1#post-/dedicated/server/-serviceName-/reinstall) dans le cas d'une personnalisation complexe impliquant du RAID matériel et une personnalisation du partitionnement : de `4+n`{.action} appels (où `n`{.action} représente le nombre de partitions définies dans le schéma de partitionnement) à un seul et unique appel API.

![Comparaison ancien vs nouveau call API](images/api-calls-comparison.png){.thumbnail}

Vous bénéficiez ainsi d'une expérience plus fluide et intuitive.

## Aller plus loin

[Premiers pas avec un serveur dédié](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

[Premiers pas avec un serveur dédié Kimsufi, So You Start ou Rise](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)

[Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)

[API OVHcloud et installation d'un OS](/pages/bare_metal_cloud/dedicated_servers/api-os-installation)

[API OVHcloud et Stockage](/pages/bare_metal_cloud/dedicated_servers/partitioning_ovh)

Échangez avec notre [communauté d'utilisateurs](/links/community).
