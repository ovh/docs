---
deprecated: true
title: 'Obnovení FTP zálohy'
slug: obnoveni-zalohy-ftp-filezilla-zakaznicky-prostor
excerpt: 'Zjistěte, jak obnovit zálohu souborů na Vašem FTP úložišti'
section: 'FTP a SSH'
---

**Poslední aktualizace 24/09/2018**

## Cíl

V rámci svého webhostingového řešení OVH máte přístup k FTP prostoru, do nějž se ukládají soubory Vašich webových stránek. Za určitých okolností může nastat situace, kdy budete potřebovat soubory na svém FTP úložišti obnovit ze zálohy (např. z důvodu chybné manipulace s některým z konfiguračních souborů).

**Zjistěte, jak obnovit kompletní či parciální zálohu svého FTP úložiště.**

## Prerekvizity

- [Webhostingové řešení OVH](https://www.ovh.cz/webhosting/){.external} (neplatí pro Cloud Web).
- Přístup do administračního rozhraní webhostingu prostřednictvím [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} nebo přístupové údaje pro připojení k FTP. 

## Postup

Než začnete, ujistěte se, že Vám následující body obnovení umožní navrátit Vaše soubory do požadovaného funkčního stavu:

- Dnes, 00:01 ráno
- Včera, 00:01 ráno
- Předevčírem, 00:01 ráno
- Minulá neděle, 01:00 ráno
- Předminulá neděle, 01:00 ráno

Obnovení zálohy webhostingu nelze na straně společnosti OVH provést mimo rámec výše uvedených bodů obnovení. V opačném případě nezbývá než webhosting obnovit prostřednictvím osobní zálohy. 

Soubory na svém webhostingu můžete obnovit dvěma různými způsoby:

|Metoda obnovení|Popis|
|---|---|
|Obnovení pomocí Zákaznického prostoru OVH|Dojde ke kompletní obnově FTP úložiště. Aktuální obsah bude nahrazen obsahem zvolené zálohy.|
|Obnovení pomocí FTP klienta|Tato metoda umožňuje parciální obnovení souborů na Vašem FTP úložišti, bez nutnosti obnovení celého obsahu. |

V závislosti na zvolené metodě pokračujte k příslušné části této příručky:

- [Obnovení zálohy pomocí Zákaznického prostoru OVH](https://docs.ovh.com/cz/cs/hosting/obnoveni-zalohy-ftp-filezilla-zakaznicky-prostor/#obnoveni-zalohy-pomoci-zakaznickeho-prostoru-ovh){.external}.

- [Obnovení parciální zálohy pomocí FTP klienta](https://docs.ovh.com/cz/cs/hosting/obnoveni-zalohy-ftp-filezilla-zakaznicky-prostor/#obnoveni-parcialni-zalohy-pomoci-ftp-klienta){.external}.

### Obnovení zálohy pomocí Zákaznického prostoru OVH

Ze všeho nejdříve se přihlaste do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}, v levém postranním panelu klikněte na položku `Hostingy`{.action} a vyberte webhostingové řešení, v jehož rámci si přejete provést požadované úpravy. Přejděte do záložky `FTP-SSH`{.action} a klikněte na tlačítko `Obnovení zálohy`{.action}.

![backupftp](images/backupftp-step1.png){.thumbnail}

Ze seznamu vyberte požadovaný bod obnovení:

|Hodnota|Bod obnovení|
|---|---|
|Obnovení zálohy z předchozího dne|Dnes, 00:01 ráno|
|Obnovení zálohy z doby 2 dny zpět|Včera, 00:01 ráno|
|Obnovení zálohy z doby 3 dny zpět|Předevčírem, 00:01 ráno|
|1 týden|Minulá neděle, 01:00 ráno|
|2 týdny|Předminulá neděle, 01:00 ráno|

Zvolte požadovaný bod obnovení a klikněte na tlačítko `Další`{.action}. 

![backupftp](images/backupftp-step2.png){.thumbnail}

Mějte na paměti, že v důsledku obnovení dojde ke ztrátě všech dat, která byla na úložiště nahrána po vytvoření bodu obnovení. 

Svou volbu potvrďte kliknutím na tlačítko `Schválit`{.action}.

### Obnovení parciální zálohy pomocí FTP klienta

Proces je rozdělen do několika fází. Než začnete, ujistěte se, že disponujete přístupovými údaji ke svému FTP prostoru. 

> [!warning]
>
> Toto řešení předpokládá základní znalosti na poli zacházení se zvoleným FTP klientem či rozhraním. Níže naleznete pouze obecné informace týkající se postupu pro obnovení parciální zálohy Vašeho webhostingu prostřednictvím externího klienta. V případě jakýchkoli nejasností vyhledejte pomoc profesionálního webmastera. Společnost OVH v tomto ohledu neposkytuje přímou podporu.
>

#### Fáze 1: volba FTP klienta

V první řadě je zapotřebí vybrat software či prostředí, které pro připojení ke svému FTP prostoru použijete. Pokud již FTP klienta máte, pokračujte k další části této příručky. V opačném případě doporučujeme použít jedno z následujících řešení:

- **FileZilla**: klienta je zapotřebí stáhnout a nainstalovat z webových stránek vydavatele softwaru. Detailní informace o použití klienta FileZilla naleznete v následující dokumentaci: [Použití klienta FileZilla s webhostingovým řešením OVH (EN)](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/){.external}. Pozor, tato dokumentace neslouží jako substitut za oficiální dokumentaci vydavatele softwaru.

- **Cyberduck**: klienta je zapotřebí stáhnout a nainstalovat z webových stránek vydavatele softwaru. Detailní informace o použití klienta Cyberduck naleznete v následující dokumentaci: [Použití klienta Cyberduck s webhostingovým řešením OVH](https://docs.ovh.com/cz/cs/hosting/webhosting_uzivatelska_prirucka_cyberduck_mac/){.external}. Pozor, tato dokumentace neslouží jako substitut za oficiální dokumentaci vydavatele softwaru.

- **Rozhraní FTP Explorer**: rozhraní je k dispozici v [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Za účelem přístupu k rozhraní FTP Explorer se přihlaste do svého Zákaznického prostoru OVH, v levém postranním panelu klikněte na položku Hostingy a vyberte příslušné  webhostingové řešení. Přejděte do záložky `FTP-SSH`{.action} a klikněte na tlačítko `FTP Explorer`{.action}.

![backupftp](images/backupftp-step3.png){.thumbnail}

#### Připojení k FTP prostoru a přístup k záloze

Pro získání přístupu k zálohám je zapotřebí připojit se k zálohované verzi FTP prostoru Vašeho webhostingového řešení. Za tímto účelem musíte mít k dispozici přístupové údaje FTP (uživatelské jméno, heslo a název serveru).

Tyto informace naleznete v základním administračním rozhraní svého webhostingu (záložka `FTP-SSH`{.action}). Pokud jste heslo ztratili nebo k němu z nějakého důvodu nemáte přístup, postupujte podle následující dokumentace: [Změna FTP hesla](https://docs.ovh.com/cz/cs/hosting/zmena-hesla-ftp/){.external}.

![backupftp](images/backupftp-step4.png){.thumbnail}

Pro připojení k FTP záloze je zapotřebí přihlásit se pomocí kombinace FTP uživatelského jména a názvu příslušné zálohy. V následující tabulce naleznete veškeré potřebné údaje:

|Datum vytvoření zálohy|Přípona|Příklad výsledného loginu|
|---|---|---|
|Dnes, 00:01 ráno|-snap0|ftpuzivatel**-snap0**|
|Včera, 00:01 ráno|-snap1|ftpuzivatel**-snap1**|
|Předevčírem, 00:01 ráno|-snap2|ftpuzivatel**-snap2**|
|Minulá neděle, 01:00 ráno|-snap3|ftpuzivatel**-snap3**|
|Předminulá neděle, 01:00 ráno|-snap4|ftpuzivatel**-snap4**|

Generickou hodnotu „ftpuzivatel“ nahraďte svým skutečným uživatelským jménem. 

Způsob připojení k FTP prostoru se liší v závislosti na softwaru či rozhraní, které jste se rozhodli použít. Na následujícím obrázku naleznete příklad připojení prostřednictvím rozhraní FTP Explorer.

![backupftp](images/backupftp-step5.png){.thumbnail}

#### Fáze 3: stažení zálohovaných souborů

Po připojení k příslušné FTP záloze je zapotřebí identifikovat a stáhnout soubory, které si přejete na svém webhostingu obnovit. Příslušné soubory vyhledejte pomocí průzkumníka souborů a následně uložte do adresáře ve svém počítači. Postup se může lišit v závislosti na softwaru či rozhraní, které pro připojení k FTP prostoru používáte.

Jakmile máte ve svém počítači uložené veškeré soubory, které si přejete obnovit, ukončete aktuálně otevřenou relaci.

#### Fáze 4: obnovení zálohovaných souborů

Navažte nové připojení ke svému FTP úložišti, tentokrát však již za použití standardních přihlašovacích údajů.  Tímto způsobem se připojíte k aktuální verzi, jejíž soubory je zapotřebí nahradit.

 Pomocí průzkumníka souborů vyhledejte příslušné soubory a nahraďte je zálohou, kterou jste si v rámci předešlého kroku uložili do svého počítače.

## Kam dál

[Použití klienta FileZilla s webhostingovým řešením OVH (EN)](https://docs.ovh.com/gb/en/hosting/web_hosting_filezilla_user_guide/){.external}.

[Použití klienta Cyberduck s webhostingovým řešením OVH](https://docs.ovh.com/cz/cs/hosting/webhosting_uzivatelska_prirucka_cyberduck_mac/){.external}.

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.