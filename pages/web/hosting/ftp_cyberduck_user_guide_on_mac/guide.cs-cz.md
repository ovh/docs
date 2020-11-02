---
deprecated: true
title: 'Webhosting: uživatelská příručka Cyberduck (Mac)'
excerpt: Nastavení a používání aplikace Cyberduck na Mac
id: '1598'
slug: webhosting_uzivatelska_prirucka_cyberduck_mac
legacy_guide_number: g1598
---


## Úvod
Cyberduck je aplikace dostupná na Mac.

Jejím hlavním cílem je umožnit Vám publikovat své webové stránky přes FTP server.

Pro získání této aplikace jděte na oficiální stránky Cyberduck:


- Oficiální stránky Cyberduck (nejde o stránky OVH): [cyberduck.io](https://cyberduck.io/)



![](images/img_2344.jpg){.thumbnail}
Cyberduck je aplikace pro uživatele Mac. Jestliže máte počítač, který používá Windows, použijte místo toho FileZilla: []({legacy}1380)


## Rozhraní
Jakmile spustíte Vaši aplikaci, zobrazí se Vám toto okno.

- horní sekce umožňuje rychlé připojení a ihned po připojení přístup k různým akcím (přejmenování, upravování, atd.)

- prostřední sekce umožňuje zobrazit Bookmark, které jste si přidali (Vaše přednastavené FTP připojení) a po připojení si zobrazíte obsah FTP serveru.

- nejnižší sekce umožňuje získat informace o probíhajících akcích (připojení k FTP serveru) a také různé ikony, které si můžete přidat například do nových Bookmark.



![](images/img_2343.jpg){.thumbnail}
Upravení zobrazení Cyberduck
Zobrazení Cyberduck si můžete upravit tak, aby odpovídalo Vašim potřebám.

Pro upravení klikněte na View a poté Customise the toolbar.

V okně, které se zobrazí si přetáhněte prvky, které chcete zobrazovat na liště. Pro schválení změn klikněte na Done.

![](images/img_2345.jpg){.thumbnail}


## FTP připojení
Pro připojení k Vašemu FTP serveru postupojte podle následujících kroků:

1. Klikněte na Open connection vlevo nahoře.

2. V novém okně zadejte informace pro připojení k Vašemu FTP serveru:

- Server (FTP)
- Username
- Password
- Port (21)

3. Zaškrtněte Add to Keychain, jestliže si přejete, aby si Cyberduck zapamatoval Vaše heslo.

4. Klikněte na Connect pro připojení k FTP serveru.


![](images/img_2361.jpg){.thumbnail}

- Cyberduck si zapamatuje Vaše heslo, jestliže zaškrtnete Add to Keychain. Není to povinné, ale jestliže tuto možnost nezaškrtnete, budete muset při každém připojení zadávat heslo.

- Jestliže neznáte přístupové údaje k FTP, podívejte se na příručku [Získání přístupových údajů k FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Měla by se zobrazit hláška, že server podporuje šifrované připojení (SSL)

- Protože naše servery nejsou kompatibilní s FTP-SSL, musíte zaškrtnout Do not display a zvolit Continue.

- Jestliže chcete používat zabezpečené připojení, musíte použít [SFTP připojení](#utiliser_cyberduck_connexion_sftp). 

Toto připojení je však dostupné pouze v případě, že je ve Vašem webhostingovém balíčku zahrnuto SSH připojení.

![](images/img_2349.jpg){.thumbnail}

- Jestliže nevíte, zda máte SSH připojení zahrnuto ve Vašem webhostingovém balíčku, podívejte se na [detaily našich webhostingových služeb](http://www.ovh.cz/webhosting/).

- Jestliže si stále nejste jistí, klikněte na Continue. V případě, že SSH připojení není zahrnuto ve Vašem balíčku webhostingu, nedojde k připojení serveru.



- Doporučujeme, abyste si schovali přístupové údaje v Bookmark. To Vám umožní získat v budoucnu kopii těchto informací.

- Pro více informací o Bookmark se podívejte na příručku: [Co jsou Bookmark?](#utiliser_cyberduck_quest-ce_quun_signet).




## SFTP připojení
Jestliže je Váš webhostingový balíček kompatibilní s SSH přístupem, máte již možnost se připojit pomocí SFTP. Pro fungování SFTP připojení je potřeba mít SSH přístup.
Jestliže nevíte, zda máte SSH připojení zahrnuto ve Vašem webhostingovém balíčku, podívejte se na [detaily našich webhostingových služeb](http://www.ovh.cz/webhosting/).


- Jestliže si stále nejste jistí, připojte se raději pomocí  [FTP](#utiliser_cyberduck_connexion_ftp) nežli SFTP. V případě, že SSH připojení není zahrnuto ve Vašem balíčku webhostingu, nedojde k připojení serveru.


Pro připojení k FTP serveru proveďte následující kroky:

1. Klikněte na Open connection vlevo nahoře.

2. V rolovacím menu zvolte SFTP (File transfer protocol přes SSH) (oranžový obdélník v obrázku)

- Server (FTP)
- Username
- Password
- Port (22)

3. Zaškrtněte Add to Keychain, jestliže si přejete, aby si Cyberduck zapamatoval Vaše heslo.

4. Klikněte na Connect pro připojení k FTP serveru.


![](images/img_2362.jpg){.thumbnail}

- Cyberduck si zapamatuje Vaše heslo, jestliže zaškrtnete Add to Keychain. Není to povinné, ale jestliže tuto možnost nezaškrtnete, budete muset při každém připojení zadávat heslo.

- Jestliže neznáte přístupové údaje k FTP, podívejte se na příručku [Získání přístupových údajů k FTP](http://www.ovh.com/fr/g1374.mettre-mon-site-en-ligne#deposer_mes_fichiers_en_ftp_recuperer_mes_identifiants_ftp).


Když se poprvé přihlásíte k FTP serveru, a dojde k nerozpoznání tohoto hostitele Vaším systémem a zobrazí se Vám upozornění.

- Klikněte na Always a poté na Allow. To ověří připojení hostitele (OVH) pro všechny budoucí pokusy o připojení.



![](images/img_2363.jpg){.thumbnail}

- Doporučujeme, abyste si schovali přístupové údaje v Bookmark. To Vám umožní získat v budoucnu kopii těchto informací.

- Pro více informací o Bookmark se podívejte na příručku: [Co jsou Bookmark?](#utiliser_cyberduck_quest-ce_quun_signet).




## Chyby v připojení
Při pokusech o připojení pomocí Cyberduc může dojít k několika chybám. Zde jsou dvě nejčastější:
Otevření relace, která selhala
Zobrazí se Vám následující zpráva: 530 Login authentification failed. V převážné většině případů je tato chyba spojena s přístupovými údaji, které jste zadali. Pravděpodobně jste v nich udělali nějakou chybu.


- Je tedy potřeba ověřit zadané infromace.

- Je možné, že budete také muset aktualizovat Bookmark, kterou jste si vytvořili (kliknutím na ikonu tužky).



![](images/img_2352.jpg){.thumbnail}
Jestliže neznáte své přístupové údaje k FTP, podívejte se na příručku [Získání přístupových údajů k FTP](http://www.ovh.cz//g1374.pristupove_udaje_k_ftp).
Selhání připojení
Také se Vám zobrazí tato zpráva: Timed out waiting for initial connect reply. V převážné většině případů se jedná o nemožnost se připojit k serveru. Většinou se jedná buďto o špatně uvedený název serveru, nebo pokus o připojeník k serveru, který je blokován.


- Je tedy potřeba zkontrolovat zadané přístupové údaje.

- Jestliže je to potřeba, budete muset také aktualizovat Bookmark, kterou jste si vytvořili (zvolením Bookmark a kliknutím na ikonu tužky).


Problém může být způsoben i firewallem, nebo lokálním blokováním síťových portů 21 či 22, které se používají pro připojení k FTP serveru. V takovémto případě je potřeba ověřit Vaše nastavení na počítači, ze kterého se připojujete.

![](images/img_2353.jpg){.thumbnail}

- Pro připomenutí je Vaše připojení k Vašemu virtuálního hostiteli pro Vaši stránky na našich serverech ftp.vase-domena.tld (nahradíte vlastní doménou) nebo ftp.clusterXXX.ovh.net (nahradíte XXX číslem Vašeho clusteru).

- Pro více informací se podívejte na přítručku: [Získání přístupových údajů k FTP](http://www.ovh.cz//g1374.pristupove_udaje_k_ftp).




## Co je Bookmark?
Pro usnadnění připojení k FTP serveru doporučujeme použití Bookmark. To Vám umožní uložit Vaše přístupové údaje.

Postup:


- Připojte se ke svému serveru (FTP či SFTP)
- Jděte do Bookmarks (modrý a zelený obdélník na obrázku)
- Klikněte na [+] logo na obrázku vlevo dole



![](images/img_2346.jpg){.thumbnail}
Zobrazí se Vám nové okno s Vašimi přístupovými údaji. Až se příště budete připojovat ke Cyberduck, stačí jen dvakrát kliknout na Bookmark pro rychlejší připojení.


## Přenos souboru
Funkce přenosu souborů umožňuje nahrát Vaše webové stránky na server. Implicitně musíte nahrát soubory do adresáře www.

Existuje několik možných způsobů, jak přenos souborů provést.
Drag and drop
Pro přenos souborů pomocí FTP můžete jednoduše přenést soubory z jednoho okna do druhého pomocí myši. 


- Jakmile je to provedeno, Vaše soubory budou automaticky zařazeny do fronty pro nahrání na server. Frontu uvidíte v novém okně.



![](images/img_2354.jpg){.thumbnail}
Přes Transfer rozhraní
Můžete také použít rozhraní Transfer. To otevře nové okno, ve kterém uvidíte všechny Vaše soubory. Je potřeba si zvolit soubory, které chcete přehrát a kliknout na Transfer.


- Jakmile je to provedeno, Vaše soubory budou automaticky zařazeny do fronty pro nahrání na server. Frontu uvidíte v novém okně.



![](images/img_2355.jpg){.thumbnail}
Probíhající přesun souborů
Můžete si zobrazit historii přenosů na Váš webový server. Zde pak naleznete:


- soubory čekající ve frontě pro přenesení na server (nebo které se právě kopírují)
- soubory, které nešlo přenést
- soubory, které byly úspěšně přeneseny


Toto okno se Vám zobrazí dvěma způsoby:


- otevře se automaticky, když začne přenos souborů
- kliknutím na Window a Transfers



![](images/img_2356.jpg){.thumbnail}


## Možné akce na souboru/adresáři
Zvolením souboru či adresáře na webovém serveru (v Cyberduck prohlížeči), budete schopni provést různé Akce.

Konkrétně budete moci:


- Číst informace a měnit oprávnění pro soubory či adresáře
- upravovat soubor s pomocí aplikace, kterou si zvolíte
- Přejmenovat soubor či adresář
- Vymazat soubor či adresář
- Stáhnout zvolené položky
- Vytvořit nový soubor či adresář


Výčet uvedený výše není kompletní. S adresáři/soubory můžete provádět i jiné akce. Pro více informací jděte na stránku Cyberduck.

![](images/img_2357.jpg){.thumbnail}


## Práva u souborů a adresářů
Máte možnost měnit oprávnění (CHMOD) u souborů a adresářů na Vašem webovém serveru.

Jsou zde 3 různé kategorie oprávnění:


- Uživatel
- Skupina
- Ostatní


Pro přístup k tomuto rozhraní zvolte soubor(y) či složku(y) u kterých si přejete změnit oprávnění a poté v záložce Actions, klikněte na "Get info".

V novém okně klikněte na Permissions a poté můžete provést požadované změny.


- Unixová oprávnění: hodnota je automaticky aktualizována pro každou z výše uvedených 3 skupin uživatelů.
- Zaškrtněte políčko podle Vaší volby: hodnota bude automaticky aktualizována pro Unixová oprávnění.



![](images/img_2358.jpg){.thumbnail}


## Opětovné otevření webových stránek
Máte možnost opětovně otevřít Vaše webové stránky i pomocí spuštění příkazu.

Ve většině případů budete tento příkaz spouštět v případě, že OVH vypne Vaše webové stránky jako bezpečnostní opatření po jejich hacknutí/napadení.

Použijte tyto příkazy:


- Klikněte na Go
- Klikněte na Send Command



![](images/img_2359.jpg){.thumbnail}
V novém okně zadejte následující příkaz:


- CHMOD 705 /
- Klikněte na Send


Hned pod příkazem by se Vám měla zobrazit zpráva 200 Permissions changed on /. To je potvrzením, že došlo ke změně.


- Pro ověření, že stránka byla opětovně otevřena se jednoduše podívejte na stránku přes webový prohlížeč.



![](images/img_2360.jpg){.thumbnail}
Tento příkaz nemůže být použit v SFTP. Pro jeho provedení je potřeba [FTP připojení](#utiliser_cyberduck_connexion_ftp).


- Po provedení operací si pro jistotu po maximálně 3 hodinách znovu ověřte, že jsou Vaše stránky opět online. Naši roboti totiž kontrolují všechny změny každé tři hodiny, takže Vaše stránka může být opět online kdykoli během 3 hodin pro provedení změny.

- Jestliže uběhli 3 hodiny a Vaše stránka stále ještě není online, kontaktujte prosím náš tým podpory.




## Nalezení server připojení
V některých případech se Vás může náš tým podpory dotázat na server, ke kterému je Cyberduck připojen.

To se stane například v případě, že Vaš FTP klient je pomalý, nebo je problematický.

Pro aktivaci serveru nejdříve aktivujte své logy:


- Klikněte na View
- Klikněte na Show/Hide Toggle Log Drawer


Pod oknem Cyberduck by se mělo zobrazit okno. Poté se:


- Připojte k FTP serveru
- Jděte zpět do Toggle Log
- Odeberte webmXXX



![](images/img_2364.jpg){.thumbnail}

