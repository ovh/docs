---
deprecated: true
title: Použití IP RIPE/vRack 1.5
excerpt: 'Jak umístit VM do vRack 1.5 sítě, nebo použít blok IP RIPE?'
slug: pouziti_ip_ripevrack_15
legacy_guide_number: g1441
---


## Prezentace VM sítě
OVH vytvořilo síť "VM Network" s předdefinovaným IP Poolem obsahujícím nastavení, které se vztahuje k Vašemu bloku RIPE. Tento "VM Network" také umožňuje použití vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Získejte blok IP RIPE dynamicky (příklad s Windows VM)

- Vytvoření odpovídající šablony

Pro získání IP z IP pool "VM Network" je nezbytné jít přes vytvoření šablony k úspěšnému nasazení VM. (Pozadí při vytváření šablony: []({legacy}1436))
Nejprve by mělo být vše přidáno do Vaší šablony správného síťového nastavení:

![](images/img_1985.jpg){.thumbnail}
V reakci na sysprep stroje, je nutné projít krok úpravy šablon:

![](images/img_1986.jpg){.thumbnail}

- Nasazení VM

Po dokončení předchozích kroků můžete nasadit VM z šablony.
Po nasazení by měli mít VM následující nastavení:

![](images/img_1989.jpg){.thumbnail}
Jestliže síťové nastavení souhlasí s obrázkem výše, můžete spustit VM a ověřit tím správné přiřazení IP k Vašemu VM.


## Ruční přiřazení bloku IP RIPE
Jestliže chcete ručně nastavit IP Vašich VM (nebo ho nasadit bez šablony), je dostatečné připojit se k síti "VM Network"

![](images/img_1989.jpg){.thumbnail}
Jakmile je poté VM spuštěno, můžete mu přiřadit IP adresu, kterou chcete a to přímo v operačním systému.
Informace o bloku RIPE můžete nalézt v e-mailu, který byl při zprovoznění dodán, nebo ve vlastnostech "VM Network".

![](images/img_1990.jpg){.thumbnail}


## VMM a vRack 1.5
Pod VMM se komunikace s vRack 1.5 provádí také pomocí sítě "VM Network".
Pro komunikaci s IP adresou na vRack 1.5 nastavte své VM na síťové rozhraní "VM Network":

![](images/img_1989.jpg){.thumbnail}
Poté dojde k ručnímu nastavení IP, takže Vašem VM budou moci komunikovat s ostatními částmi vRack 1.5.

