import ChildOfChild from './ChildOfChild';

type TProps = {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
};

const Child = ({ count, setCount }: TProps) => {
  return (
    <div className="border border-indigo-600 px-28 py-16 flex flex-col">
      <button
        className="border border-indigo-500 text-sm p-16 rounded"
        onClick={() => setCount((count) => count + 1)}
      >
        Count 👉 {count}
        <ChildOfChild count={count} />
      </button>
    </div>
  );
};

export default Child;
