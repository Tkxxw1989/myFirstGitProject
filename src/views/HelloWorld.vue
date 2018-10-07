<template>
  <div class="hello">
    <div class="custom-tree-container">
  <div class="block">
    <p>使用 renderContent</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false"
      :render-content="renderContent">
    </el-tree>
  </div>
  <div class="block">
    <p>使用 scoped slot</p>
    <el-tree
      :data="data"
      show-checkbox
      node-key="id"
      default-expand-all
      :expand-on-click-node="false">
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span>{{ node.label }}</span>
        <span>
          <el-button
            type="text"
            size="mini"
            @click="() => append(node,data)">
            Append
          </el-button>
          <el-button
            type="text"
            size="mini"
            @click="() => remove(node, data)">
            Delete
          </el-button>
        </span>
      </span>
    </el-tree>
  </div>
  <div>
    <el-input
  placeholder="输入关键字进行过滤"
  v-model="filterText">
</el-input>

<el-tree
  class="filter-tree"
  :data="data2"
  :props="defaultProps"
  default-expand-all
  :filter-node-method="filterNode"
  ref="tree2">
</el-tree>
  </div>
</div>
 <div>
      <v-table
              is-horizontal-resize
              style="width:100%"
              :height="300"
              even-bg-color="#f2f2f2"
              :title-rows="titleRows"
              :columns="columns"
              :table-data="tableData"
              row-hover-color="#eee"
              row-click-color="#edf7ff"
      ></v-table>
  </div>
  <!--<div style="margin-top:20px">
    <div>
    <iframe src ="https://www.163.com/" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
<iframe src ="https://www.baidu.com" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
<iframe src ="https://www.sina.com.cn/" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
    </div>
<iframe src ="http://www.sohu.com/" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
<iframe src ="http://www.toutiao.com/" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
<iframe src ="http://www.qq.com/" width="400px" height="300px">
<p>Your browser does not support iframes.</p>
</iframe>
  </div>-->
  </div>
</template>

<script>
let id=1000;
export default {
  name: 'HelloWorld',
   watch: {
      filterText(val) {
        this.$refs.tree2.filter(val);
      }
    },
  data () {
    return {
        data : [{
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
      filterText: '',
        data2: [{
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
       defaultProps: {
          children: 'children',
          label: 'label'
        },
         multipleSort: false,
                tableData: [
                     {"name":"赵伟","gender":"男","height":"183","email":"zhao@gmail.com","tel":"156*****1987","hobby":"钢琴、书法、唱歌","address":"上海市黄浦区金陵东路569号17楼"},
                    {"name":"李伟","gender":"男","height":"166","email":"li@gmail.com","tel":"182*****1538","hobby":"钢琴、书法、唱歌","address":"上海市奉贤区南桥镇立新路12号2楼"},
                    {"name":"孙伟","gender":"女","height":"186","email":"sun@gmail.com","tel":"161*****0097","hobby":"钢琴、书法、唱歌","address":"上海市崇明县城桥镇八一路739号"},
                    {"name":"周伟","gender":"女","height":"188","email":"zhou@gmail.com","tel":"197*****1123","hobby":"钢琴、书法、唱歌","address":"上海市青浦区青浦镇章浜路24号"},
                    {"name":"吴伟","gender":"男","height":"160","email":"wu@gmail.com","tel":"183*****6678","hobby":"钢琴、书法、唱歌","address":"上海市松江区乐都西路867-871号"},
                    {"name":"冯伟","gender":"女","height":"168","email":"feng@gmail.com","tel":"133*****3793","hobby":"钢琴、书法、唱歌","address":"上海市金山区龙胜路143号一层"}
                ],
                columns: [
                    {
                        field: 'custome', width: 50, titleAlign: 'center', columnAlign: 'center',
                        formatter: function (rowData, index) {
                            return index < 3 ? '<span style="color:red;font-weight: bold;">' + (index + 1) + '</span>' : index + 1
                        }, isFrozen: true
                    },
                    {field: 'name', width: 100, columnAlign: 'center', isFrozen: true,isResize:true},
                    {field: 'gender', width: 150, columnAlign: 'center', isFrozen: true},
                    {field: 'height', width: 150, columnAlign: 'center', isFrozen: true},
                    {field: 'tel', width: 150, columnAlign: 'center'},
                    {field: 'email', width: 200, columnAlign: 'center'},
                    {field: 'hobby', width: 200, columnAlign: 'center',isResize:true},
                    {field: 'address', width: 330, columnAlign: 'left',isResize:true}
                ],
                titleRows: [
                             [{fields: ['custome'], title: '排序', titleAlign: 'center', rowspan: 2},
                              {fields: ['name', 'gender', 'height'], title: '基础信息', titleAlign: 'center', colspan: 3},
                              {fields: ['tel', 'email'], title: '联系方式', titleAlign: 'center', colspan: 2},
                              {fields: ['hobby','address'], title: '爱好及地址', titleAlign: 'center', rowspan: 2,colspan: 2}],

                             [{fields: ['name'], title: '姓名', titleAlign: 'center'},
                              {fields: ['gender'], title: '性别', titleAlign: 'center', orderBy: 'asc'},
                              {fields: ['height'], title: '身高', titleAlign: 'center', orderBy: 'desc'},
                              {fields: ['tel'], title: '手机号码', titleAlign: 'center'},
                              {fields: ['email'], title: '邮箱', titleAlign: 'center'}],

                             [{fields: ['custome','name','gender','height'], title: '平均值', titleAlign: 'center', colspan: 4,titleCellClassName:'title-cell-class-name-test1'},
                              {fields: ['tel'], title: '000', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['email'], title: '111', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['hobby'], title: '222', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'},
                              {fields: ['address'], title: '333', titleAlign: 'center',titleCellClassName:'title-cell-class-name-test2'}]
                           ],
    }
  },
   methods: {
     filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
     append(node,data) {
       console.log(node);
       console.log(data);
        const newChild = { id: id++, label: 'testtest', children: [] };
        if(!node.parent.data.children){
          node.parent.data.push(newChild);
        }else{
         node.parent.data.children.push(newChild); 
        }
      },

      remove(node, data) {
        const parent = node.parent;
        const children = parent.data.children || parent.data;
        const index = children.findIndex(d => d.id === data.id);
        children.splice(index, 1);
      },

      renderContent(h, { node, data, store }) {
        return (
          <span class="custom-tree-node">
            <span>{node.label}</span>
            <span>
              <el-button size="mini" type="text" on-click={ () => this.append(node,data) }>Append</el-button>
              <el-button size="mini" type="text" on-click={ () => this.remove(node, data) }>Delete</el-button>
            </span>
          </span>);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
   .title-cell-class-name-test1 {
        background-color: #2db7f5;
    }
    .title-cell-class-name-test2 {
        background-color: #f60;
    }
</style>
