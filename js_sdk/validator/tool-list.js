// 表单校验规则由 schema2code 生成，不建议直接修改校验规则，而建议通过 schema2code 生成, 详情: https://uniapp.dcloud.net.cn/uniCloud/schema


const validator = {
  "name": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "名称："
  },
  "type": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "页面",
            "value": 0
          },
          {
            "text": "外链",
            "value": 1
          }
        ]
      }
    ],
    "label": "类型：",
    "defaultValue": 0
  },
  "icon": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "图标："
  },
  "path": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "路径："
  },
  "url": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "路径："
  },
  "permissionType": {
    "rules": [
      {
        "format": "int"
      },
      {
        "range": [
          {
            "text": "无需权限",
            "value": 0
          },
          {
            "text": "需权限",
            "value": 1
          }
        ]
      }
    ],
    "label": "权限类型：",
    "defaultValue": 0
  },
  "permission": {
    "rules": [
      {
        "format": "string"
      }
    ],
    "label": "权限："
  }
}

const enumConverter = {
  "type_valuetotext": {
    "0": "页面",
    "1": "外链"
  },
  "permissionType_valuetotext": {
    "0": "无需权限",
    "1": "需权限"
  }
}

function filterToWhere(filter, command) {
  let where = {}
  for (let field in filter) {
    let { type, value } = filter[field]
    switch (type) {
      case "search":
        if (typeof value === 'string' && value.length) {
          where[field] = new RegExp(value)
        }
        break;
      case "select":
        if (value.length) {
          let selectValue = []
          for (let s of value) {
            selectValue.push(command.eq(s))
          }
          where[field] = command.or(selectValue)
        }
        break;
      case "range":
        if (value.length) {
          let gt = value[0]
          let lt = value[1]
          where[field] = command.and([command.gte(gt), command.lte(lt)])
        }
        break;
      case "date":
        if (value.length) {
          let [s, e] = value
          let startDate = new Date(s)
          let endDate = new Date(e)
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
      case "timestamp":
        if (value.length) {
          let [startDate, endDate] = value
          where[field] = command.and([command.gte(startDate), command.lte(endDate)])
        }
        break;
    }
  }
  return where
}

export { validator, enumConverter, filterToWhere }
