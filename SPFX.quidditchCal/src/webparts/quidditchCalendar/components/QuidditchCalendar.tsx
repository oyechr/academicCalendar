import * as React from "react";
import styles from "./QuidditchCalendar.module.scss";
import type { IQuidditchCalendarProps } from "./IQuidditchCalendarProps";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { OverlayTrigger, Popover } from "react-bootstrap";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "bootstrap/dist/css/bootstrap.min.css";
interface IQuidditchCalendarState {
  events: { title: string; start: Date; end: Date; location: string }[];
  selectedDate: Date | undefined;
}
const localizer = momentLocalizer(moment);

export default class QuidditchCalendar extends React.Component<
  IQuidditchCalendarProps,
  IQuidditchCalendarState
> {
  constructor(props: IQuidditchCalendarProps) {
    super(props);

    this.state = {
      events: [
        {
          title: "Quidditch Practice",
          start: new Date(2025, 9, 15),
          end: new Date(2025, 9, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Quidditch Tryouts",
          start: new Date(2025, 8, 1),
          end: new Date(2025, 8, 1),
          location: "Quidditch Pitch",
        },
        {
          title: "Quidditch Practice (Slytherin)",
          start: new Date(2025, 1, 15),
          end: new Date(2025, 1, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Welcome Feast",
          start: new Date(2025, 0, 24),
          end: new Date(2025, 0, 24),
          location: "Great Hall",
        },
        {
          title: "Quidditch Practice (Gryffindor)",
          start: new Date(2025, 1, 22),
          end: new Date(2025, 1, 22),
          location: "Quidditch Pitch",
        },
        {
          title: "Quidditch Practice (Hufllepuff)",
          start: new Date(2025, 3, 1),
          end: new Date(2025, 3, 1),
          location: "Quidditch Pitch",
        },
        {
          title: "Quidditch Practice (Ravenclaw)",
          start: new Date(2025, 3, 8),
          end: new Date(2025, 3, 8),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Slytherin",
          start: new Date(2025, 8, 15),
          end: new Date(2025, 8, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Hufflepuff vs Ravenclaw",
          start: new Date(2025, 8, 17),
          end: new Date(2025, 8, 17),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Hufflepuff",
          start: new Date(2025, 3, 15),
          end: new Date(2025, 3, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Slytherin vs Ravenclaw",
          start: new Date(2025, 4, 15),
          end: new Date(2025, 4, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Ravenclaw",
          start: new Date(2025, 3, 15),
          end: new Date(2025, 3, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Slytherin vs Hufflepuff",
          start: new Date(2025, 4, 15),
          end: new Date(2025, 4, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Slytherin",
          start: new Date(2025, 7, 15),
          end: new Date(2025, 7, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Hufflepuff vs Ravenclaw",
          start: new Date(2025, 8, 15),
          end: new Date(2025, 8, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Hufflepuff",
          start: new Date(2025, 9, 15),
          end: new Date(2025, 9, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Slytherin vs Ravenclaw",
          start: new Date(2025, 10, 15),
          end: new Date(2025, 10, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Gryffindor vs Ravenclaw",
          start: new Date(2025, 11, 15),
          end: new Date(2025, 11, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Slytherin vs Hufflepuff",
          start: new Date(2025, 12, 15),
          end: new Date(2025, 12, 15),
          location: "Quidditch Pitch",
        },
        {
          title: "Semester Start",
          start: new Date(2025, 0, 15),
          end: new Date(2025, 0, 15),
          location: "Hogwarts School of Witchcraft and Wizardry",
        },
        {
          title: "Registration Deadline",
          start: new Date(2025, 0, 22),
          end: new Date(2025, 0, 22),
          location: "Hogwarts School of Witchcraft and Wizardry",
        },
        {
          title: "Add/Drop Deadline",
          start: new Date(2025, 1, 5),
          end: new Date(2025, 1, 5),
          location: "Registrar Office",
        },
        {
          title: "Midterm Exams",
          start: new Date(2025, 2, 16),
          end: new Date(2025, 2, 21),
          location: "Various Locations",
        },
        {
          title: "Fall Break",
          start: new Date(2025, 3, 5),
          end: new Date(2025, 3, 9),
          location: "N/A",
        },
        {
          title: "Thanksgiving Break",
          start: new Date(2025, 10, 25),
          end: new Date(2025, 10, 29),
          location: "N/A",
        },
        {
          title: "Final Exams",
          start: new Date(2025, 11, 10),
          end: new Date(2025, 11, 20),
          location: "Various Locations",
        },
        {
          title: "End of Semester Celebration",
          start: new Date(2025, 11, 20, 18, 0, 0),
          end: new Date(2025, 11, 20, 23, 59, 59),
          location: "Main Hall",
        },
        {
          title: "Semester End",
          start: new Date(2025, 11, 21),
          end: new Date(2025, 11, 21),
          location: "Main Hall",
        },
        {
          title: "Orientation Week",
          start: new Date(2025, 0, 8),
          end: new Date(2025, 0, 12),
          location: "Campus Grounds",
        },
        {
          title: "Career Fair",
          start: new Date(2025, 2, 5),
          end: new Date(2025, 2, 5),
          location: "Main Hall",
        },
        {
          title: "Summer Break",
          start: new Date(2025, 5, 1),
          end: new Date(2025, 6, 31),
          location: "N/A",
        },
      ],
      selectedDate: undefined,
    };
  }

  public render(): React.ReactElement<IQuidditchCalendarProps> {
    const { events } = this.state;

    return (
      <div className={styles.quidditchCalendar}>
        <h2 >Hogwarts Academic Calendar</h2>
        <Calendar
          localizer={localizer}
          selectable={true}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          components={{
            event: ({ event }) => (
              <OverlayTrigger
                trigger="click"
                placement="right"
                overlay={
                  <Popover id="popover-basic">
                    <Popover.Header as="h3">{event.title}</Popover.Header>
                    <Popover.Body>
                      <p>
                        <strong>Start:</strong> {event.start.toString()}
                      </p>
                      <p>
                        <strong>End:</strong> {event.end.toString()}
                      </p>
                      <p>
                        <strong>Location:</strong> {event.location}
                      </p>
                    </Popover.Body>
                  </Popover>
                }
              >
                <div>{event.title}</div>
              </OverlayTrigger>
            ),
          }}
        />
      </div>
    );
  }
}
