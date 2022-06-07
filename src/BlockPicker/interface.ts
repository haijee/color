export interface IBlockPicker {
  /**
   * 可以这样写属性描述
   * @description       组件额外的 CSS className
   * @default
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       color值为一个有效的色值
   * @default           #194D33
   */
  color?: any; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       透明度为 0～1 范围内的一个值
   * @default           1
   */
  alpha?: Number; // 支持识别 TypeScript 可选类型为非必选属性
}
