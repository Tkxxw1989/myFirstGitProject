<template>
    <div class="nima">
      <div class="left">
      <!--<div class="hehe">
        <el-button>阈值法</el-button>
        <el-button>包络线法</el-button>
      </div>
      <div class="xixi">
        <span style="margin-right: 15px;">时间范围</span> <el-radio-group v-model="radio" style="margin-right:15px;">
                                        <el-radio label="allRecord">所有记录</el-radio>
                                        <el-radio label="quantumRecord">时间段记录</el-radio>
                                    </el-radio-group>
                                     <el-date-picker
                                     v-model="dateRange"
                                    unlink-panels
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                             </el-date-picker>
                             <span style="margin-right: 15px;margin-left:15px;">阈值范围</span>
                             <el-input placeholder="请输入内容" style="width:180px"></el-input>
                              <el-button style="margin-left:10px">查询</el-button>
      </div>-->
      <div style="border:1px solid #ddd;padding:15px;background-color:#fff;margin-bottom:15px">
        <span style="margin-right:15px">环境量管理</span><el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
<span style="margin-right:15px;margin-left:15px">时间范围</span><el-radio-group v-model="radio" style="margin-right:15px;">
                                        <el-radio label="allRecord">所有记录</el-radio>
                                        <el-radio label="quantumRecord">时间段记录</el-radio>
                                    </el-radio-group>
                                     <el-date-picker
                                     v-model="dateRange"
                                    unlink-panels
                                    type="daterange"
                                    start-placeholder="开始日期"
                                    end-placeholder="结束日期">
                             </el-date-picker>
                             <el-button style="margin-left:10px">查询</el-button>
      </div>
      <div class="drawChartArea"><div id="chartContent"></div></div>
      <div style="border:1px solid #ddd;background-color:#fff;padding:15px;float:right;width:100%">
        <v-table
                :columns="columns"
                :table-data="tableData"
                :height="tableHeight"
                is-horizontal-resize
                style="width:100%"
                :cell-merge="cellMerge"
            ></v-table>
             <v-pagination style="float:right;margin-top:20px"
              :total="datLength"
              :page-size="pageSize"
              :page-index="pageIndex"
              :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
      </div>
      </div>
      <div class="right">
        <el-tree
      :data="treeData"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node }">
        <span>{{ node.label }}</span>
        <template v-if="node.id>4">
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(node)">
            Append
          </el-button>
        </span>
        </template>
      </span>
    </el-tree>
      </div>
    </div>
</template>
<script>
let id = 1000;
import echarts from "echarts";
import 'echarts-gl';
export default{
  
        name:"combineChart",
        data(){
            return {
              radio:'quantumRecord',
              dateRange:'',
              treeData: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
        tableData:[{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"土石坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"土石坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"土石坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"左岸","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"左岸","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"}],
        columns:[
                    {field: 'SubProject_Name', title: '分部工程', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'ItemProject_Name', title: '分项工程', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'Monitor_Name', title: '监测类型', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'Instrument_Name', title: '仪器名称', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'Instrument_Type', title: '仪器类型', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'Survey_point_Number', title: '测点编号', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
                    {field: 'Point_Code', title: '测点编码', width: 160, titleAlign: 'center',columnAlign:'center',isResize:true},
            ],
          tableHeight:500,
          pageSize:10,
          datLength:15,
          pageIndex:1,
          options: [{
          value: '选项1',
          label: '日降雨量'
        }, {
          value: '选项2',
          label: ''
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        chart:null,
        chartOption:{}
        }
        },
        methods:{
          cellMerge(rowIndex,rowData,field){
                let arrayMerge=["混凝土坝","土石坝","左岸"];
                let mergeColumnsArray=[1,3,2];
                for(let i=0;i<arrayMerge.length;i++){
                  if (field === 'SubProject_Name' && rowData[field] === arrayMerge[i]) {
                    return {
                        colSpan: 1,
                        rowSpan: mergeColumnsArray[i],
                        content: '<span>'+arrayMerge[i]+'</span>',
                        componentName: ''

                    }
                }
                }
          },
          append(node) {
     console.log(node);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
        },
        mounted(){
          this.chart=echarts.init(document.getElementById("chartContent"));
          var data=[["time","value","temperature"],["2015/1/29",-9.85,0.1518],["2015/2/9",-8.64,0.6642],["2015/2/15",-6.41,1.3284],["2015/2/27",-6.62,0.7021],["2015/3/10",-6.04,1.0912],["2015/3/19",-6,1.1196],["2015/3/31",-6.21,2.0969],["2015/4/9",-6.12,0.9488],["2015/4/20",-6.42,1.6130],["2015/4/29",-5.67,2.3247],["2015/5/8",-5.32,2.0780],["2015/5/20",-4.27,2.3436],["2015/5/28",-5.7,2.2488],["2015/6/9",-5.4,2.3152],["2015/6/18",-9.77,2.3152],["2015/6/30",-8.76,2.2867],["2015/7/9",-8.37,2.4385],["2015/7/21",-8.66,2.6473],["2015/7/30",-9.12,2.8655],["2015/8/11",-9.71,2.7611],["2015/8/20",-10.92,2.4290],["2015/8/31",-11.29,2.4765],["2015/9/9",-11.8,2.4385],["2015/9/15",-13.27,2.1729],["2015/9/26",-12.09,1.9641],["2015/10/6",-12.89,1.8502],["2015/10/15",-12.47,1.9736],["2015/10/29",-12.35,1.3284],["2015/11/4",-12.35,1.5371],["2015/11/10",-12.35,1.1101],["2015/11/19",-10.88,1.1481],["2015/12/1",-10.92,1.1101],["2015/12/10",-10.09,0.9488],["2015/12/22",-10.3,0.6547],["2015/12/29",-10.22,0.5219],["2016/1/8",-9.72,0.5788],["2016/1/19",-8.29,0.4839],["2016/1/30",-10.06,0.4649],["2016/2/15",-8.17,0.4839],["2016/2/23",-6.11,0.8824],["2016/3/1",-6.37,1.0817],["2016/3/10",-5.91,0.4934],["2016/3/18",-8.39,1.4328],["2016/3/30",-7.18,1.3284],["2016/4/12",-7.52,1.7648],["2016/4/20",-5.75,1.7174],["2016/4/28",-5.84,1.9451],["2016/5/10",-7.14,1.8882],["2016/5/19",-6.84,1.6795],["2016/5/31",-7.34,2.4290],["2016/6/8",-7,2.2962],["2016/6/21",-6.74,2.4575],["2016/6/30",-7.2,2.4765],["2016/7/12",-10.64,2.6852],["2016/7/20",-9.63,2.5809],["2016/8/2",-9.88,2.6378],["2016/8/10",-9.66,2.7422],["2016/8/19",-11.05,2.9414],["2016/8/30",-10.75,2.1349],["2016/9/9",-10.41,2.2677],["2016/9/19",-10.87,2.3626],["2016/9/27",-13.22,2.1918],["2016/10/7",-14.11,2.3057],["2016/10/18",-13.27,2.1254],["2016/10/29",-13.35,1.0342],["2016/11/2",-11.84,1.2525],["2016/11/10",-12.72,1.1291],["2016/11/18",-11.12,1.4612],["2016/11/30",-11.55,0.9488],["2016/12/9",-12.06,1.1196],["2016/12/20",-10.55,1.0532],["2016/12/30",-9.79,0.4554],["2017/5/10",0,2.0590],["2017/5/20",0,2.2393],["2017/5/25",0,2.1634],["2017/6/7",0,2.3152],["2017/6/18",0,2.3436],["2017/6/30",0,2.5714],["2017/7/10",0,2.6568],["2017/7/20",0,2.7327]];
           var symbolSize = 4;
          this.chartOption = {
        grid3D: {},
        xAxis3D: {
            name:"时间",
            type: 'category',
            nameGap:30
        },
        yAxis3D: {
          name:"温度(℃)"
        },
        zAxis3D: {
          name:"应力(MPa)"
        },
        dataset: {
            dimensions: [
                'time',
                'value',
                'temperature'
            ],
            source: data
        },
        series: [
            {
                type: 'scatter3D',
                symbolSize: symbolSize,
                encode: {
                    x: 'time',
                    y: 'temperature',
                    z: 'value',
                    tooltip: [0, 1, 2]
                }
            }
        ]
    };
         /* this.chartOption={
    color: ['#003366', '#006699', '#4cabce', '#e5323e'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['最大值', '当前值', '平均值', '最小值']
    },
    xAxis: [
        {
            type: 'category',
            axisTick: {show: false},
            data: ['测缝计', '裂缝计', '多点位移计', '锚杆应力计', '钢筋计'],
            
        }
    ],
    yAxis: [
        {
            type: 'value',
        }
    ],
     graphic: [
        {
            type: 'image',
            id: 'logo',
            right: 0,
            top: 0,
            z: -10,
            bounding: 'raw',
            origin: [75, 75],
            style: {
                image: 'data:image/png;base64,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',
                width: 150,
                height: 150,
                opacity: 1
            }
        }],
    series: [
        {
            name: '最大值',
            type: 'bar',
            barGap: 0,
            data: [320, 332, 301, 334, 390]
        },
        {
            name: '当前值',
            type: 'bar',
            data: [220, 182, 191, 234, 290]
        },
        {
            name: '平均值',
            type: 'bar',
            data: [150, 232, 201, 154, 190]
        },
        {
            name: '最小值',
            type: 'bar',
            data: [98, 77, 101, 99, 40]
        }
    ]
}*/
this.chart.setOption(this.chartOption);
        }
}
</script>
<style lang="scss" scoped>
.nima{
  display:flex;
  .left{
    width:78%;
    margin-left:1%;
    margin-right:1%;
    margin-top:20px;
    .hehe{
      border: 1px solid #ddd;
    background-color: #fff;
    padding: 15px;
    }
    .drawChartArea{
      height:350px;
      border:1px solid #ddd;
      background-color:#fff;
      margin-bottom:15px;
      padding: 15px;
      #chartContent{
        height: 100%;
      }
    }
    .xixi{
          margin-top: 15px;
    border: 1px solid #ddd;
    background-color: #fff;
    padding: 15px;
    margin-bottom:15px;
    }
  }
  .right{
     margin-top:20px;
            width:20%;
            height:calc(100vh - 120px);
            border:1px solid #ddd;
            overflow-y: auto;
            background-color: #fff;
            .custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
  }
}
</style>
