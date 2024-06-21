---
title: "Typowe błędy związane z zabezpieczaniem strony www za pomocą certyfikatu SSL"
excerpt: "Dowiedz się, jak uniknąć typowych błędów dotyczących zabezpieczania strony WWW za pomocą certyfikatu SSL"
updated: 2024-01-11
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W tym tutorialu znajdziesz przykłady sytuacji dotyczących zabezpieczenia Twojej strony WWW za pomocą certyfikatu SSL.

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz trudności, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Niestety firma OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

**Dowiedz się, jak uniknąć typowych błędów podczas zabezpieczania strony WWW za pomocą certyfikatu SSL**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](/links/web/hosting){.external}.
- Zarejestrowanie co najmniej jednej [domeny](/links/web/domains){.external}.
- Dostęp do [panelu klienta OVHcloud](/links/manager){.external}, sekcja "Web cloud".

## W praktyce

### Zawartość mieszana (mixed content)

Twoja strona WWW nie ładuje elementów zewnętrznych, takich jak przyciski *Facebook* i *X/Twitter*? Interakcje na Twojej stronie WWW nie działają tak, jak gdy wchodzisz na Twoją stronę z "HTTP"? Przyczyną może być to, że witryna sieci Web zawiera treści mieszane. 

Od kilku lat przeglądarki, takie jak *Google Chrome*, *Mozilla Firefox* i *Microsoft Edge/Internet Explorer* uniemożliwiają stronom WWW używającym "HTTPS" ładowanie elementów stron, jeśli są one dostępne za pośrednictwem "HTTP". Dzięki temu poufność dostarczona przez protokół "HTTPS" nie zostanie naruszona przez element załadowany przy użyciu "HTTP". 

W większości przypadków są to skrypty zewnętrzne pochodzące z innych stron internetowych, takich jak sieci społecznościowe. W takim przypadku wystarczy zastąpić w skryptach adresy URL "HTTP" przez adresy URL "HTTPS", aby można było załadować te skrypty.

> [!primary]
>
> Niektóre strony WWW korzystają z sieci [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) do hostowania na przykład bibliotek *Javascript* (takich jak *JQuery*). 
> Jeśli usługi CDN dostarczają bibliotekę z adresem URL oznaczonym jako "HTTP", Twoja strona WWW może zostać objęta treścią **mixed content**. 
>

Skąd mam wiedzieć, czy dotyczy to mojej strony?

Narzędzia do debugowania dostarczone przez *Mozilla Firefox* i *Google Chrome* mogą informować, czy Twoja strona WWW zawiera elementy zablokowane z powodu mieszanych treści. W dokumentacji dostępnej w witrynie [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} wyjaśniono sposób użycia tych narzędzi do wyszukiwania mieszanych treści.

### Treść zduplikowana (duplicate content)

"Duplikowanie zawartości" oznacza posiadanie tej samej treści na kilku różnych adresach URL. Wyszukiwarki postrzegają to jako próbę ulepszenia pozycjonowania (SEO). W ten sposób penalizują one strony internetowe, których treść jest powielana.

Aby tego uniknąć, sugerujemy, aby, jeśli Twoja strona WWW działa poprawnie jako "HTTPS", przekierować zawartość "HTTP" na "HTTPS". Dzięki temu użytkownicy Twojej strony będą automatycznie przekierowywani na adres Twojej zawartości sieci Web przy użyciu protokołu "HTTPS", a w przypadku tej samej treści będzie dostępny tylko jeden adres. 

Oto przykład przekierowania, które możesz dodać w pliku "[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" w katalogu głównym Twojej strony WWW (zamieniając adres URL *https://www.yourdomain.tld* na Twój):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Sprawdź również <a name="go-further"></a>
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).