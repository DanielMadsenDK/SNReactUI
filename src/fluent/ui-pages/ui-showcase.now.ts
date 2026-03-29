import '@servicenow/sdk/global'
import { UiPage } from '@servicenow/sdk/core'
import showcasePage from '../../client/index.html'

UiPage({
    $id: Now.ID['ui-showcase-page'],
    endpoint: 'x_1118332_re_ui_ui_showcase.do',
    description: 'ServiceNow React Components Showcase',
    category: 'general',
    html: showcasePage,
    direct: true,
})
