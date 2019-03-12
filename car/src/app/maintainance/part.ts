export class Part {
    constructor(
      public p_id:number,
      public  category: string,
      public  model: string,
      public price: number,
      public brand: string,
      public code: string,
      public manufactor: string,
      public color: string,
      public availability: string,
      public quantity: number ,
       // image:string,
       public m_id: number
    ){
    }
}
