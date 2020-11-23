---
deprecated: true
title: Představení služby OVH Load Balancer 
slug: predstaveni 
excerpt: Seznamte se s nejnovější verzí řešení OVH Load Balancer
section: První kroky
order: 1
---

**Poslední aktualizace 20/02/2018**

## Cíl

Řešení pro redistribuci datové zátěže, [OVH Load Balancer](https://www.ovh.cz/reseni/ip-load-balancing/){.external}, nabízí vysokou míru spolehlivosti a široké spektrum konfiguračních možností. Vše, co musíte udělat, je nakonfigurovat své služby s řešením OVH Load Balancer, a o zbytek se již postaráme za Vás!

**Seznamte se s nejnovější verzí řešení OVH Load Balancer**

## Prerekvizity

- Nejsou vyžadovány žádné specifické vstupní požadavky.


## Postup

 
Nová verze služby [OVH Load Balancer](https://www.ovh.cz/reseni/ip-load-balancing/){.external} je založená na robustních open-source řešeních: HAProxy pro TCP traffic a Nginx pro UDP traffic.

Bez jakýchkoli omezení! Nový OVH Load Balancer může být používán s několika různými protokoly:

|Typ|Popis|Výhody|Technologie|
|---|---|---|---|
|HTTP|Všechny HTTP/HTTPS webové služby|Optimalizováno pro L7 (aplikační vrstva)|Haproxy|
|TCP|Pro všechny síťové služby, které nejsou HTTP|Podpora všech TCP aplikací|Haproxy|
|UDP|Pro všechny druhy UDP traffic|Podpora všech UDP aplikací|Nginx|

Služby zahrnuté v nové verzi řešení OVH Load Balancer:

- OVH Anti-DDoS ochrana
- Podpora multi-zón (Anycast)
- Pokročilá podpora HTTP/HTTPS (přesměrování, hlavičky, ACL...)
- Kompatibilita s Fail-over IP
- Podpora vRack
- Redundance: Váš Load Balancer běží na separovaných instancích, pracujících na zcela redundantním hardwaru.

### Základní součásti řešení

- Nová verze řešení OVH Load Balancer sestává ze třech základní částí:

![Obecné schéma](images/diag_gen.png){.thumbnail}

|Základní část|Funkce|
|---|---|
|Frontend|Frontend definuje typ protokolu (HTTP/TCP/UDP) služby OVH Load Balancer. Jedná se o tu část, která otevírá port pro příchozí komunikaci|
|Farma serverů|Farma přijímá příchozí traffic z frontendu. Jedná se o část, která má na starosti redistribuci datové zátěže|
|Server|Servery, které přijímají redistribuovaný datový tok a odpovídají na příchozí požadavky|

S těmito třemi základními částmi, které dohromady tvoří Load Balancer, můžete své řešení nakonfigurovat pro použití téměř všech dostupných režimů pro redistribuci datové zátěže.


### Proč používat OVH Load Balancer?

#### Redistribuce zátěže

Redistribuce datové zátěže samozřejmě představuje základní funkci tohoto řešení. OVH Load Balancer však nabízí i další užitečné funkce.

![Redistribuce zátěže](images/distribute_load.png){.thumbnail}

#### Prevence nedostupnosti služby

OVH Load Balancer dokáže automaticky rozpoznat nedostupnost serveru. V takových případech ihned započne přesměrovávat příchozí komunikaci na jiný server (pokud je k dispozici). Tímto způsobem lze řešit případné problémy aniž by to mělo jakýchkoli dopad na dostupnost Vašich služeb.

![Prevence nedostupnosti služby](images/eliminate_downtimes.png){.thumbnail}

#### Snadné škálování Vaší infrastruktury

Farmy serverů, frontendy i samotné servery na řešení OVH Load Balancer lze libovolně přidávat/odstraňovat, a to i bez přerušení dostupnosti služby.

![Škálování infrastruktury](images/facilitate_maintenance.png){.thumbnail}


#### Usnadnění údržby

V případě plánované údržby můžete jednoduše přepnout celou farmu serverů do „downtime“ režimu a zamezit tak směrování traffic na servery v této farmě. V takových případech je provádění nezbytné údržby na serverech a jejich znovuuvedení do ostrého provozu mnohem jednodušší.

![Usnadnění údržby](images/scale_easily.png){.thumbnail}


#### Kombinace služeb

V rámci nové verze řešení OVH Load Balancer lze sdružovat různé druhy služeb, jako například: 

- instance Public Cloud s Fail-over IP
- VPS s Fail-over IP
- Dedikované servery s Fail-over IP
- vRack

![Kombinace služeb](images/mix_and_match.png){.thumbnail}

#### Anycast

Datovou zátěž lze redistribuovat napříč různými geografickými oblastmi:

![Anycast](images/anycast.png){.thumbnail}


#### Redistribuce jakéhokoli typu datové zátěže

Řešení OVH Load Balancer již není omezeno pouze na HTTP traffic! Tuto službu lze nyní používat pro všechny druhy TCP či UDP traffic.


#### E-mailový server

Redistribuujte zátěž mezi svými mailovými servery:

![Mail](images/mail.png){.thumbnail}


#### Databáze

Vyvažujte své databáze a učiňte je zcela redundantními.

![Databáze](images/database.png){.thumbnail}


## Kam dál

[Zjistěte více o redistribuci datové zátěže](https://cs.wikipedia.org/wiki/Vyva%C5%BEov%C3%A1n%C3%AD_z%C3%A1t%C4%9B%C5%BEe){.external}.

[Zjistěte více o Haproxy](http://www.haproxy.org/#desc){.external}.

[Zjistěte více o Nginx](https://cs.wikipedia.org/wiki/Nginx){.external}.

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.