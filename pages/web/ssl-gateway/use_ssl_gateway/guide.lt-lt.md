---
deprecated: true
title: SSL Gateway naudojimas
slug: ssl-gateway-naudojimas
legacy_guide_number: 2370
excerpt: Apsaugokite rysi su svetaine
---


## Bendrai

### Reikalavimai


> [!primary]
>
> - Užsakyti [SSL Gateway](../order-ssl-gateway/guide.lt-lt.md) paslaugą.
> - Turėti prieigą prie valdymo sąsajos Sunrise skilties.
>

## Naudojimas
Šiame gide apžvelgsime, kaip naudoti SSL Gateway paslaugą.


### Paslaugos konfiguravimas
- Prisijunkite prie [valdymo sąsajos](https://www.ovh.com/manager){.external}.
- Eikite į skiltį `Sunrise`{.action}.

![bouton sunrise](images/4.PNG){.thumbnail}

- Pasirinkite `SSL Gateway`{.action}.

![bouton ssl gateway](images/5.PNG){.thumbnail}

- Pasirinkite paslaugą, kurią norite konfigūruoti.

![page commerciale](images/6.PNG){.thumbnail}

- Perėjimas į paslaugos konfigūravimo skiltį.

![config globale](images/7.PNG){.thumbnail}

- Informacijos aprašymas.

![partie infos](images/8.PNG){.thumbnail}


|IPv4|OVH tilto IPv4 adresas, į kurį reikia nukreipti|
|IPv6|OVH tilto IPv6 adresas, į kurį reikia nukreipti|
|Zona|SSL Gateway IP adreso geografinė zona|
|Išvesties IPv4|OVH IPv4 adresas, iš kurio bus jungiamasi prie jūsų serverio|
|Paslauga|Užsakytos paslaugos tipas|
|Dokumentacija|Nuoroda į šį naudojimo gidą|
|Būklė|Jūsų SSL Gateway paslaugos būklė|
|Galiojimo data|SSL Gateway paslaugos galiojimo data|
|Atsisakymas|SSL Gateway paslaugos atsisakymo mygtukas|
|Migravimas į Advanced|Paslaugos migravimas iš Free į Advanced planą|

- Konfigūracijos aprašymas

![partie conf](images/9.PNG){.thumbnail}


|Konfigūravimas|Mygtukas skirtas SSL Gateway paslaugos konfigūravimui|
|HSTS [[1]](#id5){.note-ref #id1}|Priverstinis naršyklės jungimasis naudojant HTTPS|
|Reverse|Galima nurodyti hostname SSL Gateway IP adresui|
|Nukreipimas į HTTPS [[2]](#id6){.note-ref #id2}|Nukreipia lankytoją į jūsų svetainės HTTPS versiją, jeigu jis naudoja HTTP|
|Serveris HTTPS [[3]](#id7){.note-ref #id3}|HTTPS įjungimas tarp SSL Gateway serverio ir jūsų serverio|
|Šaltinio IP adresų ribojimas|Jeigu nurodoma, tuomet prie SSL Gateway galima jungtis tik iš nurodytų IP adresų|
|Cipher konfigūravimas [[4]](#id8){.note-ref #id4}|Leidžia pasirinkti SSL/TLS sertifikatų saugumo lygį|



> [!primary]
>
> [[1]](#){.note-ref #id5} - ([1](#id1){.fn-backref}) 
> <cite>Plačiau apie HSTS</cite>
> 
> [[2]](#){.note-ref #id6} - ([1](#id2){.fn-backref}) 
> <cite>Nustačius tinkamą svetainės veikimą HTTPS protokolu, galima visą HTTP srautą nukreipti į HTTPS.
> Tačiau prieš nukreipiant srautą į HTTPS, po domeno nukreipimo į SSL Gateway rekomenduojama palaukti 24 val. tam, kad įsigaliotų nauji DNS nustatymai.</cite>
> 
> [[3]](#){.note-ref #id7} - ([1](#id3){.fn-backref}) 
> <cite>Apsaugo duomenų perdavimą nuo serverio iki naršykės. SSL Gateway serveris prisijungs prie jūsų serverio naudodamas standartinį 443 prievadą. Dėmesio: norint įjungti šią parinktį, būtina turėti SSL/TLS sertifikatą serveryje. Be jo jūsų svetainė neveiks. Tačiau nebūtina pratęsti šio sertifikato galiojimo.</cite>
> 
> [[4]](#){.note-ref #id8} - ([1](#id4){.fn-backref}) 
> <cite>Aukštesnis apsaugos lygis padidina saugumą, tačiau gali būti nepalaikomas senesnių naršyklių.</cite>
>


### Domeno konfiguravimas
Apžvelgsime 4 skyrius:

- **Domenai**
- **Serveriai**
- **Užduotys**
- **Graph**


![onglet Domaines](images/10.PNG){.thumbnail}

Skyriuje **Domenai** jūs galite įtraukti ar pašalinti domenus ar subdomenus iš SSL Gateway.

- Paspauskite `+ Domenas`{.action} norėdami pridėti domeną ar subdomeną.

> [!faq]
>
> Jeigu naudojate **Free** planą
>> 
>> Jūs galite įtraukti tik **domeną**, **subdomeną www** ir dar vieną pasirinktą **subdomeną**:
>> 
>> 
>> 
>> > [!primary]
>> >
>> > | Domenas | example.com |
>> > | Subdomenas www | www.example.com |
>> > | Pasirinktinis subdomenas | blog.example.com |
>> > 
>> 
>> 
>> > [!warning]
>> >
>> > - Free planas:
>> > 
>> > Galima naudoti domenus tik iki 3 lygmens (www.example.org).
>> > 
>> 
>> - Pasirinkite ir spauskite `Pridėti`{.action}.
>> 
>> ![ajout domaine free](images/11.PNG){.thumbnail}
>>
>
> Jeigu naudojate **Advanced** planą
>> 
>> Jūs galite pridėti bet kokį veikiantį domeną ar subdomeną.
>> 
>> > [!primary]
>> >
>> > - Parinktis Advanced:
>> > 
>> > Galima naudoti 4 (pvz, blog.france.example.org) ar aukštesnio lygmens domenus.
>> > 
>> 
>> - Pasirinkite ir spauskite `Pridėti`{.action}.
>> 
>> ![ajout domaine advanced](images/12.PNG){.thumbnail}
>>
>


> [!warning]
>
> Pridėjus domeną ar subdomeną, jūs gausite pranešimą apie būtinybę nukreipti domeną į SSL Gateway per 3 dienas.
> Šią operaciją būtina atlikti tam, kad būtų patvirtintas SSL/TLS sertifikatas.
> 


Skyriuje **Serveriai** jūs galite valdyti savo svetainių IP adresus.

- Norėdami pridėti svetainės IP adresą ir prievadą, spauskite `+ Serveris`{.action}.

![onglet serveurs](images/13.PNG){.thumbnail}

> [!faq]
>
> Jeigu naudojate **Free** planą
>> 
>> Galima nurodyti tik vieną IP adresą / prievadą.
>> 
>
> Jeigu naudojate **Advanced** planą
>> 
>> Jūs galite pridėti iki 3 IP adresų / prievadą kiekvienam domenui ar subdomenui.
>> 
>> 
>> > [!primary]
>> >
>> > Jeigu jūs nurodote daugiau IP adresų / prievadų, SSL Gateway paskirstys apkrovą tarp jų naudojant apkrovos paskirstymą.
>> > Plačiau apie apkrovos paskirstymą
>> > 
>> 
>> - Pasirinkite ir spauskite `Pridėti`{.action}.
>> 
>> ![ajout IP/PORT advanced (interne)](images/15.PNG){.thumbnail}
>> 
>


> [!warning]
>
> Šiuo metu nėra galimybės pridėti IPv6 adresų.
> Tačiau tai nėra problema, kadangi jūsų domenas ar subdomenas gali būti nukreiptas į SSL Gateway per IPv6.
> Tuomet SSL Gateway nukreips IPv6 srautą į jūsų serverio IPv4 adresą.
> 


Skyriuje **Užduotys** jūs galite matyti vykdomas SSL Gateway operacijas


![onglet tâches](images/13-bis.PNG){.thumbnail}



> [!warning]
>
> Kol sistema nenustato, kad jūsų domenas ar subdomenas yra nukreiptas į SSL Gateway IP adresą, SSL/TLS sertifikatas nėra sukuriamas.
> Prieiga bus galima per HTTP, kol bus matoma žymė HTTP skiltyje Įrašai.
> 
> ![http only](images/14.PNG){.thumbnail}
>

Langelyje **Graph** galite peržiūrėti jūsų SSL Gateway paslaugoje vykdomų prisijungimų ir užklausų skaičių per minutę.


![onglet metriques](images/17.PNG){.thumbnail}

> [!faq]
>
> Jeigu naudojate **Free** planą
>> 
>> Galite matyti 24 val. statistiką.
>> 
>
> Jeigu naudojate **Advanced** planą
>> 
>> Galite matyti 1 mėn. senumo statistiką.
>> 
>


## SSL sertifikato atnaujinimas

### Svarbu


> [!primary]
>
> Norint atnaujinti Let's Encrypt sertifikatą, domenas ar subdomenas turi būti nukreiptas į SSL Gateway IP adresą.
> - Jeigu taip nėra, o iki SSL/TLS sertifikato atnaujinimo liko 7 dienos, jums bus išsiųstas pranešimas apie būtinybę atnaujinti sertifikatą per 3 dienas.
> - Neatlikus jokių veiksmų per 3 dienas, sertifikatas nėra atnaujinamas, ir jį reikės sugeneruoti iš naujo paspaudus mygtuką:
> 
> ![Regenerate SSL](images/16.PNG){.thumbnail}
>

## Patarimai

### Saltiniu IP taisymas sisteminiuose irasuose

#### Aprasymas
Klientui lankantis jūsų svetainėje, jis jungiasi prie SSL Gateway naudodamas HTTPS, tuomet SSL Gateway nukreipia užklausas į jūsų serverį, prieš tai atlikusi atakų filtravimą. Visa prieiga prie jūsų serverio yra vykdoma iš SSL Gateway.

Tam, kad jūs galėtumėte matyti lankytojo adresą, SSL Gateway prideda šią HTTP informaciją:

- X-Forwarded-For ir X-Remote-Ip: Kliento adresas.
- X-Forwarded-Port ir X-Remote-Port: Kliento naudojamas prievadas.

Šie laukai gali būti suklastoti, jie gali būti naudojami, tik jeigu yra iš patikimų šaltinių, tokių kaip SSL Gateway. SSL Gateway IP adresai yra pateikti:

- Jūsų paskyros Sunrise skiltyje
- SSL Gateway skiltyje
- Lauke Šaltinio IPv4

Šio gido rengimo momentu šie adresai yra **213.32.4.0/24** ir **144.217.9.0/24**. Ateityje bus pridėti papildomi adresai.

Jeigu jūsų serveris juos palaiko, jis gali būti automatiškai sukonfigūruotas vietoje SSL Gateway IP.


#### Apache
- Sukurkite bylą žemiau:
/etc/apache2/conf-available/remoteip.conf
- Įrašykite šias eilutes:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
RemoteIPHeader X-Forwarded-For
RemoteIPInternalProxy 213.32.4.0/24
```


Jūs galite pakeisti kintamuosius %h į %a Apache konfigūravimo direktyvose LogFormat.

- Paruošus konfigūraciją, telieka ją aktyvuoti šiomis komandomis:

```bash
# Aktyvuoti modulį ir konfigūraciją
a2enmod remoteip
a2enconf remoteip

# Paleisti Apache iš naujo, kad įsigaliotų keitimai
service apache2 restart
```


Daugiau apie šią funkciją galite sužinoti [oficialioje apache dokumentacijoje](https://httpd.apache.org/docs/2.4/mod/mod_remoteip.html){.external}.


#### Nginx
- Atverkite svetainės konfigūravimo bylą. Ji turi būti:
/etc/nginx/sites-enabled
- Server skyriuje įrašykite šias eilutes:

```bash
# Trust X-Forwarded-For headers from the SSL Gateway
# See https://www.ovh.com/manager/sunrise/sslGateway/index.html#/sslGateway for an up to date list
set_real_ip_from 213.32.4.0/24;
real_ip_header X-Forwarded-For;
```


Daugiau apie šią funkciją galite sužinoti [oficialioje Nginx dokumentacijoje](http://nginx.org/en/docs/http/ngx_http_realip_module.html){.external}.