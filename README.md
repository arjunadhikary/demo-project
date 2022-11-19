
# Dividend Capacity

This is a simple project to demonstrate the web scraping data provided
to the frontend in form of api

# Dividend Capacity

This is a simple project to demonstrate the web scraping data provided
to the frontend in form of api

## Optimizations

* Used  `debounce` to minimize the api call
* Generate Random 9 company list and server to the client

## API Reference

#### Get all items

```http
  GET /list/random
```

#### Get item

```http
  GET /list/?q='data'
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `q`      | `string` | **Required**. Regex search to get the comapny list |

### Response

```js
data: [{
    _id: new ObjectId("62f675ab32a87ebba02016aa"),
    scriptName: 'NLBBL',
    bonusCapacity: 38,
    sector: 'Microfinance',
    netProfit: 233001870,
    paidupCapital: 600000000,
    __v: 0,
    createdAt: 2022-08-12T15:45:47.147Z,
    updatedAt: 2022-08-12T15:45:47.147Z
  },
   {
    _id: new ObjectId("62f675ab32a87ebba02016a6"),
    scriptName: 'MKLB',
    bonusCapacity: 13,
    sector: 'Microfinance',
    netProfit: 19180640,
    paidupCapital: 141745500,
    __v: 0,
    createdAt: 2022-08-12T15:45:47.147Z,
    updatedAt: 2022-08-12T15:45:47.147Z
  },
  {
    _id: new ObjectId("62f68ba0d4e8793ffe0e996a"),
    scriptName: 'LBBL',
    bonusCapacity: 14,
    sector: 'Development Banks',
    netProfit: 675632110,
    paidupCapital: 3284292510,
    __v: 0,
    createdAt: 2022-08-12T17:19:28.335Z,
    updatedAt: 2022-08-12T17:19:28.335Z
  },
]
```

## Installation

Install my-project with yarn

## Feedback

If you have any feedback, please reach out at arjunadhikari0509@gmail.com

## Run Locally

Clone the project

```bash
  git clone https://link-to-project
```

Go to the project directory

```bash
  cd demo-fast
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn run dev
```
