---
deprecated: true
title: Objednání služby SSL Gateway
slug: objednani-sluzby-ssl-gateway
excerpt: Zabezpečte připojení na své webové stránky
---


## Úvodní informace

### Prerekvizity


> [!primary]
>
> - Aktivní doména či sub-doména
>
> - > Přístup k DNS zóně dané domény
> 


## Objednávka

- Pro vytvoření objednávky služby SSL Gateway [klikněte prosím zde](https://www.ovh.cz/ssl-gateway){.external}.
- Vyberte požadované řešení a klikněte na tlačítko `Aktivovat nyní`{.action} nebo na tlačítko `Objednat`{.action}.

![obchodni stranka](images/1-en.png){.thumbnail}

- Zadejte svou aktivní doménu či sub-doménu a klikněte na tlačítko `Další`{.action}.

![objednani zdarma](images/2-en.png){.thumbnail}



> [!warning]
>
> - SSL Gateway Free: Služba je dostupná pouze pro domény 3. řádu.
>
> - SSL Gateway Advanced a Enterprise: Tyto služby jsou dostupné i pro domény čtvrtého řádu a vyšší.
> 


Náš systém poté automaticky detekuje IP adresu/adresy Vašich webových stránek nakonfigurované na Vaší doméně či subdoméně.

- Pokud disponujete větším množstvím IP adres, vyberte jednu.
- Zvolte geografickou zónu Vaší služby SSL Gateway.
- Pokud je DNS zóna dané domény či sub-domény pod správou Vašeho uživatelského účtu OVH, zaškrtněte příslušné pole. Následně bude provedena automatická konfigurace domény/sub-domény na Vaší službu SSL Gateway.
- Klikněte na tlačítko `Objednat`{.action}.


![objednani zdarma](images/3-en.png){.thumbnail}



> [!primary]
>
> Pokud pro své webové stránky používáte více IP adres, vyberte v průběhu objednávky pouze jednu z nich.
> Pokud využíváte službu Advanced, následně se Vám v rámci Zákaznickém prostoru OVH zpřístupní možnost přidání až dvou dodatečných IP adres.
> 

Překontrolujte si zadané údaje a potvrďte svou objednávku.


## Konfigurace DNS zóny

Pokud jste při vytváření objednávky nezaškrtli pole pro automatickou konfiguraci, obdržíte od nás e-mail s požadavkem na přesměrování své domény či sub-domény na infrastrukturu OVH (učiňte tak prosím do 3 dnů od obdržení e-mailu).


> [!warning]
>
> Pokud konfiguraci DNS zóny neprovedete do 3 dnů od obdržení e-mailu, bude Vaše objednávka stornována.
> 

- Případ A: Vaše DNS zóna je spravována DNS servery OVH.
    - Pokud je Váš uživatelský účet veden jako administrátorský či technický kontakt dané DNS zóny, je zapotřebí provést její modifikaci v Zákaznickém prostoru OVH.
    - Pokud nejste vedeni jako kontakt dané DNS zóny, kontaktujte prosím osobu zodpovědnou za její správu a proveďte modifikaci.


> [!primary]
>
> Dostupná příručka: How to edit my DNS zone (ENG).
> 

> [!faq]
>
> Případ B: Vaše DNS zóna není spravována DNS servery OVH.
>> 
>>     - V takovém případě stačí upravit IP adresu v DNS zóně prostřednictvím rozhraní pro správu dedikovaného serveru či zákaznického prostoru Vašeho providera.
>

Jakmile naše infrastruktura zpracuje provedené změny, obdržíte od nás e-mail s potvrzením.



> [!warning]
>
> Veškeré změny provedené v rámci Vaší DNS zóny se projeví do 24 hodin od uložení, protože je potřeba vyčkat na provedení aktualizace cache pamětí u poskytovatelů internetového připojení.
> 