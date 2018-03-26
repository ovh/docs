---
title: Migrace e-mailovych uctu prostrednictvim OMM
slug: migrace-emailovych-uctu-prostrednictvim-ovh-mail-migrator
legacy_guide_number: 1624
excerpt: Seznameni s nastrojem OVH Mail Migrator
---

S pomocí nástroje OMM (OVH Mail Migrator) můžete snadno a rychle migrovat veškerý obsah svých Exchange účtů (e-maily, kontakty, kalendáře, úkoly) bez nutnosti exportu ve formátu .pst (což může být velmi složitý a zdlouhavý proces).

Ze všeho nejdříve přejděte na následující odkaz: [OVH Mail Migrator](https://omm.ovh.net){.external}.


## Spusteni nove migrace
Kliknutím na tlačítko `New Migration`{.action} budete přeneseni do následujícího rozhraní:


![emails](images/2795_en.png){.thumbnail}


### Zdrojovy ucet
Zvolte svůj zdrojový účet a zadejte nastavení svého serveru.

Pokud je Váš zdrojový účet hostován u OVH, můžete zvolit možnost **Hosted by OVH** (Autodetect). Zadejte e-mailovou adresu a klikněte na **Detect Settings**.

Následně budete požádáni o zadání přístupového hesla.



> [!primary]
>
> Příklad: migrace z MX Plan na E-mail Pro
> Server type: Hosted by OVH
> Login: zadejte svou e-mailovou adresu MX Plan
> Klikněte na Detect Settings
> Password: zadejte své přístupové heslo
> 


### Cilovy ucet

![emails](images/2796_en.png){.thumbnail}

Zvolte typ svého nového účtu. Zadejte e-mailovou adresu a přístupové heslo. Nastavení serveru bude vyplněno automaticky.



> [!primary]
>
> Příklad: migrace z MX Plan na E-mail Pro
> Server type: Hosted by OVH
> Login: zadejte svou adresu E-mail Pro
> Klikněte na Detect Settings
> Password: zadejte heslo ke svému účtu E-mail Pro
> 


### Moznosti
Zvolte jednotlivé prvky, které si přejete migrovat:

`Emails`{.action}: migrace e-mailů se zachováním hiearchie složek.

`Calendars`{.action}: migrace kalendářů připojených k účtu. Jednotlivé události budou zachovány. Žádosti o účast na událostech nebudou znovu vytvořeny.

`Contacts`{.action}: migrace kontaktů.

`Inbox rules`{.action}: migrace specifických pravidel pro příchozí poštu (vyžadován Exchange 2010 či vyšší).

`Contact groups`{.action}: migrace skupinových kontaktů.

`Out of office settings`{.action}: migrace pravidel definovaných pro "out of office".

`Tasks`{.action}: migrace úkolů.


![emails](images/3768_en.png){.thumbnail}


### Dokonceni migrace
V případě migrace z POP/IMAP na E-mail Pro či Exchange lze zvolit pouze možnost `Emails`{.action}.

V případě, že si přejete dostávat notifikace o probíhající migraci, zadejte sekundární e-mailovou adresu.

Jakmile vyplnítě všechna požadovaná pole, klikněte na tlačítko `Start migration`{.action}.

Pokud zadáte neplatné přihlašovací údaje (login/heslo), zobrazí se následující chybové hlášení:


![emails](images/2441.png){.thumbnail}

Migrace se spustí ihned po vytvoření migračního příkazu.

- Proces migrace můžete sledovat v následujícím rozhraní:


![emails](images/2798_en.png){.thumbnail}



> [!success]
>
> - 
> Důležité upozornění: poznamenejte si číslo migračního příkazu (task ID). Bez tohoto čísla nebudete moci migrační proces později vyhledat.
> 
> 


## Import souboru PST
Pokud si do svého e-mailového účtu přejete importovat soubor s koncovkou .PST, můžete tak učinit prostřednictvím volby `PST Migration`{.action}.


![emails](images/3769_EN.png){.thumbnail}

Klikněte na tlačítko `Start migration`{.action}

Pomocí volby `Browse`{.action} vyberte soubor .PST určený pro import.


![emails](images/3770.png){.thumbnail}

Před zahájením migrace budete požádáni o zadání hesla k cílovému účtu.

Po zahájení procesu dojde k zobrazení identifikátoru migrace (migration ID), bez něhož nebude možné v migraci pokračovat.


## Sledovani probihajici migrace
Ke sledování jednotlivých fází migračního procesu budete potřebovat:

- Číslo migračního příkazu (task ID, viz předchozí krok).
- Zdrojovou e-mailovou adresu.

Vyplňte požadovaná pole a klikněte na talčítko `Follow`{.action}.


![emails](images/2799_en.png){.thumbnail}

V následujícím okně se zobrazí informace o probíhající migraci. Toto rozhraní skýtá informace o ukončených a probíhajících fázích migračního procesu.

- 
    1. Číslo migračního příkazu (task ID)
- 
    1. Datum vytvoření migrace
- 
    1. Poslední aktualizace
- 
    1. Tlačítko `Rollback`{.action} použijte v případě, že si svůj účet přejete vrátit do původního stavu (před migrací).


![emails](images/2800_en.png){.thumbnail}


### Zruseni migrace
**Cancel**: dokončí právě probíhající operace a zruší následující kroky.

*Příklad: právě probíhá migrace Vašich kontaktů následovaná migrací Vašich kalendářů.* *Pokud kliknete na tlačítko "Cancel", program dokončí migraci Vašich kontaktů,* *avšak migrace Vašich kalendářů (a spolu s ní i celý další migrační proces) bude zrušena.*


### Rollback
Tlačítko `Rollback`{.action} použijte v případě, že si svůj účet přejete vrátit do původního stavu (před migrací). Tato funkce je dostupná pod dobu 48 hodin od dokončení migrace.