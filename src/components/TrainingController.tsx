import { FormEvent, useState } from "react";
import Data from "../interfaces/DataInterface";

const TrainingController = ({ setData }: {setData: Function}): JSX.Element => {
  const [form, setForm] = useState({
    date: "",
    distance: 0,
    timestamp: 0,
  });

  const checkDouble = (data: Array<Data>) => {
    const res = [...data];

    const double = res.findIndex((item) => item.date === form.date);

    if (double !== -1) {
      const distance = +data[double].distance;
      data[double].distance = distance + +form.distance;
    } else {
      res.push(form);
    }

    res.sort((a, b) => a.timestamp - b.timestamp);
    return res;
  };

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!form.date || !form.distance) return;

    setData((data: Array<Data>) => checkDouble(data));
    setForm({
      date: "",
      distance: 0,
      timestamp: 0,
    });
  };

  const onChange = ({ target: { name, value } }: {target: {name: string, value: string}}) => {
    let timestamp = form.timestamp;
    if (name === "date") {
      timestamp = Date.parse(value);
    }

    setForm({
      ...form,
      [name]: value,
      timestamp,
    });
  };

  return (
    <>
      <div className="controls">
        <form action="" onSubmit={onSubmit} className="controls-form">
          <div className="date">
            <label htmlFor="date">Дата (ДД.ММ.ГГГГ)</label>
            <input
              value={form.date}
              name="date"
              type="date"
              onChange={onChange}
            />
          </div>
          <div className="distance">
            <label htmlFor="distance">Пройдено КМ.</label>
            <input value={form.distance} name="distance" onChange={onChange} />
          </div>
          <button id="submit" type="submit">
            OK
          </button>
        </form>
      </div>
    </>
  );
};

export default TrainingController;
