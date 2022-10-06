---
title: 'Ativar o HTTPS num website com certificado SSL'
slug: ativar-https-website-certificado-ssl
excerpt: 'Saiba como ativar o HTTPS num website que dispõe de um certificado SSL'
section: SSL
order: 02
---

**Última atualização: 04/10/2022**

## Sumário

Graças ao alojamento web da OVHcloud, pode beneficiar de um certificado SSL. Este último permite estabelecer uma ligação segura com um ou vários websites e que, por isso, sejam acessíveis através de HTTPS. Assim, para poder disfrutar desta ligação segura, é necessário configurar previamente no website.

**Saiba como ativar o HTTPS num website que dispõe de um certificado SSL.**

## Requisitos

- Ter um [certificado SSL](https://www.ovh.com/pt/ssl/){.external} instalado no [alojamento web da OVHcloud](https://www.ovhcloud.com/pt/web-hosting/){.external}.
- Dispor de, pelo menos, um website instalado e acessível no alojamento web da OVH.
- Ter acesso à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}, na secção `Web Cloud`{.action}.


## Instruções

A segurança assume um lugar cada vez mais importante na Internet. Muitos dedicam uma atenção especial à confidencialidade dos seus dados e à forma como estes transitam na web. De forma geral, os internautas confiam mais em sites que permitam uma partilha protegida, especialmente quando os dados comunicados são sensíveis. 

Quando visita um website que dispõe de uma ligação protegida, o navegador indica-o na barra de endereço, seja através de uma imagem (normalmente, um cadeado), de uma mensagem, de um código de cor ou do protocolo utilizado (HTTPS em vez de HTTP). Assim, o facto de o seu website possuir ou não uma ligação segura torna-se cada vez mais visível.

![httpswebsite](images/activate-https-website-ssl-step1.png){.thumbnail}

**Ativar o HTTPS num website pode revelar-se uma operação sensível**, uma vez que requer efetuar diferentes ações na configuração do website, ou seja, no código. Uma manipulação incorreta pode ter repercussões negativas: como uma pior referenciação nos motores de busca ou, no pior cenário, a impossibilidade de aceder ao website. 

A tabela abaixo permite-lhe compreender de forma mais clara este processo.

|Etapas|Descrição|Ação|
|---|---|---|
|1|Ativar o certificado SSL no alojamento|Permite ativar o certificado SSL ou verificar se está corretamente instalado no alojamento e ativado para o website correspondente.|
|2|Verificar o ambiente técnico|Antes de prosseguir, deve verificar que a ativação do HTTPS no website não tem repercussões negativas para este último.|
|3|Ativar o HTTPS no website|Esta ativação permite que o website utilize o protocolo HTTPS. Esta operação não é igual em todos os casos e dependerá do próprio website.|
|4|Verificar o bom funcionamento do website|Esta última etapa permite verificar que o website funciona corretamente depois de ativar o protocolo HTTPS.|

### 1 - Ativar o certificado SSL no alojamento

A ativação do certificado SSL no alojamento web é feita a partir da [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Nesse sentido, tem de realizar as seguintes operações:

|Operação|Descrição|
|---|---|
|Ativar o certificado SSL no alojamento|Permite que a OVHcloud ative o certificado SSL no alojamento. Tem de escolher entre vários tipos de certificados. Certifique-se de que seleciona o que melhor se adapta à sua situação.|
|Ativar o SSL no multi-site correspondente|O website no qual pretende utilizar o HTTPS deve ser configurado enquanto “multi-site” no alojamento. Certifique-se de que o SSL foi ativado para este último.|

Para mais informações sobre estas ações, consulte o manual [Gerir um certificado SSL no alojamento web](https://docs.ovh.com/pt/hosting/os-certificados-ssl-nos-alojamentos-web/){.external}. Se acabou de contratar o seu alojamento web com a OVHcloud, é possível que já tenha um certificado SSL instalado e que a ligação SSL para o multi-site já esteja ativa.

Para o verificar, aceda à [Área de Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pt/&ovhSubsidiary=pt){.external}. Clique em `Alojamentos`{.action} e escolha o alojamento correspondente. Certifique-se de que está no separador `Informações gerais`{.action}. Na secção “Certificado SSL”, deve estar indicado “Sim”, o que significa que já está instalado no alojamento web um certificado SSL. 

![httpswebsite](images/activate-https-website-ssl-step2.png){.thumbnail}

Por fim, clique no separador `Multi-site`{.action}. Aparecerá uma tabela com todos os domínios adicionados ao seu alojamento. Na coluna “SSL”, poderá ver se a ligação segura SSL está ativada ou desativada nos vários multi-sites. 

![httpswebsite](images/activate-https-website-ssl-step3.png){.thumbnail}

Se tiver dificuldades em verificar se o certificado SSL está instalado no seu alojamento e/ou ativado no multi-site correspondente, consulte o manual [Gerir um certificado SSL no alojamento web](https://docs.ovh.com/gb/en/hosting/ssl-certificates-on-web-hosting-plans/){.external} (versão em inglês).

### 2 - Verificar o ambiente técnico

Antes de efetuar qualquer alteração na configuração do website, certifique-se de que este último está pronto para utilizar o protocolo HTTPS. Não existe um procedimento universal, visto que depende do próprio website. 

Assim, recomendamos vivamente que tenha em consideração os elementos apresentados abaixo. Atenção: estas informações têm como objetivo ajudá-lo na medida do possível, mas não substituem a ajuda de um webmaster.

> [!warning]
>
> A responsabilidade sobre a configuração e a gestão dos serviços que a OVHcloud disponibiliza recai sobre o utilizador. Assim, deverá certificar-se de que estes funcionam corretamente.
>
> Este manual fornece as instruções necessárias para realizar as operações mais habituais. No entanto, se tiver alguma dúvida, recomendamos que recorra a um fornecedor de serviços especializado e/ou que contacte o editor do serviço. Não poderemos proporcionar-lhe assistência técnica. Para mais informações, aceda à secção “Quer saber mais?” deste manual. 
>

#### 2.1. Evitar misturar conteúdos HTTP e HTTPS

De forma geral, se o website admite a ligação através de HTTPS, deve evitar misturar conteúdos HTTP e HTTPS numa mesma página ou no conjunto do website. Ou seja, quando o website utiliza HTTPS, todo o conteúdo deve carregar-se nesse protocolo.

Se assim não for, corre o risco de oferecer no seu website aquilo que os navegadores consideram como “conteúdos mistos” (<i>mixed content</i>), isto é, conteúdos considerados potencialmente inseguros numa página web identificada como segura. Em função do tipo de conteúdo misto, podem ocorrer duas situações:

- **O website apresenta-se corretamente, mas aparece um aviso na barra de endereço**: os conteúdos considerados passivos (imagens, vídeos, etc.) pelo navegador foram carregados a partir de uma fonte não segura;

- **Algumas partes do website não são apresentadas e aparece um aviso na barra de endereço**: foram bloqueados conteúdos considerados ativos pelo navegador (scripts, iframe, ficheiros CSS, etc.) provenientes de fontes não seguras.

Assim, é primordial assegurar que a integralidade do conteúdo a ser carregado pelo seu website provém de uma fonte segura. 

![httpswebsite](images/activate-https-website-ssl-step4.png){.thumbnail}

Note que, mesmo que o seu alojamento disponha de um certificado SSL, o conteúdo armazenado neste último pode ser carregado em HTTP ou em HTTPS. Isto depende da forma como identificou tais conteúdos no código do seu site. Desta forma, tem de se certificar de que o conteúdo carregado pelo seu site utiliza o protocolo HTTPS.

Por exemplo, tenha uma atenção especial aos endereços que utiliza no código do site. Se possível:

- dê preferência à utilização de endereços relativos, como: `../img/header.png`;
- evite endereços absolutos que incluem o protocolo HTTP, como: `http://mypersonaldomain.ovh/img/header.png`.

Caso seja necessário, terá de adaptar o código do site em conformidade. No entanto, se utilizar um CMS (como o WordPress), a sua estrutura estará provavelmente pronta para utilizar o protocolo HTTPS e não terá de fazer qualquer alteração no código do website.

#### 2.2. Evitar gerar conteúdos duplicados

Em função da forma como o site está codificado, deve garantir que não será possível aceder-lhe através de diferentes endereços, por exemplo, utilizando tanto HTTP como HTTPS. Se isso acontecer, o seu website terá os mesmos conteúdos acessíveis a partir de vários endereços diferentes, o que os motores de busca consideram como conteúdo duplicado (ou *duplicate content*).

Este fenómeno pode ter um efeito negativo sobre o referenciamento do website. Neste sentido, tem de se certificar de que o website “força” a utilização do protocolo HTTPS. Para isso, deverá implementar uma regra de reescritura de URL no código do website.

Repare que, se utilizar um CMS (como o WordPress), a sua estrutura irá provavelmente gerir automaticamente as regras de reescritura e não terá de fazer qualquer alteração no código do site.

### 3 - Ativar o HTTPS no website

Uma vez que o seu alojamento web dispuser de um certificado SSL ativo, que o multi-site em causa beneficiar de uma ligação SSL ativa e que tiver assegurado que o website está pronto para utilizar HTTPS, poderá ativar este protocolo.

> [!warning]
>
> Antes de iniciar qualquer operação, recomendamos que guarde um backup completo do website, incluindo tanto os ficheiros presentes no espaço de armazenamento como a base de dados, se for o caso. 
>

Para ativar o protocolo HTTPS num website, é necessário efetuar alterações na respetiva configuração. Existem várias formas de o fazer. As informações apresentadas a seguir podem ajudá-lo neste processo de ativação, mas também podem revelar-se incompletas ou desadequadas à sua situação em específico.

- **Se utilizar um CMS (por exemplo, o WordPress)**: 

A ativação do HTTPS pode ser feita a partir da interface de gestão do website. Os passos para ativar este protocolo variam em função do CMS utilizado. 

Por exemplo, poderá ter de ativar um parâmetro chamado “Forçar HTTPS”, ou modificar o URL completo do website para adicionar um “s”: “**http**://mypersonaldomain.ovh” passaria a ser “**https**://mypersonaldomain.ovh”.

Se necessita de ajuda para realizar esta manipulação a partir da interface de gestão do seu CMS, consulte a documentação oficial do editor do site. 

- **Se escreveu o código do seu website (ou outra pessoa o fez por si)**: 

A ativação do HTTPS deve com certeza ser efetuada diretamente no código do site. Se tiver os conhecimentos necessários, modifique o código do site de modo a adaptá-lo à utilização do HTTPS. Se não sabe como fazê-lo, contacte o webmaster que criou o site para si. 

Se precisar, encontrará a seguir um exemplo de script que deverá inserir num ficheiro **.htaccess**. No entanto, isto não substitui a ajuda de um webmaster. Atenção: substitua a informação genérica presente neste script pela do seu próprio domínio e adapte-a caso seja necessário.

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.mypersonaldomain.ovh/$1 [R,L]
```

> [!warning]
>
> Para as ofertas de alojamento [Cloud Web](https://www.ovhcloud.com/pt/web-hosting/cloud-web-offer/), o script a utilizar é o seguinte:
> ```
> RewriteEngine On
> RewriteCond %{ENV:HTTPS} !on
> RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
> ```
>

### 4 - Verificar o bom funcionamento do website

Quando tiver ativado o protocolo HTTPS no website, verifique que este está a funcionar corretamente e que todo o conteúdo é apresentado como antes da manipulação. Para isso, aceda ao website, verifique se não há nenhuma mensagem de aviso e examine as diferentes secções verificando que não há problemas de visualização. 

Se encontrar algum problema, recomendamos-lhe vivamente que tente resolvê-lo de imediato ou que desative o protocolo HTTPS até identificar a sua origem. Em caso de verdadeira necessidade, pode utilizar o backup completo do website realizado no passo anterior.

Se o conteúdo do website se apresentar corretamente em HTTPS e não aparecer nenhuma mensagem de aviso, significa que a alteração foi bem-sucedida. Se desejar ativar o HTTPS noutro website do mesmo alojamento, deverá repetir todas as operações descritas neste manual.

## Quer saber mais?

Para serviços especializados (referenciamento, desenvolvimento, etc), contacte os [parceiros OVHcloud](https://partner.ovhcloud.com/pt/).

Se pretender usufruir de uma assistência na utilização e na configuração das suas soluções OVHcloud, consulte as nossas diferentes [ofertas de suporte](https://www.ovhcloud.com/pt/support-levels/).

Fale com nossa comunidade de utilizadores: <https://community.ovh.com/en/>. 