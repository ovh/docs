---
deprecated: true
title: Jak používat vScope
excerpt: ''
slug: jak_pouzivat_vscope
legacy_guide_number: g718
---


## Přístup
Pro přístup do vScope můžete použít následující URL (změňte podle názvu Vašeho Dedicated Cloud):

https://pcc-178-32-194-8.ovh.com/vScope (berte v potaz velké písmeno S)

![](images/img_368.jpg){.thumbnail}
Budete požádáni o zadání uživatelského jména a hesla. Zde použijte administrační přístupové údaje, které používáte pro přístup do vSphere Client.
Jakmile jste přihlášeni v rozhraní, zobrazí se Vám ihned přehled Vašich datacenter:

![](images/img_364.jpg){.thumbnail}


## Filer
Na levé straně naleznete seznam všeho, co máte uloženo a také statistiku využívání.


## Hosts
Na této obrazovce naleznete seznam hostitelů s počtem použitých jader, VM, CPU a RAM a také přenos dat na karty hostitelů (TX = upload a RX = download).
Jestliže dvakrát kliknete na hostitele, zobrazí se Vám nová tabulka s grafy využití zdrojů (RAM, CPU, síť, atd.):

![](images/img_366.jpg){.thumbnail}
Také si můžete grafy přiblížit a zobrazit si konkrétní období. Stačí kliknout na graf a zvolit si požadovanou oblast grafu k zobrazení:

![](images/img_367.jpg){.thumbnail}
Můžete si také zvolit období, ze kterého chcete grafy zobrazit (den, týden, měsíc, rok) a to nahoře v rolovacím menu.


## Virtual machine
V této sekci naleznete statistiky Vašich virtuálních strojů, které obsahují:

- název VM
- úložiště, na kterém je VMDK uloženo, použito a alokovaný prostor na úložišti
- počet snapshotů virtuálního stroje (vytvořených přes snapshot manager)
- na kterém hostiteli je VM uložen
- stav VM (zapnutý, vypnutý, pozastavený)
- spotřebu CPU a RAM

Také zde naleznete informace o discích (stav šířky pásma, I/O, latenci)

A stejně jako s hostiteli si i zde můžete zobrazit grafy virtuálních strojů a další grafy po dvojitém kliknutí na VM.

