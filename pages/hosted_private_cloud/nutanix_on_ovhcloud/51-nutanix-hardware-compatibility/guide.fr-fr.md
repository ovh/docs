---
title: "Compatibilité matérielle Nutanix – Configurations OVHcloud"
excerpt: "Aperçu détaillé des composants matériels qualifiés pour les plateformes Nutanix d’OVHcloud"
updated: 2025-07-17
flag: hidden
---

## Objectif

**Ce guide répertorie les composants matériels validés pour l’infrastructure Nutanix d’OVHcloud, notamment les références OVHcloud-Scale-G2-EMR-01 et OVHcloud-HGR-G2-EMR-01.**

Chaque configuration comprend des éléments de châssis, de carte mère, de processeur, de stockage et de réseau, regroupés par référence de plate-forme.

## Prérequis

- Accès aux spécifications techniques des offres Nutanix d’OVHcloud  
- Compréhension de base des couches de compatibilité matérielle  
- Connaissance du matériel OVHcloud utilisé dans les datacentres

Les versions logicielles suivantes sont actuellement validées par OVHcloud pour les environnements Nutanix :

| Produit/Fonctionnalité | Version  | Commentaire                                        |
|------------------------|----------|----------------------------------------------------|
| AOS                    | 7.3.X    | **LTS (Long-Term Support)** — Une fois validé par OVHcloud |
| AOS                    | 7.X      | **LTS (Long-Term Support)** — Une fois validé par OVHcloud |
| AOS                    | 6.10.X   | **LTS (Long-Term Support)** — Une fois validé par OVHcloud |

Pour plus d'informations, consultez les liens suivants :

- [Nutanix - Upgrade paths](https://portal.nutanix.com/page/documents/upgrade-paths)  
- [Liste de compatibilité Nutanix / OVHcloud](https://portal.nutanix.com/page/documents/list?type=compatibilityList)

## Compatibilité matérielle

> [!success]
> Le double approvisionnement a été sécurisé pour tous les composants des plateformes matérielles. Cela assure la continuité de l'approvisionnement, réduit le risque de pénuries et renforce la résilience de l'infrastructure.

### OVHcloud-HGR-G1-CL-01

Cette configuration 1U prend en charge les processeurs Cascade Lake et le stockage SSD SAS uniquement, conçus pour les nœuds HGR G1.

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Nom du composant</th><th>Composant</th></tr>
  </thead>
  <tbody>
    <tr><td>Châssis</td><td>Inspur NF5280M5</td></tr>
    <tr><td rowspan="2">Carte mère</td><td>YZMB-00882-104</td></tr>
    <tr><td>YZMB-00882-10E</td></tr>
    <tr><td rowspan="3">Processeur</td><td>CPU Intel Cascade Lake 6226R</td></tr>
    <tr><td>CPU Intel Cascade Lake 6242R</td></tr>
    <tr><td>CPU Intel Cascade Lake 6248R</td></tr>
    <tr>
      <td>Mémoire</td>
      <td>Il n’y a pas de limitation de mémoire due à la certification Nutanix. Toute mémoire équivalente validée pour cette carte mère peut être utilisée.</td>
    </tr>
    <tr><td>Lecteur de système d’exploitation</td><td>Intel D3-S4510 SATA SSD 480 Go – réf. SSDSCKKB480G801</td></tr>
    <tr><td rowspan="3">Lecteur de stockage (SAS SSD uniquement)</td><td>Samsung SAS SSD PM1643a 3,84 To – réf. MZILT3T8HBLS/007</td></tr>
    <tr><td>Samsung SAS SSD PM1643 3,84 To – réf. MZILT3T8HALS-00007</td></tr>
    <tr><td>WDS SS530 3,84 To – réf. WUSTR1538ASS201</td></tr>
    <tr><td>Contrôleur de stockage</td><td>JBOD LSI 12 Gbit/s PCIe 8x 6xSFF-8643 9305-24I</td></tr>
    <tr><td>Carte réseau</td><td>ConnectX-5 pour OCP2.0, 25GbE, double port SFP28, PCIe 3.0 x8</td></tr>
  </tbody>
</table>

### OVHcloud-Scale-G2-EMR-01

Cette configuration 1U prend en charge les processeurs Emerald Rapids et le stockage NVMe uniquement, conçus pour les nœuds SCALE-iX.

<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Nom du composant</th><th>Composant</th></tr>
  </thead>
  <tbody>
    <tr><td>Châssis</td><td>1U 21" OVHcloud</td></tr>
    <tr><td>Carte mère</td><td>Asrock SPC741D8QM3-NL-E</td></tr>
    <tr><td rowspan="3">Processeur</td><td>CPU Intel Emerald Rapids XEON6526Y</td></tr>
    <tr><td>CPU Intel Emerald Rapids XEON6542Y</td></tr>
    <tr><td>CPU Intel Emerald Rapids XEON6554S</td></tr>
    <tr>
      <td>Mémoire</td>
      <td>Il n’y a pas de limitation de mémoire due à la certification Nutanix. Tout équivalent validé de la nomenclature NF5280M5 est utilisable.</td>
    </tr>
    <tr>
      <td>Lecteur de système d’exploitation</td>
      <td>SSD NVMe 2,5 pouces 960 Go 64 Gbit/s PM9A3 512n Samsung – réf. MZQL2960HCJR-00A07</td>
    </tr>
    <tr>
      <td>Lecteur de système d’exploitation (alt.)</td>
      <td>SSD NVMe 2,5 pouces 960 Go 64 Gbit/s 7450PRO 512n Micron – réf. MTFDKCC960TFR-1BC15ABYY</td>
    </tr>
    <tr><td rowspan="3">Lecteur de stockage (uniquement NVMe)</td><td>SSD NVMe 2,5 pouces 1,92 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL21T9HCJR-00A07</td></tr>
    <tr><td>SSD NVMe 2,5 pouces 3,84 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL23T8HCLS-00A07</td></tr>
    <tr><td>SSD NVMe 2,5 pouces 7,68 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL27T6HBLA-00A07</td></tr>
    <tr><td rowspan="2">Carte réseau (NIC)</td><td>NVIDIA 2xSFP28 25GbE OCP 3.0 – réf. CX-6 LX CRYPTO – SECURE BOOT 900-9X625-0083-SB0</td></tr>
    <tr><td>BROADCOM 2xSFP28 25GbE PCIe 4.0 x8 – réf. P225P BCM957414A4142CC</td></tr>
    <tr><td>Bloc d’alimentation</td><td>AC 1U T4 850W FSP – réf. YH5851-1EBR2A0D</td></tr>
    <tr><td>TPM</td><td>TPM ASROCK SPI 2.0</td></tr>
  </tbody>
</table>

### OVHcloud-HGR-G2-EMR-01

Cette configuration 1U prend en charge les processeurs Emerald Rapids et le stockage NVMe uniquement, conçus pour les nœuds HGR G2.
<table border="1" cellpadding="4" cellspacing="0">
  <thead>
    <tr><th>Nom du composant</th><th>Composant</th></tr>
  </thead>
  <tbody>
    <tr><td>Châssis</td><td>COMPAL SR220-2</td></tr>
    <tr><td>Carte mère</td><td>LGA4677-X COMPAL IER70 FERA1-E</td></tr>
    <tr><td rowspan="3">Processeur</td><td>Intel Emerald Rapids 5515+</td></tr>
    <tr><td>Intel Emerald Rapids 6526Y</td></tr>
    <tr><td>Intel Emerald Rapids 6542Y</td></tr>
    <tr>
      <td>Mémoire</td>
      <td>Il n’y a pas de limitation de mémoire due à la certification Nutanix. Tout équivalent validé de la nomenclature NF5280M5 est utilisable.</td>
    </tr>
    <tr>
      <td>Lecteur de système d’exploitation</td>
      <td>SSD NVMe 2,5 pouces 960 Go 64 Gbit/s PM9A3 512n Samsung – réf. MZQL2960HCJR-00A07</td>
    </tr>
    <tr><td rowspan="3">Lecteur de stockage (uniquement NVMe)</td><td>SSD NVMe 2,5 pouces 1,92 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL21T9HCJR-00A07</td></tr>
    <tr><td>SSD NVMe 2,5 pouces 3,84 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL23T8HCLS-00A07</td></tr>
    <tr><td>SSD NVMe 2,5 pouces 7,68 To 64 Gbit/s PM9A3 512n Samsung – réf. MZQL27T6HBLA-00A07</td></tr>
    <tr><td>Carte réseau</td><td>NVIDIA 2xSFP28 25GbE OCP 3.0 – réf. CX-6 LX CRYPTO – SECURE BOOT 900-9X625-0083-SB0</td></tr>
  </tbody>
</table>

## Aller plus loin

Si vous avez besoin de formation ou d’assistance technique pour mettre en œuvre nos solutions, veuillez contacter votre Technical Account Manager ou cliquer sur [ce lien](/links/professional-services) pour obtenir un devis ou solliciter nos experts Professional Services pour une analyse personnalisée de votre projet.

Posez vos questions, donnez votre avis et interagissez directement avec l’équipe en charge de nos services Hosted Private Cloud sur notre canal [Discord](https://discord.gg/ovhcloud).

Rejoignez également notre [communauté d'utilisateurs](/links/community).