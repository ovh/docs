---
deprecated: true
title: 'Backup Storage'
slug: backup-storage
excerpt: 'Zjistěte, jak aktivovat a používat funkci Backup Storage na svém dedikovaném serveru'
section: Úložiště
---

**Poslední aktualizace 03/09/2018**

## Cíl

Každý [dedikovaný server OVH](https://www.ovh.cz/dedikovane_servery/){.external} je dodáván s 500 GB prostoru pro ukládání datových záloh. Tento záložní prostor, který je označován jako Backup Storage, lze kdykoli aktivovat prostřednictvím Zákaznického prostoru OVH.

Zjistěte, jak aktivovat a používat funkci Backup Storage na svém dedikovaném serveru.

## Prerekvizity

- [Dedikovaný server OVH](https://www.ovh.cz/dedikovane_servery/){.external}.
- Přístup do [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.


## Postup

### Aktivace Backup Storage

Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} a přejděte do `základního administračního rozhraní`{.action} svého dedikovaného serveru. Přejděte do záložky `Backup Storage`{.action} a klikněte na tlačítko `Aktivovat Backup Storage`{.action}.

![Aktivace Backup Storage](images/backup_storage_activation.png){.thumbnail}

Do své e-mailové schránky od nás obratem obdržíte aktivační e-mail. Služba Backup Storage bude dostupná v rámci několika minut.


### Konfigurace přístupů

Přístup k Vašemu Backup Storage je omezen pro jednotlivé IP adresy prostřednictvím seznamu pro řízení přístupů (ACL). Ve výchozí konfiguraci jsou Vaše IP adresy autorizovány pro FTP/FTPS přístup. Ostatní protokoly nejsou ve výchozím nastavení autorizovány. Pro jejich autorizaci je nejdříve zapotřebí vytvořit ACL.


#### Vytvoření přístupu

V záložce `Backup Storage`{.action} klikněte na tlačítko `Přidat přístup`{.action}.

![Vytvoření přístupu Backup Storage](images/add_access.png){.thumbnail}

Vyberte blok IP adres, který má být autorizován. Zvolte protokol, který si pro daný blok IP adres přejete autorizovat a klikněte na tlačítko `Další`{.action}.

> [!primary]
>
> Autorizovat lze pouze bloky IP adres, které jsou asociovány s Vaším zákaznickým účtem OVH.
>

![Vytvoření přístupu Backup Storage](images/add_access_ip.png){.thumbnail}

Vytvoření přístupu potvrďte kliknutím na tlačítko `Schválit`{.action}.

![Vytvoření přístupu Backup Storage](images/add_access_confirmation.png){.thumbnail}

Nyní se ke svému Backup Storage můžete připojit prostřednictvím autorizovaných IP adres.


#### Úprava přístupu

Pro modifikaci protokolů autorizovaného bloku IP adres klikněte na ikonku tří teček `(...)`{.action} v pravé části tabulky a vyberte možnost `Změnit přístup`{.action}. Přidejte či odeberte požadovaného protokoly a svůj výběr potvrďte kliknutím na tlačítko `Schválit`{.action}. 

![Úprava přístupu](images/modify_access.png){.thumbnail}


#### Odstranění přístupu

Pro odstranění autorizace pro určitý blok IP adres klikněte na ikonku tří teček `(...)`{.action} v pravé části tabulky a vyberte možnost `Vymazat přístup`{.action}.

![Úprava přístupu](images/delete_access.png){.thumbnail}

Své rozhodnutí potvrďte kliknutím na tlačítko `Schválit`{.action}. Přístup k Backup Storage bude pro daný blok IP adres obratem odstraněn.


### Změna hesla

V záložce Backup Storage klikněte na tlačítko `Zapomenuté heslo?`{.action}. Reset hesla potvrďte kliknutím na tlačítko `Schválit`{.action}.

![Změna hesla](images/forgotten_password.png){.thumbnail}

Do své e-mailové schránky obratem obdržíte e-mail s podrobnými instrukcemi pro obnovení hesla. 


### Odstranění Backup Storage

V záložce Backup Storage klikněte na tlačítko `Odstranit Backup Storage`{.action}. Své rozhodnutí potvrďte kliknutím na tlačítko `Schválit`{.action}.

![Odstranění Backup Storage](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> Požadavek na odstranění Backup Storage nelze vrátit zpět.
> 

Služba bude odstraněna v rámci několika minut.


### Objednání diskového prostoru

V záložce `Backup Storage`{.action} klikněte na tlačítko `Objednat diskový prostor`{.action}. 

![Objednávka diskového prostoru](images/additional_space_order.png){.thumbnail}

Z nabídky zvolte požadovanou úložnou kapacitu a klikněte na tlačítko `Další`{.action}.

![Volba přídavného prostoru](images/additional_space_order_selection.png){.thumbnail}

Seznamte se s příslušnými smluvními podmínkami a svou objednávku potvrďte kliknutím na tlačítko `Schválit`{.action}.

Vaše objednávka bude okamžitě vytvořena. Přídavný diskový prostor bude dostupný ihned po jejím uhrazení. 


### Použití funkce Backup Storage

> [!primary]
>
> V rámci funkce Backup Storage nedochází k automatickému zálohování Vašich dat. Jedná se o funkci nabízející úložný prostor a správu přístupových protokolů. Vytvoření a implementace příslušné strategie zálohování je výhradní záležitostí uživatele služby. 
>


#### FTP/FTPS

##### NcFTP (pro Linux)

Pro zálohování jednotlivých souborů lze použít následující příkaz:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Tento příkaz nepodporuje protokol FTPS. Pokud si přejete přenos dat zabezpečit, použijte raději lftp nebo cURL.**

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **FolderLocation**: cesta k cílovému adresáři, do nějž si soubor přejete nahrát.
* **File**: název souboru, který si přejete nahrát.

Pokud si přejete zálohovat celou složku, jednoduše ji archivujte a nahrajte pomocí následujícího příkazu:

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FolderName**: cesta ke složce, kterou si přejete nahrát.
* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **ArchiveName**: název složky, kterou si přejete nahrát.

Pro stažení archivované složky z Backup Storage úložiště použijte následující příkaz:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **LocalFolder**: cesta k adresáři, do nějž si soubor přejete uložit.
* **File**: cesta k souboru, který si přejete stáhnout.

##### cURL (pro Linux)

> [!primary]
>
> Abyste mohli používat protokol FTPS , musíte nejdříve upravit název svého Backup Storage. Příklad: pokud je název Vašeho Backup Storage „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net“, je zapotřebí ho upravit následujícím způsobem: „ftpback-rbxX-YYY.mybackup.ovh.net“. Níže uvedené příkazy je zároveň zapotřebí rozšířit o argument `-ssl`.
>

Pro zálohování jednotlivých souborů lze použít následující příkaz:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **File**: název souboru, který si přejete nahrát.
* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **FolderLocation**: cesta k cílovému adresáři, do nějž si soubor přejete nahrát.

Pokud si přejete zálohovat celou složku, jednoduše ji archivujte a nahrajte pomocí následujícího příkazu:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FolderName**: cesta ke složce, kterou si přejete nahrát.
* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **FolderLocation**: cesta k cílovému adresáři, do nějž si soubor přejete nahrát.
* **ArchiveName**: název složky, kterou si přejete nahrát.

Pro stažení archivované složky z Backup Storage úložiště použijte následující příkaz:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **LocalFolder**: cesta k adresáři, do nějž si soubor přejete uložit.
* **File**: cesta k souboru, který si přejete stáhnout.


##### lftp (pro Linux)

> [!primary]
>
> lftp používá ve výchozím nastavení FTP+SSL/TLS. Z toho důvodu je zapotřebí upravit název Vašeho Backup Storage. Příklad: pokud je název Vašeho Backup Storage „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net“, je zapotřebí ho upravit následujícím způsobem: „ftpback-rbxX-YYY.mybackup.ovh.net“.
>

Pro zálohování jednotlivých souborů lze použít následující příkaz:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **File**: název souboru, který si přejete nahrát.
* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **FolderLocation**: cesta k cílovému adresáři, do nějž si soubor přejete nahrát.

Pokud si přejete zálohovat celou složku, jednoduše ji archivujte a nahrajte pomocí následujícího příkazu:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FolderName**: cesta ke složce, kterou si přejete nahrát.
* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **FolderLocation**: cesta k cílovému adresáři, do nějž si soubor přejete nahrát.
* **ArchiveName**: název složky, kterou si přejete nahrát.

Pro stažení archivované složky z Backup Storage úložiště použijte následující příkaz:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **FtpUsername**: FTP uživatel.
* **FtpPassword**: FTP heslo.
* **HostName**: název Vašeho Backup Storage.
* **LocalFolder**: cesta k adresáři, do nějž si soubor přejete uložit.
* **File**: cesta k souboru, který si přejete stáhnout.

##### FileZilla (Windows)

Jakmile na svůj server nainstalujete klient FileZilla, můžete ho za použití FTP přihlašovacích údajů nakonfigurovat pro připojení k Vašemu Backup Storage. Pro úspěšné připojení budete potřebovat uživatelské jméno a heslo.


#### NFS

Ze všeho nejdříve se přesvědčte, že máte své IP bloky autorizovány pro přístup k Backup Storage prostřednictvím protokolu NFS. V závislosti na operačním systému je možné, že budete muset nainstalovat NFS klienta a spustit službu NFS/portmap.

Jakmile je NFS klient nainstalován a služba NFS/portmap spuštěna, můžete připojit NFS jako standardní oddíl:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **HostName**: název Vašeho Backup Storage.
* **ServiceName**: název Vašeho serveru (např.: ns0000000.ip-123-123-123.net).
* **FolderMount**: adresář, k němuž si NFS oddíl přejete připojit.

Jakmile je oddíl připojen, můžete používat příkazy jako **cp** nebo **rsync** (stejně jako v případě standardního adresáře).


#### CIFS

##### Windows

Připojte se ke svém serveru a do příkazového řádku zadejte následující příkaz:

```sh
net use z: \\HostName\ServiceName
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **HostName**: název Vašeho Backup Storage.
* **ServiceName**: název Vašeho serveru (např.: ns0000000.ip-123-123-123.net).

##### Linux

Navažte SSH spojení se svým serverem a zadejte následující příkaz:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Proměnné ve výše uvedeném příkladu je zapotřebí nahradit příslušnými hodnotami:

* **HostName**: název Vašeho Backup Storage.
* **ServiceName**: název Vašeho serveru (např.: ns0000000.ip-123-123-123.net).
* **FolderMount**: adresář, k němuž si přejete oddíl připojit (musí existovat).


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.