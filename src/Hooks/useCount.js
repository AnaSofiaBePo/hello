import { useState } from "react";

const useCount = () => {
    const [count, setcount] = useState(0);

    const handleadd = () => {
        setcount(count + 1);
    };

    const handlesust = () => (count !== 0 ? setcount(count - 1) : count);

    handleadd();
    handlesust();
    return count;
};

export default useCount;
