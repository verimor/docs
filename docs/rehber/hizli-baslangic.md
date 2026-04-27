# Hızlı Başlangıç

Farklı dillerde SMS gönderme örnekleri.

## Python

```python
import requests

url = "https://sms.verimor.com.tr/v2/send.json"
payload = {
    "username": "kullanici@ornek.com",
    "password": "parola",
    "source_addr": "VERIMOR",
    "messages": [
        {"dest": "905001234567", "msg": "Merhaba!"}
    ]
}

response = requests.post(url, json=payload)
print(response.json())
```

## PHP

```php
<?php
$data = [
    'username'    => 'kullanici@ornek.com',
    'password'    => 'parola',
    'source_addr' => 'VERIMOR',
    'messages'    => [
        ['dest' => '905001234567', 'msg' => 'Merhaba!']
    ]
];

$ch = curl_init('https://sms.verimor.com.tr/v2/send.json');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);

$response = curl_exec($ch);
curl_close($ch);

echo $response;
```

## Node.js

```javascript
const response = await fetch('https://sms.verimor.com.tr/v2/send.json', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username: 'kullanici@ornek.com',
    password: 'parola',
    source_addr: 'VERIMOR',
    messages: [
      { dest: '905001234567', msg: 'Merhaba!' }
    ]
  })
})

const data = await response.json()
console.log(data)
```

## cURL

```bash
curl -X POST https://sms.verimor.com.tr/v2/send.json \
  -H "Content-Type: application/json" \
  -d '{
    "username": "kullanici@ornek.com",
    "password": "parola",
    "source_addr": "VERIMOR",
    "messages": [{"dest": "905001234567", "msg": "Merhaba!"}]
  }'
```
