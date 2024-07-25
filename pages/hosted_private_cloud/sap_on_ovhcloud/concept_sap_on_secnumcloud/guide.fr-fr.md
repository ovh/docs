---
title: "Infrastructure SAP avec la solution VMware on OVHcloud qualifiée SecNumCloud"
excerpt: "Ce concept vous présente une architecture utilisant la solution VMware on OVHcloud SAP HANA pack dans un contexte SecNumCloud"
updated: 2024-07-25
---

## Objectif

Ce concept vous permet de construire une architecture avec des bases de données SAP HANA jusqu'à 1,5 To et d'utiliser toutes les fonctionnalités VMware on OVHcloud (comprenant les templates OVF/OVA, NSX, DRS, Fault Tolerance, ou encore vSphere High Availability) pour votre infrastructure SAP qualifiée SecNumCloud sur une unique région OVHcloud ou multiple.

![schema](images/concept-sap-vmware-secnumcloud.png){.thumbnail}

| Objectif | Description |
| -------- | ----------- |
| Objectif #1 | Construire une infrastructure SAP basée sur une solution SAP HANA on Private Cloud qualifiée SecNumCloud  existante. |
| Objectif #2 | Besoin de conformité avec la qualification SecNumCloud. |
| Objectif #3 | Une perte de données maximale admissible de 60 minutes. |
| Objectif #4 (optionnel) | Une infrastructure SAP disponible sur une seconde localisation OVHcloud qui peut être activée dans le cas d'un incident majeur affectant la localisation OVHcloud principale. Cette seconde localisation OVHcloud propose une perte de données maximale admissible proche de zéro pour vos bases de données SAP HANA. |

> [!primary]
>
> Toutes les informations présentées dans cette documentation sont uniquement fournies à titre informatif. Veuillez noter que certains éléments peuvent différer en fonction de votre environnement SAP. Avant de mettre en œuvre l'une des solutions ou approches décrites dans le présent document, il est recommandé de consulter vos experts SAP et/ou en infrastructure pour vous assurer qu'elles sont adaptées à vos besoins.
>

> [!primary]
>
> Il est fortement recommandé de maintenir les équipements à jour avec les derniers correctifs et mises à jour.
>
> L'ANSSI<sup>1</sup> demande également d'héberger les environnements de production sur une infrastructure distincte et dédiée, et de les isoler des environnements hors production, tels que les environnements de développement et de test.
>

<sup>1</sup> Agence nationale de la sécurité des systèmes d'information

## Éléments du concept

<a name="network-connectivity"></a>

### 1 - Connectivité réseau

Afin d'assurer une qualité de communication optimale entre votre site local et votre infrastructure SAP hébergée chez OVHcloud, nous vous recommandons d'utiliser OVHcloud Connect. Cette solution offre une connexion sécurisée et performante entre votre site local et OVHcloud. Pour plus d'informations, veuillez consulter la page produit [OVHcloud Connect](https://www.ovhcloud.com/fr/network/ovhcloud-connect/).

De plus, un VPN Secure Private Network (VPN-SPN) peut être déployé pour assurer une communication externe sécurisée en utilisant le protocole IPsec avec les meilleures performances entre votre site local et votre infrastructure VMware on OVHcloud qualifiée SecNumCloud. Pour plus de détails sur cette architecture, nous vous recommandons de consulter notre [documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/snc-connectivity-concepts-overview) à ce sujet.

Votre environnement SAP ne doit en aucun cas être accessible depuis Internet sans passer par plusieurs passerelles filtrées et une zone démilitarisée (DMZ). Cette DMZ ne doit pas être contournée.

Pour le SAProuter, utilisé principalement pour connecter votre environnement SAP au support SAP, son installation doit se faire sur une machine virtuelle dédiée qui n'est utilisée à aucune autre fin, au sein d'une DMZ. La SAPROUTTAB doit être configurée avec une grande vigilance.  
L'ANSSI recommande cependant de ne pas ouvrir l'environnement SecNumCloud à un support externe qui n'est pas qualifié SecNumCloud. Dans ce scénario, le support externe prend le contrôle d'un ordinateur d'un administrateur ou d'un serveur via un écran partagé, avec un contrôle visuel de l'administrateur.

De même, le SAP Web Dispatcher, utilisé principalement pour publier des services HTTP(s) pour votre environnement SAP, doit être installé sur une machine virtuelle dédiée qui n'est utilisée à aucune autre fin, au sein d'une DMZ. Seul le protocole HTTPS doit être activé. Les listes de contrôle d'accès (ACL), le gestionnaire d'authentification et le gestionnaire de réécriture HTTP doivent être configurés avec une grande vigilance. Nous vous recommandons d'implémenter un pare-feu d'application web (WAF) pour protéger votre SAP Web Dispatcher des attaques web courantes, telles que l'injection SQL et le cross-site scripting (XSS).

Documentez toutes les connexions et n'ouvrez que les connexions nécessaires. Par ailleurs, les logs de connexion doivent être externalisés afin de garantir l'accès à ces logs même en cas de suppression du service lors d'un comportement suspect du SAProuter ou du SAP Web Dispatcher.

À noter que toutes les communications avec un service SAP en mode SaaS, comme SAP Business Technology Platform (SAP BTP) ou SAP Analytics Cloud (SAC), sont considérées comme étant hors du périmètre qualifié SecNumCloud.

L'ANSSI exige que le même hôte ESXi soit utilisé pour les services au sein d'une même zone de confiance. Cela signifie que vous ne pouvez pas utiliser le même hôte ESXi pour exécuter un service se trouvant dans votre DMZ et un service se trouvant dans votre zone de confiance, comme vos base de données SAP HANA.

Il est important d'effectuer une revue et de tester régulièrement vos mesures de sécurité pour vous assurer qu'elles sont efficaces et à jour. Nous vous recommandons d'effectuer régulièrement des évaluations des vulnérabilités et des tests d'intrusion, ainsi que d'effectuer régulièrement des audits de la configuration de votre réseau et de votre système afin de garantir la conformité avec les exigences et les meilleures pratiques de l'ANSSI.

### 2 - Base de données SAP HANA

Nous vous conseillons de prendre connaissance de la [SAP Note 2161991](https://me.sap.com/notes/2161991), en particulier les chapitres 2 et 3, la [SAP Note 2015392](https://me.sap.com/notes/2015392), la [SAP Note 2937606](https://me.sap.com/notes/2937606), ainsi que la [SAP Note 3102813](https://me.sap.com/notes/3102813) afin de définir une configuration conforme entre SAP et machines virtuelles.

Pour les environnements SAP virtualisés, il est essentiel de s'assurer que le partage NUMA (Non-Uniform Memory Access) est correctement configuré. À défaut, les performances risquent d'être impactées et le système instable. Pour plus d'informations sur le partage NUMA et sa configuration, consultez le [SAP Help Portal](https://wiki.scn.sap.com/wiki/display/VIRTUALIZATION/SAP+HANA+on+VMware+vSphere) ainsi que la [SAP Note 2470289](https://me.sap.com/notes/2470289).

La fonctionnalité Fault Tolerance fournie par VMware n'est pas adaptée à la protection des machines virtuelles SAP HANA en raison de la limitation des ressources de Fault Tolerance. Cependant, nous vous conseillons d'activer la fonctionnalité vSphere HA qui surveille l'intégrité de chaque hôte ESXi du cluster et redémarre automatiquement les machines virtuelles hébergées sur l'hôte ESXi impacté.

Pour une reprise après sinistre et une continuité d'activité optimales, nous vous recommandons de mettre en œuvre un cluster SAP HANA avec SUSE dans une seule région OVHcloud. Cela permet de réduire le temps de rétablissement (RTO) et de perte de données (RPO). Nous mettons à votre disposition une [documentation dédiée](/pages/hosted_private_cloud/sap_on_ovhcloud/Cookbook_configure_sap_hana_cluster) pour vous guider tout au long du processus de configuration. Lors de la mise en place d'un cluster SAP HANA, il est important de créer une règle d'anti-affinité afin d'éviter d'exécuter les deux bases de données SAP HANA sur le même hôte ESXi.

Les volumes de données et de journaux de la base de données SAP HANA doivent être chiffrés. À partir de la version SAP HANA Platform 2.0 SPS 07, les paramètres de chiffrement des données et des journaux ainsi que les sauvegardes sont activés par défaut lors des nouvelles installations. Cependant, il est important de noter que ces paramètres ne sont pas modifiés lors des mises à niveau des versions précédentes. Nous vous recommandons vivement d'activer le chiffrement de la machine virtuelle au niveau de l'hyperviseur pour plus de sécurité. Notre documentation [Virtual Machine Encryption on vSphere](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt) fournit un guide étape par étape sur la façon d'activer cette fonctionnalité. Vous pouvez également utiliser le vNKP (vSphere Native Key Provider) pour la gestion des clés de chiffrement si vous ne disposez pas encore de service de gestion de clés (KMS). Notre [documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt-vnkp) fournit des instructions sur l'utilisation de vNKP.

L'authentification à la base de données SAP HANA par les administrateurs peut être effectuée à l'aide de diverses méthodes, comprenant mot de passe, SAML, certificat X.509 et Kerberos. Nous vous recommandons d'utiliser un mécanisme d'authentification fort pour empêcher tout accès non autorisé à la base de données. Il est également essentiel de réviser et de mettre à jour régulièrement les rôles et les privilèges pour assurer un contrôle d'accès approprié. L'activation des journaux d'audit est également essentielle pour détecter et répondre aux comportements suspects. Nous vous recommandons d'externaliser les logs d'audit, comme indiqué dans [SAP Note 2624117](https://me.sap.com/notes/0002624117).

Pour renforcer la sécurité, l'accès à la base de données SAP HANA à des fins d'administration devrait être restreint et surveillé via des points d'entrée contrôlés et surveillés. Il est également recommandé de mettre en œuvre une politique de contrôle d'accès robuste et de la réviser et de la mettre à jour régulièrement pour assurer une sécurité optimale.

Pour plus d'informations sur la sécurité SAP HANA, veuillez consulter la [documentation SAP](https://www.sap.com/documents/2016/06/3ea239ad-757c-0010-82c7-eda71af511fa.html).

### 3 - Serveurs d'application SAP

La fonctionnalité Fault Tolerance fournie par VMware garantit la haute disponibilité de vos serveurs d'application SAP, en les basculant automatiquement vers un hôte ESXi différent en cas de panne. Il est recommandé d'activer Fault Tolerance sur les machines virtuelles qui hébergent SAP Central Services (SCS), à condition de ne pas avoir mis en place une autre solution de cluster SAP pour ce service. Fault Tolerance peut également être activé sur les serveurs d'application SAP qui hébergent des services critiques. Pour savoir comment activer cette fonctionnalité, consultez [notre documentation](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_fault_tolerance).

Pour activer Fault Tolerance, la machine virtuelle ne peut pas avoir plus de 8 vCPU et 128 Go de mémoire. Pour les serveurs d'application SAP qui n'hébergent pas de services critiques, la fonctionnalité vSphere High Availability (HA) est recommandée.

La fonctionnalité vSphere Distributed Resource Scheduler (DRS) peut également être activée avec des règles VM/Host pour éviter d'exécuter tous les serveurs d'application SAP sur le même hôte ESXi. Cette fonctionnalité permet d'équilibrer la charge sur les hôtes ESXi du cluster. Pour en savoir plus sur cette fonctionnalité, consultez notre documentation [VMware DRS](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_drs_distributed_ressource_scheduler_new).

Tous les échanges externes et internes avec votre environnement SAP doivent être chiffrés à l'aide du protocole SAP Secure Network Communications (SNC) pour les communications RFC de type 3 et du protocole HTTPS pour les communications RFC de type H/G. Nous vous recommandons de consulter la documentation SAP [Securing Remote Function Call (RFC)](https://support.sap.com/content/dam/support/en_us/library/ssp/security-whitepapers/securing_remote-function-calls.pdf) pour connaître les meilleures pratiques et obtenir des instructions. De plus, vos machines virtuelles SAP Application Server elles-mêmes doivent être chiffrées au niveau de l'hyperviseur. Pour savoir comment activer le chiffrement de machine virtuelle sur vSphere, référez-vous à notre documentation dédiée : [Activation du chiffrement des machines virtuelles (VM Encryption)](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vm_encrypt).

L'authentification au système SAP peut être effectuée à l'aide de diverses méthodes, mot de passe, l'authentification unique (SSO) avec Kerberos, LDAP ou SAML. Pour une sécurité optimale, utilisez un mécanisme d'authentification fort pour empêcher tout accès non autorisé au système SAP. Revoyez et mettez à jour régulièrement les rôles et les privilèges pour garantir un contrôle d'accès. Activez et externalisez les journaux d'audit pour détecter les comportements suspects. Reportez-vous au [SAP Help Portal](https://help.sap.com/docs/ABAP_PLATFORM_NEW/025d1fb2f02c42c097f04f45df09106a/f64babd8c8a0489caf61c48d8bdc9478.html) pour plus d'informations sur la configuration et la gestion des journaux d'audit dans votre environnement SAP.

### 4 - Infrastructure de sauvegarde

À l'heure actuelle, notre solution Object Storage S3 n'est pas qualifiée SecNumCloud. Par conséquent, vous ne pouvez pas utiliser cette solution pour stocker les sauvegardes de votre infrastructure SAP de manière conforme à la qualification SecNumCloud.

Pour assurer la sécurité et la conformité de votre infrastructure SAP, nous vous recommandons vivement de déployer une deuxième infrastructure VMware on OVHcloud qualifiée SecNumCloud dans une région OVHcloud distincte. Cette seconde région sera dédiée à l’hébergement de serveurs NFS pour le stockage des sauvegardes de votre infrastructure SAP. Ces sauvegardes peuvent être gérées par un serveur Veeam Backup and Replication.

Avec Veeam Backup and Replication, créez et gérez facilement des sauvegardes et des snapshots de vos machines virtuelles. Cela vous assure un temps de rétablissement faible (RTO) en cas de problème avec votre solution VMware on OVHcloud.

De plus, Veeam Backup and Replication fournit un Plug-in Veeam pour SAP HANA, vous permettant d'exploiter toutes les fonctionnalités de Backint proposées par SAP pour SAP HANA.

Pour des instructions détaillées sur la configuration de cette infrastructure de sauvegarde, veuillez consulter notre documentation : [Backup SAP HANA with Veeam Backup and Replication](/pages/hosted_private_cloud/sap_on_ovhcloud/Cookbook_veeam_backup_sap_hana).

Nous vous recommandons vivement de mettre en œuvre des sauvegardes régulières et de tester le processus de restauration pour garantir la récupération des données en cas de sinistre.

Vous pouvez utiliser la deuxième région pour stocker des sauvegardes d'autres systèmes critiques.

Enfin, lors de la mise en œuvre de votre infrastructure de sauvegarde, veillez à suivre les meilleures pratiques en matière de configuration et de gestion des sauvegardes, telles que le chiffrement des données de sauvegarde (au repos et en transit), le test de votre processus de restauration, ainsi que l'examen et la mise à jour réguliers de votre stratégie de sauvegarde pour vous assurer qu'elle reste efficace et à jour face aux dernières menaces et vulnérabilités.

### 5 - Connexion du support SAP

Conformément à notre précédent chapitre sur la [connectivité réseau](#network-connectivity), le SAProuter doit être déployé dans une zone démilitarisée (DMZ) et la SAPROUTTAB doit être configurée rigoureusement. Les connexions SAP devront être chiffrées par le protocole SAP Secure Network Communications (SNC).

Une documentation appropriée et des connexions limitées à celles jugées absolument nécessaires sont des mesures de sécurité essentielles. Les logs de connexion sont essentiels pour surveiller et détecter toute activité suspecte ; ils doivent être externalisés pour permettre une lisibilité et un archivage, même si la suppression du service SAProuter est nécessaire. Pour plus d’informations sur les meilleures pratiques, voir la [SAP Note 1895350](https://me.sap.com/notes/1895350/E).

Il est conseillé de placer le SAProuter derrière des dispositifs de sécurité tels que des pare-feu et des systèmes de détection des intrusions (IDS). Ces périphériques peuvent filtrer, analyser et contrôler les connexions vers le SAProuter améliorant la sécurité.

Pour rappel, l’ANSSI vous recommande vivement de ne pas ouvrir l’environnement SecNumCloud à un support externe non qualifié SecNumCloud.

### 6 - Double localisation OVHcloud (optionnel)

Pour assurer une haute disponibilité et atténuer le risque de perte totale du service, il est recommandé de déployer une seconde région OVHcloud avec un service identique. En cas de panne de la région principale, la région secondaire peut prendre le relais et maintenir la continuité du service.

#### 6.1 - Connectivité réseau

Pour une sécurité et une connectivité constantes de votre infrastructure, nous vous recommandons d’utiliser OVHcloud Connect dans la région secondaire d’OVHcloud, similaire à la région principale. De plus, établissez un VPN Secure Private Network (VPN-SPN) entre votre site local et votre infrastructure VMware qualifiée SecNumCloud sur OVHcloud. Cette connexion VPN-SPN doit être attachée au même vRack et étendue à vos deux environnements VMware on OVHcloud à l'aide de la fonctionnalité InterDC, créant ainsi un réseau étendu et sécurisé pour une communication transparente entre tous les composants de votre infrastructure.

#### 6.2 - Base de données SAP HANA

La réplication SAP HANA, connue sous le nom de SAP HSR, joue un rôle essentiel dans la réplication des données et des configurations de votre région OVHcloud principale vers votre région OVHcloud secondaire. Ce processus de réplication vous permet de sécuriser vos données dans une base de données SAP HANA distincte, avec pour résultat une perte de données maximale admissible (RPO) le plus bas possible. SAP HSR assure des capacités de haute disponibilité et de reprise après sinistre en proposant des modes de réplication synchrone et asynchrone. Pour des informations détaillées sur les différents modes de réplication pris en charge par SAP HANA, consultez la documentation SAP sur [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/86267e1ed56940bb8e4a4557cee0e43.html?en=US).

Pour les systèmes SAP HANA fonctionnant dans un environnement OVHcloud avec deux régions, nous vous recommandons vivement d’activer la compression des données et des journaux et d’utiliser le mode de réplication ASYNC. Cette combinaison améliore l’efficacité de la réplication et réduit la bande passante réseau requise. Pour plus d'informations sur ces paramètres, consultez [SAP Help Portal](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/92447e0a105c4facad3553b28aaec318.html).

À partir de la version SAP HANA Platform 2.0 SPS 07, le SSL (Secure Sockets Layer) est activé par défaut à l'aide de TLS/SSL pour les communications entre les sites principaux et secondaires. Si vous utilisez une version inférieure de SAP HANA, assurez-vous que cette fonction de sécurité est activée comme décrit dans la [documentation SAP](https://help.sap.com/docs/SAP_HANA_PLATFORM/6b94445c94ae495c83a19646e7c3fd56/ec50b815f5b740d7a9777d80f7104a2c?html=US).

En cas de reprise de votre région secondaire OVHcloud, il est crucial de basculer les serveurs d'application SAP. Cette bascule permet de garantir des performances constantes entre les serveurs d’application SAP et la base de données SAP HANA lors des procédures de reprise d’activité.

#### 6.3 - Serveurs d'application SAP

Actuellement, aucune solution qualifiée SecNumCloud chez OVHcloud ne prend en charge la réplication en temps réel des machines virtuelles. La solution Continuous Data Protection (CDP) incluse dans Veeam Backup & Replication n'est pas encore compatible avec la solution VMware on OVHcloud.

Si une perte de données admissible maximale (RPO) de quelques heures est jugée acceptable, vous pouvez envisager d'utiliser Veeam Backup & Replication pour maintenir une copie synchronisée entre vos services VMware. Cette approche offre une reprise d'activité (RTO) minimale et raccourcit considérablement le processus de récupération pour la région secondaire.

Cependant, il est fortement déconseillé de planifier des snapshots de machines virtuelles pendant les périodes de forte activité, cela pourrait avoir un impact négatif sur les performances. Pour un équilibre optimal entre la sauvegarde et les performances, planifiez et configurez soigneusement votre planification de snapshots.

Vous pouvez coupler ces snapshots par une sauvegarde plus régulière des volumes critiques sur vos serveurs d'application SAP, comme par exemple les volumes qui hébergent /sapmnt, /usr/sap/trans. Ces sauvegardes à une fréquence plus courte n'impactera pas votre activité et réduira considérablement votre perte de données.

Consultez le [User Guide for VMware vSphere](https://helpcenter.veeam.com/docs/backup/vsphere/replication.html?ver=120) pour obtenir des informations détaillées sur l’utilisation de Veeam Backup & Replication pour maintenir des copies entre vos services VMware et les meilleures pratiques pour équilibrer la protection des données et les performances.

#### 6.4 - Infrastructure de sauvegarde

Le concept reste similaire à une configuration à région unique qui comprend un service SAP HANA on Private Cloud qualifié SecNumCloud, présentant une distinction majeure : la possibilité de restaurer et de reprendre les services SAP sur la deuxième région sans subir de temps d'arrêt dû à la livraison de l'infrastructure.

Dans cette deuxième région, avec un service SAP HANA on Private Cloud qualifié par SecNumCloud, vous pouvez restaurer les sauvegardes et les snapshots de vos serveurs d'application SAP, exécuter une opération de reprise sur vos bases de données SAP HANA secondaires et finalement redémarrer vos systèmes SAP dans un délai maîtrisé.

La différence entre les configurations à une seule région et à deux régions réside dans les capacités de récupération et les délais accélérés. Avec la configuration à deux régions, vous réduisez non seulement le temps de récupération, mais également le risque d'interruption de service dû aux contraintes de livraison de l'infrastructure. Cette conception permet une reprise plus rapide, un fonctionnement continu et une meilleure résilience.

<a name="sap-support-connection"></a>

#### 6.5 - Connexion du support SAP

Pour assurer la continuité de la connexion avec le support SAP lors d'un scénario de reprise d’activité, il est recommandé de configurer un SAProuter secondaire situé dans votre région secondaire OVHcloud. Cette configuration permet au personnel du support SAP d’établir une connexion sécurisée avec vos systèmes SAP dans la région secondaire en cas de sinistre, sans interruption ni temps d’arrêt prolongés.

En cas d’activation de la reprise après sinistre, seule l’adresse IP publique dans le SAP Support LaunchPad doit être mise à jour pour rétablir la connexion.

Pour rappel, l’ANSSI vous recommande vivement de ne pas ouvrir l’environnement SecNumCloud à un support externe non qualifié SecNumCloud.

Le SAProuter secondaire doit toujours être configuré et géré avec le même soin et la même vigilance que s'il s'agissait du SAProuter principal. Par conséquent, toutes les bonnes pratiques et recommandations mentionnées dans les chapitres [Connectivité réseau](#network-connectivity) et [Connexion du support SAP](#sap-support-connection) doivent être scrupuleusement respectées. Des mesures de sécurité, de journalisation et de surveillance appropriées doivent être mises en œuvre pour assurer la sécurité de votre infrastructure SAP et maintenir un niveau élevé de fiabilité de connexion avec le support SAP.

## Aller plus loin

Si vous avez besoin d'une formation ou d'une assistance technique pour la mise en oeuvre de nos solutions, contactez votre commercial ou cliquez sur [ce lien](/links/professional-services) pour obtenir un devis et demander une analyse personnalisée de votre projet à nos experts de l’équipe Professional Services.

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](/links/community).
