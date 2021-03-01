---
deprecated: true
title: 4. část - přidání uživatele k virtuální ploše
slug: pridani-uzivatele-plocha
excerpt: Zjistěte, jak přidat nového uživatele, a jak mu udělit přístup k virtuální ploše
section: Nastavení
order: 4
---

**Poslední aktualizace 23/03/2018**

## Cíl

Jakmile je Váš [pool úspěšně vytvořen](https://docs.ovh.com/cz/cs/cloud-desktop-infrastructure/howto-create-pool/){.external}, můžete začít s přidáváním uživatelů a udělováním přístupů k virtuálním plochám.

**Zjistěte, jak přidat nového uživatele, a jak mu udělit přístup k virtuální ploše.**


## Prerekvizity

- Vytvoření uživatelé v Active Directory (pokud byl vytvořen [Trust Relationship - EN](https://docs.ovh.com/gb/en/cloud-desktop-infrastructure/approval-ad/){.external}), nebo v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Přístup do rozhraní VMware Horizon 7.1.



## Postup

### Správa uživatelů

Platforma je dodávána s 10 generickými uživateli (každý uživatel nese název vdiXX, kde XX představuje pořadové číslo). Přihlašovací údaje jednotlivých uživatelů jsou zasílány v instalačním e-mailu.

Postup pro vytvoření nových uživatelů je popsán v následující příručce: [Vytvoření uživatelů](https://docs.ovh.com/fr/cloud-desktop-infrastructure/create-users/){.ref}


## Udělení přístupu k virtuální ploše

Přístup k virtuálním plochám je nutné udělit prostřednictvím rozhraní VMware Horizon 7.1. V záložce `Entitlements`{.action} příslušného poolu můžete přidávat jednotlivé uživatele a poskytovat jim přístup ke spuštěným virtuálním plochám.

- Klikněte na tlačítko `Add Entitlement`{.action}. Otevře se kontextové okno.

![Add Entitlement](images/1200.png){.thumbnail}

- Vyhledejte a vyberte uživatele, jemuž/jimž si přejete udělit přístup. Výběr následně potvrďte.

![Výběr uživatelů](images/1201.png){.thumbnail}


Uživatel přidaný k poolu se může připojit a používat virtuální plochy, které jsou zde spuštěny. Pokračujte dále na [5. část - připojení k virtuálním plochám](https://docs.ovh.com/fr/cloud-desktop-infrastructure/connexion-desk/){.external}.


## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.