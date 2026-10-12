import { WeatherFeature } from "./weather.js";
import { ScreensFeature } from "./screens.js";
import { SoundFeature } from "./sound.js";
import { EnergyFeature } from "./energy.js";
import { CarFeature } from "./car.js";
import { CameraFeature } from "./cameras.js";
import { WasteFeature } from "./waste.js";
import { ParkedFeature } from "./parked.js";
import { GatesFeature } from "./gates.js";

/** All features, in toolbar order (features without a toggle simply never report `available()`). */
export function createFeatures(view) {
  return [new WeatherFeature(view), new EnergyFeature(view), new SoundFeature(view), new CarFeature(view), new CameraFeature(view), new WasteFeature(view), new ParkedFeature(view), new GatesFeature(view), new ScreensFeature(view)];
}
