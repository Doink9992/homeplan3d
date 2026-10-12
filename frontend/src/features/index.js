import { WeatherFeature } from "./weather.js";
import { ScreensFeature } from "./screens.js";
import { SoundFeature } from "./sound.js";
import { EnergyFeature } from "./energy.js";
import { CarFeature } from "./car.js";

/** All features, in toolbar order (features without a toggle simply never report `available()`). */
export function createFeatures(view) {
  return [new WeatherFeature(view), new EnergyFeature(view), new SoundFeature(view), new CarFeature(view), new ScreensFeature(view)];
}
