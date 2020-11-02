---
deprecated: true
title: Změna nastavení HW u Vašeho virtuálního serveru
excerpt: ''
slug: zmena_nastaveni_hw_u_vaseho_virtualniho_serveru
legacy_guide_number: g587
---


## 
V této příručce se podíváme na nastavení HW, která můžete změnit na Vašem virtuálním serveru (prostřednictvím funkce "edit settings" (upravit nastavení) ve VMware).


## 
Veškeré změny popisované níže musí být prováděny z Vašeho Private Cloud za použití vSphere, kde kliknete pravým myšítkem na název virtuálního serveru a poté vyberete "Edit settings" (upravit nastavení)


## Paměť (RAM)
Alokování RAM může být změněno kdykoli, když je server vypnut (VMware Hot Add tuto funkci poskytuje na serveru na hostiteli).

Abyste to provedli, stačí posunout kurzorem na požadovanou hodnotu paměti:

![](images/img_53.jpg){.thumbnail}
Pro instrukce vztahující se k Hot Add se podívejte [sem](#CONFIG_AND_ADVANCED_OPTIONS)


## Procesor (CPU)
Můžete si změnit počet CPU přiřazených k virtuálnímu stroji v době, kdy je server vypnut (v případě, že hostitel využívá funkci VMware Hot Add, nemusíte kvůli této akci server vypínat)

![](images/img_54.jpg){.thumbnail}
Pro instrukce vztahující se k Hot Add se podívejte [sem](#CONFIG_AND_ADVANCED_OPTIONS)


## Grafická karta
Na své grafické kartě můžete změnit následující parametry:

- Automatická detekce;
- Manuální volba rozlišení;
- Velikost paměti (v MB) vyhrazené pro video RAM.



![](images/img_55.jpg){.thumbnail}


## Pevný disk
Můžete si změnit virtuální diskový prostor na svém serveru změnou poskytovaného prostoru:

![](images/img_56.jpg){.thumbnail}
Také si můžete vybrat typ disku (SATA či IDE) a typ úložiště (trvalé či dočasné).

Trvalé (persistent) úložiště umožňuje ponechání dat i v případě rebootu serveru.
Dočasné (non-persistent) úložiště ponechává uložená data pouze během chodu serveru. Při rebootu o data přijdete.

S pomocí tlačítka "Add ..." můžete přidat druhý disk na server. Server přitom může být zapnutý či vypnutý.


## CD/DVD
Umožňuje lehce připojit obraz k Vašemu úložišti:

![](images/img_62.jpg){.thumbnail}

## DŮLEŽITÉ!!!
Je nezbytné, abyste zkontrolovali "Connect at power on" (Připojení při zapnutí), takže zavaděč detekuje při načítání Vaše iso.


## NIC
Toto Vám umožňuje zvolit typ karty, který chcete nastavit na virtuálním serveru a typ připojení (VM Network LocalPortGroup)

Network umožňuje VM připojení na veřejnou síť (s IP RIPE). či na lokální síť mezi hostiteli.

LocalPortGroup umožňuje komunikaci pouze pomocí privátní sítě a je limitováno hostiteli (pouze jeden VM host může komunikovat s jinými).

Pro nastavení můžete také použít tuto příručku:


- []({legacy}582)



![](images/img_63.jpg){.thumbnail}


## Základní možnosti
Tato možnost Vám umožní změnit typ serveru, který jste si zvolili při vytváření VM, nebo jen změnit název.


## Možnosti vApp
Tato volba Vám dává možnost přesně definovat typ IP či parametrů OVF virtuálního stroje.


## Nástroje VMware
Tato sekce umožňuje spravovat akce tlačítek použitých v nástrojích VMware.
Například tlačítko "Stop" může znamenat vypnutí virtuálního stroje, nebo odpojení od elektřiny.


## Pokročilé možnosti
Pokročilé možnosti umožňují vyladit Váš server. V této sekci můžete povolit či zakázat přidávání CPU a RAM za chodu pomocí "Memory/CPU Hotplug". Tato možnost ale vyžaduje mít alespoň jednoho hostitele L či většího.

Druhá možnost se nazývá "swapfile Location". Defaultně je tato možnost nastavena od OVH tak, aby umístila soubor swap pro VM přímo na hostitele a v případě Private Cloud na SSD. Pomocí tohoto vylepšíte výkon čtení/zápis.


Avšak jestliže například nastavíte virtuální server na 12 GB RAM, VMware automaticky nastaví 12 GB swap soubor na lokální 30 GB úložiště. Disky tím pádem mohou být velice rychle zaplněny.

Také berte na vědomí, že jestliže budete používat tuto možnost, nebudete již využívat ochrany, kterou poskytuje funkce Hot Add.

Pro toto můžete změnit možnosti, takže soubor swap bude stále přiřazen k VM a poté umístěn na NAS pomocí .vmx a .vmdk.

