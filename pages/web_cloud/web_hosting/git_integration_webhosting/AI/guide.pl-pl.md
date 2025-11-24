35 71 

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Associer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 5**
>>
>> Wyświetlony zostanie formularz powiązania Git. Wymagane jest skonfigurowanie kilku elementów:
>>
>> - Repozytorium GitHub
>> - Gałąź repozytorium GitHub
>> - Klucz SSH (dla prywatnego repozytorium GitHub)
>> - Webhook (opcjonalnie)
>>
>> Kontynuuj czytanie tego przewodnika, aby uzyskać informacje potrzebne do wypełnienia wymaganych pól.

167

Po potwierdzeniu formularza powiązania Git zostaniesz przekierowany na stronę karty `Mes sites`{.action}.

177 179

Możesz również śledzić postęp aktywacji Git w karcie `Mes sites`{.action}. W kolumnie `Git`{.action} tabeli, wpis `En cours`{.action} na linii odpowiedniego strony internetowej informuje, że Git jest w trakcie aktywacji.

Gdy powiązanie Git zostanie wykonane, status `Activé`{.action} pojawi się w kolumnie `Git`{.action} dla odpowiedniego strony internetowej.

185

W tabeli karty `Mes sites`{.action} zidentyfikuj wiersze odpowiadające katalogowi strony internetowej, którą chcesz powiązać z Git. W kolumnie `Git`, jeśli pojawi się wpis `Erreur`, oznacza to, że wystąpiła co najmniej jedna z poniższych błędów:

192 196

Aby dowiedzieć się, jaki dokładnie błąd wystąpił, sprawdź informacje ostatniego wdrożenia. W tabeli kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Informations du dernier déploiement`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Po zidentyfikowaniu błędu(-ów), ponownie powiąż Git. Powtórz operację, klikając przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Associer Git`{.action}.

200 235

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Déployer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Krok 5**
>>
>> Wyświetlony zostanie komunikat potwierdzenia oraz pole wyboru informujące, że w przypadku konfliktu podczas wdrażania, możesz zastosować zmiany zdalne (z repozytorium GitHub) nad zmianami lokalnymi. Zaznacz lub nie zaznacz pole zgodnie ze swoim wyborem, a następnie kliknij `Confirmer`{.action}, aby potwierdzić wdrożenie.
>>
>> > [!warning]
>> >
>> > Aby uniknąć utraty lokalnych zmian, zapisz je przed nadpisaniem zmianami z gałęzi zdalnej.
>>
>> Nowa wersja strony internetowej została pomyślnie wdrożona na Twoim hostingu OVHcloud. Jeśli inni pracują nad tym samym projektem i wprowadzają zmiany do repozytorium GitHub, możesz [skonfigurować webhook na GitHub](#configureWebhook), aby ich zmiany były automatycznie wdrażane na Twoim hostingu. Dzięki temu nie musisz ręcznie wdrażać Git, a Twoja strona internetowa będzie zawsze aktualna.

239 294

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy odpowiedniego strony internetowej, aby wyświetlić nazwy domen lub poddomen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie `Modifier le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 5**
>>
>> Istnieją dwa możliwe scenariusze:
>>
>> **1 - Do strony internetowej są przypisane jedna lub więcej innych domen**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Zmień informacje zgodnie z potrzebami i kliknij `Suivant`{.action}.
>>
>> Wyświetlony zostanie drugi ekran potwierdzenia z podsumowaniem Twoich zmian:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Kliknij `Confirmer`{.action}, aby potwierdzić zmiany w Twojej domenie.
>>
>> **2 - Do strony internetowej jest przypisana tylko jedna domena**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Jak wskazuje komunikat, [usuwaj powiązanie Git](#deleteGitAssociation) wcześniej, zanim zmienisz swoją domenę.

298 347

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy odpowiedniego strony internetowej, aby wyświetlić nazwy domen lub poddomen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie `Détacher le domaine`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 5**
>>
>> Istnieją dwa możliwe scenariusze:
>>
>> **1 - Do strony internetowej są przypisane jedna lub więcej innych domen**
>>
>> Wyświetlony zostanie następujący ekran.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Kliknij `Confirmer`{.action}, aby potwierdzić odłączenie Twojej domeny.
>>
>> **2 - Do strony internetowej jest przypisana tylko jedna domena**
>>
>> Wyświetlony zostanie następujący ekran:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Jak wskazuje komunikat, [usuwaj powiązanie Git](#deleteGitAssociation) wcześniej, zanim odłączysz swoją domenę.

351 385

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Configurer Git`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Krok 5**
>>
>> Wyświetlone zostaną następujące informacje:
>>
>> - Klucz SSH: Jeśli jeszcze tego nie zrobiłeś, [zapisz swój klucz SSH w swoim koncie GitHub](#linkSSHKey).
>> - Repozytorium: Adres Twojego repozytorium Git. To pole jest zasłonięte, ponieważ nie możesz zmienić adresu repozytorium Git. Aby zmienić adres URL repozytorium Git, musisz [usunąć powiązanie Git z Twojego katalogu](#deleteGitAssociation), a następnie ponownie [powiązać katalog z Git](#associateGitRepo).
>> - Gałąź: Nazwa gałęzi repozytorium GitHub. Możesz zmienić to pole, jeśli to konieczne.
>> - URL webhooka: Jeśli chcesz zoptymalizować swoje wdrożenia na Git, [skonfiguruj webhook na GitHub](#configureWebhook).

391 418

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **4** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `informations du dernier déploiement`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Na tym ekranie znajdziesz wszystkie informacje dotyczące ostatniego wdrożenia.

422 467

Kliknij na poniższe karty, aby kolejno wyświetlić każdą z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij menu `Hébergements`{.action}, a następnie wybierz odpowiedni plan hostingu.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 3**
>>
>> Na stronie, która się wyświetli, kliknij kartę `Mes sites`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 4**
>>
>> W tabeli, która się pojawi, kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniego strony internetowej, a następnie `Supprimer Git`{