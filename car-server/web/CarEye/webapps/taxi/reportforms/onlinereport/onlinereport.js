Ext.Loader.setConfig({enabled:true});//开启动态加载

Ext.application({
    name: 'OnlineReportApp',//为应用程序起一个名字,相当于命名空间
    //应用的根目录
	appFolder : window.BIZCTX_PATH + '/taxi/reportforms/onlinereport',
    controllers: [//声明所用到的控制层
        'OnlineReportCtrl'
    ],
    launch: function() {
		   Ext.create('Ext.container.Viewport', {
		             title: '新车上线监管',
		             itemId:'OnlineReportCtrlPanel',
		             border:false,
		             layout : 'border',
					 collapsible: true,
					 header : false, // 显示 header 默认 true
				     renderTo:Ext.getBody(),
				     items: [{xtype:'onlineReportSearchView'},{xtype:'printerView'},{xtype:'onlineReportListView'}]
			});
    }
});
