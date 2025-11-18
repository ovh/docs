---
title: "Comment obtenir l'empreinte carbone de vos services OVHcloud"
excerpt: "Découvrez comment récupérer l'empreinte carbone mensuelle des services OVHcloud grâce à notre calculatrice carbone"
updated: 2025-06-17
---

## Objectif

Dans le cadre de vos activités profesionnelles ou par intérêt sur le sujet, vous pouvez être amené à devoir calculer l'empreinte carbone de vos services.

**Découvrez comment récupérer mensuellement l'empreinte carbone de vos services OVHcloud.**

## Prérequis

- Être contact « Facturation » des services pour lesquels vous souhaitez obtenir l'empreinte carbone. Pour plus d'informations, consultez [notre guide sur la gestion des contacts](/pages/account_and_service_management/account_information/managing_contacts).

**Le calcul de l'empreinte carbone est disponible pour les services suivants :**

- [Serveur Dédié](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Serveur Dédié Eco](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Instances Public Cloud (Compute)](/links/public-cloud/compute)

## En pratique

Plusieurs points sont à prendre en compte :

- Vous ne pouvez pas générer de bilan pour le mois en cours.
- Que vous saisissiez, via l'API OVHcloud, une date en début, milieu ou fin de mois pour le mois choisi, le bilan prendra en compte le mois complet.
- Aucun bilan ne peut être généré au delà des 24 derniers mois.
- Aucun bilan ne peut être généré pour la période précédant la date de mise en place de la fonctionnalité pour chaque service OVHcloud (voir le tableau ci-dessous).

| Service                | Date de mise en service de la calculatrice d'empreinte carbone |
|------------------------|----------------------------------------------------------------|
| Serveur Dédié          | 2023/05/01 |
| Serveur Dédié Eco      | 2023/05/01 |
| VMware on OVHcloud     | 2023/08/01 |
| Instances Public Cloud | 2025/01/01 |

### Récupérer le bilan mensuel du mois précédent via l'espace client OVHcloud

1. Connectez-vous à l'[espace client OVHcloud](/links/manager).
1. Sur la page qui s'affiche et dans la colonne de gauche, descendez jusqu'à la section contenant les **Liens utiles**, puis cliquez sur l'onglet `Mon bilan carbone`{.action}.
1. Sur la nouvelle page qui apparaît, cliquez sur `Télécharger mon empreinte de [Mois] [Année]`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

Vous pourrez récupérer chaque mois l'empreinte carbone du mois précédent pour vos services éligibles.

Si vous avez besoin de l'empreinte carbone pour un mois antérieur au mois précédent le mois en cours, vous devrez obligatoirement passer par nos API pour le récupérer.

### Récupérer un bilan mensuel antérieur au mois précédent via nos API

Par défaut, les API OVHcloud sont mises à disposition pour permettre aux développeurs ou aux intégrateurs d'associer, par exemple, des fonctionnalités présentes ou non dans l'espace client OVHcloud directement dans leurs applications ou solutions.

#### Étape 1 - Se connecter à l'API OVHcloud

- Rendez-vous sur notre site [API OVHcloud](/links/api) (vérifiez bien que vous êtes sur `https://eu.api.ovh.com` si vos services sont hébergés en Europe et sur `https://ca.api.ovh.com` s'ils sont hébergés en dehors de l'Europe).
- Sur la page qui s'affiche, cliquez sur `Explore the OVHcloud API`{.action}.
- Sur la nouvelle page qui apparaît et dans la partie gauche de la page, positionnez-vous sur le formulaire situé à droite du champ `v1`{.action}, puis sélectionnez/saisissez le choix `/me`.
- Parmi la liste d'appels API qui apparaît en dessous, recherchez et cliquez sur l'appel API suivant : **POST /me/carbonCalculator/task**. Vous pouvez aussi cliquer directement sur l'appel API ci-dessous pour y accéder :

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- Sur la partie droite de la page s'affiche alors l'API avec son encadré à compléter.
- Cliquez sur le bouton situé en haut à droite intitulé `Authenticate`{.action}, puis sur le bouton `Login with OVHcloud SSO`{.action}.
- L'interface de connexion à votre [espace client OVHcloud](/links/manager) s'ouvre.
- Connectez-vous avec votre identifiant client, puis cliquez sur `Authorize`{.action} pour utiliser les API OVHcloud avec vos services.
- Vous êtes ensuite automatiquement redirigé vers la page précédente de l'API **POST /me/carbonCalculator/task**.

#### Étape 2 - Demander la génération du bilan et récupérer l'ID de la tâche demandée

Remplacez la date du jour qui apparaît dans l'encadré de l'API par la date à laquelle vous souhaitez arrêter le calcul du bilan. Veuillez respecter le format de date suivant :

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Une fois la date choisie et correctement saisie, cliquez sur le bouton bleu `EXECUTE`{.action} situé en bas à droite de la section préalablement remplie.

Si tout a été effectué correctement, un `taskID` apparaît dans la fenêtre `RESPONSE`{.action} lorsque vous descendez sur la page, en dessous du bouton `EXECUTE`{.action}.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Par exemple, si votre identifiant client OVHcloud est le `aa00000-ovh` et que la date choisie précédemment était le `31-01-2025`, alors vous obtiendrez le résultat suivant :

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Copiez uniquement la valeur obtenue de votre côté et équivalente à la valeur de notre exemple `aa00000-ovh_202501` (sans copier les deux `"` situés aux extrémités).

#### Étape 3 - Récupérer le fichier contenant le bilan carbone de vos services au format PDF

Grâce à la valeur du `taskID` précédemment récupérée, vous pourrez récupérer le bilan carbone de vos services au format PDF.

Restez sur notre site [API OVHcloud](/links/api) et effectuez les actions suivantes :

- Dans la partie gauche de la page, positionnez-vous sur le formulaire situé à droite du formulaire `v1`{.action}, puis sélectionnez/saisissez le choix `/me`{.action}.
- Parmi la liste d'appels API qui apparaît en dessous, recherchez et cliquez sur l'appel API suivant : **GET /me/carbonCalculator/task/{taskID}**. Vous pouvez aussi cliquer directement sur l'appel API ci-dessous pour y accéder :

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- Sur la partie droite de la page s'affiche alors l'appel API avec un formulaire à remplir.

Remplissez le formulaire de la partie `PATH PARAMETERS` ainsi :

- `taskID` : copiez ici la valeur du taskID récupérée lors de l'étape 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Une fois la valeur de votre `taskID` correctement saisie, cliquez sur le bouton bleu `EXECUTE`{.action}.

Le résultat suivant apparaît dans la fenêtre `RESPONSE`{.action} lorsque vous descendez sur la page, en dessous du bouton `EXECUTE`{.action} :

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

Dans ce résultat, copiez l'intégralité de l'URL en « HTTPS » (**sans les guillements**) présente à droite de la mention `"link":`, puis collez-la dans la barre de recherche de votre navigateur internet pour initier le téléchargement du bilan carbone au format PDF.

Votre navigateur Internet va automatiquement télécharger le fichier, puis l'afficher.

> [!primary]
>
> En fonction de la configuration de votre navigateur, le téléchargement et l'affichage du fichier peut se retrouver bloqué. Si tel est le cas, vérifiez la configuration de votre navigateur, puis rechargez la page.

Une fois le fichier ouvert, vous y trouverez notamment les éléments suivants :

- Un tableau récapitulatif des émissions de C02 par catégorie pour le mois demandé.
- Un tableau récapitulatif des émissions de C02 par catégorie entre le début de l'année civile et le mois demandé.
- Un tableau détaillant les valeurs par type de produit souscrit.
- Un graphique présentant les émissions de C02 par catégorie.

> [!warning]
> Le lien généré n'est valide que pendant 24 heures. Veillez donc à télécharger le bilan carbone depuis votre navigateur une fois le lien ouvert.

## Aller plus loin <a name="go-further"></a>

[Premiers pas avec les API OVHcloud](/pages/manage_and_operate/api/first-steps)

Pour des prestations spécialisées (référencement, développement, etc.), contactez les [partenaires OVHcloud](/links/partner).
 
Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).
 
Échangez avec notre [communauté d'utilisateurs](/links/community).