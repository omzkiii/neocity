for f in $(find city -type f); do
    curl -u "omzki:$1" -F "${f#./}=@$f" "https://neocities.org/api/upload"
done
