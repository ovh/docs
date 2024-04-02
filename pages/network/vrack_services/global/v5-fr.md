## Introduction

Le produit vRack Services fournit une gamme de services réseaux pour votre vRack. Le premier de ces services réseau est le Service Endpoint. Ce dernier vous permet d'exposer un service managé par OVHcloud (par exemple un service de stockage géré par OVHcloud de type Enterprise File Storage) avec une adresse IP privée dans un sous-réseau spécifique, sur votre vRack. De cette façon, vous vous assurez que toutes les communications avec votre service managé restent privées et sécurisées, car elles ne quittent pas votre réseau privé, qui est isolé des autres clients et du réseau public. Il est également simple et rapide à configurer, soit via l'API, soit via le panneau de contrôle. Le premier service managé qui prend en charge Service Endpoint est Enterprise File Storage (lien). De nombreux autres services managés OVHcloud prendront en charge Service Endpoint à l’avenir.

Pour plus d'informations sur le réseau privé vRack veuillez consulter (doc...) (web : https://www.ovhcloud.com/fr/network/vrack/)

(place de la dernière version du schéma)

## Objectif

Cet article vous explique comment exposer votre service managé sur le vRack avec le produit vRack Services.

## Overview
3 Composants Principaux de la Configuration Réseau   

<ins>1. vRack Service</ins>   
Le service vRack constitue la couche fondamentale de votre configuration réseau, nécessitant une activation dans une région choisie. Ce choix influence l'emplacement physique de vos ressources, affectant ainsi la latence, la conformité et la souveraineté des données. vRack facilite les interconnexions sécurisées et isolées des dispositifs et services à travers les data centers, optimisant l'organisation et la sécurité du réseau.
   
<ins>2. Subnet</ins>   
Les sous-réseaux divisent un réseau plus large en segments gérables, chacun disposant d'une plage spécifique d'adresses IP. Attribuer des sous-réseaux à vos services aide à organiser le trafic réseau, améliore la performance et renforce la sécurité. Cette division logique permet une gestion efficace des ressources et du flux de trafic au sein de votre réseau.
   
<ins>3. Service Endpoint</ins>   
Les Services Endpoint relient vos services au réseau en les associant à un sous-réseau, ce qui attribue automatiquement une adresse IP unique à chaque service. Cette configuration simplifie le déploiement des services, assure un accès facile et permet la mise en place de contrôles d'accès spécifiques et de mesures de sécurité.


## En pratique

### Manager

### API
