---
deprecated: true
title: 'Změna administrátorského hesla Windows na dedikovaném serveru'
slug: zmena-hesla-admin-windows
excerpt: 'Seznamte se s postupem pro změnu administrátorského hesla na dedikovaném serveru s operačním systémem Windows'
section: 'Diagnostika a režim rescue'
---

**Poslední aktualizace 16/08/2018**

## Cíl

Při instalaci či reinstalaci operačního systému Windows dochází k automatickému vygenerování hesla pro administrátorský přístup. Z důvodů popsaných v naší příručce [Zabezpečení dedikovaného serveru](https://docs.ovh.com/cz/cs/dedicated/zabezpeceni-dedikovany-server/){.external} důrazně doporučujeme automaticky vygenerované heslo co nejdříve změnit. Stejně tak se může stát, že své heslo jednoduše zapomenete a budete ho potřebovat obnovit.

**Tato příručka Vás provede procesem pro změnu administrátorského hesla na Vašem serveru.**


## Prerekvizity

* [Dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external} s operačním Systémem Windows
* Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.


## Postup

Restartujte svůj server do režimu rescue pomocí bootovacího prostředí WinRescue. V případě potíží s restartem do režimu rescue se obraťte na následující příručku: [Režim rescue (EN)](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}. 

Jakmile je server spuštěn v režimu rescue, přejděte do záložky `IPMI`{.action} ve svém [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (záložku naleznete v administračním rozhraní svého dedikovaného serveru).

> [!primary]
>
> Detailní informace o funkci IPMI naleznete v následující příručce: [Použití konzole IPMI pro dedikované servery](https://docs.ovh.com/cz/cs/dedicated/pouziti-ipmi-dedikovane-servery/){.external}.
>

Aktivujte IPMI pomocí Java appletu či webového prohlížeče. Po navázání IPMI relace dvakrát klikněte na ikonu nástroje NTPWdi server, umístěnou na ploše prostředí WinRescue.

![NTPWdi](images/ntpwdi-tool-01.png){.thumbnail}

Pro zobrazení seznamu dostupných uživatelských účtů klikněte na tlačítko `(Re)open`{.action}.

![NTPWdi](images/ntpwdi-tool-02.png){.thumbnail}

Označte uživatele root a klikněte na tlačítko `Change password`{.action}.

![NTPWdi](images/ntpwdi-tool-03.png){.thumbnail}

Zadejte nové heslo a klikněte na tlačítko `OK`{.action}.

![NTPWdi](images/ntpwdi-tool-04.png){.thumbnail}

Vaše heslo bylo úspěšně změněno. Zavřete nástroj, ukončete IPMI relaci a restartujte svůj server v běžném režimu.


## Kam dál

[Režim rescue (EN)](https://docs.ovh.com/gb/en/dedicated/rescue_mode/){.external}

[Použití konzole IPMI pro dedikované servery](https://docs.ovh.com/cz/cs/dedicated/pouziti-ipmi-dedikovane-servery/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>