---
deprecated: true
title: 'Zásady zabezpečení webového klienta vSphere'
slug: zabezpeceni-pristupu-vsphere-web
excerpt: 'Zjistěte, jak zabezpečit přístup k webovému klientu vSphere'
section: 'První kroky'
---

**Poslední aktualizace 05/04/2018**

## Cíl

Pro zajištění optimální integrity Vaší infrastruktury je zapotřebí omezit přístup k ní. Existuje hned několik různých způsobů, jak toho docílit.

**Zjistěte, jak snadno a rychle zabezpečit přístup k webovému klientu vSphere.**

## Prerekvizity

- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

## Postup

### Omezení přístupu podle IP adresy

Jako první krok pro zabezpečení Vašeho klienta vSphere se nabízí omezení přístupu pro určité IP adresy. Za tímto účelem doporučujeme pracovat s registračním systémem, používajícím whitelisting. Tato technika funguje na principu odepírání přístupu pro všechny IP adresy. Následně je možné přidávat IP adresy, jimž si ke své IP adrese přejete přístup umožnit.

Tato akce je dostupná přímo v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Přejděte do administračního rozhraní služby Private Cloud a klikněte na záložku `Zabezpečení`{.action}. Zobrazí se tabulka obsahující přehled všech autorizovaných a zamítnutých IP adres. Pro přidání nové IP adresy klikněte na tlačítko `Přidat IP adresy`{.action} v pravé části obrazovky:

![Přidat IP adresu](images/adding_ip.png){.thumbnail}

### Vytvoření specifických uživatelů

Důrazně doporučujeme vytvářet individuální uživatelské účty pro každého uživatele, který vyžaduje přístup k Vaší infrastruktuře. Tato akce je opět dostupná přímo v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (záložka `Uživatelé`{.action}). Pro přidání nového uživatele klikněte na tlačítko `Vytvořit uživatele`{.action} v pravé části obrazovky. 

![Uživatelé](images/users.png){.thumbnail}

V rámci vytváření nového uživatelského účtu budete požádáni o nastavení přístupového hesla.

> [!primary]
>
> Pro optimální zabezpečení Vašich dat musí heslo splňovat následující kritéria:
>
> - Heslo musí obsahovat alespoň osm znaků.
> - Heslo musí obsahovat alespoň tři odlišné typy znaků.
> - Heslo nesmí být přejato ze slovníku.
> - Heslo nesmí obsahovat osobní údaje (jméno, příjmení, datum narození apod.)
> - Heslo nesmí být používáno více než jedním uživatelem.
> - Heslo musí být uloženo v zabezpečeném správci hesel.
> - Heslo musí být aktualizováno každé tři měsíce.
> - Každé nové heslo musí být unikátní.
>

Práva jednotlivých uživatelů je možné spravovat po kliknutí na ikonku ozubeného kolečka v pravé části tabulky.

![Modifikace uživatelských účtů](images/users_edit.png){.thumbnail}

### Omezení relační doby

Na konci používání služby je vhodné příslušnou relaci řádně ukončit. Za účelem omezení času spojení je možné nastavit přesný čas, po jehož uplynutí daná relace expiruje.

Tato akce je opět dostupná přímo v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Přejděte do administračního rozhraní služby Private Cloud a klikněte na záložku `Zabezpečení`{.action}. Následně klikněte na tlačítko `Upravit dobu expirace`{.action} v pravé části obrazovky. Zobrazí se dialogové okno, v jehož rámci můžete nastavit čas (v minutách), po jehož uplynutí relace expiruje.

![Expirace relace](images/expiration.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.