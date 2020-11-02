---
deprecated: true
title: Začínáme s VPS
excerpt: Seznamte se se základy používání VPS
slug: zaciname-s-vps
section: První kroky
order: 1
---

**Naposledy aktualizováno 18/04/2018**
 
## Cíl

Virtuální privátní server (VPS) je server běžící na virtualizovaném hardwaru. Na rozdíl od sdíleného webhostingu, jehož technickou správu zajišťuje společnost OVH, spadá administrace VPS zcela do kompetencí zákazníka.

**Tato příručka nabízí několik užitečných rad, díky nimž si ve čtyřech krocích osvojíte základní principy ovládání a správy Vašeho VPS.**


> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás. Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou Vašeho serveru. Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového aministrátora. Další informace naleznete v poslední sekci této příručky.
> 


## Prerekvizity

- Pronájem VPS OVH: <https://www.ovh.cz/vps/>.
- Ověřovací e-mail s přístupovými údaji k serveru (obdržíte po úspěšné instalaci VPS).


## V praxi

Po přihlášení do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} přejděte do sekce `Cloud`{.action} a v levé části obrazovky vyberte možnost `Servery`{.action}. Následně se zobrazí základní rozhraní pro správu Vašeho VPS: obecné informace uprostřed, široké spektrum akcí v podobě tlačítek umístěných v pravé části obrazovky s dalšími možnostmi v dolní části rozhraní.

### Připojení k VPS

Při instalaci (nebo reinstalaci) VPS obdržíte e-mail s heslem pro root přístup, což je připojení využívající protokol SSH (zabezpečený komunikační protokol). Přístup probíhá prostřednictvím terminálu (Linux nebo MAC), nebo prostřednictvím softwaru třetích stran ve Windows (např. Putty).

Pro připojení ke svému VPS zadejte následující příkaz:

```sh
ssh root@IPv4_vašeho_VPS
```

Nebo:

```sh
ssh root@Reference_vašeho_VPS
```

Reference Vašeho VPS má vždy následující formát: vpsXXXX.ovh.net (kde XXXX je řada čísel).


### Instalace nebo reinstalace VPS

Reinstalace VPS se provádí přímo prostřednictvím Zákaznického prostoru OVH. Stačí kliknout na tlačítko `Reinstalovat VPS`{.action}

![Reinstalace VPS](images/reinstall_manager.png){.thumbnail}

Po kliknutí na tlačítko se otevře reinstalační nabídka. Vybírat budete z následujících možností:

- systémová distribuce
- jazyk
- SSH klíč (pokud jste si již ve svém Zákaznickém prostoru OVH SSH klíč vytvořili)

![Reinstalační nabídka](images/reinstall_menu.png){.thumbnail}

> [!primary]
>
> Pro instalaci některých distribucí (jako např. Plesk či Windows) musíte nejprve disponovat oficiální licencí, kterou lze zakoupit přímo u OVH nebo jiného certifikovaného prodejce. Svou licenci vložte manuálně nebo prostřednictvím Zákaznického prostoru OVH. Správu svých licencí můžete provádět v sekci `Dedicated`{.action}, záložka `Licence`{.action}.
Zde je také možné licence objednávat (tlačítko `Objednat`{.action} v pravé části obrazovky) nebo přidávat vlastní licence Windows SPLA nebo SPLA SQL Server (tlačítko `Přidat licenci SPLA`{.action} v pravé části obrazovky).
> 

Jakmile potvrdíte svůj požadavek, budete moci v základním rozhraní pro správu svého VPS sledovat celkový průběh reinstalačního procesu, který může trvat až 30 minut.


### Zabezpečení VPS

Jak již bylo řečeno v první části této příručky, jakožto pronajímatel VPS jste zároveň i jeho administrátorem. Z toho důvodu nesete plnou odpovědnost za uložená data a jejich bezpečnost.

Pokud si nevíte rady se základními postupy pro zabezpečení svého VPS, podívejte se do následující příručky: [Zabezpečení VPS](https://docs.ovh.com/cz/cs/vps/tipy-pro-zabezpeceni-vps/){.external}.


### Zabezpečení domény s certifikátem SSL

Jakmile úspěšně naistalujete a zabezpečíte své VPS, nejspíše budete chtít zabezpečit i svou doménu a webové stránky. Za tímto účelem je nutné nainstalovat certifikát SSL, který Vaše stránky zpřístupní v zabezpečeném komunikačním protokolu *HTTPS* (namísto pouhého *HTTP*).

Instalaci certifikátu SSL lze provést manuálně přímo v prostředí Vašeho VPS. Viz oficiální dokumentace k Vámi používáné systémové distribuci.

OVH Vám zároveň nabízí možnost automatické iplementace SSL certifikátu, a to prostřednictvím služby [SSL Gateway](https://www.ovh.cz/ssl-gateway/){.external}. V případě zájmu se neváhejte podívat na [oficiální produktové stránky](https://www.ovh.cz/ssl-gateway/){.external} nebo příslušnou [dokumentaci](https://docs.ovh.com/cz/cs/ssl-gateway/objednani-sluzby-ssl-gateway/){.external}.

## Kam dál

[Úvod do SSH](https://docs.ovh.com/cz/cs/dedicated/ssh-uvod/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.
