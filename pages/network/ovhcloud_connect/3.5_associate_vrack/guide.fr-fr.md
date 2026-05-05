---
title: 'Associer un OVHcloud Connect à votre vRack'
excerpt: 'Découvrez comment associer votre service OVHcloud Connect à un vRack pour bénéficier d''une connectivité privée'
updated: 2026-02-18
---

## Objectif

Le **vRack** est le service de réseau privé d'OVHcloud. Pour permettre à vos ressources OVHcloud (serveurs, VM, etc.) de communiquer via votre lien OVHcloud Connect, vous devez associer le service OVHcloud Connect à un vRack.

## Rôle de l'association

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 170" font-family="Arial, sans-serif" font-size="12">
  <rect width="700" height="170" fill="#f8f9fa" rx="8"/>

  <!-- OVHcloud Connect -->
  <rect x="20" y="50" width="160" height="70" rx="6" fill="#fff3e0" stroke="#e65100" stroke-width="1.5"/>
  <text x="100" y="80" text-anchor="middle" font-weight="bold" fill="#e65100">OVHcloud Connect</text>
  <text x="100" y="100" text-anchor="middle" fill="#555" font-size="10">Lien privé vers votre réseau</text>

  <!-- vRack -->
  <rect x="240" y="30" width="190" height="110" rx="8" fill="#e3f2fd" stroke="#1565c0" stroke-width="2"/>
  <text x="335" y="55" text-anchor="middle" font-weight="bold" fill="#1565c0" font-size="14">vRack</text>
  <text x="335" y="75" text-anchor="middle" fill="#555" font-size="10">Fabric réseau privé</text>
  <rect x="255" y="85" width="160" height="40" rx="4" fill="#fff" stroke="#90caf9"/>
  <text x="335" y="110" text-anchor="middle" fill="#555" font-size="10">VLAN et sous-réseaux</text>

  <!-- Services -->
  <rect x="490" y="20" width="180" height="130" rx="6" fill="#e8f5e9" stroke="#2e7d32" stroke-width="1.5"/>
  <text x="580" y="45" text-anchor="middle" font-weight="bold" fill="#2e7d32">Services OVHcloud</text>
  <text x="580" y="70" text-anchor="middle" fill="#555" font-size="10">Bare Metal Servers</text>
  <text x="580" y="90" text-anchor="middle" fill="#555" font-size="10">VM Public Cloud</text>
  <text x="580" y="110" text-anchor="middle" fill="#555" font-size="10">Hosted Private Cloud</text>
  <text x="580" y="130" text-anchor="middle" fill="#555" font-size="10">Managed Kubernetes</text>

  <!-- Arrows -->
  <line x1="180" y1="85" x2="240" y2="85" stroke="#555" stroke-width="1.5" marker-end="url(#a7)"/>
  <line x1="430" y1="85" x2="490" y2="85" stroke="#555" stroke-width="1.5" marker-end="url(#a7)"/>

  <defs>
    <marker id="a7" markerWidth="8" markerHeight="6" refX="8" refY="3" orient="auto">
      <polygon points="0 0, 8 3, 0 6" fill="#555"/>
    </marker>
  </defs>
</svg>
```

Lorsque vous associez OVHcloud Connect à un vRack :

- Le trafic provenant de votre réseau externe (on-premises, cloud, WAN) peut atteindre les services OVHcloud rattachés au même vRack.
- Les services OVHcloud présents dans le vRack peuvent renvoyer du trafic via OVHcloud Connect vers votre réseau.
- Toutes les communications restent **privées** — elles n'empruntent jamais l'internet public.

## Prérequis

- Un service **OVHcloud Connect** actif (lien physique up ou connexion opérateur active).
- Un service **vRack** provisionné sur votre compte OVHcloud. Si vous n'en disposez pas, vous pouvez le créer depuis l'espace client (gratuit).
- Au moins un service OVHcloud (serveur, VM, etc.) rattaché au vRack.

## Étapes d'association

### Depuis l'espace client OVHcloud

1. Connectez-vous à l'[espace client OVHcloud](https://www.ovh.com/manager/).
2. Rendez-vous dans **Network** → **vRack**.
3. Sélectionnez votre vRack.
4. Cliquez sur **Ajouter un service**.
5. Dans la liste des services éligibles, sélectionnez votre service **OVHcloud Connect**.
6. Cliquez sur **Ajouter** pour confirmer.

L'association est généralement effective en quelques minutes.

### Via l'API

> [!api]
>
> @api {v1} GET /vrack/{serviceName}/ovhCloudConnect
>

```python
import ovh

client = ovh.Client(endpoint='ovh-eu')

vrack_service_name = "pn-12345"
occ_service_id = "your-occ-service-uuid"

# Associer OVHcloud Connect à un vRack
client.post(f"/vrack/{vrack_service_name}/ovhCloudConnect",
            ovhCloudConnect=occ_service_id)
```

> Consultez la [console API OVHcloud](https://eu.api.ovh.com/console/?section=%2FovhCloudConnect&branch=v1) pour la liste complète des endpoints liés au vRack.

### Via Terraform

```hcl
resource "ovh_vrack_ovhcloudconnect" "association" {
  service_name      = "pn-abc123"      # Nom de votre service vRack
  ovh_cloud_connect = "ovhcc-xyz789"   # ID de votre service OVHcloud Connect
}
```

> Consultez la [documentation du provider Terraform OVH](https://registry.terraform.io/providers/ovh/ovh/latest/docs) pour connaître le nom exact de la ressource et ses attributs.

## Vérifier l'association

Après avoir effectué l'association :

1. Dans la rubrique **vRack** de l'espace client, vérifiez que le service OVHcloud Connect apparaît bien dans la liste des services associés.
2. Vérifiez la cohérence de la **configuration VLAN** : le VLAN ID utilisé dans la configuration de votre PoP OVHcloud Connect doit correspondre au VLAN utilisé par vos ressources OVHcloud dans le vRack.
3. **Testez la connectivité** : envoyez un ping vers une ressource OVHcloud depuis votre réseau externe afin de confirmer la communication privée de bout en bout.

## Supprimer l'association

Si vous devez dissocier OVHcloud Connect d'un vRack :

1. Rendez-vous dans **Network** → **vRack** dans l'espace client.
2. Sélectionnez votre vRack.
3. Repérez le service OVHcloud Connect et cliquez sur **Supprimer**.
4. Confirmez la suppression.

> **Avertissement :** la suppression de l'association interrompt immédiatement le trafic privé entre votre réseau externe et les ressources OVHcloud présentes dans ce vRack.

## Et ensuite ?

- [Superviser votre OVHcloud Connect](../3.9_monitor/guide.fr-fr.md)
- [Configurer le réseau de votre vRack](../3.6_vrack_network_setup/guide.fr-fr.md) pour mettre en place correctement les sous-réseaux

## Aller plus loin

Pour bénéficier d'une formation ou d'une assistance technique dans la mise en œuvre de nos solutions, contactez votre conseiller commercial ou cliquez sur [ce lien](/links/professional-services) afin d'obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l'équipe Professional Services.

Échangez avec notre [communauté d'utilisateurs](/links/community).
