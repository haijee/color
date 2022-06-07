export interface IAlphaPicker {
  /**
   * 可以这样写属性描述
   * @description       组件额外的 CSS className
   * @default
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       滑动器初始化的值
   * @default           100
   */
  defaultValue?: Number; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       透明度的值改变时触发
   * @default           100
   */
  onChage?: Function; // 支持识别 TypeScript 可选类型为非必选属性
}
