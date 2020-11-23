---
deprecated: true
title: Obecně
excerpt: ''
slug: obecne
legacy_guide_number: g597
---


## 
Jednou ze základních vlastností tohoto produktu je, že je instalován přímo na HW vrstvu (známá jako Bare Metal hypervisor). Není tedy nezbytné abyste instalovali OS na Hostitele pro nainstalování VMware ESXi.
VMware ESXi je hypervisor, který umožňuje precizní správu zdrojů u každého virtuálního stroje a zajišťuje lepší výkonnost.
Virtuální server je ve skutečnosti poskládán z několika souborů.
Tento souborový systém má několik charakteristik. Nejdůležitější asi je, že si dokáže poradit s několika konkurujícími si připojeními.
ESXi má také velmi specifický mechanismus pro správu sdílené paměti, jako je obnovení nepoužité paměti plus defragmentace a dekomprese stránek paměti.


## 
Tento nástroj umožňuje migrovat virtuální server z ESXi serveru k jiný za horka (tj. bez nutnosti vypnout server). Toto je možné v případě, že hostované servery používají kompatibilní mikroprocesory (hostitelé od OVH jsou všechny kompatibilní) a úložiště virtuálního serveru jsou sdílená na SAN či NAS.


## 
Tento nástroj umožňuje rozložení zátěže na více ESXi serverů.
Je dostupných několik modelů. Například je možné nechat DRS automaticky spravovat zdroje alokované mezi ESXi servery.
DRS je založeno na mechanismu vMotion pro přesun virtuálních serverů mezi ESXi servery v rámci stejného clusteru. Také si můžete vytvářet pravidla pro skupiny či jednotlivé VM na jednom či více ESXi.


## 
Tato možnost vCenter vytvoří přidružený cluster ESXi serverů.
Technologie "vLockstep", na které je FT, umožňuje VM na sekundárnímu serveru běžet paralelně s VM na primárním serveru. Pouze primární server však může zapisovat na disk či síť: na sekundárním serveru běží stejný VM paralelně, aniž by si byl vědom, že nemá práva na zapis.
V případě, že primární server selže, vCenter bude zakázán. To umožní sekundárnímu server převzít vedení a zajistit pokračování operací na VM.

## POZOR!!!
Tato funkce zatím není na Private Cloud podporována.


## 
VCenter je nástroj pro správu, který centralizuje všechny virtuální stroje a fyzické hostitele ve virtuálním prostředí. Díky tomuto rozhraní je také možno spravovat:

- Monitoring upozornění (CPU, RAM);
- Šablony (skiny či přednastavené operační systémy);
- použité možnosti (HA, vMotion, DRS).



