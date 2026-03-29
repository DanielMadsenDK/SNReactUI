import '@servicenow/sdk/global'

declare global {
    namespace Now {
        namespace Internal {
            interface Keys extends KeysRegistry {
                explicit: {
                    bom_json: {
                        table: 'sys_module'
                        id: '6081cde3ac744acc97fb21d7cb2ca984'
                    }
                    package_json: {
                        table: 'sys_module'
                        id: '6ab387362b07447c8b8fbfc900028ba3'
                    }
                    'showcase.menu': {
                        table: 'sys_app_application'
                        id: '9c4a9e98700f44abb0aca3ee9eb688e2'
                    }
                    'showcase.module': {
                        table: 'sys_app_module'
                        id: '0605072b58b04309872c4aee026905c4'
                    }
                }
                composite: [
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '01913804ad924737a5d54efb56479c64'
                        deleted: true
                        key: {
                            application_file: 'b2d7deae2edf4241bf1c0f26e9d50995'
                            source_artifact: 'ad171063796e48f9a20ec317fde5963f'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '0402e8d09a43473a8f9be3151090c5af'
                        key: {
                            application_file: '18b752ab1fd14f74864892ca176cc221'
                            source_artifact: '4e8c20c168e14ecfba2eb52c82dae75a'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '0df6a30a161849809fdd6368b3b7d584'
                        key: {
                            endpoint: 'x_1118332_re_ui_ui_showcase.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: '15224a9fc27847718e1a2c509993d9d8'
                        key: {
                            application_file: '0df6a30a161849809fdd6368b3b7d584'
                            source_artifact: '4e8c20c168e14ecfba2eb52c82dae75a'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: '18b752ab1fd14f74864892ca176cc221'
                        key: {
                            name: 'x_1118332_re_ui/main'
                        }
                    },
                    {
                        table: 'sys_ui_page'
                        id: '3c0d8cc0051446ee8ef29e6a51d6aea8'
                        deleted: true
                        key: {
                            endpoint: 'x_1118332_re_ui_incident_manager.do'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: '4e8c20c168e14ecfba2eb52c82dae75a'
                        key: {
                            name: 'x_1118332_re_ui_ui_showcase.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact'
                        id: 'ad171063796e48f9a20ec317fde5963f'
                        deleted: true
                        key: {
                            name: 'x_1118332_re_ui_incident_manager.do - BYOUI Files'
                        }
                    },
                    {
                        table: 'sys_ux_lib_asset'
                        id: 'b2d7deae2edf4241bf1c0f26e9d50995'
                        key: {
                            name: 'x_1118332_re_ui/main.js.map'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'bf1c2fb60d3a484789f45d0da89612ef'
                        deleted: true
                        key: {
                            application_file: '3c0d8cc0051446ee8ef29e6a51d6aea8'
                            source_artifact: 'ad171063796e48f9a20ec317fde5963f'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'eaa263eb5770458baf341a7e79810df1'
                        key: {
                            application_file: 'b2d7deae2edf4241bf1c0f26e9d50995'
                            source_artifact: '4e8c20c168e14ecfba2eb52c82dae75a'
                        }
                    },
                    {
                        table: 'sn_glider_source_artifact_m2m'
                        id: 'f721a03a4b2d48fa8ccd63f21d1ad984'
                        deleted: true
                        key: {
                            application_file: '18b752ab1fd14f74864892ca176cc221'
                            source_artifact: 'ad171063796e48f9a20ec317fde5963f'
                        }
                    },
                ]
            }
        }
    }
}
