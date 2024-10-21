---
title: FAQ - Zmiana w miesięcznych rozliczeniach
excerpt: ""
updated: 2023-12-15
---

> [!warning]
>
> Data rozpoczęcia stosowania: 2024/02/01

## FAQ

### Co się stanie z fakturą za instancje rozliczane w trybie miesięcznym?

Płatności miesięczne za instancje są teraz skonsolidowane na jednej fakturze wraz z instancjami rozliczanymi w modelu godzinowym. Zasada jest następująca: miesięczny abonament za instancję w miesiącu M pojawi się na fakturze wystawionej 1-go dnia miesiąca M+1.

### Od kiedy należna jest opłata za instancję rozliczaną miesięcznie?

Każda instancja zadeklarowana jako płatna w trybie miesięcznym i istniejąca 1-go dnia bieżącego miesiąca zostanie rozliczona za pełny miesiąc. Pojawi się na kolejnej fakturze 1-go dnia następnego miesiąca wraz z innymi produktami Public Cloud.

### Jeśli uruchomię instancję rozliczaną w trybie miesięcznym w trakcie trwającego już miesiąca, jak zostanie ona zafakturowana?

Instancja zostanie zafakturowana proporcjonalnie do ceny miesięcznej, w zależności od liczby pozostałych dni. Zatem jeśli 13. dnia danego miesiąca zamówisz instancję typu B2-7 z rozliczeniem miesięcznym, w cenie 23,20 € brutto, instancja pojawi się na kolejnej fakturze 1-go dnia następnego miesiąca.  Proporcjonalna płatność zostanie obliczona przy uwzględnieniu liczby dni wykorzystanych w skali miesiąca liczącego 31 dni, czyli ((31-12)/31)*23,20 € = 14,21 € brutto.

Następnie, jeśli na początku miesiąca instancja nadal istnieje, zostanie ona zafakturowana w trybie standardowego rozliczenia: miesięczna opłata za instancję za dany miesiąc zostanie uwzględniona na kolejnej fakturze wystawionej 1-go dnia kolejnego miesiąca. Na przykład, jeśli instancja została zamówiona w maju i jest nadal aktywna na początku czerwca, faktura za cały czerwiec zostanie wystawiona 1 lipca.

### Jak zyskać pewność, że instancja rozliczana w trybie miesięcznym nie będzie już fakturowana?

Aby abonament miesięczny dla tej instancji nie został odnowiony, musi ona zostać usunięta przed pierwszym dniem następnego miesiąca do godz. 00:00. 

### Jeśli zatrzymam instancję rozliczaną w trybie miesięcznym w trakcie trwającego już miesiąca, jak zostanie naliczona opłata?

Przykładowo, jeśli posiadasz instancję typu C2-15 z rozliczeniem miesięcznym i usuniesz ją 27. dnia bieżącego miesiąca, usługa zostanie zafakturowana za pełny miesiąc 1-go dnia kolejnego miesiąca.

W przypadku zawarcia umowy miesięcznej, cały rozpoczęty miesiąc jest płatny. W kolejnych miesiącach ta instancja nie będzie fakturowana.

## Sprawdź również <a name="go-further"></a>

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
