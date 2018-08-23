---
title: 'Diagnosticar avarias materiais num servidor dedicado'
slug: diagnostico-avarias-materiais-servidor-dedicado
excerpt: 'Saiba como diagnosticar avarias materiais no seu servidor dedicado'
section: Segurança
---

**Última atualização: 23/08/2018**

## Sumário


O desgaste de um servidor ao longo do tempo pode causar avarias materiais, originando erros. Por essa razão, o seu servidor inclui várias ferramentas de diagnóstico que permitem identificar os componentes físicos com defeito.

**Saiba como diagnosticar avarias materiais no seu servidor dedicado.**


## Requisitos

* Ter um [servidor dedicado](https://www.ovh.pt/servidores_dedicados/){.external}.
* Reiniciar o servidor em [Modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/){.external}.


## Instruções

### Utilizar a interface web

Depois de o seu servidor reiniciar em [Modo Rescue](https://docs.ovh.com/pt/dedicated/rescue_mode/), receberá um e-mail com as informações de acesso ao serviço. Também encontrará uma ligação para a interface web do modo rescue. A ligação terá o seguinte formato: *https://IP_do_servidor:444*.

Após clicar na ligação, será redirecionado para a interface web (imagem abaixo).

![A interface web](images/rescue-mode-04.png){.thumbnail}


### Realizar todos os testes materiais

Na interface web, pode clicar no botão `Start all tests`{.action} (Iniciar todos os testes) que realizará todos os testes materiais disponíveis ao mesmo tempo.

![Iniciar todos os testes](images/rescue-mode-042.png){.thumbnail}


### Realizar testes materiais diferentes

A interface web permite-lhe realizar testes diferentes para:

- o(s) processador(es);
- a ligação à rede;
- a memória RAM;
- as partições do disco.

Além disso, poderá também ver os logs SMART do servidor que apresentam informações detalhadas sobre o(s) disco(s) rígido(s).

 
#### Processadores

O teste do processador verifica o bom funcionamento do processador do seu servidor e requer cerca de 30 minutos para ser executado. Se o servidor avariar durante o teste, isto significa que o processador é defeituoso.

Para efetuar o teste, clique no botão tal como demonstrado na imagem abaixo.

![Teste do processador](images/processors.png){.thumbnail}

#### Ligação à rede

O teste da ligação à rede verifica a largura de banda interna e externa. Para efetuar o teste, clique no botão tal como demonstrado na imagem abaixo.

![Teste de rede](images/network-connection.png){.thumbnail}

#### Memória RAM

O teste da memória verifica a integridade dos módulos RAM do seu servidor. Se o servidor avariar durante o teste, isto significa que um ou vários módulos RAM têm defeitos.

Para efetuar o teste, clique no botão tal como demonstrado na imagem abaixo.

![Teste de memória](images/memory.png){.thumbnail}

#### Partições do disco

O teste das partições abrange um teste de acesso ao disco e uma verificação do sistema de ficheiros. O teste de acesso ao disco verifica se o sistema pode comunicar com os discos rígidos do seu servidor. A verificação do sistema de ficheiros utiliza o comando `fsck -fy`.

> [!warning]
>
> A verificação do sistema de ficheiros num disco rígido danificado pode causar perda de dados.
>

![Teste de disco](images/partitions.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}.