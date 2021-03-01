---
deprecated: true
title: Jak provést import VM do Dedicated Cloud
excerpt: Příručka vysvětlující jak provést import existujícího VM do Hyper-V Dedicated Cloud
slug: jak_provest_import_vm_do_dedicated_cloud
---


## Export Vašeho VM
Proces exportu záleží na infrastruktuře, na které běží Vaše VM a proto ho zde nemůžeme popsat. Je tedy potřeba použít funkci, která je ve Vašem prostředí pro export VM připravena. Důležité je, aby bylo možné obnovit disk virtuálního stroje. VHDX pod Hyper-V a VMDK pod VMware.


- Vytvořil jsem si VHDX:

V takovém případě se můžete přejít k importu.


- Vytvořil jsem si VMDK:

Nejdříve musíte konvertovat VMDK na VHDX tak, aby to bylo kompatibilní s Hyper-V. Použijte pro to jeden z následujících nástrojů:

- Microsoft Virtual Machine Converter Solution Accelerator
- 2Tware Convert VHD

OVH poskytuje informace o těchto nástrojích jako příklad. Vy pochopitelně můžete použít i jiné nástroje.
OVH neposkytuje podporu pro nástroje, které jsou vytvořeny třetími stranami.


## Připojení ke knihovně pomocí FTPS
Jakmile získáte svůj disk, musíte ho nahrát do VMM knihovny tak, abyste byly následně schopni vytvořit VM z tohoto disku. Pro připojení k FTPS službě a nahrání Vašeho disku se podívejte na následující příručku:
[]({legacy}1425).
Nezapomeňte nahrát svůj disk do adresáře "Data".

![](images/img_1995.jpg){.thumbnail}


## Kontrola, že je disk naimportovaný ve VMM knihovně
VMM knihovnu je potřeba aktualizovat, nežli se tak disk zobrazí. To se stává každou hodinu, takže je možné, že budete muset chvíli vyčkat, nežli tam disk uvidíte.

![](images/img_1996.jpg){.thumbnail}


## Vytvoření šablony z disku
Můžete si vytvořit šablonu z disku. To Vám umožní upravit jakékoli budoucí nasazení z disku. Vše je detailně popsáno v této příručce: []({legacy}1436)


## Vytvoření VM z disku
Jestliže nepotřebujete nic nastavovat, můžete nasadit své VM přímo z disku. Vše je detailně popsáno v této příručce: []({legacy}1426)

