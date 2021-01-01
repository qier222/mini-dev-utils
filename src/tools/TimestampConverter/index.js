import React, { useState, useEffect } from "react";
import clsx from "clsx";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import dayOfYear from "dayjs/plugin/dayOfYear";
import isoWeek from "dayjs/plugin/isoWeek";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";

import { InputGroup } from "@/components/InputGroup";

export function TimestampConverter() {
  dayjs.extend(utc);
  dayjs.extend(dayOfYear);
  dayjs.extend(isoWeek);
  dayjs.extend(relativeTime);
  dayjs.extend(customParseFormat);

  const [date, setDate] = useState(dayjs());
  const [isUnixTime, setIsUnixTime] = useState(true);
  const [humanDate, setHumanDate] = useState(
    date.format("YYYY-MM-DD HH:mm:ss")
  );
  const [isHumanDateValid, setIsHumanDateValid] = useState(true);

  const changeTimestamp = (e) => {
    let timestamp = Number(e.target.value.replace(/\D/g, ""));
    if (isUnixTime) timestamp = timestamp * 1000;
    setDate(dayjs(timestamp));
    setHumanDate(dayjs(timestamp).format("YYYY-MM-DD HH:mm:ss"));
  };

  const changeHumanDate = (e) => {
    setHumanDate(e.target.value);
    const newTime = dayjs(e.target.value, "YYYY-MM-DD HH:mm:ss");
    if (newTime.isValid()) {
      setDate(newTime);
      setIsHumanDateValid(true);
    } else {
      setIsHumanDateValid(false);
    }
  };

  return (
    <div id="timestampConverter">
      <h1 className="text-2xl	my-5 font-bold text-gray-900">
        Timestamp Converter
      </h1>
      <div>
        <div className="grid gap-x-5 grid-cols-2 grid-rows-1">
          <InputGroup
            title="Timestamp"
            value={isUnixTime ? date.unix() : date.valueOf()}
            valueOnChange={changeTimestamp}
            enableSelect={true}
            selectOptions={["sec", "msec"]}
            selectValue={isUnixTime ? "sec" : "msec"}
            selectOnChange={(e) =>
              setIsUnixTime(e.target.value === "sec" ? true : false)
            }
          />
          <InputGroup
            title="Human Date"
            value={humanDate}
            valueOnChange={changeHumanDate}
            isValid={isHumanDateValid}
          />
        </div>
        <hr className="mt-6 mb-5"></hr>
        <div className="grid gap-5 grid-cols-2 grid-rows-1">
          <InputGroup
            title="UTC"
            value={date.utc().format()}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="From Now"
            value={date.fromNow()}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="Day of Year"
            value={date.dayOfYear()}
            isDisabled={true}
            enableCopyButton={true}
          />
          <InputGroup
            title="Week of Year"
            value={date.isoWeek()}
            isDisabled={true}
            enableCopyButton={true}
          />
        </div>
      </div>
    </div>
  );
}
