import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import { createPortal } from "react-dom";
import BitmapEditor from "./BitmapEditor";
const MATRIX_SIZE = 16; // TODO matrix should be configurable should only recreate test arrays if size changes

const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;
const Card = styled.div`
  background: white;
  border-radius: 4px;
  box-shadow: 0 5px 10px 0 hsl(0deg 0% 78% / 20%);
  margin: 6px;
  padding: 6px;
`;
function ClientOnlyPortal({ children, selector }) {
  const ref = useRef();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector(selector);
    setMounted(true);
  }, [selector]);

  return mounted ? createPortal(children, ref.current) : null;
}

const CalendarCellEditorModal = ({ onBuyClick, day }) => {
  const [showModal, setShowModal] = useState(false);
  const [bitmap, setBitmap] = useState();
  return (
    <>
      <div
        className="cell"
        onClick={() => {
          setShowModal(true);
        }}
      >
        {day}
      </div>
      {showModal && (
        <ClientOnlyPortal selector="#modal">
          <Backdrop onClick={() => setShowModal(false)}>
            <Card onClick={e => e.stopPropagation()}>
              <BitmapEditor onChange={setBitmap}>
                <button onClick={() => onBuyClick(bitmap)}>Buy</button>
              </BitmapEditor>
            </Card>
          </Backdrop>
        </ClientOnlyPortal>
      )}
    </>
  );
};

const Pixel = styled.div`
  width: 6px;
  height: 6px;
  line-height: 6px;
  border-right: ${(props) =>
    props.isGridVisible
      ? `1px dotted ${BORDER_COLOR}`
      : "1px solid transparent"};
  border-bottom: ${(props) =>
    props.isGridVisible
      ? `1px dotted ${BORDER_COLOR}`
      : "1px solid transparent"};
  background-color: ${(props) => props.backgroundColor};
`;
function chunk(arr, len) {
  var chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}
const Number = styled.span`
position: absolute;
background-color: rgba(255, 255, 255, .7);
`

const CalendarCell = ({ month, day, year, web3, onClick }) => {
  const [owner, setOwner] = useState();
  const [bitmap, setBitmap] = useState();
  useEffect(async () => {
    const res = await web3?.dateOwners(`${month}/${day}/${year}`);
    if (res?.owner) {
      setOwner(res.owner);
      const bitmapData = res.bitmapData.match(/.{1,3}/g);
      if (bitmapData?.length) {
        setBitmap(chunk(bitmapData, MATRIX_SIZE));
      }
    }
  }, [month, day, year, web3]); // TODO figure out how to rerun this effect when tx is complete for cell that was bought
  if (owner !== "0x0000000000000000000000000000000000000000") {
    if (bitmap) {
      console.log(bitmap);
      return (
        <div className="cell" onClick={() => alert(`Owned by ${owner}`)}>
          <Number>        {day}
</Number>
            {bitmap.map((_, row) =>
                      <Flex>

              {bitmap[row].map((value, column) => (
                <Pixel
                  key={`${row} - ${column}`}
                  backgroundColor={`#${bitmap[row][column]}` || "transparent"}
                />
              ))}
              </Flex>

            )}
        </div>
      );
    }
    return (
      <div className="cell" onClick={() => alert(`Owned by ${owner}`)}>
        {day}
        <Dot />
      </div>
    );
  }
  return <CalendarCellEditorModal onBuyClick={onClick} day={day} />;
};

const Flex = styled.div`
  display: flex;
`
const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-width: 800px;
  .cell {
    flex-grow: 1;
    width: calc(100% / 7 - 7px);
    height: 110px;
    border: 1px solid #666;
    position: relative;
  }
`;

const Dot = styled.div`
  display: block;
  width: 6px;
  height: 6px;
  background-color: red;
  border-radius: 100%;
`;

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
          onClick={(bitmap) => {
            const strDate = `${month}/${day}/${year}`;
            console.log(strDate);
            console.log(new Date(strDate).toString());
            onDateClick(month, day, year, bitmap);
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
          onClick={(bitmap) => {
            const strDate = `${month}/${day}/${year}`;
            console.log(strDate);
            console.log(new Date(strDate).toString());
            onDateClick(month, day, year, bitmap);
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
          onClick={(bitmap) => {
            const strDate = `${month}/${day}/${year}`;
            console.log(strDate);
            console.log(new Date(strDate).toString());
            onDateClick(month, day, year, bitmap);
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
            &lt; prev &lt;
          </button>
          &nbsp;
          <button
            onClick={() => {
              setNow(new Date());
            }}
          >
            Today
          </button>
          &nbsp;
          <button
            onClick={() => {
              const newDate = new Date(now);
              newDate.setMonth(newDate.getMonth() + 1);
              setNow(newDate);
            }}
          >
            &gt; next &gt;
          </button>
        </div>
      </Flex>

      <Grid>{days}</Grid>
    </div>
  );
};

export default Calendar;
