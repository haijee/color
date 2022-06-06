export interface IAlphaPicker {
  /**
   * 可以这样写属性描述
   * @description       组件额外的 CSS className
   * @description .zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
   * @default
   */
  className?: string; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       也可以显式加上描述名
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
   * @default           100
   */
  defaultValue?: Number; // 支持识别 TypeScript 可选类型为非必选属性

  /**
   * 可以这样写属性描述
   * @description       值变化
   * @description.zh-CN 还支持不同的 locale 后缀来实现多语言描述，使用 description 兜底
   * @default           100
   */
  onChage?: Function; // 支持识别 TypeScript 可选类型为非必选属性
}
