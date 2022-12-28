---
title: 'Tutorial - Utilização de Zonemaster'
slug: ovhcloud-domain-zonemaster-tutorial
section: DNS e zona DNS
order: 08
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 12/09/2022**

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
> 
> Este guia fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se encontrar dificuldades, recomendamos que recorra a um [prestador de serviços especializado](https://partner.ovhcloud.com/pt/). Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção ["Quer saber mais?"](#go-further) deste manual.
> 


## Objetivo

[Zonemaster](https://zonemaster.fr/) é uma ferramenta originada pela colaboração entre a [AFNIC](https://www.afnic.fr/) (registo francês) e a [The Swedish Internet Foundation](https://internetstiftelsen.se/en/) (registo sueco). Permite analisar a configuração DNS (Domain Name System) de um nome de domínio e identificar os elementos que podem ser melhorados ou corrigidos.

> [!primary]
>
> Para compreender melhor a noção de DNS, consulte a introdução do nosso guia sobre a [configuração de uma zona DNS](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/).

## Requisitos

- Ter um [domínio](https://www.ovhcloud.com/pt/domains/)

## Instruções

### Campo de introdução

A ferramenta Zonemaster permite verificar uma configuração DNS instalada num nome de domínio ou testar uma zona DNS pré-configurada em futuros servidores DNS.

Para verificar a configuração atual de um nome de domínio, introduza o seu nome de domínio e clique em `Check`{.action}

![dominios](images/zonemaster01.png){.thumbnail}

Para verificar uma configuração DNS que foi preparada, mas ainda não aplicada ao domínio em causa, selecione a opção `Options`{.action} e introduza as seguintes informações:

- **Servidores DNS**: Introduza as informações do servidor DNS associado a um nome de domínio e depois clique em `+`{.action} para validar a sua introdução. A introdução de um endereço IP é facultativa.
- **Delegação do Signatário (registo DS)**: No quadro de uma proteção DNSSEC, introduza os elementos do registo DS e clique em `+`{.action} para adicionar o valor. Se os servidores DNS não utilizarem o protocolo DNSSEC, pode deixar estes campos livres.

Também pode forçar as verificações num protocolo IP específico através das células `Desativar IPv6` e `Desativar IPv4`

> **Exemplo**:<br><br> Se possui o nome de domínio "mydomain.ovh" que utiliza atualmente os servidores DNS "dns19.ovh.net" e "dns19.ovh.net".
> Configurou uma zona DNS para este domínio nos servidores DNS "mydns.test.ovh" e "myDNS2.test.ovh".<br>
> Antes de alterar os servidores DNS, pode efetuar uma pesquisa avançada através da opção `Options`{.action} introduzindo "mydns.test.ovh" e "mydns2.test.ovh" nas casas `Nameservers`.<br>
> Zonemaster realizará um teste como se estivesse a utilizar os servidores "mydns.test.ovh" e "mydns2.test.ovh" em "mydomain.ovh".<br>
> ![dominios](images/zonemaster02.png){.thumbnail}

> [!primary]
>
> Ao introduzir um domínio e ao clicar no botão `Fetch data from parent zone`{.action}, aparecerão os servidores DNS associados ao domínio, bem como as informações do registo DS (DNSSEC), se este tiver sido configurado.
> ![dominios](images/zonemaster03.png){.thumbnail}


### Resultado

Depois de validado o formulário, os resultados são classificados por código de cor:

- **Verde**: Esta parte é funcional e cumpre os critérios standard na sua categoria.
- **Laranja**: Esta parte é funcional, mas merece uma atenção especial. A ferramenta detetou que este parâmetro apresenta características que não correspondem ao padrão da sua categoria, sem bloquear o seu funcionamento.
- **Vermelho**: Esta parte apresenta erros ou elementos em falta que podem causar uma anomalia. 
- **Azul**: trata-se de uma simples informação, sem consequências particulares sobre o funcionamento do nome de domínio.

![dominios](images/zonemaster04.png){.thumbnail}

### Informações úteis

Se tiver questões adicionais sobre Zonemaster, consulte a secção [FAQ](https://zonemaster.net/en/faq) em <https://zonemaster.fr/>.

## Saiba mais <a name="go-further"></a>

[Alterar os servidores DNS de um nome de domínio OVHcloud](https://docs.ovh.com/pt/domains/partilhado_generalidades_sobre_os_servidores_dns/){.external}

[Modificação de uma zona DNS da OVHcloud](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.

[Proteja o seu domínio contra o Cache Poisoning graças ao DNSSEC](https://www.ovhcloud.com/pt/domains/dnssec/){.external}

Para serviços especializados (referenciamento, desenvolvimento, etc.), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>
