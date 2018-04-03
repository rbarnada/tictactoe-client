curl "http://tic-tac-toe.wdibos.com/games/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--header "Authorization: Token token=${TOKEN}" \
--data '{
  "game" : {
    "cell" : {
      "index" : "'"${VALUE}"'",
      "value" : "'"${LETTER}"'"
    },
    "over" : "false"
  }
}'

echo
