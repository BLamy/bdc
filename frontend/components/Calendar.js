import { useEffect, useState } from "react";
import styled from "styled-components";

const CalendarCellEditorModal = ({ onBuyClick, day }) => {
  return <div className="cell" onClick={onBuyClick}>{day}</div>;
}

const CalendarCell = ({ month, day, year, web3, onClick }) => {
  const [owner, setOwner] = useState();
  useEffect(async () => {
    const res = await web3?.dateOwners(`${month}/${day}/${year}`);
    if (res?.owner) {
      setOwner(res.owner);
    }
  }, [month, day, year, web3]); // TODO figure out how to rerun this effect when tx is complete for cell that was bought
  if (owner !== "0x0000000000000000000000000000000000000000") {
    return <div className="cell" onClick={() => alert(`Owned by ${owner}`)}>{day}<Dot /></div>;
  }
  return <CalendarCellEditorModal onBuyClick={onClick} day={day} />
};

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;

  .cell {
    flex-grow: 1;
    width: calc(100% / 7);
    height: 100px;
  }
`;
const Dot = styled.div`
  display: block;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 100%;
`
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function daysInMonth(m, y) {
  if (m == 1) {
    return (y % 4 == 0 && y % 100 != 0) || y % 400 == 0 ? 29 : 28;
  }
  if (m == 3 || m == 5 || m == 8 || m == 10) {
    return 30;
  }
  return 31;
}



export const Calendar = ({ onDateClick, renderDayCell, web3 }) => {
  const [now, setNow] = useState(new Date());
  const daysThisMonth = daysInMonth(now.getMonth(), now.getFullYear());
  const daysLastMonth =
    now.getMonth() === 0
      ? daysInMonth(now.getMonth() - 1, now.getFullYear() - 1)
      : daysInMonth(now.getMonth() - 1, now.getFullYear());
  const dayOfWeekStart = new Date(
    `${now.getMonth() + 1}/1/${now.getFullYear()}`
  ).getDay();
  const remainderDays = 7 - ((daysThisMonth + dayOfWeekStart) % 7);

  let days = [];
  for (let i = 1; i <= daysThisMonth + dayOfWeekStart + remainderDays; i++) {
    let date = i - dayOfWeekStart;
    if (date > daysThisMonth) {
      const day = i - (daysThisMonth + dayOfWeekStart);
      let month = now.getMonth() + 2;
      let year = now.getFullYear();
      if (month > 11) {
        year++;
        month = 1;
      }
      days.push(
          <CalendarCell
            onClick={() => {
              const strDate = `${month}/${day}/${year}`;
              console.log(strDate);
              console.log(new Date(strDate).toString());
              onDateClick({ month, day, year });
            }}
            {...{ month, day, year, web3 }}
          />
      );
    } else if (date > 0) {
      const month = now.getMonth() + 1;
      const day = date;
      const year = now.getFullYear();
      days.push(
          <CalendarCell
            onClick={() => {
              const strDate = `${month}/${day}/${year}`;
              console.log(strDate);
              console.log(new Date(strDate).toString());
              onDateClick(month, day, year);
            }}
            {...{ month, day, year, web3 }}
          />
      );
    } else {
      let month = now.getMonth();
      const day = daysLastMonth - (dayOfWeekStart - i);
      let year = now.getFullYear();
      if (month === 0) {
        year--;
        month = 12;
      }
      days.push(
          <CalendarCell
            onClick={() => {
              const strDate = `${month}/${day}/${year}`;
              console.log(strDate);
              console.log(new Date(strDate).toString());
              onDateClick(month, day, year);
            }}
            {...{ month, day, year, web3 }}
          />
      );
    }
  }
  return (
    <div>
      <Flex>
        <h1 style={{ flex: 1 }}>
          {monthNames[now.getMonth()]} {now.getFullYear()}
        </h1>
        <div style={{ flex: 1 }} />
        <div>
          <button
            onClick={() => {
              const newDate = new Date(now);
              newDate.setMonth(newDate.getMonth() - 1);
              setNow(newDate);
            }}
          >
            prev
          </button>
          <button
            onClick={() => {
              setNow(new Date());
            }}
          >
            Today
          </button>
          <button
            onClick={() => {
              const newDate = new Date(now);
              newDate.setMonth(newDate.getMonth() + 1);
              setNow(newDate);
            }}
          >
            next
          </button>
        </div>
      </Flex>

      <Flex>{days}</Flex>
    </div>
  );
};

export default Calendar;
