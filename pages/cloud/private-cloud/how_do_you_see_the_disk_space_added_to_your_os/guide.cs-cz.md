---
deprecated: true
title: Jak přidat diskový prostor na svém OS?
excerpt: ''
slug: jak_pridat_diskovy_prostor_na_svem_os
legacy_guide_number: g615
---


## 
Před tímto typem operace doporučujeme provést zálohu dat či si vytvořit klon Vašeho virtuálního stroje.


## Pro Linux
Pro Linuxové distribuce musíte použít nástroj pro přerozdělení diskových oddílů. Je zde hned několik možností jak to udělat:


- [7tools Partition Manager](http://www.7tools.com/pm/index.htm)
- [DFSee](http://www.dfsee.com/dfsee/index.php)
- [EASEUS Partition Manager](http://www.partition-tool.com)
- [GParted LiveCD](http://gparted.sourceforge.net/livecd.php)
- [Partition Logic](http://partitionlogic.org.uk)
- [Paragon Partition Manager](http://www.partition-manager.com)
- [System Rescue CD](http://www.sysresccd.org/Main_Page)


Pro tuto příručku jsme použili GParted, který můžete nalézt mezi šablonami které poskytujeme v .iso formátu.

Máte 3 možnosti jak nabootovat GParted Live CD.

- Při startu VM, když se ve VMware zobrazí panel načítání stiskněte "Esc" pro změnu bootovací sekvence a zvolte si "CD-Rom".
- Abyste stihli stisknout "Esc", můžete změnit čas zobrazení načítání VMware. Zvolte "Options" >> "Boot Option" a poté navyšte hodnotu u proměnné "Power On Boot Delay" v nastavení svého VM.
- Dokud jste v "Properities" v záložce "Options" v sekci "Boot Option", zkontrolujte "Force BIOS setup". Jakmile ho schválíte, proveďte reboot svého VM. Po aktualizaci disku jděte do "CD properities" u svého VM a zvolte si .iso Geparted soubor. Také zde musíte povolit možnost "Connect at power on".


Když se nacházíte v sekci "Boot" v BIOSu, používáte šipky k posunu k CD-ROM readeru a tlačítko "+" pro zvíraznění disku. Díky tomu bude VM používat při bootování GParted CD:

![](images/img_126.jpg){.thumbnail}
Nyní zvolte "Exit" a potvrďte "Exit Saving Changes".

![](images/img_127.jpg){.thumbnail}
Nyní jste na bootovací stránce GParted. Potvrďte možnost GParted Live:

![](images/img_128.jpg){.thumbnail}
Nyní si zvolte klávesnici a jazyk, který používáte:

![](images/img_129.jpg){.thumbnail}
Nyní se nacházíte v grafickém rozhraní GParted

![](images/img_130.jpg){.thumbnail}
Nejprve musíte navýšit SWAP. Klikněte na něj a zvolte "resize" (změnit velikost). Poté zadejte "0" v "Free space following (MiB)". Dále zvolte diskový oddíl, který chcete navýšit a klikněte na "resize". Pro navýšení použijte šipky vedle prázdného místa a nastavte si oddíl na požadovanou velikost. Nyní musíte potvrdit změny kliknutím na "Apply". Všechny úkoly jsou nyní aktualizovány.
Nyní můžete schválit konec operací a provést reboot svého VM dvojklikem na "Exit".
Váš VM bude restartován a OS bude používat veškerý nově nastavený diskový prostor.


## Pro Windows
Musíte použít "Windows Disk Manager" (Správce disku Windows). Jděte do "Server Manager" >> "Storage" >> "Disk Management". Na našem disku 0 je nyní na jednotce "C:" 20 GB dostupného prostoru. Klikněte pravým tlačítkem myši na jednotku "C:" a zvolte možnost "Extend Volume ...".
Nyní si zvolte prostor, který chcete přidat. V našem případě alokujeme veškerý dostupný prostor. Poté potvrďte operaci. Veškerý dostupný prostor je nyní přiřazen k jednotce C:

## POZOR!
OVH nenese žádnou zodpovědnost za možné poškození integrity Vašich dat při používání této funkce.

