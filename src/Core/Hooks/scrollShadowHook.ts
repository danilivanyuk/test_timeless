import { UIEvent, useState } from "react";

export function useScrollWithShadow() {
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollHeight, setScrollHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);
  
    const onScrollHandler = (event: UIEvent<HTMLDivElement>) => {
      setScrollTop(event.currentTarget.scrollTop);
      setScrollHeight(event.currentTarget.scrollHeight);
      setClientHeight(event.currentTarget.clientHeight);
    };
  
    function isShowShadow(): boolean {
      const isBottom = clientHeight === scrollHeight - scrollTop;
      const isTop = scrollTop === 0;
      const isBetween = scrollTop > 0 && clientHeight < scrollHeight - scrollTop;
      
      let shadow = false;
      if (isTop) {
        shadow = false;
      } else if (isBetween || isBottom) {
        shadow = true;
      }
      return shadow;
    }
  
    return { showShadow: isShowShadow(), onScrollHandler };
}