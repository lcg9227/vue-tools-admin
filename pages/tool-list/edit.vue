<template>
  <view class="uni-container">
    <uni-forms ref="form" :model="formData" validateTrigger="bind">
      <uni-forms-item name="name" label="名称：">
        <uni-easyinput placeholder="名称" v-model="formData.name"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="type" label="类型：">
        <uni-data-checkbox v-model="formData.type" :localdata="formOptions.type_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="icon" label="图标：">
        <uni-easyinput placeholder="icon" v-model="formData.icon"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="path" label="路径：">
        <uni-easyinput placeholder="路径(内部页面路径)" v-model="formData.path"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="url" label="路径：">
        <uni-easyinput placeholder="路径(外链使用)" v-model="formData.url"></uni-easyinput>
      </uni-forms-item>
      <uni-forms-item name="permissionType" label="权限类型：">
        <uni-data-checkbox v-model="formData.permissionType" :localdata="formOptions.permissionType_localdata"></uni-data-checkbox>
      </uni-forms-item>
      <uni-forms-item name="permission" label="权限：">
        <uni-data-checkbox v-model="formData.permission" collection="uni-id-permissions" field="permission_name as text, permission_id as value"></uni-data-checkbox>
      </uni-forms-item>
      <view class="uni-button-group">
        <button type="primary" class="uni-button" style="width: 100px;" @click="submit">提交</button>
        <navigator open-type="navigateBack" style="margin-left: 15px;">
          <button class="uni-button" style="width: 100px;">返回</button>
        </navigator>
      </view>
    </uni-forms>
  </view>
</template>

<script>
  import { validator } from '../../js_sdk/validator/tool-list.js';

  const db = uniCloud.database();
  const dbCmd = db.command;
  const dbCollectionName = 'tool-list';

  function getValidator(fields) {
    let result = {}
    for (let key in validator) {
      if (fields.includes(key)) {
        result[key] = validator[key]
      }
    }
    return result
  }

  

  export default {
    data() {
      let formData = {
        "name": "",
        "type": 0,
        "icon": "",
        "path": "",
        "url": "",
        "permissionType": 0,
        "permission": ""
      }
      return {
        formData,
        formOptions: {
          "type_localdata": [
            {
              "text": "页面",
              "value": 0
            },
            {
              "text": "外链",
              "value": 1
            }
          ],
          "permissionType_localdata": [
            {
              "text": "无需权限",
              "value": 0
            },
            {
              "text": "需权限",
              "value": 1
            }
          ]
        },
        rules: {
          ...getValidator(Object.keys(formData))
        }
      }
    },
    onLoad(e) {
      if (e.id) {
        const id = e.id
        this.formDataId = id
        this.getDetail(id)
      }
    },
    onReady() {
      this.$refs.form.setRules(this.rules)
    },
    methods: {
      
      /**
       * 验证表单并提交
       */
      submit() {
        uni.showLoading({
          mask: true
        })
        this.$refs.form.validate().then((res) => {
          return this.submitForm(res)
        }).catch(() => {
        }).finally(() => {
          uni.hideLoading()
        })
      },

      /**
       * 提交表单
       */
      submitForm(value) {
        // 使用 clientDB 提交数据
        return db.collection(dbCollectionName).doc(this.formDataId).update(value).then((res) => {
          uni.showToast({
            title: '修改成功'
          })
          this.getOpenerEventChannel().emit('refreshData')
          setTimeout(() => uni.navigateBack(), 500)
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        })
      },

      /**
       * 获取表单数据
       * @param {Object} id
       */
      getDetail(id) {
        uni.showLoading({
          mask: true
        })
        db.collection(dbCollectionName).doc(id).field("name,type,icon,path,url,permissionType,permission").get().then((res) => {
          const data = res.result.data[0]
          if (data) {
            this.formData = data
            
          }
        }).catch((err) => {
          uni.showModal({
            content: err.message || '请求服务失败',
            showCancel: false
          })
        }).finally(() => {
          uni.hideLoading()
        })
      }
    }
  }
</script>
