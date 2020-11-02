---
deprecated: true
title: 'Modifikace DNS zóny'
slug: modifikace-dns-zony
excerpt: 'Zjistěte, jak upravit DNS zónu prostřednictvím Zákaznického prostoru OVH'
section: 'DNS a DNS zóna'
order: 3
---

**Poslední aktualizace 05/04/2018**

## Cíl

DNS zóna představuje konfigurační soubor domény a sestává z technických informací, které jsou označovány jako záznamy. V klasickém pojetí slouží DNS záznamy pro směrování domény na server (nebo servery) hostující webové stránky a e-mailové adresy.

**Zjistěte, jak upravit DNS zónu prostřednictvím Zákaznického prostoru OVH.**

## Prerekvizity

- Dostatečná oprávnění k provádění úprav v  DNS zóně domény prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.
- Doména musí být nakonfigurována na DNS servery OVH.

> [!warning]
>
> - Pokud Vaše doména není nakonfigurována na DNS servery OVH, musíte změny provést pomocí příslušného rozhraní pro správu domény.
>
> - Pokud je Vaše doména registrována u OVH, můžete snadno ověřit, zda používá naší konfiguraci. Za tímto účelem přejděte do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, vyberte příslušnou doménu a přejděte do záložky `DNS servery`{.action}.
>

## Postup

**Při manipulaci se záznamy v DNS zóně domény dbejte zvýšené opatrnosti**: nevhodné změny v nastavení mohou mít za následek znepřístupnění Vašich webových stránek či e-mailů.

Seznámením se s jednotlivými typy DNS záznamů získáte lepší porozumění tomu, k jakým změnám může při modifikaci DNS zóny dojít. Před vykonáním jakýchkoli úprav proto doporučujeme pročíst následující tabulku,  která obsahuje detailní informace o jednotlivých záznamech.

|Záznam|Popis|  
|---|---|
|A|A záznam slouží ke směrování domény na IPv4 adresu. Příklad: IP adresa serveru, na němž jsou uloženy Vaše webové stránky.|
|AAAA|AAAA záznam slouží ke směrování domény na IPv6 adresu. Příklad: IP adresa serveru, na němž jsou uloženy Vaše webové stránky.|
|CNAME|CNAME určuje, že doména je pouze přezdívkou (aliasem) jiné domény, která vystupuje jako kanonická doména. Příklad: pokud *www.mypersonaldomain.ovh* je aliasem *mypersonaldomain.ovh*, znamená to, že* www.mypersonaldomain.ovh* bude používat IP adresu či adresy *mypersonaldomain.ovh*.|
|MX|MX záznam slouží ke směrování domény na mailový server. Příklad: IP adresa serveru, na němž je hostováno Vaše e-mailové řešení. Je více než pravděpodobné, že poskytovatel Vaší služby disponuje několika mailovými servery. V takovém případě je zapotřebí vytvořit MX záznam pro každý z nich.|
|SRV|SRV záznam se používá pro definování adresy serveru, spravujícího nějakou službu. Příklad: tento záznam může definovat adresu SIP serveru, nebo adresu serveru umožňujícího automatickou konfiguraci e-mailového klienta (na základě principu autodiscover).|
|TXT|TXT záznam umožňuje přidání libovolné hodnoty do nastavení DNS (v textovém formátu). Tento záznam je často používán v rámci autentizačních procesů.|
|SPF|SPF záznam zabraňuje odcizení identity e-mailovými adresami, které se jménem Vaší domény pokoušejí rozesílat spam a podvodné e-maily. Příklad: SPF záznam specifikuje, že pouze server Vašeho poskytovatele e-mailové služby má být rozpoznán jako legitimní zdroj odesílání. Detailní informace na toto téma naleznete v následující příručce: [Přidání záznamu SPF v DNS zóně domény](https://docs.ovh.com/cz/cs/domains/spf-zaznam/){.external}.|
|CAA|CAA záznam obsahuje seznam certifikačních autorit, autorizovaných pro poskytování SSL certifikátu na dané doméně.|

### Fáze 1: přístup do rozhraní pro správu DNS zóny

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, v levém postranním panelu klikněte na položku `Domény`{.action} a následně vyberte doménu, v jejímž rámci si přejete provést požadované úpravy. V základním rozhraní pro správu domény klikněte na záložku `DNS zóna`{.action}.

Zobrazí se tabulka s aktuální OVH konfigurací domény. Každý řádek obsahuje jeden DNS záznam.  Obsah tabulky lze filtrovat v závislosti na druhu DNS záznamu či názvu domény.

![dnszona](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Fáze 2: modifikace DNS zóny

Úpravy v OVH DNS zóně domény lze provádět prostřednictvím přidávání, odstraňování či upravování existujících DNS záznamů. Existují dva způsoby, jak lze změny v DNS zóně realizovat:

- **Manuální úpravy v textovém režimu:** pouze pro uživatele s pokročilými technickými znalostmi. V záložce `DNS zóna`{.action} klikněte na tlačítko `Změna v textovém formátu`{.action} a řiďte se příslušnými pokyny.

- **Průvodce nastavením OVH.**

Tato příručka Vás provede jednotlivými kroky druhého z výše uvedených způsobů konfigurace.

> [!primary]
>
> Poznamenejte si informace, které si v DNS zóně přejete upravit. Pokud změny v DNS zóně provádíte na základě žádosti poskytovatele služby, měli byste od něj mít k dispozici seznam záznamů, které je potřeba upravit.
>

- **Přidání nového DNS záznamu**

Pro přidání nového záznamu přejděte do záložky `DNS zóna`{.action} a klikněte na tlačítko `Přidat záznam`{.action} v pravé části obrazovky.  Zvolte požadovaný typ záznamu a řiďte se příslušnými pokyny.

Před přidáním nového záznamu zkontrolujte, zda stejný záznam již neexistuje a zda nesměruje na jiný cíl. Pro usnadnění vyhledávání použijte vyhledávací filtr. Pokud záznam již existuje, upravte ho. Postup pro úpravu již existujícího záznamu naleznete v dalším kroku této příručky.

![dnszona](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modifikace existujícího DNS záznamu**

Pro úpravu již existujícího záznamu přejděte do záložky `DNS zóna`{.action} a klikněte na ikonku ozubeného kolečka v řádku tabulky příslušného záznamu. Vyberte možnost `Upravit záznam`{.action} a řiďte se příslušnými pokyny.

![dnszona](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Vymazání DNS záznamu**

Pro vymazání DNS záznamu přejděte do záložky `DNS zóna`{.action} a klikněte na ikonku ozubeného kolečka v řádku tabulky příslušného záznamu. Vyberte možnost `Smazat záznam`{.action} a řiďte se příslušnými pokyny.

Rozhraní nabízí možnost vymazání několika DNS záznamů naráz. Za tímto účelem označte příslušné DNS záznamy a klikněte na tlačítko `Odstranit`{.action} (tlačítko se zobrazí v horní části tabulky).

![dnszona](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Fáze 3: vyčkejte na propagaci změn v DNS zóně

Propagace změn v DNS zóně domény může trvat až 24 hodin.

Pokud si přejete dobu propagace příštích změn v DNS zóně zkrátit, můžete tak učinit prostřednictvím modifikace hodnoty TTL (*Time To Live*), vztahující se na všechny DNS záznamy.
Za tímto účelem přejděte do záložky `DNS zóna`{.action} a klikněte na tlačítko `Implicitní TTL`{.action}. Následně postupujte podle příslušných pokynů. 

V případě potřeby lze upravit hodnotu TTL pro jednotlivé záznamy. 

## Kam dál

[Obecné informace o DNS serverech](https://docs.ovh.com/gb/en/domains/web_hosting_general_information_about_dns_servers/){.external}.

[Přidání záznamu SPF v DNS zóně domény](https://docs.ovh.com/cz/cs/domains/spf-zaznam/){.external}.

[Ochraňte svou doménu před Cache Poisoning s DNSSEC](https://www.ovh.cz/domeny/sluzba_dnssec.xml){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.