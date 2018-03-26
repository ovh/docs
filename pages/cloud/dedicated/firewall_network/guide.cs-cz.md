---
title: Konfigurace síťového firewallu
slug: firewall-network
section: Síť a IP
---

**Poslední aktualizace 21/02/2018**

## Cíl

Za účelem ochrany své globální infrastruktury a serverů svých klientů nabízí společnost OVH konfigurovatelný síťový firewall, zahrnutý v rámci řešení **Anti-DDoS** (VAC).  Jedná se o volitelné rozšíření, umožňující zabezpečení služeb před útoky přicházejícími z veřejné sítě.

**Zjistěte, jak nakonfigurovat síťový firewall OVH**.


> [!primary]
>
> VAC*: detailní informace o technologii VAC naleznete na následující adrese: <https://www.ovh.cz/anti-ddos/>.
> 

![VAC detail](images/vac-inside.png){.thumbnail}


## Prerekvizity

- Jakákoli služba OVH se síťovým firewallem ([dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external}, [VPS](https://www.ovh.cz/vps/){.external}, [instance Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.cz/private-cloud/){.external}, [IP Failover](https://www.ovh.cz/dedikovane_servery/ip_failover.xml){.external}...)
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&){.external}
- Základní povědomí o síťové problematice


## Postup

### Aktivace síťového firewallu

> [!primary]
>
> Síťový firewall chrání IP adresy asociované s určitým strojem. Z toho důvodu je zapotřebí nakonfigurovat každou IP adresu zvlášť. Globální konfigurace serveru není možná.
> 

Aktivace a konfigurace síťového firewallu se provádí manuálně v Zákaznickém prostoru OVH (sekce `IP`{.action}), kliknutím na ikonku ozubeného kolečka po pravé straně IPv4 adresy a vybráním možnosti „Vytvořit firewall“.

![Aktivace síťového firewallu](images/firewall_creation.png){.thumbnail}

- Následně budete požádáni o potvrzení požadavku na vytvoření firewallu:

![Potvrzení](images/creationvalid.png){.thumbnail}

- Jakmile svůj požadavek potvrdíte, zpřístupní se Vám u dané IPv4 adresy další dvě funkce: `Aktivovat firewall`{.action} a `Nastavit firewall`{.action}:

![Aktivace konfigurace](images/activationconfig.png){.thumbnail}

Na jedné IP adrese můžete nastavit **až 20 bezpečnostních pravidel**.


> [!warning]
>
> Firewall se aktivuje automaticky při každém DDoS útoku. Firewall není možné deaktivovat ještě před skončením útoku. Z toho důvodu je důležité udržovat bezpečnostní pravidla firewallu aktuální. Ve výchozí konfiguraci nejsou nastavena žádná bezpečnostní pravidla a mohou být navázána jakákoli spojení. Pokud máte nastavena bezpečnostní pravidla, nezapomínejte je pravidelně kontrolovat (i v případě, že jsou deaktivována).
> 



> [!primary]
>
> - UDP fragmentace je ve výchozím nastavení blokována (DROP). Pokud používáte VPN, nezapomeňte při aktivaci síťového firewallu správně nakonfigurovat svou maximální přenosovou jednotku (MTU). V případě OpenVPN můžete například zaškrtnout `MTU test`{.action}.
> - Síťový firewall se nevztahuje na interní síť OVH. Bezpečnostní pravidla firewallu proto nemají vliv na komunikaci uvnitř této sítě.
>


### Konfigurace síťového firewallu

Pro přidání bezpečnostního pravidla vyberte možnost „Nastavit firewall“ a klikněte na tlačítko `Přidat pravidlo`{.action} v pravé části rozhraní:


![Přidat pravidlo](images/ajoutregle1.png){.thumbnail}

Pro každé pravidlo můžete nastavit následující hodnoty:

- Priorita (0 až 19, přičemž pravidlo s prioritou 0 má přednost před ostatními pravidly v řadě)
- Akce (`Povolit`{.action} nebo `Odmítnout`{.action})
- Protokol
- IP zdroje (volitelné)
- Zdrojový port (pouze v případě TCP)
- Cílový port (pouze v případě TCP)
- Možnosti TCP (pouze v případě TCP)


![Přidání pravidla](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorita 0: doporučujeme autorizovat protokol TCP pro všechny IP adresy se zaškrtnutou možností `ESTABLISHED`{.action}. Možnost `ESTABLISHED`{.action} umožňuje ověřit, zda je paket součástí již otevřené relace. Pokud neprovedete autorizaci, server nebude moci přijímat zpětnou komunikaci protokolu TCP pro SYN/ACK dotazy.
> - Priorita 19: pokud nejsou před devatenáctým pravidlem (poslední možné) nastavena žádná další pravidla, dojde k zamítnutí všech IPv4 protokolů.
> 


### Příklad konfigurace

Abychom se ujistili, že při autorizaci ICMP zůstanou otevřeny pouze porty SSH (22), HTTP (80), HTTPS (443), a UDP (na portu 10000), musíme postupovat podle následujících instrukcí:

![Příklad konfigurace](images/exemple.png){.thumbnail}

Pravidla jsou řazena chronologicky od 0 (první pravidlo) do 19 (poslední pravidlo). Jakmile dojde k aplikaci některého pravidla na paket, dochází k zastavení skenování řetězce pravidel.

Příklad: paket směrující na port 80/TCP bude zachycen pravidlem 2\. Z toho důvodu již následující pravidla nebudou testována. Paket směrující na port 25/TCP bude zachycen až posledním pravidlem (19), které ho zablokuje, neboť OVH v rámci předchozích pravidel nepovoluje jakoukoli komunikaci skrze port 25.

> [!warning]
>
> Pokud dojde k aktivaci anti-DDoS mitigace, budou bezpečnostní pravidla na Vašem firewallu aplikována, a to i tehdy, pokud jste je předtím deaktivovali. Pokud si tuto funkci přejete vypnout, nezapomeňte svá pravidla odstranit.
> 

## Kam dál

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.