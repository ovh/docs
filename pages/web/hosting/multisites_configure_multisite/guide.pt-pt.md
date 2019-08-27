---
title: 'Partilhar o alojamento entre vários sites'
slug: multisites-configurar-um-multisite-no-meu-alojamento-web
excerpt: 'Saiba como alojar diferentes websites no seu alojamento web'
section: 'Configuração do alojamento'
order: 1
---

**Última atualização: 24/07/2019**

## Sumário

Pode alojar vários websites num único alojamento web, quer os nomes de domínio estejam registados na OVH ou não.

**Saiba como alojar diferentes websites no seu alojamento web.**

## Requisitos

- Ter um serviço de [alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} compatível.
- Dispor de um ou vários [domínios](https://www.ovh.pt/dominios/){.external}.
- Ter a possibilidade de alterar a configuração dos domínios (a zona DNS).
- Aceder à [Área de Cliente](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Aceder à gestão multisite

Em primeiro lugar, deve aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}. Depois, clique em `Alojamentos`{.action} na barra à esquerda, selecione o serviço correspondente e clique no separador `Multisite`{.action}.

Aparecerá uma tabela com todos os domínios adicionados ao seu alojamento web. Alguns foram criados automaticamente durante a instalação do alojamento.

> [!primary]
>
> Se migrar o seu website e quiser evitar qualquer tipo de interrupção, consulte o passo [“3 - Publicação do site”](./#3-publicacao-do-site){.external}.
>

![multisite](images/access-multisite-ovh.png){.thumbnail}

### 2 - Adicionar um domínio ou subdomínio

Para adicionar um novo domínio ao alojamento web, clique no botão `Adicionar um domínio ou subdomínio`{.action} e faça a sua escolha na janela que é apresentada.

- **Adicionar um domínio registado na OVH**:

Apenas são apresentados os domínios que incluem a configuração OVH e que foram indicados como contactos para o seu ID de cliente. Selecione um da lista e clique no botão `Seguinte`{.action}. Em seguida, consulte o  passo [“2.1 - Adicionar um domínio registado na OVH”](./#2.1-Adicionar-um-domínio-registado-na-OVH)

- **Adicionar um domínio externo**:

Se o domínio não aparecer na lista, isto significa que este é considerado externo (relativamente ao seu ID de cliente ou à OVH). Se este for o caso, selecione a opção `Adicionar um nome de domínio externo`{.action} e clique no botão `Seguinte`{.action}. De seguida, consulte o passo [“2.2 - Adicionar um domínio externo”](./#2.2-Adicionar-um-domínio-externo)

![multisite](images/add-multisite-step1.png){.thumbnail}

#### 2.1 - Adicionar um domínio registado na OVH

> [!primary]
>
> Este passo só se aplica se selecionou "Adicionar um domínio registado na OVH". Para os domínios externos, consulte o passo [“2.2 - Adicionar um domínio externo”](./#2.2-Adicionar-um-domínio-externo).
>

Aqui, deverá personalizar a adição do domínio. Dependendo do seu serviço de [alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external}, alguns elementos propostos não poderão ser selecionados.

|Informação|Descrição|
|---|---|
|Domínios|Por predefinição, o nome de domínio que selecionou é automaticamente indicado. Pode adicionar um subdomínio (por exemplo: blog.mypersonaldomain.ovh) e, ao mesmo tempo, criar o subdomínio “www” correspondente (por exemplo: www.blog.mypersonaldomain.ovh). No final, este domínio será o endereço web do site que pretende publicar.|
|Pasta raiz|Defina a pasta onde o domínio será alojado no seu espaço de armazenamento. É neste espaço que os ficheiros do site deverão ser publicados. Por exemplo: para blog.mypersonaldomain.ovh, a pasta raiz poderia ser “blog”. Se a pasta não existir, esta será criada automaticamente.|
|Ativar o IPv6|Permite ativar o protocolo IPv6 no domínio indicado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|
|SSL|Permite-lhe beneficiar de uma ligação segura (HTTPS://) no nome de domínio selecionado. Saiba mais na nossa [página sobre SSL](https://www.ovh.pt/ssl/){.external}. Ao ativar o SSL e o CDN (Content Delivery Network), poderá também beneficiar do protocolo **HTTP2** (este é ativado por predefinição no nosso datacenter de Gravelines).|
|Ativar o CDN|Permite ativar o CDN (implementação de cache dos elementos estáticos do seu site, como as imagens) no nome de domínio selecionado. Saiba mais na [nossa página sobre CDN](https://www.ovh.pt/alojamento-partilhado/cdn.xml){.external}. Ao ativar o SSL e o CDN, poderá também beneficiar do protocolo **HTTP2** (este é ativado por predefinição no nosso datacenter de Gravelines).|
|IP do país|Permite beneficiar de um endereço de IP geolocalizado (a partir de uma lista de países) para o nome de domínio selecionado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|
|Ativar a firewall|Permite ativar uma firewall (análise de pedidos) no nome de domínio selecionado. Saiba mais na [nossa página sobre Mod Security](https://www.ovh.pt/alojamento-partilhado/mod_security.xml){.external}.|
|Logs separados|Permite ativar um novo espaço de logs no domínio selecionado. Terá de escolher um nome de domínio a partir de uma lista que determinará o nome de acesso a esse novo espaço. Saiba mais na nossa [página sobre Estatísticas detalhadas](https://www.ovh.pt/alojamento-partilhado/website_statistics.xml){.external}.|

Concluída esta etapa, clique no botão `Seguinte`{.action}. De seguida, verifique o resumo que aparece.

![multisite](images/add-multisite-step2.png){.thumbnail}

Ao selecionar um nome de domínio registado na OVH, tem a possibilidade de modificar automaticamente ou manualmente a sua configuração DNS:

- **para uma configuração DNS automática**: selecione a opção `Configuração automática (recomendada)`{.action};
- **para uma configuração DNS manual**: desselecione a opção `Configuração automática (recomendada)`{.action} e anote as informações apresentadas. Quando efetuar esta configuração, consulte a documentação [“Editar uma zona DNS da OVH”](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}.

Em seguida, clique em `Validar`{.action} para adicionar o domínio. Esta operação pode demorar até uma hora. No entanto, a propagação das alterações da configuração DNS do seu domínio pode demorar entre 4 a 24 horas.

Depois de adicionar o domínio, consulte o passo [“3 - Publicação do site”](./#3-Publicação-do-site){.external}.

#### 2.2 - Adicionar um domínio externo

> [!primary]
>
> Este passo só se aplica se selecionou "Adicionar um domínio externo" (que não esteja registado na OVH ou que não consiga gerir a partir da Área de Cliente OVH). Para um domínio registado na OVH, volte a consultar o passo [“2.1 - Adicionar um domínio registado na OVH”](https://docs.ovh.pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#21-adicionar-um-dominio-registado-na-ovh){.external}.
>

Aqui, deverá personalizar a adição do domínio. Tenha em atenção que algumas opções incluídas na sua oferta de [alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} não podem ser ativadas durante este processo. Deverá finalizar esta operação antes de as poder utilizar, alterando as definições dos parâmetros do multisite quando este for adicionado.

|Informação|Descrição|
|---|---|
|Domínio|Indique o domínio que pretende utilizar. Caso necessário, adicione um subdomínio (por exemplo: blog.mypersonaldomain.ovh) e, ao mesmo tempo, crie o subdomínio “www” correspondente (por exemplo: www.blog.mypersonaldomain.ovh). No final, este domínio será o endereço web do site que pretende publicar. Para finalizar a adição, certifique-se de que consegue alterar a configuração do domínio (a sua zona DNS).|
|Pasta raiz|Defina a pasta onde o domínio será alojado no seu espaço de armazenamento. É neste espaço que os ficheiros do site deverão ser publicados. Por exemplo: para blog.mypersonaldomain.ovh, a pasta raiz poderia ser “blog”. Se a pasta não existir, esta será criada automaticamente.|
|Ativar o IPv6|Permite ativar o protocolo IPv6 no domínio indicado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|

Concluída esta etapa, clique no botão `Seguinte`{.action}. De seguida, verifique o resumo que aparece.

![multisite](images/add-multisite-external-step1.png){.thumbnail}

Depois de selecionar um domínio externo, é essencial realizar uma etapa de validação particular, de forma a podermos garantir que a operação é legítima. Por conseguinte, receberá uma mensagem solicitando a alteração da respetiva configuração DNS. 

Tenha em atenção os elementos apresentados e clique no botão `Validar`{.action}. O nome de domínio é adicionado temporariamente, até a configuração DNS ser alterada.

> [!warning]
>
> Deverá realizar estas alterações para que o seu domínio seja adicionado corretamente. Caso contrário, a adição do domínio será anulada.
>

A alteração da configuração do nome de domínio (a sua zona DNS) deve ser realizada a partir da interface do fornecedor que a gere. Se a gestão for feita pela OVH, consulte a documentação [“Editar uma zona DNS da OVH”](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}. Depois de efetuar a alteração, é necessário aguardar entre 4 a 24 horas até que esta seja implementada.

Se pretender consultar os elementos que deseja alterar relativamente à configuração DNS do nome de domínio:

|Campo|Onde posso encontrar a informação?|Descrição|
|---|---|---|
|TXT|Selecione a secção `Multisite`{.action} e, em seguida, clique em **Configuração do token ovhcontrol**|Permite à OVH garantir que a adição de cada nome de domínio externo é legítima. Certifique-se de que o campo TXT é criado com o subdomínio ovhcontrol (por exemplo: ovhcontrol.mypersonaldomain.ovh). Deverá validar apenas o domínio principal, e não os subdomínios.|
|A e AAAA|Na secção `Informações gerais`{.action} e junto de **IPv4** e **IPv6**|Permite que o seu domínio apresente o site web publicado no seu alojamento web.|

### 3 - Publicação do site

Depois de adicionar o nome de domínio, só lhe resta publicar o site que lhe está associado. Lembre-se de que deve realizar esta operação na pasta raiz que definiu na etapa anterior.

Para o ajudar, pode beneficiar de uma estrutura de site pronta a utilizar, graças aos módulos 1 clique da OVH. O site será automaticamente instalado na pasta raiz que configurou anteriormente. Para saber mais, consulte a nossa documentação intitulada: [“Módulos 1 clique: como instalar um CMS para criar um site”](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}. 

Se, pelo contrário, pretender instalar manualmente o seu site web, deverá recuperar os seus ficheiros e publicá-los na pasta raiz no seu espaço de armazenamento. Pode obter mais informações consultando a nossa documentação intitulada [“Publicar um site num alojamento web”](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/){.external}.

> [!primary]
>
> Se pretender adicionar vários websites, deverá repetir este passo.
>
> Tenha em atenção o número de sites que partilha no seu alojamento. Quanto mais sites partilhar, maior será a solicitação de recursos. [A página das nossas ofertas](https://www.ovh.pt/alojamento-partilhado/){.external} de alojamento web indica o número de websites que pode alojar no seu espaço.
>


## Quer saber mais?

["Módulos 1 clique: como instalar um CMS para criar um site"](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}

["Editar uma zona DNS da OVH"](https://docs.ovh.com/pt/domains/alojamento_partilhado_como_editar_a_minha_zona_dns/){.external}

["Publicar um site num alojamento web"](https://docs.ovh.com/pt/hosting/partilhado_colocar_o_meu_website_online/){.external}

Fale com a nossa comunidade de utilizadores em [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}