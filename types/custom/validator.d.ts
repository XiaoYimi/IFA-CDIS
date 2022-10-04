export declare interface IRuleFuncsObj {
  [key: string]: Function;
}

export declare interface IRule {
  rule: string;
  tip: string;
}

export declare interface IRuleFormData {
  value: string;
  rules: IRule[];
}

export declare interface IRuleCheckedRes {
  checked: boolean;
  message: string;
}

export declare type IRuleDateFormat =
  | 'Y-m-d H-i-s'
  | 'Y-m-d'
  | 'H-i-s'
  | 'Y-m'
  | 'm-d'
  | 'H-i'
  | 'i-s'
  | 'Y'
  | 'm'
  | 'd'
  | 'H'
  | 'i'
  | 's';
