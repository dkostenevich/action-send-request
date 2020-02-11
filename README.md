# Web Request Action

> A GitHub Action to make a web request to any JSON API. Supports all HTTP methods, custom headers, JSON payload, data fetch and basic authentication.

[![Test Status](https://github.com/dkostenevich/action-send-request/workflows/Test/badge.svg)](https://github.com/dkostenevich/action-send-request/actions)

## Usage

### `GET` request

```yaml
uses: dkostenevich/action-send-request@master
with:
  url: https://my-json-server.typicode.com/typicode/demo/posts
  method: GET
```

### `POST` request with headers and basic auth

```yaml
uses: dkostenevich/action-send-request@master
with:
  url: https://webhook.site/${{ secrets.WEBHOOK_ID }}
  method: POST
  payload: '{"name": "${{ env.MY_NAME }}"}'
  headers: '{"Authentication": "Token ${{ env.TOKEN }}"}'
```

## Inputs

| Parameter      | Required | Info                                                         |
| -------------- | -------- | ------------------------------------------------------------ |
| `url`          | `true`   | Web request URL endpoint                                     |
| `method`       | `true`   | Web request method (`GET`, `POST`, `PUT`, `PATCH`, `DELETE`) |
| `avoid_error`  | `true`   | Avoid any error                                              |
| `payload`      | `false`  | Web request payload in JSON format                           |
| `headers`      | `false`  | Web request headers in JSON format                           |

## Outputs

Output format: `JSON`

```json
{
  "output": {
    "url": "<str url>",
    "method": "<str method>",
    "payload": {},
    "time": "<str time>",
    "statusCode": "<int statusCode>",
    "data": "object/array data from API"
  }
}
```

### Example output usage

```yaml
run: |
  $output = '${{ steps.webhook.outputs.output }}' | ConvertFrom-Json
  Write-Host "Time from output $($output.time) statusCode $($output.statusCode) data $($output.data)"
```

## License

[MIT](LICENSE)