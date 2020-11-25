---
deprecated: true
title: 2. část - vytvoření šablony skupin virtuálních ploch (neboli poolů)
slug: jak-vytvorit-pool
excerpt: Zjistěte, jak vytvářet šablony skupin virtuálních ploch pomocí platformy VMware Horizon 7.1
section: Nastavení
order: 2
---

**Poslední aktualizace 22/03/2018**

## Cíl

Nyní můžete svou službu [Cloud Desktop Infrastructure](https://www.ovh.com/fr/cloud/cloud-desktop/infrastructure/){.external} začít používat.

**V této příručce se dozvíte, jak nasadit automatickou skupinu virtuálních ploch (pool) „Linked Clones“.**


## Prerekvizity

- Kompatibilní operační systém (OS): seznam operačních systémů kompatibilních s VMware Horizon 7.1 Agent naleznete [zde](https://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.installation.doc%2FGUID-B45E1464-92B1-4AA8-B4BB-AD59EDF98530.html){.external}.
- Instalace softwaru, který si přejte v rámci skupiny virtuálních ploch nasadit.
- Konfigurace adresy síťové karty prostřednictvím DHCP (Dynamic Host Configuration Protocol).
- Asociace šablony virtuálního stroje (VM) s cílovou sítí skupiny virtuálních ploch (portgroup nebo VLAN).
- VMware Horizon 7.1 Agent.
- Snapshot (pořízený s vypnutým virtuálním strojem), fungující jako neměnný referenční bod.  
- Vytvořená [personalizační šablona (sysprep)](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-sysprep/){.external}. 


## Postup

### Import šablony virtuálního stroje (VM)


Na službě Private Cloud, asociované s Vaší VMware Horizon 7.1 infrastrukturou, můžete vytvářet a importovat plně i částečně nakonfigurované šablony virtuálních strojů.

Za tímto účelem jsou Vám k dispozici následující příručky:

- Vytvoření virtuálního stroje z ISO: [spuštění virtuálního stroje](https://docs.ovh.com/fr/private-cloud/deploiement-d-une-machine-virtuelle-depuis-un-iso/){.external}.
- Vytvoření virtuálního stroje pomocí OVH šablony: [spuštění OVH šablony](https://docs.ovh.com/fr/private-cloud/deploiement-template-ovh/){.external}.
- Import prostřednictvím nástroje OVFtool: [OVFtool](https://docs.ovh.com/fr/private-cloud/ovf-tool/){.external}.


### Asociace šablony s cílovou sítí skupiny virtuálních strojů

Pro správné spuštění virtuálních ploch a zajištění jejich dostupnosti pro uživatele je důležité nakonfigurovat šablonu virtuálního stroje na správné virtuální síti. Informace o DHCP síti jsou zasílány v instalačním e-mailu a jsou dostupné prostřednictvím `dvportgroup` v rozhraní vSphere.

Za účelem asociace šablony a sítí skupiny virtuálních strojů:

- Pravým tlačítkem myši klikněte na virtuální stroj a vyberte `Edit settings`{.action}.
- V závislosti na síťovém rozhraní vyberte příslušné zařízení.
- V sekci `Network Connexion`{.action} vyberte  `Network label`{.action}, uvedený v instalačním e-mailu **DHCP Network** (viz obrázek níže).

![DHCP Network](images/1200.png){.thumbnail}

Pokud požadujete dodatečnou síť, izolovanou od té existující, můžete vytvořit nový přístupový bod s dedikovanou sítí: [Vytvoření nového přístupového bodu](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-access-point/).


### Instalace VMware Horizon 7.1 Agent

> [!primary]
>
> Pokud používáte řešení HaaS, můžete si stáhnout instalační soubory Horizon Agent na následující adrese: <https://files.horizonaas.com/>.
> 

Spusťte instalační soubor Horizon Agent a řiďte se následujícími pokyny:

- Akceptujte smluvní podmínky VMware.
- Vyberte `Install VMware Horizon Agent`{.action} v režimu `Computer Mode`{.action}.
- Zvolte protokol IPv4.
- Navolte instalační možnosti (výchozí nastavení pro začátek postačí).
- Nepovolujte RDP.
- Přijměte nebo upravte cílovou složku.
- Dokončete instalaci.

Detailní informace týkající se instalačního procesu aplikace Horizon 7.1 Agent na virtuálním stroji naleznete na následujících stránkách: [Instalace Horizon Agent na virtuálním stroji](http://pubs.vmware.com/horizon-7-view/index.jsp?topic=%2Fcom.vmware.horizon-view.desktops.doc%2FGUID-1F2D0C6E-6379-4B52-A7EA-C1EF09CE2F9B.html){.external}


### Vytvoření referenčního snapshotu

Zajištění neměnné verze virtuálního stroje, sloužícího jako šablona pro skupinu virtuálních ploch, závisí na vytvoření snapshotu. Tímto způsobem operace prováděné na šabloně přímo neovlivní obsah virtuálních ploch.

- V rozhraní vSphere (na obrázku níže webový klient) vyberte šablonu virtuálního stroje a přejděte do nabídky `Actions`{.action}. Následně klikněte na `Take Snapshot...`{.action} :

![Vytvoření snapshotu](images/1201.png){.thumbnail}

- Snapshot pojmenujte a přidejte k němu popis:

![Název snapshotu](images/1202.png){.thumbnail}

Pokračujte dále na [3. část - vytvoření skupiny virtuálních ploch (pool)](https://docs.ovh.com/fr/cloud-desktop-infrastructure/howto-create-pool/){.external}.


## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.