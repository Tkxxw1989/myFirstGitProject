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
        tableData:[{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"},{"SubProject_Name":"混凝土坝","ItemProject_Name":"14坝段","Monitor_Name":"应力应变","Instrument_Name":"测缝计","Instrument_Type":"ABS","Survey_point_Number":"YL09887","Point_Code":"12923"}],
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
        value: ''
        }
        },
        methods:{
          append(node) {
     console.log(node);
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      }
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
      height:100px;
      border:1px solid #ddd;
      background-color:#fff;
      margin-bottom:15px;
      padding: 15px;
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
