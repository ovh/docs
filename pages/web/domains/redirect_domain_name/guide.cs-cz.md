---
deprecated: true
title: Přesměrování domény spravované společností OVH
slug: presmerovani-domeny
excerpt: Seznamte se s různými typy přesměrování a zjistěte, jak přesměrovat doménu spravovanou společností OVH
section: Obecné
---

**Poslední aktualizace 22/03/18**

## Cíl

Přesměrováním domény můžete svou doménu nasměrovat na nový cíl. Existuje mnoho druhů přesměrování, z nichž každé odpovídá specifickému typu použití.

**Seznamte se s různými typy přesměrování a zjistěte, jak přesměrovat doménu spravovanou společností OVH.**

## Prerekvizity

- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Přístup k webhostingovému řešení (pokud si přejete přidat soubor .htaccess).

## Postup

### Seznámení s přesměrováním domény

Předtím než pro svou doménu vytvoříte přesměrování, je důležité porozumět tomu, co to přesměrování vlastně je. Přesměrování domény slouží k jejímu nasměrování na nový cíl - obecně řečeno jinou doménu.

Existuje mnoho důvodů, proč doménu přesměrovat, nejčastější z nich však představuje potřeba změnit název webových stránek. V takovém případě jsou uživatelé, kteří do vyhledávače zadají starou doménu (doménu, kterou si již nepřejete pro své stránky používat), automaticky přesměrováni na doménu novou.

Přesměrování lze vytvořit dvěma různým způsoby:

- **Pomocí Zákaznického prostoru OVH**: zdejší Průvodce nastavením Vám pomůže přesměrování nakonfigurovat.

- **Manuální naprogramování**: v tomto případě je přesměrování zapotřebí zadat do konfiguračního souboru stránek (obecně *.htaccess*).

Mějte prosím na paměti, že přesměrování ovlivní SEO rating Vašich webových stránek. Při manipulaci s nastavením stránek buďte opatrní a v případě potřeby se obraťte na SEO specialistu.

### Přesměrování domény pomocí Zákaznického prostoru OVH

Přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} a levém postranním panelu vyberte sekci `Domény`{.action} (číslo *1* na obrázku níže). Vyberte požadovanou doménu a přejděte do záložky `Přesměrování`{.action} (číslo *2* na obrázku níže).

Tabulka nabízí seznam všech aktivních přesměrování, která jsou na doméně nakonfigurována.

Pro přidání přesměrování klikněte na tlačítko `Přidat přesměrování`{.action} (číslo *3* na obrázku).

![Rozhraní pro správu přesměrování](images/create_redirection_global.png){.thumbnail}

Zobrazí se dialogové okno. Zadejte doménu (nebo subdoménu), kterou si přejete přesměrovat. Jedná se o zdroj přesměrování.

![1. fáze přidání přesměrování](images/adding_redirection_1.png){.thumbnail}

V dalším kroku budete požádání o zadání cíle přesměrování. Nabízí se dvě možnosti:

- **Přesměrování na webovou adresu**

Přesměrování domény na jinou doménu. Ideální řešení, pokud si přejete změnit název svých webových stránek.

- **Přesměrování na server, nebo někam jinam**

Změna nastavení DNS konfigurace domény pro přesměrování na jiný cíl (záznam A, AAAA nebo CNAME). Toto řešení je ideální v případě, že Vaše stránky již nejsou hostovány u stejného poskytovatele, Vaše doména však zůstává u stejného registrátora.
Pokud Vaše doména používá konfiguraci OVH, můžete tuto akci provést prostřednictvím Zákaznického prostoru OVH (viz  [Modifikace DNS zóny](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external}).

V následujícím textu se zaměříme pouze na první z výše uvedených možností - **přesměrování na webovou adresu**. Pokud potřebujete pomoc s druhou možností, kontaktujte prosím poskytovatele své služby a zjistěte od něj, které DNS záznamy je za účelem přesměrování Vaší domény nutné upravit.

![Fáze 2 pro přidání přesměrování](images/adding_redirection_2.png){.thumbnail}

V případě **přesměrování na webovou adresu** zvolte typ přesměrování, který si přejete nastavit. Na výběr máte ze dvou možností:

|Typ přesměrování|Popis|
|---|---|
|Viditelné|Doména, kterou zadáte do webového prohlížeče, bude přesměrována na novou doménu. Tato změna bude viditelná v adresním řádku prohlížeče.|
|Neviditelné|Doména, kterou zadáte do webového prohlížeče, zůstane v adresním řádku nezměněna. Otevře se stará adresa, na níž se zobrazí webový obsah hostovaný na nové doméně (prostřednictvím *iframe*). Mějte prosím na paměti, že ne všechny webové stránky jsou s tímto typem přesměrování kompatibilní. Navíc může dojít k ovlivnění SEO ratingu Vašich stránek.|

![Volba mezi viditelným a neviditelným přesměrováním](images/redirection_3xx_1.png){.thumbnail}

#### Viditelné přesměrování

V případě **viditelného přesměrování** máte na výběr ze dvou možností:

|Typ přesměrování|HTTP kód|Popis|
|---|---|---|
|Trvalé|301|Jedná se o „standardní“ přesměrování.|
|Dočasné|302|Tento typ přesměrování může být použit pro předem stanovený časový úsek (např. dočasné či sezónní události). Mějte prosím na paměti, že SEO rating bude nižší než v případě přesměrování 301.|

Jakmile se rozhodnete, který typ přesměrování použít, zadejte cílovou adresu přesměrování (URL, na níž má Vaše doména směrovat).

![Volba mezi trvalým a dočasným přesměrováním](images/redirection_3xx_2.png){.thumbnail}

Jakmile vyplníte veškeré potřebné údaje, klikněte na tlačítko `Další`{.action}, ověřte zobrazené informace a poté klikněte na tlačítko `Schválit`{.action}.

> [!primary]
>
> Propagace změn může trvat 4 až 24 hodin.
>

#### Neviditelné přesměrování

V případě neviditelného přesměrování (HTTP 200) vyplňte požadované informace (viz následující tabulka) a klikněte na tlačítko `Další`{.action}. Zkontrolujte správnost zadaných údajů a klikněte na tlačítko `Schválit`{.action}.

|Pole|Popis|
|---|---|
|Titul (název)|Název Vašich webových stránek. Název stránek se zobrazuje například v záložce webového prohlížeče apod.|
|Klíčová slova|Tato slova mohou být internetovými vyhledávači použita pro indexování Vašich webových stránek.|
|Popis|Popis stránek, který se může zobrazit v rámci výsledků vyhledávání. |

> [!primary]
>
> Propagace změn může trvat 4 až 24 hodin.
>

![Neviditelné přesměrování](images/invisible_redirection.png){.thumbnail}

### Přesměrování domény pomocí souboru .htaccess

.htaccess je konfigurační soubor, v jehož rámci lze specifikovat nejrůznější příkazy. Když webový server (Apache) spouští kód Vašich stránek, dochází k interpretaci příkazů a k jejich následnému provedení. Mezi zmíněné příkazy lze vložit i příkaz pro přesměrování.

Úpravy souboru .htaccess vyžadují jistou úroveň technických dovedností. Pokud soubor upravíte nesprávně, může dojít k znepřístupnění jedné či vícero webových stránek (pokud na svém webhostingu používáte podadresáře). V případě jakýchkoli pochybností doporučujeme kontaktovat profesionálního webového vývojáře. Další informace naleznete v následující dokumentaci: [Vše o souboru .htaccess.](https://docs.ovh.com/gb/en/hosting/all_about_the_htaccess_file/){.external}

> [!primary]
>
> Před prováděním jakýchkoli úprav v souboru .htaccess si nezapomeňte vytvořit jeho zálohu, abyste ho v případě potřeby mohli navrátit do původního stavu.
>

- **Redirect permanent**

Odesílaný kód bude HTTP 301. Tento kód zajistí, aby internetové vyhledávače aktualizovali své odkazy na nové adresy.

Pro přesměrování celého webu zadejte následující kód:

```
Redirect permanent / http://nouveau-site.tld/
```

Pro změnu adresáře/souboru zadejte následující kód:

```
Redirect permanent / ancien_repertoire http://nouveau-site.tld/nouveau_repertoire
Redirect permanent / ancien_fichier.php http://site.tld/nouveau_fichier.php
```

- **Redirect gone**

Pokud soubor již neexistuje, doporučujeme nahradit chybovou hlášku *404 document not found* informativnější verzí typu *410 this document no longer exists*:

```
Redirect gone /supprime.html
```

- **Redirect seeother**

Pokud došlo ke změně koncovky souboru, **seeother** Vám umožní upravit jeho typ odesláním kódu HTTP 303:

```
Redirect seeother /exemple.doc http://site.tld/exemple.pdf
```

- **Redirect Temp**

Pokud své soubory dočasně přesouváte na jinou stránku, můžete použít dočasné HTTP 302 přesměrování:

```
Redirect temp / http://autre_site_web.tld/site/
```

## Kam dál

[Vše o souboru .htaccess](https://docs.ovh.com/gb/en/hosting/all_about_the_htaccess_file/){.external}.

[Modifikace DNS zóny](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external}

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.