---
title: 'Zabezpečení VPS'
slug: tipy-pro-zabezpeceni-vps
section: 'První kroky'
---

**Poslední aktualizace 16/08/2018**

## Cíl

Virtuální privátní servery jsou dodávány s předinstalovanou systémovou distribucí, avšak bez jakýchkoli nativních bezpečnostních protokolů. Jakožto správce a zprostředkovatel hardwaru nedisponuje společnost OVH žádnými přístupovými právy k severu, a proto se o jeho zabezpečení musíte postarat sami.

**V této příručce naleznete několik užitečných rad pro zabezpečení Vašeho serveru.**

 
> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost.  Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás. Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru.  Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky. 
> 


## Prerekvizity

- SSH připojení k serveru (přístup root)


## Postup

V následujícím textu Vám nabídneme několik praktických rad pro zabezpečení Vašeho serveru. Mějte však na paměti, že tato příručka o dané problematice pojednává pouze z obecného hlediska. Některé příkazy nemusejí na určitých systémových distribucích fungovat, a je proto zapotřebí je příslušně upravit. Některé tipy zahrnují použití nástrojů třetích stran. V případě jakýchkoli potíží s těmito nástroji se prosím obraťte na oficiální dokumentaci vydavatele.

### Aktualizace systému

Vývojáři operačních systémů a distribucí vydávají velké množství aktualizačních balíčků, které mají ve většině případů zabezpečovací charakter. Pravidelné aktualizace operačního systému jsou proto jedním ze základních aspektů řádného zabezpečení Vašeho VPS.

Aktualizace operačního systému probíhá ve dvou fázích:

- Aktualizace seznamu balíčků

```sh
apt-get update
```

- Aktualizace samotných balíčků

```sh
apt-get upgrade
```

Po skončení druhé fáze je Váš systém aktualizován na nejnovější verzi. Tento proces je zapotřebí pravidelně opakovat.


### Úprava výchozího SSH portu


Jedna z prvních věcí, které byste na svém serveru měli udělat, je přenastavit port služby SSH. Ve výchozím nastavení je SSH na portu 22. Je proto doporučováno port změnit a nenechávat ho ve výchozím nastavení. Je tomu tak z toho důvodu, že většina pokusů o hacknutí serveru je prováděna roboty, kteří cílí právě na výchozí port 22. Změna nastavení portu tyto pokusu značně komplikuje, a zvyšuje tak celkovou úroveň zabezpečení Vašeho serveru.

Pro úpravu konfiguračního souboru služby zadejte následující příkaz:

sh nano /etc/ssh/sshd_config

> [!primary]
>
> Příkaz `nano` zde vystupuje jen jako příklad. Můžete samozřejmě použít i příkaz `vim` nebo kterýkoli další příkaz umožňující provádění úprav v souboru sshd\_config.
>

Nyní je zapotřebí vizualizovat následující řádek:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Nahraďte číslo 22 hodnotou dle své vlastní volby. **Nezadávejte prosím číslo portu, který je v rámci Vašeho systému již používán**. Uložte provedené změny a opusťte konfigurační soubor.

Následně bude zapotřebí provést restart Vaší služby:

```sh
/etc/init.d/ssh restart
```

Při dalším SSH připojení k serveru budete muset zadat nový port:

```sh
ssh root@vasevps.ovh.net -p NovyPort
```

### Změna hesla uživatele „root“

Při instalaci systémové distribuce dochází k automatickému vygenerování hesla pro root přístup k Vašemu serveru. Důrazně doporučujeme toto heslo změnit. Heslo lze po připojení k serveru změnit zadáním následujícího příkazu:

```sh
passwd root
```

Zadejte a potvrďte nové heslo. **Pozor, heslo se z bezpečnostních důvodů při psaní nezobrazuje**. Z toho důvodu při psaní neuvidíte zadávané znaky.

Jakmile operaci dokončíte, budete při dalším připojení k serveru muset zadat nové heslo.

### Vytvoření uživatele s omezenými právy a systémové zásahy s právy root

Nového uživatele vytvoříte pomocí následujícího příkazu:

```sh
adduser JmenoUzivatele
```

Následně vyplňte veškeré údaje požadované systémem (heslo, jméno, apod.).

Takto vytvořený uživatel se bude k Vašemu serveru moci připojit přes SSH, a to za použití hesla, které jste při jeho vytváření určili.

Jakmile se k serveru připojíte pod tímto uživatelským účtem a budete chtít provádět operace vyžadující práva root, stačí zadat následující příkaz:

```sh
su root
```

Aby mohla být požadovaná operace provedena, budete ji muset potvrdit zadáním hesla pro uživatele root.

### Deaktivace přístupu k serveru prostřednictvím uživatele root

Uživatel root je implicitně přítomný na všech unixových distribucích a disponuje těmi nejvyššími právy pro ovládání systému. Nechávat svůj server přístupný pouze prostřednictvím uživatele root, který na něm může provádět nenávratné operace, je obecně považováno za bezpečnostní hrozbu.

Důrazně proto doporučujeme provést deaktivaci přímého root přístupu k serveru prostřednictvím SSH.

Za tímto účelem bude opět zapotřebí upravit konfigurační soubor SSH, a to stejným způsobem, jakým jsme postupovali při úpravě výchozího portu:

```sh
nano /etc/ssh/sshd_config
```

Následně přejděte do následující sekce:

```sh
# Authentication: LoginGraceTime 120 PermitRootLogin yes StrictModes yes
```

V řádku `PermitRootLogin` nahraďte hodnotu **yes** hodnotou **no**.

Aby provedené změny mohly vstoupit v platnost, je zapotřebí provést restart služby SSH:

```sh
/etc/init.d/ssh restart
```

Při dalším připojení k serveru se přihlaste pod uživatelským účtem, který jste vytvořili v předcházející části této příručky.


### Instalace a konfigurace balíčku Fail2ban

Fail2ban je démon, který blokuje neznámé IP adresy, pokoušející se o přihlášení k serveru. Tento softwarový balíček je nezbytnou součástí obrany proti surovým útokům na Vaše služby.

Balíček nainstalujete zadáním následujícího příkazu:

```sh
apt-get install fail2ban
```

Jakmile je balíček nainstalován, je zapotřebí přizpůsobit jeho konfiguraci. Než se pustíte do jakýchkoli úprav konfiguračního souboru, doporučujeme vytvořit jeho zálohu zadáním následujícího příkazu:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Následně proveďte potřebné úpravy:

```sh
nano /etc/fail2ban/jail.conf
```

V poslední fázi proveďte restart služby zadáním následujícího příkazu:

```sh
/etc/init.d/fail2ban restart
```

Detailní informace týkající se balíčku Fail2Ban naleznete v [oficiální dokumentaci](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Konfigurace interního firewallu: Iptables

Holá systémová distribuce implicitně zahrnuje firewallovou službu Iptables. Tato služba ve výchozím nastavení neobsahuje žádná bezpečnostní pravidla. Bezpečnostní pravidlo lze vytvořit zadáním následujícího příkazu:

```sh
iptables -L
```

Doporučujeme vytvoření a přizpůsobení alespoň základních bezpečnostních pravidel tak, aby korespondovala s bezpečnostními požadavky Vaší služby. Detailní informace týkající se nastavení firewallu Iptables naleznete v oficiální dokumentaci příslušné systémové distribuce.

### Konfigurace síťového firewallu OVH

Za účelem ochrany své globální infrastruktury a serverů svých klientů nabízí společnost OVH konfigurovatelný síťový firewall, zahrnutý v rámci řešení Anti-DDoS. Implementace síťového firewallu umožňuje blokování protokolů ještě před tím, než vůbec dorazí na příslušný server.

Detailní informace ohledně síťového firewallu OVH naleznete na [tomto odkazu](https://docs.ovh.com/cz/cs/dedicated/firewall-network/){.external}.

### Záloha systému a dat

Koncept zabezpečení serveru se neomezuje pouze na ochranu systému proti útokům.

Dalším důležitým aspektem je samozřejmě ochrana a zabezpečení dat. Z toho důvodu společnost OVH nabízí tři možnosti pro zálohování Vašeho serveru:

- `Snapshot` neboli okamžité zachycení obrazu Vašeho VPS. Jeho účelem je možnost navrácení serveru do přesného stavu, v němž byl snapshot pořízen. Snapshot - na rozdíl od klasické datové zálohy - obsahuje i kompletní informace o serverové konfiguraci. Snapshoty jsou dostupné v rámci nabídky VPS SSD, VPS Cloud a VPS Cloud RAM.
- `Automated Backup` lze využít pro naplánování automatických záloh Vašeho VPS (s výjimkou přídavných disků). Naplánované zálohy jsou ukládány denně a uchovávají se po dobu 14 dnů. Vaše zálohy podléhají trojité replikaci a jsou exportovány na naši infrastrukturu. Tyto zálohy jsou Vám v případě potřeby obnovení Vašeho VPS kdykoli k dispozici. Služba je dostupná pouze v rámci nabídky VPS Cloud a VPS Cloud RAM.
- `Backup Storage` nabízí vyhrazený úložný prostor, oddělený od Vašeho VPS. Tento prostor můžete využít pro zálohování dat ze svého virtuálního serveru.
Backup Storage funguje na podobném principu, jako USB disk, který připojíte ke svému počítači a uložíte na něj kopii svých dat. Ke službě se lze připojit prostřednictvím následujících protokolů: FTP, NFS nebo CIFS.  Služba je dostupná pouze v rámci nabídky VPS Cloud a VPS Cloud RAM.

Detailní informace o možnostech zálohování naleznete na následující adrese: <https://www.ovh.cz/vps/backup-vps.xml>.

## Kam dál

[Konfigurace síťového firewallu](https://docs.ovh.com/cz/cs/dedicated/firewall-network/){.external}

Přidejte se k naší uživatelské komunitě na <https://community.ovh.com/en/>.