---
deprecated: true
title: 'Konfigurace účtu E-mail Pro v rozhraní Gmail'
slug: konfigurace-gmail
excerpt: 'Seznamte se s postupem pro konfiguraci účtu služby E-mail Pro </br>v online rozhraní Gmail'
section: 'Konfigurace e-mailového klienta'
order: 6
---

**Poslední aktualizace 03/08/2018**

## Cíl

Účty služby E-mail Pro je možné propojit s kompatibilními e-mailovými klienty a online rozhraními. Díky tomu můžete odesílat a přijímat zprávy prostřednictvím Vámi preferované platformy.

**Zjistěte, jak nakonfigurovat účet služby E-mail Pro v online rozhraní Gmail.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici služby, za jejichž správu a konfiguraci nesete plnou odpovědnost.  
> 
> Tato příručka slouží jako úvod do obecné problematiky vážící se ke správě Vaší služby. V případě jakýchkoli nejasností doporučujeme kontaktovat profesionálního webmastera či vydavatele příslušného softwaru.  Společnost OVH v tomto ohledu neposkytuje přímou podporu. Další informace naleznete v poslední sekci této příručky.
> 

## Prerekvizity

- Služba [E-mail Pro](https://www.ovh.cz/emails/email-pro/){.external}.
- Přihlašovací údaje k účtu služby E-mail Pro, který si přejete nakonfigurovat.
- Přihlašovací údaje k účtu Gmail, na němž si svůj účet E-mail Pro přejete nakonfigurovat.

> [!primary]
>
> Tato příručka udává postup pro konfiguraci účtu služby E-mail Pro na nejnovější verzi rozhraní Gmail. Konfigurační postup však lze aplikovat i v případě starších verzí. 
>

## Postup

### Fáze 1: přidání účtu E-mail Pro k rozhraní Gmail

Prostřednictvím webového prohlížeče se přihlaste ke svému Gmail účtu. 

Po přihlášení klikněte na ikonku ozubeného kolečka v pravé části rozhraní a vyberte možnost `Nastavení`{.action}. Následně přejděte do záložky `Účty a import`{.action}. 

![emailpro](images/configuration-gmail-web-step1.png){.thumbnail}

V kolonce `Zkontrolovat poštu z jiných účtů` klikněte na tlačítko `Přidat e-mailový účet`{.action}. V dialogovém okně vyplňte svou E-mail Pro adresu a pokračujte kliknutím na tlačítko `Další`{.action}. Zaškrtněte možnost `Importovat e-maily z mého druhého účtu (POP3)`{.action} a opět klikněte na tlačítko `Další`{.action}.

![emailpro](images/configuration-gmail-web-step2.png){.thumbnail}

Zadejte konfigurační parametry POP serveru (příchozí server):

|Informace|Popis| 
|---|---| 
|Uživatelské jméno|Zadejte **kompletní e-mailovou adresu**.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|
|POP server|Zadejte následující server: „pro1.mail.ovh.net“.|
|Port|Vyberte port 995.|

Informace týkající se volitelných možností:

- **Ponechat na serveru kopii načtené zprávy**: zaškrtněte, pokud si přejete ukládat kopie přijatých zpráv na našich serverech.

- **Při načítání dat vždy použít zabezpečené připojení (SSL)**: bez zaškrtnutí této volby nebude možné navázat spojení s Vaší E-mail Pro adresou.

- **Příchozí zprávy označit štítkem**: po zaškrtnutí této volby budou všechny zprávy importované z Vaší E-mail Pro adresy označeny speciálním štítkem.

- **Archivovat příchozí zprávy (přeskočit doručenou poštu)**: po zaškrtnutí této volby se zprávy importované z Vaší E-mail Pro adresy nebudou zobrazovat ve Vaší doručené poště Gmail.


Po vyplnění požadovaných údajů klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně. 

![emailpro](images/configuration-gmail-web-step3.png){.thumbnail}

Pokud si prostřednictvím rozhraní Gmail zároveň přejete odesílat poštu ze své adresy E-mail Pro, zaškrtněte volbu `Ano, přeji si odesílat poštu z adresy (...)`{.action} a klikněte na tlačítko`Další`{.action}. 

Následně vyplňte jméno odesílatele, které se zobrazí při odesílání pošty z dané e-mailové adresy, zaškrtněte volbu `Použít jako alias`{.action} a klikněte na tlačítko `Další krok`{.action}.

![emailpro](images/configuration-gmail-web-step4.png){.thumbnail}

Zadejte konfigurační parametry SMTP serveru (odchozí server):

|Informace|Popis| 
|---|---| 
|SMTP server|Zadejte následující server: „pro1.mail.ovh.net“.|
|Port|Vyberte port 587.|
|Uživatelské jméno|Zadejte **kompletní e-mailovou adresu**.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|

Zaškrtněte volbu `Zabezpečení připojení pomocí TLS (doporučeno)` a klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně. 

![emailpro](images/configuration-gmail-web-step5.png){.thumbnail}

Nyní se přihlaste k účtu služby E-mail Pro, který jste přidali, otevřete zprávu s potvrzením od Gmailu a klikněte na ověřovací odkaz.
 Ke svému účtu E-mail Pro se můžete přihlásit prostřednictvím následujícího webového rozhraní: <https://pro1.mail.ovh.net>. 

Po úspěšném ověření se Vaše adresa E-mail Pro zobrazí v záložce `Účty a import`{.action}, z níž byl celý proces přidání účtu původně iniciován.

### Fáze 2: používání adresy E-mail Pro prostřednictvím rozhraní Gmail

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím rozhraní Gmail.

Mějte prosím na paměti, že pro odesílání zpráv z Vaší adresy E-mail Pro prostřednictvím rozhraní Gmail je vždy zapotřebí kliknout do pole `Od`{.action} v rozepsaném e-mailu a vybrat adresu, ze které si zprávu přejete odeslat. 

![emailpro](images/configuration-gmail-web-step6.png){.thumbnail}

Ke své e-mailové adrese máte i nadále přístup prostřednictvím webového rozhraní OVH: <https://pro1.mail.ovh.net>. 

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.