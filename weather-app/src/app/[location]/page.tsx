import { getForcecast } from "@/utils/getForcecast";
import HomeButton from "../components/HomeButton";

type Props = {
  params: {
    location: string;
  };
};

export default async function Detail({ params }: Props) {
  const name = params.location === "seoul" ? "서울" : "";
  const res = await getForcecast(params.location);

  return (
    <>
      <h1>{name}의 3일 예고</h1>
      <ul>
        {res.forecast.forecastday.map((day) => (
          <li key={day.date}>
            {day.date}/{day.day.avgtemp_c}
          </li>
        ))}
      </ul>
      <HomeButton />
    </>
  );
}
