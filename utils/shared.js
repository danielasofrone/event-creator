import jwt from "jwt-decode";
export const eventIsJoinable = (date) => {
  const incomingDate = new Date(date);

  const now = new Date();
  if (now < incomingDate) {
    return true;
  }
  return false;
};

export const isOwner = (owner) => {
  const token = localStorage.getItem("token");
  const decodedUser = jwt(token);

  if (owner.id === decodedUser.user.id) {
    return true;
  }
  return false;
};

export const isJoined = (attendees) => {
  const token = localStorage.getItem("token");
  const decodedUser = jwt(token);

  if (attendees.find((attendee) => attendee.id === decodedUser.user.id)) {
    return true;
  }
  return false;
};

export const getUserInitials = (owner) => {
  const token = localStorage.getItem("token");
  const decodedUser = jwt(token);
  const {
    user: { firstName, lastName },
  } = decodedUser;

  return `${firstName.split("")[0]}${lastName.split("")[0]}`;
};
