---
title: "Comment configurer l'infrastructure Anti-DDoS pour Solana"
excerpt: "Apprenez à utiliser l'infrastructure Anti-DDoS d'OVHcloud pour protéger vos nœuds Solana sans nuire à leur fonctionnalité"
updated: 2025-10-13
---

> [!primary]
> Les instructions et exemples fournis dans ce guide s'appliquent actuellement exclusivement à la blockchain **Solana**.
>

## Objectif

L'objectif de ce guide est de vous aider à mieux comprendre l'infrastructure Anti-DDoS d'OVHcloud et de vous fournir des instructions sur la façon de configurer une protection efficace sans nuire au trafic réseau relatif à la blockchain.

## Prérequis

- Au moins un [serveur dédié ](/links/bare-metal/bare-metal) qui respecte les exigences matérielles spécifiques de la blockchain souhaitée.

## Introduction à la Blockchain

La blockchain est un registre numérique décentralisé et distribué qui enregistre les transactions sur de nombreux ordinateurs, garantissant que les données ne peuvent pas être modifiées rétroactivement sans la modification de tous les blocs suivants et le consensus du réseau.

Cette technologie crée un registre inviolable et transparent des informations, telles que les transactions financières, ce qui la rend sécurisée et fiable.

Dans certains cas, les pics de communication peuvent déclencher l'infrastructure Anti-DDoS et entraîner la détection de certains modèles de trafic comme des faux positifs.

## En pratique

Pour éviter que votre trafic réseau ne soit suspecté ou bloqué par l'infrastructure Anti-DDoS (en tant que détection de faux positifs), nous vous recommandons fortement de signaler les adresses IP de vos nœuds à nos équipes de support. Cela permettra de créer un profil Solana personnalisé pour une meilleure protection et une fonctionnalité ininterrompue.

Pour commencer, veuillez créer un [ticket de demande d'assistance](https://help.ovhcloud.com/csm?id=csm_get_help) avec les options suivantes : Incident -> IP publique -> [x] Ce service n'est pas répertorié -> Créer une demande d'assistance -> `Suivant`{.action}.

Renseignez ensuite le champ `brève description` avec **"Blockchain Solana Anti-DDoS tuning"**, puis listez les adresses IPv4 de vos nœuds Solana, leurs ports, les types de serveurs qui hébergent les nœuds et la taille de votre cluster (le nombre approximatif de clients connectés) dans la description du problème.

Veuillez noter qu'à l'avenir, vous pourrez contrôler le comportement Anti-DDoS directement via notre espace client.

Si vous n'êtes pas sûr des éléments que vous devez envoyer à nos équipes, vous pouvez vous référer aux cas d'utilisation suivants.

### Cas d'utilisation : Solana

Solana est une plateforme de blockchain à haute performance connue pour sa vitesse exceptionnelle et ses coûts de transaction faibles, ce qui en fait une alternative populaire pour les applications décentralisées. Elle atteint cela en utilisant une horloge cryptographique unique appelée *Proof of History (PoH*), qui horodate les transactions afin de permettre un traitement parallèle et une plus grande efficacité. Ce système est associé à un mécanisme de consensus *Proof of Stake (PoS)*, où les validateurs sont choisis en fonction de leur SOL en jeu, garantissant que le réseau reste sécurisé et décentralisé.

L'architecture de Solana utilise également une combinaison de protocoles tels que Tower BFT, Turbine, Gulf Stream et Sealevel pour optimiser la propagation des blocs, le traitement des transactions et l'exécution des contrats intelligents, contribuant tous à sa vitesse et à son efficacité élevées.

Il existe généralement deux types de nœuds :

- Les **Nœuds validateurs** (également appelés nœuds de consensus) qui sécurisent le réseau Solana en validant les transactions et en participant au consensus.
- Les **Nœuds RPC** qui agissent comme des points d'accès pour les utilisateurs et les applications, permettant de soumettre des transactions et d'interroger les données de la blockchain via des API *sans* participer au consensus.

Les nœuds Solana utilisent les protocoles réseau et les ports suivants :

| Protocole | Utilisation | Port | Types de nœuds |
| :--- | :--- | :--- | :--- |
| Gossip | Découverte de nœuds et partage d'informations de cluster | TCP/UDP 8000-10000 (par défaut 8001) | Validateur / RPC |
| JSON-RPC sur HTTP | Utilisé par les applications pour interroger la blockchain et soumettre des transactions | TCP 8899 | RPC |
| API JSON-RPC WebSockets | Utilisé par les applications pour interroger la blockchain et soumettre des transactions | TCP 8900 | RPC |
| QUIC | Ingestion de transactions à partir de clients, améliorant la fiabilité et l'efficacité du réseau | UDP 8000-8002 (peut varier) | Validateur / RPC |
| Turbine | Diffusion de l'état du réseau et propagation de blocs/shred | TCP/UDP 8000-10000 (par défaut 8003) | Validateur / RPC |

Vous pouvez trouver les exigences matérielles pour les nœuds Solana Validator et RPC dans [la documentation officielle d'Anza](https://docs.anza.xyz/operations/requirements).

## Aller plus loin

Rejoignez notre [communauté d'utilisateurs](/links/community).
