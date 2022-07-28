#!/bin/bash
#############################################
#               ovhAPI.sh                   #
#############################################
#     Input parameters                      #
# (1) METHOD - required                     #
#     One of this: [GET|POST|PUT|DELETE]    #
# (2) QUERY  - required                     #
#     Check APIcloud API doc                #
# (3) BODY   - optionnal                    #
#     JSON format data to send              #
#############################################
# Examples:
# $ ./ovhAPI.sh POST /cloud/project/${OS_TENANT_ID}/network/private $(jq -c . < create_nwclust.json)
# $ ./ovhAPI.sh GET /domain/zone/labdevrel.ovh/export | awk '{gsub(/\\n/,"\n");gsub(/\\t/,"\t")}1'

# Script variables(s)
if [ -z ${GITPOD_REPO_ROOT+x} ]
then
 source utils/ovhAPI.properties
else
  source $GITPOD_REPO_ROOT/utils/ovhAPI.properties
fi

# Input parameters
METHOD="${1}"
QUERY="${2}"
BODY="${3}"

## Tests input parameters
TESTRESULT=0
# nb params
if [ $# -lt 2 -o $# -gt 3 ]
then
	echo "ERROR - Incorrect number of input parameters - Must be 2 or 3"
	TESTRESULT=1
	exit $TESTRESULT
fi
# METHOD
case $METHOD in
	GET|POST|PUT|DELETE) TESTRESULT=0;;
	*) echo "ERROR - Input Method not allowed - Must be in [GET|POST|PUT|DELETE]"
	TESTRESULT=2
        exit $TESTRESULT;;
esac
# QUERY
# [TODO/maybe]

# Function SHA1_HEX
function SHA1_HEX {
        echo -n "${1}" | sha1sum | sed 's/ .*//'
}

# Set API variables & signature
FULLQUERY="${OVH_API_URL}${QUERY}"
TIMESTAMP="$(curl -s ${OVH_API_URL}/auth/time)"
METHOD="${METHOD}"
PRESIGNATURE="${OVH_APPLICATION_SECRET}+${OVH_CONSUMER_KEY}+${METHOD}+${FULLQUERY}+${BODY}+${TIMESTAMP}"
SIGNATURE="\$1\$$(SHA1_HEX "${PRESIGNATURE}")"

# Execute the request
curl -s -X${METHOD} -H "X-Ovh-Application:${OVH_APPLICATION_KEY}" -H "X-Ovh-Timestamp:${TIMESTAMP}" -H "X-Ovh-Signature:${SIGNATURE}" -H "X-Ovh-Consumer:${OVH_CONSUMER_KEY}" -H 'Content-Type:application/json;charset=UTF-8' -d "$BODY" ${FULLQUERY}
