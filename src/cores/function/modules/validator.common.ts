/**
 * How to use ?
 * Import Validator Instance, use function validator.validate or validator.validateAll.
 */

import {
  IRuleFuncsObj,
  IRule,
  IRuleFormData,
  IRuleDateFormat,
  IRuleCheckedRes,
} from '#/custom/validator';

const ruleFuncs: IRuleFuncsObj = {
  /** 是否非空 */
  unnull(value: string | undefined, tip: string): void | string {
    if (value === undefined) return tip;
    if (value.toString().trim() === '') return tip;
  },
  // 是否为空
  empty(value: string, tip: string): void | string {
    if (value === '') return tip;
  },
  // 是否全为空格
  space(value: string, tip: string): void | string {
    if (value.toString().trim() === '') return tip;
  },

  // 是否为数字
  number(value: string, tip: string): void | string {
    const regexp = /^[0-9]+$/;
    if (!regexp.test(value)) {
      return tip;
    }
  },

  // 是否为 Boolan
  boolean(value: string, tip: string): void | string {
    // const falseCaseList: string[] = ['false', '0', 'null', 'undefined', 'NaN'];
    // const bool = falseCaseList.includes(value) ? false : Boolean(value);
    if (![true, false, 'false', 'true'].includes(value)) return tip;
  },

  // 是否为纯字母
  alpha(value: string, tip: string): void | string {
    const regexp = /^[a-zA-Z]+$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为字母和数字
  alphaNum(value: string, tip: string): void | string {
    const regexp = /^[a-zA-Z0-9]+$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为字母和数字，下划线 _ 及破折号 -
  alphaDash(value: string, tip: string): void | string {
    const regexp = /^[a-zA-Z0-9(\-)(_)]+$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值只能是汉字
  chs(value: string, tip: string): void | string {
    const regexp = /^[\u4e00-\u9fa5]{1,}$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值只能是汉字、字母
  chsAlpha(value: string, tip: string): void | string {
    const regexp = /^[a-zA-Z\u4e00-\u9fa5]{1,}$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值只能是小写字符
  lower(value: string, tip: string): void | string {
    const regexp = /^[a-z]{1,}$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值只能是大写字符
  upper(value: string, tip: string): void | string {
    const regexp = /^[A-Z]{1,}$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值只能是十六进制字符串
  xdigit(value: string, tip: string): void | string {
    const regexp = /^[a-fA-F]{1,}$/;
    if (!regexp.test(value)) return tip;
  },

  // 支持验证 ipv4 格式的IP地址
  ip(value: string, tip: string): void | string {
    const regexp =
      /((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})(\.((2(5[0-5]|[0-4]\d))|[0-1]?\d{1,2})){3}/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为有效的MAC地址
  mac(value: string, tip: string): void | string {
    const regexp =
      /[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}:[A-F\d]{2}/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为有效的身份证格式
  idCard(value: string, tip: string): void | string {
    const regexp = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if (!regexp.test(value)) return tip;
  },

  // 验证手机
  mobile(value: string, tip: string): void | string {
    const regexp = /^1[34578]\d{9}$/;
    if (!regexp.test(value)) return tip;
  },
  // 验证邮箱(php)
  email(value: string, tip: string): void | string {
    const regexp =
      /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,})$/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为有效的中国邮政编码
  zip(value: string, tip: string): void | string {
    const regexp = /[1-9]\d{5}(?!\d)/;
    if (!regexp.test(value)) return tip;
  },

  // 验证某个字段的值是否为有效的十六进制值
  color(value: string, tip: string): void | string {
    const regexp = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
    if (!regexp.test(value)) {
      return tip;
    }
  },

  // 验证某个字段的值是否为有效的 URL 地址

  // 验证某个字段的值长度是否为有效的最小长度(length 为字符类型,是由于 minlength:length split 出来的)
  minlength(value: string, length: string, tip: string): void | string {
    if (value.trim().length < parseInt(length)) return tip;
  },

  // 验证某个字段的值长度是否为有效的最大长度(length 为字符类型,是由于 maxlength:length split 出来的)
  maxlength(value: string, length: string, tip: string): void | string {
    if (value.trim().length > parseInt(length)) return tip;
  },

  // 验证某个字段的值长度是否为指定长度(length 为字符类型,是由于 length:length split 出来的)
  eqlength(value: string, length: string, tip: string): void | string {
    if (value.trim().length !== parseInt(length)) return tip;
  },

  // 验证某个字段的值是否为指定保留 byte 位小数的金钱格式
  monoey(value: string, byte: number, tip: string): void | string {
    let regxp;
    switch (byte) {
      case 1:
        regxp = /^\d+((\.?)(\w{1}))?$/;
        break;
      case 2:
        regxp = /^\d+((\.?)(\w{2}))?$/;
        break;
      case 3:
        regxp = /^\d+((\.?)(\w{1}))?$/;
        break;
      case 4:
        regxp = /^\d+((\.?)(\w{4}))?$/;
        break;
      default:
        regxp = /^\d+((\.?)(\w*))?$/;
        break;
    }
    if (!regxp.test(value)) {
      return tip;
    }
  },

  // 验证某个字段的值是否为指定格式的日期 (format: Y-m-d H-i-s)
  dateFormat(
    value: string,
    format: IRuleDateFormat,
    tip: string
  ): void | string {
    let regexp: RegExp;
    switch (format) {
      case 'Y-m-d H-i-s':
        regexp =
          /\d{4}-(0?[1-9]|1[0-2])-((0?[1-9])|((1|2)[0-9])|30|31)\s([01][0-9])|(2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
        break;
      case 'Y-m-d':
        regexp = /^\d{4}-(0?[1-9]|1[0-2])-((0?[1-9])|((1|2)[0-9])|30|31)$/;
        break;
      case 'H-i-s':
        regexp = /^([01][0-9])|(2[0-3]):([0-5][0-9]):([0-5][0-9])$/;
        break;
      case 'Y-m':
        regexp = /^(\d{4})-(0?[1-9]|1[0-2])$/;
        break;
      case 'm-d':
        regexp = /^(0?[1-9]|1[0-2])-((0?[1-9])|((1|2)[0-9])|30|31)$/;
        break;
      case 'H-i':
        regexp = /^([01][0-9])|(2[0-3]):([0-5][0-9])$/;
        break;
      case 'i-s':
        regexp = /^([0-5][0-9]):([0-5][0-9])$/;
        break;
      case 'Y':
        regexp = /^\d{4}$/;
        break;
      case 'm':
        regexp = /^(0?[1-9]|1[0-2])$/;
        break;
      case 'd':
        regexp = /^((0?[1-9])|((1|2)[0-9])|30|31)$/;
        break;
      case 'H':
        regexp = /^([01][0-9])|(2[0-3])$/;
        break;
      case 'i':
        regexp = /^([0-5][0-9])$/;
        break;
      case 's':
        regexp = /^([0-5][0-9])$/;
        break;
      default:
        regexp = /(?:)/;
        break;
    }

    if (!regexp.test(value)) return tip;
  },

  // 比较类
  // 验证某个字段是否和另外一个字段的值一致
  same(value: string, target: string, tip: string): void | string {
    if (value !== target) return tip;
  },
};

export class Validator {
  public validateList: Function[];
  public errorList: string[];

  private static SystemRules: IRuleFuncsObj = {};
  public static CustomRules: IRuleFuncsObj = {};
  public static SetCustomRule(rulename: string, callback: Function): void {
    const isIystemRules = Object.keys(Validator.SystemRules).includes(rulename);
    isIystemRules &&
      console.warn(
        `自定义验证规则名称 <${rulename}> 与系统验证规则名称同名,请重新命名`
      );
    Validator.CustomRules[rulename] = callback;
  }

  constructor() {
    this.validateList = [];
    this.errorList = [];
    Validator.SystemRules = ruleFuncs;
    Validator.CustomRules = ruleFuncs;
  }

  /** 清除验证规则缓存 */
  private clearValidateList() {
    this.validateList = [];
  }

  /** 清除未定义规则提示缓存 */
  private clearErrorList() {
    this.errorList = [];
  }

  /** 添加数据规则 */
  private addValidateRules(value: string, rules: IRule[]) {
    for (let i = 0; i < rules.length; i++) {
      const { rule, tip } = rules[i];
      const args = rule.split(':');
      /** 处理验证规则参数 */
      const rulename = args.shift();
      args.unshift(value);
      args.push(tip);

      /** 指定验证规则方法 */
      const allRuleFuncs: IRuleFuncsObj = Object.assign(
        Validator.SystemRules,
        Validator.CustomRules
      );
      /** 是否定义数据验证规则 */
      const isDefineRule = Object.keys(allRuleFuncs).includes(
        rulename as string
      );
      !isDefineRule &&
        this.errorList.push(
          `数据验证规则集未定义该规则: ${rulename as string}`
        );
      /** 浏览器控制台提示 */
      if (!isDefineRule)
        console.warn(`数据验证规则集未定义该规则: ${rulename as string}`);
      this.validateList.push(() =>
        allRuleFuncs[rulename as string].apply({ value }, args)
      );
    }
  }

  /** 数据规则验证 */
  private execValidateRulesFunc() {
    const result: IRuleCheckedRes = { checked: true, message: '' };

    /** 检测未定义的验证规则并提示 */
    if (this.errorList.length > 0) {
      result.message = this.errorList[0];
      result.checked = false;
      this.clearValidateList();
      this.clearErrorList();
      return result;
    }

    /** 进行数据规则验证 */
    for (let i = 0; i < this.validateList.length; i++) {
      const tip: string | undefined = this.validateList[i]();
      if (tip !== undefined && tip.length > 1) {
        result.message = tip;
        this.errorList.push(tip);
        /** 数据规则验证失败,跳出循环,避免全量验证 */
        break;
      }
    }

    result.checked = this.errorList.length <= 0;

    /** 验证完后,需清除缓存 */
    this.clearValidateList();
    this.clearErrorList();

    return result;
  }

  /** 单项数据验证 */
  public validate(value: string, rules: IRule[]) {
    this.addValidateRules(value, rules);
    return this.execValidateRulesFunc();
  }

  /** 多项数据验证 */
  public validateAll(form: IRuleFormData[]) {
    form.forEach(item => {
      const { value, rules } = item;
      this.addValidateRules(value, rules);
    });
    return this.execValidateRulesFunc();
  }
}

export const validator = new Validator();
