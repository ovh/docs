---
title: "Konfiguracja i korzystanie z Git na hostingu OVHcloud"
excerpt: "Dowiedz się, jak skonfigurować i korzystać z Git na Twoim hostingu w Panelu klienta OVHcloud"
updated: 2024-08-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

W dzisiejszym świecie cyfrowym społeczeństwa stają się coraz bardziej dynamiczne i innowacyjne. Zdolność skutecznego zarządzania i wdrażania kodu strony WWW jest kluczowa dla utrzymania konkurencyjności i rentowności Twojej marki. Git, najpopularniejszy na świecie system zarządzania wersjami, pozwala na przechowywanie kodu strony internetowej na platformach takich jak GitHub, umożliwiając lepsze śledzenie zmian, a także szybszą automatyzację i wdrożenia. Jeśli jesteś klientem OVHcloud, dysponujesz solidną infrastrukturą do hostowania strony WWW, przy jednoczesnym wykorzystaniu zalet Git i GitHub do rozwoju i skalowania strony WWW.

**Dowiedz się, jak skonfigurować Git i korzystać z niego w ramach Twojego hostingu w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](/links/web/hosting).
- Dostęp do [Panelu klienta OVHcloud](/links/manager), sekcja Web Cloud.
- Posiadanie konta [GitHub](https://github.com/){.external} i logowanie.

## W praktyce

> [!primary]
>
> Aby powiązać i skonfigurować Git, wprowadź zmiany na koncie GitHub. Przed rozpoczęciem korzystania z przewodnika zaloguj się do konta GitHub.
>

### Przypisz katalog do Git <a name="associateGitRepo"></a>

> [!warning]
>
> Po dołączeniu katalogu do Git wszystkie nazwy domen w tym katalogu będą również powiązane z Git. Na przykład, jeśli katalog odpowiadający przypisanej do Ciebie stronie WWW to `www`, wówczas wszystkie domeny przypisane do katalogu `www` będą również powiązane z Git.
>

Zaloguj się do [Panelu klienta OVHcloud](/links/manager) i wykonaj następujące czynności:

- Przejdź do zakładki `Web Cloud`{.action}.
- Wybierz hosting w rubryce `Hosting`{.action} po lewej stronie.
- Kliknij zakładkę `MultiSite`{.action}.
- W tabeli, która się wyświetli wskaż linię odpowiadającą katalogowi, który chcesz powiązać z Git.
- Kliknij przycisk `...`{.action} i wybierz `Powiąż Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Zostanie wyświetlony formularz powiązania Git. Należy skonfigurować kilka elementów:

- Klucz SSH
- Repozytorium GitHub
- Gałąź repozytorium GitHub
- Webhook (opcjonalnie)

### Przypisz klucz SSH do GitHuba <a name="linkSSHKey"></a>

> [!primary]
>
> Wygenerowanie klucza SSH jest kluczowym etapem, ponieważ ustanawia bezpieczne, zaszyfrowane połączenie między katalogiem Twojej strony WWW i repozytorium GitHub. Klucz ten gwarantuje, że transfer danych oraz modyfikacje kodu są realizowane w bezpieczny i uwierzytelniony sposób, zapobiegając nieautoryzowanemu dostępowi oraz zapewniając integralność kodu.
>

Skopiuj i zapisz klucz SSH na koncie GitHub. Pozwala to na nawiązanie bezpiecznego połączenia bez konieczności wprowadzania hasła do każdej operacji Git, którą będziesz musiał wykonać.

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Settings`{.action}.
- Na nowej stronie kliknij `SSH and GPG keys`{.action} w kolumnie po lewej stronie.
- Wybierz `New SSH key`{.action} lub `Add SSH key`{.action}.

Zostanie wyświetlony formularz dodawania nowego klucza SSH:

- **Title** : dodaj opis dla Twojego klucza SSH. Na przykład możesz nazwać ten klucz "OVHcloud".
- **Type of key**: pozostaw wartość domyślną `authentication key`{.action}
- **Key** : wklej klucz SSH.

Aby zatwierdzić informacje, kliknij `Add SSH key`{.action}. Jeśli zostanie wyświetlony monit, potwierdź dostęp do konta w GitHub.

#### Ustaw repozytorium GitHub

Powrót do formularza przypisania Git w Panelu klienta OVHcloud. Wprowadź adres repozytorium GitHub. Jeśli nie masz jeszcze repozytorium GitHub dla swojego projektu, utwórz je.

Aby utworzyć nowe repozytorium:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Kliknij `New`{.action} po prawej stronie ekranu, który się wyświetli.

Nadaj nazwę repozytorium i podaj wymagane informacje.

> [!warning]
>
> Zaznacz opcję `Add a README file`, aby GitHub poprawnie zainicjował repozytorium.
>

Na koniec kliknij przycisk `Create Repository`{.action}.

Skopiuj adres repozytorium GitHub. Musi mieć formę `https://github.com/<username>/<repository_name.git>`{.action}. Wróć do formularza kojarzenia Git i wklej adres Twojego repozytorium GitHub w polu `Repozytorium`{.action}. Jeśli adres ma niepoprawny format, wyświetlany jest następujący komunikat o błędzie:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-branch-name.png){.thumbnail}

Teraz zdefiniuj gałąź repozytorium GitHub. Domyślną gałęzią jest `main`, ale jeśli chcesz użyć innej gałęzi, utwórz ją w GitHubie wykonując poniższe kroki:

- Zaloguj się do swojego konta GitHub.
- Kliknij na Twój obraz profilu w prawym górnym rogu, a następnie `Your repositories`{.action}.
- Przejdź do odpowiedniego repozytorium GitHub.
- Kliknij na `Main`{.action}, następnie `View all branches`{.action}, lub kliknij bezpośrednio na zakładkę `x Branch`{.action}.
- Po prawej stronie ekranu, który się wyświetli kliknij `New branch`{.action}.
- Nadaj nazwę nowej gałęzi i potwierdź, klikając na `Create new branch`{.action}.

Powróć do formularza stowarzyszenia Git w Panelu klienta OVHcloud i podaj nazwę nowo utworzonej gałęzi.

#### Skonfiguruj automatyczne wdrażanie

W dolnej części formularza kojarzenia Git, wyświetla się sekcja `Skonfiguruj automatyczne wdrożenie`{.action} wraz z adresem URL elementu webhook. Konfiguracja interfejsu webhook pozwala repozytorium GitHub na automatyczne powiadamianie hostingu OVHcloud o zdarzeniach, które mają miejsce w repozytorium GitHub (nowe wdrożenie, zmiana kodu, itp.). Funkcja ta jest szczególnie przydatna, jeśli pracujesz w grupie nad tym samym projektem i chcesz być na bieżąco ze wszystkimi zmianami w repozytorium GitHub. Aby dowiedzieć się więcej, sprawdź, jak [skonfigurować webhook na GitHubie](#configureWebhook).

#### Zatwierdź powiązanie Git

Przed zatwierdzeniem formularza skojarzenia Git, upewnij się, że:

- Twój klucz SSH został zarejestrowany na koncie GitHub.
- Adres repozytorium GitHub jest poprawny. Musi mieć formę `https://github.com/<username>/<repository_name.git>`{.action}.
- Nazwa gałęzi repozytorium GitHub jest poprawna.
- Twój katalog instalacyjny jest pusty.

Aby zatwierdzić informacje zawarte w formularzu powiązania Git, kliknij przycisk `Zastosuj konfigurację`{.action}.

### Aktywacja powiązania Git

#### Sukces w powiązaniu z Git

Po zatwierdzeniu formularza Asocjacja Git zostaniesz przekierowany do zakładki MultiSite.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `In progress`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: If you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: Address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: Name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory> directory?`{.action} option if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Na dole formularza, który się wyświetla znajdź adres pola `URL webhooka`{.action} i skopiuj go. Teraz zapisz adres URL i skonfiguruj webhook na koncie GitHub.

#### Skonfiguruj webhook <a name="configureWebhook"></a>

Zaloguj się na swoje konto GitHub i przejdź do repozytorium, w którym chcesz skonfigurować webhook. Przejdź do zakładki `Settings`{.action}, a następnie w bocznym menu ustawień kliknij `Webhooks`{.action}. Kliknij przycisk `Add webhook`{.action}, aby przejść do formularza:

- **Payload URL**: wprowadź adres URL podany w formularzu powiązania Git (`URL webhooka`{.action}).
- **Content type** : wybierz `application/json`{.action} jako typ treści dla przesłanych danych.
- **Secret**: klucz jest opcjonalny. GitHub będzie go używać do podpisywania wiadomości wysyłanych przez webhook, zwiększając tym samym bezpieczeństwo.
- **SSL verification** : jeśli Twoja strona WWW używa protokołu HTTPS, pozostaw tę opcję włączoną, aby zwiększyć bezpieczeństwo.
- **Which events would you like to trigger this webhook ?** : wybierz zdarzenia, które spowodują wysłanie funkcji webhook. W przypadku wdrożenia automatycznego, `Just the push event`{.action} (Just the push event) jest często wystarczające, ale możesz wybrać `Send me everything`{.action}, aby otrzymywać powiadomienia o wszystkich zdarzeniach.
- **Active** : upewnij się, że zaznaczone jest pole wyboru pozwalające na aktywację elementu webhook.

Kliknij przycisk `Add webhook`{.action}, aby zarejestrować i aktywować nowy webhook.

#### Przetestuj Twój webhook

Po utworzeniu elementu webhook w GitHubie przejdź do listy elementów webhook i wybierz ten, który właśnie utworzyłeś, lub kliknij na `Edit`{.action}.

Na wyświetlonym ekranie kliknij zakładkę `Recent Deliveries`{.action}. Aby wysłać zdarzenie testowe specjalnie, GitHub zazwyczaj wysyła zdarzenie `ping` podczas tworzenia elementu webhook, a do przetestowania tego zdarzenia możesz użyć przycisku `Redeliver`{.action} obok tego zdarzenia.

Jeśli test się powiódł, zakładka `Response`{.action} zwraca kod 200. Jeśli kod błędu zostanie zwrócony (zazwyczaj 500 lub 400), oznacza to, że webhook został nieprawidłowo skonfigurowany. Wróć do formularza dodawania elementu webhook i sprawdź informacje, a w szczególności adres URL elementu webhook dostarczony przez OVHcloud.

#### Korzystanie z funkcji webhook

Po skonfigurowaniu elementu webhook kod Twojej strony WWW będzie aktualizowany automatycznie za każdym razem, gdy pojawią się zmiany w repozytorium GitHub. Na przykład jeśli w repozytorium GitHub jedna ze współpracowników wprowadzi zmiany, kod Twojej strony WWW zostanie zaktualizowany lokalnie (na Twoim hostingu OVHcloud).

### Zakończenie

Powiązałeś kod Twojej strony WWW z Git za pomocą repozytorium GitHub. Możesz teraz wdrożyć zmiany w repozytorium GitHub na Twoim hostingu lub wdrożyć je automatycznie za pomocą interfejsu webhook, sprawdzić logi wdrożeń i wykonywać wiele operacji - wszystko to za pomocą kilku kliknięć w Panelu klienta.

## Sprawdź również

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).