import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import { fetchWeatherApi } from 'openmeteo';
import cors from 'cors';

const url = 'https://api.open-meteo.com/v1/forecast';

const appRouter = router({
  getWeather: publicProcedure.query(async () => {
    const params = {
      latitude: -42,
      longitude: 174,
      current: ['rain', 'weather_code', 'cloud_cover'],
      timezone: 'Pacific/Auckland',
    };

    const weathers = await fetchWeatherApi(url, params);
    const weather = weathers[0];
    const current = weather.current();
    const weatherData = {
      current: {
        weatherCode: current?.variables(1)?.value(),
      },
    };

    console.log('weatherData', weatherData);

    return weatherData;
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);
