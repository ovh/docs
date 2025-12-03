---
title: "Comment utiliser les API de Public VCF aaS (alias Public VCF as-a-Service)"
excerpt: "Guide d’utilisation des API Public VCF aaS (alias Public VCF as-a-Service)"
updated: 2025-12-03
---

## Objectif

Ce guide présente les étapes permettant d'appeler l’API et d'exécuter des opérations courantes (listing, actions VM, snapshots, etc.).

## Prérequis

Avant d’utiliser l’API, nous vous recommandons de consulter les guides suivants :

- [Public VCF as-a-Service - Concepts fondamentaux](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-get-concepts)
- [Public VCF as-a-Service - Concepts réseau](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_concepts)
- [Création d'une VM sur Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd-first-vm-creation)
- [Création de composants réseau via Public VCF as-a-Service](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vcd_network_creation)

## En pratique

### Récupérer l’URL de l’API

L’URL des API Public VCF aaS est disponible dans votre espace client **OVHcldoud**
Vous pouvez ensuite la stocker dans des variables pour simplifier les commandes :

```bash
apiURL="https://cloud.infra01.example.ovhcloud.com/api"
baseURL="${apiURL::-4}"
```

**apiURL** : Remplacer l'URL par l'URL indiqué dans votre espace client **OVHcldoud**.


## Autorisation

Pour appeler l'API, vous devez obtenir un **token de session**, valable pour une durée limitée.

### Récupérer la version d’API supportée

Cette commande liste toutes les versions disponibles et indique lesquelles sont dépréciées :

```bash
curl $apiURL"/versions"
```

Définition de la version :

```bash
VER="39.0"
```

> **Tip**  
> Utilisez toujours la version la plus récente (`deprecated = false`) pour bénéficier des dernières fonctionnalités.

### Encoder votre utilisateur et mot de passe

Cette commande encode vos identifiants au format requis par VMware Cloud Director :

```bash
AUTH=$(echo "<username>@<org>:<password>" | base64  -w 0)
```

### Créer un token de session

La commande suivante ouvre une session et extrait automatiquement le token renvoyé dans les headers HTTP :

```bash
TOKEN=$(curl -Is -XPOST \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Basic $AUTH" \
  $baseURL"/cloudapi/1.0.0/sessions/" \
  | grep "x-vmware-vcloud-access-token" | awk '{print $2}')
```

> **Warning**  
> Le token n’apparaît **pas** dans le corps de la réponse mais uniquement dans les **headers**.

## Utilisation de l'API

### Lister les vApps

Cette requête renvoie toutes les vApps accessibles dans votre organisation.

```bash
curl -XGET \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Bearer $TOKEN" \
  $apiURL"/vApps/query"
```

### Lister les VM

Cette commande liste les VMs (hors templates) :

```bash
curl -XGET \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Bearer $TOKEN" \
  $apiURL"/vms/query?filter=isVAppTemplate==false"
```

---

### Démarrer une VM

Cette commande envoie l’action `powerOn` à la VM cible :

```bash
curl -XPOST \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Bearer $TOKEN" \
  $apiURL"/vApp/<vm-id>/power/action/powerOn"
```

> **Note**  
> Cette opération renvoie une **tâche**, consultable via l’API des tâches.

---

### Créer un snapshot

Cette commande crée un snapshot de la VM sélectionnée :

```bash
curl -XPOST \
  -H "Accept: application/*;version=$VER" \
  -H 'Content-Type: application/vnd.vmware.vcloud.createSnapshotParams+json' \
  -H "Authorization: Bearer $TOKEN" \
  $apiURL"/vApp/<vm-id>/action/createSnapshot" \
  -d '{
        "name": "MonSnapshot",
        "memory": false,
        "quiesce": true
      }'
```

> **Warning**  
> Le quiescing nécessite des VMware Tools fonctionnels. En cas d’erreur, essayez `"quiesce": false`.

---

### Consulter une tâche

Cette commande interroge le statut d'une tâche via son identifiant :

```bash
curl -XGET \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Bearer $TOKEN" \
  $apiURL"/task/<task-id>"
```

---

### Supprimer la session

Il est recommandé de supprimer votre session une fois les opérations terminées :

```bash
curl -i -XDELETE \
  -H "Accept: application/*;version=$VER" \
  -H "Authorization: Bearer $TOKEN" \
  $baseURL"/cloudapi/1.0.0/sessions/current"
```

> **Tip**  
> Fermer votre session améliore la sécurité en évitant toute utilisation prolongée du token.

## Erreurs courantes

| Erreur | Cause possible | Résolution |
|-------|----------------|------------|
| **401 Unauthorized** | Token expiré ou invalide | Générer un nouveau token |
| **403 Forbidden** | Permissions insuffisantes | Vérifier les rôles attribués dans VCD |
| **404 Not Found** | Mauvais ID de ressource | Vérifier l’UUID de la VM/vApp |
| **500 Internal Server Error** | Snapshot impossible ou ressource indisponible | Réessayer sans quiescing, vérifier VMware Tools |
| **503 Service Unavailable** | Plateforme en maintenance | Réessayer plus tard |

> **Note**  
> Certaines opérations (snapshot, powerOn, etc.) peuvent prendre plusieurs minutes.

## Aller plus loin

Pour plus d’informations sur les appels API disponibles et la documentation officielle VMware Cloud Director, consultez :  
[VMware Cloud Director API](https://developer.broadcom.com/xapis/vmware-cloud-director-api/latest/doc/landing-user_operations.html)

Si vous souhaitez obtenir une formation ou une assistance technique personnalisée, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services).

Rejoignez le canal [Discord](https://discord.gg/ovhcloud) pour échanger directement avec notre équipe.

Vous pouvez également participer à la [communauté d’utilisateurs](/links/community) pour partager vos expériences et bonnes pratiques.
