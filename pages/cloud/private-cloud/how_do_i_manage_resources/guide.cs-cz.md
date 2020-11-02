---
deprecated: true
title: Jak mohu spravovat své zdroje?
excerpt: ''
slug: jak_mohu_spravovat_sve_zdroje
legacy_guide_number: g602
---


## 
Zde můžete vidět jak monitorovat zdroje u svého Private Cloud.
Musíte použít vSphere klienta, nebo se k němu připojit pomocí vlastního lokálního klienta, nebo pomocí RDP, které poskytujeme při aktivování Private Cloud.


## Za chodu
Můžete získat přehled zdrojů svých hostitelů pomocí zobrazení svého PCC a poté si zvolte záložku "host":

![](images/img_98.jpg){.thumbnail}


## Na clusteru či v poolu zdrojů.
Veškeré informace o zdrojích Vašeho PCC můžete vidět kliknutím na záložku "Resource Allocation" (alokace zdrojů).
Zde naleznete dostupné zdroje: RAM, CPU, úložiště. Toto zobrazení Vám také umožňuje izolovat abnormální zátěž, která je způsobená jedním z Vašich VM na hostitelích či na virtuálním datacentru. Můžete nastavit limity přístupu k disku (I/O) pro své úložiště, nastavit prioritu pro každý svůj VM, nastavit limity zdrojů pro jednotlivé VM - abyste zabránili situaci, kdy jeden VM spotřebuje veškeré zdroje a sníží tím výkon ostatních VM. Také je zde možné spravovat zdroje pro pool VM.

![](images/img_96.jpg){.thumbnail}


## Grafy zdrojů pro Vaše hostitele či clustery
V záložce "Performance" (výkon) naleznete grafy využití Vašich hostitelů či clusterů:

![](images/img_95.jpg){.thumbnail}
Můžete také použít tlačítko "Advance" a "Chart Option" pro upravení všech svých grafů.
Můžete si zvolit rozsah displeje či dokonce typ grafu, abyste byly schopni provádět precizní analýzy svých dat:

![](images/img_100.jpg){.thumbnail}
Upravení grafů:

![](images/img_101.jpg){.thumbnail}


## Na svém úložišti
Zobrazením sekce "Datacentre" a dále v záložce "datastore" (či "database") uvidíte všechna svá úložiště. Umožní Vám to monitorovat využitý a prázdný prostor na celé infrastruktuře:

![](images/img_102.jpg){.thumbnail}

