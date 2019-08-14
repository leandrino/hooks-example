import { useState, useCallback, FunctionComponent } from "react";
import useEventListener from "../../hooks/use-eventListener";

interface IMouseCoordinates {
  x: number;
  y: number;
}

const UseEventListener: FunctionComponent = () => {
  const [coords, setCoords] = useState<IMouseCoordinates>({ x: 0, y: 0 });

  const handler: React.MouseEventHandler<IMouseCoordinates> = useCallback(
    ({ clientX, clientY }) => {
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );

  useEventListener({ eventName: "mousemove", handler });
  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
};

export default UseEventListener;
