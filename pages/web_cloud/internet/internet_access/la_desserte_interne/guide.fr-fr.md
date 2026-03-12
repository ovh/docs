---
title: La desserte interne
excerpt: "Découvrez les éléments composant la desserte interne de votre ligne téléphonique"
updated: 2018-03-26
---

### Préambule {#préambule}

La desserte interne correspond à la prolongation de la ligne téléphonique depuis la tête France Télécom jusqu'aux parties privatives de l'abonné. Cette partie de ligne est sous la responsabilité de l'abonné ou du propriétaire des lieux.

**Sommaire :**

Niveau : Débutant

------------------------------------------------------------------------

![Schéma de la desserte interne](images/desserte.png){.thumbnail}

Nous allons détailler ici la partie concernant le point de concentration et la desserte interne.

1. Point de concentration
1. Point de terminaison
1. DTI Test
1. Prise gigogne et RJ11/45
1. Module RC

------------------------------------------------------------------------

### Point de concentration {#point-de-concentration}

Le point de concentration, aussi dit "**PC**", est représenté par un boîtier situé soit en façade, soit sur un poteau téléphonique ou électrique. D'un côté, le boîtier est raccordé jusqu'au sous-répartiteur par des **câbles dits de distribution** et de l'autre, il raccorde les abonnés.

Le PC peut également être éloigné de l'habitation. Dans ce cas, un câble appelé **entrée de poste** ("EP") est utilisé pour le raccordement jusqu'à l'habitation.

Il peut être directement raccordé à la première prise téléphonique de l'habitation, la prise DTI ou un boîtier de dérivation.

Certaines habitations ne possèdent pas de point de concentration, car la distribution s'effectue de manière souterraine.

Voici un exemple de PC :

![Exemple de point de concentration](images/IMG_20150518_200808.jpg){.thumbnail}

------------------------------------------------------------------------

### Point de terminaison {#point-de-terminaison}

Le point de terminaison de ligne correspond au **premier point d'accès physique** du réseau installé par Orange. Il est généralement situé chez l'abonné. Le point de terminaison permet de séparer la ligne de la boucle locale (cf. schéma) de l'habitation ou des locaux de l'abonné.

Ce point est matérialisé des façons suivantes :

- Par un dispositif appelé **Dispositif de Terminaison Intérieur** (DTI) (cf. paragraphe 3) ;
- Par la première prise téléphonique sur l'installation téléphonique ;
- Par un **boîtier de dérivation**.

![Boîtier de dérivation](images/derivation.jpeg){.thumbnail}

**La responsabilité en amont du point de terminaison revient à Orange.**

------------------------------------------------------------------------

### DTI **: Dispositif de Terminaison Intérieur** {#dti-dispositif-de-terminaison-intérieur}

Cet appareil est installé en amont de votre réseau interne. Il a l'avantage de pouvoir tester la ligne en entrée tout en isolant votre réseau.

Voici plusieurs type de prises DTI :

![Types de prises DTI](images/dti1.png){.thumbnail}

Exemple de branchement d'un DTI :

![Exemple de branchement DTI](images/branchement.jpeg){.thumbnail}

En aucun cas, le DTI n'est prévu pour que l'on y branche un téléphone.

------------------------------------------------------------------------

### Prise gigogne et RJ45/11 {#prise-gigogne-et-rj4511}

La prise gigogne est une prise utilisant un type de connecteur téléphonique formant un "T". Elle permet de brancher des équipements tels que : téléphone, filtre ADSL, fax, etc.

Présentation d'une prise gigogne :

![Prise gigogne](images/priset.jpg){.thumbnail}

Prise RJ45/11 :

Les prises avec connecteurs RJ45/11 remplacent la prise gigogne dans les nouvelles installations téléphoniques. Elles sont généralement raccordées sur les DTI.

Présentation et explication branchement :

![Prise RJ45](images/rj45.jpeg){.thumbnail}

![Prise RJ11](images/RJ11.png){.thumbnail}

------------------------------------------------------------------------

### Module RC {#module-rc}

Le **module RC**, également appelé "**condensateur**", est un petit boîtier de la taille d'un sucre qui était installé dans les prises téléphoniques. Ce boîtier permettait à Orange de vérifier si une ligne était opérationnelle.

Il existe deux versions de modules : **deux ou trois pattes**. La version trois pattes peut perturber le signal XDSL. Il est alors recommandé de le retirer. La version deux pattes n'occasionne pas de perturbation du signal DSL sauf si celui-ci a été endommagé.

Le module RC peut être présent dans un boîtier de dérivation, une prise gigogne et/ou le DTI.
