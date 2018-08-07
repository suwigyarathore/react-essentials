import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";
import SkiDayRow from "./SkiDayRow";

const SkiDayList = ({ days }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Resort</th>
        <th>Powder</th>
        <th>BackCountry</th>
      </tr>
    </thead>
    <tbody>
      {days
        .map(((day, i) =>
          <SkiDayRow key={i}
            {...day}
          />
        ))
      }
    </tbody>
  </table>
)

export default SkiDayList;
