---
deprecated: true
title: 'Kaip pripažįstama disko vieta, pridėta prie jūsų OS'
excerpt: ''
slug: kaip_pripazistama_disko_vieta_prideta_prie_jusu_os
legacy_guide_number: g615
---


## 
Norėdami pereiti prie šios operacijos, atlikite savo duomenų rezervinę kopiją arba klonuokite virtualią mašiną.


## Linux
Linux operacinėms sistemoms. Jūs turėtumėte naudoti skirsnių kūrimo programą. Šiam tikslui galite pasitelkti daugybę metodų:


- [7tools Partition Manager](http://www.7tools.com/pm/index.htm)
- [DFSee](http://www.dfsee.com/dfsee/index.php)
- [EASEUS Partition Manager](http://www.partition-tool.com)
- [GParted LiveCD](http://gparted.sourceforge.net/livecd.php)
- [Partition Logic](http://partitionlogic.org.uk)
- [Paragon Partition Manager](http://www.partition-manager.com)
- [System Rescue CD](http://www.sysresccd.org/Main_Page)


Šiam gidui pasirinkome GParted, prieinamą .iso formatu, jums siūlomuose šablonuose.

Dabar įkrovimas (boot) gali būti atliktas iš "Live CD GPArted" 3 būdais:

- Perkraunant VM, kai matysite VMware eigos juostą, paspauskite "Esc", kad pereitumėte prie "Boot order" ir pasirinkite "CD-Rom".
- Kad ši operacija būtų sėkminga, galite pakeisti VMware juostos rodymo laiką, skiltyje "Nustatymai" pasirinkdami "Boot Option", o vėliau padidinti vertę "Power On Boot Delay" savo VM nustatymuose. 
- Savybių langelyje "Settings", toliau "Boot Options", pažymėkite "Force BIOS setup". Patvirtinę perkraukite savo VM. Kai diskas bus atnaujintas, eikite į VM CD savybes ir pasirinkite failų saugyklą .iso GParted. 

Taip pat pažymėkite parinktį "Connect at power on".
BIOS skiltyje "Boot", naudodami klaviatūros rodyklių klavišus, eikite į CD-ROM skaitytuvą ir spauskite "+" klavišą, kad jis būtų virš standžiojo disko (Hard Drive). Taip jūsų VM bus įkrauta naudojant GParted CD:

![](images/img_126.jpg){.thumbnail}
Dabar eikite į "Exit". Pasirinkite "Exit Saving Changes" ir patvirtinkite:

![](images/img_127.jpg){.thumbnail}
Dabar esate GParted "boot" puslapyje. Patvirtinkite parinktį "GParted Live":

![](images/img_128.jpg){.thumbnail}
Pasirinkite klaviatūros išdėstymą ir kalbą:

![](images/img_129.jpg){.thumbnail}
Dabar esate GParted grafinėje sąsajoje:

![](images/img_130.jpg){.thumbnail}
Visų pirma turėtumėte perkelti savo swap. Spragtelėkite ir pasirinkite "resize". Vėliau skiltyje "Free space following (MiB)" nurodykite "0". Dabar pasirinkite skirsnį, kurį pageidaujate padidinti, ir spragtelėkite "resize". Padidinkite skirsnį naudodami šalia neužimtos vietos esančią rodyklę, iki pageidaujamo dydžio.
Iki šiol jūsų diske nieko nebuvo pakeista. Dabar turėtumėte pritaikyti šiuos pakeitimus spragtelėdami "Apply". Visos prieš tai apibrėžtos užduotys bus įvykdytos.
Dabar galite patvirtinti operacijų baigtį ir perkrauti savo VM, du kartus spragtelėdami "Exit".
Jūsų VM bus perkrauta. Jūsų OS naudos visą naują disko vietą, kurią jai priskyrėte.


## Windows
Galite naudoti Windows diskų tvarkyklę. Eikite į "Server Manager", vėliau "Storage" ir "Disk Management". Diske 0 yra tomas C: su 20 GB vietos. Dešiniuoju pelės klavišu spragtelėkite C: tomą ir pasirinkite "Extend Volume...".
Dabar nurodykite vietą, kurią pageidaujate pridėti. Šiuo atveju, suteikiame visą prieinamą vietą. Vėliau patvirtinkite operaciją. Jūsų C: diskui bus suteikta visa disko vieta.

## DĖMESIO!!!
OVH neprisiima atsakomybės dėl galimos grėsmės jūsų duomenų saugumui, kai jie naudojama bent viena iš minėtųjų programų.

