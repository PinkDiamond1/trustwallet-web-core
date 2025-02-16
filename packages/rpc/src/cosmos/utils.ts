import BigNumber from 'bignumber.js';

export class Utils {
    static toAtom(microatom: BigNumber): BigNumber {
        const denominator = new BigNumber(1000000);
        return microatom.dividedBy(denominator);
    }
}