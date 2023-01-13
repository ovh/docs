---
title: Mise en place de NCM Self Service (CALM) 
slug: prism-central-expansion
excerpt: 'Comment activer Self Service et (CALM dans votre cluster Nutanix' 
section: Utilisation avancée
order: 06
---

**Dernière mise à jour le 13/01/2023**

## Objectif

**Ce guide vous montre comment mettre en place NCM Self-Service (Calm) sur votre cluster Nutanix**

> [!warning]
> OVHcloud vous met à disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous appartient donc de ce fait d’en assurer le bon fonctionnement.
>
> Ce guide a pour but de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé si vous éprouvez des difficultés ou des doutes concernant l’administration, l’utilisation ou la mise en place d’un service sur un serveur.

## Prérequis

- Disposer d'un cluster Nutanix dans votre compte OVHcloud
- Être connecté à votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)
- Être connecté sur le cluster via Prism Central
- D'avoir des licences en BYOL pour ce service (Ces licences ne sont pas disponibles avec le Pack advanced).
- Posséder un VLAN supplémentaire dans votre cluster qui fait propose du DCHP en IPAM et qui a accès à Internet 

## Présentation

NCM Self Service est une solution d'orchestration hétorogène qui permet l'automatisation et la gestion de déploiements, il fonctionne sur Prism Central il est utilisable sur des clusters Nutanix et d'autres environnements.

## En pratique

Nous allons activer CALM, créer deux applications et les publier sur le portail d'applications.

Le deux applications que nous allons publier seront :

- Un serveur WEB Nginx sous Linux Ubuntu.
- Un serveur WEB IIS sous Windows server.


### Activation de CALM

Il est nécessaire d'avoir une adresse IP configurée pour le **ISCSI Data Services IP**

A partir du tableau de bord Prism Central cliquez sur votre `Cluster`{.action} dans la rubrique **Cluster Quick Access**.

![00 Activate CALM 01](images/00-activate-calm01.png){.thumbnail}

Dans Prism Element cliquez en haut à gauche sur les `paramètres de votre cluster`{.action}.

![00 Activate CALM 02](images/00-activate-calm02.png){.thumbnail}

Saisissez une `adresse IP`{.action} dans **ISCSI Data Services IP** non utilisée de l'étendue du réseau d'administration et cliquez sur `Save`{.action}.

![00 Activate CALM 03](images/00-activate-calm03.png){.thumbnail}

Revenez dans l'interface de Prism Central allez dans le menu principal à gauche et cliquez sur `Calm`{.action} dans la rubrique **Services**

![00 Activate CALM 04](images/00-activate-calm04.png){.thumbnail}

Cliquez sur `Enable App. Orchestration(Calm)`{.action}.

![00 Activate CALM 05](images/00-activate-calm05.png){.thumbnail}

Cochez la case `Enable App Management`{.action} et cliquez sur `Save`{.action}.

![00 Activate CALM 06](images/00-activate-calm06.png){.thumbnail}

L'activation de CALM est en cours.

![00 Activate CALM 07](images/00-activate-calm07.png){.thumbnail}

> [!primary]
> Un message d'erreur apparait pendant le déploiement de CALM quittez la fênetre et attendez que le déploiement soit terminée.

![00 Activate CALM 08](images/00-activate-calm08.png)

### Création d'un projet

Avant de déployer des application il faut tout d'abord créer une projet.

Au travers du menu de Prism Central cliquez sur `Calm`{.action} dans la rubrique Services.

![01 create Project 01](images/01-create-project-01.png){.thumbnail}

Cliquez sur l'icône `Projects`{.action} dans la barre de menu verticales.

![01 create Project 02](images/01-create-project-02.png){.thumbnail}

CLiquez sur le bouton `+ Create Project`{.action}.

![01 create Project 03](images/01-create-project-03.png){.thumbnail}

Saisissez le `nom du projet`{.action} dans **Project Name** et cliquez sur `Create`{.action}

![01 create Project 04](images/01-create-project-04.png){.thumbnail}

Dans le tableau de bord cliquez sur `+ Add infrastructure`{.action}.

![01 create Project 05](images/01-create-project-05.png){.thumbnail}

Cliquez sur `Add infrastructure`{.action}.

![01 create Project 06](images/01-create-project-06.png){.thumbnail}

Sélectionnez `NTNX_LOCAL_AZ`{.action} dans accounts.

![01 create Project 07](images/01-create-project-07.png){.thumbnail}

Cliquez sur `Configure Resources`{.action}.

![01 create Project 08](images/01-create-project-08.png){.thumbnail}

Sélectionnez votre `Cluster`{.action} dans **Select clusters to be added to this project** et cliquez sur `+ Select VLANs`{.action}.

![01 create Project 09](images/01-create-project-09.png){.thumbnail}

Cochez le VLAN `production`{.action} et cliquez sur `+ Confirm and Select Default`{.action}.

![01 create Project 10](images/01-create-project-10.png){.thumbnail}

Cliquez sur `Confirm`{.action}.

![01 create Project 11](images/01-create-project-11.png){.thumbnail}

Cliquez sur `Save`{.action}.

![01 create Project 12](images/01-create-project-12.png){.thumbnail}

Dans la barre d'onglets rendez-vous sur `Environment`{.action} et cliquez sur `Create Environment`{.action}.

![01 create Project 13](images/01-create-project-13.png){.thumbnail}

Saisissez un `Nom`{.action} dans **Name** et cliquez sur `Next`{.action}.

![01 create Project 14](images/01-create-project-14.png){.thumbnail}

Cliquez sur `Select Infrastucture`{.action}.

![01 create Project 15](images/01-create-project-15.png){.thumbnail}

Cliquez sur `NTNX_LOCAL_AZ`{.action}.

![01 create Project 16](images/01-create-project-16.png){.thumbnail}

Cliquez sur `Required for lauching blueprints from marketplace`{.action}. à droite de **VM Configuration**

![01 create Project 17](images/01-create-project-17.png){.thumbnail}

Renseignez ces informations :

* **Cluster** : `sélection de votre cluster`
* **vCPUs** : `4`
* **Core per vCPU** : `1`
* **Memory (GiB)** : ``
* **Image** : `WS2022EN-SYSPREPED`

> [!primary]
> l'image a été générée à partir d'un WINDOWS Serveur 2022 dont on a appliqué un sysprep pour remettre tous les paramètres par défauts il est possible de lui appliquer des paramètres lors d'un déploiement avec CALM.

Ensuite faite défiler la `fenêtre`{.action} vers le bas.

![01 create Project 18](images/01-create-project-18.png){.thumbnail}

Cliquez sur le bouton `+`{.action} à droite de **NETWORK ADAPTERS (NICs).

![01 create Project 19](images/01-create-project-19.png){.thumbnail}

Choisissez la carte réseau dans le VLAN `production`{.action}, cochez la case `Check log-in upon create`{.action} et faites défiler la `fenêtre`{.action} vers le haut.

![01 create Project 20](images/01-create-project-20.png){.thumbnail}

Allez sur l'onglet `Linux`{.action}, saississez ces informations :

* **Cluster** : `séléction de votre cluster`
* **vCPUs** : `4`
* **Core per vCPU** : `1`
* **Memory (GiB)** : ``
* **Image** : `jammy-server-cloudimg-amd64.img`

> [!primary]
> L'image permet une installation avec cloud-init d'UBUNTU utilisable au travers de CALM, elle est téléchargeable sur Internet à cette adresse [Ubuntu CLoud Images](https://cloud-images.ubuntu.com/).
>

Ensuite faites défiler la `fenêtre vers le bas`{.action}.

![01 create Project 21](images/01-create-project-21.png){.thumbnail}

Cliquez sur le bouton `+`{.action} à droite de **NETWORK ADAPTERS (NICs).

![01 create Project 22](images/01-create-project-22.png){.thumbnail}

Choisissez la carte réseau dans le VLAN `production`{.action}, cochez la case `Check log-in upon create`{.action} et cliquez sur `Next`{.action}.

![01 create Project 23](images/01-create-project-23.png){.thumbnail}

Cliquez sur `+ Add Credential`{.action}.

![01 create Project 24](images/01-create-project-24.png){.thumbnail}

Cliquez sur `+ Add Credential`{.action}.

![01 create Project 25](images/01-create-project-25.png){.thumbnail}

Saisissez ces informations :

* **Name** : `WindowsAccount`
* **Username** : `administrator`
* **Password** : `mot de passe du compte administrator`

Ensuite cliquez sur `+ Add Credential`{.action}.

![01 create Project 26](images/01-create-project-26.png){.thumbnail}

Saisissez ces informations :

* **Name** : `LinuxAccount`
* **Username** : `administrator`
* **Password** : `mot de passe du compte administrator`

Ensuite cliquez sur `Save Environment`{.action}.

![01 create Project 27](images/01-create-project-27.png){.thumbnail}

Cliquez sur `Marketplace Usage`{.action}.

![02 add credential to environment 01](images/02-add-credential-to-environment01.png){.thumbnail}

Cliquez sur `Update`{.action}.

![02 add credential to environment 02](images/02-add-credential-to-environment02.png){.thumbnail}

Cliquez sur `Next`{.action}.

![02 add credential to environment 03](images/02-add-credential-to-environment03.png){.thumbnail}

Cliquez sur `Not ready for marketplace usage`{.action} à droite de VM Configuration.

![02 add credential to environment 04](images/02-add-credential-to-environment04.png){.thumbnail}

Faites défiler la `fenêtre`{.action} vers le bas.

![02 add credential to environment 05](images/02-add-credential-to-environment05.png){.thumbnail}

Choisissez `WindowsAccount`{.action} dans **Credential** et faites défiler la `fenêtre`{.action} vers le haut.

![02 add credential to environment 06](images/02-add-credential-to-environment06.png){.thumbnail}

Cliquez sur l'onglet `Linux`{.action} dans **Credential** et faites défiler la `fenêtre`{.action} vers le bas.

![02 add credential to environment 07](images/02-add-credential-to-environment07.png){.thumbnail}

Choisissez `LinuxAccount`{.action} dans **Credential** et cliquez sur `Next`{.action}

![02 add credential to environment 08](images/02-add-credential-to-environment08.png){.thumbnail}

Cliquez sur `Save Environment`{.action}

![02 add credential to environment 09](images/02-add-credential-to-environment09.png){.thumbnail}

Votre environement est prêt pour la création et la diffusion d'applications.

![02 add credential to environment 10](images/02-add-credential-to-environment10.png){.thumbnail}

### Création d'applications

Nous allons crééer deux applications, tester le bon fonctionnement et les publier dans le marketplace du cluster.

#### Création de l'application WEB IIS sous Windows

Dans la barre verticale choisissez `Blueprints`{.action}, faite défiler le menu `Create Blueprint`{.action} et cliquez sur sur `Multi VM/Pod Blueprint`{.action}.

![Create Windows Blueprint 01](images/03-create-windows-blueprint01.png){.thumbnail}

Choisissez le `nom`{.action} de votre plan dans **Name** et cliquez sur `Proceed`{.action}.

![Create Windows Blueprint 02](images/03-create-windows-blueprint02.png){.thumbnail}

Saisissez le `nom`{.action} dans **Application Profile Name** et cliquez sur  `Credentials`{.action} en haut.

![Create Windows Blueprint 03](images/03-create-windows-blueprint03.png){.thumbnail}

Nous allons créer le compte Windows il sera utilisé à l'interieur de sysprep en tant que variable et dans la configuration des tâches d'installation du plan et le test de connexion distant.

Cliquez sur bouton `+`{.action} à coté de Credentials.

![Create Windows Blueprint 04](images/03-create-windows-blueprint04.png){.thumbnail}

Saisissez ces informations :

- **Name** : `WindowsAccount`
- **Username** : `administrator`
- **Password** : `Mot de passe du compte administrator`

et cliquez sur `Done`{.action}.

![Create Windows Blueprint 05](images/03-create-windows-blueprint05.png){.thumbnail}

CLiquez sur `Back`{.action}.

![Create Windows Blueprint 06](images/03-create-windows-blueprint06.png){.thumbnail}

Cliquez sur le bouton `+`{.action} à gauche à coté de **Service**.

![Create Windows Blueprint 07](images/03-create-windows-blueprint07.png){.thumbnail}

Saisissez ces informations :

- **Name** : `VM IIS`
- **Operation System** : `Windows`

et cliquez sur `Clone from environment`{.action}.

![Create Windows Blueprint 08](images/03-create-windows-blueprint08.png){.thumbnail}

Faites défilez la fenêtre de droite, cochez `Guest Customization`{.action}, cliquez sur `Sysprep`{.action}, ensuite copiez le contenu du fichier sysprep ci-dessous dans **Script** :

> [!primary]
> Le fichier a été généré à partir des outils Windows ADK téléchargeables sur ce  [lien](https://learn.microsoft.com/en-us/windows-hardware/get-started/adk-install#download-the-adk-for-windows-11) et a été ensuite adapté en rajoutant des variables venant de Nutanix CALM comme `@@{WindowsAccount.secret}@@` qui représente le mot de passe du compte WindowsAccount.
> 

```xml
<?xml version="1.0" encoding="utf-8"?>
<unattend xmlns="urn:schemas-microsoft-com:unattend">
    <settings pass="windowsPE">
        <component name="Microsoft-Windows-International-Core-WinPE" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <SetupUILanguage>
                <UILanguage>en-US</UILanguage>
                <WillShowUI>Never</WillShowUI>
            </SetupUILanguage>
            <InputLocale>0409:00000409</InputLocale>
            <SystemLocale>en-US</SystemLocale>
            <UILanguage>en-US</UILanguage>
            <UserLocale>en-US</UserLocale>
        </component>
        <component name="Microsoft-Windows-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UserData>
                <AcceptEula>true</AcceptEula>
                <FullName>Nutanix Doc</FullName>
                <Organization>Nutanix Doc</Organization>
            </UserData>
            <EnableFirewall>true</EnableFirewall>
            <EnableNetwork>true</EnableNetwork>
        </component>
    </settings>
    <settings pass="specialize">
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <TimeZone>Central Standard Time</TimeZone>
            <AutoLogon>
                <Password>
                    <Value>@@{WindowsAccount.secret}@@</Value>
                    <PlainText>true</PlainText>
                </Password>
                <Enabled>true</Enabled>
                <Username>administrator</Username>
                <LogonCount>1</LogonCount>
            </AutoLogon>
        </component>
    </settings>
    <settings pass="oobeSystem">
        <component name="Microsoft-Windows-Shell-Setup" processorArchitecture="amd64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UserAccounts>
                <AdministratorPassword>
                    <Value>@@{WindowsAccount.secret}@@</Value>
                    <PlainText>true</PlainText>
                </AdministratorPassword>
            </UserAccounts>
            <OOBE>
                <HideEULAPage>true</HideEULAPage>
                <HideOEMRegistrationScreen>true</HideOEMRegistrationScreen>
                <HideOnlineAccountScreens>true</HideOnlineAccountScreens>
                <HideWirelessSetupInOOBE>true</HideWirelessSetupInOOBE>
                <ProtectYourPC>1</ProtectYourPC>
                <HideLocalAccountScreen>true</HideLocalAccountScreen>
            </OOBE>
            <FirstLogonCommands>
                <SynchronousCommand wcm:action="add">
                    <CommandLine>powershell Set-NetConnectionProfile -NetworkCategory Private</CommandLine>
                    <Order>1</Order>
                </SynchronousCommand>
                <SynchronousCommand wcm:action="add">
                    <CommandLine>powershell Set-WSManQuickConfig -Force</CommandLine>
                    <Order>2</Order>
                </SynchronousCommand>
            </FirstLogonCommands>
        </component>
        <component name="Microsoft-Windows-International-Core" processorArchitecture="wow64" publicKeyToken="31bf3856ad364e35" language="neutral" versionScope="nonSxS" xmlns:wcm="http://schemas.microsoft.com/WMIConfig/2002/State" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
            <UILanguage>en-US</UILanguage>
            <UserLocale>en-US</UserLocale>
            <SystemLocale>en-US</SystemLocale>
            <InputLocale>0409:00000409</InputLocale>
        </component>
    </settings>
    <cpi:offlineImage cpi:source="wim:c:/w2022/sources/install.wim#Windows Server 2022 SERVERSTANDARD" xmlns:cpi="urn:schemas-microsoft-com:cpi" />
</unattend>
```

![Create Windows Blueprint 09](images/03-create-windows-blueprint09.png){.thumbnail}

Continuez à aire défiler la fenêtre et vérifiez que **Check log-in upon create** soit coché et choisissez `WindowsAccount`{.action} dans **Credential**.

![Create Windows Blueprint 10](images/03-create-windows-blueprint10.png){.thumbnail}

Nous allons maintenant créer des tâches en Powershell qui s'executerons après l'installation et la personalisation de Windows. Chaque tâche s'éxécutent l'unes après l'autre.

Dans la fenêtre de gauche faites défilez, positionnez vous sur `Install`{.action} dans **Package** et cliquez sur `+ Task`{.action}.

![Create Windows Blueprint 11](images/03-create-windows-blueprint11.png){.thumbnail}

Renseignez ces informations :

**Task Name** : `IIS Installation`
**Type** : `Execute`
**Script Type** : `Powershell`
**Credential** : `WindowsAccount`

Copiez ce contenu dans **Script** :

```powershell
Install-WindowsFeature -name Web-Server -IncludeManagementTools

if ($?) {
exit 0
}

```

Et cliquez sur `+ Task`{.action}.

![Create Windows Blueprint 12](images/03-create-windows-blueprint12.png){.thumbnail}

Completez ces informations :

**Task Name** : `Customize IIS`
**Type** : `Execute`
**Script Type** : `Powershell`
**Credential** : `WindowsAccount`

Copiez ce contenu dans **Script** :

```powershell
echo "<!DOCTYPE html>" | out-file "C:\inetpub\wwwroot\default.htm"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<html>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<head>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<title>IIS on Windows AHV VM</title>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "</head>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<body>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value ""
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<h1>IIS on Windows AHV VM</h1>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "<p>Deployed with CALM</p>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value ""
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "</body>"
Add-Content -Path C:\inetpub\wwwroot\default.htm -Value "</html>"
```

Ensuite cliquez sur `+ Task`{.action}.

![Create Windows Blueprint 13](images/03-create-windows-blueprint13.png){.thumbnail}
Saisissez ces informations :

**Task Name** : `reboot VM`
**Type** : `Execute`
**Script Type** : `Powershell`
**Credential** : `WindowsAccount`

Copiez ce contenu dans **Script** :

```powershell
restart-computer -force
```

Et cliquez sur `Save`{.action} en haut de la fenêtre.

![Create Windows Blueprint 14](images/03-create-windows-blueprint14.png){.thumbnail}

L'appliation est créée cliquez sur `Launch`{.action} pour tester votre application.

![Create Windows Blueprint 15](images/03-create-windows-blueprint15.png){.thumbnail}

Saisissez un `Nom`{.action} dans **Application Name** et cliquez sur `Deploy`{.action}.

![Create Windows Blueprint 16](images/03-create-windows-blueprint16.png){.thumbnail}

Une nouvelle fenêtre apparait cliquez sur `Audit`{.action} pour voir les étapes du déploiement de votre application. Lorsque le déploiement est terminé vous pouvez voir en haut de la fenêtre l'indication **RUNNING** pour vous indiquer que l'application est déployée et active.

![Create Windows Blueprint 17](images/03-create-windows-blueprint17.png){.thumbnail}

Dans notre cas le serveur IIS est actif et affiche un messsage sur l'adresse IP de la machine virtuelle en HTTP.

![Create Windows Blueprint 18](images/03-create-windows-blueprint18.png){.thumbnail}

#### Création de l'application WEB Nginx sous Linux Ubuntu

Nous allons créer une autre application qui sera sous LINUX UBUNTU avec NGINX installé en tant que serveur WEB.

rendez-vous sur l'icône `Blueprints`{.action} dans la barre de menu vertical de CALM, cliquez sur `Multi VM/Pod Blueprint`{.action} depuis le menu **Create Blueprint**.

![04 create Linux blueprint 01](images/04-create-linux-blueprint01.png){.thumbnail}

Saisissez le `Nom`{.action} dans **Name** et cliquez sur `Proceed`{.action}.

![04 create Linux blueprint 02](images/04-create-linux-blueprint02.png){.thumbnail}

Cliquez sur `Credentials`{.action}.

![04 create Linux blueprint 03](images/04-create-linux-blueprint03.png){.thumbnail}

Cliquez sur `Credentials +`{.action}.

![04 create Linux blueprint 04](images/04-create-linux-blueprint04.png){.thumbnail}

Saisissez ces informations concernant le compte d'administration Linux :

- **Name** : `LinuxAccount`
- **Username** : `administrator`
- **Password** : `Mot de passe du compte administrator`

Ensuite cliquez sur `Done`{.action}.

![04 create Linux blueprint 05](images/04-create-linux-blueprint05.png){.thumbnail}

Cliquez sur `Credentials +`{.action}.

![04 create Linux blueprint 06](images/04-create-linux-blueprint06.png){.thumbnail}

Saisissez ces informations concernant le compte d'administration de Prism Central :

- **Name** : `PC_ADMIN`
- **Username** : `admin`
- **Password** : `Mot de passe de Prism Central`

> [!primary]
> Au travers de CALM il est possible d'agir sur les cluster Nutanix au travers des ESCRIPT qui sont des scripts en python qui peuvent faire des appels à l'API de Prism Central et ont besoins du compte utilisateur Prism Central. Ce plan augmente la taille du stockage de la machine virtuelle dans Nutanix.
>

Ensuite cliquez sur `Done`{.action}.

![04 create Linux blueprint 07](images/04-create-linux-blueprint07.png){.thumbnail}

Cliquez sur `Back`{.action}.

![04 create Linux blueprint 08](images/04-create-linux-blueprint08.png){.thumbnail}

Saisissez `Linux Application`{.action} dans **Application Proile Name** et cliquez sur `+`{.action} dans la fenêtre de gauche à droite de **Service**.

![04 create Linux blueprint 09](images/04-create-linux-blueprint09.png){.thumbnail}

Saisissez ces informations :

* **Service Name** : `Ubuntu`
* **VM Name** : `Ubuntu NGINX`

Cliquez sur `Clone from environment`{.action} et faites défiler la `fenêtre`{.action} de droite vers le bas.

![04 create Linux blueprint 10](images/04-create-linux-blueprint10.png){.thumbnail}

Cochez `Guest Customization`{.action} copiez le contenu ci-dessous dans **script**

```config
#cloud-config
users:
- name: @@{LinuxAccount.username}@@
  groups: sudo
  sudo: ALL=(ALL) NOPASSWD:ALL
  shell: /bin/bash
  lock-passwd: false
chpasswd:
 list: |
   @@{LinuxAccount.username}@@:@@{LinuxAccount.secret}@@
 expire: False
ssh_pwauth: true
```

> [!primary]
> Ce fichier est le fichier d'initialisation de Linux avec des images cloud-init, il utilise les mots de passes qui vient de CALM au travers de variables qui ont cette forme @@{LinuxAccount.username}@@ pour le compte utilisateur ou @@{LinuxAccount.secret}@@ pour le mot de .
>

faites défiler la `fenêtre`{.action} de droite vers le bas.

![04 create Linux blueprint 11](images/04-create-linux-blueprint11.png){.thumbnail}

Choisissez `LinuxAccount`{.action} dans **Check log-in upon create**.

![04 create Linux blueprint 12](images/04-create-linux-blueprint12.png){.thumbnail}

Dans la fenêtre de gauche faites rendez-vous sur `Install`{.action} en dessous de **Package** et cliquez sur `+ Task`{.action}.

![04 create Linux blueprint 13](images/04-create-linux-blueprint13.png){.thumbnail}

Saisissez ces informations concenrnant la tâche de redimentionnement du disque de votre machine virtuelle.

* **Task Name** : `Disk resize`
* **Type** : `Execute`
* **Script Type** : `EScript`

Ensuite copiez le contenu de script

```python
vmUuid = '@@{id}@@'
diskSize = 50 # GB
pcAddress = '127.0.0.1'
pcUsername = '@@{PC_ADMIN.username}@@'
pcPassword = '@@{PC_ADMIN.secret}@@'

# ============== DO NO CHANGE AFTER THIS ===============

usrPass = '{}:{}'.format(pcUsername,pcPassword)
b64Pass = base64.b64encode(usrPass)

# Get VM
api_url = 'https://{}:9440/api/nutanix/v3/vms/{}'.format(pcAddress,vmUuid)
headers = {'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Basic {}'.format(b64Pass)}

r = urlreq(api_url, verb='GET', headers=headers, verify=False)
if r.ok:
    resp = json.loads(r.content)

else:
    print("Post request failed", r.content)
    exit(1)

# Power off VM and extend disk
del resp['status']

disk_size_mib = diskSize * 1024
disk_size_bytes = disk_size_mib * 1024**2

resp['spec']['resources']['disk_list'][0]['disk_size_mib'] = disk_size_mib
resp['spec']['resources']['disk_list'][0]['disk_size_bytes'] = disk_size_bytes
resp['spec']['resources']['power_state'] = 'OFF'

payload = resp

r = urlreq(api_url, verb='PUT', params=json.dumps(payload), headers=headers, verify=False)
if r.ok:
    resp = json.loads(r.content)
    taskUuid = resp['status']['execution_context']['task_uuid']

else:
    print("Post request failed", r.content)
    exit(1)


# Monitor task
state = ""
while state != "SUCCEEDED":
    api_url = 'https://{}:9440/api/nutanix/v3/tasks/{}'.format(pcAddress,taskUuid)

    sleep(2)
    r = urlreq(api_url, verb='GET', headers=headers, verify=False)
    if r.ok:
        resp = json.loads(r.content)
        state = resp['status']
        if state == "FAILED":
            print("Task failed", resp['progress_message'])
            exit(1)

    else:
        print("Post request failed", r.content)
        exit(1)

# Wait for VM to power off
api_url = 'https://{}:9440/api/nutanix/v3/vms/{}'.format(pcAddress,vmUuid)
r = urlreq(api_url, verb='GET', headers=headers, verify=False)
if r.ok:
    resp = json.loads(r.content)
    power_state = resp['status']['resources']['power_state']

else:
    print("Post request failed", r.content)
    exit(1)

state = ""
while state != "OFF":
    api_url = 'https://{}:9440/api/nutanix/v3/vms/{}'.format(pcAddress,vmUuid)

    sleep(2)
    r = urlreq(api_url, verb='GET', headers=headers, verify=False)
    if r.ok:
        resp = json.loads(r.content)
        state = resp['status']['resources']['power_state']
        if state == "FAILED":
            print("Task failed", resp['progress_message'])
            exit(1)

    else:
        print("Post request failed", r.content)
        exit(1)

# Power on VM
del resp['status']

resp['spec']['resources']['power_state'] = 'ON'

api_url = 'https://{}:9440/api/nutanix/v3/vms/{}'.format(pcAddress,vmUuid)
payload = resp

r = urlreq(api_url, verb='PUT', params=json.dumps(payload), headers=headers, verify=False)
if r.ok:
    resp = json.loads(r.content)
    taskUuid = resp['status']['execution_context']['task_uuid']

else:
    print("Post request failed", r.content)
    exit(1)

# Monitor task
state = ""
while state != "SUCCEEDED":
    api_url = 'https://{}:9440/api/nutanix/v3/tasks/{}'.format(pcAddress,taskUuid)

    sleep(2)
    r = urlreq(api_url, verb='GET', headers=headers, verify=False)
    if r.ok:
        resp = json.loads(r.content)
        state = resp['status']
        if state == "FAILED":
            print("Task failed", resp['progress_message'])
            exit(1)

    else:
        print("Post request failed", r.content)
        exit(1)

print("OS disk extended to {} GB".format(diskSize))

# Wait until VM boots
sleep(60) 
```

Et cliquez sur + `Task`{.action}.

![04 create Linux blueprint 14](images/04-create-linux-blueprint13.png){.thumbnail}

Renseignez ces informations sur la tâche de vérification des services sur Linux:

* **Task Name** : `Service restart`
* **Type** : `Execute`
* **Script Type** : `Shell`
* **Credential** : `Service restart`

Ensuite copiez le contenu ci-dessous dans **Script** :

```bash
sudo sed 's/#$nrconf{restart} = '"'"'i'"'"';/$nrconf{restart} = '"'"'a'"'"';/g' /etc/needrestart/needrestart.conf
```

Et cliquez sur + `Task`{.action} pour ajouter une nouvelle tâche à la suite.

![04 create Linux blueprint 15](images/04-create-linux-blueprint15.png){.thumbnail}

Renseignez ces informations sur la tâche de mise à jour UBUNTU:

* **Task Name** : `Service restart`
* **Type** : `Execute`
* **Script Type** : `Shell`
* **Credential** : `Service restart`

Ensuite copiez le contenu ci-dessous dans **Script** :

```bash
sudo apt update
sudo DEBIAN_FRONTEND=noninteractive apt upgrade -y
```

Et cliquez sur + `Task`{.action} pour ajouter une nouvelle tâche à la suite.

![04 create Linux blueprint 16](images/04-create-linux-blueprint16.png){.thumbnail}

Renseignez ces informations sur la tâche d'installation de NGINX et CURL':

* **Task Name** : `Service restart`
* **Type** : `Execute`
* **Script Type** : `Shell`
* **Credential** : `Service restart`

Ensuite copiez le contenu ci-dessous dans **Script** :

```bash
sudo DEBIAN_FRONTEND=noninteractive apt install nginx curl -y
```

Et cliquez sur + `Task`{.action} pour ajouter une nouvelle tâche à la suite.

![04 create Linux blueprint 17](images/04-create-linux-blueprint17.png){.thumbnail}

Saisissez ces informations concernant la dernière tâche de personalisation de NGINX':

* **Task Name** : `Service restart`
* **Type** : `Execute`
* **Script Type** : `Shell`
* **Credential** : `Service restart`

Ensuite copiez le contenu ci-dessous dans **Script** :

```bash
sudo ls -l /var/www/html/
sudo rm -rf /var/www/html/index.nginx-debian.html
sudo touch /var/www/html/index.nginx-debian.html
sudo chown $USER:$USER /var/www/html/index.nginx-debian.html
sudo ls -l /var/www/html/
sudo echo '<!DOCTYPE html>' > /var/www/html/index.nginx-debian.html
sudo echo '<html>' >> /var/www/html/index.nginx-debian.html
sudo echo '<head>' >> /var/www/html/index.nginx-debian.html
sudo echo '<title>NGINX on Linux AHV VM</title>' >> /var/www/html/index.nginx-debian.html
sudo echo '</head>' >> /var/www/html/index.nginx-debian.html
sudo echo '<body>' >> /var/www/html/index.nginx-debian.html
sudo echo '' >> /var/www/html/index.nginx-debian.html
sudo echo '<h1>Nginx on Linux AHV VM</h1>' >> /var/www/html/index.nginx-debian.html
sudo echo '<p>Deployed with CALM</p>' >> /var/www/html/index.nginx-debian.html
sudo echo '' >> /var/www/html/index.nginx-debian.html
sudo echo '</body>' >> /var/www/html/index.nginx-debian.html
sudo echo '</html>' >> /var/www/html/index.nginx-debian.html
sudo cat /var/www/html/index.nginx-debian.html
```

Et cliquez sur + `Save`{.action} pour finaliser la création de votre plan.

![04 create Linux blueprint 18](images/04-create-linux-blueprint18.png){.thumbnail}

Cliquez sur `Launch`{.action} pour tester votre blueprint.

![04 create Linux blueprint 19](images/04-create-linux-blueprint19.png){.thumbnail}

Saisissez le `nom`{.action} de votre déploiement de test dans **Application Name** et cliquez sur `Deploy`{.action}.

![04 create Linux blueprint 20](images/04-create-linux-blueprint20.png){.thumbnail}

Le déploiement se lance.

![04 create Linux blueprint 21](images/04-create-linux-blueprint21.png){.thumbnail}

Cliquez sur `Audit`{.action} pour voir l'avancement du déploiement.

![04 create Linux blueprint 22](images/04-create-linux-blueprint22.png){.thumbnail}

Le déploiement terminé vous pouvez aller en HTTP sur l'adresse IP de votre VM NGINX pour voir le message de bienvenu.

![04 create Linux blueprint 23](images/04-create-linux-blueprint23.png){.thumbnail}

### Publication des applications 

Cliquez à gauche sur l'icône des 


### Ajout des applications publiées sur le portail de CALM





## Aller plus loin <a name="gofurther"></a>

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

[Nutanix NCM Self Service (CALM)](https://portal.nutanix.com/page/documents/details?targetId=Nutanix-Calm-Admin-Operations-Guide-v3_6_0:Nutanix-Calm-Admin-Operations-Guide-v3_6_0).
