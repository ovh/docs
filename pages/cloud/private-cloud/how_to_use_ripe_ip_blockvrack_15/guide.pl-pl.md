---
title: Korzystanie z IP Ripe / vRack1.5
excerpt: Jak umieścić VM w sieci vRack1.5 lub korzystać z Ip z bloku Ripe?
slug: korzystanie_z_ip_ripe_vrack15
legacy_guide_number: g1441
---


## Prezentacja sieci VM Network
OVH utworzyło sieć "VM Network" wstępnie zdefiniowaną z IpPool zawierającym konfigurację związaną z Twoim blokiem Ripe. 
"VM Network" pozwala na korzystanie z vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Dynamiczne otrzymywanie IP z bloku Ripe (przykład z VM Windows)

- Tworzenie szablonu

Aby uzyskać IP z IpPool "VM Network", należy przejść przez utworzenie szablonu, aby poprawnie wdrożyć wirtualną maszynę. Tworzenie szablonu: []({legacy}1436)
Najpierw należy dodać do szablonu odpowiednią konfigurację sieci:

![](images/img_1985.jpg){.thumbnail}
Aby odpowiedzieć na sysprep maszyny, należy przejść przez etap personalizacji szablonu:

![](images/img_1986.jpg){.thumbnail}

- Wdrażanie wirtualnej maszyny

Po wykonaniu poprzednich etapów, możesz wdrożyć wirtualna maszynę z szablonu. 
Wirtualna maszyna powinna mieć następującą konfigurację:

![](images/img_1989.jpg){.thumbnail}
Jeśli parametru sieci odpowiadają poprzedniemu obrazkowi, możesz uruchomić VM i w ten sposób sprawdzić prawidłowe przypisanie IP do VM.


## Ręczne Przypisanie IP z bloku Ripe
Jeśli chcesz ręcznie skonfigurować IP wirtualnej maszyny (wdrożonej lub nie z szablonu), wystarczy je podłączyć do sieci "VM Network".

![](images/img_1989.jpg){.thumbnail}
Po uruchomieniu wirtualnej maszyny będziesz mógł przypisać wybrane IP bezpośrednio w systemie operacyjnym. 
Informacje na temat bloku Ripe znajdują się w e-mailu instalacyjnym, w panelu manager i we właściwościach VM Network":

![](images/img_1990.jpg){.thumbnail}


## VMM i vRack1.5
W przypadku VMM połączenie z vRack 1.5 odbywa się również poprzez sieć "VM Network".
Aby łączyć się z IP zlokalizowanym w sieci vRack 1.5, należy skonfigurować wirtualną maszynę tak, aby była ona podłączona do sieci "VM Network":

![](images/img_1989.jpg){.thumbnail}
Następnie wystarczy ręcznie skonfigurować parametry IP, aby wirtualna maszyna mogła się komunikować z innymi elementami zlokalizowanymi w ramach vRack 1.5.

