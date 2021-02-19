/* eslint-disable object-curly-newline */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
import React, { useEffect, useMemo, useRef, useState } from 'react';

export type LineProps = {
  fromAnchor: string;
  toAnchor: string;
  from: string;
  to: string;
  delay?: string;
  within?: string
}

// eslint-disable-next-line object-curly-spacing
const defaultAnchor = {
  x: 0.5,
  y: 0.5
};

const LineTo: React.FC<LineProps> = ({ ...props }) => {

  const [
    fromAnchor, setFromAnchor
  ] = useState<any>();
  const [
    toAnchor, setToAnchor
  ] = useState<any>();

  useEffect(() => {
    setFromAnchor(parseAnchor(props.fromAnchor));
    setToAnchor(parseAnchor(props.toAnchor));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    props.delay, props.fromAnchor, props.toAnchor
  ]);

  const parseAnchorPercent = (value: any) => {
    const percent = parseFloat(value) / 100;
    if (isNaN(percent) || !isFinite(percent)) {
      throw new Error(`LinkTo could not parse percent value "${value}"`);
    }
    return percent;
  };

  const parseAnchorText = (value: any) => {
    // Try to infer the relevant axis.
    // eslint-disable-next-line default-case
    switch (value) {
      case 'top':
        return { y: 0 };
      case 'left':
        return { x: 0 };
      case 'middle':
        return { y: 0.5 };
      case 'center':
        return { x: 0.5 };
      case 'bottom':
        return { y: 1 };
      case 'right':
        return { x: 1 };
    }
    return null;
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const parseAnchor = (value: any) => {
    if (!value) {
      return defaultAnchor;
    }
    const parts = value.split(' ');
    if (parts.length > 2) {
      throw new Error('LinkTo anchor format is "<x> <y>"');
    }
    const [
      x, y
    ] = parts;

    return Object.assign({}, defaultAnchor,
      x ? parseAnchorText(x) || { x: parseAnchorPercent(x) } : {},
      y ? parseAnchorText(y) || { y: parseAnchorPercent(y) } : {}
    );
  };

  const findElement = (className: any) => {
    return document.getElementsByClassName(className)[0];
  };

  const detect = useMemo(() => {
    const {
      from, to, within = ''
    } = props;

    const a = findElement(from);
    const b = findElement(to);

    if (!a || !b) {
      return false;
    }

    const anchor0 = fromAnchor;
    const anchor1 = toAnchor;

    const box0 = a.getBoundingClientRect();
    const box1 = b.getBoundingClientRect();

    let offsetX = window.pageXOffset;
    let offsetY = window.pageYOffset;

    if (within) {
      const p = findElement(within);
      const boxp = p.getBoundingClientRect();

      offsetX -= boxp.left + (window.pageXOffset || document.documentElement.scrollLeft) - p.scrollLeft;
      offsetY -= boxp.top + (window.pageYOffset || document.documentElement.scrollTop) - p.scrollTop;
    }

    const x0 = box0.left + box0.width * anchor0.x + offsetX;
    const x1 = box1.left + box1.width * anchor1.x + offsetX;
    const y0 = box0.top + box0.height * anchor0.y + offsetY;
    const y1 = box1.top + box1.height * anchor1.y + offsetY;

    return {
      x0,
      y0,
      x1,
      y1
    };
  }, [
    fromAnchor, props, toAnchor
  ]);

  return detect ? (
    <Line {...detect} {...props} />
  ) : null;
};

type PositionStyle = {
  position: 'absolute' | '-moz-initial' | 'inherit' | 'initial' | 'revert' | 'unset' | '-webkit-sticky' | 'fixed' | 'relative' | 'static' | 'sticky' | undefined,
  top: any,
  left: string,
  width: string,
  transform: string,
  transformOrigin: string,
  zIndex: number
};

export const Line: React.FC<any> = ({ ...props }) => {
  const findElement = (className: any) => {
    return document.getElementsByClassName(className)[0];
  };

  const defaultBorderStyle = 'solid';
  const defaultBorderWidth = 1;

  const {
    x0, y0, x1, y1
  } = props;

  const within = useMemo<any>(() => {
    return props.within ? findElement(props.within) : document.body;
  }, [
    props.within
  ]);

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    within.appendChild(ref.current);
  }, [
    within
  ]);

  const dy = y1 - y0;
  const dx = x1 - x0;

  const angle = Math.atan2(dy, dx) * 180 / Math.PI;
  const length = Math.sqrt(dx * dx + dy * dy);

  const positionStyle: PositionStyle = {
    position: 'absolute',
    top: `${y0}px`,
    left: `${x0}px`,
    width: `${length}px`,
    transform: `rotate(${angle}deg)`,
    transformOrigin: '0 0',
    zIndex: 100
  };

  const defaultStyle = {
    borderTopColor: '#869298',
    borderTopStyle: props.borderStyle || defaultBorderStyle,
    borderTopWidth: props.borderWidth || defaultBorderWidth,
  };

  const prop = {
    className: props.className,
    style: {
      ...defaultStyle,
      ...positionStyle
    },
  };

  return (
    <div className="react-lineto-placeholder">
      <div
        ref={(el) => {
          ref.current = el;
        }}
        {...prop}
      />
    </div>
  );
};

export default React.memo(LineTo);