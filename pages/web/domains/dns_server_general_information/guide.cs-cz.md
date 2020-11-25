---
deprecated: true
title: 'Úprava DNS serverů OVH domény'
slug: obecne-informace-dns
excerpt: 'Naučte se spravovat DNS servery své OVH domény'
section: 'DNS a DNS zóna'
order: 1
---

**Poslední aktualizace 30/05/2018**

## Cíl

Na DNS serverech je uložena DNS konfigurace domén. DNS konfigurace domény se označuje jako DNS zóna. DNS zóna sestává z technických informací neboli záznamů. V klasickém pojetí DNS záznamy slouží pro směrování domény na server (nebo servery) hostující webové stránky a e-mailové adresy.

Obecně lze tedy říci, že DNS záznamy, uložené na DNS serverech, zpřístupňují Vaše domény na Internetu.

**Naučte se spravovat DNS servery své OVH domény.**

## Prerekvizity

- Doména registrovaná u společnosti OVH.
- Dostatečná oprávnění ke správě domény prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!warning]
>
> Pokud Vaše doména není registrována u společnosti OVH, musíte změny v nastavení DNS provést pomocí rozhraní pro správu domény u příslušného poskytovatele.
>

## Postup

**Při manipulaci s DNS servery dbejte zvýšené opatrnosti**: nevhodné změny v nastavení mohou mít za následek znepřístupnění Vašich webových stránek či e-mailů. Porozumění možným následkům vyvolaných úpravami v nastavení DNS serverů umožňuje lepší pochopení prováděných změn.

Kdykoli modifikujete DNS servery své domény, provádíte tím zároveň úpravy v její DNS konfiguraci. Nová konfigurace nahrazuje stávající a je ukládána na nově nastavených DNS serverech. Z technického hlediska tak doména používá novou DNS zónu.

Je však potřeba zdůraznit, že:

- obsah staré konfigurace není automaticky replikován na novou konfiguraci. Vždy se ujistěte, že Vaše nová konfigurace zahrnuje veškeré informace nutné pro správné fungování služeb asociovaných s Vaší doménou </br>(např. webové stránky a e-mailové adresy).

- pokud si přejete upravit pouze jeden prvek své současné DNS konfigurace (tzn. jeden DNS záznam), doporučujeme řídit se postupem uvedeným v následující příručce: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}

> [!warning]
>
> Předtím než se pustíte do provádění jakýchkoli úprav, ujistěte se, že tyto úpravy nebudou mít za následek znepřístupnění Vaší domény. Pokud si nejste jisti výsledkem, poraďte se s osobou, která po Vás provedení těchto úprav vyžaduje.
>

### Fáze 1: přístup do rozhraní pro správu DNS serverů

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Domény`{.action} a následně vyberte doménu, v jejímž rámci si přejete provést požadované úpravy. V základním rozhraní pro správu domény klikněte na záložku `DNS servery`{.action}.

Zobrazí se tabulka obsahující seznam DNS serverů, aktuálně nastavených u OVH pro Vaši doménu. Každý řádek tabulky obsahuje jeden DNS server.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Fáze 2: úprava DNS serverů

Chcete-li servery upravit, klikněte na tlačítko `Úprava DNS serverů`{.action}.

Obsah textových polí nahraďte informacemi o nových serverech, které si přejete nastavit. Pro přidání dalších serverů klikněte na symbol `+`{.action} v pravé části posledního řádku tabulky.

Po vyplnění údajů klikněte na tlačítko `Aplikovat konfiguraci`{.action}. Informace o DNS serverech v tabulce se </br>v souladu s nově zvoleným nastavením aktualizují.

> [!primary]
>
> Pomocí tlačítka `Reset DNS serverů`{.action} můžete v případě potřeby obnovit původní konfiguraci OVH. Tuto možnost využijte pouze v případě, že si přejete opět používat DNS servery OVH. 
>

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Fáze 3: vyčkejte na úplnou propagaci provedených úprav

Aplikace úprav provedených v nastavení DNS serverů není okamžitá. V úvahu je zapotřebí vzít dvě po sobě jdoucí časové prodlevy:

- Změna provedená na straně OVH musí být zpracována organizací, která spravuje Vaši doménovou koncovku. Postup procesu můžete sledovat prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} (sekce `Domény`{.action}, záložka `Nedávné úkoly`{.action}).

- Jakmile organizace spravující Vaši doménovou koncovku změny zpracuje, dojde v rozmezí 48 hodin k úplné propagaci provedených úprav.

## Kam dál

[Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.