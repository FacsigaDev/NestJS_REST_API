# NestJS_REST_API
Egy REST API architektúrát megvalósító backend, frontend fejlesztőknek, tesztelési célból

---
title: NestJS keretrendszerrel készített REST API v1.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
highlight_theme: darkula
headingLevel: 2

---

<!-- Generator: Widdershins v4.0.1 -->

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api">NestJS keretrendszerrel készített REST API v1.0</h1>

> Scroll down for code samples, example requests and responses. Select a language for code samples from the tabs above or the mobile navigation menu.

REST API személyek, címek, események, feliratkozások, hírek és települések kezelésére

Base URLs:

# Authentication

- HTTP Authentication, scheme: bearer 

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-authentik-ci-">Authentikáció</h1>

## AuthController_regisztracio

<a id="opIdAuthController_regisztracio"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /auth/regisztracio \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /auth/regisztracio HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/auth/regisztracio',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/auth/regisztracio',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/auth/regisztracio', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/auth/regisztracio', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/auth/regisztracio");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/auth/regisztracio", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/regisztracio`

*Felhasználó regisztráció*

Új felhasználó regisztrálása (publikus végpont).

> Body parameter

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}
```

<h3 id="authcontroller_regisztracio-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[RegisterSzemelyDto](#schemaregisterszemelydto)|true|none|

> Example responses

> 201 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="authcontroller_regisztracio-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Felhasználó sikeresen regisztrálva|[Szemely](#schemaszemely)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_bejelentkezes

<a id="opIdAuthController_bejelentkezes"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /auth/bejelentkezes \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /auth/bejelentkezes HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/auth/bejelentkezes',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/auth/bejelentkezes',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/auth/bejelentkezes', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/auth/bejelentkezes', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/auth/bejelentkezes");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/auth/bejelentkezes", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/bejelentkezes`

*Felhasználó bejelentkezés*

Bejelentkezés email vagy felhasználónév és jelszó segítségével (publikus végpont).

> Body parameter

```json
{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123"
}
```

<h3 id="authcontroller_bejelentkezes-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[LoginSzemelyDto](#schemaloginszemelydto)|true|none|

> Example responses

> 201 Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIn..."
}
```

<h3 id="authcontroller_bejelentkezes-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Sikeres bejelentkezés, JWT token visszaadva.|[LoginResponseDto](#schemaloginresponsedto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Hibás email/felhasználónév vagy jelszó|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_tokenFrissites

<a id="opIdAuthController_tokenFrissites"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /auth/tokenfrissites \
  -H 'Accept: application/json'

```

```http
GET /auth/tokenfrissites HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/auth/tokenfrissites',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/auth/tokenfrissites',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/auth/tokenfrissites', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/auth/tokenfrissites', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/auth/tokenfrissites");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/auth/tokenfrissites", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /auth/tokenfrissites`

*JWT frissítése*

Bejelentkezett felhasználó a token lejárta előtt meg tudja azt újítani.

> Example responses

> 201 Response

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsIn..."
}
```

<h3 id="authcontroller_tokenfrissites-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Sikeres művelet, JWT token visszaadva.|[LoginResponseDto](#schemaloginresponsedto)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen token|None|

<aside class="success">
This operation does not require authentication
</aside>

## AuthController_jelszoModositas

<a id="opIdAuthController_jelszoModositas"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /auth/jelszomodositas \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /auth/jelszomodositas HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_ujjelszo": "TitkosUj123"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/auth/jelszomodositas',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/auth/jelszomodositas',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/auth/jelszomodositas', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/auth/jelszomodositas', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/auth/jelszomodositas");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/auth/jelszomodositas", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /auth/jelszomodositas`

*Jelszó módosítása*

Belépési adatokkal azonosított jelszómódosítás.

> Body parameter

```json
{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_ujjelszo": "TitkosUj123"
}
```

<h3 id="authcontroller_jelszomodositas-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[ModifyPasswordDto](#schemamodifypassworddto)|true|none|

> Example responses

> 201 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="authcontroller_jelszomodositas-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Sikeres jelszómódosítás, Személy visszaadva.|[Szemely](#schemaszemely)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen felhasználó|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-szem-lyek">Személyek</h1>

## SzemelyekController_findAll

<a id="opIdSzemelyekController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /szemelyek \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /szemelyek HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/szemelyek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/szemelyek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/szemelyek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/szemelyek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /szemelyek`

*Összes személy lekérdezése*

Lekéri az összes személyt, szűrhető a megadott paraméterek alapján.

<h3 id="szemelyekcontroller_findall-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|szemely_email|query|any|false|Szűrő az email címre|
|szemely_keresztnev|query|any|false|Szűrő a keresztnévre|
|szemely_vezeteknev|query|any|false|Szűrő a vezetéknévre|

> Example responses

> 200 Response

```json
[
  {
    "szemely_id": 1,
    "szemely_vezeteknev": "Kovács",
    "szemely_keresztnev": "Anna",
    "szemely_szuletesi_datum": "1990-01-01",
    "szemely_anyja_neve": "Szabó Mária",
    "szemely_vegzettseg": "középfok",
    "szemely_email": "kovacs.anna@example.com",
    "szemely_telefon": "+36301234567",
    "szemely_felhasznalonev": "kovacsanna",
    "szemely_jelszo": "Titkos123",
    "szemely_jogosultsag": "user",
    "szemely_torolve": "2025-06-28T13:00:00Z",
    "szemely_cimek": [
      {
        "cim_id": 1,
        "cim_tipus": "állandó",
        "cim_iranyitoszam": "1234",
        "cim_varos": "Budapest",
        "cim_utca": "Fő utca 1",
        "cim_szemely_id": 1
      }
    ],
    "szemely_feliratkozasok": [
      {
        "feliratkozas_id": 1,
        "feliratkozas_szemely_id": 1,
        "feliratkozas_esemeny_id": 1,
        "feliratkozas_esemeny": {
          "esemeny_id": 1,
          "esemeny_nev": "Éves konferencia",
          "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
          "esemeny_helyszin": "Budapest, Kongresszusi Központ",
          "esemeny_idopont": "2025-12-01T10:00:00Z",
          "esemeny_max_fo": 100,
          "esemeny_feliratkozasok": [
            []
          ]
        }
      }
    ]
  }
]
```

<h3 id="szemelyekcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személyek sikeres lekérdezése|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin vagy user jogosultság|None|

<h3 id="szemelyekcontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Szemely](#schemaszemely)]|false|none|none|
|» szemely_id|number|true|none|A személy egyedi azonosítója|
|» szemely_vezeteknev|string|true|none|A személy vezetékneve|
|» szemely_keresztnev|string|true|none|A személy keresztneve|
|» szemely_szuletesi_datum|object|false|none|A személy születési dátuma (opcionális)|
|» szemely_anyja_neve|object|false|none|A személy anyjának neve (opcionális)|
|» szemely_vegzettseg|string|true|none|A személy végzettsége|
|» szemely_email|string|true|none|A személy email címe|
|» szemely_telefon|object|false|none|A személy telefonszáma (opcionális)|
|» szemely_felhasznalonev|string|true|none|A személy felhasználóneve|
|» szemely_jelszo|string|true|none|A személy jelszava (titkosítva tárolva)|
|» szemely_jogosultsag|string|true|none|A személy jogosultsága|
|» szemely_torolve|string(date-time)|false|none|A személy törlésének időpontja (soft delete)|
|» szemely_cimek|[[Cim](#schemacim)]|true|none|A személyhez tartozó címek|
|»» cim_id|number|true|none|A cím egyedi azonosítója|
|»» cim_tipus|string|true|none|A cím típusa|
|»» cim_iranyitoszam|string|true|none|A cím irányítószáma|
|»» cim_varos|string|true|none|A cím városa|
|»» cim_utca|string|true|none|A cím utcája|
|»» cim_szemely_id|number|true|none|A címhez tartozó személy azonosítója|
|» szemely_feliratkozasok|[[Feliratkozas](#schemafeliratkozas)]|true|none|A személyhez tartozó feliratkozások|
|»» feliratkozas_id|number|true|none|A feliratkozás egyedi azonosítója|
|»» feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|»» feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|
|»» feliratkozas_esemeny|[Esemeny](#schemaesemeny)|true|none|A feliratkozás eseménye|
|»»» esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|»»» esemeny_nev|string|true|none|Az esemény neve|
|»»» esemeny_leiras|string|true|none|Az esemény leírása|
|»»» esemeny_helyszin|string|true|none|Az esemény helyszíne|
|»»» esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|»»» esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|»»» esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

#### Enumerated Values

|Property|Value|
|---|---|
|szemely_vegzettseg|nincs|
|szemely_vegzettseg|alapfok|
|szemely_vegzettseg|középfok|
|szemely_vegzettseg|felsőfok|
|szemely_jogosultsag|nincs|
|szemely_jogosultsag|user|
|szemely_jogosultsag|admin|
|cim_tipus|állandó|
|cim_tipus|tartózkodási|
|cim_tipus|levelezési|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_create

<a id="opIdSzemelyekController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /szemelyek \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST /szemelyek HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post '/szemelyek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('/szemelyek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/szemelyek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/szemelyek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /szemelyek`

*Új személy létrehozása*

Új személy regisztrálása admin jogosultsággal.

> Body parameter

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}
```

<h3 id="szemelyekcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSzemelyDto](#schemacreateszemelydto)|true|none|

> Example responses

> 201 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Személy sikeresen létrehozva|[Szemely](#schemaszemely)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_findID

<a id="opIdSzemelyekController_findID"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /szemelyek/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /szemelyek/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/szemelyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/szemelyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/szemelyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/szemelyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /szemelyek/{id}`

*Személy lekérdezése ID alapján*

Lekéri egy adott személy adatait az azonosító alapján.

<h3 id="szemelyekcontroller_findid-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_findid-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személy sikeres lekérdezése|[Szemely](#schemaszemely)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin vagy user jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_update

<a id="opIdSzemelyekController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /szemelyek/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH /szemelyek/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch '/szemelyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('/szemelyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','/szemelyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "/szemelyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /szemelyek/{id}`

*Személy módosítása*

Meglévő személy adatainak módosítása admin jogosultsággal.

> Body parameter

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}
```

<h3 id="szemelyekcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateSzemelyDto](#schemaupdateszemelydto)|true|none|

> Example responses

> 200 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személy sikeresen módosítva|[Szemely](#schemaszemely)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_remove

<a id="opIdSzemelyekController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /szemelyek/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE /szemelyek/{id} HTTP/1.1

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete '/szemelyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('/szemelyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/szemelyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/szemelyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /szemelyek/{id}`

*Személy törlése*

Meglévő személy törlése admin jogosultsággal.

<h3 id="szemelyekcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="szemelyekcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személy sikeresen törölve|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_findFelhasznaloinev

<a id="opIdSzemelyekController_findFelhasznaloinev"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /szemelyek/felhasznalonev/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /szemelyek/felhasznalonev/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/felhasznalonev/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/szemelyek/felhasznalonev/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/szemelyek/felhasznalonev/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/szemelyek/felhasznalonev/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/felhasznalonev/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/szemelyek/felhasznalonev/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /szemelyek/felhasznalonev/{id}`

*Személy lekérdezése felhasználónév alapján*

Lekéri egy adott személy adatait a felhasználónév alapján.

<h3 id="szemelyekcontroller_findfelhasznaloinev-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_findfelhasznaloinev-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személy sikeres lekérdezése|[Szemely](#schemaszemely)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin vagy user jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_findEmail

<a id="opIdSzemelyekController_findEmail"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /szemelyek/email/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /szemelyek/email/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/email/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/szemelyek/email/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/szemelyek/email/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/szemelyek/email/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/email/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/szemelyek/email/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /szemelyek/email/{id}`

*Személy lekérdezése email alapján*

Lekéri egy adott személy adatait az email cím alapján.

<h3 id="szemelyekcontroller_findemail-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_findemail-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személy sikeres lekérdezése|[Szemely](#schemaszemely)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin vagy user jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_findProfil

<a id="opIdSzemelyekController_findProfil"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /szemelyek/profil/me \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /szemelyek/profil/me HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/szemelyek/profil/me',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/szemelyek/profil/me',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/szemelyek/profil/me', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/szemelyek/profil/me', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/profil/me");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/szemelyek/profil/me", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /szemelyek/profil/me`

*Saját profil lekérdezése*

Lekéri a bejelentkezett felhasználó adatait.

> Example responses

> 200 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_findprofil-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Profil sikeres lekérdezése|[Szemely](#schemaszemely)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Nincs bejelentkezett felhasználó vagy érvénytelen JWT token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## SzemelyekController_testValidation

<a id="opIdSzemelyekController_testValidation"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /szemelyek/test-validation \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /szemelyek/test-validation HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/szemelyek/test-validation',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/szemelyek/test-validation',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/szemelyek/test-validation', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/szemelyek/test-validation', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/test-validation");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/szemelyek/test-validation", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /szemelyek/test-validation`

*Teszt validáció*

Tesztelési célú végpont adatvalidációhoz (publikus).

> Body parameter

```json
{}
```

<h3 id="szemelyekcontroller_testvalidation-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[Object](#schemaobject)|true|Teszt DTO (meghatározatlan struktúra)|

> Example responses

> 200 Response

```json
{}
```

<h3 id="szemelyekcontroller_testvalidation-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Validáció sikeres|Inline|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|

<h3 id="szemelyekcontroller_testvalidation-responseschema">Response Schema</h3>

<aside class="success">
This operation does not require authentication
</aside>

## SzemelyekController_register

<a id="opIdSzemelyekController_register"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /szemelyek/register \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /szemelyek/register HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/szemelyek/register',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/szemelyek/register',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/szemelyek/register', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/szemelyek/register', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/szemelyek/register");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/szemelyek/register", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /szemelyek/register`

*Személy regisztráció*

Új személy regisztrálása (publikus végpont).

> Body parameter

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}
```

<h3 id="szemelyekcontroller_register-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateSzemelyDto](#schemacreateszemelydto)|true|none|

> Example responses

> 201 Response

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}
```

<h3 id="szemelyekcontroller_register-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Személy sikeresen létrehozva|[Szemely](#schemaszemely)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-esem-nyek">Események</h1>

## EsemenyekController_findAll

<a id="opIdEsemenyekController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /esemenyek \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /esemenyek HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/esemenyek',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/esemenyek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/esemenyek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/esemenyek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/esemenyek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/esemenyek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /esemenyek`

*Összes esemény lekérdezése*

Lekéri az összes eseményt admin jogosultsággal.

> Example responses

> 200 Response

```json
[
  {
    "esemeny_id": 1,
    "esemeny_nev": "Éves konferencia",
    "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
    "esemeny_helyszin": "Budapest, Kongresszusi Központ",
    "esemeny_idopont": "2025-12-01T10:00:00Z",
    "esemeny_max_fo": 100,
    "esemeny_feliratkozasok": [
      []
    ]
  }
]
```

<h3 id="esemenyekcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Események sikeres lekérdezése|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|

<h3 id="esemenyekcontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Esemeny](#schemaesemeny)]|false|none|none|
|» esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|» esemeny_nev|string|true|none|Az esemény neve|
|» esemeny_leiras|string|true|none|Az esemény leírása|
|» esemeny_helyszin|string|true|none|Az esemény helyszíne|
|» esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|» esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|» esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## EsemenyekController_create

<a id="opIdEsemenyekController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /esemenyek \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST /esemenyek HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/esemenyek',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post '/esemenyek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('/esemenyek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/esemenyek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/esemenyek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/esemenyek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /esemenyek`

*Új esemény létrehozása*

Új esemény létrehozása admin jogosultsággal.

> Body parameter

```json
{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}
```

<h3 id="esemenyekcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateEsemenyDto](#schemacreateesemenydto)|true|none|

> Example responses

> 201 Response

```json
{
  "esemeny_id": 1,
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100,
  "esemeny_feliratkozasok": [
    []
  ]
}
```

<h3 id="esemenyekcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Esemény sikeresen létrehozva|[Esemeny](#schemaesemeny)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## EsemenyekController_findOne

<a id="opIdEsemenyekController_findOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /esemenyek/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /esemenyek/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/esemenyek/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/esemenyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/esemenyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/esemenyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/esemenyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/esemenyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /esemenyek/{id}`

*Esemény lekérdezése ID alapján*

Lekéri egy adott esemény adatait az azonosító alapján.

<h3 id="esemenyekcontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "esemeny_id": 1,
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100,
  "esemeny_feliratkozasok": [
    []
  ]
}
```

<h3 id="esemenyekcontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Esemény sikeres lekérdezése|[Esemeny](#schemaesemeny)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Esemény nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## EsemenyekController_update

<a id="opIdEsemenyekController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /esemenyek/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH /esemenyek/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/esemenyek/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch '/esemenyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('/esemenyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','/esemenyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/esemenyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "/esemenyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /esemenyek/{id}`

*Esemény módosítása*

Meglévő esemény módosítása admin jogosultsággal.

> Body parameter

```json
{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}
```

<h3 id="esemenyekcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateEsemenyDto](#schemaupdateesemenydto)|true|none|

> Example responses

> 200 Response

```json
{
  "esemeny_id": 1,
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100,
  "esemeny_feliratkozasok": [
    []
  ]
}
```

<h3 id="esemenyekcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Esemény sikeresen módosítva|[Esemeny](#schemaesemeny)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Esemény nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## EsemenyekController_delete

<a id="opIdEsemenyekController_delete"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /esemenyek/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE /esemenyek/{id} HTTP/1.1

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('/esemenyek/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete '/esemenyek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('/esemenyek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/esemenyek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/esemenyek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/esemenyek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /esemenyek/{id}`

*Esemény törlése*

Meglévő esemény törlése admin jogosultsággal.

<h3 id="esemenyekcontroller_delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="esemenyekcontroller_delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Esemény sikeresen törölve|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Esemény nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-feliratkoz-sok">Feliratkozások</h1>

## FeliratkozasokController_findAll

<a id="opIdFeliratkozasokController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /feliratkozasok \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /feliratkozasok HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/feliratkozasok',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/feliratkozasok', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/feliratkozasok', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/feliratkozasok", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /feliratkozasok`

*Összes feliratkozás lekérdezése*

Lekéri az összes feliratkozást (védett végpont).

> Example responses

> 200 Response

```json
[
  {
    "feliratkozas_id": 1,
    "feliratkozas_szemely_id": 1,
    "feliratkozas_esemeny_id": 1,
    "feliratkozas_esemeny": {
      "esemeny_id": 1,
      "esemeny_nev": "Éves konferencia",
      "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
      "esemeny_helyszin": "Budapest, Kongresszusi Központ",
      "esemeny_idopont": "2025-12-01T10:00:00Z",
      "esemeny_max_fo": 100,
      "esemeny_feliratkozasok": [
        []
      ]
    }
  }
]
```

<h3 id="feliratkozasokcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Feliratkozások sikeres lekérdezése|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|

<h3 id="feliratkozasokcontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Feliratkozas](#schemafeliratkozas)]|false|none|none|
|» feliratkozas_id|number|true|none|A feliratkozás egyedi azonosítója|
|» feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|» feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|
|» feliratkozas_esemeny|[Esemeny](#schemaesemeny)|true|none|A feliratkozás eseménye|
|»» esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|»» esemeny_nev|string|true|none|Az esemény neve|
|»» esemeny_leiras|string|true|none|Az esemény leírása|
|»» esemeny_helyszin|string|true|none|Az esemény helyszíne|
|»» esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|»» esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|»» esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## FeliratkozasokController_create

<a id="opIdFeliratkozasokController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /feliratkozasok \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST /feliratkozasok HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post '/feliratkozasok',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('/feliratkozasok', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/feliratkozasok', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/feliratkozasok", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /feliratkozasok`

*Új feliratkozás létrehozása*

Új feliratkozás létrehozása autentikált felhasználó számára.

> Body parameter

```json
{
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1
}
```

<h3 id="feliratkozasokcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateFeliratkozasDto](#schemacreatefeliratkozasdto)|true|none|

> Example responses

> 201 Response

```json
{
  "feliratkozas_id": 1,
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1,
  "feliratkozas_esemeny": {
    "esemeny_id": 1,
    "esemeny_nev": "Éves konferencia",
    "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
    "esemeny_helyszin": "Budapest, Kongresszusi Központ",
    "esemeny_idopont": "2025-12-01T10:00:00Z",
    "esemeny_max_fo": 100,
    "esemeny_feliratkozasok": [
      []
    ]
  }
}
```

<h3 id="feliratkozasokcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Feliratkozas sikeresen létrehozva|[Feliratkozas](#schemafeliratkozas)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## FeliratkozasokController_findOne

<a id="opIdFeliratkozasokController_findOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /feliratkozasok/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /feliratkozasok/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/feliratkozasok/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/feliratkozasok/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/feliratkozasok/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/feliratkozasok/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /feliratkozasok/{id}`

*Feliratkozás lekérdezése ID alapján*

Lekéri egy adott feliratkozás adatait az azonosító alapján.

<h3 id="feliratkozasokcontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "feliratkozas_id": 1,
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1,
  "feliratkozas_esemeny": {
    "esemeny_id": 1,
    "esemeny_nev": "Éves konferencia",
    "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
    "esemeny_helyszin": "Budapest, Kongresszusi Központ",
    "esemeny_idopont": "2025-12-01T10:00:00Z",
    "esemeny_max_fo": 100,
    "esemeny_feliratkozasok": [
      []
    ]
  }
}
```

<h3 id="feliratkozasokcontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Feliratkozás sikeres lekérdezése|[Feliratkozas](#schemafeliratkozas)|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Feliratkozás nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## FeliratkozasokController_remove

<a id="opIdFeliratkozasokController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /feliratkozasok/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE /feliratkozasok/{id} HTTP/1.1

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete '/feliratkozasok/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('/feliratkozasok/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/feliratkozasok/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/feliratkozasok/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /feliratkozasok/{id}`

*Feliratkozás törlése*

Meglévő feliratkozás törlése autentikált felhasználó számára.

<h3 id="feliratkozasokcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="feliratkozasokcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Feliratkozás sikeresen törölve|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Feliratkozás nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## FeliratkozasokController_szemelyEsemenyei

<a id="opIdFeliratkozasokController_szemelyEsemenyei"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /feliratkozasok/szemely/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /feliratkozasok/szemely/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok/szemely/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/feliratkozasok/szemely/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/feliratkozasok/szemely/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/feliratkozasok/szemely/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok/szemely/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/feliratkozasok/szemely/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /feliratkozasok/szemely/{id}`

*Személy eseményeinek lekérdezése*

Lekéri egy adott személyhez tartozó összes eseményt.

<h3 id="feliratkozasokcontroller_szemelyesemenyei-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "feliratkozas_id": 1,
    "feliratkozas_szemely_id": 1,
    "feliratkozas_esemeny_id": 1,
    "feliratkozas_esemeny": {
      "esemeny_id": 1,
      "esemeny_nev": "Éves konferencia",
      "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
      "esemeny_helyszin": "Budapest, Kongresszusi Központ",
      "esemeny_idopont": "2025-12-01T10:00:00Z",
      "esemeny_max_fo": 100,
      "esemeny_feliratkozasok": [
        []
      ]
    }
  }
]
```

<h3 id="feliratkozasokcontroller_szemelyesemenyei-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Események sikeres lekérdezése|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Személy nem található|None|

<h3 id="feliratkozasokcontroller_szemelyesemenyei-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Feliratkozas](#schemafeliratkozas)]|false|none|none|
|» feliratkozas_id|number|true|none|A feliratkozás egyedi azonosítója|
|» feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|» feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|
|» feliratkozas_esemeny|[Esemeny](#schemaesemeny)|true|none|A feliratkozás eseménye|
|»» esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|»» esemeny_nev|string|true|none|Az esemény neve|
|»» esemeny_leiras|string|true|none|Az esemény leírása|
|»» esemeny_helyszin|string|true|none|Az esemény helyszíne|
|»» esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|»» esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|»» esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## FeliratkozasokController_esemenySzemelyei

<a id="opIdFeliratkozasokController_esemenySzemelyei"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /feliratkozasok/esemeny/{id} \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
GET /feliratkozasok/esemeny/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/feliratkozasok/esemeny/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.get '/feliratkozasok/esemeny/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.get('/feliratkozasok/esemeny/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/feliratkozasok/esemeny/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/feliratkozasok/esemeny/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/feliratkozasok/esemeny/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /feliratkozasok/esemeny/{id}`

*Esemény személyeinek lekérdezése*

Lekéri egy adott eseményhez tartozó összes személyt.

<h3 id="feliratkozasokcontroller_esemenyszemelyei-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
[
  {
    "feliratkozas_id": 1,
    "feliratkozas_szemely_id": 1,
    "feliratkozas_esemeny_id": 1,
    "feliratkozas_esemeny": {
      "esemeny_id": 1,
      "esemeny_nev": "Éves konferencia",
      "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
      "esemeny_helyszin": "Budapest, Kongresszusi Központ",
      "esemeny_idopont": "2025-12-01T10:00:00Z",
      "esemeny_max_fo": 100,
      "esemeny_feliratkozasok": [
        []
      ]
    }
  }
]
```

<h3 id="feliratkozasokcontroller_esemenyszemelyei-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Személyek sikeres lekérdezése|Inline|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Esemény nem található|None|

<h3 id="feliratkozasokcontroller_esemenyszemelyei-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Feliratkozas](#schemafeliratkozas)]|false|none|none|
|» feliratkozas_id|number|true|none|A feliratkozás egyedi azonosítója|
|» feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|» feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|
|» feliratkozas_esemeny|[Esemeny](#schemaesemeny)|true|none|A feliratkozás eseménye|
|»» esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|»» esemeny_nev|string|true|none|Az esemény neve|
|»» esemeny_leiras|string|true|none|Az esemény leírása|
|»» esemeny_helyszin|string|true|none|Az esemény helyszíne|
|»» esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|»» esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|»» esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-h-rek">Hírek</h1>

## HirekController_findAll

<a id="opIdHirekController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /hirek \
  -H 'Accept: application/json'

```

```http
GET /hirek HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/hirek',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/hirek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/hirek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/hirek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/hirek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/hirek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /hirek`

*Összes hír lekérdezése*

Lekéri az összes hírt (publikus végpont).

> Example responses

> 200 Response

```json
[
  {
    "hir_id": 1,
    "hir_cim": "Új esemény bejelentése",
    "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
    "hir_datum": "2025-06-28"
  }
]
```

<h3 id="hirekcontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hírek sikeres lekérdezése|Inline|

<h3 id="hirekcontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[Hir](#schemahir)]|false|none|none|
|» hir_id|number|true|none|A hír egyedi azonosítója|
|» hir_cim|string|true|none|A hír címe|
|» hir_tartalom|string|true|none|A hír tartalma|
|» hir_datum|object|false|none|A hír dátuma (opcionális)|

<aside class="success">
This operation does not require authentication
</aside>

## HirekController_create

<a id="opIdHirekController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /hirek \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
POST /hirek HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/hirek',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.post '/hirek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.post('/hirek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/hirek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/hirek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/hirek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /hirek`

*Új hír létrehozása*

Új hír létrehozása admin jogosultsággal.

> Body parameter

```json
{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}
```

<h3 id="hirekcontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateHirDto](#schemacreatehirdto)|true|none|

> Example responses

> 201 Response

```json
{
  "hir_id": 1,
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}
```

<h3 id="hirekcontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Hír sikeresen létrehozva|[Hir](#schemahir)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## HirekController_findOne

<a id="opIdHirekController_findOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /hirek/{id} \
  -H 'Accept: application/json'

```

```http
GET /hirek/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/hirek/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/hirek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/hirek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/hirek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/hirek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/hirek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /hirek/{id}`

*Hír lekérdezése ID alapján*

Lekéri egy adott hír adatait az azonosító alapján (publikus végpont).

<h3 id="hirekcontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

> Example responses

> 200 Response

```json
{
  "hir_id": 1,
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}
```

<h3 id="hirekcontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hír sikeres lekérdezése|[Hir](#schemahir)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hír nem található|None|

<aside class="success">
This operation does not require authentication
</aside>

## HirekController_update

<a id="opIdHirekController_update"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /hirek/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json' \
  -H 'Authorization: Bearer {access-token}'

```

```http
PATCH /hirek/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json',
  'Authorization':'Bearer {access-token}'
};

fetch('/hirek/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json',
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.patch '/hirek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': 'Bearer {access-token}'
}

r = requests.patch('/hirek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','/hirek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/hirek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "/hirek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /hirek/{id}`

*Hír módosítása*

Meglévő hír módosítása admin jogosultsággal.

> Body parameter

```json
{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}
```

<h3 id="hirekcontroller_update-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|
|body|body|[UpdateHirDto](#schemaupdatehirdto)|true|none|

> Example responses

> 200 Response

```json
{
  "hir_id": 1,
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}
```

<h3 id="hirekcontroller_update-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hír sikeresen módosítva|[Hir](#schemahir)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hír nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

## HirekController_remove

<a id="opIdHirekController_remove"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /hirek/{id} \
  -H 'Authorization: Bearer {access-token}'

```

```http
DELETE /hirek/{id} HTTP/1.1

```

```javascript

const headers = {
  'Authorization':'Bearer {access-token}'
};

fetch('/hirek/{id}',
{
  method: 'DELETE',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Authorization' => 'Bearer {access-token}'
}

result = RestClient.delete '/hirek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Authorization': 'Bearer {access-token}'
}

r = requests.delete('/hirek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Authorization' => 'Bearer {access-token}',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/hirek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/hirek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Authorization": []string{"Bearer {access-token}"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/hirek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /hirek/{id}`

*Hír törlése*

Meglévő hír törlése admin jogosultsággal.

<h3 id="hirekcontroller_remove-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|none|

<h3 id="hirekcontroller_remove-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Hír sikeresen törölve|None|
|401|[Unauthorized](https://tools.ietf.org/html/rfc7235#section-3.1)|Érvénytelen vagy hiányzó JWT token|None|
|403|[Forbidden](https://tools.ietf.org/html/rfc7231#section-6.5.3)|Nincs admin jogosultság|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|Hír nem található|None|

<aside class="warning">
To perform this operation, you must be authenticated by means of one of the following methods:
JWT-auth
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-telep-l-sek">Települések</h1>

## TelepulesController_findAll

<a id="opIdTelepulesController_findAll"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /telepulesek \
  -H 'Accept: application/json'

```

```http
GET /telepulesek HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/telepulesek',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/telepulesek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/telepulesek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/telepulesek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/telepulesek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /telepulesek`

*Összes település lekérdezése*

> Example responses

> 200 Response

```json
[
  {
    "telepules_varos": "string",
    "telepules_iranyitoszam": "string",
    "telepules_megye": "string"
  }
]
```

<h3 id="telepulescontroller_findall-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A települések listája sikeresen lekérdezve.|Inline|

<h3 id="telepulescontroller_findall-responseschema">Response Schema</h3>

Status Code **200**

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|*anonymous*|[[CreateTelepulesDto](#schemacreatetelepulesdto)]|false|none|none|
|» telepules_varos|string|true|none|A település neve|
|» telepules_iranyitoszam|string|true|none|A település irányítószáma|
|» telepules_megye|string¦null|true|none|A település megyéje (opcionális)|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_create

<a id="opIdTelepulesController_create"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /telepulesek \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
POST /telepulesek HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/telepulesek',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.post '/telepulesek',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.post('/telepulesek', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/telepulesek', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/telepulesek", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /telepulesek`

*Új település létrehozása*

> Body parameter

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_create-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|[CreateTelepulesDto](#schemacreatetelepulesdto)|true|none|

> Example responses

> 201 Response

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_create-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|A település sikeresen létrehozva.|[CreateTelepulesDto](#schemacreatetelepulesdto)|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen bemenet.|None|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_findOne

<a id="opIdTelepulesController_findOne"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /telepulesek/{id} \
  -H 'Accept: application/json'

```

```http
GET /telepulesek/{id} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/telepulesek/{id}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/telepulesek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/telepulesek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/telepulesek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/telepulesek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /telepulesek/{id}`

*Egy település lekérdezése ID alapján*

<h3 id="telepulescontroller_findone-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A település azonosítója|

> Example responses

> 200 Response

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_findone-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A település sikeresen lekérdezve.|[CreateTelepulesDto](#schemacreatetelepulesdto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|A település nem található.|None|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_put

<a id="opIdTelepulesController_put"></a>

> Code samples

```shell
# You can also use wget
curl -X PUT /telepulesek/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PUT /telepulesek/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/telepulesek/{id}',
{
  method: 'PUT',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.put '/telepulesek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.put('/telepulesek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PUT','/telepulesek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PUT");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PUT", "/telepulesek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PUT /telepulesek/{id}`

*Település teljes frissítése ID alapján*

> Body parameter

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_put-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A település azonosítója|
|body|body|[CreateTelepulesDto](#schemacreatetelepulesdto)|true|none|

> Example responses

> 200 Response

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_put-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A település sikeresen frissítve.|[CreateTelepulesDto](#schemacreatetelepulesdto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|A település nem található.|None|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_patch

<a id="opIdTelepulesController_patch"></a>

> Code samples

```shell
# You can also use wget
curl -X PATCH /telepulesek/{id} \
  -H 'Content-Type: application/json' \
  -H 'Accept: application/json'

```

```http
PATCH /telepulesek/{id} HTTP/1.1

Content-Type: application/json
Accept: application/json

```

```javascript
const inputBody = '{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}';
const headers = {
  'Content-Type':'application/json',
  'Accept':'application/json'
};

fetch('/telepulesek/{id}',
{
  method: 'PATCH',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json',
  'Accept' => 'application/json'
}

result = RestClient.patch '/telepulesek/{id}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
}

r = requests.patch('/telepulesek/{id}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('PATCH','/telepulesek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("PATCH");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("PATCH", "/telepulesek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`PATCH /telepulesek/{id}`

*Település részleges frissítése ID alapján*

> Body parameter

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_patch-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A település azonosítója|
|body|body|[UpdateTelepulesDto](#schemaupdatetelepulesdto)|true|none|

> Example responses

> 200 Response

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_patch-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A település sikeresen frissítve.|[UpdateTelepulesDto](#schemaupdatetelepulesdto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|A település nem található.|None|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_delete

<a id="opIdTelepulesController_delete"></a>

> Code samples

```shell
# You can also use wget
curl -X DELETE /telepulesek/{id}

```

```http
DELETE /telepulesek/{id} HTTP/1.1

```

```javascript

fetch('/telepulesek/{id}',
{
  method: 'DELETE'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.delete '/telepulesek/{id}',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.delete('/telepulesek/{id}')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('DELETE','/telepulesek/{id}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek/{id}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("DELETE");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("DELETE", "/telepulesek/{id}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`DELETE /telepulesek/{id}`

*Település törlése ID alapján*

<h3 id="telepulescontroller_delete-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|id|path|string|true|A település azonosítója|

<h3 id="telepulescontroller_delete-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A település sikeresen törölve.|None|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|A település nem található.|None|

<aside class="success">
This operation does not require authentication
</aside>

## TelepulesController_findIranyitoszam

<a id="opIdTelepulesController_findIranyitoszam"></a>

> Code samples

```shell
# You can also use wget
curl -X GET /telepulesek/iranyitoszam/{iranyitoszam} \
  -H 'Accept: application/json'

```

```http
GET /telepulesek/iranyitoszam/{iranyitoszam} HTTP/1.1

Accept: application/json

```

```javascript

const headers = {
  'Accept':'application/json'
};

fetch('/telepulesek/iranyitoszam/{iranyitoszam}',
{
  method: 'GET',

  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Accept' => 'application/json'
}

result = RestClient.get '/telepulesek/iranyitoszam/{iranyitoszam}',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Accept': 'application/json'
}

r = requests.get('/telepulesek/iranyitoszam/{iranyitoszam}', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Accept' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('GET','/telepulesek/iranyitoszam/{iranyitoszam}', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/telepulesek/iranyitoszam/{iranyitoszam}");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("GET");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Accept": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("GET", "/telepulesek/iranyitoszam/{iranyitoszam}", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`GET /telepulesek/iranyitoszam/{iranyitoszam}`

*Település lekérdezése irányítószám alapján*

<h3 id="telepulescontroller_findiranyitoszam-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|iranyitoszam|path|string|true|A település irányítószáma|

> Example responses

> 200 Response

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}
```

<h3 id="telepulescontroller_findiranyitoszam-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|A település sikeresen lekérdezve.|[CreateTelepulesDto](#schemacreatetelepulesdto)|
|404|[Not Found](https://tools.ietf.org/html/rfc7231#section-6.5.4)|A település nem található.|None|

<aside class="success">
This operation does not require authentication
</aside>

<h1 id="nestjs-keretrendszerrel-k-sz-tett-rest-api-tesztadatok">Tesztadatok</h1>

## TesztAdatokController_szemelyekLetrehozasa

<a id="opIdTesztAdatokController_szemelyekLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/szemelyekletrehozasa \
  -H 'Content-Type: application/json'

```

```http
POST /tesztadatok/szemelyekletrehozasa HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "count": 10
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/tesztadatok/szemelyekletrehozasa',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/tesztadatok/szemelyekletrehozasa',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/tesztadatok/szemelyekletrehozasa', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/szemelyekletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/szemelyekletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/szemelyekletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/szemelyekletrehozasa`

*Személyek tesztadatok létrehozása*

Létrehoz egy megadott számú teszt személyt.

> Body parameter

```json
{
  "count": 10
}
```

<h3 id="tesztadatokcontroller_szemelyekletrehozasa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» count|body|number|false|none|

<h3 id="tesztadatokcontroller_szemelyekletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Teszt személyek sikeresen létrehozva|None|
|400|[Bad Request](https://tools.ietf.org/html/rfc7231#section-6.5.1)|Érvénytelen adatok|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_szemelyekTorlese

<a id="opIdTesztAdatokController_szemelyekTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/szemelyektorlese

```

```http
POST /tesztadatok/szemelyektorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/szemelyektorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/szemelyektorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/szemelyektorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/szemelyektorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/szemelyektorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/szemelyektorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/szemelyektorlese`

*Személyek tesztadatok törlése*

Törli az összes teszt személyt.

<h3 id="tesztadatokcontroller_szemelyektorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teszt személyek sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_telepulesekLetrehozasa

<a id="opIdTesztAdatokController_telepulesekLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/telepulesekletrehozasa

```

```http
POST /tesztadatok/telepulesekletrehozasa HTTP/1.1

```

```javascript

fetch('/tesztadatok/telepulesekletrehozasa',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/telepulesekletrehozasa',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/telepulesekletrehozasa')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/telepulesekletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/telepulesekletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/telepulesekletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/telepulesekletrehozasa`

*Települések tesztadatok létrehozása*

Létrehoz teszt településeket.

<h3 id="tesztadatokcontroller_telepulesekletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Teszt települések sikeresen létrehozva|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_telepulesekTorlese

<a id="opIdTesztAdatokController_telepulesekTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/telepulesektorlese

```

```http
POST /tesztadatok/telepulesektorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/telepulesektorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/telepulesektorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/telepulesektorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/telepulesektorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/telepulesektorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/telepulesektorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/telepulesektorlese`

*Települések tesztadatok törlése*

Törli az összes teszt települést.

<h3 id="tesztadatokcontroller_telepulesektorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teszt települések sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_hirekLetrehozasa

<a id="opIdTesztAdatokController_hirekLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/hirekletrehozasa

```

```http
POST /tesztadatok/hirekletrehozasa HTTP/1.1

```

```javascript

fetch('/tesztadatok/hirekletrehozasa',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/hirekletrehozasa',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/hirekletrehozasa')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/hirekletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/hirekletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/hirekletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/hirekletrehozasa`

*Hírek tesztadatok létrehozása*

Létrehoz teszt híreket.

<h3 id="tesztadatokcontroller_hirekletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Teszt hírek sikeresen létrehozva|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_hirekTorlese

<a id="opIdTesztAdatokController_hirekTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/hirektorlese

```

```http
POST /tesztadatok/hirektorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/hirektorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/hirektorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/hirektorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/hirektorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/hirektorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/hirektorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/hirektorlese`

*Hírek tesztadatok törlése*

Törli az összes teszt hírt.

<h3 id="tesztadatokcontroller_hirektorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teszt hírek sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_esemenyekLetrehozasa

<a id="opIdTesztAdatokController_esemenyekLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/esemenyekletrehozasa

```

```http
POST /tesztadatok/esemenyekletrehozasa HTTP/1.1

```

```javascript

fetch('/tesztadatok/esemenyekletrehozasa',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/esemenyekletrehozasa',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/esemenyekletrehozasa')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/esemenyekletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/esemenyekletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/esemenyekletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/esemenyekletrehozasa`

*Események tesztadatok létrehozása*

Létrehoz teszt eseményeket.

<h3 id="tesztadatokcontroller_esemenyekletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Teszt események sikeresen létrehozva|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_esemenyekTorlese

<a id="opIdTesztAdatokController_esemenyekTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/esemenyektorlese

```

```http
POST /tesztadatok/esemenyektorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/esemenyektorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/esemenyektorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/esemenyektorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/esemenyektorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/esemenyektorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/esemenyektorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/esemenyektorlese`

*Események tesztadatok törlése*

Törli az összes teszt eseményt.

<h3 id="tesztadatokcontroller_esemenyektorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teszt események sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_feliratkozasokLetrehozasa

<a id="opIdTesztAdatokController_feliratkozasokLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/feliratkozasokletrehozasa

```

```http
POST /tesztadatok/feliratkozasokletrehozasa HTTP/1.1

```

```javascript

fetch('/tesztadatok/feliratkozasokletrehozasa',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/feliratkozasokletrehozasa',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/feliratkozasokletrehozasa')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/feliratkozasokletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/feliratkozasokletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/feliratkozasokletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/feliratkozasokletrehozasa`

*Feliratkozások tesztadatok létrehozása*

Létrehoz teszt feliratkozásokat.

<h3 id="tesztadatokcontroller_feliratkozasokletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Teszt feliratkozások sikeresen létrehozva|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_feliratkozasokTorlese

<a id="opIdTesztAdatokController_feliratkozasokTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/feliratkozasoktorlese

```

```http
POST /tesztadatok/feliratkozasoktorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/feliratkozasoktorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/feliratkozasoktorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/feliratkozasoktorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/feliratkozasoktorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/feliratkozasoktorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/feliratkozasoktorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/feliratkozasoktorlese`

*Feliratkozások tesztadatok törlése*

Törli az összes teszt feliratkozást.

<h3 id="tesztadatokcontroller_feliratkozasoktorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Teszt feliratkozások sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_tesztAdatokLetrehozasa

<a id="opIdTesztAdatokController_tesztAdatokLetrehozasa"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/tesztadatokletrehozasa \
  -H 'Content-Type: application/json'

```

```http
POST /tesztadatok/tesztadatokletrehozasa HTTP/1.1

Content-Type: application/json

```

```javascript
const inputBody = '{
  "count": 10
}';
const headers = {
  'Content-Type':'application/json'
};

fetch('/tesztadatok/tesztadatokletrehozasa',
{
  method: 'POST',
  body: inputBody,
  headers: headers
})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

headers = {
  'Content-Type' => 'application/json'
}

result = RestClient.post '/tesztadatok/tesztadatokletrehozasa',
  params: {
  }, headers: headers

p JSON.parse(result)

```

```python
import requests
headers = {
  'Content-Type': 'application/json'
}

r = requests.post('/tesztadatok/tesztadatokletrehozasa', headers = headers)

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$headers = array(
    'Content-Type' => 'application/json',
);

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/tesztadatokletrehozasa', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/tesztadatokletrehozasa");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    headers := map[string][]string{
        "Content-Type": []string{"application/json"},
    }

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/tesztadatokletrehozasa", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/tesztadatokletrehozasa`

*Összes tesztadat létrehozása*

Létrehoz minden tesztadatot (személyek, települések, hírek, események, feliratkozások).

> Body parameter

```json
{
  "count": 10
}
```

<h3 id="tesztadatokcontroller_tesztadatokletrehozasa-parameters">Parameters</h3>

|Name|In|Type|Required|Description|
|---|---|---|---|---|
|body|body|object|true|none|
|» count|body|number|false|none|

<h3 id="tesztadatokcontroller_tesztadatokletrehozasa-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|Tesztadatok sikeresen létrehozva|None|

<aside class="success">
This operation does not require authentication
</aside>

## TesztAdatokController_tesztAdatokTorlese

<a id="opIdTesztAdatokController_tesztAdatokTorlese"></a>

> Code samples

```shell
# You can also use wget
curl -X POST /tesztadatok/tesztadatoktorlese

```

```http
POST /tesztadatok/tesztadatoktorlese HTTP/1.1

```

```javascript

fetch('/tesztadatok/tesztadatoktorlese',
{
  method: 'POST'

})
.then(function(res) {
    return res.json();
}).then(function(body) {
    console.log(body);
});

```

```ruby
require 'rest-client'
require 'json'

result = RestClient.post '/tesztadatok/tesztadatoktorlese',
  params: {
  }

p JSON.parse(result)

```

```python
import requests

r = requests.post('/tesztadatok/tesztadatoktorlese')

print(r.json())

```

```php
<?php

require 'vendor/autoload.php';

$client = new \GuzzleHttp\Client();

// Define array of request body.
$request_body = array();

try {
    $response = $client->request('POST','/tesztadatok/tesztadatoktorlese', array(
        'headers' => $headers,
        'json' => $request_body,
       )
    );
    print_r($response->getBody()->getContents());
 }
 catch (\GuzzleHttp\Exception\BadResponseException $e) {
    // handle exception or api errors.
    print_r($e->getMessage());
 }

 // ...

```

```java
URL obj = new URL("/tesztadatok/tesztadatoktorlese");
HttpURLConnection con = (HttpURLConnection) obj.openConnection();
con.setRequestMethod("POST");
int responseCode = con.getResponseCode();
BufferedReader in = new BufferedReader(
    new InputStreamReader(con.getInputStream()));
String inputLine;
StringBuffer response = new StringBuffer();
while ((inputLine = in.readLine()) != null) {
    response.append(inputLine);
}
in.close();
System.out.println(response.toString());

```

```go
package main

import (
       "bytes"
       "net/http"
)

func main() {

    data := bytes.NewBuffer([]byte{jsonReq})
    req, err := http.NewRequest("POST", "/tesztadatok/tesztadatoktorlese", data)
    req.Header = headers

    client := &http.Client{}
    resp, err := client.Do(req)
    // ...
}

```

`POST /tesztadatok/tesztadatoktorlese`

*Összes tesztadat törlése*

Törli az összes tesztadatot.

<h3 id="tesztadatokcontroller_tesztadatoktorlese-responses">Responses</h3>

|Status|Meaning|Description|Schema|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|Tesztadatok sikeresen törölve|None|

<aside class="success">
This operation does not require authentication
</aside>

# Schemas

<h2 id="tocS_CreateCimDto">CreateCimDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatecimdto"></a>
<a id="schema_CreateCimDto"></a>
<a id="tocScreatecimdto"></a>
<a id="tocscreatecimdto"></a>

```json
{
  "cim_tipus": "állandó",
  "cim_iranyitoszam": "1234",
  "cim_varos": "Budapest",
  "cim_utca": "Fő utca 1"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cim_tipus|string|true|none|A cím típusa|
|cim_iranyitoszam|string|true|none|A cím irányítószáma|
|cim_varos|string|true|none|A cím városa|
|cim_utca|string|true|none|A cím utcája|

#### Enumerated Values

|Property|Value|
|---|---|
|cim_tipus|állandó|
|cim_tipus|tartózkodási|
|cim_tipus|levelezési|

<h2 id="tocS_RegisterSzemelyDto">RegisterSzemelyDto</h2>
<!-- backwards compatibility -->
<a id="schemaregisterszemelydto"></a>
<a id="schema_RegisterSzemelyDto"></a>
<a id="tocSregisterszemelydto"></a>
<a id="tocsregisterszemelydto"></a>

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_vezeteknev|string|true|none|A személy vezetékneve|
|szemely_keresztnev|string|true|none|A személy keresztneve|
|szemely_szuletesi_datum|string(date-time)|false|none|A személy születési dátuma (opcionális)|
|szemely_anyja_neve|string|false|none|A személy anyjának neve (opcionális)|
|szemely_vegzettseg|string|true|none|A személy végzettsége|
|szemely_email|string|true|none|A személy email címe|
|szemely_telefon|string|false|none|A személy telefonszáma (opcionális)|
|szemely_felhasznalonev|string|true|none|A személy felhasználóneve|
|szemely_jelszo|string|true|none|A személy jelszava (legalább 8 karakter, kisbetű, nagybetű és szám)|
|szemely_cimek|[[CreateCimDto](#schemacreatecimdto)]|false|none|A személyhez tartozó címek (opcionális)|

#### Enumerated Values

|Property|Value|
|---|---|
|szemely_vegzettseg|nincs|
|szemely_vegzettseg|alapfok|
|szemely_vegzettseg|középfok|
|szemely_vegzettseg|felsőfok|

<h2 id="tocS_Cim">Cim</h2>
<!-- backwards compatibility -->
<a id="schemacim"></a>
<a id="schema_Cim"></a>
<a id="tocScim"></a>
<a id="tocscim"></a>

```json
{
  "cim_id": 1,
  "cim_tipus": "állandó",
  "cim_iranyitoszam": "1234",
  "cim_varos": "Budapest",
  "cim_utca": "Fő utca 1",
  "cim_szemely_id": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|cim_id|number|true|none|A cím egyedi azonosítója|
|cim_tipus|string|true|none|A cím típusa|
|cim_iranyitoszam|string|true|none|A cím irányítószáma|
|cim_varos|string|true|none|A cím városa|
|cim_utca|string|true|none|A cím utcája|
|cim_szemely_id|number|true|none|A címhez tartozó személy azonosítója|

#### Enumerated Values

|Property|Value|
|---|---|
|cim_tipus|állandó|
|cim_tipus|tartózkodási|
|cim_tipus|levelezési|

<h2 id="tocS_Esemeny">Esemeny</h2>
<!-- backwards compatibility -->
<a id="schemaesemeny"></a>
<a id="schema_Esemeny"></a>
<a id="tocSesemeny"></a>
<a id="tocsesemeny"></a>

```json
{
  "esemeny_id": 1,
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100,
  "esemeny_feliratkozasok": [
    []
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|esemeny_id|number|true|none|Az esemény egyedi azonosítója|
|esemeny_nev|string|true|none|Az esemény neve|
|esemeny_leiras|string|true|none|Az esemény leírása|
|esemeny_helyszin|string|true|none|Az esemény helyszíne|
|esemeny_idopont|string(date-time)|true|none|Az esemény időpontja|
|esemeny_max_fo|number|true|none|Az esemény maximális létszáma|
|esemeny_feliratkozasok|[array]|true|none|Az eseményhez tartozó feliratkozások|

<h2 id="tocS_Feliratkozas">Feliratkozas</h2>
<!-- backwards compatibility -->
<a id="schemafeliratkozas"></a>
<a id="schema_Feliratkozas"></a>
<a id="tocSfeliratkozas"></a>
<a id="tocsfeliratkozas"></a>

```json
{
  "feliratkozas_id": 1,
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1,
  "feliratkozas_esemeny": {
    "esemeny_id": 1,
    "esemeny_nev": "Éves konferencia",
    "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
    "esemeny_helyszin": "Budapest, Kongresszusi Központ",
    "esemeny_idopont": "2025-12-01T10:00:00Z",
    "esemeny_max_fo": 100,
    "esemeny_feliratkozasok": [
      []
    ]
  }
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feliratkozas_id|number|true|none|A feliratkozás egyedi azonosítója|
|feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|
|feliratkozas_esemeny|[Esemeny](#schemaesemeny)|true|none|A feliratkozás eseménye|

<h2 id="tocS_Szemely">Szemely</h2>
<!-- backwards compatibility -->
<a id="schemaszemely"></a>
<a id="schema_Szemely"></a>
<a id="tocSszemely"></a>
<a id="tocsszemely"></a>

```json
{
  "szemely_id": 1,
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_torolve": "2025-06-28T13:00:00Z",
  "szemely_cimek": [
    {
      "cim_id": 1,
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1",
      "cim_szemely_id": 1
    }
  ],
  "szemely_feliratkozasok": [
    {
      "feliratkozas_id": 1,
      "feliratkozas_szemely_id": 1,
      "feliratkozas_esemeny_id": 1,
      "feliratkozas_esemeny": {
        "esemeny_id": 1,
        "esemeny_nev": "Éves konferencia",
        "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
        "esemeny_helyszin": "Budapest, Kongresszusi Központ",
        "esemeny_idopont": "2025-12-01T10:00:00Z",
        "esemeny_max_fo": 100,
        "esemeny_feliratkozasok": [
          []
        ]
      }
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_id|number|true|none|A személy egyedi azonosítója|
|szemely_vezeteknev|string|true|none|A személy vezetékneve|
|szemely_keresztnev|string|true|none|A személy keresztneve|
|szemely_szuletesi_datum|object|false|none|A személy születési dátuma (opcionális)|
|szemely_anyja_neve|object|false|none|A személy anyjának neve (opcionális)|
|szemely_vegzettseg|string|true|none|A személy végzettsége|
|szemely_email|string|true|none|A személy email címe|
|szemely_telefon|object|false|none|A személy telefonszáma (opcionális)|
|szemely_felhasznalonev|string|true|none|A személy felhasználóneve|
|szemely_jelszo|string|true|none|A személy jelszava (titkosítva tárolva)|
|szemely_jogosultsag|string|true|none|A személy jogosultsága|
|szemely_torolve|string(date-time)|false|none|A személy törlésének időpontja (soft delete)|
|szemely_cimek|[[Cim](#schemacim)]|true|none|A személyhez tartozó címek|
|szemely_feliratkozasok|[[Feliratkozas](#schemafeliratkozas)]|true|none|A személyhez tartozó feliratkozások|

#### Enumerated Values

|Property|Value|
|---|---|
|szemely_vegzettseg|nincs|
|szemely_vegzettseg|alapfok|
|szemely_vegzettseg|középfok|
|szemely_vegzettseg|felsőfok|
|szemely_jogosultsag|nincs|
|szemely_jogosultsag|user|
|szemely_jogosultsag|admin|

<h2 id="tocS_LoginSzemelyDto">LoginSzemelyDto</h2>
<!-- backwards compatibility -->
<a id="schemaloginszemelydto"></a>
<a id="schema_LoginSzemelyDto"></a>
<a id="tocSloginszemelydto"></a>
<a id="tocsloginszemelydto"></a>

```json
{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_email|string|false|none|A személy email címe (opcionális, ha felhasználónév meg van adva)|
|szemely_felhasznalonev|string|false|none|A személy felhasználóneve (opcionális, ha email cím meg van adva)|
|szemely_jelszo|string|true|none|A személy jelszava|

<h2 id="tocS_LoginResponseDto">LoginResponseDto</h2>
<!-- backwards compatibility -->
<a id="schemaloginresponsedto"></a>
<a id="schema_LoginResponseDto"></a>
<a id="tocSloginresponsedto"></a>
<a id="tocsloginresponsedto"></a>

```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|access_token|string|true|none|JWT token|

<h2 id="tocS_ModifyPasswordDto">ModifyPasswordDto</h2>
<!-- backwards compatibility -->
<a id="schemamodifypassworddto"></a>
<a id="schema_ModifyPasswordDto"></a>
<a id="tocSmodifypassworddto"></a>
<a id="tocsmodifypassworddto"></a>

```json
{
  "szemely_email": "kovacs.anna@example.com",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_ujjelszo": "TitkosUj123"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_email|string|false|none|A személy email címe (opcionális, ha felhasználónév meg van adva)|
|szemely_felhasznalonev|string|false|none|A személy felhasználóneve (opcionális, ha email cím meg van adva)|
|szemely_jelszo|string|true|none|A személy jelszava|
|szemely_ujjelszo|string|true|none|A személy új jelszava|

<h2 id="tocS_CreateSzemelyDto">CreateSzemelyDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateszemelydto"></a>
<a id="schema_CreateSzemelyDto"></a>
<a id="tocScreateszemelydto"></a>
<a id="tocscreateszemelydto"></a>

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_vezeteknev|string|true|none|A személy vezetékneve|
|szemely_keresztnev|string|true|none|A személy keresztneve|
|szemely_szuletesi_datum|object|false|none|A személy születési dátuma (opcionális)|
|szemely_anyja_neve|object|false|none|A személy anyjának neve (opcionális)|
|szemely_vegzettseg|string|true|none|A személy végzettsége|
|szemely_email|string|true|none|A személy email címe|
|szemely_telefon|object|false|none|A személy telefonszáma (opcionális)|
|szemely_felhasznalonev|string|true|none|A személy felhasználóneve|
|szemely_jelszo|string|true|none|A személy jelszava|
|szemely_jogosultsag|string|true|none|A személy jogosultsága|
|szemely_cimek|[[CreateCimDto](#schemacreatecimdto)]|false|none|A személyhez tartozó címek (opcionális)|

#### Enumerated Values

|Property|Value|
|---|---|
|szemely_vegzettseg|nincs|
|szemely_vegzettseg|alapfok|
|szemely_vegzettseg|középfok|
|szemely_vegzettseg|felsőfok|
|szemely_jogosultsag|nincs|
|szemely_jogosultsag|user|
|szemely_jogosultsag|admin|

<h2 id="tocS_UpdateSzemelyDto">UpdateSzemelyDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateszemelydto"></a>
<a id="schema_UpdateSzemelyDto"></a>
<a id="tocSupdateszemelydto"></a>
<a id="tocsupdateszemelydto"></a>

```json
{
  "szemely_vezeteknev": "Kovács",
  "szemely_keresztnev": "Anna",
  "szemely_szuletesi_datum": "1990-01-01",
  "szemely_anyja_neve": "Szabó Mária",
  "szemely_vegzettseg": "középfok",
  "szemely_email": "kovacs.anna@example.com",
  "szemely_telefon": "+36301234567",
  "szemely_felhasznalonev": "kovacsanna",
  "szemely_jelszo": "Titkos123",
  "szemely_jogosultsag": "user",
  "szemely_cimek": [
    {
      "cim_tipus": "állandó",
      "cim_iranyitoszam": "1234",
      "cim_varos": "Budapest",
      "cim_utca": "Fő utca 1"
    }
  ]
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|szemely_vezeteknev|string|false|none|A személy vezetékneve (opcionális)|
|szemely_keresztnev|string|false|none|A személy keresztneve (opcionális)|
|szemely_szuletesi_datum|object|false|none|A személy születési dátuma (opcionális)|
|szemely_anyja_neve|object|false|none|A személy anyjának neve (opcionális)|
|szemely_vegzettseg|string|false|none|A személy végzettsége (opcionális)|
|szemely_email|string|false|none|A személy email címe (opcionális)|
|szemely_telefon|object|false|none|A személy telefonszáma (opcionális)|
|szemely_felhasznalonev|string|false|none|A személy felhasználóneve (opcionális)|
|szemely_jelszo|string|false|none|A személy jelszava (opcionális)|
|szemely_jogosultsag|string|false|none|A személy jogosultsága (opcionális)|
|szemely_cimek|[[CreateCimDto](#schemacreatecimdto)]|false|none|A személyhez tartozó címek (opcionális)|

#### Enumerated Values

|Property|Value|
|---|---|
|szemely_vegzettseg|nincs|
|szemely_vegzettseg|alapfok|
|szemely_vegzettseg|középfok|
|szemely_vegzettseg|felsőfok|
|szemely_jogosultsag|nincs|
|szemely_jogosultsag|user|
|szemely_jogosultsag|admin|

<h2 id="tocS_Object">Object</h2>
<!-- backwards compatibility -->
<a id="schemaobject"></a>
<a id="schema_Object"></a>
<a id="tocSobject"></a>
<a id="tocsobject"></a>

```json
{}

```

### Properties

*None*

<h2 id="tocS_CreateEsemenyDto">CreateEsemenyDto</h2>
<!-- backwards compatibility -->
<a id="schemacreateesemenydto"></a>
<a id="schema_CreateEsemenyDto"></a>
<a id="tocScreateesemenydto"></a>
<a id="tocscreateesemenydto"></a>

```json
{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|esemeny_nev|string|true|none|Az esemény neve|
|esemeny_leiras|string|true|none|Az esemény leírása|
|esemeny_helyszin|string|true|none|Az esemény helyszíne|
|esemeny_idopont|string|true|none|Az esemény időpontja (ISO 8601 formátumban)|
|esemeny_max_fo|number|true|none|Az esemény maximális létszáma|

<h2 id="tocS_UpdateEsemenyDto">UpdateEsemenyDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdateesemenydto"></a>
<a id="schema_UpdateEsemenyDto"></a>
<a id="tocSupdateesemenydto"></a>
<a id="tocsupdateesemenydto"></a>

```json
{
  "esemeny_nev": "Éves konferencia",
  "esemeny_leiras": "Éves szakmai konferencia a technológiai újításokról",
  "esemeny_helyszin": "Budapest, Kongresszusi Központ",
  "esemeny_idopont": "2025-12-01T10:00:00Z",
  "esemeny_max_fo": 100
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|esemeny_nev|string|false|none|Az esemény neve (opcionális)|
|esemeny_leiras|string|false|none|Az esemény leírása (opcionális)|
|esemeny_helyszin|string|false|none|Az esemény helyszíne (opcionális)|
|esemeny_idopont|string|false|none|Az esemény időpontja (ISO 8601 formátumban, opcionális)|
|esemeny_max_fo|number|false|none|Az esemény maximális létszáma (opcionális)|

<h2 id="tocS_CreateFeliratkozasDto">CreateFeliratkozasDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatefeliratkozasdto"></a>
<a id="schema_CreateFeliratkozasDto"></a>
<a id="tocScreatefeliratkozasdto"></a>
<a id="tocscreatefeliratkozasdto"></a>

```json
{
  "feliratkozas_szemely_id": 1,
  "feliratkozas_esemeny_id": 1
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|feliratkozas_szemely_id|number|true|none|A feliratkozó személy azonosítója|
|feliratkozas_esemeny_id|number|true|none|Az esemény azonosítója|

<h2 id="tocS_Hir">Hir</h2>
<!-- backwards compatibility -->
<a id="schemahir"></a>
<a id="schema_Hir"></a>
<a id="tocShir"></a>
<a id="tocshir"></a>

```json
{
  "hir_id": 1,
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hir_id|number|true|none|A hír egyedi azonosítója|
|hir_cim|string|true|none|A hír címe|
|hir_tartalom|string|true|none|A hír tartalma|
|hir_datum|object|false|none|A hír dátuma (opcionális)|

<h2 id="tocS_CreateHirDto">CreateHirDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatehirdto"></a>
<a id="schema_CreateHirDto"></a>
<a id="tocScreatehirdto"></a>
<a id="tocscreatehirdto"></a>

```json
{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hir_cim|string|true|none|A hír címe|
|hir_tartalom|string|true|none|A hír tartalma|
|hir_datum|object|false|none|A hír dátuma (opcionális)|

<h2 id="tocS_UpdateHirDto">UpdateHirDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatehirdto"></a>
<a id="schema_UpdateHirDto"></a>
<a id="tocSupdatehirdto"></a>
<a id="tocsupdatehirdto"></a>

```json
{
  "hir_cim": "Új esemény bejelentése",
  "hir_tartalom": "Új esemény kerül megrendezésre decemberben.",
  "hir_datum": "2025-06-28"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|hir_cim|string|false|none|A hír címe (opcionális)|
|hir_tartalom|string|false|none|A hír tartalma (opcionális)|
|hir_datum|object|false|none|A hír dátuma (opcionális)|

<h2 id="tocS_CreateTelepulesDto">CreateTelepulesDto</h2>
<!-- backwards compatibility -->
<a id="schemacreatetelepulesdto"></a>
<a id="schema_CreateTelepulesDto"></a>
<a id="tocScreatetelepulesdto"></a>
<a id="tocscreatetelepulesdto"></a>

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|telepules_varos|string|true|none|A település neve|
|telepules_iranyitoszam|string|true|none|A település irányítószáma|
|telepules_megye|string¦null|true|none|A település megyéje (opcionális)|

<h2 id="tocS_UpdateTelepulesDto">UpdateTelepulesDto</h2>
<!-- backwards compatibility -->
<a id="schemaupdatetelepulesdto"></a>
<a id="schema_UpdateTelepulesDto"></a>
<a id="tocSupdatetelepulesdto"></a>
<a id="tocsupdatetelepulesdto"></a>

```json
{
  "telepules_varos": "string",
  "telepules_iranyitoszam": "string",
  "telepules_megye": "string"
}

```

### Properties

|Name|Type|Required|Restrictions|Description|
|---|---|---|---|---|
|telepules_varos|string|false|none|A település neve (opcionális)|
|telepules_iranyitoszam|string|false|none|A település irányítószáma (opcionális)|
|telepules_megye|string¦null|false|none|A település megyéje (opcionális)|


