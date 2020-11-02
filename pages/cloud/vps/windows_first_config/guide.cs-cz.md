---
deprecated: true
title: Prvotní nastavení VPS s Windows Server (Firewall)
slug: windows-first-config
excerpt: Zjistěte, jak aktivovat připojení ke vzdálené ploše prostřednictvím KVM
---


## Prerekvizity

Při instalaci Windows Server 2012, 2012 R2 či 2016 na VPS může dojít k deaktivaci připojení ke vzdálené ploše, stejně tak jako komunikace skrze protokol ICMP. 

Pokud jste se ocitli v této situaci, tato příručka Vás provede potřebnými úpravami.

Nejdříve se ujistěte, že máte přístup k následujícím prerekvizitám:

- VPS s Windows Server 2012, 2012 R2 či 2016.
- Přístup do Zákaznického prostoru OVH.


## Postup

### Krok 1: Přihlášení do KVM

Pro přihlášení do KVM přejděte do svého `Zákaznického prostoru OVH`{.action} (záložka `Dedicated`{.action}, sekce VPS).

Následně klikněte na tlačítko `KVM`{.action} v pravé části obrazovky.


![KVM](images/windowsvps.png){.thumbnail}

Tímto způsobem získáte ke svému VPS přístup přes "Virtuální klávesnici a myš".


### Krok 2: Prvotní nastavení Windows

Na obrazovce KVM budete moci pozorovat spuštění operačního systému Windows. Následně budete požádáni o nastavení jazyku klávesnice Windows a **volbu administrátorského hesla**.

![Jazyk](images/windows2.png){.thumbnail}


![Heslo](images/windows3.png){.thumbnail}


### Krok 3: Nastavení Windows Firewall

Po skončení instalace přejděte do `Nástrojů pro správu`{.action} a následně vyberte možnost `Brána Windows Firewall s pokročilým zabezpečením`{.action}.


![Admin](images/windows4.png){.thumbnail}

Aktivujte protokol ICMP a připojení ke vzdálené ploše *(Příchozí pravidla; pravé tlačítko -> Autorizovat pravidlo)*.


![Aktivní](images/windows5.png){.thumbnail}