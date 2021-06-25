#### UML 基本介绍

1.   UML——Unified modeling language UML (统一建模语言)，是一种用于软件系统分析和设计的语言工具，它用  于帮助软件开发人员进行思考和记录思路的结果  

2.   UML 本身是一套符号的规定，就像数学符号和化学符号一样，这些符号用于描述软件模型中的各个元素和他  

   们之间的关系，比如类、接口、实现、泛化、依赖、组合、聚合等

   ![image-20210508155739699](C:\Users\likanjie888\AppData\Roaming\Typora\typora-user-images\image-20210508155739699.png)

#### UML类图

1.  用于描述系统中的类(对象)本身的组成和类(对象)之间的各种静态关系。

2.   类之间的关系：依赖、泛化（继承）、实现、关联、聚合与组合。  

3. 类图简单举例：

   ```java
   public class Person{
       private Integer id;
       private String name;
       public void setName(String name){
       	this.name=name;
       }
       public String getName(){
       	return name;
       }
   
   }
   ```

   