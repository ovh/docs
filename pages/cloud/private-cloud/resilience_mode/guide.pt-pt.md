---
title: 'Utilizar o modo Resiliência'
slug: modo-resiliencia
excerpt: 'Saiba como utilizar o modo Resiliência da OVH'
legacy_guide_number: '7766742'
section: 'Funcionalidades da OVHcloud'
---

**Última atualização: 19/10/2018**

## Sumário

O modo Resiliência é uma ferramenta desenvolvida pela OVH, que simula uma avaria num dos seus servidores hosts para verificar que um sistema de tipo *High Availability* (HA) e *Fault Tolerance* (FT) funciona corretamente no seu cluster **em desenvolvimento**.

**Este manual explica-lhe como utilizar o modo Resiliência da OVH.**

## Requisitos

* Dispor do serviço [Private Cloud](https://www.ovh.pt/private-cloud/){.external}.
* Aceder à interface de gestão vSphere.



## Instruções

Antes de mais, certifique-se de que:

- o servidor host está num cluster;
- a opção *High Availability* (HA) está ativa;
- um outro servidor host no cluster está disponível e a funcionar.

> [!warning]
>
> Este é um teste para um **ambiente de desenvolvimento**. Não deve realizar este tipo de operação em fase de **produção**.
> 


### Ativar o modo Resiliência

Uma vez ligado ao cliente vSphere, aceda ao inventário dos seus servidores hosts e cluster. Selecione o servidor host clicando com o botão direito do rato. A seguir, clique em `OVH Private Cloud`{.action} > `Resilience`{.action}.

![Clique direito no host para ativar o modo Resiliência](images/resilience_01.png){.thumbnail}

Após verificar que todos os requisitos foram cumpridos, clique no botão `Next`{.action}.

![Verificação dos requisitos e validação](images/resilience_02.png){.thumbnail}

É necessário validar as condições de utilização antes de executar o teste. Depois de selecionar o campo `I accept the terms of the failure simulation agreement`{.action}, clique no botão `Next`{.action}.

![Validação das condições de utilização](images/resilience_03.png){.thumbnail}

O pedido de ativação foi recebido.

![Ativação do modo Resiliência em curso](images/resilience_04.png){.thumbnail}

O servidor host deixará de estar disponível em poucos minutos.

![Host indisponível](images/resilience_05.png){.thumbnail}


### Desativar o modo Resiliência

Para terminar a simulação, clique novamente no modo Resiliência.

![Finalização da simulação](images/resilience_06.png){.thumbnail}

O pedido de desativação foi recebido.

![Desativação do modo Resiliência em curso](images/resilience_07.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}