---
deprecated: true
title: 'Zabezpečení dedikovaného serveru'
slug: zabezpeceni-dedikovany-server
excerpt: 'Obecná doporučení pro zabezpečení Vašeho serveru'
section: 'První kroky'
order: 2
---

**Poslední aktualizace 16/08/2018**

## Cíl

Dedikované servery jsou dodávány bez nativních bezpečnostních protokolů. Jakožto správce a zprostředkovatel hardwaru nedisponuje společnost OVH žádnými přístupovými právy k severu, a proto se o jeho zabezpečení musíte postarat sami. 

V této příručce naleznete několik důležitých rad pro efektivní zabezpečení svého serveru.

> [!warning]
>
> Společnost OVH Vám dává k dispozici stroje, za jejichž správu nesete plnou odpovědnost. Společnost OVH není administrátorským subjektem těchto strojů a nedisponuje žádnými přístupovými právy. Z toho důvodu spočívá zajištění každodenní správy softwaru a zabezpečení stroje pouze na Vás.
>
> Tato příručka slouží jako úvod do nejčastějších úkonů spojených se správou a zabezpečením Vašeho serveru.  Pokud narazíte na jakékoli potíže či pochybnosti ohledně správy, použití nebo zabezpečení svého serveru, obraťte se prosím na profesionálního serverového administrátora. Další informace naleznete v poslední sekci této příručky.
>


## Prerekvizity

- [Dedikovaný server](https://www.ovh.cz/dedikovane_servery/){.external}
- SSH připojení k serveru (přístup root)


## Postup

> [!primary]
>
> V následujícím textu Vám nabídneme několik praktických rad pro zabezpečení Vašeho serveru. Mějte však na paměti, že tato příručka o dané problematice pojednává pouze z obecného hlediska. Některé příkazy nemusejí na určitých systémových distribucích fungovat, a je proto zapotřebí je příslušně upravit.  Některé tipy zahrnují použití nástrojů třetích stran. V případě jakýchkoli potíží s těmito nástroji se prosím obraťte na oficiální dokumentaci vydavatele.  
>

### Aktualizace systému

Vývojáři operačních systémů a distribucí vydávají velké množství aktualizačních balíčků, které mají ve většině případů zabezpečovací charakter. **Pravidelné aktualizace operačního systému jsou proto jedním ze základních aspektů řádného zabezpečení Vašeho serveru.**

Aktualizace operačního systému probíhá ve dvou fázích:

#### Aktualizace seznamu balíčků

Zadejte následující příkaz:

```sh
apt-get update
```

#### Aktualizace balíčků

Zadejte následující příkaz:

```sh
apt-get upgrade 
```

Po skončení druhé fáze je Váš systém aktualizován na nejnovější verzi. Tento proces je zapotřebí pravidelně opakovat.


### Úprava výchozího SSH portu

Jednou z prvních věcí, které byste na svém serveru měli udělat, je přenastavit SSH port pro příchozí komunikaci. Ve výchozím nastavení je SSH na portu 22. Je proto doporučováno port změnit a nenechávat ho ve výchozím nastavení. Je tomu tak z toho důvodu, že většina pokusů o hacknutí serveru je prováděna roboty, kteří cílí právě na výchozí port 22. Změna nastavení portu tyto pokusu značně komplikuje a zvyšuje celkovou úroveň zabezpečení Vašeho serveru.

> [!primary]
>
> V následujícím příkladu je použit linuxový textový editor **Nano**. Můžete však použít jakýkoli textový editor, který umožňuje provádět úpravy v konfiguračním souboru.
>

Pro úpravu konfiguračního souboru služby zadejte následující příkaz:

```sh
nano /etc/ssh/sshd_config
```

Nyní je zapotřebí vizualizovat následující řádek:

```sh
What ports, IPs and protocols we listen for Port 22
```

Nahraďte číslo **22** hodnotou dle své vlastní volby. **Nezadávejte prosím číslo portu, který je v rámci Vašeho systému již používán. Uložte provedené změny a opusťte konfigurační soubor.** Následně bude zapotřebí provést restart Vaší služby:

Při dalším SSH připojení k serveru budete muset zadat nový port:

```sh
ssh root@vasevps.ovh.net -p NovyPort 
```

> [!warning]
>
> Mějte na paměti, že modifikace výchozího portu pro SSH nebo pro jakýkoli další protokol představuje potenciální riziko. Některé služby totiž nemohou být nakonfigurovány pro použití s jinými než standardními porty.
>


### Změna hesla uživatele „root“

Při instalaci systémové distribuce dochází k automatickému vygenerování hesla pro root přístup k Vašemu serveru. Důrazně doporučujeme toto heslo změnit.  Heslo lze po připojení k serveru změnit zadáním následujícího příkazu:

```sh
passwd root 
```

Zadejte a potvrďte nové heslo. Pozor, **heslo se z bezpečnostních důvodů při psaní nezobrazuje**. Z toho důvodu při psaní neuvidíte zadávané znaky.

Jakmile operaci dokončíte, budete při dalším připojení k serveru muset zadat nové heslo.


### Vytvoření uživatele s omezenými právy

 Nového uživatele vytvoříte pomocí následujícího příkazu:

```sh
adduser_Jmeno_Uzivatele
```

Následně vyplňte veškeré údaje požadované systémem (heslo, jméno, apod.).

Takto vytvořený uživatel se bude k Vašemu serveru moci připojit přes SSH, a to za použití hesla, které jste při jeho vytváření určili. Jakmile se k serveru připojíte pod tímto uživatelským účtem a budete chtít provádět operace vyžadující práva root, stačí zadat následující příkaz:

```sh
su root
```

Aby mohla být požadovaná operace provedena, budete ji muset potvrdit zadáním hesla pro uživatele root.


### Deaktivace přístupu k serveru prostřednictvím uživatele root

Uživatel root je implicitně přítomný na všech unixových distribucích a disponuje těmi nejvyššími právy pro ovládání systému. Nechávat svůj server přístupný pouze prostřednictvím uživatele root, který na něm může provádět nenávratné operace, je obecně považováno za bezpečnostní hrozbu. 

Důrazně proto doporučujeme provést deaktivaci přímého root přístupu k serveru prostřednictvím SSH. Za tímto účelem bude opět zapotřebí upravit konfigurační soubor SSH, a to stejným způsobem, jakým jsme postupovali při úpravě výchozího portu:



```sh
nano /etc/ssh/sshd_config
```

Přejděte do následující sekce a v řádku  `PermitRootLogin` nahraďte hodnotu „yes“ hodnotou „no“.

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Aby provedené změny mohly vstoupit v platnost, je zapotřebí provést restart služby SSH:

```sh
/etc/init.d/ssh restart
```

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


### Konfigurace interního firewallu: iptables

Holá systémová distribuce implicitně zahrnuje firewallovou službu iptables. Tato služba ve výchozím nastavení neobsahuje žádná bezpečnostní pravidla. Bezpečnostní pravidlo lze vytvořit zadáním následujícího příkazu:

```sh
iptables -L
```

Doporučujeme vytvoření a přizpůsobení alespoň základních bezpečnostních pravidel tak, aby korespondovala s bezpečnostními požadavky Vaší služby. Detailní informace týkající se nastavení firewallu iptables naleznete v oficiální dokumentaci příslušné systémové distribuce.


### Konfigurace síťového firewallu OVH

Za účelem ochrany své globální infrastruktury a serverů svých klientů nabízí společnost OVH konfigurovatelný síťový firewall, zahrnutý v rámci řešení Anti-DDoS. Implementace síťového firewallu umožňuje blokování protokolů ještě před tím, než vůbec dorazí na příslušný server.

Detailní informace ohledně síťového firewallu OVH naleznete v [této dokumentaci](https://docs.ovh.com/cz/cs/dedicated/firewall-network/){.external}.


### Záloha systému a dat

Koncept zabezpečení serveru se neomezuje pouze na ochranu systému proti útokům. Dalším důležitým aspektem je samozřejmě také ochrana a zabezpečení dat. Z toho důvodu společnost OVH ke svým dedikovaným serverům poskytuje 500 GB prostoru pro ukládání záloh zcela zdarma. Toto úložiště lze snadno aktivovat prostřednictvím Zákaznického prostoru OVH. Pro přístup lze použít následující protokoly:

* FTP
* FTPS
* NFS
* CIFS

Pro replikaci a transfer dat na záložní úložiště budete potřebovat softwarové řešení třetí strany.

Detailní informace týkající se našich řešení pro zálohování dat naleznete v [této dokumentaci (EN)](https://docs.ovh.com/gb/en/dedicated/services-backup-storage/){.external}.


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.