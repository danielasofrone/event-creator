import Link from "next/Link";

const Dashboard = () => (
  <h1>
    Dashboard /{" "}
    <Link href='/'>
      <a>Home</a>
    </Link>{" "}
  </h1>
);

export default Dashboard;
