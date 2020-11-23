---
deprecated: true
title: 'Vytvoření DNS zóny OVH pro externí doménu'
slug: vytvoreni-dns-zony-externi-domena
excerpt: 'Zjistěte, jak vytvořit DNS zónu prostřednictvím Zákaznického prostoru OVH'
section: 'DNS a DNS zóna'
order: 2
---

**Poslední aktualizace 20/07/2018**

## Cíl

DNS zóna představuje konfigurační soubor domény. DNS zóna je tvořena DNS záznamy, které slouží pro směrování domény na server (nebo servery) hostující webové stránky a e-mailové adresy. 

**Zjistěte, jak vytvořit DNS zónu prostřednictvím Zákaznického prostoru OVH.**


## Prerekvizity

- Doména
- Doména nesmí disponovat DNS zónou OVH a zároveň nesmí být předmětem probíhající operace či objednávky ze strany společnosti OVH.
- Doména musí být správně nakonfigurována (stav, SOA záznam apod.)
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Postup

### Fáze 1: vytvoření DNS zóny prostřednictvím Zákaznického prostoru OVH

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na tlačítko `Objednat`{.action} a ze seznamu vyberte možnost `DNS zóna`{.action}.

Zadejte název domény, pro níž si DNS zónu přejete vytvořit. Vyčkejte, dokud nástroj neověří aktuální konfiguraci domény.

Pokud se zobrazí hlášení o nemožnosti vytvoření DNS zóny, ujistěte se, že doména splňuje veškeré vstupní předpoklady uvedené v úvodní části této příručky, popřípadě kontaktujte osobu odpovědnou za správu domény a požádejte ji o kontrolu nastavení. Po ověření nastavení domény akci opakujte.

![dnszonecreate](images/dns-zone-create-step1.png){.thumbnail}

Vyberte, zda si DNS zónu přejete aktivovat s minimálními údaji. Tato volba není definitivní a lze ji později změnit.

|Aktivovat DNS zónu s minimálními údaji?|Popis|
|---|---|
|Ano|Tuto možnost vyberte, pokud si svou DNS zónu budete chtít později přizpůsobit sami.|
|Ne|Tuto možnost vyberte, pokud doménu plánujete používat se službami společnosti OVH (např. [webhosting](https://www.ovh.cz/webhosting/){.external}).|

![dnszonecreate](images/dns-zone-create-step2.png){.thumbnail}

Potvrďte svůj souhlas se smluvními podmínkami a klikněte na tlačítko `Generovat objednávku`{.action}.

### Fáze 2: úprava DNS zóny (nepovinné)

Po vytvoření DNS zóny můžete upravit její konfiguraci. Tento krok je dobrovolný, může však být nezbytný v případě potřeby zajistit kontinuitu dostupnosti služeb asociovaných s danou doménou (např. webové stránky a e-maily).

Za účelem úpravy konfigurace DNS zóny se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Domény`{.action} a následně vyberte doménu, v jejímž rámci si požadované úpravy přejete provést. V základním rozhraní pro správu domény klikněte na záložku `DNS zóna`{.action}.

> [!primary]
>
> Pokud jste DNS zónu právě vytvořili a daná doména se v seznamu Vašich služeb ještě nezobrazuje, vyčkejte několik minut a poté obnovte stránku.
>

Proveďte potřebné úpravy. Detailní informace na toto téma naleznete v následující dokumentaci: [Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}. Propagace změn v DNS zóně může trvat až 24 hodin.

### Fáze 3: úprava DNS serverů domény

Jakmile je DNS zóna řádně nakonfigurována a připravena k použití, můžete ji připojit ke své doméně. Za tímto účelem budete muset ze Zákaznického prostoru OVH získat informace o DNS serverech, které jsou pro Vaši doménu aktivní. Tyto informace naleznete v kolonce `Name Servers`{.action}.

![dnszonecreate](images/dns-zone-create-step3.png){.thumbnail}

Jakmile získáte potřebné informace, upravte nastavení DNS serverů domény prostřednictvím administračního rozhraní správce domény. Propagace provedených změn může trvat až 48 hodin.

## Kam dál

[Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.