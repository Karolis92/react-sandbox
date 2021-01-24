import { ReactNode, useEffect, useState } from "react";

const Delayed = (props: { delay?: number, children: ReactNode }) => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShow(true), props.delay || 2000);
        return () => clearTimeout(timer);
    }, []);

    return show ? <>{props.children}</> : <p>Wait for it...</p>;
};

export default Delayed;
