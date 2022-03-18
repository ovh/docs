#!/bin/bash

##################################################################################
# guide.en-gbToOthers                                                            #
#                                                                                #
# Welcome in this useful script for OVHcloud tutorial/guides                     #
# which generate guide.en-*.md files based on guide.en-gb.md file                #
#                                                                                #
# Usage:                                                                         #
# ./guide.en-gbToOthers <guide-folder>                                           #
#                                                                                #
# Example:                                                                       #
# ./guide.en-gbToOthers installing-wordpress/                                    #
# Test présence répertoire : installing-wordpress --> OK                         #
# Test présence fichier : guide.en-gb.md --> OK                                  #
#                                                                                #
# ## Duplicate guide.en-gb.md:                                                   #
# # ASIA #                                                                       #
# installing-wordpress/guide.en-asia.md > OK                                     #
# # AU #                                                                         #
# installing-wordpress/guide.en-au.md > OK                                       #
# # CA #                                                                         #
# installing-wordpress/guide.en-ca.md > OK                                       #
# # IE #                                                                         #
# installing-wordpress/guide.en-ie.md > OK                                       #
# # SG #                                                                         #
# installing-wordpress/guide.en-sg.md > OK                                       #
# # US #                                                                         #
# installing-wordpress/guide.en-us.md > OK                                       #
##################################################################################

# Reference: https://docs.dsi.ovh/display/CCC/Toolbox#Toolbox-OVHcloudControlPanel(manager)links

## Usage
n=$'\n'
usage="Generate guide.en-*.md files based on guide.en-gb.md file.${n}${n}Usage:${n}   ./guide.en-gbToOthers <guide-folder>${n}${n}Examples:${n}   ./guide.en-gbToOthers installing-wordpress"

# MAIN
# Usage
if [[ "$1" == "" || "$1" == "-h" || "$1" == "--help" ]]
then
    echo "$usage" 
    exit 1
fi

# Test nb de paramètres != 1
# if [ $# != 1 ] 
# then
# 	echo "Error: you must pass in parameter the folder of your guide"
# 	exit 1
# fi

# echo ""
# echo "Nombre de paramètres : $# --> OK"

export DIR="$1"

# Test existence répertoire
if [ ! -d "$DIR" ]
then
	echo "Error: you must pass in parameter the folder of your guide. Example: ./guide.en-gbToOthers.sh installing-wordpress/"
	exit 1
fi

echo "Test présence répertoire : ${DIR} --> OK"

# Test existence Fichier master
export master="${DIR}/guide.en-gb.md"

if [ ! -f "${master}" ]
then
	echo "Error: the guide.en-gb.md not exists in the folder you passed in parameter!"
	exit 1
fi

echo "Test présence fichier : guide.en-gb.md --> OK"
echo ""

export masterManagerUrl="https:\\/\\/www.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.co.uk\\/\&ovhSubsidiary=GB"
export masterDocUrl="https:\\/\\/docs.ovh.com\\/gb"
export masterSiteUrl="https:\\/\\/www.ovhcloud.com\\/en-gb"

export asiaManagerUrl="https:\\/\\/ca.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.com\\/asia\\/\&ovhSubsidiary=asia"
export asiaDocUrl="https:\\/\\/docs.ovh.com\\/asia"
export asiaSiteUrl="https:\\/\\/www.ovhcloud.com\\/asia"

export auManagerUrl="https:\\/\\/ca.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.com.au\/\&ovhSubsidiary=au"
export auDocUrl="https:\\/\\/docs.ovh.com\\/au"
export auSiteUrl="https:\\/\\/www.ovhcloud.com\\/en-au"

export caManagerUrl="https:\\/\\/ca.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.com\\/ca\\/en\\/\&ovhSubsidiary=ca"
export caDocUrl="https:\\/\\/docs.ovh.com\\/ca"
export caSiteUrl="https:\\/\\/www.ovhcloud.com\\/en-ca"


export ieManagerUrl="https:\\/\\/www.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.ie\\/\&ovhSubsidiary=ie"
export ieDocUrl="https:\\/\\/docs.ovh.com\\/ie"
export ieSiteUrl="https:\\/\\/www.ovhcloud.com\\/en-ie"

export sgManagerUrl="https:\\/\\/ca.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.com\\/sg\\/\&ovhSubsidiary=sg"
export sgDocUrl="https:\\/\\/docs.ovh.com\\/sg"
export sgSiteUrl="https:\\/\\/www.ovhcloud.com\\/en-sg"

export usManagerUrl="https:\\/\\/ca.ovh.com\\/auth\\/?action=gotomanager\&from=https:\\/\\/www.ovh.com\\/world\\/\&ovhSubsidiary=we"
export usDocUrl="https:\\/\\/docs.ovh.com\\/us"
export usSiteUrl="https:\\/\\/www.ovhcloud.com\\/en"

RC=0

echo "## Duplicate guide.en-gb.md:"
echo "# ASIA #"
cat ${master} | sed -e "s/${masterManagerUrl}/${asiaManagerUrl}/g" -e "s/${masterDocUrl}/${asiaDocUrl}/g" -e "s/${masterSiteUrl}/${asiaSiteUrl}/g" > ${DIR}/guide.en-asia.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-asia.md > OK"

echo "# AU #"
cat ${master} | sed -e "s/${masterManagerUrl}/${auManagerUrl}/g" -e "s/${masterDocUrl}/${auDocUrl}/g" -e "s/${masterSiteUrl}/${auSiteUrl}/g" > ${DIR}/guide.en-au.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-au.md > OK"

echo "# CA #"
cat ${master} | sed -e "s/${masterManagerUrl}/${caManagerUrl}/g" -e "s/${masterDocUrl}/${caDocUrl}/g" -e "s/${masterSiteUrl}/${caSiteUrl}/g" > ${DIR}/guide.en-ca.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-ca.md > OK"

echo "# IE #"
cat ${master} | sed -e "s/${masterManagerUrl}/${ieManagerUrl}/g" -e "s/${masterDocUrl}/${ieDocUrl}/g" -e "s/${masterSiteUrl}/${ieSiteUrl}/g" > ${DIR}/guide.en-ie.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-ie.md > OK"

echo "# SG #"
cat ${master} | sed -e "s/${masterManagerUrl}/${sgManagerUrl}/g" -e "s/${masterDocUrl}/${sgDocUrl}/g" -e "s/${masterSiteUrl}/${sgSiteUrl}/g" > ${DIR}/guide.en-sg.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-sg.md > OK"

echo "# US #"
cat ${master} | sed -e "s/${masterManagerUrl}/${usManagerUrl}/g" -e "s/${masterDocUrl}/${usDocUrl}/g" -e "s/${masterSiteUrl}/${usSiteUrl}/g" > ${DIR}/guide.en-us.md
[ $? -gt 0 ] && echo "ERROR" && RC=1 || echo "${DIR}/guide.en-us.md > OK"

[ $RC -gt 0 ] && echo "!! Il y'a eu des erreurs !!"

exit $RC
