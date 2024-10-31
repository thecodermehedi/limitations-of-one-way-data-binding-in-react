// import { useState } from 'react';

import { useState } from 'react';
import Child from './Child';

function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-indigo-700 p-32">
      count: {count}
      <Child count={count} setCount={setCount} />
    </div>
  );
}

export default Parent;
