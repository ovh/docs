---
title: 'Configure o IPv6 para o seu website'
slug: configurar-ipv6-para-o-site
excerpt: Saiba como tornar o seu website compatível com IPv6
section: Configuração do alojamento
order: 06
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

**Última atualização: 27/11/2020**

## Informação Geral

A rede Internet funciona desde o início dos anos 90 seguindo a norma IPv4. Esta norma permite fornecer um endereço IP a cada máquina ligada à rede Internet: servidores, mas também computadores, smartphones, tablets e qualquer outro aparelho ligado à Internet. Esta norma contém um limite importante: permite identificar um pouco mais de 4 mil milhões de aparelhos diferentes. Ou um aparelho para duas pessoas na Terra.

Foi rapidamente proposto um novo protocolo: **IPv6**. Permite identificar mais de 340 milhões de endereços diferentes. A sua implantação leva tempo devido a alterações importantes em toda a rede Internet. 

Como o número de IPv4 é raro, torna-se cada vez mais difícil adicionar novos recursos à rede Internet. As ligações em IPv6 só são úteis se o conteúdo estiver também disponível neste protocolo. Assim, quanto mais sites web existirem em IPv6, mais importante será para cada ator da rede migrar para este protocolo.

Para saber mais, não hesite em consultar o artigo da [Wikipédia](https://pt.wikipedia.org/wiki/IPv6){.external} sobre o protocolo IPv6.

## Objetivo

Os nossos alojamentos web são compatíveis com IPv6 desde 2011. Mas a ativação deste protocolo tem sido até há pouco tempo uma opção opcional de configuração. 

**Este manual explica-lhe como verificar se o seu site é compatível com IPv6 e como configurá-lo para que o seja.**

## Requisitos

- Dispor de um [nome de domínio](https://www.ovhcloud.com/pt/domains/){.external} na sua Área de Cliente OVHcloud.
- Ter um serviço de [alojamento Web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}.

## Instruções

> [!warning]
>A OVHcloud presta-lhe serviços cuja configuração e gestão é da sua inteira responsabilidade, cabendo-lhe a si assegurar o seu correto funcionamento. 
>
>Este guia foi concebido para o ajudar, tanto quanto possível, nas tarefas mais comuns. No entanto, caso tenha alguma dificuldade, recomendamos que contacte um fornecedor especializado e/ou o editor do software do serviço, uma vez que não poderemos assisti-lo pessoalmente. Para mais informações, consulte a secção “Vá mais longe” neste guia.
>
Se o seu site não estiver configurado para IPv6, pode fazê-lo adicionando a informação na zona DNS do seu domínio. Trata-se de permitir aos browsers encontrar um endereço IPv6 quando pedem a localização do seu website através do nome de domínio.

### Verificar a compatibilidade IPv6 do seu site

Para testar se o seu website é compatível com IPv6, pode utilizar o website [ipv6-test.com](https://ipv6-test.com/validate.php){.external}. Este último indicar-lhe-á se o seu site responde sobre este novo protocolo IP. Se não for o caso, prossiga este guia para o tornar compatível.

### Etapa 1: Obter o endereço IPv6 do seu alojamento web

Aceda à Área de [Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, clique em `Alojamentos`{.action} e escolha o alojamento.

Na secção `Informações gerais`, no quadro **IPv6**, copie a entrada e passe ao passo seguinte.

![IPv6](images/ipv6_01.png){.thumbnail}

### Etapa 2: Configurar a zona DNS

> [!warning]
> A nossa opção CDN não é atualmente compatível com IPv6. Se configurar um endereço IPv6 no seu website, os seus visitantes não beneficiarão do CDN.

Para que o browser encontre o endereço IPv6 com o seu nome de domínio, deve modificar a zona DNS associada. Para criar uma entrada do tipo **AAAA**, pode consultar o nosso manual [Editar uma zona DNS](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/) da OVHcloud.

No separador `Zona DNS`{.action} do seu domínio, selecione os `domínios`{.action}. Clique no botão `Adicionar uma entrada`{.action} à direita da tabela. Deve inserir o endereço IPv6 utilizando o tipo de registo **AAAA** e o IPv6 que obteve anteriormente na sua Área de Cliente.

![IPv6](images/ipv6_02.png){.thumbnail}

## Vá mais longe

[Editar uma zona DNS da OVHcloud](../../domains/alojamento_partilhado_como_editar_a_minha_zona_dns/)

Junte-se à nossa comunidade de utilizadores em <https://community.ovh.com/en/>.
