---
deprecated: true
title: Vytvoření snapshotu či klonu
excerpt: ''
slug: vytvoreni_snapshotu_ci_klonu
legacy_guide_number: g620
---


## Požadavky
Musíte použít klienta vSphere, nebo se připojit pomocí vlastního lokálního klienta, nebo použitím RDP, který Vám poskytujeme po aktivaci Vašeho Private Cloud.

Snapshot umožňuje uložit stav Vašeho VM v době, kdy ho spustíte. Tento snapshot v sobě zahrnuje (podle Vašeho nastavení):

- Stav všech Vašich disků na virtuálním stroji.
- Obsah paměti virtuálního stroje.


Snapshot je užitečný, když se musíte několikrát vrátit do stejného stavu bez nutnosti vytváření několika virtuálních strojů. Se snapshotem vytváříte bod obnovení. Můžete si vytvořit základní stav svého VM před migrací či před provedením libovolné kritické operace. Snapshot také poskytuje "instantní" obraz disku, což může sloužit jako záloha. Nicméně OVH nedoporučuje používat snapshot pro vytváření záloh virtuálních strojů. Jestliže máte velký počet snapshotů, budou Vám zabírat příliš velký diskový prostor a nejsou přitom chráněny proti selhání HW.


## Pořízení snapshotu
Pravým tlačítkem klikněte na své VM a zvolte "Snapshot" a "Take a Snapshot":

![](images/img_133.jpg){.thumbnail}
Nyní musíte uvést název snapshotu, jeho popis a jestliže si to přejete, tak i požadavek na uložení paměti v rámci tohoto snapshotu.

Zde máte možnost pořídit snapshot s či bez RAM.
Jestliže si zvolíte možnost "s RAM", navýší se tím čas úkolu, ale nebudete muset provádět reboot během obnovování. Zvolíte-li "bez RAM", bude úkol rychleji proveden, ale při obnovení ze snapshotu bude vyžadován reboot.

![](images/img_134.jpg){.thumbnail}


## Správa Snapshotu
Všechny své snapshoty u VM můžete zobrazit ve správci snapshotů. Klikněte pravým tlačítkem myši na "Snapshot" a poté vyberte "Snapshot Manager"

![](images/img_135.jpg){.thumbnail}


## Požadavky
Musíte použít klienta vSphere, nebo se připojit pomocí vlastního lokálního klienta, nebo použitím RDP, který Vám poskytujeme po aktivaci Vašeho Private Cloud.


## Klonování VM
Klikněte pravým tlačítkem myši na VM a zvolte "Clone". Uveďte název nového VM a jeho umístění:

![](images/img_136.jpg){.thumbnail}
Zvolte si cluster, na kterém bude tento VM závislý:

![](images/img_137.jpg){.thumbnail}
Uveďte hlavního hostitele tohoto VM:

![](images/img_138.jpg){.thumbnail}
Nyní uveďte souborový systém, na kterém bude uložen diskový prostor tohoto VM. Můžete si například zvolit umístění VM, které bude (nebo nebude) mít stejný formát jako jeho zdroj. Máte možnosti:


- Same Format as Source: vytvořené VM bude identické se svým vzorem;
- Thin provisioned format: vytvoří se disk, který bude v reálu zabírat pouze tolik místa, kolik potřebuje;
- Thick Format: bude používat celý diskový prostor jako jeho vzor.



![](images/img_139.jpg){.thumbnail}
Nyní nastavíme síť na Vašem VM. Máte zde dvě možnosti:

- Do not customize: veškerá nastavení budou převzata ze vzorového VM;
- Customize using the Customization Wizard: Tato možnost umožní provést nové nastavení, které chcete mít pro Váš nový VM.



![](images/img_140.jpg){.thumbnail}

## POZOR!
Jestliže nezvolíte provedení změn během vytváření klonu, je nezbytné provést změnu v nastavení před samotným spuštěním klonu, aby nedošlo ke konfliktu IP adres.
V tomto případě jednoduše odškrtneme v nastavení VM síťovou kartu:

![](images/img_141.jpg){.thumbnail}

