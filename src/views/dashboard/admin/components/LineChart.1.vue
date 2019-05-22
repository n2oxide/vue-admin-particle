<template>
  <div :class="className" :style="{ width:width, height:height }" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/vintage')
// import { debounce } from '@/utils'

export default {
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '350px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true,
      validator: function(val) {
        return typeof val !== 'undefined'
      }
    }
  },
  data() {
    return {
      chart: null
    }
  },
  // 监听数据变化，并重新配置图像
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val)
      }
    }
  },
  // create vm.$el and replace 'el' with it. 即将组件挂载到节点后调用
  mounted() {
    // $nextTick() virtual DOM 重新加载后，再执行初始化
    this.$nextTick(() => {
      this.initEchart()
    })
  },
  methods: {
    // {a,b} = {} will not work
    setOptions({ expectedData, actualData } = {}) {
      this.chart.setOption({
        xAxis: {
          data: [
            '星期一',
            '星期二',
            '星期三',
            '星期四',
            '星期五',
            '星期六',
            '星期日'
          ],
          boundaryGap: false,
          axisTick: {
            show: false
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10]
        },
        yAxis: {
          axisTick: {
            show: false
          }
        },
        legend: {
          data: ['dataA', 'dataB']
        },
        series: [
          {
            name: 'A',
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: actualData,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'B',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: expectedData,
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    },
    initEchart() {
      console.log(this.chartData)
      this.chart = echarts.init(this.$el, 'vintage')
      this.setOptions(this.chartData)
    }
  }
}
</script>
