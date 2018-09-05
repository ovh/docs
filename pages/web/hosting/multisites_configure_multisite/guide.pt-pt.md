---
title: 'Partilhar o alojamento entre vários sites'
slug: multisites-configurar-um-multisite-no-meu-alojamento-web
excerpt: 'Saiba como partilhar o alojamento entre vários sites'
section: 'Configuração do alojamento'
order: 1
---

**Última atualização: 05/09/2018**

## Sumário

É possível partilhar um alojamento web entre vários sites. Esta partilha pode ser realizada para nomes de domínios registados na OVH ou noutro lugar.

**Saiba como partilhar o seu alojamento entre vários sites.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovh.pt/alojamento-partilhado/){.external} compatível.
- Dispor de um ou vários [domínios](https://www.ovh.pt/dominios/){.external}.
- Ter a possibilidade de alterar a configuração dos domínios (a zona DNS).
- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

## Instruções

### 1 - Aceder à gestão multi-site

Para iniciar a operação, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra de serviços à esquerda e escolha o nome do alojamento em questão. Por fim, clique no separador `Multi-site`{.action}.

O quadro que vai aparecer contém todos os domínios adicionados ao seu alojamento. Alguns deles foram criados automaticamente durante a instalação do alojamento.

> [!primary]
>
> Em caso de migração de site e se pretender evitar uma interrupção do serviço, pode seguir para o passo [4 - “Publicação do site”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#4-publicacao-do-site){.external}.
>

![multi-site](images/access-multisite-ovh.png){.thumbnail}

### 2 - Adicionar um domínio ou um subdomínio

Para adicionar um novo domínio ao alojamento web, clique no botão `Adicionar um domínio ou subdomínio`{.action} e faça a sua escolha na janela que é apresentada.

- **Adicionar um domínio registado na OVH**:

Apenas são apresentados os domínios que incluem a configuração OVH e que foram indicados como contactos para o seu ID de cliente. Selecione um da lista e clique no botão `Seguinte`{.action}. Em seguida, consulte o passo [3.1 - “Adicionar um domínio registado na OVH”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#31-adicionar-um-dominio-registado-na-ovh){.external}.

- **Adicionar um domínio externo**:

Se o domínio não aparecer na lista, isto significa que este é considerado externo (relativamente ao seu ID de cliente ou à OVH). Se este for o caso, selecione a opção `Adicionar um nome de domínio externo`{.action} e clique no botão `Seguinte`{.action}. De seguida, consulte o passo [3.2 - “Adicionar um domínio externo”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#32-adicionar-um-dominio-externo){.external}.

![multi-site](images/add-multisite-step1.png){.thumbnail}

### 3.1 - Adicionar um domínio registado na OVH

> [!primary]
>
> Este passo aplica-se apenas caso tenha selecionado a opção “Adicionar um domínio registado na OVH”. Para um domínio externo, consulte o passo [3.2 - “Adicionar um domínio externo”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#32-adicionar-um-dominio-externo){.external}.
>

Aqui, deverá personalizar a adição do domínio. Dependendo do seu serviço de [alojamento web OVH](https://www.ovh.pt/alojamento-partilhado/){.external}, alguns elementos propostos não poderão ser selecionados.

|Informação|Descrição|
|---|---|
|Domínio|Por predefinição, o nome de domínio que selecionou é automaticamente indicado. Pode adicionar um subdomínio (por exemplo: blog.mypersonaldomain.ovh) e, ao mesmo tempo, criar o subdomínio “www” correspondente (por exemplo: www.blog.mypersonaldomain.ovh). No final, este domínio será o endereço web do site que pretende publicar.|
|Pasta raiz|Defina a pasta onde o domínio será alojado no seu espaço de armazenamento. É neste espaço que os ficheiros do site deverão ser publicados. Por exemplo: para blog.mypersonaldomain.ovh, a pasta raiz poderia ser “blog”. Se a pasta não existir, esta será criada automaticamente.|
|Ativar o IPv6|Permite ativar o protocolo IPv6 no domínio indicado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|
|SSL|Permite-lhe beneficiar de uma ligação segura (HTTPS://) no nome de domínio selecionado. Saiba mais na nossa [página sobre SSL](https://www.ovh.pt/ssl/){.external}. Ao ativar o SSL e o CDN (Content Delivery Network), poderá também beneficiar do protocolo **HTTP2**.|
|Ativar o CDN|Permite ativar o CDN (implementação de cache dos elementos estáticos do seu site, como as imagens) no nome de domínio selecionado. Saiba mais na [nossa página sobre CDN](https://www.ovh.pt/cdn/infrastructure/){.external}. Ao ativar o SSL e o CDN, poderá também beneficiar do protocolo **HTTP2**.|
|IP do país|Permite beneficiar de um endereço de IP geolocalizado (a partir de uma lista de países) para o nome de domínio selecionado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|
|Ativar a firewall|Permite ativar uma firewall (análise de pedidos) no nome de domínio selecionado. Saiba mais na [nossa página sobre Mod Security](https://www.ovh.pt/alojamento-partilhado/mod_security.xml){.external}.|
|Logs separados|Permite ativar um novo espaço de logs no domínio selecionado. Terá de escolher um nome de domínio a partir de uma lista que determinará o nome de acesso a esse novo espaço. Saiba mais na nossa [página sobre Estatísticas detalhadas](https://www.ovh.pt/alojamento-partilhado/website_statistics.xml){.external}.|

Concluída esta etapa, clique no botão `Seguinte`{.action}. Sugerimos que verifique o resumo apresentado.

![multi-site](images/add-multisite-step2.png){.thumbnail}

Ao selecionar um nome de domínio registado na OVH, tem a possibilidade de modificar automaticamente ou manualmente a sua configuração DNS:

- **para uma configuração DNS automática**: selecione a opção `Configuração automática (recomendada)`{.action};
- **para uma configuração DNS manual**: desselecione a opção `Configuração automática (recomendada)`{.action} e recupere as informações apresentadas que pretende modificar. Quando efetuar esta configuração, consulte a documentação [“Editing an OVH DNS zone”](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external} (versão inglesa - Editar uma zona DNS OVH).

Em seguida, clique no botão `Validar`{.action} para adicionar o domínio. Esta operação pode demorar até uma hora. No entanto, a propagação das alterações da configuração DNS do seu domínio pode demorar entre 4 a 24 horas.

Depois de adicionar o domínio, consulte o passo [4 - “Publicação do site”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#4-publicacao-do-site){.external}.

### 3.2 - Adicionar um domínio externo

> [!primary]
>
> Este passo aplica-se apenas caso tenha selecionado a opção “Adicionar um domínio externo” (domínio registado fora da OVH ou sem gestão a partir da Área de Cliente). Para um domínio registado na OVH, consulte novamente o passo [3.1 - “Adicionar um domínio registado na OVH”](https://docs.ovh.com/pt/hosting/multisites-configurar-um-multisite-no-meu-alojamento-web/#31-adicionar-um-dominio-registado-na-ovh){.external}.
>

Aqui, deverá personalizar a adição do domínio. Tenha em atenção que algumas opções incluídas na sua oferta de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} não podem ser ativadas durante este processo. Deverá finalizar esta operação antes de as poder ativar, alterando as definições do Multi-site quando este for adicionado.

|Informação|Descrição|
|---|---|
|Domínio|Indique o domínio que pretende utilizar. Caso necessário, adicione um subdomínio (por exemplo: blog.mypersonaldomain.ovh) e, ao mesmo tempo, crie o subdomínio “www” correspondente (por exemplo: www.blog.mypersonaldomain.ovh). No final, este domínio será o endereço web do site que pretende publicar. Para finalizar a adição, certifique-se de que consegue alterar a configuração do domínio (a sua zona DNS).|
|Pasta raiz|Defina a pasta onde o domínio será alojado no seu espaço de armazenamento. É neste espaço que os ficheiros do site deverão ser publicados. Por exemplo: para blog.mypersonaldomain.ovh, a pasta raiz poderia ser “blog”. Se a pasta não existir, esta será criada automaticamente.|
|Ativar o IPv6|Permite ativar o protocolo IPv6 no domínio indicado. Obtenha mais informações na [nossa página sobre IP](https://www.ovh.pt/alojamento-partilhado/ip.xml){.external}.|

Concluída esta etapa, clique no botão `Seguinte`{.action}. Sugerimos que verifique o resumo apresentado.

![multi-site](images/add-multisite-external-step1.png){.thumbnail}

Depois de selecionar um domínio externo, é essencial realizar uma etapa de validação particular, de forma a podermos garantir que a operação é legítima. Por conseguinte, receberá uma mensagem solicitando a alteração da respetiva configuração DNS. 

Tenha em atenção os elementos apresentados e clique no botão `Validar`{.action}. O nome de domínio é adicionado temporariamente, até a configuração DNS ser alterada.

> [!warning]
>
> Esta alteração é indispensável para que a adição do domínio possa ser bem-sucedida. Se esta operação não for efetuada, a adição do domínio será anulada.
>

A alteração da configuração do nome de domínio (a sua zona DNS) deve ser realizada a partir da interface do fornecedor que a gere. Se a gestão for feita pela OVH, consulte a documentação [“Editing an OVH DNS zone”](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/) (versão inglesa - Editar uma zona DNS OVH). Depois de efetuar a alteração, é necessário aguardar entre 4 a 24 horas até que esta seja implementada.

Se pretender consultar os elementos que deseja alterar relativamente à configuração DNS do nome de domínio:

|Campo|Onde posso encontrar a informação?|Descrição|
|---|---|---|
|TXT|Selecione a secção `Multi-site`{.action} e, em seguida, clique em **Configuração do token ovhcontrol**|Permite à OVH garantir que a adição de cada nome de domínio externo é legítima. Certifique-se de que o campo TXT é criado com o subdomínio **ovhcontrol** (por exemplo: ovhcontrol.mypersonaldomain.ovh).|
|A e AAAA|Na secção `Informações gerais`{.action} e ao lado de **IPv4** e **IPv6**|Permite que o seu domínio apresente o site web publicado no seu alojamento web.|

### 4 - Publicação do site

Depois de adicionar o nome de domínio, só lhe resta publicar o site que lhe está associado. Lembre-se de que deve realizar esta operação na pasta raiz que definiu na etapa anterior.

Para o ajudar, pode beneficiar de uma estrutura de site pronta a utilizar, graças aos módulos 1 clique da OVH. O site será automaticamente instalado na pasta raiz que configurou anteriormente. Para saber mais, consulte a nossa documentação intitulada: [“Módulos 1 clique: como instalar um CMS para criar um site”](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}. 

Se, pelo contrário, pretender instalar manualmente o seu site web, deverá recuperar os seus ficheiros e publicá-los na pasta raiz no seu espaço de armazenamento. Pode obter mais informações através da nossa documentação intitulada [“Publishing a website on your Web Hosting space”](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} (versão inglesa - Publicar um site web num alojamento web).

> [!primary]
>
> Se pretender efetuar várias partilhas, deverá realizar todas as operações várias vezes.
>
> Lembre-se de que quanto maior for o número de sites no seu alojamento, maior será a solicitação de recursos atribuídos. A página dos nossos [pacotes de alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} indicar-lhe-á o número de sites que pode alojar no seu espaço.
>


## Quer saber mais?

["Módulos 1 clique: como instalar um CMS para criar um site"](https://docs.ovh.com/pt/hosting/partilhado_guias_dos_modulos_dos_alojamentos_partilhados/){.external}


["Editing an OVH DNS zone"](https://docs.ovh.com/gb/en/domains/web_hosting_how_to_edit_my_dns_zone/){.external} (versão inglesa - Editar uma zona DNS OVH)

["Publishing a website on your Web Hosting space"](https://docs.ovh.com/gb/en/hosting/web_hosting_how_to_get_my_website_online/){.external} (versão inglesa - Publicar um site web num alojamento web)

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}