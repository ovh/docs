---
title: "Activer le Syslog et l’abonnement LDP pour les journaux vSphere"
excerpt: "Découvrez comment transférer les journaux vSphere vers votre propre serveur syslog ou les centraliser via le service Log Data Platform (LDP) d’OVHcloud"
updated: 2025-10-13
---

## Objectif

Ce guide explique comment activer le transfert des journaux vSphere selon deux méthodes :

- **Syslog Forward**, pour exporter les journaux NSX-T vers un serveur syslog géré par le client.
- **Abonnement LDP**, pour centraliser les journaux VMware dans la plateforme **OVHcloud Log Data Platform (LDP)**.

Il vous aide également à choisir la solution la plus adaptée à votre environnement Hosted Private Cloud (SNC, PCI-DSS ou standard).

## Prérequis

- Disposer d'un [service Hosted Private Cloud](/links/hosted-private-cloud) utilisant une version de vSphere 6.5 ou ultérieure.
- Avoir accès à l’[API OVHcloud](/links/api).
- Avoir activé l’option de sécurité `syslogForward` sur votre PCC.
- Disposer d'une destination valide pour les journaux :
    - **Serveur syslog client**, joignable via un VLAN privé (conforme à la norme RFC 5424).
    - **Flux LDP OVHcloud**, utilisant la même interface réseau (NIC) que votre PCC.
- Disposer des droits administrateur nécessaires pour créer ou modifier les règles de transfert de journaux.

## Étape 1 - Comparer les méthodes Syslog et LDP

| Méthode | Journaux disponibles | Réseau | Certification | Coût | Cas d’usage idéal |
|:--|:--|:--|:--|:--|:--|
| **Syslog Forward** | Journaux NSX-T uniquement | VLAN privé (pas de réseau public pour SNC) | Compatible PCI-DSS / SNC | Gratuit | Export sécurisé et privé |
| **Abonnement LDP** | ESXi, vCenter, NSX-T (filtrés) | Réseau public | Non disponible pour les environnements PCI-DSS ou SNC | Payant | Corrélation et observabilité centralisées |

> [!primary]
> Le Syslog Forward est la méthode par défaut pour la plupart des services Hosted Private Cloud.
> L’abonnement LDP est recommandé pour les besoins avancés de supervision et d’observabilité.

## Étape 2 - Activer le Syslog Forward

Vous pouvez activer la fonctionnalité Syslog Forward directement depuis **l’espace client OVHcloud** ou via **l’API OVHcloud**.

### Depuis l’espace client OVHcloud

1. Accédez à votre service `Hosted Private Cloud` dans votre [espace client OVHcloud](/links/manager).

2. Sélectionnez votre service VMware, puis cliquez sur l’onglet `Logs`{.action}.

3. Cliquez sur `Activer le transfert de logs via le système Syslog`{.action}.

4. Patientez le temps que l’activation se termine (cela peut prendre jusqu’à 20 minutes).

5. Une fois terminée, une bannière de confirmation s’affiche indiquant que les journaux sont désormais transférés via Syslog.

> [!warning]
> L’onglet `Logs` peut ne pas encore être visible dans votre espace client OVHcloud.
> Il devient disponible une fois la fonctionnalité Syslog Forward activée pour votre service PCC.

### Via l’API OVHcloud

1. Connectez-vous à l’[API OVHcloud](/links/api).

2. Créez un nouveau forwarder syslog via l’appel suivant :

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder

3. Renseignez les paramètres requis :

| Paramètre | Description |
|:--|:--|
| `ip` | Adresse IP de destination de votre serveur syslog |
| `port` | Port d’écoute (par défaut : 6514 pour TLS) |
| `protocol` | `tcp` ou `tls` |
| `sourceType` | Exemple : `nsxtEdge`, `nsxtManager` |
| `logLevel` | `error`, `warning` ou `info` |

4. Validez la configuration.

5. Vérifiez la réception des journaux sur votre serveur syslog (compatible avec **syslog-ng**, **rsyslog** ou **fluentd**).

<<Screenshot placeholder – Syslog activation form in vSphere Manager>>

### Exemples de configuration

#### Syslog-ng (TLS)

```bash
source s_syslog_server {
    network(ip("0.0.0.0") port(7514)
        transport("tls")
        tls(
            key_file("/etc/ssl/private/syslog.key")
            cert_file("/etc/ssl/certs/syslog.pem")
            peer-verify(optional-trusted)
        )
    );
};
destination d_syslog_server {
    file("/var/log/syslog-ng-server/test.log");
};
log {
    source(s_syslog_server);
    destination(d_syslog_server);
};
```

#### Rsyslog (TLS)

```bash
module(load="imtcp"
StreamDriver.Name="gtls"
StreamDriver.Mode="1"
StreamDriver.Authmode="anon"
)

global(
DefaultNetstreamDriver="gtls"
DefaultNetstreamDriverCertFile="/etc/ssl/certs/syslog.pem"
DefaultNetstreamDriverKeyFile="/etc/ssl/private/syslog.key"
)
input(type="imtcp" port="7514" ruleset="syslog_tls")
```

<<Screenshot placeholder – Interface d’un serveur syslog recevant les journaux VMware>>

## Étape 3 - Activer un abonnement LDP

Si vous préférez centraliser vos journaux VMware directement dans **Log Data Platform (LDP)**, vous pouvez souscrire à un flux LDP existant.

1. Vérifiez que l’option `syslogForward` est activée sur votre PCC.

2. Le flux LDP doit utiliser la même interface réseau (NIC) que votre PCC et offrir un niveau de sécurité équivalent.

3. Cette fonctionnalité est disponible uniquement pour les clusters **non SNC** et **non PCI-DSS**.

Journaux disponibles via LDP :

| Source | Types de journaux |
|:--|:--|
| ESXi | `app.hostd`, `app.dfw` |
| vCenter | `vpxd` |
| NSX-T | `app.nsx` |

<<Screenshot placeholder – Page d’abonnement LDP dans le Manager OVHcloud avec sélection du flux>>

### Appel API pour créer un abonnement LDP

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/logForward/ldp/subscription

| Paramètre | Description |
|:--|:--|
| `ldpStream` | Nom du flux LDP cible |
| `securityLevel` | Doit correspondre à la configuration de votre PCC |
| `filter` | Filtres optionnels sur les journaux |
| `activation` | Indiquer `true` pour activer immédiatement le transfert |

## Étape 4 - Supervision et dépannage

Chaque log forward est surveillé automatiquement par **Zabbix** à l’aide de règles de découverte.

Points de contrôle :

- Accessibilité du serveur syslog (telnet sur `<ip>:<port>`).
- Validité de l’empreinte du certificat SSL.

En cas de problème :

- Un **processus de récupération automatique** tente de rétablir la connexion.
- Si l’anomalie persiste, un incident est déclenché pour investigation.
- Le client reçoit une **notification automatique** si le problème provient d’une mauvaise configuration.

Exemple de notification :

> **Objet:** Problème de configuration sur votre serveur de logs
> « Nous n'avons pas pu atteindre votre serveur syslog ou son empreinte de certificat SSL ne correspond pas à la valeur attendue. Merci de le mettre à jour en utilisant la route API suivante. »

> [!api]
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}/changeProperties

<<Screenshot placeholder – Vue de supervision affichant l’état du syslogForward>>

## Étape 5 - Désactiver ou supprimer un Syslog Forward

> [!api]
> @api {v1} /dedicatedCloud DELETE /dedicatedCloud/{serviceName}/syslogForward/forwarder/{logForwardId}

Cet appel supprime la configuration existante et interrompt le transfert des journaux vers le serveur syslog cible.

## Aller plus loin

- [Gérer les droits granulaires sur les objets vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vsphere_granular_rights)
- [Créer une alerte sur votre client vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/monitoring_and_alerts)
- [Documentation OVHcloud Log Data Platform](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_ldp)

Si vous avez besoin d’une formation ou d’une assistance technique pour la mise en œuvre de nos solutions, contactez votre représentant commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet par notre équipe Professional Services.

Rejoignez notre [communauté d’utilisateurs](/links/community).