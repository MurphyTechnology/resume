<template>
    <div id="resume">

        <!--STICKER-->
        <div id="sticker"></div>

        <div id="wrapper">

            <!--BIO TITLE-->
            <h2 id="titleName" class="sectionHead">{{user.name}}</h2>
            <!-- <a href='./张易-19年.pdf' download="张易-19应届-计算机.pdf">下载</a> -->
            <!--BIO-->
            <!--BIO PARAGRAPH-->
            <div id="aboutme">
                <div class="imgwap">
                    <img alt="" class="avatar width-full rounded-2" height="200"
                         v-bind:src="user.photo" width="200">
                </div>
                <p><span>年龄：{{user.age}} 岁
                    <br/>手机：{{user.phone}}
                    <br/>邮箱：{{user.email}}
                    <br/>户籍：{{user.native}}
                    <br/>目前状态：{{user.status}}
                    <br/>所在地点：{{user.city}}
                    <br/>工作年限：{{user.year}} 年
                    <br/>期望职位：{{user.expect}}
                    <br/>
                </span>
                </p>
            </div>
            <img id="qrcord" :src="qrcode" alt="二维码" width="120"/>

            <!--end bio-->


            <div class="clear"></div>

            <!--SKILLS TITLE-->
            <h2 id="tools" class="sectionHead">技能</h2>

            <!--SKILLS-->
            <!--            <ul id="skills">-->
            <!--                &lt;!&ndash;////////////////////////////////////////////////////////////////////////////////////&ndash;&gt;-->
            <!--                &lt;!&ndash;请注意，班级名称表示您的技能的百分比。 即s70 = 70％，s40 = 40％. &ndash;&gt;-->
            <!--                &lt;!&ndash;////////////////////////////////////////////////////////////////////////////////////&ndash;&gt;-->
            <!--                &lt;!&ndash; <li id="skill1" class="s100"><span>.NET 框架开发（C#、ASP.net、MVC等）</span></li>-->
            <!--                <li id="skill2" class="s90"><span>Java 开发（SSH、SSM框架）</span></li>-->
            <!--                <li id="skill3" class="s90"><span>前端开发（JQuery、Angular、Bootstrap、ES6）</span></li>-->
            <!--                <li id="skill4" class="s80"><span>Linux平台使用（CentOS、Ubuntu）</span></li>-->
            <!--                <li id="skill5" class="s90"><span>NodeJS开发</span></li>-->
            <!--                <li id="skill6" class="s100"><span>Android开发</span></li>-->
            <!--                <li id="skill7" class="s100"><span>H5 Web APP（PhoneGap、Ionic）</span></li>-->
            <!--                <li id="skill9" class="s60"><span>IOS开发</span></li>-->
            <!--                <li id="skill8" class="s90"><span>数据库（SQLserver、MySQL、MongoDB、Redis）</span></li>-->
            <!--                 &ndash;&gt;-->
            <!--                <li v-for="(item,index) in skill" :id="`skill`+item.sequence" :class="`s`+item.percentage" :key="index">-->
            <!--                    <span>{{item.name}}</span></li>-->

            <!--            </ul>-->
            <div>
                <li v-for="(item,index) in skill" class="def" :key="index">
                    <span>{{item.name}}
                    <el-progress :text-inside="true" :stroke-width="20" :percentage="item.percentage"
                                 status="exception"></el-progress></span>
                </li>
            </div>

            <!-- end skills -->
            <div class="clear"></div>

            <!--EXPERIENCE TITLE-->
            <h2 id="clock" class="sectionHead">经历</h2>

            <!--EXPERIENCE-->
            <ul id="jobs">
                <li v-for="(item,index) in company" :key="index">
                    <div class="details">
                        <h3>{{item.info.company_name}}</h3>
                        <!-- <h4>江苏镇江</h4> -->
                        <h5>{{item.info.start}}-{{item.info.end}}</h5>
                    </div>
                    <div class="details" v-for="(i,iw) in item.event" :key="iw">
                        <h3>{{i.name}}({{i.start_time}}-{{i.end_time}})</h3>
                        <h3>项目简介：</h3>
                        <div>{{i.describe}}</div>
                        <p><b>项目收获：</b></p>
                        <div>{{i.harvest}}</div>
                        <br>
                    </div>
                    <!-- <p>	在职期间负责mysql查表操作。</p>	 -->
                </li>
                <!--                <li>-->
                <!--                    <div class="details">-->
                <!--                        <h3>江苏科技大学</h3>-->
                <!--                        &lt;!&ndash; <h4>江苏镇江</h4> &ndash;&gt;-->
                <!--                        <h5>2018年3月 - 2018年12月</h5>-->
                <!--                    </div>-->
                <!--                    <h3>经历</h3>-->
                <!--                    <p> 参与基于Spring MVC、Mybatis3的数据可视化展现服务后端搭建。</p>-->
                <!--                    <p> 数据可视化前端展现，完成H5 数据展现代码。</p>-->
                <!--                    <br>-->
                <!--                    <p><a>成长</a></p>-->
                <!--                    <p>学会JAVA编程学习方法，将多个学科知识相互融合到一起。</p>-->
                <!--                    <p>学会对需求有了思考能力。</p>-->
                <!--                    &lt;!&ndash; <p>	在职期间负责mysql查表操作。</p>	 &ndash;&gt;-->
                <!--                </li>-->
                <!--                <li>-->
                <!--                    <div class="details">-->
                <!--                        <h3>杭州大搜车汽车服务公司</h3>-->
                <!--                        &lt;!&ndash; <h4></h4> &ndash;&gt;-->
                <!--                        <h5>2018年11月 - 2019年3月</h5>-->
                <!--                    </div>-->
                <!--                    <h3>经历</h3>-->
                <!--                    <p>-->
                <!--                        1.服务迁移——将车商服务从原来Node逻辑调用转变为新的Java服务，其中运用了ORM，Redis、MongoDB、Dobbo、zk、mq等技术，由原来串行操作转换为Java8并行流操作，优化客户体验。-->
                <!--                    </p>-->
                <!--                    <p>2.买手服务——服务端基于Antd构建管理页面，完成一小部分数据库表设计，开发线索查询服务，以及项目与其他子项目的数据打通。</p>-->
                <!--                    <br>-->
                <!--                    <p><a>成长</a></p>-->
                <!--                    <p> 理解MVC思想，学会基本的Spring MVC企业级开发，对系统微服务拆分有了一点理解。</p>-->
                <!--                    <p> 简单的理解react，学会基于公司后端封装的antd开发的React页面，根据后台业务，创建简单的antd业务组件。</p>-->
                <!--                    <p> 了解了服务之间如何通过中间件进行服务解耦。 </p>-->
                <!--                    <p> 学会代码review，学习别人的长处。</p>-->
                <!--                </li>-->
            </ul><!--end jobs-->
            <!--EDUCATION TITLE-->
            <div class="clear"></div>
            <h2 id="learn" class="sectionHead">教育</h2>
            <!--EDUCATION-->
            <ul id="schools">
                <li v-for="(item,index) in education" :key="index">
                    <div class="details">
                        <h3><font><font>{{item.school}}</font></font></h3>
                        <h4><font><font>{{item.formal}}</font></font></h4>
                        <h5><font><font>{{item.start}}-{{item.end}}年</font></font></h5>
                    </div>
                    <p><font><font>{{item.job}}</font></font></p>
                </li>
            </ul><!--end schooling-->
            <div class="clear"></div>
            <!--HONORS / AWARDS TITLE-->
            <h2 id="ribbon" class="sectionHead">荣誉</h2>
            <!--HONORS / AWARDS-->
            <ul id="honorsAwards" style="display: block;">
                <li v-for="(item,index) in honor" :key="index"><a
                        :href="item.url"><font><font>{{item.name}}</font></font></a></li>
            </ul><!--end honorsAwards-->
            <div class="clear"></div>

            <!--AS SEEN ON TITLE-->
            <h2 id="eye" class="sectionHead">作品</h2>

            <!--AS SEEN ON-->
            <ul id="seenOn">
                <li v-for="(item,index) in works" :key="index" class="bwWrapper">
                    <img :src="item.photo" :alt="item.name"/>
                </li>
            </ul><!--end seenOn-->

            <div class="clear"></div>

            <!--RECOMMENDATIONS TITLE-->
            <h2 id="chat" class="sectionHead">个人评价</h2>
            <!--RECOMMENDATIONS-->
            <ul id="recommends" style="display: block;">
                <p>
                    <font><font>“{{user.describe}}”</font></font>
                </p>
            </ul>
            <div class="clear"></div>
        </div><!--end wrapper-->
        <!--COPYRIGHT-->
        <div id="copyright">&copy; 2014 - 2020 - Designed and developed by Murphyyi.</div>

    </div>
</template>

<script lang="ts">
    import './style.css';
    // import './print.css';
    // import './prettyPhoto.css'
    // import './custom'
    import {getInfoByKeyword, createQrcode} from '@/api/resume'

    import {Component, Prop, Vue} from 'vue-property-decorator'

    @Component({
        props: {
            user: Object,
            works: Object,
            education: Array,
            skill: Array,
            company: Array,
            honor: Array,
            qrcode: String
        }
    })

    export default class Preview extends Vue {
        @Prop() private user?: Record<string, any>;
        @Prop() private works?: Record<string, any>;
        @Prop() private education?: Record<string, any>;

        // 数据
        @Prop() private skill?: Record<string, any>;
        @Prop() private company?: Record<string, any>;
        @Prop() private honor?: Record<string, any>;
        @Prop() private qrcode?: string;

        data() {
            return {
                user: {
                    code: "",
                    name: "张易",
                    phone: "110",
                    describe: "5",
                    sex: false,
                    status: "离职",
                    age: "13",
                    photo: "7",
                    email: "zy8338719@hotmail.com",
                    wechat: "murphyyi",
                    github: "https://github.com/zy84338719",
                    native: "北京",
                    city: "北京",
                    keyword: "w",
                    watch: 20,
                    expect: "后端研发",
                    year: 8
                },
                education: [{
                    school: "江苏科技大学",
                    formal: "本科学历",
                    start: 2015,
                    end: 2019,
                    job: "计算机科学与技术"
                }],
                works: [{
                    name: "超级玛丽",
                    url: "http://murphyyi.oss-cn-beijing.aliyuncs.com/1.png",
                    photo: "http://murphyyi.oss-cn-beijing.aliyuncs.com/1.png"
                }
                ],
                skill: [
                    {
                        name: "",
                        sequence: 1,
                        percentage: 70
                    }
                ],
                company: [
                    {
                        info: {
                            "code": "",
                            "company_name": "",
                            "company_code": ""
                        },
                        event: null
                    }
                ],
                honor: [
                    {
                        "code": "w",
                        "name": "网易云课堂  获得python数据分析师 微专业优秀证书",
                        "url": "https://murphyyi.oss-cn-beijing.aliyuncs.com/%E7%BD%91%E6%98%93%E4%BA%91%E8%AF%BE%E5%A0%82.jpg"
                    },
                ],
                qrcode: "",
            }
        }

        // // 计算属性
        // computed: {}
        //     // 侦听器
        //     | undefined
        // // 侦听器
        // watch: {}
        //     // 生命周期钩子
        //     | undefined
        //
        // 生命周期钩子
        // beforeCreate() {
        // },
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // created() {
        //     (this as any).getInfo()
        // }

        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeMount() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        mounted() {
            this.getInfo()
            this.getQrcode()
        }

        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeUpdate() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // updated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // activated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // deactivated() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // beforeDestroy() {
        // }
        //
        // // eslint-disable-next-line @typescript-eslint/no-empty-function
        // destroyed() {
        // }

        // 事件处理方法

        getInfo(): void {
            const {keyword} = this.$route.params;
            getInfoByKeyword({keyword}).then(
                (data: Data) => {
                    this.user = data.user
                    this.works = data.works
                    this.education = data.education
                    this.skill = data.skill
                    this.company = data.company
                    this.honor = data.honor
                }
            )
        }

        getQrcode(): void {
            const {keyword} = this.$route.params;
            // let url = "http://localhost:10080/"+keyword

            createQrcode({keyword: window.location.href}).then((data: string) => {

                this.qrcode = "data:image/png;base64," + data
            })
        }

    }
</script>

<style>

</style>
