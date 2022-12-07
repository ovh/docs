LANGUAGES=(de-de en-asia en-au en-ca en-gb en-ie en-sg en-us es-es es-us fr-ca fr-fr it-it pl-pl pt-pt)
OVERWRITE_SUBS='de en es fr it pl pt'
OVERWRITE_MODE=body

OLD_IFS=${IFS}

declare -A MANAGER

MANAGER["DE-DE"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.de/\&ovhSubsidiary=de"
MANAGER["EN-ASIA"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/asia/\&ovhSubsidiary=asia"
MANAGER["EN-AU"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com.au/\&ovhSubsidiary=au"
MANAGER["EN-CA"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/ca/en/\&ovhSubsidiary=ca"
MANAGER["EN-GB"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.co.uk/\&ovhSubsidiary=GB"
MANAGER["EN-IE"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.ie/\&ovhSubsidiary=ie"
MANAGER["EN-SG"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/sg/\&ovhSubsidiary=sg"
MANAGER["EN-US"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/world/\&ovhSubsidiary=we"
MANAGER["ES-ES"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.es/\&ovhSubsidiary=es"
MANAGER["ES-US"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/world/\&ovhSubsidiary=ws"
MANAGER["FR-CA"]="https://ca.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/ca/fr/\&ovhSubsidiary=qc"
MANAGER["FR-FR"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.com/fr/\&ovhSubsidiary=fr"
MANAGER["IT-IT"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.it/\&ovhSubsidiary=it"
MANAGER["PL-PL"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.pl/\&ovhSubsidiary=pl"
MANAGER["PT-PT"]="https://www.ovh.com/auth/?action=gotomanager\&from=https://www.ovh.pt/\&ovhSubsidiary=pt"

declare -A OVHCLOUD_LANG

OVHCLOUD_LANG["DE-DE"]="de"
OVHCLOUD_LANG["EN-ASIA"]="asia"
OVHCLOUD_LANG["EN-AU"]="en-au"
OVHCLOUD_LANG["EN-CA"]="en-ca"
OVHCLOUD_LANG["EN-GB"]="en-gb"
OVHCLOUD_LANG["EN-IE"]="en-ie"
OVHCLOUD_LANG["EN-SG"]="en-sg"
OVHCLOUD_LANG["EN-US"]="en"
OVHCLOUD_LANG["ES-ES"]="es-es"
OVHCLOUD_LANG["ES-US"]="es"
OVHCLOUD_LANG["FR-CA"]="fr-ca"
OVHCLOUD_LANG["FR-FR"]="fr"
OVHCLOUD_LANG["IT-IT"]="it"
OVHCLOUD_LANG["PL-PL"]="pl"
OVHCLOUD_LANG["PT-PT"]="pt"

declare -A OVHDOCS_LANG

OVHDOCS_LANG["DE-DE"]="de"
OVHDOCS_LANG["EN-ASIA"]="asia/en"
OVHDOCS_LANG["EN-AU"]="au/en"
OVHDOCS_LANG["EN-CA"]="ca/en"
OVHDOCS_LANG["EN-GB"]="gb/en"
OVHDOCS_LANG["EN-IE"]="ie/en"
OVHDOCS_LANG["EN-SG"]="sg/en"
OVHDOCS_LANG["EN-US"]="us/en"
OVHDOCS_LANG["ES-ES"]="es"
OVHDOCS_LANG["ES-US"]="us/es"
OVHDOCS_LANG["FR-CA"]="ca/fr"
OVHDOCS_LANG["FR-FR"]="fr"
OVHDOCS_LANG["IT-IT"]="it"
OVHDOCS_LANG["PL-PL"]="pl"
OVHDOCS_LANG["PT-PT"]="pt"

translate_fm_key(){
  TO_TRANSLATE=$(cat ${GUIDE} | sed -n '2,/---/p' | awk -F ": " '/^'${1}': / {print $2}' | tr -d "\r" | sed 's/^"//;s/"$//' | sed "s/^'//;s/'$//")
  TRANSLATED=$(.github/workflows/trans -b ${GUIDE_SUB::2}:${LANG::2} "${TO_TRANSLATE}" && wait)
  if [[ ! -z ${TRANSLATE_EXCLUDE} ]];then
    for e in "${TRANSLATE_EXCLUDE[@]}"
    do
      REPLACE=$(.github/workflows/trans -b ${GUIDE_SUB::2}:${LANG::2} "${e}" && wait)
      TRANSLATED=$(echo ${TRANSLATED} | sed "s/${REPLACE}/${e}/g;s/: / - /g;s/–/-/g;s/[\s]+/ /g")
    done
  fi
  if [[ "${1}" == "title" ]];then
    SUFFIX=${GUIDE_SUB::2}
    TRANSLATED+=" (${SUFFIX^^})"
  fi
  WRAPPER=""
  [[ ${TRANSLATED} =~ "'" ]] && WRAPPER='"'
  [[ ${TRANSLATED} =~ '"' ]] && WRAPPER="'"
  TRANSLATED=$(echo ${TRANSLATED} | sed 's/["]+/"/' | sed "s/[']+/'/")
  sed -i "2,/---/ s/^${1}: .*$/${1}: ${WRAPPER}${TRANSLATED}${WRAPPER}/" ${TARGET}
  echo "${1^^}_TRANSLATED: ${TRANSLATED}"
}
update_link_subs(){
  sed -i "s,www.ovhcloud.com/[^/]*,www.ovhcloud.com/${OVHCLOUD_LANG["${LANG^^}"]},g" ${TARGET}
  sed -i "s,docs.ovh.com/[^/]*/[^/]*,docs.ovh.com/${OVHDOCS_LANG["${LANG^^}"]},g" ${TARGET}
  sed -i "s,${MANAGER["${GUIDE_SUB^^}"]},${MANAGER["${LANG^^}"]},g" ${TARGET}
}

find ${PWD} -type f -name "duplicate.task" | while read tasks
do
  cat ${tasks} | while read task
  do
echo "${task}"
    GUIDE_SUB=$(echo ${task} | awk -F ":" '{print $1}')
    GUIDE_CONFIG=$(echo ${task} | awk -F ":" '{print $2}')
    GUIDE_OVERWRITE=$(echo ${task} | awk -F ":" '{print $3}')
    GUIDE=$(dirname ${tasks})/guide.${GUIDE_SUB}.md
    [[ ${GUIDE_CONFIG} != '' ]] && source .github/workflows/conf/${GUIDE_CONFIG}
    [[ ${GUIDE_OVERWRITE} != '' ]] && eval ${GUIDE_OVERWRITE}
    LANGUAGES=("${LANGUAGES[@]/$GUIDE_SUB}")
    for LANG in ${LANGUAGES[@]}
    do
      TARGET=$(dirname ${GUIDE})/guide.${LANG}.md
      echo "GUIDE: ${GUIDE#${PWD}\/}"
      echo "TARGET: ${TARGET#${PWD}\/}"
      if [[ -f ${TARGET} && ${OVERWRITE_MODE} == "body" && $(echo ${OVERWRITE_SUBS} | grep -ow "${LANG::2}" | wc -w) != 0 ]];then
        TARGET_FM=$(sed -n '1,/---/p' ${TARGET})
        sed -e '1,/---/d' ${GUIDE} > ${TARGET}
        update_link_subs && wait
        CONTENT=$(echo "${TARGET_FM}" && cat ${TARGET})
        echo "${CONTENT}" > ${TARGET}
      else
        cp -f ${GUIDE} ${TARGET}
        update_link_subs && wait
        [[ ! -z ${TRANSLATE_TITLE} && $(echo ${TRANSLATE_TITLE} | grep -ow "${LANG::2}" | wc -w) != 0 ]] && translate_fm_key title
        [[ ! -z ${TRANSLATE_SECTION} && $(echo ${TRANSLATE_SECTION} | grep -ow "${LANG::2}" | wc -w) != 0 ]] && translate_fm_key section
        [[ ! -z ${TRANSLATE_EXCERPT} && $(echo ${TRANSLATE_EXCERPT} | grep -ow "${LANG::2}" | wc -w) != 0 ]] && translate_fm_key excerpt
        if [[ "${GUIDE_SUB::2}" != "${LANG::2}" ]];then
          CANONICAL_URL="https://docs.ovh.com/${OVHDOCS_LANG[${GUIDE_SUB^^}]}/"
          IFS='/' read -r -a arr <<< $(dirname ${GUIDE#${PWD}\/} | cut -d/ -f 3-)
          IFS=${OLD_IFS}
          p=$(echo ${GUIDE#${PWD}\/} | awk -F "/" '{print $1"/"$2"/"}')
          for d in ${arr[@]}
          do
            p+=${d}/
            CANONICAL_URL+=$(cat ${p}*.${GUIDE_SUB}.md | sed -n '2,/---/p' | awk -F ": " '/^slug: / {print $2}'  | tr -d "\r")/
          done
          sed -i "2,/---/ s;---;routes:\n    canonical: '${CANONICAL_URL}'\n---;" ${TARGET}
          echo "CANONICAL_URL: ${CANONICAL_URL}"
        fi
      fi
      echo
    done
  done && wait
  rm -rf ${tasks}
  echo
done
rm -rf .github/
