---
title: 'Limity przepływu API Public Cloud'
excerpt: "Dowiedz się, jakie są ograniczenia i ograniczenia dla API Public Cloud"
updated: 2023-06-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Co to jest limit przepływu?

Limit przepływu to ograniczenie stosowane przez API w odniesieniu do liczby zleceń, które klient może złożyć na API w danym okresie.

## Dlaczego narzucasz limity?

Granice przepływu są powszechną praktyką dla API. Są one tworzone z różnych powodów:

- pomagają nam chronić backend API przed nadużyciami lub niewłaściwym wykorzystaniem API;
- gwarantują wyższą jakość usług API dzięki zapewnieniu sprawiedliwego dostępu do API.

Na przykład, uszkodzony lub zoptymalizowany skrypt może próbować nadużywać API, co może powodować problemy z wydajnością na poziomie backendu API. 

Ustalając limity przepustowości, zapewniamy, że API może utrzymać płynne i spójne doświadczenie dla wszystkich klientów.

## Jakie są limity przepustowości dla naszego API?

### Keystone (API tożsamości OpenStack)

Stosujemy limity przepustowości na poziomie**użytkownika** OpenStack.

Użytkownik może wykonać **60 zapytań na minutę** przed otrzymaniem odpowiedzi HTTP 429.

### Nova (API obliczeń OpenStack)

Stosujemy limity przepustowości na poziomie **projektu* OpenStack.

Projekt może wykonać **20 zapytań na sekundę** przed otrzymaniem odpowiedzi HTTP 429.

### Neutron (API dla sieci OpenStack)

Stosujemy limity przepustowości na poziomie **projektu* OpenStack.

Projekt może wykonać **20 zapytań na sekundę** przed otrzymaniem odpowiedzi HTTP 429.

### Glance (API dla obrazu OpenStack)

Stosujemy limity przepustowości na poziomie **projektu* OpenStack.

Projekt może wykonać **20 zapytań na sekundę** przed otrzymaniem odpowiedzi HTTP 429.

### Cinder (API dla obliczeń OpenStack)

Stosujemy limity przepustowości na poziomie **projektu* OpenStack.

Projekt może wykonać **20 zapytań na sekundę** przed otrzymaniem odpowiedzi HTTP 429.

## Jak działają ograniczenia przepływu?

Jeśli do Keystone wykonujesz zbyt dużo zapytań tokenów (API tożsamości) lub wysyłasz zbyt wiele zapytań do punktu zakończenia API, takiego jak Nova (API obliczeń), punkt końcowy zacznie odpowiadać kodem odpowiedzi **HTTP 429** zawierającym obiekt JSON taki jak ten:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Jak upewnić się, że nie wykonujesz zbyt wielu zapytań?

Rekomendujemy zmniejszenie liczby połączeń API wykonywanych przez automatyzację, tak aby pozostać poniżej limitu przepływu w punkcie końcowym.

Ogólnie rzecz biorąc, możesz znaleźć się w takiej sytuacji podczas wykonywania kilku jednoczesnych zapytań (przy użyciu kilku procesów lub wątków).

Istnieje kilka sposobów na zwiększenie wydajności automatyzacji, takich jak buforowanie lub stosowanie mechanizmów anulowania prób (*retry backoffs*).

### Korzystanie z cache

Jedną z opcji ograniczenia liczby połączeń jest korzystanie z pamięci cache.

Na przykład keystone token jest ważny 24 godziny po jego wydaniu. Możesz poprosić o jeden żeton, przechowywać go w pamięci cache i używać go ponownie przez cały dzień!

### Wpisz *retry backoff*

Jeśli naprawdę chcesz otrzymywać regularne informacje od API, możesz wdrożyć automatyzację nowych prób zapytań w połączeniu z wykładniczym wyłączeniem.

Spróbuj ponownie za pomocą funkcji wykładniczego wyłączania, oznacza, że przeprowadzasz krótki tryb czuwania, gdy wystąpi błąd limitu przepływu, a następnie odrzucasz żądanie, które nie powiodło się.<br>
Jeśli zlecenie nie powiedzie się ponownie, czas czuwania jest dłuższy i proces jest powtarzany.<br>
Operacja ta jest kontynuowana do czasu, gdy wniosek się zakończy lub gdy zostanie osiągnięta maksymalna liczba prób.

Podejście to ma wiele zalet:

- nowe automatyczne próby pozwalają na pobranie błędów dotyczących limitu przepływu bez blokowania lub utraty danych;
- automatyczna dezaktywacja pozwala na szybkie wykonywanie pierwszych prób, jednocześnie korzystając z dłuższych terminów w przypadku niepowodzenia pierwszych prób;
- dodanie losowego terminu zapobiega równoczesnemu przeprowadzaniu wszystkich prób.

Pamiętaj, że nieudane wnioski nie są uwzględnione w obliczaniu limitu przepustowości. W związku z tym może zadziałać stałe przekierowanie popytu, ale w przyszłości możemy zmienić to zachowanie. Zalecamy, aby nie polegać na tym mechanizmie.

Oto przykłady znanych bibliotek implementujących funkcję *retry backoff* w pytonie:

- tenacity: <https://pypi.org/project/tenacity/>
- backoff: <https://pypi.org/project/backoff/>

## Sprawdź

Przyłącz się do społeczności naszych użytkowników na <https://community.ovh.com/en/>.
