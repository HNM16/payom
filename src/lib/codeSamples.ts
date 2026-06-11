export interface CodeSample {
  lang: string;
  label: string;
  code: string;
}

const endpoint = "https://api.payom.tj/v1/sms/send";

export const SEND_SAMPLES: CodeSample[] = [
  {
    lang: "curl",
    label: "cURL",
    code: `curl -X POST ${endpoint} \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "to": "+992900000000",
    "from": "Payom",
    "text": "Your code: 4821"
  }'`,
  },
  {
    lang: "php",
    label: "PHP",
    code: `<?php
$ch = curl_init("${endpoint}");
curl_setopt_array($ch, [
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_POST => true,
  CURLOPT_HTTPHEADER => [
    "Authorization: Bearer YOUR_API_KEY",
    "Content-Type: application/json",
  ],
  CURLOPT_POSTFIELDS => json_encode([
    "to"   => "+992900000000",
    "from" => "Payom",
    "text" => "Your code: 4821",
  ]),
]);
$response = curl_exec($ch);
echo $response;`,
  },
  {
    lang: "node",
    label: "Node.js",
    code: `const res = await fetch("${endpoint}", {
  method: "POST",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    to: "+992900000000",
    from: "Payom",
    text: "Your code: 4821",
  }),
});

const data = await res.json();
console.log(data);`,
  },
  {
    lang: "ruby",
    label: "Ruby",
    code: `require "net/http"
require "json"

uri = URI("${endpoint}")
http = Net::HTTP.new(uri.host, uri.port)
http.use_ssl = true

req = Net::HTTP::Post.new(uri)
req["Authorization"] = "Bearer YOUR_API_KEY"
req["Content-Type"] = "application/json"
req.body = {
  to: "+992900000000",
  from: "Payom",
  text: "Your code: 4821"
}.to_json

puts http.request(req).body`,
  },
];

export const RESPONSE_SAMPLE = `{
  "id": "a1b2c3d4-5678-90ef",
  "to": "+992900000000",
  "status": "queued",
  "parts": 1,
  "cost": 0.14,
  "created_at": "2026-06-11T09:24:00Z"
}`;
