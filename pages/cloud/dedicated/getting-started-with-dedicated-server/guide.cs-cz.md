---
deprecated: true
title: 'Začínáme s dedikovaným serverem'
slug: zaciname-s-dedikovanym-serverem
excerpt: 'Naučte se spravovat svůj dedikovaný server'
section: 'První kroky'
---

**Poslední aktualizace 22/08/2018**

## Cíl

Dedikovaný server je fyzický server umístěný v jednom z našich datacenter. Na rozdíl od sdíleného webhostingu, jehož technickou správu zajišťuje společnost OVH, spadá administrace dedikovaného serveru zcela do kompetencí zákazníka.

**V této příručce se seznámíte s několika užitečnými tipy pro správu Vašeho dedikovaného serveru.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás.
> 
> Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru.  Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky.
>


## Prerekvizity

* [Dedikovaný server OVH](https://www.ovh.cz/dedikovane_servery/){.external}, přístupný prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (sekce `Dedicated`{.action}, záložka `Dedikované servery`{.action}).


## Postup

### Připojení k serveru

#### Linux

Ihned po dokončení prvotní konfigurace Vašeho dedikovaného serveru obdržíte e-mail s přístupovými údaji pro uživatele root. Root přístup umožňuje připojení k serveru prostřednictvím zabezpečeného komunikačního protokolu SSH. K serveru se můžete připojit pomocí terminálu (Linux nebo MAC), v případě operačního systému Windows pak prostřednictvím softwaru třetích stran (např. PuTTy). 

Po otevření terminálu zadejte následující příkaz (generický text následující za symbolem „@“ nahraďte příslušnými informacemi, jako je IP adresa či referenční název Vašeho serveru. Referenční název serveru je vždy uvozen zkratkou **ns**): 

- Příklad připojení pomocí IP adresy

```sh
ssh root@IPv4_adresa_vaseho_serveru
```

- Příklad připojení pomocí referenčního názvu serveru

```sh
ssh root@referencni_nazev_vaseho_serveru
```

#### Windows

Ihned po dokončení prvotní konfigurace dedikovaného serveru obdržíte e-mail s přístupovými údaji pro administrátorský účet. Tyto údaje použijte pro připojení k serveru prostřednictvím nástroje *Připojení ke vzdálené ploše* (RDP). Po úspěšném připojení Vás průvodce nastavením Windows provede prvotní uživatelskou konfigurací.

### Instalace a reinstalace dedikovaného serveru

Přejděte do `základního administračního rozhraní` svého serveru v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V tabulce `Základní informace` klikněte u kolonky Operační systém na `ikonku tří teček`{.action} a vyberte možnost `Reinstalace`{.action}.

![Tlačítko reinstalace](images/reinstalling-your-server-01.png){.thumbnail}

V závislosti na tom, zda si přejete nainstalovat operační systém ze šablony OVH či ze své vlastní šablony, zaškrtněte jedno z polí `Instalace z šablony OVH`{.action} nebo `Instalace jedné z Vašich šablon`{.action} a klikněte na tlačítko `Další`{.action}.

![Volba modelů](images/reinstalling-your-server-02.png){.thumbnail}

Vyberte operační systém, který si na svůj server přejete nainstalovat, a klikněte na tlačítko `Další`{.action}.

![Volba funkcí](images/reinstalling-your-server-03.png){.thumbnail}

Pokračujte podle uvedených instrukcí. Zvolenou konfiguraci v posledním kroku potvrďte kliknutím na tlačítko `Schválit`{.action}.


> [!primary]
>
> Použití některých operačních systémů či platforem (jako např. Windows a Plesk) je podmíněno zakoupením licence. Licenci můžete zakoupit přímo od [společnosti OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} nebo od některého z oficiálních resellerů. Zakoupenou licenci je následně zapotřebí integrovat do samotného operačního systému, a to buď manuálně nebo prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. 
> 


### Zabezpečení dedikovaného serveru

Jak bylo zmíněno již v úvodní části této příručky, zajištění každodenní správy softwaru a zabezpečení samotného stroje spočívá na Vás jakožto administrátorském subjektu serveru. Níže naleznete několik tipů pro efektivní zabezpečení svého serveru:

* Udržujte svůj operační systém vždy aktuální.
* Udržujte svůj software vždy aktuální.
* Přenastavte výchozí SSH port (22) na jiný port.
* Změňte si své root heslo.
* Pro každodenní použití vytvořte nového uživatele s omezeným přístupem k administraci serveru.

Další informace naleznete v následující dokumentaci: [Zabezpečení dedikovaného serveru](https://docs.ovh.com/cz/cs/dedicated/zabezpeceni-dedikovany-server/){.external}.


### Konfigurace sítě

#### Síťový most (Network Bridging)

Vytvořením síťového mostu lze propojit dvě nebo více sítí či síťových segmentů.

Jedná se konfiguraci, která se velmi často používá ve virtualizačním kontextu. Smyslem tohoto řešení je přiřazení vlastní veřejné IP adresy jednotlivým virtuálním strojům.

Detailní informace na toto téma naleznete v následující dokumentaci: [Network Bridging (EN)](https://docs.ovh.com/gb/en/dedicated/network-bridging/){.external}.

#### IP aliasing

IP aliasing se používá za účelem asociace dvou či více IP adres s jením síťovým rozhraním. Díky tomuto řešení je server schopen navázat několik na sobě nezávislých spojení se sítí.

Detailní informace na toto téma naleznete v následující dokumentaci: [Jak nakonfigurovat IP jako alias](https://docs.ovh.com/cz/cs/dedicated/network-ipaliasing/){.external}.

#### Konfigurace IPv6

Všechny dedikované servery OVH jsou dodávány s blokem /64 IPv6 adres. Abyste tyto adresy mohli používat, je zapotřebí provést určité změny v konfiguraci sítě. Detailní informace na toto téma naleznete v následující dokumentaci: [Konfigurace IPv6 (EN)](https://docs.ovh.com/gb/en/dedicated/network-ipv6/){.external}.


### Řešení problémů

Všechny dedikované servery OVH disponují IPMI (Intelligent Platform Management Interface) konzolí, dostupnou skrze webový prohlížeč či Java applet. Tato konzole umožňuje přímé připojení k serveru, a to i v případě, že server ztratí spojení se sítí. Toto řešení nabízí ideální nástroj pro řešení problémů majících na svědomí nedostupnost Vašeho serveru.

Detailní informace na toto téma naleznete v následující dokumentaci: [Použití konzole IPMI pro dedikované servery](https://docs.ovh.com/cz/cs/dedicated/pouziti-ipmi-dedikovane-servery/){.external}.


### Režim rescue

Prvním krokem při řešení potíží s dedikovaným serverem je restart do režimu rescue. Režim rescue lze aktivovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V sekci Dedicated přejděte do `základního administračního rozhraní`{.action} svého dedikovaného serveru. V tabulce `Základní informace`{.action} klikněte na ikonku tří teček u kolonky `Boot`{.action} a vyberte možnost `Upravit`{.action}. 

![Změna bootovacího režimu](images/rescue-mode-01.png){.thumbnail}

Následně změňte výchozí netboot na `režim rescue`{.action}. Objeví se pole se seznamem dostupných režimů rescue. Pokud na svém serveru máte nainstalován operační systém Linux, vyberte `rescue64-pro`{.action}. Pokud používáte operační systém Windows, zvolte možnost `WinRescue`{.action}. Nakonec zadejte svou e-mailovou adresu a klikněte na tlačítko `Další`{.action}.

![Rescue Pro 64](images/rescue-mode-03.png){.thumbnail}

Zkontrolujte zadané údaje a klikněte na tlačítko Schválit.

![Potvrzení a restart](images/rescue-mode-02.png){.thumbnail}

Váš server bude restartován do režimu rescue. Na uvedenou e-mailovou adresu Vám budou zaslány přístupové údaje. Pro deaktivaci režimu rescue stačí výchozí netboot opětovně změnit na `bootování z pevného disku`{.action}.

Detailní informace týkající se režimu rescue naleznete v následující dokumentaci: [Aktivace a použití režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external}.


#### Hardwarová diagnostika

Hardwarové testy dostupné v rámci režimu rescue Vám mohou pomoci s odhalením případných dysfunkcí na fyzických komponentech Vašeho serveru.

Po připojení k webovému rozhraní režimu rescue můžete provádět diagnostické testy následujících komponentů:

* RAM
* Pevné disky
* RAID pole
* Procesor
* Síťová karta

#### Webové rozhraní režimu rescue

![Webové rozhraní](images/rescue-mode-04.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.