---
deprecated: true
title: 'Hardwarová diagnostika'
slug: diagnostika-hardware-dedikovane-servery
excerpt: 'Zjistěte, jak provést hardwarovou diagnostiku na svém dedikovaném serveru'
section: Zabezpečení
---

**Poslední aktualizace 23/08/2018**

## Cíl

V určitém bodě může vlivem opotřebení dojít k poruše hardwaru Vašeho serveru. Pro takové případy je server vybaven diagnostickými nástroji, jejichž smyslem je přesně určit vadný komponent.

**Zjistěte, jak provést hardwarovou diagnostiku na svém dedikovaném serveru.**


## Prerekvizity

* [Dedikovaný server OVH](https://www.ovh.cz/dedikovane_servery/){.external}.
* Restart serveru v [režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/){.external}.


## Postup

### Webové rozhraní

Po restartu serveru do [režimu rescue](https://docs.ovh.com/cz/cs/dedicated/ovh-rescue/) obdržíte e-mail s přístupovými údaji. Tento e-mail zároveň obsahuje i odkaz pro připojení k webovému rozhraní režimu rescue. Odkaz má následující podobu: *https://IP_serveru:444*.

Po kliknutí na odkaz budete přesměrováni do následujícího webového rozhraní:

![Webové rozhraní](images/rescue-mode-04.png){.thumbnail}


### Kompletní diagnostika

V horní části rozhraní klikněte na tlačítko `Start all tests`{.action}. Následně bude zahájena kompletní hardwarová diagnostika.

![Kompletní diagnostika](images/rescue-mode-042.png){.thumbnail}


### Parciální diagnostika

Pokud si přejete provést diagnostiku pouze jednoho určitého komponentu, můžete tak rovněž učinit prostřednictvím webového rozhraní režimu rescue. Na výběr máte z následujících testů:

- Procesory
- Připojení k síti
- RAM
- Diskové oddíly

Zároveň máte přístup ke SMART logs svého serveru, na jejichž základě můžete získat detailní informace o stavu pevného disku.

 
#### Procesory

Ověří správnou funkčnost Vašeho procesoru. Průměrný čas diagnostiky je 30 min. Pokud v průběhu testu dojde k pádu serveru, znamená to, že na procesoru byla zjištěna závada.

Pro spuštění testu klikněte na následující tlačítko:

![Test procesoru](images/processors.png){.thumbnail}

#### Připojení k síti

Ověří interní a externí šířku pásma. Pro spuštění testu klikněte na následující tlačítko:

![Test sítě](images/network-connection.png){.thumbnail}

#### RAM

Ověří integritu operační paměti Vašeho serveru. Pokud v průběhu testu dojde k pádu serveru, znamená to, že na na jednom či vícero modulech byla zjištěna závada.

Pro spuštění testu klikněte na následující tlačítko:

![Test RAM](images/memory.png){.thumbnail}

#### Diskové oddíly

Ověří přístup k disku a integritu souborového systému. Test diskového přístupu slouží k ověření komunikace mezi systémem a pevnými disky. Test souborového systému provede kompletní ověření souborového systému prostřednictvím příkazu `fsck -fy`. 

> [!warning]
>
> Spuštění testu souborového systému na poškozeném disku může mít za následek ztrátu dat.
>

![Test pevného disku](images/partitions.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.