# sh curl-scripts/change-password.sh

curl "http://tic-tac-toe.wdibos.com/change-password/2630"\
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
  --data '{
    "passwords" : {
      "old" : "'"${OLD}"'",
      "new" : "'"${NEW}"'"
    }
  }'

echo
