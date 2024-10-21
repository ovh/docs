---
title: OVHcloud AntySpam - Dobre praktyki i odblokowanie adresu IP
excerpt: Poznaj nasze dobre praktyki antyspamowe i sposoby odblokowania adresu IP zablokowanego przez SPAM
updated: 2022-10-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Dla każdego adresu IP dostępnego w produktach i usługach OVHcloud, będącego Dostawcą dostępu do Internetu, zapisujemy go i zarezerwujemy dla organizacji takich jak [RIPE](https://www.ripe.net/) lub [ARIN](https://www.arin.net/). W tym przypadku, w przypadku sporów w bazie danych *WHOIS*, wydajemy się *nadużywać* prawa własności intelektualnej.

Jeśli dany Destination IP zostanie zgłoszony do organizacji takich jak Spamhaus, SpamCop, itp., które walczą ze SPAM, złośliwymi stronami i phishingiem, stawką jest reputacja całej sieci OVHcloud.

OVHcloud musi zatem dbać o reputację, jakość i bezpieczeństwo sieci, co jest również ważną częścią Twojej usługi.

### Jak działa system ochrony?

Nasz system opiera się na technologii antyspamowej Vade Secure.

Po zablokowaniu adresu IP ze względu na SPAM, otrzymasz e-mail z informacjami, jak pokazano w poniższym przykładzie:

> 
> Drogi Kliencie,
>
> Ochrona Anty-spamowa wykryła dużą wysyłkę spamu z jednego z adresów IP:
122.122.122.122
>
> Aby zapewnić bezpieczeństwo naszej sieci, ruch wychodzący z Twojego serwera na port 25 został zawieszony.
> Poniżej znajduje się próbka zablokowanych e-maili, aby móc przeprowadzić weryfikację:
>
> Destination IP: 188.95.235.33 - Wiadomość-ID: d24aa492-5f37-457f-9595-23ddc9e0f714@xxxxxxxxxxxxx.xx.local - Spam score 300 <br>
> Destination IP: 188.95.235.33 - Wiadomość-ID: fc090jdhf934iu09bf084bfo92@xxxxxxxxxxxxx.com - Spam score 300<br>
> Destination IP: 188.95.235.33 - Wiadomość-ID: P0hbfo93407684bfoqljrlqvpLatS3RRB9rZw7e8s@xxxxxxxxxxxx.online - Spam score 300<br>
> Destination IP: 188.95.235.33 - Wiadomość-ID: 6ZUnls843bnf0934StxFasYGmhtDJRo@xxxxxxxxxxxx.online - Spam score 300<br>
> Destination IP: 188.95.235.33 - Wiadomość-ID: zcb.3z54da3kdfkl45802n0c0q98rqcc57e3b8aadfac63b2c408e3f5f9a27.1d44jkgnddfef.166489320375@xxxxxx.xxxx.net - Spam score 300<br>
> Destination IP: 188.95.235.33 - Wiadomość-ID: zcb.3z54da33hn98v9bcq-nrf3r67cc57e3b8aadfac63b2c408e3f5f9a27.1d44jd9340252.1655508652095@xxxxxx.xxxx.net - Spam score 300
> <br>
> <br>

## W praktyce

**Co zrobić, gdy otrzymasz e-mail z alertem?**

Operacja polega na identyfikacji problemu i jego rozwiązaniu, a następnie odblokowaniu IP.

### Zidentyfikuj i rozwiąż problem

**Przed odblokowaniem adresu IP upewnij się, że podjął następujące kroki:**

- Zatrzymaj wysyłkę e-maili (na przykład: zatrzymać wszystkie programy poczty elektronicznej, takie jak qmail, Postfix, Sendmail itp.).
- Sprawdź kolejkę wiadomości e-mail (np. qmHandle dla qmail, postqueue -p dla Postfix) i wyczyść.
- Analizuj logi za pomocą **Message-ID** w alercie blokady.
- Jeśli wysyłasz SPAM lub nieprawidłowe wiadomości e-mail, rekomendujemy rozwiązanie problemu **przed** odblokowaniem adresu IP. Proszę zapoznać się z tym przewodnikiem, aby uzyskać [najlepsze praktyki (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#bestpractices) w zakresie poczty elektronicznej

Po rozwiązaniu problemu możesz odblokować Destination IP wykonując następujące kroki.

> [!alert]
> 
> W żadnym przypadku nie odblokuj adresu IP, zanim nie zawiesisz wysyłki e-maili z Twojego serwera i nie odblokuj kolejki wiadomości. W przeciwnym razie po raz drugi zostanie zablokowany na dłuższy czas. 
>

### Odblokuj adres IP

#### Odblokuj adres IP w Panelu klienta

W [Panelu klienta OVHcloud](https://ca.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/ca/fr/&ovhSubsidiary=qc) przejdź do sekcji `Bare Metal Cloud`{.action} i kliknij `Network`{.action}. Następnie kliknij przycisk `IP`{.action}.

W żółtym ramce dla alertów kliknij rozwijaną strzałkę `Wyświetl wszystkie moje alerty`{.action}, aby wyświetlić wszystkie alerty na Twoim adresie IP.

Jeśli jeden z Twoich adresów IP dotyczy alertu, informacje zostaną wyświetlone poniżej:

![Alert przeciw spamie](images/alertblockedip.png){.thumbnail}

W sekcji "Moje publiczne adresy IP i powiązane usługi" kliknij przycisk `...`{.action} obok IP lub powiązanej z nim usługi i wybierz opcję `Antyspam`{.action}.

![antyspam](images/antispam.png){.thumbnail}

W nowej zakładce kliknij `Zdjęcie blokady antyspam`{.action} i zatwierdź.

![Odblokuj IP](images/unblockip.png){.thumbnail}

IP jest odblokowywane. Operacja może trwać kilka minut.

Po zakończeniu operacji Twój Destination IP zostanie odblokowany.

#### Odblokuj adres IP z poziomu API OVHcloud

Zaloguj się do interfejsu [API OVHcloud](https://eu.api.ovh.com/) i postępuj zgodnie z poniższymi instrukcjami. Aby uzyskać więcej informacji na temat korzystania z API OVHcloud, zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)".

Pobierz listę adresów IP każdej usługi OVHcloud (Hosted Private Cloud / VPS / Public Cloud / Serwer dedykowany):

> [!api]
>
> @api {v1} /ip GET /ip
>

**type**: Wskaż rodzaj IP (Dedicated, PCC, VPS, vRack, PCI, itp.)

Oto przykład:

```bash
"2001:41d0:67:d200::/56",
"2001:41d0:68:a00::/56",
"2001:41d0:68:f000::/56",
"2001:41d0:117:db00::/56",
"122.122.122.121/28",
"145.56.222.96/28",
"188.81.49.30/28",
```

Następnie wyszukaj adresy IP w danym stanie, korzystając z następującego połączenia. Jeśli znasz już zablokowany Destination IP, możesz przejść do [kolejnego](#unblockip) etapu:

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam
>

**ip** : określić pobrany blok IP na poprzednim etapie za pomocą maski sieciowej. Na przykład 122.122.122.121/28<br>
**State** : wskaż stan, którego szukasz.

Oto przykład wyniku (w tym przypadku wybrano blok 122.122.122.121/28):

```bash
"122.122.122.122" 
```

Możesz uzyskać informacje na temat blokady za pomocą następującego połączenia, w przeciwnym razie przejdź do [kolejnego](#unblockip) etapu.

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}
>

**ip** : określić pobrany blok IP na poprzednim etapie za pomocą maski sieciowej.<br>
**ipSpamming** : wskaż uprzednio pobrany Destination IP w stanie "blockedForSpam".

Oto przykład wyniku (w tym przypadku wybrano blok 122.122.122.121/28 oraz IP 122.122.122.122):

```bash
time: 3600,
date: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
state: "blockedForSpam" 
```

Więc:

```bash
- The IP is blocked for 1 hour (or 3600 seconds).
- It was blocked on 29/08/2022 at 5:42 p.m.
- Its current state is blocked.
```

Jeśli chcesz uzyskać statystyki dotyczące tego, co zostało wykryte, skorzystaj z następującego wywołania api, w przeciwnym razie przejdź do [kolejnego](#unblockip) etapu.

> [!api]
>
> @api {v1} /ip GET /ip/{ip}/spam/{ipSpamming}/states
>

**ip** : określić pobrany blok IP na poprzednim etapie za pomocą maski sieciowej.<br>
**ipSpamming** : wskaż uprzednio pobrany Destination IP w stanie "blockedForSpam".<br>
**from and to** : użyj formatu daty użytego w poprzedniej funkcji (YYYY-MM-DDTHH:MM+01:SS).

Oto przykład:

```bash
{
"messageId": "2PXQSX-3JRAUU-SF@obfuscated.com",
"destinationIp": "188.95.235.33",
"date": 1385640992,
"spamscore": 410
}
```

##### **Odblokuj IP** <a name="unblockip"></a>

> [!alert]
> WAŻNE!
W żadnym wypadku nie odblokuj adresu IP bez zawieszenia wysyłki e-maili z Twojego serwera i opróżnij kolejkę wiadomości. W przeciwnym razie po raz drugi zostanie zablokowany na dłuższy czas. 
>

Aby odblokować Destination IP, zadzwoń w następujący sposób:

> [!api]
>
> @api {v1} /ip POST /ip/{ip}/spam/{ipSpamming}/unblock
>

**ip** : podaj blok adresów IP odzyskany na poprzednim etapie za pomocą maski sieciowej.<br>
**ipSpamming** : podaj na przykład Destination IP, który został wcześniej pobrany ze stanu "blockedForSpam".

Oto przykład:

```bash
"message": "This IP address is still blocked for 129 seconds"
```

Rezultat trochę później niż 129 sekund później:

```bash
time: 3600,
data: "2022-08-29T17:42:50+01:00",
ipSpamming: "122.122.122.122",
State: "unblocking" 
```

Odblokowanie adresu IP może zająć kilka minut.

### W przypadku wyników fałszywie dodatnich

W niektórych przypadkach alert antyspamowy może być fałszywie dodatni. Jeśli sprawdzasz i odkryłeś, że **Message-ID** jest przypisany do poprawnego adresu e-mail, upewnij się,  że Twoje wiadomości e-mail są zgodne z [RFC (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#rfc) i [dobrymi praktykami (EN)](/pages/bare_metal_cloud/dedicated_servers/antispam_best_practices#bestpractices).

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.