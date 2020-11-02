---
deprecated: true
title: 'Seznámení s chybovým hlášením „Controller VM deleted“'
slug: chyba-kontroler-nsx
excerpt: 'Seznamte se s významem chybového hlášení „Controller VM deleted“'
section: NSX
---

**Poslední aktualizace 29/05/2018**

## Cíl

Při práci v rozhraní NSX můžete narazit na chybové hlášení „Controller VM deleted“.

**V této příručce Vás seznámíme s významem této chyby**.


## Prerekvizity

- Řešení NSX
- Uživatel s přístupovými právy k rozhraní NSX


## Postup

Může se stát, že v [rozhraní NSX](https://docs.ovh.com/gb/en/private-cloud/accessing-NSX-interface/) (sekce `Installation`{.action}) dojde pod názvem kontroleru k zobrazení chybového hlášení *Controller VM deleted*:

![Controller VM deleted](images/controllervmdeleted.JPG)


Důvodem zobrazení tohoto hlášení je skutečnost, že OVH kontrolery nehostuje na Vaší infrastruktuře. Místo toho jsou kontrolery hostovány na oddělené, interní infrastruktuře, díky čemuž nespotřebovávají zdroje Vaší vlastní infrastruktury.

Standardní konfigurace NSX však předpokládá umístění kontrolerů ve stejném datacentru, v němž jsou hostovány i Vaše virtuální stroje.  To je také důvodem zobrazení chybového hlášení, které však nemá absolutně žádný vliv na správné fungování Vašich strojů.

Stačí se jen ujistit, že kolonka `Status` u příslušných kontrolerů v rozhraní NSX obsahuje hlášení `Connected`. Pokud tomu tak je, Vaše stroje fungují správně.


> [!warning]
>
> Pokus o odstranění chybového hlášení prostřednictvím kliknutí na tlačítko `Resolve`{.action} bude mít za následek odstranění kontrolerů z Vaší infrastruktury, což Vám znemožní další používání NSX či sítě infrastruktury. Z toho důvodu doporučujeme tuto akci neprovádět. Správa kontrolerů NSX zůstává i nadále v rukou společnosti OVH.
> 

To zároveň vysvětluje následující upozornění na dashboardu NSX:

![Upozornění v rozhraní NSX](images/controllervmdeleted2.JPG)


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.