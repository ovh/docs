---
deprecated: true
title: 'Konfigurace služby vRack mezi dedikovaným serverem a Public Cloud instancí'
slug: konfigurace-vrack-pci-dedikovany-server
excerpt: 'Zjistěte, jak nakonfigurovat privátní síť mezi dedikovaným serverem a Public Cloud instancí'
section: vRack
---

**Poslední aktualizace 27/08/2018**

## Cíl

Řešení vRack umožňuje konfiguraci privátní sítě mezi několika dedikovanými servery OVH. V případě potřeby vytvoření infrastruktury založené na fyzických i virtuálních zdrojích lze privátní síť rozšířit i o instance Public Cloud.

**Zjistěte, jak nakonfigurovat privátní síť vRack mezi dedikovaným serverem a Public Cloud instancí.**


## Prerekvizity

- Služba [vRack](https://www.ovh.cz/reseni/vrack/){.external}.
- [Dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external} kompatibilní se službou vRack.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Přístup k Vámi zvolenému rozsahu privátních IP adres.


## Postup

### Vytvoření Public Cloud projektu

V cloudové sekci [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} klikněte na tlačítko `Objednat`{.action}.

![Vytvořit projekt](images/pci-project-01.png){.thumbnail}

V objednávkovém menu klikněte na tlačítko `Projekt Cloud`{.action}.

![Vytvořit projekt](images/pci-project-02.png){.thumbnail}

Projekt pojmenujte, zvolte platební metodu a klikněte na tlačítko `Vytvořit projekt`{.action}.

![Vytvořit projekt](images/pci-project-03.png){.thumbnail}

Po vytvoření projektu je zapotřebí aktivovat privátní sítě. V administračním rozhraní projektu klikněte na tlačítko `Aktivovat privátní sítě`{.action}.

![Aktivace vRack](images/pci-vrack-01.png){.thumbnail}

V dialogové nabídce vyberte možnost `Existující`{.action} a zvolte službu vRack, s níž si daný projekt přejete asociovat.

![Aktivace vRack](images/pci-vrack-02.png){.thumbnail}


### Spuštění Public Cloud instance

V administračním rozhraní projektu klikněte na tlačítko `Akce`{.action}.

![Vytvoření instance](images/pci-01.png){.thumbnail}

Klikněte na `Přidat server`{.action}.

![Vytvoření instance](images/pci-02.png){.thumbnail}

Klikněte na tlačítko `Pokročilé možnosti`{.action}.

![Vytvoření instance](images/pci-03.png){.thumbnail}

V dolní části nabídky klikněte na rozbalovací nabídku **Asociovat s privátní sítí** a vyberte příslušný vRack. Klikněte na tlačítko `Pokračovat`{.action}.

![Vytvoření instance](images/pci-04.png){.thumbnail}

Instanci spusťte kliknutím na tlačítko `Spustit nyní`{.action}.

![Vytvoření instance](images/pci-05.png){.thumbnail}


### Konfigurace síťových rozhraní

Detailní informace ohledně konfigurace síťových rozhraní mezi instancemi Public Cloud a dedikovaným serverem naleznete v následující dokumentaci: [Konfigurace dedikovaných serverů v rámci služby vRack](https://docs.ovh.com/cz/cs/dedicated/konfigurace-dedikovanych-serveru-vrack/){.external}.


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.