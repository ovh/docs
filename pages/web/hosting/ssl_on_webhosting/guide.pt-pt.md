---
title: 'Gerir um certificado SSL num alojamento web'
slug: os-certificados-ssl-nos-alojamentos-web
excerpt: 'Saiba como gerir um certificado SSL no alojamento web da OVH'
section: SSL
order: 1
---

**Última atualização: 25/07/2019**

## Sumário

O seu alojamento web permite-lhe gerir um certificado SSL. Podem encomendá-lo através da OVH ou comprar um e importá-lo para o seu alojamento. Depois de configurado e instalado, este certificado fornece a um ou vários dos seus websites uma ligação SSL segura, o que permite que os websites funcionem em HTTPS.

**Saiba como gerir um certificado SSL num alojamento web da OVH.**

## Requisitos

- Dispor de um [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external}.
- Ter registado, pelo menos, um [nome de domínio](https://www.ovh.pt/dominio/){.external}.
- Ter acesso à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, na secção “Web”.

## Instruções

Existem várias formas de gerir um certificado SSL no alojamento web da OVH. Recomendamos que consulte os capítulos e se concentre no método que quiser adotar.

- [Ativar um certificado SSL no alojamento web](https://docs.ovh.pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-um-certificado-SSL-no-alojamento-web){.external}: permite-lhe ativar um certificado SSL no alojamento web. Pode tratar-se de um certificado gratuito ou pago encomendado junto da OVH. Pode também importar o seu próprio certificado SSL encomendado noutro fornecedor.

- [Ativar um certificado SSL num multisite](https://docs.ovh.pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-um-certificado-SSL-num-multisite){.external}: se o seu plano ou certificado SSL o permitem, pode fazer com que vários dos seus multisites beneficiem de uma ligação SSL segura.

- [Regenerar um certificado SSL do alojamento web](https://docs.ovh.pt/hosting/os-certificados-ssl-nos-alojamentos-web/#regenerar-um-certificado-ssl-do-alojamento-web){.external}: permite regenerar um certificado SSL no alojamento web quando acaba de o ativar num ou vários multisites. 

- [Eliminar um certificado SSL do alojamento web](https://docs.ovh.pt/hosting/os-certificados-ssl-nos-alojamentos-web/#eliminar-um-certificado-ssl-do-alojamento-web){.external}: permite eliminar o certificado SSL do alojamento da OVH. Esta operação pode afetar o normal funcionamento dos sites que estejam a utilizar o certificado. 

### Ativar um certificado SSL no alojamento web

O alojamento web da OVH permite-lhe ativar um [certificado SSL graças a várias soluções](https://www.ovh.pt/ssl/){.external}:

- um certificado SSL gratuito Let's Encrypt, [incluído num plano de alojamento web compatível](https://www.ovh.pt/ssl/){.external};
- um certificado SSL pago, [como opção num plano de alojamento web compatível](https://www.ovh.pt/ssl/){.external};
- a importação de um certificado SSL encomendado junto de outro fornecedor.

Para ativar o certificado, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento em causa. Clique no separador `Informações gerais`{.action}. Na secção “Certificado SSL”, deve surgir a menção “Não”, o que indica que não há nenhum certificado instalado no alojamento web. Clique nos três pontos junto de “Certificado SSL” e, a seguir, em `Encomendar um certificado SSL`{.action}.

Por outro lado, se vir a menção “Sim”, isto significa que um certificado SSL já foi instalado e configurado no alojamento web. Por consequente, não poderá encomendar outro certificado enquanto já tiver um instalado.

![managessl](images/manage-ssl-step1.png){.thumbnail}

Na janela que aparecer, selecione o certificado SSL que pretende encomendar. Em função da sua [oferta de alojamento web](https://www.ovh.pt/alojamento-partilhado/){.external} e da respetiva configuração, é possível que nenhuma das soluções apresentadas abaixo esteja disponível. Uma vez selecionada uma opção, clique no botão `Seguinte`{.action}.

![managessl](images/manage-ssl-step2.png){.thumbnail}

Em função da solução que selecionou, poderá ter de realizar alguns passos adicionais:

- **Se selecionou um certificado SSL gratuito**: não deverá ser necessária nenhuma ação adicional, exceto se um elemento técnico impedir a ativação do certificado SSL (nesse caso, surgirá um aviso na Área de Cliente a indicar-lhe os elementos que deve verificar) ou a validação do domínio para a atribuição do certificado SSL. Nesse caso, será notificado e deverá seguir as instruções que receberá;

- **Se selecionou um certificado SSL pago:** deverá concluir o processo de encomenda para receber um certificado. Pode ser necessária uma validação específica para certos tipos de certificados SSL. Poderá receber um ou vários e-mails sobre este assunto. Se tal for o caso, leia as informações enviadas e siga as instruções fornecidas para concluir a configuração;

- **Se optou por importar um certificado SSL:** deverá inserir os detalhes do certificado nas zonas apresentadas. Consulte as informações enviadas pelo fornecedor junto do qual adquiriu o certificado. 

A configuração do certificado pode demorar alguns minutos ou vários dias, dependendo no tipo de certificado selecionado. Para verificar se o certificado SSL já está configurado no alojamento web, aceda à Área de Cliente OVH e clique no separador `Informações gerais`{.action}. A menção “Sim” deve aparecer junto de “Certificado SSL”. 

![managessl](images/manage-ssl-step4.png){.thumbnail}

Uma vez a configuração efetuada, consulte o passo [“Ativar um certificado SSL num multisite”](https://docs.ovh.pt/hosting/os-certificados-ssl-nos-alojamentos-web/#ativar-um-certificado-ssl-num-multisite){.external} para garantir que todos os websites dispõem de uma ligação SSL segura ativa.

### Ativar um certificado SSL num multisite

Consoante o [certificado SSL](https://www.ovh.pt/ssl/){.external} de que dispõe, tem a possibilidade de ativar uma ligação SSL segura num ou vários dos seus multisites. Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. Por fim, clique no separador `Multisite`{.action}.

Aparecerá uma tabela com todos os domínios adicionados ao seu alojamento web. A coluna “SSL” indica o estado de ativação das ligações SSL seguras nos seus multisites. 

![managessl](images/manage-ssl-step5.png){.thumbnail}

Podem surgir três estados diferentes:

|Estados|Descrição|
|---|---|
|Ativado|Um certificado SSL já foi ativado para este multisite. No entanto, se o seu website não estiver disponível em HTTPS, consulte as instruções indicadas no nosso manual “[Ativar o HTTPS num website com certificado SSL](https://docs.ovh.com/pt/hosting/ativar-https-website-certificado-ssl/){.external}”.|
|A gerar / atualizar|Um certificado SSL foi ativado para este multisite, mas ainda não está ativo a nível técnico. Para isso, deverá regenerá-lo para que inclua os novos domínios do multisite.|
|Desativado|Não foi ativado nenhum certificado SSL para este multisite. Para o ativar, siga os passo abaixo.|

Para ativar o SSL num multisite, clique no ícone em forma de roda dentada à direita do multisite em causa e depois em `Alterar`{.action}. Na janela que surgir, selecione a caixa `SSL`{.action} e prossiga as etapas até validar a modificação.

Uma vez que tiver submetido o pedido de ativação, o estado da ligação segura SSL para o multisite deverá ser atualizado em alguns minutos, sendo este substituído para “A gerar / atualizar”. Repita este processo se pretender ativar um certificado SSL para outros multisites. De seguida, pode aceder ao manual [“Gerir um certificado SSL num alojamento web”](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/){.external}.

![managessl](images/manage-ssl-step6.png){.thumbnail}

### Regenerar um certificado SSL do alojamento web

> [!primary]
>
> Esta operação é apenas aplicável aos certificados que permitem ativar uma ligação SSL segura para vários multisites.
>

Depois de ativar uma ligação SSL segura num ou vários dos seus multisites, o estado indica “A gerar / atualizar”. Esta geração é essencial para poder adicionar ao certificado SSL do seu alojamento web.

Para isso, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos` na barra à esquerda e escolha o nome do alojamento correspondente. Clique no separador `Informações gerais`{.action}. A seguir, clique nos três pontos junto de “Certificado SSL” e selecione `Gerar / atualizar certificado SSL`{.action}.

![managessl](images/manage-ssl-step7.png){.thumbnail}

Na janela que surgir, leia as informações apresentadas e clique no botão `Validar`{.action}. A seguir, aguarde até que o certificado SSL seja gerado. Este passo pode demorar algumas horas.

Tenha em conta que a Let's Encrypt, a autoridade que fornece o certificado SSL incluído no seu alojamento web, impõe um [limite de cinco regenerações por semana](https://letsencrypt.org/docs/rate-limits/){.external}. Assim, fique atento às diferentes regenerações que possa realizar a curto prazo, de modo a evitar um bloqueio temporário.

![managessl](images/manage-ssl-step8.png){.thumbnail}

### Eliminar um certificado SSL do alojamento web

Se pretender, também pode eliminar o certificado SSL atualmente instalado no seu alojamento web. Antes de começar a realizar as alterações, **recomendamos vivamente que se certifique de que a eliminação do certificado não irá afetar a disponibilidade dos seus websites**. Tenha em consideração que os visitantes irão ver um erro de segurança caso acedam a um website que funciona em HTTPS, mas que não beneficia de uma ligação SSL segura. 

Como esta verificação se realiza diretamente na configuração do website, recomendamos que recorra a um fornecedor especializado se encontrar dificuldades. Não poderemos proporcionar-lhe assistência técnica.

Quando estiver preparado para eliminar o certificado SSL, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o alojamento web em causa. Certifique-se de que está no separador `Informações gerais`{.action}. Clique nos três pontos junto de “Certificado SSL” e selecione a opção `Eliminar o certificado SSL`{.action}.

Na página que aparecer, valide a eliminação. Esta última será concluída em algumas horas. 

![managessl](images/manage-ssl-step9.png){.thumbnail}

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.