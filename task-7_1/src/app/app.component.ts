import { Component, OnDestroy } from '@angular/core';
import { ApiService } from './api.service';
import { LocationDto } from './domain/location';
import { Subscription, delay, finalize } from 'rxjs';
import { WeatherRootDto } from './domain/weather';
import { ImageResultDto } from './domain/image';
import { weatherMap } from './model/weather-map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

  public city: string | undefined = 'Самара';

  private location: LocationDto | null = null;
  public weather: weatherMap | null = null;
  public weatherImage: string | null = null;

  private getLocationSubs: Subscription | undefined;
  private getCityWeatherSubs: Subscription | undefined;
  private getWeatherImageSubs: Subscription | undefined;

  public isCityInfoLoading = false;
  public isCityWeatherLoading = false;
  public isWeatherImageLoading = false;

  public errorMsg: string | undefined;

  constructor(private api: ApiService) { }

  ngOnDestroy() {
    this.getLocationSubs?.unsubscribe();
    this.getCityWeatherSubs?.unsubscribe();
    this.getWeatherImageSubs?.unsubscribe();
  }

  public onStart() {
    if (!this.city) return;

    this.ngOnDestroy();

    this.isCityInfoLoading = true;
    this.errorMsg = undefined; // Сброс сообщения об ошибке

    this.getLocationSubs = this.api.getLocation(this.city)
      .pipe(
        delay(200),
        finalize(() => this.isCityInfoLoading = false))
      .subscribe({
        next: (next: LocationDto[]) => {
          console.log('getLocation', next);
          this.location = next[0];
          if (!this.location) {
            this.errorMsg = 'Информация о городе не найдена';
            this.location = null; // Сброс данных об местоположении
            this.weather = null; // Сброс данных о погоде
            this.weatherImage = null; // Сброс данных об изображении
          } else {
            this.updateWeather();
          }
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

  private updateWeather() {
    if (!this.location) return;

    this.isCityWeatherLoading = true;
    this.errorMsg = undefined; // Сброс сообщения об ошибке

    this.getCityWeatherSubs = this.api.getCityWeather(this.location.lat, this.location.lon)
      .pipe(
        delay(200),
        finalize(() => this.isCityWeatherLoading = false))
      .subscribe({
        next: (next: WeatherRootDto) => {
          console.log('getCityWeather', next);
          if (!next) {
            this.errorMsg = 'Информация о погоде не найдена';
            this.weather = null; // Сброс данных о погоде
            this.weatherImage = null; // Сброс данных об изображении
          } else {
            this.weather = {
              description: next.weather[0].description,
              temp: next.main.temp,
              feelsLike: next.main.feels_like,
              windSpeed: next.wind.speed,
              windDeg: next.wind.deg,
              humidity: next.main.humidity
            };
            this.updateImage();
          }
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

  private updateImage() {
    if (!this.weather) return;

    this.isWeatherImageLoading = true;
    this.errorMsg = undefined; // Сброс сообщения об ошибке

    this.getWeatherImageSubs = this.api.getImageByDescription(this.weather.description)
      .pipe(
        delay(200),
        finalize(() => this.isWeatherImageLoading = false))
      .subscribe({
        next: (next: ImageResultDto) => {
          console.log('getImageByDescription', next);
          if (!next) {
            this.errorMsg = 'Изображение не найдено';
            this.weatherImage = null; // Сброс данных об изображении
          } else {
            this.weatherImage = next.results[0].urls.small;
          }
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

}
