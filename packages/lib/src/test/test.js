import  Types  from "../../types/types"
 
/** 
 * @param {Types.Transaction} transction - object with numbers
 * @returns  {Types.Invoice}
 */
export const getInvoice = (transction ={
    id:1,
    amount:10,
    date:new Date(),

}) => {

     /** @type {Types.Invoice} */
    const payload = {
        id:1,
        amount:10,
        transctions:[transction],
        service:"digital",
     }

     return payload
}


