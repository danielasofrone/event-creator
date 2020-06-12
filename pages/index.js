import Link from "next/Link";

import { Title } from "../assets/styles/shared";

const Home = () => (
  <Title>
    Home /
    <Link href="/dashboard">
      <a>Dashboard</a>
    </Link>{" "}
  </Title>
);

export default Home;
