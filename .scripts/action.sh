for f in $(find city -type f); do
    curl -u "omzki:$1" -F "${f#/city}=@${f#/city}" "https://neocities.org/api/upload"
done
