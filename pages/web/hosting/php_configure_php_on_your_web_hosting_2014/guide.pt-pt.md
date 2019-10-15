---
title: 'Mudar a versão de PHP do alojamento web'
slug: configurar_o_php_num_alojamento_web_alojamentos_2014_ovh
excerpt: 'Saiba como mudar a versão de PHP do seu alojamento web da OVH'
id: '1207'
legacy_guide_number: g1207
---

**Última atualização: 24/09/2018**

## Sumário

Na Internet, existem inúmeros sites. O seu [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} permite-lhe alojar o site que quiser, desde que seja compatível com a [configuração das nossas infraestruturas](https://cluster028.hosting.ovh.net/infos/){.external}. Neste sentido, poderá querer alterar a versão de PHP utilizada pelo seu alojamento web.

**Saiba como mudar a versão de PHP do seu alojamento web da OVH.**

## Requisitos

- Ter um serviço de [alojamento web OVH](https://www.ovh.pt/alojamento-partilhado/){.external} (exceto Cloud Web).
- Consoante o método utilizado, ter acesso à gestão do alojamento web a partir da [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) ou às informações que lhe permitem aceder ao seu espaço de armazenamento. 

## Instruções

Atualmente, existem várias versões da linguagem de programação PHP. As versões mais recentes incluem correções, e incorporam ou dispensam determinadas funcionalidades. A OVH propõe as principais versões mais recentes de PHP que poderá consultar na seguinte ligação: <https://www.ovh.pt/alojamento-partilhado/php.xml>. 

Uma vez que as novas versões podem não incluir determinadas funcionalidades, **certifique-se de que a nova versão de PHP é compatível com o seu website antes de realizar qualquer alteração.**

### 1 - Verificar a compatibilidade do site

Embora a OVH trate da instalação das versões mais recentes de PHP nos seus servidores, cabe-lhe a si, enquanto webmaster, garantir que o seu website está sempre atualizado e compatível com as versões mais recentes de PHP. Dependendo do site que utiliza, existem duas formas de verificar:

**Utilizo um site “chave na mão”, como um sistema de gestão de conteúdos (Content Management System ou CMS)**, como por exemplo o WordPress ou o Joomla!: 

- Consulte a documentação oficial criada pelo editor do CMS que utiliza; 
- Tome nota das informações relativamente aos requisitos técnicos indispensáveis para o funcionamento do seu CMS, assim como à manipulação necessária para o atualizar;
- Caso seja necessário, atualize o seu CMS garantindo que a nova versão é compatível com o alojamento da OVH.

**Utilizo um site baseado numa solução personalizada**: 

- Entre em contacto com o webmaster que criou o website;
- Para saber mais sobre as migrações de versões acessíveis, consulte a documentação oficial PHP: <http://php.net/manual/pt_BR/appendices.php>;
- Caso seja necessário, atualize o código do seu site garantindo que este é compatível com o alojamento da OVH.

Tem a possibilidade de conhecer a versão de PHP que está a ser utilizada pelo seu alojamento: 

|Meios|Descrição|
|---|---|
|Através da Área de Cliente|Aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clique em `Alojamentos`{.action} na barra à esquerda e escolha o nome do alojamento correspondente. Na janela `Informações gerais`{.action}, localize a versão abaixo de **“Versão global de PHP”**. Se vir um símbolo redondo azul, aguarde alguns minutos para que a versão seja atualizada.|
|Através de um script|Crie um script **.php** incluindo apenas o código `<?php phpinfo(); ?>`. Deverá publicá-lo no seu espaço de armazenamento e aceder-lhe através do seu endereço URL completo.|

![phpversion](images/change-php-version-step1.png){.thumbnail}

Se não conseguir verificar a compatibilidade do seu website com a nova versão de PHP, pode tentar alterar a versão atual e retroceder, caso seja necessário (**desaconselhamos fortemente este método**). No entanto, corre o risco de gerar uma falha no seu site. Aliás, mesmo que o site continue a ser apresentado após a alteração, é possível que alguma funcionalidade tenha sido afetada e deixe de funcionar. 

Avance para o passo seguinte para efetuar a alteração.

### 2 - Alterar a versão de PHP do seu alojamento web

Existem duas formas de alterar a versão de PHP do seu alojamento web:

- **através de um assistente de configuração a partir da Área de Cliente**: esta solução é menos técnica e requer uma ligação à Área de Cliente, onde poderá escolher as a nova versão de PHP pretendida. Consulte o manual [“Alterar a configuração do alojamento web”](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web/){.external};

- **alterando manualmente um ficheiro no seu espaço de armazenamento**: esta solução é mais técnica e precisa de aceder ao seu espaço de armazenamento, onde deverá alterar o ficheiro “.ovhconfig”. Consulte o manual [“Configurar o ficheiro .ovhconfig do alojamento web”](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.

Para os amantes de tecnologia: a alteração da versão de PHP através de um ficheiro .htaccess já não é possível nas ofertas de [alojamento web da OVH](https://www.ovh.pt/alojamento-partilhado/){.external} mais recentes. A diretiva que permite mudar a versão de PHP no ficheiro .htaccess não permite a utilização de versões recentes de PHP nas nossas infraestruturas. Desta forma, é obrigatório utilizar o ficheiro “.ovhconfig” com a ajuda do manual [“Configurar o ficheiro .ovhconfig do alojamento web”](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}.

## Quer saber mais?

[Alterar a configuração do alojamento web](https://docs.ovh.com/pt/hosting/modificar_o_ambiente_de_execucao_do_meu_alojamento_web//){.external}

[Configurar o ficheiro .ovhconfig do alojamento web](https://docs.ovh.com/pt/hosting/configurar-ficheiro-ovhconfig/){.external}

Fale com a nossa comunidade de utilizadores: [Comunidade OVH](https://community.ovh.com/en/){.external}