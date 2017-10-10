<template>
    <label :class="wrapClasses">
        <span :class="checkboxClasses">
            <span :class="innerClasses"></span>
            <input type="checkbox" :class="inputClasses" :disabled="disabled" :checked="currentValue" @on-change="change">
        </span>
        <slot></slot>
    </label>
</template>
<script>

const prefixCls = 'ivu-checkbox'

export default {
    name: 'Checkbox',
    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        value: {
            type: [String, Number, Boolean],
            default: false,
        },
        label: {
            type: [String, Number, Boolean],
        },
        indeterminate: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            model: [],
            currentValue: this.value,
        }
    },
    computed: {
        wrapClasses() {
            return [
                `${prefixCls}-wrapper`,
                {
                    [`${prefixCls}-wrapper-checked`]: this.currentValue,
                    [`${prefixCls}-wrapper-disabled`]: this.disabled,
                },
            ]
        },
        checkboxClasses() {
            return [
                `${prefixCls}`,
                {
                    [`${prefixCls}-checked`]: this.currentValue,
                    [`${prefixCls}-disabled`]: this.disabled,
                    [`${prefixCls}-indeterminate`]: this.indeterminate,
                },
            ]
        },
        innerClasses() {
            return `${prefixCls}-inner`
        },
        inputClasses() {
            return `${prefixCls}-input`
        },
    },
    mounted() {
        this.updateModel()
        this.showSlot = this.$slots.default !== undefined
    },
    methods: {
        change(event) {
            if (this.disabled) {
                return false
            }

            const checked = event.target.checked
            this.currentValue = checked
            this.$emit('input', checked)

            this.$emit('on-change', checked)
            return null
        },
        updateModel() {
            this.currentValue = this.value
        },
    },
    watch: {
        value() {
            this.updateModel()
        },
    },
}
</script>
