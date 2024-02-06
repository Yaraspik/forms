import React from "react";
import { useState } from "react";
import TrainingAdder from "./TrainingAdder";
import TrainingController from "./TrainingController";

const Training = (): JSX.Element => {
  const [data, setData] = useState([]);

  return (
    <>
      <div className="training">
        <TrainingController setData={setData} />
        <div className="training-history">
          <div className="date">Дата (ДД.ММ.ГГГГ)</div>
          <div className="distance">Пройдено км.</div>
          <div className="actions">Действия</div>
          {data.map((item, index) => (
            <TrainingAdder data={item} key={index} setData={setData} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Training;
