---
deprecated: true
title: Instalace VMware tools
excerpt: ''
slug: instalace_vmware_tools
legacy_guide_number: g621
---


## 
Musíte použít klienta vSphere. Buďto prostřednictvím Vašeho vlastního klienta, nebo přes přednastavené RDP připojení, které jsme Vám zaslali při aktivaci PCC.


## 
Připojte VMware tools disk ze své VM konzole volbou "Install/Upgrade VMware tools" (instalovat/aktualizovat VMware tools):

![](images/img_142.jpg){.thumbnail}
Poté je potřeba připojit aktivovaný svazek pomocí následujícího příkazu:


```
# mount /dev/cdrom /mnt
```


Rozbalte archiv Tools. Zde to děláme v adresáři /home:


```
#cd /home (příklad)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Jakmile je instalace dokončena, tool disk bude automaticky odpojen ze systému.


## 
Jakmile připojíte svazek schválením možnosti "Install/Upgrade VMware tools" (instalovat/aktualizovat VMware tools), naleznete disk na ploše Vašeho VM. Abyste spustili instalaci, stačí na něj dvakrát kliknout:

![](images/img_143.jpg){.thumbnail}
Průvodce instalací se Vás dotáže na schválení licence a volbu typu instalace (doporučujeme zvolit plnou instalaci). 
Po dokončení instalace je potřeba restartovat VM, aby byly změny aktivní.

