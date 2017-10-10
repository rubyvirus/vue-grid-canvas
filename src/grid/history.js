export default {
    data() {
        return {
            history: [],
            historyIndex: 0,
            currentStateValue: null,
        }
    },
    created() {
        this.$on('history_back', () => {
            if (this.historyIndex >= 0) {
                const needBackValue = this.history[this.historyIndex]
                if (needBackValue.type === 'edit') {
                    this.saveItem(needBackValue.before, false)
                    this.focusCellByOriginCell(this.getCellByRowAndKey(needBackValue.before.index, needBackValue.before.key))
                    this.selectArea = null
                    this.isSelect = false
                } else if (needBackValue.type === 'editMore') {
                    this.$emit('updateValue', this.saveItems(needBackValue.before, false))
                    this.focusCell = needBackValue.focusCell
                    this.rowFocus = {
                        cellX: this.focusCell.x,
                        cellY: this.focusCell.y,
                        rowIndex: this.focusCell.rowIndex,
                        offset: { ...this.offset },
                    }
                    this.paintFocusCell(this.focusCell)
                    this.selectArea = needBackValue.selectArea
                    this.isSelect = true
                    this.rePainted()
                }
                this.historyIndex -= 1
            }
        })
        this.$on('history_forward', () => {
            if (this.historyIndex !== this.history.length - 1) {
                this.historyIndex += 1
                const needforwardValue = this.history[this.historyIndex]
                if (needforwardValue.type === 'edit') {
                    this.saveItem(needforwardValue.after, false)
                    this.focusCellByOriginCell(this.getCellByRowAndKey(needforwardValue.after.index, needforwardValue.after.key))
                }
            }
        })
    },
    methods: {
        pushState(data) {
            this.history = this.history.slice(0, this.historyIndex + 1)
            this.history.push(data)
            if (this.history.length > 20) {
                this.history.splice(0, 1)
            }
            this.historyIndex = this.history.length - 1
        },
    },
}
