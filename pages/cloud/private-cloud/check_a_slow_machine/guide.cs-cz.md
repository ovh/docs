---
deprecated: true
title: Kontrola pomalého serveru
excerpt: ''
slug: kontrola_pomaleho_serveru
legacy_guide_number: g601
---


## 
Zde jsou kroky, které je potřeba provést pro diagnostiku zpoždění serveru na VM.

Musíte použít vSphere klienta, nebo se k němu připojit pomocí vlastního lokálního klienta, nebo pomocí RDP, které poskytujeme při aktivování Private Cloud.


## Ověření VM:
Nejdříve si vybereme problematické VM a půjdeme do záložky "performance" (výkon). Zde najdeme shrnutí výkonu CPU, RAM atd. pomocí grafů.
Zde je možné nalézt zajímavá data a nesrovnalosti na jednotlivých VM.
V tomto případě můžete navýšit zdroje alokované pro Váš VM a ujistit se, že zde nejsou žádná omezení z hlediska použitých zdrojů či nastavení VM (kliknutí pravým tlačítkem na VM >> Edit settings >> resources (zdroje))


## Ověření Cluster/Resource Pool
Na clusteru či resource pool jděte do záložky Performance (výkon). to Vám umožní zkontrolovat graficky zobrazeného vykonu a využití zdrojů:

![](images/img_95.jpg){.thumbnail}
V sekci "Resource allocation" je možné vidět spotřebu Vašich VM a dostupné zdroje:

![](images/img_96.jpg){.thumbnail}
Jsou zde dva případy:

- Jestliže je hostitel přetížen, můžete manuálně migrovat své VM na jiného hostitele či použít vMotion a live migration.


Jestliže máte licenci Enterprise, můžete použít DRS, což umožňuje se o toto postarat zcela automaticky podle zdrojů a využití zdrojů jednotlivými VM.


- Jestliže jsou všechny Vaše hostitelské servery velmi zatíženy, bude zde přidána záložka s Private Cloud či úložišti.




## Kontrola úložiště
Mimo systémových zdrojů Vašich VM můžete také monitorovat úložiště. Když máte pohled na Datastore, zvolte si NAS a poté záložku "Performance" (výkon):

![](images/img_97.jpg){.thumbnail}


## Kontrola sítě
Nakonec si můžete zkontrolovat stav sítě. Ve svém Manažeru si můžete zobrazit tok dat a limitace, které jste si nastavili pro VLAN:


- - Manager v5 -> Private Cloud -> Shrnutí/Domů



