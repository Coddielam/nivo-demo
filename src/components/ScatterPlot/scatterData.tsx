interface ICoordinate {
  id: any,
  x: any,
  y: any,
  z?: any,
}
interface IDataFormat {
  id: string | number,
  data: ICoordinate[]
}

const fakeMemberPurchaseHistData: IDataFormat[] = [
  {
    id: 'banana',
    data: [
      { id: 0, x: 0, y: 2.0 },
      { id: 1, x: 1, y: 2.1 },
      { id: 2, x: 2, y: 2.3 },
      { id: 3, x: 3, y: 2.5 },
      { id: 4, x: 4, y: 2.7 },
      { id: 5, x: 5, y: 2.9 },
      { id: 6, x: 6, y: 3.0 },
      { id: 7, x: 7, y: 3.2 },
      { id: 8, x: 8, y: 3.3 },
      { id: 9, x: 9, y: 3.5 },
      { id: 10, x: 10, y: 3.6 },
      { id: 11, x: 11, y: 3.8 },
      { id: 12, x: 12, y: 3.9 },
      { id: 13, x: 13, y: 4.0 },
    ]
  }
]


export { fakeMemberPurchaseHistData };
export type { IDataFormat };
