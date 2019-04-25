---
title: 'Instalacja VMware Tools'
excerpt: ''
slug: instalacja_vmware_tools
section: 'Zarządzanie wirtualnymi maszynami'
legacy_guide_number: g621
---

## 
Należy zalogować się do vSphere (poprzez program lokalny lub za pomocą połączenia RDP dostarczonego podczas aktywacji usługi Private Cloud).


## 
Zamontuj dysk VMware tools z poziomu konsoli twojej VM zatwierdzając opcję "Install/Upgrade VMware Tools":

![](images/img_142.jpg){.thumbnail}
Następnie zamontuj wolumin uruchomiony poleceniem:


```
# mount /dev/cdrom /mnt
```


Rozpakuj archiwum z VMware Tools. W naszym przykładzie rozpakujemy do /home:


```
#cd /home (par exemple)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Po zakończeniu instalacji dysk z VMware Tools zostanie automatycznie odmontowany z systemu.


## 
Po zatwierdzeniu opcji "Install/Upgrade VMware tools" dysk będzie dostępny na Pulpicie w wirtualnej maszyny. Kliknij dwa razy na dysk, aby rozpocząć instalację:

![](images/img_143.jpg){.thumbnail}
Asystent instalacji poprosi Cię o zaakceptowanie licencji i wybranie typu instalacji (zalecamy pełną instalację). Po zakończeniu instalacji będziesz mógł wykonać restart maszyny, w celu zastosowania zmian.

