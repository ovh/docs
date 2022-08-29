---
title: 'VMware Storage VMotion'
excerpt: ''
slug: vmware_storage_vmotion
section: 'Funkcjonalności VMware vSphere'
legacy_guide_number: g687
order: 05
---

## 
Storage vMotion pozwala na zmianę lokalizacji przestrzeni dyskowej plików wirtualnej maszyny z zachowaniem działania wirtualnej maszyny. 

Opcja ta jest dostępna tylko na hostach L i XL z licencją enterprise plus VWware w ramach usługi Private Cloud OVH.


## 
Aby zmienić lokalizację plików wybranej wirtualnej maszyny, wystarczy kliknąć prawym przyciskiem myszy na włączoną wirtualną maszynę i wybrać menu "Change the datastore".

![](images/img_328.jpg){.thumbnail}
Następnie należy wybrać przestrzeń dyskową, na którą chcesz przenieść dane. 
Jeśli masz kilka wirtualnych dysków na tej samej maszynie, masz możliwość przeniesienia jednego dysku z wirtualnej maszyny korzystając z przycisku "Advanced":

![](images/img_326.jpg){.thumbnail}
I zmienić lokalizację dla jednego dysku:

![](images/img_325.jpg){.thumbnail}
Po wybraniu lokalizacji wirtualnych dysków zostaniesz spytany, czy chcesz zachować ten sam typ provisionningu czy go zmienić:

![](images/img_327.jpg){.thumbnail}

