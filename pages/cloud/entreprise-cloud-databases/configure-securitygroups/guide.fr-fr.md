---
title: 'Configurer vos groupes de sécurité'
slug: configurer-groupes-securite
excerpt: 'Protéger l''accès à votre cluster au travers de filtres d''accès'
section: 'Démarrer avec votre cluster PostgreSQL'
---

## Fonctionnement des groupes de sécurité
Votre cluster est un service exposé sur le réseau public. Pour des questions de sécurité, OVH vous impose la création de filtres pour vous laisser accéder à votre cluster.

Ces filtres sont réalisés au travers des groupes de sécurité. Par défaut, tout le trafic entrant est bloqué sur votre cluster. Seules les IPs publiques contenues dans ces groupes seront autorisées à accéder au cluster.

Les filtres sont appliqués sur les instances restaurées et le répartiteur de charge, une brique d'infrastructure de votre cluster situé en amont de vos nœuds. Consultez [la documentation OVH](https://docs.ovh.com/fr/load-balancer/){.external} pour plus d'informations sur les répartiteurs de charges.


## Règles de sécurité
Utilisez votre espace client pour interagir avec vos groupes de sécurité.

Les groupes de sécurité sont présentés sous forme de listes depuis la rubrique `Settings`{.action}.

Utilisez ces groupes pour ajouter / supprimer une ou plusieurs adresses IPs.

> [!primary]
> Les adresses IP que vous renseignez doivent respecter certaintes règles :
>
> - être une IP valide
> - ne pas doit pas commencer par 0.0.0.0
> - ne pas être une IP privée ("10.0.0.0/8", "172.16.0.0/12" ou "192.168.0.0/16") 
>

> [!primary]
> Attention : vous devez conserver un groupe de sécurité actif contenant au moins une adresse IP valide pour pouvoir accéder à votre cluster.
>
