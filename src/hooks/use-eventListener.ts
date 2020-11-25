import { useEffect, useRef, MutableRefObject } from "react";

export default function useEventListener({
  eventName,
  handler,
  element = window
}: {
  eventName: string;
  handler: any;
  element?: Window | Document;
}): void {
  const savedHandler: MutableRefObject<any> = useRef();

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    const isSupported: any = element && element.addEventListener;
    if (!isSupported) {
      return;
    }

    const eventListener = (event: any) => savedHandler.current(event);
    element.addEventListener(eventName, eventListener);
    return () => {
      element.removeEventListener(eventName, eventListener);
    };
  }, [eventName, element]);
}
