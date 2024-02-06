import Data from "../interfaces/DataInterface";

const TrainingAdder = ({
  data = { date: "", distance: 0 },
  setData,
}: { data: Data, setData: Function }): JSX.Element => {
  const removeData = () => {
    setData((ar: Array<Data>) => ar.filter((d: Data) => d.date !== data.date));
  };

  return (
    <>
      <div className="date">{data.date}</div>
      <div className="distance">{data.distance}</div>
      <div className="actions">
        <button className="edit">✎</button>
        <button className="remove" onClick={removeData}>
          ✗
        </button>
      </div>
    </>
  );
};

export default TrainingAdder;
