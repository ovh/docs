---
deprecated: true
title: NAS - často kladené dotazy
slug: faq-nas
excerpt: "Nevíte si rady se svým NAS úložištěm? Podívejte se na nejčastěji kladené dotazy týkající se této služby."
section: NAS
---

**Poslední aktualizace 07/03/2018**

## Produkt

### Co znamená zkratka „HA“ v názvu služby OVH NAS-HA?

Zkratka „HA“ (z anglického „High Availability“) značí, že společnost OVH garantuje vysokou dostupnost služby. Garance vysoké dostupnosti je zakotvena v SLA (Service Level Agreement) příslušné služby. Pokud dojde k výpadku majícímu za následek nedostupnost služby, společnost OVH je na základě zmíněného SLA zákazníkovi povinna poskytnout finanční kompenzaci.
UPOZORNĚNÍ: finanční kompenzace je poskytována pouze tehdy, pokud o ni zákazník projeví explicitní zájem.

### Ve kterých datacentrech OVH je služba NAS-HA dostupná?

NAS-HA lze objednat ve všech francouzských datacentrech OVH (Roubaix, Štrasburk, Gravelines) a v kanadském datacentru Beauharnois. Výběr datacentra se provádí v průběhu objednávky. UPOZORNĚNÍ: jednou zakoupený produkt již nelze mezi datacentry převádět.

### Lze službu NAS-HA spravovat prostřednictvím Zákaznického prostoru?

Ano, službu NAS-HA lze spravovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (sekce `Cloud`, záložka `Platformy a služby`).

### Je možné navyšovat kapacitu NAS úložiště?

Nikoli, kapacitu NAS úložiště již není po jeho objednání možné dále navyšovat. Pro navýšení celkové kapacity svého úložného prostoru můžete svá data migrovat na jiné NAS úložiště s větší kapacitou.

### Jaká úložná kapacita je v rámci nabídky NAS-HA dostupná?

V současné době můžete vybírat z NAS úložišť o následujících kapacitách:

- 1,2 TB (celkem 1,1 TB úložného prostoru pro Vaše data)
- 2,4 TB (celkem 2,2 TB úložného prostoru pro Vaše data)
- 3,6 TB (celkem 3,2 TB úložného prostoru pro Vaše data)
- 7,2 TB (celkem 6,4 TB úložného prostoru pro Vaše data)
- 13,2 TB (celkem 10 TB úložného prostoru pro Vaše data)
- 19,2 TB (celkem 17 TB úložného prostoru pro Vaše data)
- 26,4 TB (celkem 24 TB úložného prostoru pro Vaše data)

Všechny výše uvedené varianty se skládají z dedikovaných disků o kapacitě 1,2 TB.

### Jsou zdroje služby NAS-HA vyhrazeny exkluzivně pro mé potřeby?

Ano, pevné disky jsou vyhrazeny výhradně Vašim potřebám. Ostatní výpočetní zdroje serveru (RAM, CPU, šířka pásma) jsou však sdíleny.

**Speciální výjimka:** pokud si objednáte nejvyšší variantu služby (26,4 TB), budou veškeré výpočetní zdroje serveru vyhrazeny výhradně pro Vaše použití.

### Na jak dlouho si lze službu NAS-HA objednat?
Službu lze objednat na 1, 3, 6 nebo 12 měsíců. Služba je na konci fakturačního období automaticky obnovována. Automatickou prolongaci služby lze kdykoli deaktivovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

### Jaký je rozdíl mezi teoretickou a reálnou kapacitou nabízeného úložiště?
Jelikož musí být část disku vždy vyhrazena pro souborový systém, teoretická a reálná kapacita úložného řešení se jemně liší:

- NAS-HA 1,2 TB (reálná kapacita 1,1 TB)
- NAS-HA 2,4 TB (reálná kapacita 2,2 TB)
- NAS-HA 3,6 TB (reálná kapacita 3,2 TB)
- NAS-HA 7,2 TB (reálná kapacita 6,4 TB)
- NAS-HA 13,2 TB (reálná kapacita 10 TB)
- NAS-HA 19,2 TB (reálná kapacita 17 TB)
- NAS-HA 26,4 TB (reálná kapacita 24 TB)

Upozornění: uvedené informace jsou platné k datu poslední aktualizace této příručky, a mohou se proto lišit.

## Požívání služby

### V jakých případech používat službu NAS-HA?
V rámci infrastruktury představuje služba NAS-HA úložný prostor, k němuž lze připojit [dedikované servery](https://www.ovh.cz/dedikovane_servery/){.external} a [Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external} či [Private Cloud](https://www.ovh.cz/private-cloud/){.external} instance.


Příkladů použití existuje velké množství. Implementace služby OVH NAS-HA se však nabízí zejména v následujících případech:

- Úložiště ne-příliš často používaných dat: data, která negenerují velký traffic, musejí však být neustále přístupná (právní dokumenty, návody apod.)
- Úložiště „statických dat“ neboli dat, která nemusejí být pravidelně modifikována. Tímto způsobem lze značně odlehčit své infrastruktuře a upřednostnit tak data, která musejí být pravidelně aktualizována či vyžadují výpočetní výkon (databáze, obchodní aplikace apod.)
- Hot Backup: vysoká dostupnost úložiště NAS poskytuje jistotu, že Vaše data zůstanou přístupná za všech okolností. Díky tomu můžete v případě poškození či ztrátě přístupu k důležitým souborům vzniklý problém rychle vyřešit.

### V jakých případech upřednostnit NAS-HA před řešením Backup Storage?
Každá z těchto služeb je určena pro jiný účel.  Služba NAS-HA je navržena pro ukládání statických dat, která musejí být nepřetržitě přístupná. Řešení Backup Storage je oproti tomu určeno pro zálohování dat nevyžadujících nepřetržitý přístup.

Z technického hlediska jsou rozdíly následující:

- Data na službě NAS-HA jsou ukládána na dedikovaných discích, zatímco úložiště Backup Storage je sdílené.
- Dostupné protokoly NAS-HA (NFS a CIFS); dostupné protokoly Backup Storage (FTP, NFS a CIFS).

### Nabízí služba OVH NAS-HA synchronizační funkce (stejně jako Synology)?
Nikoli, NAS-HA lze připojit pouze jako souborový systém k operačnímu systému. Synchronizační proces nicméně může být realizován ze strany administrátora úložiště.

### Lze NAS-HA připojit k několika serverům najednou?
Ano, NAS-HA lze nastavit tak, aby interagovalo s několika službami OVH najednou.

### Lze na NAS-HA nainstalovat operační systém?
Nikoli, na NAS-HA není možné nainstalovat žádný operační systém.

### S jakými protokoly je NAS-HA kompatibilní?
NAS-HA lze připojit k Windows či Linux serveru, a to prostřednictvím protokolů CIFS (Samba) nebo NFS.

### Je NAS-HA kompatibilní s protokolem FTP?
Nikoli, služba OVH NAS-HA není kompatibilní s protokolem FTP.

### Lze přidělený úložný prostor rozdělit?
Ano, přidělený prostor lze rozdělit na libovolný počet oddílů. 

## Kompatibilita

### Je služba OVH NAS-HA kompatibilní s externími servery, hostovanými mimo infrastrukturu OVH?
Nikoli, k NAS-HA se lze připojit pouze ze sítě OVH.

### S jakými službami je NAS-HA kompatibilní?
NAS-HA je přístupné ze všech produktů OVH s operačním systémem: dedikované servery (OVH, So you Start, Kimsufi), VPS, Public Cloud a Private Cloud.

### Jak spravovat přístup k NAS-HA?
Kontrolní seznam přístupů (Access Control List neboli ACL) lze nakonfigurovat prostřednictvím Zákaznického prostoru OVH. Vše, co musíte udělat, je zadat IP adresu služby, pro níž si přejete přístup ke svému NAS-HA úložišti autorizovat.

### Je služba OVH NAS-HA kompatibilní s řešením vRack?
V současné době NAS-HA nelze integrovat v rámci privátní sítě vRack. NAS-HA lze však s řešením vRack propojit skrze veřejnou IP adresu některého ze serverů, který je k privátní síti připojený.

## Šířka pásma

### Vztahují se na přenosovou rychlost a míru dostupnosti služby nějaké garance?

- Přenos: šířka pásma služby je sdílená. Společnost OVH neposkytuje na rychlost přenosu žádnou garanci.
- Dostupnost služby: dostupnost služby je garantovaná a podléhá smluvnímu SLA. Detailní informace lze nalézt ve Zvláštních podmínkách používání služby.

## Snapshoty

### Co je to snapshot?
Snapshot je instantní snímek Vašeho disku a dat, která jsou na něm v okamžiku jeho pořízení uložena. Snapshoty lze spravovat prostřednictvím Zákaznického prostoru OVH.

Při vytvoření nového diskového oddílu je vytváření snapshotů automaticky aktivováno. Frekvence vytváření snapshotů je ve výchozí konfiguraci nastavena na „každou hodinu“.

### Jak často jsou snapshoty pořizovány?

Frekvenci vytváření snapshotů lze snadno upravit prostřednictvím Zákaznického prostoru OVH. Na výběr máte z následujících možností: 

- Každou hodinu
- Každých 6 hodin
- Každý den
- Každé 2 dny
- Každé 3 dny
- Každý týden 


Snapshoty můžete vytvářet i manuálně. Takto vytvořené snapshoty lze uchovávat po neomezenou dobu a je možné je kdykoli smazat. Všechny výše popsané funkce jsou dostupné jak prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, tak OVH [API](https://api.ovh.com/){.external}:

> [!api]
>
> @api {GET} /dedicated/nasha/{serviceName}/partition/{partitionName}/customSnapshot
> 

### Jak funguje systém pro správu snapshotů?

Automatické vytváření snapshotů lze přizpůsobit individuálním potřebám každého uživatele. Na výběr máte hned z několika frekvencí vytváření snapshotů. Nezávisle na zvolené frekvenci vždy platí, že automaticky vytvořený snapshot vždy nahrazuje ten předchozí. Snapshoty lze vytvářet i manuálně. Takovéto snapshoty označujeme jako snapshoty „na požádání“.

### Je snapshot možné vymazat?
Vymazat lze jen ty snapshoty, které byly vytvořeny „na požádání“ (viz otázku „Jak často jsou snapshoty pořizovány?“). Automaticky vytvářené snapshoty jsou mazány automaticky. Takovéto snapshoty nelze vymazat manuálně.

### Kolik místa snapshoty na úložišti NAS-HA zabírají?
Velikost, kterou snapshot na disku zabírá, se může lišit v závislosti na akcích, které byly provedeny v čase mezi vytvořením dvou snapshotů.

Od okamžiku vytvoření snapshotu jsou veškeré akce provedené na daném diskovém oddílu uloženy a navýší tak velikost příslušného souboru. Pomocí snapshotu tak můžete kdykoli obnovit původní stav diskového oddílu (do stavu, v jakém se oddíl nacházel v momentě vytvoření snapshotu). Z technického hlediska mají jakékoli úpravy či odstranění dat za následek navýšení velikosti prostoru, který soubory se snapshoty na Vašem úložišti zabírají.

### Jaké je maximální možné množství uložených snapshotů?
- Automatické snapshoty: jeden snapshoty/diskový oddíl
- Manuální snapshoty: deset snapshotů/diskový oddíl

### Kam se mé snapshoty ukládají?
Snapshoty jsou vždy uloženy na diskovém oddílu, jehož snímek daný snapshot představuje. Snapshoty naleznete ve skrytém adresáři `.zfs` → soubor `snapshots`. Soubory jsou přístupné pouze v režimu pro čtení („read only“).

### Vytváří společnost OVH také zálohy mých dat?
Ano, OVH vytváří interní zálohy na každodenní bázi.  Tyto zálohy nemohou být ze strany zákazníka deaktivovány.

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.