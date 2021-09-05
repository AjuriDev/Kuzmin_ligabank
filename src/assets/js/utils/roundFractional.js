import { CURRENCY_DECIMAL } from "../const";

export default (value, decimal = CURRENCY_DECIMAL) => {
    return Math.round(value * decimal) / decimal;
}