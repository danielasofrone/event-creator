import PropTypes from "prop-types";
import * as S from "./eventCard.styled";
import userIcon from "../../assets/img/icon-user.svg";
import Button from "../Button/Button";
import moment from "moment";
import { eventIsJoinable, isOwner, isJoined } from "../../utils/shared";

const EventCard = ({
  date,
  title,
  description,
  capacity,
  attendeesCount,
  owner,
  attendees,
  isGrid,
}) => (
  <S.CardWrapper isGrid={isGrid}>
    <S.TopContainer isGrid={isGrid}>
      <S.EventDate>{moment(date).format("MMMM D, YYYY - h:mm A")}</S.EventDate>
      <S.EventTitle>{title}</S.EventTitle>
      <S.EventAuthor>
        {owner.firstName} {owner.lastName}
      </S.EventAuthor>
      <S.EventDescription>{description}</S.EventDescription>
    </S.TopContainer>
    <S.BottomContainer isGrid={isGrid}>
      <S.AttendeesCount>
        {isGrid && <img src={userIcon} alt="Attendees count" />}
        {attendeesCount} of {capacity}
      </S.AttendeesCount>
      <Button
        small
        editable={isOwner(owner)}
        disabled={!eventIsJoinable(date) && !isOwner(owner)}
        active={isJoined(attendees) && eventIsJoinable(date)}
      >
        {isOwner(owner) ? (
          "Edit"
        ) : (
          <>
            {" "}
            {!eventIsJoinable(date) ? (
              "Past"
            ) : (
              <>{isJoined(attendees) ? "Leave" : "Join"}</>
            )}
          </>
        )}
      </Button>
    </S.BottomContainer>
  </S.CardWrapper>
);

EventCard.defaultProps = {
  small: false,
  active: false,
};

EventCard.propTypes = {
  isGrid: PropTypes.bool,
  attendees: PropTypes.array.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  owner: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  capacity: PropTypes.number.isRequired,
  attendeesCount: PropTypes.number.isRequired,
};

export default EventCard;
