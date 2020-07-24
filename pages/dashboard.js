import ProtectedLayout from "../components/Layouts/ProtectedLayout/ProtectedLayout";
import EventCard from "../components/EventCard/EventCard";
import axios from "../lib/axios";
import { useState, useEffect } from "react";
import { Grid } from "../assets/styles/shared";

const Dashboard = () => {
  const [events, setEvents] = useState({
    status: "loading",
    data: [],
  });
  const [isGrid, setIsGrid] = useState(false);

  const toggleGridList = (status) => {
    setIsGrid(status);
    console.log(status);
  };

  const fetchEvents = () => {
    axios
      .get("./events")
      .then((result) => {
        setEvents({
          status: "done",
          data: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <ProtectedLayout>
      {events.status === "loading" ? (
        "Loading events"
      ) : (
        <>
          <div>
            <button type="button" onClick={() => toggleGridList(true)}>
              grid
            </button>
            <button type="button" onClick={() => toggleGridList(false)}>
              list
            </button>
          </div>
          <Grid isGrid={isGrid}>
            {events.data.map((event) => (
              <EventCard
                isGrid={isGrid}
                key={event.id}
                date={event.startsAt}
                title={event.title}
                owner={event.owner}
                description={event.description}
                attendeesCount={event.attendees.length}
                attendees={event.attendees}
                capacity={event.capacity}
              />
            ))}
          </Grid>
        </>
      )}
    </ProtectedLayout>
  );
};

export default Dashboard;
