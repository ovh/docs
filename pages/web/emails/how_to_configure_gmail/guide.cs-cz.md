---
deprecated: true
title: 'Konfigurace e-mailových účtů služby MX Plan v rozhraní Gmail'
slug: konfigurace-mxplan-gmail
excerpt: 'Seznamte se s postupem pro konfiguraci svých e-mailových účtů v online rozhraní Gmail'
section: 'Ostatní platformy'
---

**Poslední aktualizace 03/08/2018**

## Cíl

E-mailové adresy služby MX Plan je možné propojit s kompatibilními e-mailovými klienty a online rozhraními. Díky tomu můžete odesílat a přijímat zprávy prostřednictvím Vámi preferované platformy.

**Zjistěte, jak nakonfigurovat e-mailovou adresu služby MX Plan v online rozhraní Gmail.**

> [!warning]
>
> Společnost OVH Vám dává k dispozici služby, za jejichž správu a konfiguraci nesete plnou odpovědnost. 
> 
> Tato příručka slouží jako úvod do obecné problematiky vážící se ke správě Vaší služby. V případě jakýchkoli nejasností doporučujeme kontaktovat profesionálního webmastera či vydavatele příslušného softwaru. Společnost OVH v tomto ohledu neposkytuje přímou podporu. Další informace naleznete v poslední sekci této příručky.
> 

## Prerekvizity

- E-mailová adresa služby MX Plan (součást nabídky MX Plan nebo [webhostingového řešení OVH](https://www.ovh.cz/webhosting/){.external}).
- Přihlašovací údaje k e-mailové adrese OVH, kterou si přejete nakonfigurovat.
- Přihlašovací údaje k účtu Gmail, na němž si svou e-mailovou adresu OVH přejete nakonfigurovat.


> [!primary]
>
> Tato příručka udává postup pro konfiguraci e-mailové adresy OVH na nejnovější verzi rozhraní Gmail. Konfigurační postup však lze aplikovat i v případě starších verzí.
>

## Postup

### Fáze 1: přidání e-mailového účtu k rozhraní Gmail

Prostřednictvím webového prohlížeče se přihlaste ke svému Gmail účtu. Po přihlášení klikněte na ikonku ozubeného kolečka v pravé části rozhraní a vyberte možnost `Nastavení`{.action}.

Následně přejděte do záložky `Účty a import`{.action}. 

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

V kolonce `Zkontrolovat poštu z jiných účtů` klikněte na tlačítko `Přidat e-mailový účet`{.action}. V dialogovém okně vyplňte svou e-mailovou adresu OVH a pokračujte kliknutím na tlačítko `Další`{.action}. Zaškrtněte možnost `Importovat e-maily z mého druhého účtu (POP3)`{.action} a opět klikněte na tlačítko `Další`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Zadejte konfigurační parametry POP serveru (příchozí server):

|Informace|Popis| 
|---|---| 
|Uživatelské jméno|Zadejte **kompletní e-mailovou adresu**.|  
|Heslo|Zadejte heslo ke své e-mailové adrese.|
|POP server|Zadejte následující server: ssl0.ovh.net.|
|Port|Vyberte port 995.|

Informace týkající se volitelných možností:

- **Ponechat na serveru kopii načtené zprávy**: zaškrtněte, pokud si přejete ukládat kopie přijatých zpráv na našich serverech.

- **Při načítání dat vždy použít zabezpečené připojení (SSL)**: bez zaškrtnutí této volby nebude možné navázat spojení s Vaší e-mailovou adresou OVH.

- **Příchozí zprávy označit štítkem**: po zaškrtnutí této volby budou všechny zprávy importované z Vaší e-mailové adresy OVH označeny speciálním štítkem.

- **Archivovat příchozí zprávy (přeskočit doručenou poštu)**: po zaškrtnutí této volby se zprávy importované z Vaší e-mailové adresy OVH nebudou zobrazovat ve Vaší doručené poště Gmail.


Po vyplnění požadovaných informací klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně. 

![mxplan](images/configuration-gmail-web-step3.png){.thumbnail}

Pokud si prostřednictvím rozhraní Gmail zároveň přejete odesílat poštu ze své e-mailové adresy OVH, zaškrtněte volbu `Ano, přeji si odesílat poštu z adresy (...)`{.action} a klikněte na tlačítko`Další`{.action}. 

Následně vyplňte jméno odesílatele, které se zobrazí při odesílání pošty z dané e-mailové adresy, zaškrtněte volbu `Použít jako alias`{.action} a klikněte na tlačítko `Další krok`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Zadejte konfigurační parametry SMTP serveru (odchozí server):

|Informace|Popis| 
|---|---| 
|SMTP server|Zadejte následující server: ssl0.ovh.net.|
|Port|Vyberte port 587.|
|Uživatelské jméno|Zadejte **kompletní e-mailovou adresu**.|  
|Heslo|Zadejte heslo ke svému e-mailovému účtu.|

Zaškrtněte volbu `Zabezpečení připojení pomocí TLS (doporučeno)` a klikněte na tlačítko `Přidat účet`{.action}. Pokud jste zadali správné údaje, připojení proběhne úspěšně. 

![mxplan](images/configuration-gmail-web-step5.png){.thumbnail}

Nyní se přihlaste k e-mailovému účtu OVH, který jste přidali, otevřete zprávu s potvrzením od Gmailu a klikněte na ověřovací odkaz.
Ke svému e-mailovému účtu OVH se můžete přihlásit prostřednictvím následujícího webového rozhraní: <https://www.ovh.cz/mail/>. 

Po úspěšném ověření se Vaše e-mailová adresa OVH zobrazí v záložce `Účty a import`{.action}, z níž byl celý proces přidání účtu původně iniciován.

### Fáze 2: používání e-mailové adresy OVH prostřednictvím rozhraní Gmail

Po úspěšném dokončení konfigurace můžete svůj e-mail začít naplno využívat. Od teď můžete odesílat a přijímat zprávy prostřednictvím rozhraní Gmail.

Mějte prosím na paměti, že pro odesílání zpráv z Vaší e-mailové adresy OVH prostřednictvím rozhraní Gmail je vždy zapotřebí kliknout do pole `Od`{.action} v rozepsaném e-mailu a vybrat adresu, ze které si zprávu přejete odeslat. 

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Ke své e-mailové adrese máte i nadále přístup prostřednictvím webového rozhraní OVH: <https://www.ovh.cz/mail/>. 

## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.