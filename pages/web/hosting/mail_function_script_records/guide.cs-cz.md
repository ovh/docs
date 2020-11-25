---
deprecated: true
title: 'Monitoring a správa automatických e-mailů'
slug: monitoring-automatickych-emailu
excerpt: 'Zjistěte, jak na monitoring a správu automatických e-mailů odesílaných z webhostingového řešení OVH'
section: Diagnostika
---

**Poslední aktualizace 11/05/2018**

## Cíl

Automatické e-maily jsou odesílány prostřednictvím skriptů a své využití nalézají například v rámci kontaktních formulářů na webových stránkách. 

**Zjistěte, jak na monitoring a správu automatických e-mailů odesílaných z webhostingového řešení OVH.**

## Prerekvizity

- Některý z [webhostingových balíčků OVH](https://www.ovh.cz/webhosting/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

> [!primary]
>
> Předmětem této příručky jsou pouze e-maily odesílané prostřednictvím skriptů na Vašem webhostingovém řešení OVH.
>
> Pro správu e-mailových adres zahrnutých ve službě MX Plan nebo [webhostingovém řešení OVH](https://www.ovh.cz/webhosting/){.external} přejděte do sekce `E-maily`{.action} v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. 
>

## Postup

Monitoring a správa automatických e-mailů se provádí pomocí [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Přihlaste se do svého Zákaznického prostoru OVH, v levém postranním panelu klikněte na tlačítko `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. Následně klikněte na záložku `Více +`{.action} a z rozbalovací nabídky vyberte možnost `E-mailové skripty`{.action}.

Zobrazí se rozhraní pro monitoring a správu automatických e-mailů, které jsou odesílány z Vašeho webhostingového řešení OVH.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Monitoring odesílání automatických e-mailů

Rozhraní nabízí několik druhů informací, které lze použít pro okamžitou vizualizaci aktivity automatických e-mailů, odesílaných na základě Vašich skriptů.

|Informace|Popis|
|---|---|
|Stav služby|Zobrazuje aktuální stav služby, která provádí odesílání automatických e-mailů z Vašeho webhostingového řešení. Zelené políčko značí probíhající odesílání e-mailů, zatímco červené políčko znamená, že e-maily nejsou odesílány. V závislosti na aktuálním stavu služby se bude lišit i způsob, jakým jsou e-maily spravovány. Detailní informace na toto téma naleznete v následující části této příručky ([„Správa odesílání automatických e-mailů“](https://docs.ovh.com/cz/cs/hosting/monitoring-automatickych-emailu/#sprava-odesilani-automatickych-e-mailu){.external}).|
|Chyby hlásit na|Na libovolnou e-mailovou adresu si můžete nechat zasílat každodenní hlášení o chybách. Adresu lze nastavit kliknutím na tlačítko `Změna příjemce`{.action}. Hlášení o chybách obsahuje přehled e-mailů odeslaných z Vašeho webhostingového řešení, které byly z důvodu nemožnosti doručení vráceny zpět k OVH. Přehled chybových hlášení můžete zobrazit i prostřednictvím tlačítka `Problémy s e-maily`{.action}.|
|Celkový počet odeslaných e-mailů|Udává celkový počet automatických e-mailů, které byly z daného webhostingu odeslány od data jeho zřízení.|
|E-maily odeslané dnes|Udává celkový počet automatických e-mailů,  které byly z daného webhostingu odeslány v daný den.|
|Celkový počet neodeslaných e-mailů|Udává celkový počet nedoručených automatických e-mailů, které byly z daného webhostingu odeslány od data jeho zřízení.|
|Historie odeslaných e-mailů|Graf zobrazující počet odeslaných e-mailů v čase.|

> [!primary]
>
> Za účelem ochrany systému automatických e-mailů před zneužitím doporučujeme všechny formuláře na Vašich webových stránkách opatřit bezpečnostním systémem (například Captcha).
>

![hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Pokud Vaše automatické e-maily nejsou odesílány i přesto, že stav služby odesílání umožňuje, doporučujeme:

- **Ověřit skripty**: odesílání e-mailů může být zastaveno v důsledku chybné syntaxe. Ověřte obsah svých skriptů a zkuste to znovu.

- **Otestovat odesílání e-mailů prostřednictvím testovacího skriptu**: napište skript, který odešle e-mail na Vaši osobní e-mailovou adresu. Pokud e-mail obdržíte, znamená to, že Vaše skripty obsahují chybu. Testovací skripty jsou volně dostupné na internetu.

- **Odesílat e-maily bez použití SMTP serveru**: při psaní skriptu nezadávejte SMTP server. Pokud máte k dispozici rozhraní pro správu odesílání e-mailů z Vašich webových stránek, ujistěte se, že tento parametr může být v konfiguraci Vašich stránek upraven.

### Správa odesílání automatických e-mailů

Rozhraní pro správu e-mailových skriptů nabízí několik tlačítek pro správu automatických e-mailů odesílaných z Vašeho webhostingového řešení. Některé z nich mohou však být v závislosti na aktuálním stavu služby nedostupné.

|Akce|Informace|
|---|---|
|Blokace odesílání e-mailů|Umožňuje zablokovat distribuci automatických e-mailů odesílaných z Vašeho webhostingového řešení. E-maily budou zařazeny do fronty na dobu 72 hodin, ale žádný z nich nebude vymazán. Během této doby budete moci odblokovat jejich odesílání, nebo je pročistit.|
|Odblokovat posílání e-mailů|Umožňuje odblokovat odesílání automatických e-mailů z Vašeho webhostingového řešení. E-maily zařazené do fronty budou opětovně zařazeny do distribuce.|
|Vyčistit e-maily|Umožňuje vymazat frontu e-mailů a odblokovat jejich odesílání.|

 V některých případech může provedení požadované akce trvat až několik minut.

![hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.