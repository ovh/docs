---
deprecated: true
title: 'Webhosting e-mail: Příručka nastavení Windows Phone'
excerpt: Příručka nastavení e-mailového účtu na webhostingu na Windows Phone
slug: webhosting_e-mail_prirucka_nastaveni_windows_phone
legacy_guide_number: g1346
---


## Část 1: Parametry
Nejprve klikněte na ikonu "Parametry".

V naší ukázce je účet konfigurován jako POP na telefonu Nokia Lumia 625 s Windows Phone 8.0.

Ujistěte se, že během přidávání účtu máte k dispozici připojení k Internetu pomocí 3G nebo Wi-Fi.

![](images/img_1501.jpg){.thumbnail}


## Část 2: Systém
Pokud chcete přidat e-mailový účet, vyberte "e-mail + účty".

![](images/img_1502.jpg){.thumbnail}


## Část 3: Přidání účtu
Nyní vyberte "přidat účet".

Všimněte si, že na této úrovni existují i jiné typy předkonfigurovaných účtů.

![](images/img_1503.jpg){.thumbnail}


## Část 4: Typ účtu
Nabízíme výběr požadovaného typu účtu.

Vyberte "jiný účet", abyste mohli přidat účet typu POP nebo IMAP.

![](images/img_1504.jpg){.thumbnail}


## Část 5: Konfigurace účtu
Do prvního políčka zadejte celou svoji e-mailovou adresu.

Zadejte také své heslo, které získáte zde:
[manager](https://www.ovh.com/manager/web/login/)

Po výběru "Připojit" se zobrazí varovná zpráva.

Pro pokračování v konfiguraci účtu klikněte na "další volby".

![](images/img_1505.jpg){.thumbnail}


## Část 6: Pokročilá konfigurace
Pro přístup k pokročilým nastavením e-mailového účtu a dokončení konfigurace POP nebo IMAP účtu vyberte "E-mail na Internetu".

![](images/img_1506.jpg){.thumbnail}


## Část 7: Parametry e-mailového účtu
Vyplňte požadované informace:

Název účtu: název, který se zobrazuje v telefonu

Vaše jméno: jméno použité k odesílání zpráv

Server příchozí pošty: SSL0.OVH.NET

Typ účtu: POP3(také jej lze konfigurovat jako IMAP - přeskočte na konec této příručky).

Název uživatele: celá e-mailová adresa

Heslo: heslo mailového účtu webhostingu OVH získané přes[Manager](https://www.ovh.com/auth/?action=gotomanager)

Server odchozí pošty (SMTP): SSL0.OVH.NET

Musíte zaškrtnout obojí: "Server odchozí pošty vyžaduje autentizaci" a "Použít stejný login a heslo i pro odesílání pošty"

Pro pokračování "se přihlašte".

![](images/img_2401.jpg){.thumbnail}

- Autentifikace na serveru odchozí pošty je nutná pro odesílání e-mailů přes naše SMTP servery.

- Pokud není autentifikace aktivována, bude založen ticket Open SMTP, který vás bude informovat o tom, že autentifikace "POP before SMTP" již není podporována. Před odesíláním e-mailů pak musíte aktivovat autentifikaci na serveru odchozí pošty.




## Část 8: Dokončení
Váš e-mailový účet je nyní správně nakonfigurován a bude zobrazen v patřičném rozhraní vašeho telefonu.

![](images/img_1508.jpg){.thumbnail}


## Přístup k e-mailům
Vaše e-maily jsou nyní přístupné z úvodní stránky vašeho mobilního telefonu.

![](images/img_1509.jpg){.thumbnail}


## Konfigurace POP
Tyto informace použijete pro konfiguraci e-mailových účtů POP.

Konfigurace POP se zabezpečením SSL aktivní nebo neaktivní:

E-mailová adresa: Celá e-mailová adresa.
Heslo: Heslo, které jste si zvolili v [zákaznickém prostoru](https://www.ovh.com/auth/?action=gotomanager).
Uživatel: Celá e-mailová adresa.
Příchozí server: Server příchozí pošty: SSL0.OVH.NET
Port serveru příchozí pošty: Port serveru příchozí pošty: 995 nebo 110
Odchozí server: Server odchozí pošty: SSL0.OVH.NET
Port serveru odchozí pošty: Port serveru odchozí pošty: 465 nebo 587

Porty 110 a 587 odpovídají zabezpečení pomocí SSL, které je neaktivní.
Porty 995 a 465 odpovídají aktivnímu zabezpečení pomocí SSL.


- Musíte aktivovat [autentifikaci](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) odchozího SMTP serveru.


|Porty|SSLaktivní|SSLneaktivní|
|Příchozí|995|110|
|Odchozí|465|587|




## Konfigurace IMAP
Tyto informace použijete pro konfiguraci e-mailových účtů IMAP.

Konfigurace IMAP se zabezpečením SSL aktivní nebo neaktivní:

E-mailová adresa: Celá e-mailová adresa.
Heslo: Heslo, které jste si zvolili v [zákaznickém prostoru](https://www.ovh.com/auth/?action=gotomanager).
Uživatel: Celá e-mailová adresa.
Příchozí server: Server příchozí pošty: SSL0.OVH.NET
Port serveru příchozí pošty: Port serveru příchozí pošty: 993 nebo 143
Odchozí server: Server odchozí pošty: SSL0.OVH.NET
Port serveru odchozí pošty: Port serveru odchozí pošty: 465 nebo 587

Porty 143 a 587 odpovídají zabezpečení pomocí SSL, které je neaktivní.
Porty 993 a 465 odpovídají aktivnímu zabezpečení pomocí SSL.


- Musíte aktivovat [autentifikaci](#configuration_du_compte_e-mail_mutualise_sous_windows_phone_8_partie_7_parametres_du_compte_e-mail) odchozího SMTP serveru.


|Porty|SSLaktivní|SSLneaktivní|
|Příchozí|993|143|
|Odchozí|465|587|



