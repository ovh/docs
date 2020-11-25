---
deprecated: true
title: Vytvoření upozornění
excerpt: ''
slug: vytvoreni_upozorneni
legacy_guide_number: g599
---


## 
Musíte použít klienta vSphere, nebo se připojit pomocí vlastního lokálního klienta, nebo použitím RDP, který Vám poskytujeme po aktivaci Vašeho Private Cloud.


## 
Upozornění si můžete vytvořit na jakýkoli prvek Vašeho Private Cloud včetně samotného Private Cloud, clusteru, VM, úložiště, sítě, atd.
Abyste to mohli provést, klikněte pravým myšítkem na Private Cloud, či cokoli jiného, co chcete sledovat a zvolte si "Alarm" (poplach) a poté "Add Alarm" (přidat poplach).

![](images/img_91.jpg){.thumbnail}
V záložce "General" (obecné) si zvolte název upozornění a poté typ samotného poplachu.

![](images/img_92.jpg){.thumbnail}
Záložka "Trigger" (spouštěč) Vám umožní upřesnit nastavení monitoringu a podmínky upozornění. Tlačítko "Add" (přidat) umožní nastavení pravidel.
Můžete monitorovat RAM hostitelů a to například uvedením maximálního limitu, nežli dojde k poplachu a Vám bude zaslán e-mail s upozorněním.

![](images/img_93.jpg){.thumbnail}
Záložka "Reporting" (report) umožňuje zjistit rozsah, který poté použijete při vytváření upozornění, ale také Vám umožní zjistit frekvenci.
Pro příklad:
Jestliže bude Váš hostitel vytížen na 95% po dobu delší jak 5 minut, pak dojde k upozornění e-mailem.

V záložce "Action" (akce) můžete definovat akce, které se mají provést v případě aktivace upozornění. Může jít například o: poslání e-mailu, zastavení VM, spuštění libovolného příkazu.

![](images/img_103.jpg){.thumbnail}

