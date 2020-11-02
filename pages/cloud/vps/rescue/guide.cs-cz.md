---
deprecated: true
title: VPS - restart v režimu rescue
slug: rescue
excerpt: Zjistěte jak restartovat své VPS v režimu rescue
section: Diagnostika a režim rescue
---

**Poslední aktualizace 18/04/2018**

## Cíl

Režim rescue umožňuje spuštění serveru na nezávislé konfiguraci OVH. Díky tomu může být Váš disk připojen jakožto nezávislý diskový oddíl.

V rámci režimu rescue můžete provádět nejrůznější testy a změny v konfiguraci tehdy, kdy Vám to nejvíce vyhovuje (tzn. především tehdy, kdy tyto zásahy mají co možná nejmenší dopad na chod Vašeho serveru). Rescue režim Vám zároveň pomůže vyřešit jakýkoli problém, který Vám znemožňuje přístup na server běžným způsobem.

> [!warning]
>
> Všechny služby běžící na serveru budou při restartu do režimu rescue přerušeny. Stroj bude nabootován do ochranného prostředí OVH.
> 

Zjistěte jak restartovat své VPS v režimu rescue

## Prerekvizity

Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Postup

Přejděte do Zákaznického prostoru OVH (sekce `Cloud`{.action}) a v panelu po levé straně vyberte své VPS:

![Administrační rozhraní VPS v Zákaznickém prostoru OVH](images/vps_rescue1.png){.thumbnail}

V hlavním administračním rozhraní svého VPS klikněte na tlačítko `Reboot do režimu rescue`{.action} a potvrďte restart serveru.

![Potvrzení režimu rescue](images/vps_rescue2.png){.thumbnail}

O průběhu celého procesu Vás bude informovat načítací lišta (restartování serveru v režimu rescue může trvat až několik minut):

![Postup režimu rescue](images/rescue_task.png){.thumbnail}

> [!primary]
>
> Po dokončení předcházejícího kroku od nás obdržíte e-mail s SSH přístupovými údaji pro režim rescue. Tento e-mail je Vám k dispozici i v Zákaznickém prostoru OVH (`Můj účet`{.action} > `Přijaté e-maily`{.action}).
> 

Nyní se můžete prostřednictvím SSH připojit ke svému VPS, nabootovanému v režimu rescue. Jakmile provedete potřebné úpravy, jednoduše nabootujte své VPS z pevného disku kliknutím na tlačítko `Reboot mého VPS`{.action} v Zákaznickém prostoru OVH.


## Kam dál

[Úvod do SSH](https://docs.ovh.com/cz/cs/dedicated/ssh-uvod/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.