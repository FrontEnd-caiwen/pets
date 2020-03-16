Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: [
      {
      pagePath: "/index",
      iconPath: "./image/icon_component.png",
      selectedIconPath: "./image/icon_component_HL.png",
      text: "养宠"
      }, 
      {
      pagePath: "/index",
      iconPath: "./image/icon_component.png",
      selectedIconPath: "./image/icon_component_HL.png",
      text: "医院"
      }, 
      {
      pagePath: "/index",
      iconPath: "./image/icon_component.png",
      selectedIconPath: "./image/icon_component_HL.png",
      text: "商城"
      }, 
      {
      pagePath: "/index",
      iconPath: "./image/icon_component.png",
      selectedIconPath: "./image/icon_component_HL.png",
      text: "宠圈"
      }, 
      {
        pagePath: "/index",
        iconPath: "./image/icon_API.png",
        selectedIconPath: "./image/icon_API_HL.png",
        text: "我的"
      }
  ]
  },
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})