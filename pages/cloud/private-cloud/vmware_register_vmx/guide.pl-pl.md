---
title: Rekord VM na nowym PCC
slug: vsphere-register-vm-vmx
excerpt: Dowiedz się, jak ponownie zarejestrować wirtualne maszyny w nowej usłudze w starych datastore
section: Funkcjonalności VMware vSphere
order: 07
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 


**Ostatnia aktualizacja z dnia 22-03-2021**

## Wprowadzenie

W wyniku incydentu wirtualne maszyny nie wyświetlają się już w katalogu vSphere, ale wszystkie pliki są nadal dostępne na datastores.

**Dowiedz się, jak włączyć ponownie wirtualne maszyny datastore do listy vSphere**

## Wymagania początkowe

- Posiadanie kontaktu administracyjnego infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika (utworzonego w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl))

## W praktyce

W [interfejsie vSphere](../polaczenie-interfejs-vsphere/) umieść widok `Storage`{.action}.

![przestrzeń dyskowa](images/register-vmx-01.png){.thumbnail}

Wybierz datastore z listy.

![wybierz datastore](images/register-vmx-02.png){.thumbnail}

W folderach tego datastore wybierz plik `.vmx` i kliknij `Register VM`{.action}.

![enregistrer VM](images/register-vmx-03.png){.thumbnail}

Uzupełnij wymagane informacje i kliknij `Finish`{.action}.

![enregistrer VM](images/register-vmx-04.png){.thumbnail}

Te same operacje są powtarzane na każdym datastore i dla każdej VM do ponownego zapisywania.

Sprawdź parametry swoich wirtualnych maszyn (nazwa, [portgroup](../creation-vlan/), itp..) klikając prawym przyciskiem myszy na każdym z nich, a następnie wybierając `Edit Settings`{.action}.

![zmień ustawienia](images/register-vmx-06.png){.thumbnail}

W przypadku błędu konfiguracji wyświetli się komunikat błędu podczas włączania VM.

Możesz włączyć ponownie wirtualną maszynę klikając prawym przyciskiem myszy, a następnie klikając `Power On`{.action}

![enregistrer VM](images/register-vmx-05.png){.thumbnail}

### Automatyzacja

W przypadku kilkudziesięciu wirtualnych maszyn i/lub datastore możesz użyć skryptów do wykonywania operacji na przestrzeni datastore i zapisywania wirtualnych maszyn.

#### Avec PowerCLI

VMware dostarcza PowerCLI administratorom VMware korzystającym z PowerShell: [Installez PowerCLI](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.install.doc/GUID-F02D0C2D-B226-4908-9E5C-2E783D41FE2D.html){.external}.

Następnie możesz użyć poniższego skryptu, dostosowanego do skryptu napisanego przez [LucD](https://www.lucd.info/2009/12/02/raiders-of-the-lost-vmx/){.external}.

```powershell
function register-vmxX {
    param($entityName = $null,$dsNames = $null,$template = $false,$ignore = $null,$checkNFS = $true,$whatif=$false)

    function Get-Usage{
        Write-Host "Parameters incorrect" -ForegroundColor red
        Write-Host "register-vmxX -entityName  -dsNames [,...]"
        Write-Host "entityName   : a cluster-, datacenter or ESX hostname (not together with -dsNames)"
        Write-Host "dsNames      : one or more datastorename names (not together with -entityName)"
        Write-Host "ignore       : names of folders that shouldn't be checked"
        Write-Host "template     : register guests ($false)or templates ($true) - default : $false"
        Write-Host "checkNFS     : include NFS datastores - default : $true"
        Write-Host "whatif       : when $true will only list and not execute - default : $false"
    }

    if(($entityName -ne $null -and $dsNames -ne $null) -or ($entityName -eq $null -and $dsNames -eq $null)){
        Get-Usage
        break
    }

    if($dsNames -eq $null){
        switch((Get-Inventory -Name $entityName).GetType().Name.Replace("Wrapper","")){
            "Cluster"{
                $dsNames = Get-Cluster -Name $entityName | Get-VMHost | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "Datacenter"{
                $dsNames = Get-Datacenter -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            "VMHost"{
                $dsNames = Get-VMHost -Name $entityName | Get-Datastore | where {$_.Type -eq "VMFS" -or $checkNFS} | % {$_.Name}
            }
            Default{
                Get-Usage
                exit
            }
        }
    }
    else{
        $dsNames = Get-Datastore -Name $dsNames | where {$_.Type -eq "VMFS" -or $checkNFS} | Select -Unique | % {$_.Name}
    }

    $dsNames = $dsNames | Sort-Object
    $pattern = "*.vmx"
    if($template){
        $pattern = "*.vmtx"
    }

    foreach($dsName in $dsNames){
        Write-Host "Checking " -NoNewline; Write-Host -ForegroundColor red -BackgroundColor yellow $dsName
        $ds = Get-Datastore $dsName | Select -Unique | Get-View
        $dsBrowser = Get-View $ds.Browser
        $dc = Get-View $ds.Parent
        while($dc.MoRef.Type -ne "Datacenter"){
            $dc = Get-View $dc.Parent
        }
        $tgtfolder = Get-View $dc.VmFolder
        $esx = Get-View $ds.Host[0].Key
        $pool = Get-View (Get-View $esx.Parent).ResourcePool

        $vms = @()
        foreach($vmImpl in $ds.Vm){
            $vm = Get-View $vmImpl
            $vms += $vm.Config.Files.VmPathName
        }
        $datastorepath = "[" + $ds.Name + "]"

        $searchspec = New-Object VMware.Vim.HostDatastoreBrowserSearchSpec
        $searchspec.MatchPattern = $pattern

        $taskMoRef = $dsBrowser.SearchDatastoreSubFolders_Task($datastorePath, $searchSpec)

        $task = Get-View $taskMoRef
        while ("running","queued" -contains $task.Info.State){
            $task.UpdateViewData("Info.State")
        }
        $task.UpdateViewData("Info.Result")
        foreach ($folder in $task.Info.Result){
            if(!($ignore -and (&{$res = $false; $folder.FolderPath.Split("]")[1].Trim(" /").Split("/") | %{$res = $res -or ($ignore -contains $_)}; $res}))){
                $found = $FALSE
                if($folder.file -ne $null){
                    foreach($vmx in $vms){
                        if(($folder.FolderPath + $folder.File[0].Path) -eq $vmx){
                            $found = $TRUE
                        }
                    }
                    if (-not $found){
                        if($folder.FolderPath[-1] -ne "/"){$folder.FolderPath += "/"}
                        $vmx = $folder.FolderPath + $folder.File[0].Path
                        if($template){
                            $params = @($vmx,$null,$true,$null,$esx.MoRef)
                        }
                        else{
                            $params = @($vmx,$null,$false,$pool.MoRef,$null)
                        }
                        if(!$whatif){
                            $taskMoRef = $tgtfolder.GetType().GetMethod("RegisterVM_Task").Invoke($tgtfolder, $params)
                            Write-Host "`t" $vmx "registered"
                        }
                        else{
                            Write-Host "`t" $vmx "registered" -NoNewline; Write-Host -ForegroundColor blue -BackgroundColor white " ==> What If"
                        }
                    }
                }
            }
        }
        Write-Host "Done"
        }
    }
```

> [!primary]
>
> Skrypt został dostosowany do środowiska VMware OVHcloud.
> Trasa przestrzeni dyskowej NFS jest domyślnie włączona.
>

Po zadeklarowaniu skryptu w Twoim środowisku możesz go użyć w następujący sposób:

```powershell
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337"
register-vmxX -dsNames "ssd-012345","pcc-012345"
register-vmxX -dsNames "ssd-012345","pcc-012345" -template:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -ignore "upload-vpn"
register-vmxX -dsNames "ssd-012345","pcc-012345" -ignore "upload-vpn" -checkNFS:$true
register-vmxX -entityName "pcc-192-0-2-1_datacenter1337" -whatif:$true
```

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
