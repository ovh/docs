---
title: 'Ativar a certificação PCI DSS no Private Cloud da OVH'
slug: ativar-certificacao-pci-dss-no-private-cloud-ovh
excerpt: 'Saiba como ativar a certificação PCI DSS no serviço Private Cloud da OVH'
section: 'Serviços e opções OVH'
---

**Última atualização: 10/05/2019**

## Sumário

É possível ativar a certificação PCI DSS na solução Private Cloud. Esta certificação é necessária, por exemplo, para alojar [dados de cartões de pagamento](https://www.ovh.pt/private-cloud/payment-infrastructure/pci-dss.xml){.external} (PCI DSS).  

**Este manual explica como ativar a certificação PCI DSS no serviço Private Cloud da OVH.**

## Requisitos

- Dispor de uma infraestrutura Private Cloud com versão 6.0 ou superior.
- Aceder à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager), na secção `Serviços Dedicados`{.action}.

## Instruções

### Ativar a opção de segurança

Para poder ativar a certificação PCI DSS no seu Private Cloud, deve ter ativado a opção de segurança correspondente. Para verificar isto, aceda à [Área de Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) e certifique-se de que está na secção “Serviços Dedicados”. Clique em `Private Cloud`{.action} na coluna à esquerda e selecione o seu Private Cloud. 

A seguir, na janela `Informações gerais`{.action}, verifique que a opção <b>Payment Card Industry Data Security Standard (PCI DSS) </b>da parte “Opções de segurança” está ativada. **Tenha em conta que não é possível ativar simultaneamente várias opções de segurança num mesmo Private Cloud.**

![hdspcidsscompliance](images/HomeSDDCManager-2.png){.thumbnail}

Se a opção não estiver ativa, clique no botão `...`{.action} situado à direita e selecione `Ativar`{.action}. Para a poder ativar, é necessário cumprir os seguintes requisitos:

- **As opções [NSX](https://www.ovh.pt/private-cloud/opcoes/nsx.xml){.external} e [vROps](https://www.ovh.pt/private-cloud/opcoes/vrops.xml){.external} devem estar ativas**: pode verificar isto na janela `Informações gerais`{.action} na parte “Opção do Private Cloud”. Se alguma delas não estiver ativa, clique no botão `...`{.action} situado à direita da opção correspondente e selecione `Ativar`{.action}.

- **A política de acesso ao vCenter deve ser restringida**: pode verificar isto no separador “Segurança”. Se tiver configurado uma política aberta, pode mudá-la para restringida clicando no botão `Política de acesso ao vCenter`{.action} e seguindo os passos indicados. Para mais informações, pode consultar o manual “[Apresentação da Área de Cliente do Private Cloud da OVH](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#security)” (versão em inglês).

- **Deve dispor de, pelo menos, um endereço IP autorizado a aceder ao vCenter**: pode verificar isto no separador “Segurança”. Se não tiver um endereço IP autorizado, pode adicionar um clicando no botão `Adicionar endereços IP`{.action}. Para mais informações, pode consultar o manual “[Apresentação da Área de Cliente do Private Cloud da OVH](../manager-ovh-private-cloud/#securite)” (versão em inglês).

Para não perder a possibilidade de se conectar, recomendamos que disponha de, pelo menos, dois endereços IP autorizados. Logicamente, os IP devem ser fixos e não dinâmicos para garantir a acessibilidade.

- **O utilizador “admin” deve dispor das autorizações necessárias e a sua informação deve ser completa**: para verificar isto, abra o separador “Utilizadores” e certifique-se de que o número de telefone e o endereço de e-mail do utilizador “admin” estão corretos e que dispõe da autorização “**token validator**”. Para alterar esta informação, clique no botão `...`{.action} situado à direita da linha correspondente e selecione `Modificar`{.action}. Para mais informações, pode consultar o manual “[Apresentação da Área de Cliente do Private Cloud da OVH](https://docs.ovh.com/gb/en/private-cloud/control-panel-ovh-private-cloud/#users)” (versão em inglês).

Para não perder o acesso ao vCenter, recomendamos que disponha sempre de, pelo menos, dois utilizadores com a sua respetiva informação (diferentes endereços de e-mail e números de telefone) e autorizações.

Depois de finalizar a ativação, deverá:

- validar o token enviado por SMS aos utilizadores que disponham da autorização “**token validator**” para confirmar que pode receber os tokens necessários para validar as operações;
- preencher os documentos que receberá por e-mail para finalizar a parte contratual. 

Entretanto, recomendamos que continue a ler este manual para saber como utilizar a interface segura. 

> [!primary]
>
> Tenha em conta que não poderá aceder à interface vSphere durante a ativação da opção de segurança.
>

### Começar a utilizar a interface segura

Depois de ativar a opção de segurança, receberá por e-mail o procedimento de validação dos tokens, que explica, entre outras coisas, o seu funcionamento e os passos que deve seguir para os poder utilizar. 

Como medida de precaução, depois da ativação da opção de segurança:

- todos os utilizadores do Private Cloud serão desativados;
- deverá alterar as palavras-passe dos seus utilizadores para os reativar;
- de agora em diante, a alteração das palavras-passe dos utilizadores só poderá ser realizada a partir da interface segura  (já não será possível realizar esta operação a partir da Área de Cliente da OVH). 

Relembramos que não poderá aceder à interface segura até finalizar a ativação da opção de segurança.

Aceda à interface segura através da ligação que receberá por e-mail. Esta ligação terá o formato “https://pcc-xxx-xxx-xxx-xxx.ovh.com/secure/password-lost”. Depois de se conectar, poderá alterar a palavra-passe do utilizador “admin” e, de seguida, a dos utilizadores adicionais. Para mais informações, consulte o nosso manual “[Utilizar a interface segura](../interface-secure/)” (versão em francês).

## Quer saber mais?

Fale com a nossa comunidade de utilizadores em <https://community.ovh.com/en/>.