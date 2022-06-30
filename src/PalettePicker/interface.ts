export interface IPalettePicker {
  /**
   * 可以这样写属性描述
   * @description       组件额外的 CSS className
   * @default
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       color值为一个有效的色值
   * @default           {}
   */
  hsv?: Object; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       HSV模型的H改变时触发
   * @default           ()=>{}
   */
  onChange?: Function; // 支持识别 TypeScript 可选类型为非必选属性
}
