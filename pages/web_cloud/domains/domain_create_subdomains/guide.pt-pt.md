---
title: "Como criar um subdomínio?"
excerpt: "Saiba a definição de um subdomínio e como criá-lo na OVHcloud"
updated: 2023-11-28
---

> [!primary]
> Esta tradução foi automaticamente gerada pelo nosso parceiro SYSTRAN. Em certos casos, poderão ocorrer formulações imprecisas, como por exemplo nomes de botões ou detalhes técnicos. Recomendamos que consulte a versão inglesa ou francesa do manual, caso tenha alguma dúvida. Se nos quiser ajudar a melhorar esta tradução, clique em "Contribuir" nesta página.
>

## Objetivo <a name="goal"></a>

A Internet é composta por *servidores* e *dispositivos* que interagem entre si através de uma rede global. Quando estes *servidores* e os seus *dispositivos* estão ligados à rede Internet, é-lhes atribuído um *endereço IP público* (equivalente a um endereço postal). Este *endereço IP* permite ligar remotamente um servidor ou dispositivo, permitindo assim que um utilizador veja um website introduzindo esse *endereço IP* através do browser instalado no computador do utilizador.

Os **domínios** foram criados para facilitar o acesso de utilizadores da Internet a um website. De facto, é mais fácil reter um nome composto por uma cadeia de caracteres selecionada (exemplo: ovhcloud.com) do que uma sequência de números composto por um *endereço IP* (exemplo: 54.39.46.56).

Um **nome de domínio** é composto por níveis. Estes níveis são geralmente separados por um `.` (com exceção de algumas **extensões** do *primeiro nível* como o *.co.uk*, *.gouv.fr* ou ainda *.notaires.fr*):

- **T**op **L**evel **D**omain (**TLD**): representa os domínios de *primeiro nível*. São mais conhecidos como **extensões**. Existem atualmente 4 tipos de domínio de primeiro nível: 

    - Os **c**ountry **c**ode **T**op **L**evel **D**omains (**ccTLDs**): compostos de dois caracteres que correspondem aos diferentes países do globo. Por exemplo, as extensões *.pt*, *.es*, *.it* ou ainda *.pl* são ccTLDs;
    - Os **g**eneric **T**op **L**evel **D**omains (**gTLDs**): compostos de, pelo menos, três caracteres que representam temas ou sectores de atividade mais gerais. Por exemplo, as extensões *.com*, *.net*, *.org* ou ainda *.info* são gTLDs;
    - Os **new** **g**eneric **T**op **L**evel **D**omains (**new gTLDs**):
    novas extensões criadas a partir de 2012 pelo **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) a fim de responder ao forte aumento dos pedidos de criação de nomes de domínio. Podem corresponder a temas genéricos, marcas, regiões ou cidades. Por exemplo, as extensões *.love*, *.ovh* ou ainda *.paris* são novas extensões gTLDs;
    - Os **Corp**oration **T**op **L**evel **D**omains (**CorpTLDs**): trata-se, na realidade, de uma subcategoria dos new GTLDs. A pedido do **ICANN**, as empresas ou organizações podem pedir a criação do seu próprio TLD. Por exemplo, a extensão *.ovh* é uma CorpTLD criada pela OVHcloud há alguns anos.

- **S**econd **L**evel **D**omain (**SLD**): representa os domínios de *segundo nível*. É mais comum chamarmos-lhes **labels**. Quando encomenda um domínio, pode definir livremente o **label** (desde que este não tenha já sido registado por outro utilizador na mesma extensão e com o limite de 63 caracteres). Por exemplo, *ovhcloud* corresponde ao logótipo do nome de domínio *ovhcloud.com*.

- Third Level Domain (**subdomain**): é a partir deste terceiro nível que se fala de *subdomínio*. Neste manual, iremos explicar de forma mais pormenorizada a sua definição e como implementá-las com os seus diferentes serviços.

![URL content](images/url-composition.png){.thumbnail}
  
**Saiba os subdomínios e como os criar na OVHcloud.**