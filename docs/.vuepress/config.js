module.exports = {
    base: '/',
    title: 'JavaPool',
    description:'java poll icu',
    themeConfig: {
        search: false,
        sidebar:[
            ['','首页'],
            {
                title: '基础',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/basics/反射.html','反射'],
                    ['/basics/注解.html','注解'],
                    ['/basics/枚举.html','枚举'],
                    ['/basics/IO.html','IO'],
                    ['/basics/集合.html','集合'],
                    ['/basics/异常.html','异常'],
                    ['/basics/拦截器.html','拦截器'],
                    ['/basics/过虑器.html','过虑器'],
                    ['/basics/jdk8.html','jdk8'],
                    ['/basics/Java8 Stream.html','Java8 Stream']
                ]
            },
            {
              title: '设计模式',
              collapsable: false,
              sidebarDepth: 2,
              children: [
                  ['/designpattern/黑马-设计模式.html','黑马-设计模式'],
                  ['/designpattern/UML.html','UML类图'],
                  ['/designpattern/七大原则.html','七大原则'],
                  ['/designpattern/23种设计模式.html','23种设计模式']
              ]
            },
            {
                title: 'JVM',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/bar/three.html','JVM基础概念'],
                    ['/bar/four.html','JVM实战']
                ]
            },
            {
                title: '并发多线程',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/foo/','多线程基础'],
                    ['/foo/one.html','多线程进阶'],
                    ['/foo/two.html','并发基础']
                ]
            },
            {
                title: 'MySQL',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/mysql/索引.html','索引'],
                    ['/mysql/锁.html','锁']
                ]
            },
            {
                title: 'Redis',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/redis/持久化.html','持久化'],
                    ['/redis/分布式锁.html','分布式锁'],
                    ['/redis/Redis官方的高可用解决方案.html','Redis官方的高可用解决方案'],
                    ['/redis/数据库缓存最终一致性的四种方案.html','数据库缓存最终一致性的四种方案'],
                ]
            },
            {
                title: 'Spring',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/spring/BeanFactory和FactoryBean的区别.html','BeanFactory和FactoryBean的区别']
                ]
            },
            {
                title: 'Netty',
                collapsable: false,
                sidebarDepth:2,
                children: [
                    ['/netty/Netty核心技术及源码剖析.html','Netty核心技术及源码剖析']
                ]
            },
            ['/about','关于']
        ]
    },
    plugins: [
        ['@vuepress/back-to-top'],
        ['@vuepress/active-header-links'],
        ['@vuepress/medium-zoom']
    ]
}