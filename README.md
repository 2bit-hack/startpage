# StartPage

![screenshot1](https://github.com/2bit-hack/startpage/blob/main/images/img1.png)

A simple startpage that uses [OpenWeatherMap](https://openweathermap.org/) to display the weather, [NewsAPI](https://newsapi.org/) to display the news, and [Official Joke API](https://official-joke-api.appspot.com/) to show a random joke. It also displays the current date and time, and some useful quick links, which are configurable.

## Usage

### Get the source

```
git clone https://github.com/2bit-hack/startpage.git
cd startpage
```

### Setup environment

Rename `.env.local.example` to `.env.local`
Obtain API keys from [OpenWeatherMap](https://openweathermap.org/) and [NewsAPI](https://newsapi.org/)
Replace `YOUR_API_KEY_HERE` with the appropriate values in `.env.local`

### Install dependencies and run in development

```
yarn
yarn dev
```
