---
deprecated: true
title: 'Konfigurace síťového firewallu'
slug: firewall-network
excerpt: 'Zjistěte, jak nakonfigurovat řešení Firewall Network'
section: 'Síť a IP adresy'
---

**Poslední aktualizace 23/08/2018**

## Cíl

Za účelem ochrany své globální infrastruktury a serverů svých klientů nabízí společnost OVH konfigurovatelný síťový firewall, zahrnutý v rámci řešení **Anti-DDoS** (VAC). Jedná se o volitelné rozšíření, umožňující zabezpečení služeb před útoky přicházejícími z veřejné sítě.

**Zjistěte, jak nakonfigurovat síťový firewall OVH.**


> [!primary]
>
> Detailní informace o naší anti-DDoS ochraně naleznete na následujících stránkách: <https://www.ovh.cz/anti-ddos/>.
> 

![VAC](images/vac-inside.png){.thumbnail}


## Prerekvizity

- Jakákoli služba OVH se síťovým firewallem ([dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external}, [VPS](https://www.ovh.cz/vps/){.external}, [instance Public Cloud](https://www.ovh.cz/public-cloud/instances/){.external}, [Private Cloud](https://www.ovh.cz/private-cloud/){.external}, [Fail-over IP](https://www.ovh.cz/dedikovane_servery/ip_failover.xml){.external}...).
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.


## Postup

### Aktivace síťového firewallu

> [!primary]
>
> Síťový firewall chrání IP adresy asociované s Vaším serverem. Každou IP adresu je zapotřebí nakonfigurovat zvlášť. Globální konfigurace není v tomto případě možná.
> 

Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} (sekce Dedicated) a v záložce `IP`{.action} klikněte u příslušné IPv4 adresy na ikonku tří teček `(...)`{.action}. Z nabídky vyberte možnost `Aktivovat firewall`{.action}.

![Aktivace síťového firewallu](images/firewall_creation.png){.thumbnail}

Klikněte na tlačítko Schválit.

![Validace](images/creationvalid.png){.thumbnail}

Po aktivaci firewallu opět klikněte na ikonku tří teček `(...)`{.action} u příslušné IPv4 adresy a vyberte možnost `Nastavit firewall`{.action}.

![Activation de la configuration](images/activationconfig.png){.thumbnail}

Na jedné IP adrese lze nastavit **až 20 bezpečnostních pravidel**.

> [!warning]
>
> Firewall se aktivuje automaticky při každém DDoS útoku. Firewall není možné deaktivovat před skončením útoku. Z toho důvodu je důležité pravidla udržovat aktuální.
> Ve výchozí konfiguraci nejsou nastavena žádná bezpečnostní pravidla a mohou být navázána jakákoli spojení.
> Pokud máte nastavena bezpečnostní pravidla, nezapomeňte při každé deaktivaci firewallu ověřit jejich aktuální konfiguraci.
> 


> [!primary]
>
> - UDP fragmentace je ve výchozím nastavení blokována (DROP). Pokud používáte VPN, nezapomeňte při aktivaci síťového firewallu správně nakonfigurovat svou maximální přenosovou jednotku (MTU). V případě OpenVPN můžete například zaškrtnout `MTU test`{.action}.
> - Síťový firewall se nevztahuje na interní síť OVH. Bezpečnostní pravidla firewallu proto nemají vliv na komunikaci uvnitř této sítě.
>


### Konfigurace síťového firewallu

Nové pravidlo vytvoříte kliknutím na tlačítko `Přidat pravidlo`{.action}.

![Přidání pravidla](images/ajoutregle1.png){.thumbnail}

Pro každé pravidlo lze nastavit následující hodnoty:

- priorita (0 až 19, přičemž pravidlo s prioritou 0 má přednost před ostatními pravidly v řadě)
- akce (`Povolit`{.action} nebo `Odmítnout`{.action})
- protokol
- IP zdroje (volitelné)
- zdrojový port (pouze v případě TCP)
- cílový port (pouze v případě TCP)
- možnosti TCP (pouze v případě TCP)

![Přidání pravidla](images/ajoutregle4.png){.thumbnail}


> [!primary]
>
> - Priorita 0: doporučujeme autorizovat protokol TCP pro všechny IP adresy se zaškrtnutou možností `ESTABLISHED`{.action}. Hodnota ESTABLISHED umožňuje ověřit, zda je paket součástí již otevřené relace. Pokud neprovedete autorizaci, server nebude moci přijímat zpětnou komunikaci protokolu TCP pro SYN/ACK dotazy.
> - Priorita 19: pokud nejsou před devatenáctým pravidlem (poslední možné) nastavena žádná další pravidla, dojde k zamítnutí všech IPv4 protokolů.
> 

### Příklad konfigurace

Abyste při autorizaci ICMP ponechali otevřeny pouze porty SSH (22), HTTP (80), HTTPS (443) a UDP (10000), postupujte podle následujícího obrázku:

![Příklad konfigurace](images/exemple.png){.thumbnail}

Pravidla jsou řazena chronologicky od 0 (první pravidlo) do 19 (poslední pravidlo). Jakmile dojde k aplikaci některého pravidla na paket, dochází k zastavení skenování řetězce pravidel.

Příklad: paket směrující na port 80/TCP bude zachycen pravidlem 2\. Z toho důvodu již následující pravidla nebudou testována. Paket směrující na port 25/TCP bude zachycen až posledním pravidlem (19), které ho zablokuje, neboť OVH v rámci předchozích pravidel nepovoluje jakoukoli komunikaci skrze port 25.

> [!warning]
>
> Pokud dojde k aktivaci anti-DDoS mitigace, budou bezpečnostní pravidla na Vašem firewallu aplikována, a to i tehdy, pokud jste je předtím deaktivovali. Pokud si tuto funkci přejete vypnout, nezapomeňte svá pravidla odstranit.
> 

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.