import { createHTTPServer } from '@trpc/server/adapters/standalone';
import { publicProcedure, router } from './trpc';
import { fetchWeatherApi } from 'openmeteo';
import cors from 'cors';

const url = 'https://api.open-meteo.com/v1/forecast';

const appRouter = router({
  getWeather: publicProcedure.query(async () => {
    const params = {
      latitude: 52.52,
      longitude: 13.41,
      current: 'weather_code',
      hourly: ['temperature_2m', 'weather_code'],
    };

    const weather = await fetchWeatherApi(url, params);
    return weather[0];
  }),
});

export type AppRouter = typeof appRouter;

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter,
});

server.listen(3000);
