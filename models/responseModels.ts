export interface ResponseInterface {
  status: number;
  statusText: string;
  data: {
    message: string;
    success: any;
    meta: any;
    code: number;
  };
}

export interface ResponseWrapperInterface {
  data: object;
  success: any;
  status: number;
  statusMessage: string;
  message: string | null;
}