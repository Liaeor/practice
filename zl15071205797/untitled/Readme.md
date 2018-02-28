#### 1.代码结构说明

​        整个程序由五个函数构成，包含一个主函数main，执行main函数即可运行整个程序。

- doPlace函数：接收两个参数（文本内容与消息序号），计算当前信号对应 无人机所处的“位置”，返回一个String类型；
- doStartPlace函数：接受两个参数（文本内容与消息序号），计算当前信号对应无人机的起始“位置”，返回一个String类型；
- outputState函数：接受两个参数（文本内容与消息序号），输出当前信号对应的无人机状态信息，返回一个String类型；
- doState函数：接受两个参数（文本内容与消息序号），判断并调用outputState函数输出当前信号对应无人机状态，输出 状态信息；
- main函数：程序主体，执行整个程序，接受shell输入的文本内容与消息序号，执行上述函数 ，输出状态信息。



#### 2.运行流程说明

​	根据题目要求，需在shell接受数据，所以程序需依赖一个'readline-sync' 模块。

- 在shell， 找到安装有'readline-sync'模块的 homework.js 文件目录，执行：

  ```
  cd untitled
  ```

- 运行程序，执行：

  ```
  node homework.js
  ```

- 根据后续提示，输入测试用例

  ```
  Please input a set of signals!
  输入一组无人机消息，"Enter"继续输入下一条，"-"(减号)结束消息的输入；

  Please input a set of index which you want to check!
  输入一组你想要检测无人机的状态对应的消息序号，代表第几条消息（消息序号从0开始），"Enter"继续输入下一条，"="(等号)结束消息序号的输入；
  ```

- 例如，测试用例

  对于输入：

  ```
  plane1 1 2 3
  plane1 1 2 3 2 2 1
  plane1 3 4 4 1 4 1
  plane1 4 8 5
  plane1 1 1 1 1 2 3
  plane1 2 3 4 1 1 1
  ```

  当指定消息序号 0 时， 应输出 plane1 0 1 2 3

  当指定消息序号 1 时， 应输出 plane1 1 3 4 4

  当指定消息序号 2 时， 应输出 plane1 2 4 8 5

  当指定消息序号 3 时， 应输出 Error : 3

  当指定消息序号 4 时， 应输出 Error : 4

  当指定消息序号 5 时， 应输出 Error : 5

  当指定消息序号 6 时， 应输出 Cannot find 6

  当指定消息序号 66 时， 应输出 Cannot find 66