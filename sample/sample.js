let sample = [
    {
        name: '示例1',
        tapd: '应收单单据查询',
        inputFieldVal: `序号
        单据编号
        单据类型
        事业部
        部门
        结算组织
        收款组织
        销售组织
        客户
        币别
        销售员
        销售部门
        业务日期
        按含税单价录入
        创建日期
        创建人
        审核人
        审核日期
        费用项目编码
        费用承担部门
        计价数量
        价税合计
        税率
        会计日期
        与K3集成状态
        集成信息
        模板编码
        `,
        inputInterfaceVal : `"createBy": "admin",
        "createName": "admin",  //创建人
        "createTime": 0,  //创建日期
        "createTimeStr": "1970-01-01 08:00:00",  //创建日期
        "createUser": 0,
        "fapproveDate": 0,            
        "fapproveDateStr": "",     //审核日期
        "fapproverId": "",          //审核人
        "fbillNo": "FD201811111",    //单据编号
        "fbillTypeId": "YSD02_SYS",  //单据类型
        "fcurrencyId": "PRE001",      //币别
        "fcustomerId": "6881",        //客户
        "fdate": 0,                   //业务日期
        "fdateStr": "1970-01-01 08:00:00",   //业务日期
        "fdepartment": "",             //IT4.0部门
        "fdivision": "",            //IT4.0事业部
        "fentryTaxRate": 0.06,       //税率
        "fexpenseDepartment": "",     //费用承担部门
        "fexpenseId": "轮单费收入",    //费用项目编码
        "fintegrationInfoK3": "",       //集成信息
        "fintegrationStatusK3": 0,     //与k3集成状态|0:待处理,1:已处理,2:失败
        "fistax": 0,                  //按含税单价录入|0:true,1:false
        "fpayOrgId": "深圳市彬讯科技有限公司",   //收款组织
        "fpriceQty": 1,                       //计价数量
        "fsaleOrgId": "深圳市彬讯科技有限公司",        //销售组织
        "fsalerId": "",                 //销售员
        "fsettleOrgId": "深圳市彬讯科技有限公司",      //结算组织
        "ftemplateCode": "CC00001",                 //模板编码
        "ftaxPrice":1000,                        //价税合计
        "faccountTime":0,
        "faccountTimeStr":"1970-01-01 08:00:00"   //会计日期
        "fbusingessType": "装企平台",     //业务类型
        "ftemplateCode":"CCSSSS1",          //模板编码
        "fsaleDepartment": "深圳分公司",   //销售部门
        "id": 1,                         //序号
        "remark": "",                   //备注
        "updateBy": "admin",
        "updateName": "admin",
        "updateTime": 0,
        "updateTimeStr": "1970-01-01 08:00:00",
        "updateUser": 0`
    },
    {
        name:"示例2",
        tapd: '员工往来记账单',
        inputFieldVal: `序号	
        单据行ID	
        单据类型	
        单据编号	
        业务日期	
        到期日	
        往来单位名称	
        财务组织	
        备注	
        费用项目名称	
        费用承担部门名称	
        金额	
        会计日期	
        集成时间	
        源系统	
        单据生成状态 
        `,
        inputInterfaceVal: `1.2.1.1
        sourceTypeCode
        body
        String
        非必填
        源记录类型
        1.2.1.2
        purpose
        body
        String
        非必填
        明细用途
        1.2.1.3
        createBy
        body
        String
        非必填
        创建人登录名称
        1.2.1.4
        orderCode
        body
        String
        非必填
        单据编号
        1.2.1.5
        createUser
        body
        int
        非必填
        创建人ID
        1.2.1.6
        createName
        body
        String
        非必填
        创建人名称
        1.2.1.7
        createTime
        body
        int
        非必填
        创建时间
        1.2.1.8
        costProjectName
        body
        String
        非必填
        费用项目名称
        1.2.1.9
        voucherStatus
        body
        int
        非必填
        单据处理状态，0待处理，1已处理
        1.2.1.10
        sourceOrderType
        body
        String
        非必填
        单据类型，辅助资料11605
        1.2.1.11
        currentUnitName
        body
        String
        非必填
        往来单位名称
        1.2.1.12
        time
        body
        int
        非必填
        明细发生时间
        1.2.1.13
        remark
        body
        String
        非必填
        备注
        1.2.1.14
        bizTime
        body
        int
        非必填
        业务日期
        1.2.1.15
        expireTime
        body
        int
        非必填
        到期日
        1.2.1.16
        accountingTime
        body
        int
        非必填
        会计日期
        1.2.1.17
        orderNo
        body
        String
        非必填
        OA记录编号
        1.2.1.18
        updateTime
        body
        int
        非必填
        修改时间
        1.2.1.19
        updateName
        body
        String
        非必填
        修改人名称
        1.2.1.20
        updateUser
        body
        int
        非必填
        修改人ID
        1.2.1.21
        source
        body
        String
        非必填
        源系统
        1.2.1.22
        updateBy
        body
        String
        非必填
        修改人登录名称
        1.2.1.23
        id
        body
        int
        非必填
        主键ID
        1.2.1.24
        sourceDetailId
        body
        int
        非必填
        源明细ID
        1.2.1.25
        integrationTime
        body
        int
        非必填
        集成时间
        1.2.1.26
        financialOrgCode
        body
        String
        非必填
        财务组织，辅助资料61023
        1.2.1.27
        costDepartment
        body
        String
        非必填
        费用承担部门名称
        1.2.1.28
        amount
        body
        int
        非必填
        金额`
    },
    {
        name: '示例3',
        tapd: '交易会员系统',
        inputFieldVal: `数据状态
        作废人ID
        作废人
        作废时间
        付款方分类
        付款方Id
        付款方
        结算方式
        退款流水号
        银行id
        银行账号
        开户名
        APPID
        支付流水号
        来源
        备注
        款项名称全码
        城市ID`,
        inputInterfaceVal: `/**
        * 数据状态:0正常,&gt;0:作废
        */
       @Desc("dataStatus")
       private Integer dataStatus;
   
       /**
        * 作废人ID
        */
       @Desc("cancelId")
       private Integer cancelId;
   
       /**
        * 作废人
        */
       @Desc("cancelUser")
       private String cancelUser;
   
       /**
        * 作废时间
        */
       @Desc("cancelTime")
       private Integer cancelTime;
   
       @Desc("付款方分类")
       private String receiptTypeId;
   
       @Desc("付款方Id")
       private Integer receiptId;
   
       @Desc("付款方")
       private String receiptName;
   
       @Desc("结算方式1.原路退款 2.虚拟账户 3.付款银行卡")
       private String settleMode;
   
       @Desc("退款流水号")
       private String refundNumber;
   
       @Desc("银行id")
       private Integer bankId;
   
       @Desc("银行账号")
       private String bankAccount;
   
       @Desc("开户名")
       private String openingAccountName;
   
       @Desc("APPID")
       private String appId;
   
       @Desc("支付流水号")
       private String payNumber;
   
       @Desc("来源")
       private Integer refundTypeId;
   
       @Desc("备注")
       private String remark;
   
       @Desc("款项名称全码")
       private String fundWholeCode;
   
       @Desc("城市ID")
       private Integer cityId;`
    },
    {
        name: '示例4',
        tapd: '还款单',
        inputFieldVal: `还款凭证
        到账时间
        还款方式
        收款方式
        交易流水号
        还款方
        还款银行卡号后4位`,
        inputInterfaceVal: `/**
        * 还款凭证，同t8t_ps_smg.smg_remit_record的receipt_img_url
        */
       @NotBlank
       private String receiptImgUrl;
   
       /**
        * 到账时间，同t8t_ps_smg.smg_remit_record的receive_time
        */
       @NotNull
       @Min(1)
       private Integer receiveTime;
   
       /**
        * 还款方式|枚举：1、银行渠道汇款；2：第三方汇款，同t8t_ps_smg.smg_remit_record的remit_way
        */
       @NotNull
       @Min(1)
       @Max(2)
       private Integer remitWay;
   
       /**
        * 收款方式|辅助资料：收款方式（61001），同t8t_ps_smg.smg_remit_record的receipt_way_code
        */
       @NotBlank
       private String receiptWayCode;
   
       /**
        * 交易流水号
        */
       @NotBlank
       private String tradeSerialNo;
   
       /**
        * 还款方
        */
       @NotBlank
       private String payerName;
   
       /**
        * 还款银行卡号后4位
        */
       @NotBlank
       @Pattern(
               regexp = "^\\d{4}$",
               message = "银行卡号需取后四位数字"
       )
       private String bankcard;`
    }
]

export default sample