import { MdTerrain } from "react-icons/md";
import { TiWeatherSnow } from "react-icons/ti";

const SkiDayRow = ({ resort,
  date,
  powder,
  backcountry }) => (
    <tr>
      <td>{`${ date.getMonth() + 1 }/${ date.getDate() } / ${ date.getFullYear() }`}</td>
      <td>
        {resort}
      </td>
      <td>
        {powder && <TiWeatherSnow />}
      </td>
      <td>
        {backcountry && < MdTerrain />}
      </td>
    </tr>
  )

export default SkiDayRow;
