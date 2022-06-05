import { reactive, ref } from "vue"

export class Emitter {
  // 响应式的数据中心
  private state = reactive({})
  private events: any = ref({})

  // 用于注册事件
  on(eventName: string, eventHandle: Function) {
    this.events[eventName] = eventHandle
    // console.log(`this.event.on====`, this.events)
  }

  // 删除事件
  off(eventName: string) {
    if (this.events[eventName]) {
      delete this.events[eventName]
    }
  }

  // 触发事件
  emit(eventName: string, ...rest: any[]) {
    // console.log(`this.event.emit====`, this.events)
    if (this.events[eventName]) {
      this.events[eventName](...rest)
    }
  }
}
