---
title: Introduction aux instances et autres notions cloud
slug: introduction-aux-instances-et-autres-notions-cloud
section: Informations générales
---


## Preambule
Il existe beaucoup de termes propre au monde du cloud computing qui sont souvent mal définis. Ce document donne quelques précisions sur des aspects de vocabulaire et en particulier autour de la notion d'**instance**.


## Terminologie
Si la phrase suivante vous pose quelques questions, nous allons éclaircir certains concepts pour une meilleure compréhension.

"En créant un snapshot de ma première instance, je crée une nouvelle image dans le catalogue qui me permettra de démarrer une nouvelle instance en utilisant éventuellement une flavor plus puissante".

Pas d'inquiétude, nous allons détailler tout ça.


### Instance
Le terme instance est souvent employé pour parler tout simplement de serveurs d'un service de cloud computing. Il arrive également que l'on parle de serveur cloud.

Dans tous les cas il s'agit de la même chose ; un serveur gérer par une plateforme de cloud computing en permettant une utilisation "**as a Service**". L'utilisateur bénéficie alors d'un mode de facturation type ["Pay as you go"](../guide.fr-fr.md){.ref} et d'une API permettant de piloter l'infrastructure par des outils compatibles.

À noter que, même si le plus souvent une instance est un serveur virtuel comme c'est le cas dans l'offre Public Cloud d'OVH, il peut très bien s'agir d'autre chose comme un serveur physique.

Une instance est donc un serveur cloud démarré à partir d'une **image** système et d'une **flavor** (voir plus bas). De chaque démarrage d'instance va résulter d'un nouveau déploiement d'une image, on "instancie" l'image système pour créer un nouveau serveur.


### Image
Une image est un système d'exploitation préinstallé, prêt à être utilisé. Ça peut être un système Linux, Windows ou tout autre système qui aura été prévu pour fonctionner sur une plateforme de cloud computing.

Ces images peuvent être "minimale", c'est à dire que le système d'exploitation est réduit au strict nécessaire pour une utilisation normale. Elles peuvent également être enrichies d'applications préinstallées évitant ainsi de les réinstaller à chaque instance démarrée.

Le plus souvent les image utilisées pour le cloud intègrent quelques outils de configuration post-démarrage permettant de paramétrer des infirmations propres à l'instance, comme le hostname par exemple.



> [!primary]
>
> Lorsqu'on prend un snapshot d'une instance, on construit une nouvelle image. Elle pourra alors être réutiliser pour démarrer d'autres instances.
> 

L'ensemble des images disponibles constituent le "catalogue". Parmi ce catalogue on trouve des images publiques, fournit par OVH, et des images privées, propre à chaque projet cloud.

Dans le monde VMware, l'équivalent d'une image est nommé template.


### Flavor
Voici un terme propre à OpenStack, une flavor est le modèle de l'instance définissant ses caractéristiques en terme de ressources. Le plus souvent une flavor définit la quantité de CPU, de RAM et le volume de disque. C'est l'équivalent du terme "enveloppe" dans le monde VMware.

Par exemple la flavor b2-30 définit 8 vCPU, 30 Go de RAM et 200 Go d'espace disque principal.


### OpenStack
OpenStack est la suite de logiciel utilisée par OVH pour construire le socle du service Public Coud. Au fil des années, cette technologie est devenu un standard du marché et un bon nombre d'outils sont directement compatibles OpenStack.


### Volume
Un volume est un disque additionnel indépendant. Il peut être attaché et détaché à une instance à chaud. La taille de ce volume est définie par l'utilisateur en fonction de son besoin.


## Usage
Les notions d'instance, de "Pay as you go" et de service à la demande amènent avec elles de nouvelles possibilités d'exploitation.

Même s'il est possible d'utiliser un service de cloud computing comme on le ferait lors d'une utilisation classique de serveur en location longue durée, l'automatisation permet de tirer profit de tout le potentiel du produit.

Nous ne ferons qu'effleurer certains concepts mais ces courtes explications peuvent permettre de mieux comprendre la philosophie cloud.


### Cloud Ready
Une application ou une utilisation "Cloud Ready" indique simplement que le fonctionnement a été adapté pour profiter au mieux du cloud computing.

Un exemple simple permettra de mieux se rendre compte.

Le besoin : un développeur a besoin d'un environnement de développement sur un serveur pour la réalisation d'un projet.

Une implémentation classique possible : création d'un serveur (virtuel ou physique) qui a un coût, même quand la personne ne travaille pas dessus comme la nuit ou les jours ou il travaille sur d'autre projets.

Une implémentation cloud ready : une image est créée intégrant tous les outils nécessaires au développement, chaque fois que la personne veut travailler sur le projet, une nouvelle instance est démarrée basée sur cette image. Un volume peut lui être rattaché pour conserver les données utiles d'une fois à l'autre. Tout ceci peut être automatisé via un script et des appels API ou directement depuis un outil d'orchestration. Chaque fois que nécessaire, le développeur peut retrouver un environnement identique en utilisant la même image, la même flavor et le même volume, mais entre deux utilisations l'instance ne lui sera pas facturée.


### Cloud Native
Une application "Cloud Native" est une application entièrement automatisée dans la gestion de son architecture et dont le design intègre directement les notions de cloud computing répondant à trois principes :

- Répartition : La charge de l'application doit être répartie sur plusieurs nœuds de manière dynamique pour gérer l'évolution de l'activité.
- Distribution : Les éléments critiques (données, services, ...) de l'application doivent être distribués à plusieurs endroits pour palier à toute panne d'infrastructure.
- L'auto réparation : Lors de la perte d'un élément de l'infrastructure, l'application sait reconnaitre la panne et réagir pour corriger le problème. Souvent un outil d'orchestration est couplé à un outil de monitoring pour gérer ces cas.