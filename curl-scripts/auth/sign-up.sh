# sh curl-scripts/sign-up.sh

curl "http://tic-tac-toe.wdibos.com/sign-up" \
--include \
--request POST \
--header "Content-Type: application/json" \
  --data '{
    "credentials" : {
      "email" : "'"${EMAIL}"'",
      "password" : "'"${PASSWORD}"'",
      "password_confirmation" : "'"${PASSWORD}"'"
    }
  }'

echo
