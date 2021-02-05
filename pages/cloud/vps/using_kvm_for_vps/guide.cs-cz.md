---
deprecated: true
title: Použití konzole KVM na virtuálním privátním serveru
excerpt: Jak používat konzoli KVM na VPS
slug: pouziti_kvm_na_vps
section: První kroky
---

**Poslední aktualizace 18/04/2018**

## Cíl

Konzole KVM umožňuje přímé připojení k Vašemu VPS, bez nutnosti použití softwaru třetích stran (terminál, Putty, atd.). Konzole KVM je přístupná prostřednictvím Vašeho Zákaznického prostoru OVH, nebo API OVH.  

**V této příručce Vás provedeme dvěma způsoby použití KVM**

## Prerekvizity

- Přihlášení do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).

## Postup

### Připojení ke konzoli KVM prostřednictvím Zákaznického prostoru OVH

Po přihlášení do Zákaznického prostoru OVH stačí přejít do základního rozhraní pro správu VPS. V pravé části rozhraní naleznete tlačítko `KVM`{.action}:

![Klikněte na tlačítko KVM](images/activating_kvm_manager.png){.thumbnail}

 
Následně se otevře nové okno, v jehož rámci se naváže spojení s VPS (tento proces může trvat několik vteřin). Po navázání spojení již nezbývá než se přihlásit:

![Připojení ke KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> Rozložení klávesnice se může lišit od Vašeho aktuálního nastavení. Doporučujeme ověřit, zda není namísto rozložení QWERTY nastaveno například rozložení AZERTY.
>

### Připojení ke konzoli KVM prostřednictvím API

Někdy se mohou při pokusu o přihlášení ke konzoli KVM prostřednictvím Zákaznického prostoru OVH vyskytnout potíže. V takových případech lze připojení navázat prostřednictvím API. Připojte se k [API OVH](https://api.ovh.com/){.external}.

#### VPS 2014

U VPS 2014 se může vyskytnout chyba 1006, kterou lze odstranit použitím API. Použijte následující API:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

I přes kladnou odezvu API je možné, že bude trvat jednu či dvě minuty, než se spojení naváže, tedy než se skutečně otevře příslušný port.

#### VPS 2016

V případě potíží s KVM je k dispozici doporučené rozhraní API pro přístup ke konzoli KVM:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.