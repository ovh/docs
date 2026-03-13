---
title: 'Co zrobić w przypadku konta zablokowanego z powodu spamu?'
excerpt: 'Dowiedz się, jak zareagować, gdy Twój adres e-mail został zablokowany z powodu spamu'
updated: 2026-03-05
---

## Wprowadzenie

Gdy Twój adres e-mail zostaje zablokowany z powodu spamu, oznacza to, że podczas wysyłania e-maili z tego adresu wykryto podejrzaną aktywność. W takiej sytuacji nie możesz już wysyłać e-maili z tego adresu. Musisz wówczas zrozumieć, dlaczego wykryto podejrzaną aktywność, i podjąć działania, aby zapobiec powtórzeniu się tej sytuacji.

**Dowiedz się, jak zareagować, gdy Twój adres e-mail zostaje zablokowany z powodu spamu.**

## Wymagania początkowe

- Posiadanie [usługi e-mail OVHcloud](/links/web/emails).

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Dostęp do Panelu klienta OVHcloud

**MX Plan:**

- **Link bezpośredni:** [MX Plan](/links/control-panel/web-mx-plan)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `MX Plan`{.action} > Wybierz usługę MX Plan

**E-mail Pro:**

- **Link bezpośredni:** [E-mail Pro](/links/control-panel/web-email-pro)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `E-mail Pro`{.action} > Wybierz platformę

**Exchange:**

- **Link bezpośredni:** [Exchange](/links/control-panel/web-exchange)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Exchange`{.action} > Wybierz platformę

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-mx-plan -->

## W praktyce <a name="instructions"></a>

Zanim przejdziesz dalej i jeśli blokada dotyczy adresu e-mail typu MX Plan, zidentyfikuj technologię e-mail wykorzystywaną przez Twoją usługę, aby postępować zgodnie z właściwą procedurą odblokowania.

> [!primary]
>
> **Identyfikacja technologii e-mail usługi MX Plan.**
>
> W zależności od daty aktywacji usługi MX Plan lub ostatniej migracji, powiązana technologia e-mail może się różnić. Wersja ta jest charakteryzowana przez interfejs poczty webmail. Aby ją zidentyfikować:
>
> - W zakładce `Informacje ogólne`{.action} sprawdź technologię wskazaną przy pozycji **Webmail** w sekcji `Abonament`{.action}.
>
> ![Identyfikacja technologii e-mail w Panelu klienta MX Plan](images/technology-email.png){.thumbnail .w-500}
>
> - Jeśli wyświetlona technologia to **RoundCube**, postępuj zgodnie z instrukcjami z zakładki **MX Plan - RoundCube**.
> - Jeśli wyświetlona technologia to **OWA** lub **Zimbra**, postępuj zgodnie z instrukcjami z zakładki **MX Plan - OWA / Zimbra**.

### Etap 1: dlaczego Twój adres e-mail jest zablokowany z powodu spamu? <a name="step1"></a>

Gdy podczas wysyłania e-maili zostanie wykryta podejrzana aktywność, dany adres zostaje automatycznie zablokowany. W takiej sytuacji nie możesz już wysyłać e-maili z tego adresu.

> [!warning]
>
> "Podejrzana aktywność" oznacza, że:
>
> - Serwer antyspamowy, który skanuje e-maile przy wysyłaniu, stwierdził, że jeden lub więcej elementów e-maila jest uznawanych za podejrzane i może stanowić spam.
> - Częstotliwość wysyłki i liczba odbiorców są zbyt duże, co sprawia, że wysyłka jest traktowana jako spamming. Do masowej wysyłki e-maili konieczne jest korzystanie z usługi listy mailingowej, a nie standardowego adresu e-mail.
>
> Dokładne przyczyny blokady nie mogą być ujawnione, aby uniknąć prób obejścia systemu wykrywania spamu. Aby przetestować treść e-maila, możesz skorzystać z narzędzia zewnętrznego wobec OVHcloud, takiego jak [Mailtester](https://www.mail-tester.com/).
>

Przede wszystkim upewnij się u użytkownika(-ów) zablokowanego adresu e-mail, że nie jest (nie są) on(i) bezpośrednio odpowiedzialny(-i) za blokadę, w wyniku nietypowego korzystania z adresu e-mail (na przykład w wyniku masowej wysyłki e-maili). Jeśli tak jest, należy poprawić sytuację przed odblokowaniem adresu.

Jeśli podejrzana aktywność wykryta przez filtr antyspamowy nie została zainicjowana przez uprawnionego(-ych) użytkownika(-ów) adresu e-mail, podejmij następujące działania:

- Przeprowadź analizę antywirusową każdego urządzenia korzystającego ze zablokowanego adresu e-mail i zastosuj odpowiednie poprawki, jeśli urządzenia te są zainfekowane.

- Sprawdź wszystkie programy wykorzystujące dane logowania zablokowanego adresu e-mail (np. faks, oprogramowanie biznesowe, program pocztowy).

- Sprawdź przekierowania ustawione na zablokowanym adresie e-mail.

- Sprawdź filtry zastosowane na zablokowanym adresie e-mail, zarówno w programie pocztowym, jak i w poczcie webmail.

- Sprawdź automatyczne odpowiedzi skonfigurowane na zablokowanym adresie e-mail, zarówno w programie pocztowym, jak i w poczcie webmail.

### Etap 2: sprawdzenie statusu adresu e-mail i uzyskanie dostępu do powiązanego zgłoszenia

Wybierz odpowiednią usługę e-mail w poniższych zakładkach:

> [!tabs]
> **Exchange**
>>
>> Przejdź do zakładki `Konta e-mail`{.action} Twojej platformy. Jeśli w kolumnie "status" danego adresu e-mail widnieje "zablokowany", kliknij `...`{.action} po prawej stronie konta, a następnie `Odblokuj`{.action}. Odblokowanie adresu e-mail nie odbywa się automatycznie. Skontaktuj się z pomocą techniczną za pośrednictwem zgłoszenia, odpowiadając na 3 zadane pytania.<br>
>> Przejdź do [etapu 3](#step3) przewodnika.
>>
>> ![Kolumna status zablokowany w zakładce Konta e-mail Exchange](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> Przejdź do zakładki `Konta e-mail`{.action} Twojej platformy. Jeśli w kolumnie "status" po prawej stronie danego adresu e-mail widnieje "Spam", kliknij tę pozycję, a następnie `Odpowiedz na zgłoszenie`{.action}. Odblokowanie adresu e-mail nie odbywa się automatycznie. Skontaktuj się z pomocą techniczną za pośrednictwem zgłoszenia, odpowiadając na 3 zadane pytania. <br>
>> Przejdź do [etapu 3](#step3) przewodnika.
>>
>> ![Kolumna status Spam w zakładce Konta e-mail E-mail Pro](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX Plan - OWA / Zimbra**
>>
>> Przejdź do zakładki `Konta e-mail`{.action} Twojej platformy. Jeśli w kolumnie "status" po prawej stronie danego adresu e-mail widnieje "Spam", kliknij tę pozycję, a następnie `Odpowiedz na zgłoszenie`{.action}. Odblokowanie adresu e-mail nie odbywa się automatycznie. Skontaktuj się z pomocą techniczną za pośrednictwem zgłoszenia, odpowiadając na 3 zadane pytania.<br>
>> Przejdź do [etapu 3](#step3) przewodnika.
>>
>> ![Kolumna status Spam w zakładce Konta e-mail MX Plan](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX Plan - RoundCube**
>>
>> Jeśli blokada dotyczy adresu e-mail MX Plan z pocztą webmail **RoundCube**, nie ma zgłoszenia do pomocy technicznej. Przed wykonaniem poniższych instrukcji zapoznaj się z [etapem 1](#step1) tego przewodnika.
>>
>> Przejdź do zakładki `E-maile`{.action} Twojej platformy. Jeśli w kolumnie "Zablokowane ze względu na SPAM" widnieje "Tak", kliknij tę pozycję, a następnie `Zmień hasło`{.action}. Twój adres e-mail jest teraz odblokowany i nie musisz wykonywać [etapu 3](#step3).
>>
>> ![Kolumna Zablokowane ze względu na SPAM w zakładce E-maile MX Plan RoundCube](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > W rzadkich przypadkach kolumna "Zablokowane ze względu na SPAM" może wskazywać "Nie", mimo że adres e-mail jest zablokowany. Jeśli podjąłeś niezbędne działania w celu zabezpieczenia adresu e-mail, rozwiązanie pozostaje takie samo jak powyżej.

### Etap 3: uzyskanie dostępu do zgłoszenia <a name="step3"></a>

Po wykonaniu etapu 2 zostaniesz przekierowany do okna "Moje zgłoszenia serwisowe". Kliknij przycisk `...`{.action} po prawej stronie zgłoszenia o temacie "Account locked for spam.", a następnie kliknij `Pokaż szczegóły`{.action}.

![Okno Moje zgłoszenia serwisowe ze zgłoszeniem dotyczącym blokady z powodu spamu](images/blocked-for-SPAM-02.png){.thumbnail}

Znajdziesz tam e-mail, który został do Ciebie wysłany. Wiadomość ta generuje zgłoszenie do pomocy technicznej.

Zgłoszenie wygląda następująco:

>
> Drogi Kliencie,
>
> Nasz system wykrył, że adres **youraddress@domain.com** hostowany w naszych systemach w ramach usługi **servicename** jest wykorzystywany do rozsyłania niechcianych wiadomości (spam).
> Wysyłanie e-maili zostało więc tymczasowo wyłączone.
>
> Na chwilę obecną wykryliśmy następującą liczbę podejrzanych wiadomości: **X**
>
> Aby pomóc nam w reaktywowaniu wysyłki e-maili z adresu: **address@domain.com**,
> odpowiedz na niniejszą wiadomość, załączając wyjaśnienia dotyczące następujących kwestii:
>
> - Czy jesteś nadawcą tej wiadomości e-mail (patrz nagłówek poniżej)?
>
> - Czy masz regułę przekierowującą na inny adres e-mail?
>
> - Czy odpowiedziałeś na spam?
>
> Te odpowiedzi pomogą OVHcloud szybko reaktywować Twoje konto.
> <br>
> <br>
>

W dalszej części tej wiadomości przekazano próbkę nagłówków wysłanych e-maili.

Nagłówki te pozwalają określić trasę i pochodzenie wysłanych e-maili.

> [!primary]
>
> Po rozpatrzeniu zgłoszenia przez dział pomocy technicznej i odblokowaniu Twojego adresu e-mail zmień hasło do tego adresu, upewniając się, że jest ono wystarczająco silne. Możesz skorzystać z [narzędzia do generowania silnych haseł](https://www.cnil.fr/fr/generer-un-mot-de-passe-solide) udostępnionego przez CNIL. Możesz również zapoznać się z [poradami CNIL dotyczącymi tworzenia dobrego hasła](https://www.cnil.fr/fr/les-conseils-de-la-cnil-pour-un-bon-mot-de-passe).

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
