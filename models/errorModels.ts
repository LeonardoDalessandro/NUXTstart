export interface ErrorInterface {
  response: {
    status: number;
    statusText: string;
    data: {
      message: string;
      success: any;
      meta: any;
      code: number;
    };    
  }
  message: string;
}

export interface ErrorWrapperInterface {
  success:string;
  meta:string;
  code:number;
  status:number;
  statusMessage:string;
  message:string;
}