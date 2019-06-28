<template>
  <div class="treeComponent">
    <div class="treeTitle" @click="clearAll"
      v-if="isShowTitle">测点信息</div>
    <div class="filter-wrapper">
      <Input v-model="filterWords"
        placeholder="请输入关键字进行过滤"
        class="filterWords"></Input>
    </div>
    <div class="eleTree">
      <el-tree ref="dataTree"
        :show-checkbox="showCheckBox"
        :data="treeData"
        :props="treeDefaultProps"
        node-key="NodeID"
        :default-expanded-keys="defaultExpandNode"
        :highlight-current="true"
        @node-contextmenu="showRightMenu"
        :filter-node-method="filterNode"
        @node-click="handleNodeClick"
        @check="handleCheck"
        class="damTree">
        <span class="custom-tree-node"
          slot-scope="{ node,data }">
          <span>{{ node.label }}</span>
          <template v-if='data.NodeInfo=="仪器类型"&&moduleName=="surveyPointManage"'>
            <span title="添加测点"
              @click.stop.prevent="() => append(node,data)"><Icon type="ios-add-circle-outline" size="20"/>
            </span>
          </template>
        </span></el-tree>
    </div>
    <!--<div v-show="menuVisible">
          <ul id="rightMenu">
              <li v-on:click="$emit('moduleOperation',clickNodeInfo)">{{moduleOperation}}</li>
            </ul>
        </div>-->
   <!-- <context-menu ref="ctxMenu">
      <li class='ctx-item'
        v-on:click="$emit('moduleOperation',clickNodeInfo)">
        <span class="cj-icon-extra-ruler ctx-menu-icon-item">{{rightMenuInfo}}</span></li>
    </context-menu>-->
  </div>
</template>
<script>
//import contextMenu from "@/components/common/xTree/rightClickMenu";
export default {
  name: "data-analysis-tree",
  /*components: {
    contextMenu
  },*/
  props: {
    moduleName: String,
    showCheckBox: Boolean,
    dataType: {
      type: String,
      default: "all"
    },
    isShowTitle: {
      type: Boolean,
      default: true
    },
    //是否将基准点添加到数组中
    isAddCrossPoint:{
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      treeData: [],
      treeDefaultProps: {
        children: "Child",
        label: "NodeName"
      },
      moduleOperation: "",
      clickNodeInfo: {},
      filterWords: "",
      rightMenuInfo: "",
      defaultExpandNode: []
    };
  },

  methods: {
    clearAll(){
      this.$refs.dataTree.setCurrentKey(null);
    },
    append(node,data){
      this.$emit("addPoint",data);
    },
    handleNodeClick(currentNode, node, tree) {
      console.log("this.moduleName", this.moduleName);
      if (
        this.moduleName == "dataCheck" ||
        this.moduleName == "surveyPointManage" ||
        this.moduleName == "pointSetting" ||
        this.moduleName == "warnAnalysis"||
        this.moduleName=="statisticValue"||
        this.moduleName=="measurePointGroup"
      ) {
        this.$emit("moduleOperation", currentNode);
      }
    },
    handleCheck(data, checked) {
      this.$emit("moduleCheck", data, checked);
    },
    filterNode(value, data) {
      if (!value) {
        return true;
      } else {
        return data.NodeName.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      }
    },
    showRightMenu(event, currentNode, node, tree) {
      /*if (this.moduleName == "surveyPointManage") {
        if (
          currentNode.NodeInfo == "仪器类型" ||
          currentNode.NodeInfo == "多点测点" ||
          currentNode.NodeInfo == "测点编号"
        ) {
          if (currentNode.NodeInfo == "仪器类型") {
            this.rightMenuInfo = "测点列表";
          } else {
            this.rightMenuInfo = "测点信息";
          }
          this.$refs.ctxMenu.open(event, node.data.node);
          this.clickNodeInfo = currentNode;
        }
      } else  if (
        this.moduleName == "warnAnalysis"
      ) {
        if (currentNode.NodeInfo == "仪器类型") {
          this.rightMenuInfo = "测点列表";
          this.$refs.ctxMenu.open(event, node.data.node);
          this.clickNodeInfo = currentNode;
        }
      }
      /*if(this.moduleName=="surveyPointManage"){
                if(currentNode.NodeInfo=="仪器类型"||currentNode.NodeInfo=="多点测点"||currentNode.NodeInfo=="测点编号"){
                        let menu = document.getElementById("rightMenu");*/
      /* 菜单定位基于鼠标点击位置 */
      /*menu.style.left = event.clientX -10 + "px" ;
                        menu.style.top = event.clientY -10 +"px";
                        this.moduleOperation="测点信息";
                        this.menuVisible=true;
                        this.clickNodeInfo=currentNode;
                }
          }*/
      console.log(event);
      console.log(currentNode);
      console.log(node);
      console.log(tree);
    },
    deployData(data) {
      console.log("deploy data", data);
      this.treeData = data[0].Child;
      let defaultExpandArray = [];
      //this.defaultExpandNode=['e619dbb5-2b07-41ba-a7e9-d5a0e69f9269','868e2b15-89f9-4c7c-baa6-aa288dbe5985','740c571c-4a70-48ab-b0f8-e436b9bd190d'];
      for (let i = 0; i < data.length; i++) {
        defaultExpandArray.push(data[i].NodeID);
        if (data[i].Child.length != 0) {
          for (let j = 0; j < data[i].Child.length; j++) {
            defaultExpandArray.push(data[i].Child[j].NodeID);
            if (data[i].Child[j].Child.length != 0) {
              for (let k = 0; k < data[i].Child[j].Child.length; k++) {
                defaultExpandArray.push(data[i].Child[j].Child[k].NodeID);
              }
            }
          }
        }
      }
      console.log("defaultExpandArray", defaultExpandArray);
      this.defaultExpandNode = defaultExpandArray;
    }
  },
  computed:{
   refeshTreeData:function(){
      return this.$store.getters.projectTree
    }
  },
  created() {
    let data = [];
    let extraData = {
      Instrument_Name: "基准点",
      IsEndNode: 0,
      NodeName: "基准点",
      SubProject_Name: "基准点",
      NodeID: "基准点",
      Child: [
        {
          Instrument_Name: "TN01",
          ParentNodeId: "基准点",
          NodeID: "TN01",
          IsEndNode: 1,
          NodeName: "TN01",
          SubProject_Name: "TN01",
          Child: []
        },
        {
          Instrument_Name: "TN02",
          NodeID: "TN02",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN02",
          SubProject_Name: "TN02",
          Child: []
        },
        {
          Instrument_Name: "TN03",
          NodeID: "TN03",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN03",
          SubProject_Name: "TN03",
          Child: []
        },
        {
          Instrument_Name: "TN04",
          NodeID: "TN04",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN04",
          SubProject_Name: "TN04",
          Child: []
        },
        {
          Instrument_Name: "TN05",
          NodeID: "TN05",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN05",
          SubProject_Name: "TN05",
          Child: []
        },
        {
          Instrument_Name: "TN06",
          NodeID: "TN06",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN06",
          SubProject_Name: "TN06",
          Child: []
        },
        {
          Instrument_Name: "TN08",
          NodeID: "TN08",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN08",
          SubProject_Name: "TN08",
          Child: []
        },
        {
          Instrument_Name: "TN09",
          NodeID: "TN09",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN09",
          SubProject_Name: "TN09",
          Child: []
        },
        {
          Instrument_Name: "TN12X",
          NodeID: "TN12X",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN12X",
          SubProject_Name: "TN12X",
          Child: []
        },
        {
          Instrument_Name: "TN13",
          NodeID: "TN13",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN13",
          SubProject_Name: "TN13",
          Child: []
        },
        {
          Instrument_Name: "TN14L",
          NodeID: "TN14L",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN14L",
          SubProject_Name: "TN14L",
          Child: []
        },
        {
          Instrument_Name: "TN16",
          NodeID: "TN16",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN16",
          SubProject_Name: "TN16",
          Child: []
        },
        {
          Instrument_Name: "TN17",
          NodeID: "TN17",
          ParentNodeId: "基准点",
          IsEndNode: 1,
          NodeName: "TN17",
          SubProject_Name: "TN17",
          Child: []
        }
      ]
    };
    if (this.dataType == "all") {
      data = this.$store.getters.projectTree;
     /* if(this.isAddCrossPoint){
        console.log('isAddCrossPoint', this.isAddCrossPoint);
        data[0].Child = data[0].Child.concat(extraData);
      }*/
    } else if (this.dataType == "auto") {
      data = this.$store.getters.autoTree;
      data[0].Child[0].Child.splice(0, 1);
      data[0].Child[0].Child.splice(-1, 1);

      data[0].Child[1].Child.splice(0, 1);
    }

    this.deployData(data);

    // this.$$http("Get_Tree_Data", {}).then(data => {
    //   this.treeData = data.data[0].Child;
    //   let defaultExpandArray = [];
    //   //this.defaultExpandNode=['e619dbb5-2b07-41ba-a7e9-d5a0e69f9269','868e2b15-89f9-4c7c-baa6-aa288dbe5985','740c571c-4a70-48ab-b0f8-e436b9bd190d'];
    //   for (let i = 0; i < data.data.length; i++) {
    //     defaultExpandArray.push(data.data[i].NodeID);
    //     if (data.data[i].Child.length != 0) {
    //       for (let j = 0; j < data.data[i].Child.length; j++) {
    //         defaultExpandArray.push(data.data[i].Child[j].NodeID);
    //         if (data.data[i].Child[j].Child.length != 0) {
    //           for (let k = 0; k < data.data[i].Child[j].Child.length; k++) {
    //             defaultExpandArray.push(data.data[i].Child[j].Child[k].NodeID);
    //           }
    //         }
    //       }
    //     }
    //   }
    //   this.defaultExpandNode = defaultExpandArray;
    // });
  },
  watch: {
    filterWords(val) {
      this.$refs.dataTree.filter(val);
    },
    refeshTreeData(val){
      this.deployData(val);
    }
  }
};
</script>
<style lang="scss" scoped>
.treeComponent {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  .treeTitle {
    height: 48px;
    background-color: #dde8fa;
    padding-left: 20px;
    letter-spacing: 1px;
    line-height: 50px;
  }
  .filter-wrapper {
    margin: 15px;
    .filterWords {
      height: 100%;
      width: 100%;
    }
  }
  .eleTree {
    flex: 1;
    overflow-y: auto;
    .damTree {
      margin-left: 15px;
      height:672px;
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
}
</style>