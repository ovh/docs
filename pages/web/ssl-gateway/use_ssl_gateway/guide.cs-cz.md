---
deprecated: true
title: Nastaveni sluzby SSL Gateway
slug: nastaveni-ssl-gateway
legacy_guide_number: 2370
excerpt: Zabezpecte pripojeni na sve webove stranky
---


## Uvodni informace

### Prerekvizity


> [!primary]
>
> - Služba SSL Gateway <docs/web/ssl-gateway/order-ssl-gateway>.
> - Přístup do Zákaznického prostoru OVH, sekce Sunrise.
>

## Pouziti
Naučte se používat službu SSL Gateway


### Nastaveni sluzby
- Přihlaste se do svého [Zákaznického prostoru OVH](https://www.ovh.com/manager){.external}.
- Klikněte na tlačítko `Sunrise`{.action} v horní části obrazovky.

![tlacitko sunrise](images/4.PNG){.thumbnail}

- Pro zobrazení služby klikněte na tlačítko `SSL Gateway`{.action} v levém postranním panelu.

![tlačítko ssl gateway](images/5.PNG){.thumbnail}

- Vyberte řešení, které si přejete nakonfigurovat.

![obchodni stranka](images/6.PNG){.thumbnail}

- Následně budete přesměrováni do rozhraní pro správu Vaší služby.

![obecna konfigurace](images/7.PNG){.thumbnail}

- Vysvětlení základních pojmů

![vysvetlivky](images/8.PNG){.thumbnail}


|IPv4|IPv4 adresa brány OVH|
|IPv6|IPv6 adresa brány OVH|
|Zóna|Geografické umístění IP adresy Vaší služby SSL Gateway|
|Odchozí IPv4|Odchozí IPv4 adresy OVH pro připojení k Vašemu serveru|
|Nabídka|Typ využívané služby|
|Dokumentace|Odkaz na tuto uživatelskou příručku|
|Stav|Aktuální stav Vaší služby SSL Gateway|
|Datum expirace|Datum vypršení platnosti Vaší služby|
|Odstranit|Tlačítko pro vytvoření požadavku na odstranění služby|
|Přejít na vyšší verzi služby (Advanced)|Tlačítko pro přechod ze zkušební verze na verzi "Advanced"|

- Vysvětlení konfiguračních pojmů

![sekce konfigurace](images/9.PNG){.thumbnail}


|Konfigurace|Tlačítko pro úpravu nastavení Vaší služby SSL Gateway|
|HSTS [[1]](#id5){.note-ref #id1}|Požadavek webové stránky informující prohlížeč o tom, že má se serverem komunikovat pouze prostřednictvím zabezpečeného protokolu HTTPS|
|Reverzní záznam|Umožňuje přeložit IP adresu SSL Gateway na název hostitele|
|HTTPS přesměrování [[2]](#id6){.note-ref #id2}|Přesměrování návštěvníka webových stránek na HTTPS verzi (v případě, že původní komunikace probíhá přes HTTP)|
|HTTPS Server [[3]](#id7){.note-ref #id3}|Povolení komunikace HTTPS mezi Vaším serverem a serverem SSL Gateway|
|Omezení zdrojových IP adres|Pokud je tato funkce aktivní, mohou se k SSL Gateway připojit pouze specifikované IP adresy či sítě|
|Konfigurace Cipher [[4]](#id8){.note-ref #id4}|Nastavení bezpečnostní úrovně Vašeho SSL/LTS certifikátu|



> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Detailní informace o HSTS</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Jakmile se ujistíte, že Vaše stránky bez problémů fungují přes HTTPS protokol, můžete veškerý HTTP traffic přesměrovat na HTTPS.
> Po přesměrování domény na řešení SSL Gateway doporučujeme s přesměrováním traffic počkat 24 hodin a ujistit se tak, že návštěvníci Vašich webových stránek disponují novou DNS konfigurací.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Zabezpečení "end-to-end" připojení. SSL Gateway server se bude k Vašemu serveru připojovat prostřednictvím HTTPS na standardním portu 443 . Mějte prosím na paměti, že Váš server musí disponovat certifikací SSL/TLS. V opačném případě nebudou Vaše webové stránky fungovat. Certifikát na svém serveru však již nebudete muset obnovovat.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>Nejvyšší úroveň přirozeně poskytuje tu nejlepší ochranu, nemusí však být kompatibilní se staršími typy prohlížečů.</cite>
>

[Detailní informace o šifrovací metodě Cipher](https://en.wikipedia.org/wiki/Cipher){.external}


### Nastaveni domeny
Následující okno obsahuje 4 záložky:

- **Domény**
- **Servery**
- **Úkoly**
- **Grafy**


![zalozka domeny](images/10.PNG){.thumbnail}

V záložce **"Domény"** můžete provádět správu domén či subdomén připojených k Vaší službě SSL Gateway.

- Pro přidání domény či subdomény klikněte na tlačítko `Přidat doménu`{.action}.
    - 

> [!faq]
>
> Využíváte-li zkušební verzi (nabídka **"Free"**):
>> 
>> Můžete přidat pouze jednu **doménu** (včetně příslušné **"www" subdomény**) a jednu **subdoménu dle vlastní volby**:
>> 
>> 
>> 
>> > [!primary]
>> >
>> > |---|---|
>> > |
>> > Doména
>> > |
>> > example.com
>> > |
>> > |
>> > WWW subdoména
>> > |
>> > www.example.com
>> > |
>> > |
>> > Libovolná subdoména
>> > |
>> > blog.example.com
>> > |
>> > 
>> > 
>> 

>> 
>> > [!warning]
>> >
>> > - SSL Gateway Free:
>> > 
>> > Služba je dostupná pouze pro domény 2. a 3. řádu.
>> > 
>> 
>>         - Zvolte své nastavení a potvrďte kliknutím na tlačítko `Přidat`{.action}.

![přidat domenu free](images/11.PNG){.thumbnail}

>
    - 

> [!faq]
>
> Využíváte-li nabídku **"Advanced"**:
>> 
>> Můžete přidat jakoukoli aktivní doménu či subdoménu.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > - SSL Gateway Advanced:
>> > 
>> > Služba je dostupná i pro domény čtvrtého řádu a vyšší.
>> > 
>> 
>>         - Zvolte své nastavení a potvrďte kliknutím na tlačítko `Přidat`{.action}.

![pridat domenu advanced](images/12.PNG){.thumbnail}

>


> [!warning]
>
> Zároveň s každým přidáním nové domény/subdomény od nás obdržíte e-mail s výzvou o její přesměrování na IP adresu služby SSL Gateway, a to do 3 dnů o vytvoření požadavku.
> Bez provedení této operace není možné vygenerovat certifikát SSL/TLS.
> 


V záložce **"Servery"** můžete provádět správu IP adres serverů hostujících Vaše webové stránky.

- Pro přidání IP adresy a příslušného portu Vašeho hostitelského serveru klikněte na tlačítko `Přidat server`{.action}.

![zalozka servery](images/13.PNG){.thumbnail}

    - 

> [!faq]
>
> Využíváte-li zkušební verzi (nabídka **"Free"**):
>> 
>> Můžete přidat pouze jednu IP/PORT adresu.
>> 
>> 
>
    - 

> [!faq]
>
> Využíváte-li nabídku **"Advanced"**:
>> 
>> Můžete přidat až 3 IP/PORT adresy pro své domény/subdomény.
>> 
>> 
>> 
>> > [!primary]
>> >
>> > Pokud přidáte více IP/PORT adres, bude mezi nimi služba SSL Gateway distribuovat datovou zátěž na základě systému Round Robin.
>> > Detailní informace o Round Robin DNS
>> > 
>> 
>>         - Zvolte své nastavení a potvrďte kliknutím na tlačítko `Přidat`{.action}.

![pridat IP/PORT advanced (interni)](images/15.PNG){.thumbnail}

>


> [!warning]
>
> V současné době není možné přidávat adresy IPv6.
> Toto omezení však nepředstavuje překážku, jelikož Vaše domény/subdomény mohou na službu SSL Gateway IPv6 směrovat.
> SSL Gateway následně IPv6 traffic hladce a transparentně přepne na IPv4 adresy Vašeho serveru.
> 


V záložce **"Úkoly"** můžete sledovat probíhající operace na Vaší službě SSL Gateway.


![zalozka ukoly](images/13-bis.PNG){.thumbnail}



> [!warning]
>
> Pokud jsme ještě nezaznamenali přesměrování Vaší domény/subdomény na IP adresu služby SSL Gateway, Váš certifikát SSL/TLS nemohl být vygenerován.
> Vaše webové stránky jsou však i nadále dostupné v HTTP. V takovém případě se v záložce Vstupy zobrazí malý obrázek "HTTP".
> 
> ![pouze http](images/14.PNG){.thumbnail}
>
V záložce **"Grafy"** můžete sledovat počet připojení a požadavků na Vaši službu SSL Gateway za minutu.


![zalozka metriky](images/17.PNG){.thumbnail}

- 

> [!faq]
>
> Využíváte-li zkušební verzi (nabídka **"Free"**):
>> 
>> Máte přístup k metrikám za posledních 24 hodin.
>> 
>> 
>
- 

> [!faq]
>
> Využíváte-li nabídku **"Advanced"**:
>> 
>> Máte přístup k metrikám za poslední měsíc.
>> 
>> 
>


## Obnoveni certifikatu SSL

### Dulezite upozorneni


> [!primary]
>
> Aby mohl být certifikát Let's Encrypt obnoven, je nezbytné, aby daná doména/subdoména směrovala na IP adresu služby SSL Gateway.
> - V případě, že Vaše doména/subdoména nesměruje na IP adresu SSL Gateway a naši roboti tuto skutečnost zaznamenají 7 dní před datem expirace certifikátu SSL/TSL, obdržíte od nás e-mail s výzvou na přesměrování domény (na provedení této akce budete mít 3 dny).
> - Pokud po uplynutí výše uvedené lhůty neprovedete přesměrování domény, Váš certifikát nebude moci být automaticky obnoven. V takovém případě bude certifikát nutné obnovit manuálně, a to prostřednictvím následujícího tlačítka:
> 
> ![bnoveni SSL](images/16.PNG){.thumbnail}
> 
>

## Tipy

### Oprava zdrojove IP adresy v zaznamech (logs)

#### Nazorne priklady
Kdykoli zákazník navštíví Vaše webové stránky, připojí se ke službě SSL Gateway prostřednictvím protokolu HTTPS. Jakmile SSL Gateway rozšifruje požadavek a odfiltruje potenciální hrozby, předá ho Vašemu serveru. Veškeré bezprostřední požadavky na Váš server tedy pocházejí ze služby SSL Gateway.

Aby bylo možné vysledovat IP adresy návštěvníků Vašich webových stránek, služba SSL Gateway k nim automaticky přidává následující HTTP hlavičky:

- X-Forwarded-For a X-Remote-Ip: IP adresa návštěvníka webových stránek z pohledu služby SSL Gateway.
- X-Forwarded-Port a X-Remote-Port: Zdrojový port návštěvníka webových stránek z pohledu služby SSL Gateway.

Jelikož tato pole mohou být záměrně upravena, smějí být brána v potaz jen tehdy, pocházejí-li z důvěryhodného zdroje, jako je právě SSL Gateway. Seznam zdrojových IP adres používaných službou SSL Gateway nelzenete v:

> Zákaznickém prostoru OVH, sekce Sunrise >> SSL Gateway >>> "Odchozí IPv4

V současné době se jedná o adresy **213.32.4.0/24** a **144.217.9.0/24**. V budoucnu mohou být přidány další adresy.

Pokud je toho Váš server schopen, může být nakonfigurován tak, aby tyto informace rozpoznával automaticky (namísto IP adresy služby SSL Gateway).


#### Apache
- Vytvořte následující soubor:
/etc/apache2/conf-available/remoteip.conf
- Vložte následující řádky:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


Nyní můžete proměnné %h nahradit proměnnou %a v :LogFormat konfigurace Apache.

- Jakmile je konfigurace připravena, stačí ji prostřednictvím následujících příkazů aktivovat:

```bash
# Aktivujte modul a následně konfiguraci
a2enmod remoteip
a2enconf remoteip

# Restratujte Apache
service apache2 restart
```


Detailní informace o tomto procesu naleznete v [oficiální dokumentaci](https://httpd.apache.org/docs/current/en/mod/mod_remoteip.html){.external}.


#### Nginx
- Otevřete konfigurační soubor stránky, kterou chcete zabezpečit.  Obvykle se nalézá zde:
/etc/nginx/sites-enabled
- Do sekce server vložte následující řádky:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Detailní informace o tomto procesu naleznete v [oficiální dokumentaci](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}