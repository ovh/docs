---
deprecated: true
title: IP Ripe / vRack1.5 naujoimas
excerpt: Kaip įtraukti VM į vRack1.5 arba naudoti vieną IP iš RIPE bloko?
slug: ip_ripe_vrack15_naujoimas
legacy_guide_number: g1441
---


## VM Network tinklo pristatymas
OVH sukūrė tinklą "VM Network" su sukonfigūruotų IP banku, susietu su jūsų RIPE bloku.
Šis "VM Network" taip pat leidžia naudoti vRack 1.5.

![](images/img_1984.jpg){.thumbnail}


## Dinaminis RIPE bloko IP gavimas (žiūrėkite pavyzdį su Windows VM)

- Atitinkamo šablono kūrimas

Norint gauti IP iš "VM Network" IPpool, būtina sukurti šabloną, tam kad būtų sukurta VM. (Kaip kurti šablonus paaiškinta šiame gide:[]({legacy}1436))
Pirmiausią jį reikia įtraukti į jūsų šablono tinkamą tinklo konfigūraciją:

![](images/img_1985.jpg){.thumbnail}
Siekiant, kad VM atitiktų sistemos reikalavimus, būtina atlikti šablono tinkinimo operaciją:

![](images/img_1986.jpg){.thumbnail}

- VM diegimas

Atlikus ankstesnius žingsnius jūs galite sukurti VM iš šablono. Įdiegus VM turi turėti šią konfigūraciją:

![](images/img_1989.jpg){.thumbnail}
Jeigu tinklo parametrai atitinka ankstesnę VM, galite paleisti VM ir patikrinti, ar tinkamai buvo priskirtas IP adresas.


## Rankinis IP bloko diegimas
Jeigu jūs norite rankiniu būdu įdiegti VM (pavyzdžiui, paleistą iš šablono), pakanka ją prijungti prie "VM Network" tinklo

![](images/img_1989.jpg){.thumbnail}
Tuomet, paleidus VM, galite priskirti jai norimą IP pačioje operacinėje sistemoje.
Duomenis apie RIPE bloką rasite el. laiške apie paslaugos suteikimą, tvarkytuve arba "VM Network" savybėse:

![](images/img_1990.jpg){.thumbnail}


## VMM ir vRack1.5
Atliekama VMM, su vRack 1.5 tai taip pat atliekama "VM Network".
Norint komunikuoti su IP, esančiu vRack 1.5, reikia sukonfigūruoti VM tinklo sąsaja "VM network" tinkle:

![](images/img_1989.jpg){.thumbnail}
Tuomet pakanka rankiniu būdu nustatyti IP parametrus, tuomet jūsų VM galės komunikuoti su kitais vRack 1.5 elementais.

