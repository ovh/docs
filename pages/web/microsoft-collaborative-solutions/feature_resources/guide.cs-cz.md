---
deprecated: true
title: 'Exchange 2013/2016: How to use resource accounts'
excerpt: 'Tato příručka popisuje, jak přidávat a používat účty zdrojů v Exchange 2013.'
slug: exchange_20132016_how_to_use_resource_accounts
legacy_guide_number: g1325
---


## Vytvoření účtu zdroje: 1. část
In your [Customer account](https://www.ovh.com/manager/web/login.html), select your Exchange service under "Exchange".

Select "Advanced Mode" in the top right-hand corner. 

Click "Resources" then "Add a resource account" on the right.

![](images/img_1346.jpg){.thumbnail}


## Vytvoření účtu zdroje: 2. část
Vyplňte požadovaná pole:

Název zdroje: uveďte název, pod kterým chcete, aby se zdroj zobrazoval.

E-mail zdroje: zvolte si e-mailovou adresu pro zdroj. Nesmí jít o již existující e-mailovou adresu.

Kapacita: informativní údaj o velikosti zdroje.

Povolit konflikty: Jestliže je tato možnost zaškrtnuta, pak nebude zobrazeno varování, jestliže si některý uživatel bude chtít zamluvit zdroj, který se již používá.

Typ zdroje: jsou dostupné dva typy zdrojů: "Místnost" a "Vybavení".

Pro dokončení tohoto kroku klikněte na "Další" a poté potvrďte vytvoření zdroje kliknutím na "Vytvořit".

![](images/img_1347.jpg){.thumbnail}


## Vytvoření účtu zdroje: 3. část
Jakmile je zdroj vytvořen, můžete ho upravit či vymazat.

Je zde zobrazeno shrnutí v tabulce s názvy, typy zdrojů a e-mailovou adresou zdroje.

Účty zdrojů jsou aktivovány a jak tyto účty využívat se dozvíte v pokračování této příručky.

![](images/img_1348.jpg){.thumbnail}


## Kalendář zdroje: 1. část
Here's how to view the resource calendar via OWA.

Open [OWA](https://ex.mail.ovh.net/owa/).

Log in with your full email address and password.

Select "Calendar", right-click on "OTHER CALENDARS", then choose "Open Calendar".

![](images/img_1349.jpg){.thumbnail}


## Kalendář zdroje: 2. část
Enter the resource name. As it is part of the GAL (Global address list), the Exchange server will find it automatically.

Select "Open" to complete the task.

![](images/img_1350.jpg){.thumbnail}


## Kalendář zdroje: 3. část
Vytvořený kalendář zdroje je nyní zobrazen v rozhraní OWA.

Nahoře vlevo si všimněte tlačítka "Nová událost". Toto tlačítko použijete při vytváření události pro Vaše zaměstnance.

![](images/img_1351.jpg){.thumbnail}


## Správa zdroje: 1. část
Vytvoříme událost, která bude využívat zdroj, který jsme vytvořili v předchozí části příručky.

Pro toto si v "Kalendář" zvolte "Nová událost".

Zobrazí se Vám nové rozhraní.

Vyplňte požadovaná pole:

Událost: název události.

Umístění: V této části můžete zadat zdroj typu "Místnost".

Účastníci: Zde zadejte účastníky a zdroje typu "Vybavení".

Začátek: Uveďte začátek události.

Doba trvání: Uveďte dobu trvání události.

Zobrazit jako: Uveďte stav, který chcete zobrazit v kalendáři.

Upozornění: Uveďte kdy se má provést upozornění na událost.

Opakování: Uveďte frekvenci opakování události.

Pro dokončení události klikněte na "Odeslat".

![](images/img_1352.jpg){.thumbnail}


## Správa zdroje: 2. část
Událost "meeting" byla vytvořena ve zdroji "MyRoom1", který je typu místnost a byla vybavena zdrojem "equipment1".

![](images/img_1356.jpg){.thumbnail}


## Správa zdroje: 3. část
Z rozhraní kalendáře můžete vidět stavy zdrojů.

Můžeme vidět, že po přidání události je stav zdroje v současnosti "Busy".

![](images/img_1357.jpg){.thumbnail}


## Správa zdroje: 4. část
Přidává se nová událost se stejným datem, jako má předchozí událost.

Vidíme upozornění na potvrzení či zamítnutí události.

Naše druhá událost "speech" a zdroj "MyRoom1" byla zamítnuta díky konfliktu.
Na požadované datum je již naplánována událost, a nedošlo tedy k autorizaci tohoto zdroje díky konfliktu, takže byl náš požadavek na novou událost zamítnut.

Zdroj "equipment1" akceptoval událost.
Jiná událost je již naplánována na stejné datum, ale správa konfliktů je u tohoto zdroje deaktivována, takže naše žádost o vytvoření události byla schválena.

![](images/img_1358.jpg){.thumbnail}

