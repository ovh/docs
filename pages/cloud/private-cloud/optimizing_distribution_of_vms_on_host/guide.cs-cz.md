---
deprecated: true
title: Optimalizace distribuce VM na hostitele
excerpt: Jak nejlépe alokovat VM na hostitele pro optimalizaci zdrojů?
slug: optimalizace_distribuce_vm_na_hostitele
legacy_guide_number: g1442
---


## Nastavení poskytované OVH
PRO zahrnuje Dynamic Optimization pro automatickou distribuci zátěže clusteru mezi různé hostitele. 
OVH nabízí implicitní nastavení PRO:

![](images/img_1991.jpg){.thumbnail}
Každých 20 minut bude spuštěno Dynamic Optimization a automaticky zmigruje VM z jednoho hostitele na jiný, aby se dosáhlo nastavení na obrázku výše.


## Vyloučení VM z PRO
Jestliže si nepřejete aby bylo VM automaticky migrováno pomocí PRO, můžete ho vyloučit zaškrtnutím následujícího políčka v nastavení VM:

![](images/img_1992.jpg){.thumbnail}


## Anti-affinity pravidla
Ve VMM můžete nastavit každé VM a můžete specifikovat, zda si přejete hostovat dané VM na stejném hostitelském serveru.

Pro toto jděte do VM pravidel a poté do "Hardware Configuration" > "Availability" > "Availability Sets":

![](images/img_1993.jpg){.thumbnail}
Vytvoření pravidla a jeho přidání do "Assigned Properties":

![](images/img_1994.jpg){.thumbnail}
Proveďte to samé na ostatních VM, které chcete mít oddělené.

