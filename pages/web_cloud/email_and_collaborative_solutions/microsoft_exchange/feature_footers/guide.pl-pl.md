---
title: 'Tworzenie automatycznych podpisów'
excerpt: 'Dowiedz się, jak dodać automatyczne podpisy do swoich kont e-mail'
updated: 2025-04-28
---

## Wprowadzenie

W Panelu klienta OVHcloud można utworzyć uniwersalne podpisy (stopki) dla adresów e-mail używanych w tej samej domenie (podpisy „firmowe”). Będą one dołączane automatycznie do e-maili wysyłanych z konta użytkownika.

**Dowiedz się, jak utworzyć automatyczny podpis przy użyciu Panelu klienta OVHcloud.**

## Wymagania początkowe

- skonfigurowane rozwiązanie [OVHcloud Exchange](/links/web/emails-hosted-exchange) lub [E-mail Pro](/links/web/email-pro)

<!-- CP-NAV-START:web-exchange -->
<!-- CP-NAV-START:web-email-pro -->
---

### Dostęp do Panelu klienta OVHcloud

**Exchange:**

- **Link bezpośredni:** [Exchange](/links/control-panel/web-exchange)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Exchange`{.action} > Wybierz platformę

**E-mail Pro:**

- **Link bezpośredni:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Wybierz platformę

---
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-exchange -->

## W praktyce

> [!tabs]
> **Exchange**
>>
>>
> **E-mail Pro**
>>
>> 1. Kliknij zakładkę `Web Cloud`{.action}.
>> 1. Kliknij `E-mail Pro`{.action}.
>> 1. Wybierz odpowiednią platformę.
>>

Kliknij kartę `Więcej+`{.action} w menu poziomym i wybierz pozycję `Stopki`{.action}.

![exchangesig](images/exchange-footer-step1.png){.thumbnail}

W tej sekcji zobaczysz przyłączone domeny, dla których możesz utworzyć schemat stopki. Kliknij ikonę `...`{.action}, a następnie pozycję `Konfiguracja`{.action}, aby otworzyć edytor HTML.

![exchangesig](images/exchange-footer-step2.png){.thumbnail}

Edytor umożliwia wybór zmiennych odpowiadających danym użytkownika w ustawieniach konta. Przy użyciu tych zmiennych możesz na przykład utworzyć ogólne zakończenie wiadomości i dodać odpowiedni podpis lub informacje kontaktowe poniżej wiadomości. Kliknij strzałkę w dół, aby wybrać zmienną. Następnie kliknij przycisk `Wstaw zmienną`{.action}, aby dodać ją do okienka edycji.

![exchangesig](images/exchange-footer-step3aag.gif){.thumbnail}

Stopkę tworzy się przy użyciu tagów HTML, które umożliwiają formatowanie. Dostosuj podpis przy użyciu paska narzędzi u góry. Możesz też zweryfikować kod HTML, klikając przycisk `Źródło`{.action}.

![exchangesig](images/exchange-footer-step4.png){.thumbnail}

Zaznacz pole wyboru „Włącz ten podpis tylko dla poczty wychodzącej”, aby zapobiec dodawaniu stopki do e-maili przesyłanych między użytkownikami w tej samej domenie. Gdy podpis będzie gotowy, kliknij przycisk `Potwierdź`{.action}. Podpis będzie dołączany do e-mali wysyłanych z kont użytkowników tej domeny. Po utworzeniu podpisów można je edytować lub usunąć z poziomu Panelu klienta OVHcloud.

Przed zastosowaniem podpisów u użytkowników weź pod uwagę następujące aspekty:

- Szczegółów konta innych niż „Imię”, „Nazwisko” i „Nazwa wyświetlana” nie można edytować z poziomu Panelu klienta OVHcloud, lecz należy je określić w interfejsie OWA („Opcje”, „Ogólne”, „Moje konto”).

![exchangesig](images/exchange-footer-step5.png){.thumbnail}

- Podpis zostanie dodany do treści e-maila bez odstępu, co oznacza, że dobrze byłoby zacząć podpis od co najmniej jednego pustego wiersza.
- W interfejsie OWA nie jest wskazane, czy stopka jest aktywna w danej domenie i **nie ma synchronizacji**. Jeśli użytkownicy dodadzą [własne podpisy](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa#dodawanie-podpisu), e-maile będą zawierać zarówno ich indywidualną stopkę, jak i ogólną stopkę domeny.
- Edytor obsługuje formatowanie HTML, hiperlinki, obrazy itd. Nie należy jednak zbytnio polegać na tych opcjach. Odbiorcy mogą korzystać z klientów poczty, które blokują kod HTML, i osadzone obrazy lub podpisy mogą wyglądać inaczej niż zamierzono. Tagi HTML zostaną całkowicie usunięte, jeśli według ustawień w interfejsie OWA wiadomość jest wysyłana jako „zwykły tekst”.
- „Inicjały” nie są aktywne w usłudze. Dodanie tej zmiennej nie przyniesie żadnego efektu.

## Sprawdź również <a name="go-further"></a>

[Korzystanie z interfejsu Outlook Web App wraz z kontem e-mail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Delegowanie uprawnień do konta e-mail](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_delegation)

[współdzielenie kalendarza w interfejsie OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

Dołącz do [grona naszych użytkowników](/links/community).
