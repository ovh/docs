---
deprecated: true
title: FAQ Dedicated Cloud
excerpt: ''
slug: faq_dedicated_cloud
legacy_guide_number: g598
---


## Při nastavování HA dostávám chybu "HA Error : Unable to perform configuration"
Jestliže tato chyba přetrvává, musíte manuálně zrušit a poté opět nastavit HA cluster. Abyste toto učinili, jděte do "properties" (vlastností) Vašeho clusteru, odškrtněte HA a potvrďte změnu. Po dokončení se vraťte zpět a opět povolte HA. Po dokončení této akce bude tato možnost na Vašem HA clusteru opět aktivní.


## Co je účelem možnosti "Rescan Datastore" (přescanovat úložiště) na clusteru:
Tato možnost se používá pro iSCSI úložiště pro aktualizaci přístupových cest.
Tato funkce nemá u OVH využití, protože se dá použít pouze pro iSCSI úložiště, která OVH nenabízí.


## I po odkliknutí alarmu je stále upozornění (červený trojúhelník) zobrazen na hostiteli
Musíte potvrdit toto upozornění, v záložce upozornění. Zde klikněte na zbývající červená upozornění.


## Mám VM ve stavu "Invalid".
V tomto případě vymažte inventář VM kliknutím pravým myšítkem na VM.
POZOR: zvolte "delete the inventory" (vymazat inventář) a nikoli "delete the disk" (vymazat disk). Ve druhém případě byste totiž ztratili data na VM. 
Poté jednoduše přidejte opět VM do svého inventáře.


## Při přihlášení do konzole VM se zobrazí černá obrazovka.
Jde o OS na VM, který je v úsporném režimu. Pro reaktivaci stačí stisknout libovolné tlačítko.

