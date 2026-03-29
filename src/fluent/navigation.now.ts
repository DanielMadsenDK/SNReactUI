import '@servicenow/sdk/global'
import { ApplicationMenu, Record } from '@servicenow/sdk/core'

export const menu = ApplicationMenu({
  $id: Now.ID['showcase.menu'],
  title: 'UI Components Showcase',
  hint: 'Demonstrates ServiceNow Horizon Design System React components',
})

Record({
  $id: Now.ID['showcase.module'],
  table: 'sys_app_module',
  data: {
    title: 'Component Showcase',
    application: menu,
    active: true,
    link_type: 'DIRECT',
    query: 'x_1118332_re_ui_ui_showcase.do',
    order: 100,
    hint: 'Open the ServiceNow React Components Showcase',
  },
})
