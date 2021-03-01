---
deprecated: true
title: 'Přidání MX záznamu v DNS zóně domény'
slug: sdileny-mail-konfigurace-mx-dns-zona-ovh
excerpt: 'Zjistěte, jak přidat MX záznam v DNS zóně své domény'
section: 'DNS a DNS zóna'
order: 4
---

**Poslední aktualizace 11/04/2018**

## Cíl

MX záznam slouží ke směrování domény na mailový server. To umožňuje serverům, které odesílají e-maily na Vaše adresy, určit, kam mají e-maily přenášet. Je pravděpodobné, že Váš poskytovatel disponuje více než jedním mailovým serverem. Proto je zapotřebí přidat tolik MX záznamů, kolik je mailových serverů.

**Zjistěte, jak přidat MX záznam v DNS zóně své domény.**

## Prerekvizity

- Dostatečná oprávnění ke správě domény prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.
- Doména musí být nakonfigurována na DNS servery OVH.

> [!warning]
>
> - Pokud Vaše doména není nakonfigurována na DNS servery OVH, musíte změny provést pomocí příslušného rozhraní pro správu domény.
>
> - Pokud je Vaše doména registrována u OVH, můžete její konfiguraci ověřit pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Za tímto účelem přejděte do základního rozhraní pro správu domény a vyberte záložku `DNS servery`{.action}.
>

## Postup

### Fáze 1: seznámení se základními pojmy

MX záznam slouží ke směrování domény na server poskytovatele e-mailového řešení, jako např. na server společnosti OVH. Když Vám některý z Vašich dopisovatelů odesílá e-mail, server, který se stará o jeho odeslání díky MX záznamu ví, na který server poštu odeslat.

Jelikož lze pro jednu doménu nastavit několik MX záznamů, je pro každý z nich zapotřebí definovat prioritu. Díky tomu servery, které Vám e-maily zasílají, vědí, na jaký server poštu v závislosti na nastavené prioritě odesílat. Můžete však přidávat pouze MX záznamy patřící stejnému poskytovateli služby.

Obecně lze říci, že **modifikace MX záznamů domény vyžaduje vyšší úroveň technických znalostí**: nevhodná manipulace může mít za následek znepřístupnění Vašich e-mailových adres. Při provádění jakýchkoli úprav v MX záznamech domény proto buďte maximálně ostražití.

### Fáze 2: seznámení s MX konfigurací OVH

Níže naleznete přehled informací týkajících se konfigurace MX záznamu OVH pro použití v rámci služeb MX Plan (jako samostatná služba nebo jako součást [webhostingového balíčku OVH](https://www.ovh.cz/webhosting/){.external}), [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external} a [Exchange](https://www.ovh.cz/emails/){.external}. Naše mailové servery disponují antivirovou a antispamovou ochranou.

|Doména|TTL|Typ záznamu|Priorita|Cíl|
|---|---|---|---|---|
|*Ponechte prázdné*|3600|MX|1|mx0.mail.ovh.net.|
|*Ponechte prázdné*|3600|MX|5|mx1.mail.ovh.net.|
|*Ponechte prázdné*|3600|MX|50|mx2.mail.ovh.net.|
|*Ponechte prázdné*|3600|MX|100|mx3.mail.ovh.net.|

Výše uvedené MX záznamy použijte v DNS konfiguraci své domény. Za tímto účelem postupujte podle následujících pokynů.

### Fáze 3: úprava konfigurace MX záznamu OVH

Za účelem úpravy MX záznamů v OVH konfiguraci své domény se přihlaste do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. V levém postranním panelu vyberte sekci `Domény`{.action}, klikněte na požadovanou doménu a přejděte do záložky `DNS zóna`{.action}.

Zobrazí se tabulka s aktuální OVH konfigurací domény. Každý řádek obsahuje jeden DNS záznam. Nejdříve se ujistěte, zda v DNS konfiguraci Vaší domény již MX záznamy neexistují. Pro usnadnění vyhledávání použijte vyhledávací filtr.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Pokud zde již MX záznamy existují a Vy si je přejete nahradit novými, klikněte na ikonku ozubeného kolečka v pravé části příslušného řádku a následně vyberte možnost `Vymazat záznam`{.action}. 

Následně klikněte na tlačítko `Přidat záznam`{.action} a z nabízených možností vyberte `MX`{.action}. Vyplňte požadované údaje v závislosti na používaném e-mailovém řešení.

- **Pokud používáte e-mailové řešení OVH**: zadejte informace obsažené v tabulce, kterou jsme si představili v druhé části této příručky ([Fáze 2: seznámení s MX konfigurací OVH](https://docs.ovh.com/cz/cs/domains/sdileny-mail-konfigurace-mx-dns-zona-ovh/#faze-2-seznameni-s-mx-konfiguraci-ovh){.external}).

- **Pokud používáte externí e-mailové řešení**: za účelem získání potřebných informací se obraťte na svého současného poskytovatele služby.

Úpravy potvrďte kliknutím na tlačítko `Schválit`{.action}.

> [!primary]
>
> Propagace změn v DNS zóně může trvat 4 až 24 hodin.
>

## Kam dál

[Modifikace DNS zóny](https://docs.ovh.com/cz/cs/domains/modifikace-dns-zony/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.