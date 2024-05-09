---
title: 'Limites de débito das API Public Cloud'
excerpt: "Descubra quais são os limites e restrições da API Public Cloud"
updated: 2023-06-23
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## O que é um limite de débito?

Um limite de débito é uma restrição aplicada pela API ao número de pedidos que um cliente pode fazer à API durante um determinado período.

## Porquê impor limites?

Os limites de débito são uma prática corrente para as API. São criadas por vários motivos:

- ajudam - nos a proteger o backend da API contra os abusos ou as utilizações incorretas da API;
- garantem uma melhor qualidade de serviço na API graças a um acesso equitativo à API.

Por exemplo, um script defeituoso ou mal otimizado poderia tentar utilizar a API de forma excessiva, o que poderia acarretar problemas de desempenho ao nível do backend da API. 

Ao estabelecer limites de débito, garantimos que a API possa manter uma experiência fluida e coerente para todos os clientes.

## Quais são os limites de débito para a nossa API?

## Keystone (API de identidade OpenStack)

Aplicamos limites de débito ao nível do**utilizador** OpenStack.

Um utilizador pode efetuar **60 pedidos por minuto** antes de receber uma resposta HTTP 429.

### Nova (API de cálculo OpenStack)

Aplicamos limites de débito ao nível do **projeto** OpenStack.

Um projeto pode efetuar **20 pedidos por segundo** antes de receber uma resposta HTTP 429.

## Neutron (API de rede OpenStack)

Aplicamos limites de débito ao nível do **projeto** OpenStack.

Um projeto pode efetuar **20 pedidos por segundo** antes de receber uma resposta HTTP 429.

## Glance (API de imagem OpenStack)

Aplicamos limites de débito ao nível do **projeto** OpenStack.

Um projeto pode efetuar **20 pedidos por segundo** antes de receber uma resposta HTTP 429.

## Cinder (API de cálculo OpenStack)

Aplicamos limites de débito ao nível do **projeto** OpenStack.

Um projeto pode efetuar **20 pedidos por segundo** antes de receber uma resposta HTTP 429.

## Como funcionam os limites de débito?

Se efetuar demasiados pedidos de tokens a Keystone (a API de identidade) ou enviar demasiados pedidos a um ponto de terminação da API como Nova (a API de cálculo), o ponto de terminação começará a responder com um código de resposta **HTTP 429** que contém um objeto JSON como este:

```json
{
    "error": {
        "status": "429 Too Many Requests",
        "message": "Too Many Requests"
    }
}
```

## Como garantir que não efetua demasiados pedidos?

Aconselhamos que reduza o número de chamadas à API efetuadas através da sua automatização, de modo a ficar abaixo do limite de débito do ponto de terminação.

Normalmente, poderá encontrar-se numa situação semelhante quando efetua vários pedidos em paralelo (utilizando vários processos ou threads).

Existem várias formas de melhorar a eficácia da sua automatização, tais como a colocação em cache ou a utilização de mecanismos de anulação das tentativas (*retry backoffs*).

### Utilizar a cache

Uma das opções para reduzir o número de chamadas é utilizar a cache.

Por exemplo, um token keystone é válido 24 horas após o seu programa. Pode pedir um único token, conservá-lo na cache e reutilizá-lo durante todo o dia!

### Implementar o *retry backoff*

Se precisar realmente de obter informações regulares da API, pode implementar uma automatização das novas tentativas de pedidos, associada a uma desativação exponencial aleatória.

O facto de tentar novamente com uma função de desativação exponencial significa que está a efetuar uma chamada de espera curta quando um erro limite de débito se encontra, e depois a modificação que falhou.<br>
Se o pedido falhar novamente, o tempo de vigília é aumentado e o processo é repetido.<br>
Esta operação prossegue até que o pedido chegue ao seu destino ou que seja atingido um número máximo de tentativas.

Esta abordagem apresenta numerosas vantagens:

- as novas tentativas automáticas permitem-lhe recuperar erros de limite de débito sem bloqueio ou perda de dados;
- a desativação exponencial permite-lhe efetuar as suas primeiras tentativas de forma rápida, beneficiando de prazos mais longos em caso de insucesso das suas primeiras tentativas;
- a adição de um prazo aleatório evita que todas as tentativas sejam efetuadas ao mesmo tempo.

Tenha em conta que os pedidos infrutíferos não são incluídos no cálculo do limite de débito. Por conseguinte, o reenvio contínuo de um pedido poderá funcionar, mas poderemos modificar esse comportamento no futuro. Recomendamos que não confiar neste mecanismo.

Aqui estão alguns exemplos de livrarias bem conhecidas para implementar a função *retry backoff* em python:

- tenacity: <https://pypi.org/project/tenacity/>
- backoff: <https://pypi.org/project/backoff/>

# Quer mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
