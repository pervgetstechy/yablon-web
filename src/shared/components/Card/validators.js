import { suits, values, sizes } from './index';

export const valuePropValidator = (props, propName) => {
  if (props['reveal'] && (props[propName] === undefined || values.indexOf(props[propName]) === -1)) {
    return new Error(`Invalid prop [${propName}] value.`);
  }
}

export const suitPropValidator = (props, propName) => {
  if (props['reveal'] && (props[propName] === undefined || suits.indexOf(props[propName]) === -1)) {
    return new Error(`Invalid prop [${propName}] value.`);
  }
}

export const sizePropValidator = (props, propName) => {
  if (sizes.indexOf(props[propName]) === -1) {
    return new Error(`Invalid prop [${propName}] value.`);
  }
}
