'use strict'

const v1 = {
    js_native_api_symbols: [
        'napi_adjust_external_memory',
        'napi_call_function',
        'napi_close_escapable_handle_scope',
        'napi_close_handle_scope',
        'napi_coerce_to_bool',
        'napi_coerce_to_number',
        'napi_coerce_to_object',
        'napi_coerce_to_string',
        'napi_create_array',
        'napi_create_array_with_length',
        'napi_create_arraybuffer',
        'napi_create_dataview',
        'napi_create_double',
        'napi_create_error',
        'napi_create_external',
        'napi_create_external_arraybuffer',
        'napi_create_function',
        'napi_create_int32',
        'napi_create_int64',
        'napi_create_object',
        'napi_create_promise',
        'napi_create_range_error',
        'napi_create_reference',
        'napi_create_string_latin1',
        'napi_create_string_utf16',
        'napi_create_string_utf8',
        'napi_create_symbol',
        'napi_create_type_error',
        'napi_create_typedarray',
        'napi_create_uint32',
        'napi_define_class',
        'napi_define_properties',
        'napi_delete_element',
        'napi_delete_property',
        'napi_delete_reference',
        'napi_escape_handle',
        'napi_get_and_clear_last_exception',
        'napi_get_array_length',
        'napi_get_arraybuffer_info',
        'napi_get_boolean',
        'napi_get_cb_info',
        'napi_get_dataview_info',
        'napi_get_element',
        'napi_get_global',
        'napi_get_last_error_info',
        'napi_get_named_property',
        'napi_get_new_target',
        'napi_get_null',
        'napi_get_property',
        'napi_get_property_names',
        'napi_get_prototype',
        'napi_get_reference_value',
        'napi_get_typedarray_info',
        'napi_get_undefined',
        'napi_get_value_bool',
        'napi_get_value_double',
        'napi_get_value_external',
        'napi_get_value_int32',
        'napi_get_value_int64',
        'napi_get_value_string_latin1',
        'napi_get_value_string_utf16',
        'napi_get_value_string_utf8',
        'napi_get_value_uint32',
        'napi_get_version',
        'napi_has_element',
        'napi_has_named_property',
        'napi_has_own_property',
        'napi_has_property',
        'napi_instanceof',
        'napi_is_array',
        'napi_is_arraybuffer',
        'napi_is_dataview',
        'napi_is_error',
        'napi_is_exception_pending',
        'napi_is_promise',
        'napi_is_typedarray',
        'napi_new_instance',
        'napi_open_escapable_handle_scope',
        'napi_open_handle_scope',
        'napi_reference_ref',
        'napi_reference_unref',
        'napi_reject_deferred',
        'napi_remove_wrap',
        'napi_resolve_deferred',
        'napi_run_script',
        'napi_set_element',
        'napi_set_named_property',
        'napi_set_property',
        'napi_strict_equals',
        'napi_throw',
        'napi_throw_error',
        'napi_throw_range_error',
        'napi_throw_type_error',
        'napi_typeof',
        'napi_unwrap',
        'napi_wrap'
    ],
    node_api_symbols: [
        'napi_async_destroy',
        'napi_async_init',
        'napi_cancel_async_work',
        'napi_create_async_work',
        'napi_create_buffer',
        'napi_create_buffer_copy',
        'napi_create_external_buffer',
        'napi_delete_async_work',
        'napi_fatal_error',
        'napi_get_buffer_info',
        'napi_get_node_version',
        'napi_is_buffer',
        'napi_make_callback',
        'napi_module_register',
        'napi_queue_async_work'
    ]
}

const v2 = {
    js_native_api_symbols: [
        ...v1.js_native_api_symbols
    ],
    node_api_symbols: [
        ...v1.node_api_symbols,
        'napi_get_uv_event_loop'
    ]
}

const v3 = {
    js_native_api_symbols: [
        ...v2.js_native_api_symbols
    ],
    node_api_symbols: [
        ...v2.node_api_symbols,
        'napi_add_env_cleanup_hook',
        'napi_close_callback_scope',
        'napi_fatal_exception',
        'napi_open_callback_scope',
        'napi_remove_env_cleanup_hook'
    ]
}

const v4 = {
    js_native_api_symbols: [
        ...v3.js_native_api_symbols
    ],
    node_api_symbols: [
        ...v3.node_api_symbols,
        'napi_acquire_threadsafe_function',
        'napi_call_threadsafe_function',
        'napi_create_threadsafe_function',
        'napi_get_threadsafe_function_context',
        'napi_ref_threadsafe_function',
        'napi_release_threadsafe_function',
        'napi_unref_threadsafe_function'
    ]
}

const v5 = {
    js_native_api_symbols: [
        ...v4.js_native_api_symbols,
        'napi_add_finalizer',
        'napi_create_date',
        'napi_get_date_value',
        'napi_is_date'
    ],
    node_api_symbols: [
        ...v4.node_api_symbols
    ]
}

const v6 = {
    js_native_api_symbols: [
        ...v5.js_native_api_symbols,
        'napi_create_bigint_int64',
        'napi_create_bigint_uint64',
        'napi_create_bigint_words',
        'napi_get_all_property_names',
        'napi_get_instance_data',
        'napi_get_value_bigint_int64',
        'napi_get_value_bigint_uint64',
        'napi_get_value_bigint_words',
        'napi_set_instance_data'
    ],
    node_api_symbols: [
        ...v5.node_api_symbols
    ]
}

const v7 = {
    js_native_api_symbols: [
        ...v6.js_native_api_symbols,
        'napi_detach_arraybuffer',
        'napi_is_detached_arraybuffer'
    ],
    node_api_symbols: [
        ...v6.node_api_symbols
    ]
}

const v8 = {
    js_native_api_symbols: [
        ...v7.js_native_api_symbols,
        'napi_check_object_type_tag',
        'napi_object_freeze',
        'napi_object_seal',
        'napi_type_tag_object'
    ],
    node_api_symbols: [
        ...v7.node_api_symbols,
        'napi_add_async_cleanup_hook',
        'napi_remove_async_cleanup_hook'
    ]
}

const experimental = {
    js_native_api_symbols: [
        ...v8.js_native_api_symbols,
        'node_api_create_syntax_error',
        'node_api_symbol_for',
        'node_api_throw_syntax_error'
    ],
    node_api_symbols: [
        ...v8.node_api_symbols,
        'node_api_get_module_file_name'
    ]
}

module.exports = {
    v1,
    v2,
    v3,
    v4,
    v5,
    v6,
    v7,
    v8,
    experimental
}
