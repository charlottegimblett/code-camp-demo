import { faCloud, faCloudRain, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export type WeatherType = "sun" | "rain" | "cloud";

export const Weather = (props: WeatherType) => {
  switch (props) {
    case "sun":
      return <FontAwesomeIcon icon={faSun} color="#F2A007" />;
    case "rain":
      return <FontAwesomeIcon icon={faCloudRain} color="#ffffff" />;
    case "cloud":
      return <FontAwesomeIcon icon={faCloud} color="#4589CC" />;
  }
};